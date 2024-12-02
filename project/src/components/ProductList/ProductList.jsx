import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';
import { useProducts } from '../../hooks/useProducts';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

export const ProductList = () => {
  const { products, loading, error } = useProducts();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onAddToCart={() => handleAddToCart(product)}
        />
      ))}
    </div>
  );
};