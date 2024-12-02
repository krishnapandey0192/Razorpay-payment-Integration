import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export const AddToCartButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      <FaShoppingCart className="text-lg" />
      <span>Add to Cart</span>
    </button>
  );
};