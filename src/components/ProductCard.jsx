import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(product);
  };

  return (
    <Link to={`/product/${product._id}`}>
      <div className="group rounded-2xl border bg-white p-4">

        {/* Discount Badge */}
        <span className="absolute rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          -20%
        </span>

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="float-right rounded-full bg-white p-2 shadow"
        >
          <FiHeart size={18} />
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-60 w-full object-contain transition duration-300 group-hover:scale-110"
        />

        {/* Product Name */}
        <h3 className="mt-4 text-xl font-bold">
          {product.name}
        </h3>

        {/* Rating */}
        <p className="mt-2 text-yellow-500">
          ⭐ {product.rating}
        </p>

        {/* Price */}
        <div className="mt-2 flex items-center gap-3">
          <span className="text-2xl font-bold text-indigo-600">
            ₹{product.price}
          </span>

          <span className="text-gray-400 line-through">
            ₹{Math.round(product.price * 1.2)}
          </span>
        </div>

        {/* Add To Cart */}
        <button
          onClick={handleAddToCart}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          <FiShoppingCart />
          Add To Cart
        </button>

      </div>
    </Link>
  );
}