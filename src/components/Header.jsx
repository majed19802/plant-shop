import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="bg-green-800 text-white px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        🌿 GreenLeaf
      </Link>
      <nav className="flex items-center gap-6">
        <Link to="/products" className="hover:underline">
          Products
        </Link>
        <Link to="/cart" className="relative">
          🛒
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs rounded-full px-2 py-0.5">
              {totalQuantity}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
