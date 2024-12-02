import React from 'react';
import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';

export const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  const renderStars = () => {
    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }

    // Half star
    if (hasHalfStar) {
      stars.push(<FaStarHalf key="half" className="text-yellow-400" />);
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex">{renderStars()}</div>
      <span className="ml-1 text-sm text-gray-500">({rating.toFixed(1)})</span>
    </div>
  );
};