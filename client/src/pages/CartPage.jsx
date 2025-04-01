import { Link } from 'react-router-dom';
import React from 'react';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'Nike Air Max', price: 120, quantity: 1, image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Adidas UltraBoost', price: 150, quantity: 1, image: 'https://via.placeholder.com/100' }
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Your Cart</h2>

      {cartItems.length > 0 ? (
        <div className="mt-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 border-b">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price} x {item.quantity}</p>
              </div>
              <button className="ml-auto bg-red-500 text-white px-3 py-1 rounded">Remove</button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <h3 className="text-xl font-bold">Total: ${totalPrice}</h3>
            <Link to="/checkout" className="bg-green-600 text-white px-6 py-2 rounded">Proceed to Checkout</Link>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 mt-6">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;