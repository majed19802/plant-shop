import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')" }}
    >
      <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-4">
        Welcome to GreenLeaf 🌿
      </h1>
      <p className="text-lg text-white max-w-md mb-6 drop-shadow">
        We provide a wide range of beautiful houseplants to bring nature closer to your home.
      </p>
      <Link
        to="/products"
        className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
      >
        Get Started
      </Link>
    </div>
  );
}
