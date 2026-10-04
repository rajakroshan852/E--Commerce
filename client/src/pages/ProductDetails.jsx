import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getProductById } from "../api/authApi";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductById(id);
        setProduct(res.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-20 text-xl">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">
          Product not found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid gap-10 md:grid-cols-2">

        {/* Product Image */}
        <div className="flex items-center justify-center rounded-2xl border p-8">
          <img
            src={product.image}
            alt={product.name}
            className="h-96 w-full object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">
          <p className="text-indigo-600 font-semibold">
            {product.category}
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {product.name}
          </h1>

          <p className="mt-4 text-yellow-500 text-lg">
            ⭐ {product.rating}
          </p>

          <p className="mt-5 text-3xl font-bold text-indigo-600">
            ₹{product.price}
          </p>

          <p className="mt-6 text-gray-600 leading-7">
            {product.description}
          </p>

          <p className="mt-5 font-semibold">
            Stock:{" "}
            <span className="text-green-600">
              {product.stock}
            </span>
          </p>

          <button
            onClick={() => {
              addToCart(product);
              alert("Product added to cart!");
            }}
            disabled={product.stock <= 0}
            className="mt-8 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white hover:bg-indigo-700 disabled:bg-gray-400"
          >
            {product.stock > 0
              ? "Add To Cart"
              : "Out of Stock"}
          </button>
        </div>

      </div>
    </div>
  );
}