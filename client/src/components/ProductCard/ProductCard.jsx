import React from 'react';
import { ImageContainer } from './ImageContainer';
import { ProductDetails } from './ProductDetails';
import { AddToCartButton } from './AddToCartButton';

export const ProductCard = ({
  image,
  title,
  description,
  price,
  originalPrice,
  rating,
  badge,
  onAddToCart
}) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ title, price });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <ImageContainer image={image} title={title} badge={badge} />
      <div className="p-4 flex flex-col flex-grow space-y-4">
        <ProductDetails
          title={title}
          description={description}
          rating={rating}
          price={price}
          originalPrice={originalPrice}
        />
        <AddToCartButton onClick={handleAddToCart} />
      </div>
    </div>
  );
};