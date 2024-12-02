import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaUserPlus, FaSignInAlt } from 'react-icons/fa';

export const WelcomePage = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Welcome to Our Online Store
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover amazing products at great prices. Join us to start shopping and enjoy exclusive deals!
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaShoppingBag className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600">Browse through our carefully curated collection</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaUserPlus className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Registration</h3>
            <p className="text-gray-600">Create an account in just a few steps</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaSignInAlt className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Login</h3>
            <p className="text-gray-600">Safe and protected shopping experience</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <FaUserPlus />
            Register Now
          </Link>
          <Link
            to="/login"
            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <FaSignInAlt />
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};