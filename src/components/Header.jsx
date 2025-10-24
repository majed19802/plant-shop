import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const location = useLocation();

  if (location.pathname === '/') return null;

  return (
    <header className="header">
      <div className="header-content">
        <h2 className="logo">Paradise Nursery</h2>
        <nav className="nav">
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="cart-link">
            <span className="cart-icon">🛒</span>
            {totalQuantity > 0 && (
              <span className="cart-badge">{totalQuantity}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
