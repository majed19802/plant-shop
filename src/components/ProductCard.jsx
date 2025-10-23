import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export default function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const isAdded = items.some((i) => i.id === plant.id);

  const handleAdd = () => {
    dispatch(addItem(plant));
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
      <img src={plant.image} alt={plant.name} className="w-40 h-40 object-cover rounded-lg mb-3" />
      <h3 className="font-semibold text-lg">{plant.name}</h3>
      <p className="text-green-700 font-medium mb-3">${plant.price}</p>
      <button
        onClick={handleAdd}
        disabled={isAdded}
        className={`px-4 py-2 rounded-lg text-white font-semibold transition ${
          isAdded ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {isAdded ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
