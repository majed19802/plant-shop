import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { plants } from '../data/plants';
import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import './ProductListingPage.css';

function ProductListingPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  const categories = [...new Set(plants.map(plant => plant.category))];

  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <>
      <Header />
      <div className="product-listing">
        <h1 className="page-title">Our Plants Collection</h1>
        {categories.map(category => (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="plants-grid">
              {plants
                .filter(plant => plant.category === category)
                .map(plant => (
                  <PlantCard
                    key={plant.id}
                    plant={plant}
                    isInCart={isInCart(plant.id)}
                    onAddToCart={() => handleAddToCart(plant)}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductListingPage;
