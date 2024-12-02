import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "./CartItem";
import { clearCart } from "../../store/slices/cartSlice";
import { initiatePayment } from "../../utils/razorpay";
import { formatCurrency } from "../../utils/formatCurrency";

export const CartPage = () => {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleCheckout = async (total) => {
    try {
      const response = await fetch("http://localhost:3000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: total,
        }),
      });

      if (!response.ok) {
        throw new Error("Payment initiation failed");
      }

      const data = await response.json();
      console.log(data);
      if (!data.success) {
        throw new Error(data.message);
      }
      await initiatePayment(data);
      dispatch(clearCart());
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  if (items.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600">
          Add some products to your cart to continue shopping.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-12">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="flex justify-between items-center border-t pt-4">
        <div>
          <p className="text-xl font-bold">Total: {formatCurrency(total)}</p>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => dispatch(clearCart())}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Clear Cart
          </button>
          <button
            onClick={() => {
              handleCheckout(total);
            }}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
