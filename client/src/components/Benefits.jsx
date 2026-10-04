import { FiTruck, FiShield, FiRefreshCw } from "react-icons/fi";

export default function Benefits() {
  const benefits = [
    {
      icon: <FiTruck size={40} />,
      title: "Free Shipping",
      description: "Free delivery on all orders.",
    },
    {
      icon: <FiShield size={40} />,
      title: "Secure Payment",
      description: "100% secure online payment.",
    },
    {
      icon: <FiRefreshCw size={40} />,
      title: "Easy Returns",
      description: "7-day easy return policy.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-8 text-center"
          >
            <div className="flex justify-center text-indigo-600 mb-4">
              {item.icon}
            </div>
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-gray-500 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}