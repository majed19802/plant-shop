import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import './ShoppingCartPage.css';

function ShoppingCartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalQuantity, totalCost } = useSelector(state => state.cart);

  return (
    <>
      <Header />
      <div className="shopping-cart-page">
        <h1>Shopping Cart</h1>
        
        {items.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button onClick={() => navigate('/products')} className="btn-continue">
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <p><strong>Total Items:</strong> {totalQuantity}</p>
              <p><strong>Total Cost:</strong> ${totalCost.toFixed(2)}</p>
            </div>

            <div className="cart-items-list">
              {items.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrement={() => dispatch(incrementQuantity(item.id))}
                  onDecrement={() => dispatch(decrementQuantity(item.id))}
                  onRemove={() => dispatch(removeItem(item.id))}
                />
              ))}
            </div>

            <div className="cart-actions">
              <button onClick={() => navigate('/products')} className="btn-continue">
                Continue Shopping
              </button>
              <button onClick={() => alert('Coming Soon')} className="btn-checkout">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ShoppingCartPage;
