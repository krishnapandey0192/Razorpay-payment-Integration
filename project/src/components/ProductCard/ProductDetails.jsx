import React from 'react';
import { Rating } from './Rating';
import { Price } from './Price';

export const ProductDetails = ({ title, description, rating, price, originalPrice }) => {
  return (
    <div className="flex flex-col flex-grow">
      <h2 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-200">
        {title}
      </h2>
      <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
        {description}
      </p>
      <div className="space-y-3">
        <Rating rating={rating} />
        <Price original={originalPrice} discounted={price} />
      </div>
    </div>
  );
};