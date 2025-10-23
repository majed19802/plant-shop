import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, deleteItem } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-700">Your cart is empty 🪴</h2>
        <Link
          to="/products"
          className="text-white bg-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-green-800 text-center">Your Shopping Cart</h1>

      {/* Summary */}
      <div className="flex justify-between mb-4 text-lg">
        <p>Total items: <span className="font-semibold">{totalQuantity}</span></p>
        <p>Total price: <span className="font-semibold">${totalPrice.toFixed(2)}</span></p>
      </div>

      {/* Cart items */}
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white shadow rounded-xl p-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-green-700">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(decrease(item.id))}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                −
              </button>
              <span className="font-semibold w-6 text-center">{item.quantity}</span>
              <button
                onClick={() => dispatch(increase(item.id))}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>

              <button
                onClick={() => dispatch(deleteItem(item.id))}
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-8">
        <Link
          to="/products"
          className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
        >
          Continue Shopping
        </Link>
        <button
          onClick={() => alert("Coming Soon 🚀")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
