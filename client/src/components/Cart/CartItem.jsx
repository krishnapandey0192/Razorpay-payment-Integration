import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/slices/cartSlice';
import { formatCurrency } from '../../utils/formatCurrency';

export const CartItem = ({ id, title, price, quantity, image }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 border-b">
      <img src={image} alt={title} className="w-20 h-20 object-cover rounded" />
      <div className="flex-grow">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600">{formatCurrency(price)}</p>
        <div className="flex items-center gap-4 mt-2">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-16 px-2 py-1 border rounded"
          />
          <button
            onClick={() => dispatch(removeFromCart(id))}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="font-semibold">
        {formatCurrency(price * quantity)}
      </div>
    </div>
  );
};