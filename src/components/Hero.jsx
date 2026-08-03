import heroImg from "../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 items-center gap-12">

        <div>
          <p className="uppercase tracking-widest text-gray-200 mb-3">
            New Collection 2026
          </p>

          <h1 className="text-6xl font-bold text-white leading-tight">
            Shop Smarter.
            <br />
            Live Better.
          </h1>

          <p className="text-gray-200 mt-6 text-lg">
            Discover premium fashion, electronics and lifestyle products
            with exclusive offers.
          </p>

          <button className="mt-8 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Shop Now
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full max-w-lg  drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}