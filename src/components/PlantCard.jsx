import './PlantCard.css';

function PlantCard({ plant, isInCart, onAddToCart }) {
  return (
    <div className="plant-card">
      <div className="plant-image-wrapper">
        <img src={plant.thumbnail} alt={plant.name} className="plant-image" />
      </div>
      <div className="plant-info">
        <h4 className="plant-name">{plant.name}</h4>
        <p className="plant-price">${plant.price}</p>
        <button 
          onClick={onAddToCart} 
          disabled={isInCart}
          className={`btn-cart ${isInCart ? 'disabled' : ''}`}
        >
          {isInCart ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default PlantCard;
