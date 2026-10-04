// import products from "../data/products";

// export default function FeaturedProducts() {
//   return (
//     <section className="max-w-7xl mx-auto py-20 px-6">
//       <h2 className="text-4xl font-bold mb-10">Featured Products</h2>

//       <div className="grid md:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="group rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="h-60 w-full rounded-xl object-contain bg-gray-50 p-4 transition-transform duration-300 group-hover:scale-110 "
//             />

//             <h3 className="mt-5 text-xl font-bold">{product.name}</h3>

//             <p className="text-indigo-600 font-bold">₹{product.price}</p>

//             <div className="mt-4 flex items-center justify-between">
//               <span className="text-yellow-500 font-semibold">
//                 ⭐ {product.rating}
//               </span>

//               <span className="text-2xl font-bold text-indigo-600">
//                 ₹{product.price}
//               </span>
//             </div>

//             <button className="mt-5 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700">
//               Add To Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import products from "../data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl font-bold">
          Featured Products
        </h2>

        <button className="text-indigo-600 font-semibold">
          View All →
        </button>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}