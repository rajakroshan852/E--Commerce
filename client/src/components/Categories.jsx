const categories = [
  "Electronics",
  "Fashion",
  "Shoes",
  "Watches",
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-10">
        Categories
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {categories.map((item) => (
          <div
            key={item}
            className="bg-gray-100 rounded-xl p-10 text-center text-xl font-semibold hover:bg-indigo-600 hover:text-white duration-300 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}