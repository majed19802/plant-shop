import plants from "../data/plants";
import ProductCard from "../components/ProductCard";

export default function ProductListingPage() {
  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-800 text-center">Our Plants</h1>

      {categories.map((cat) => (
        <div key={cat} className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">{cat}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {plants
              .filter((p) => p.category === cat)
              .map((plant) => (
                <ProductCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
