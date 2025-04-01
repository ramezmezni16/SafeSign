import { Link } from "react-router-dom";

const ProductCard = ({ id, name, image, price }) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      {/* Product Image */}
      <div className="relative h-64">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-yellow-300 text-lg font-semibold mt-2">${price}</p>

        {/* View Details Button */}
        <Link
          to={`/product/${id}`}
          className="mt-4 inline-block bg-yellow-300 text-black font-bold py-2 px-6 rounded-md hover:bg-yellow-500 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;