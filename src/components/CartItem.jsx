import './CartItem.css';

function CartItem({ item, onIncrement, onDecrement, onRemove }) {
  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p className="unit-price">Unit Price: ${item.price}</p>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-controls">
          <button onClick={onDecrement} className="btn-quantity">-</button>
          <span className="quantity">{item.quantity}</span>
          <button onClick={onIncrement} className="btn-quantity">+</button>
        </div>
        <button onClick={onRemove} className="btn-delete">Delete</button>
      </div>
      <div className="cart-item-subtotal">
        <p>${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartItem;
