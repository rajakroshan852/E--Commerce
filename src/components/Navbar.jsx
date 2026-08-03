import { Link } from "react-router-dom";
import {
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiSearch,
  FiMenu,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link to="/" className="text-4xl font-extrabold text-indigo-600">
          ShopHub
        </Link>

        {/* Search */}
        <div className="hidden md:flex items-center w-96 border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-5 py-3 outline-none"
          />
          <button className="p-4">
            <FiSearch size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav className="hidden lg:flex gap-8 font-medium">
          <Link to="/">Home</Link>

          <Link to="/products" className="hover:text-indigo-600 transition">
            Shop
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <FiHeart size={22} className="cursor-pointer" />

          <Link to="/cart" className="relative">
            <FiShoppingCart size={22} className="cursor-pointer" />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <div className="relative">
            {user ? (
              <>
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="font-semibold text-indigo-600"
                >
                  {user.name}
                </button>

                {showMenu && (
                  <div className="absolute right-0 mt-3 w-48 rounded-lg border bg-white shadow-lg">
                    <Link
                      to="/profile"
                      className="block px-4 py-3 hover:bg-gray-100"
                      onClick={() => setShowMenu(false)}
                    >
                      👤 Profile
                    </Link>

                    <Link
                      to="/orders"
                      className="block px-4 py-3 hover:bg-gray-100"
                      onClick={() => setShowMenu(false)}
                    >
                      📦 My Orders
                    </Link>

                    <button
                      onClick={() => {
                        logout();
                        setShowMenu(false);
                      }}
                      className="block w-full px-4 py-3 text-left text-red-600 hover:bg-red-100"
                    >
                      🚪 Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <FiUser size={22} className="cursor-pointer" />
              </Link>
            )}
          </div>

          <FiMenu size={24} className="cursor-pointer lg:hidden" />
        </div>
      </div>
    </header>
  );
}
