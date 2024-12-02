import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { logout } from "../../store/slices/authSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Shop
        </Link>
        <div className="flex items-center gap-6">
          {isAuthenticated ? (
            <>
              <span className="text-gray-600">Welcome, {user?.name}</span>
              <Link to="/cart" className="flex items-center gap-2">
                <FaShoppingCart className="text-xl" />
                {itemCount > 0 && (
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    {itemCount}
                  </span>
                )}
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-800"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-gray-600 hover:text-gray-800">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
