import React from 'react';
import { Badge } from './Badge';

export const ImageContainer = ({ image, title, badge }) => {
  return (
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover object-center transition-transform duration-300 hover:scale-105"
      />
      {badge && (
        <div className="absolute top-2 left-2">
          <Badge 
            className={badge === 'Sale' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}
          >
            {badge}
          </Badge>
        </div>
      )}
    </div>
  );
};