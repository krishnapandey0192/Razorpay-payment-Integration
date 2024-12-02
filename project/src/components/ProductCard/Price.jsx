import React from 'react';

export const Price = ({ original, discounted }) => {
  const discount = original ? Math.round(((original - discounted) / original) * 100) : 0;

  return (
    <div className="flex items-center gap-2">
      <span className="text-xl font-bold text-gray-900">
        ${discounted.toFixed(2)}
      </span>
      {original && (
        <>
          <span className="text-sm text-gray-500 line-through">
            ${original.toFixed(2)}
          </span>
          <span className="text-xs font-semibold text-green-600">
            {discount}% OFF
          </span>
        </>
      )}
    </div>
  );
};