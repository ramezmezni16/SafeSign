import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-md">
      {/* Brand Name */}
      <Link to="/"><h1 className="text-3xl font-bold text-yellow-300">Shoezie</h1></Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        {user ? (
          <span className="text-gray-300">Hello, {user.firstName}</span>
        ) : (
          <>
            <Link
              to="/signin"
              className="text-yellow-300 hover:text-yellow-500 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-yellow-300 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;