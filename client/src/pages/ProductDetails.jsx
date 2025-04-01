import { useParams } from 'react-router-dom';
import React from 'react';

const ProductDetails = () => {
  const { id } = useParams();

  // Temporary product data (to be replaced with API call)
  const product = {
    id,
    name: 'Nike Air Max',
    brand: 'Nike',
    price: 120,
    colors: ['Red', 'Blue', 'Black'],
    sizes: [38, 39, 40, 41, 42, 43],
    image: 'https://via.placeholder.com/300'
  };

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      {/* Shoe Image */}
      <img src={product.image} alt={product.name} className="w-80 h-80 object-cover rounded-lg" />

      {/* Product Details */}
      <div>
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <p className="text-gray-500">Brand: {product.brand}</p>
        <p className="text-2xl font-semibold mt-2">${product.price}</p>

        {/* Colors */}
        <div className="mt-4">
          <p className="text-lg font-semibold">Colors:</p>
          <div className="flex gap-2">
            {product.colors.map((color, index) => (
              <span key={index} className="p-2 border rounded bg-gray-300">{color}</span>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="mt-4">
          <p className="text-lg font-semibold">Sizes:</p>
          <div className="flex gap-2">
            {product.sizes.map((size, index) => (
              <span key={index} className="p-2 border rounded">{size}</span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded">Buy Now</button>
          <button className="bg-gray-800 text-white px-6 py-2 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
