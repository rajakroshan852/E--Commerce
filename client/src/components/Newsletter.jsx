export default function Newsletter() {
  return (
    <section className="bg-indigo-600 text-white py-20">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold">
          Subscribe to our Newsletter
        </h2>

        <p className="mt-4 text-lg">
          Get updates about new arrivals and exclusive offers.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg text-black w-full md:w-96"
          />

          <button className="bg-black px-6 py-3 rounded-lg hover:bg-gray-800">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}