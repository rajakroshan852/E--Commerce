import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h1 className="text-center text-3xl mt-20">Product Not Found</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
      {/* Product Image */}
      <div className="bg-gray-100 rounded-2xl p-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[500px] object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-5xl font-bold">{product.name}</h1>

        <p className="text-yellow-500 text-xl mt-4">⭐ {product.rating}</p>

        <div className="mt-5 flex items-center gap-4">
          <span className="text-4xl font-bold text-indigo-600">
            ₹{product.price}
          </span>

          <span className="text-2xl text-gray-400 line-through">
            ₹{Math.round(product.price * 1.2)}
          </span>

          <span className="rounded bg-red-500 px-2 py-1 text-sm text-white">
            20% OFF
          </span>
        </div>

        <p className="mt-6 leading-8 text-gray-600">
          Experience premium quality with elegant design, high performance, and
          long-lasting durability. Perfect for everyday use.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <button className="h-10 w-10 rounded border">-</button>

          <span className="text-xl font-bold">1</span>

          <button className="h-10 w-10 rounded border">+</button>
        </div>
        <button className="mt-6 rounded-xl border px-6 py-3 hover:bg-pink-50">
          ❤️ Add to Wishlist
        </button>
        <div className="mt-8 flex gap-4">
          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl"
          >
            Add To Cart
          </button>

          <button className="border border-gray-400 px-8 py-4 rounded-xl hover:bg-gray-100">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
