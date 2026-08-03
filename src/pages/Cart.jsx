import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 border rounded-xl p-5 shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-contain"
                />

                <div className="flex-1">
                  <h2 className="text-2xl font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-indigo-600 font-bold mt-2">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="border rounded px-3 py-1"
                    >
                      -
                    </button>

                    <span className="font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="border rounded px-3 py-1"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t pt-6">
            <h2 className="text-3xl font-bold">
              Total: ₹{totalPrice}
            </h2>

            <button className="mt-6 bg-indigo-600 text-white px-8 py-4 rounded-xl">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}