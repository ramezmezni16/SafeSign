import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-yellow-300">Shoezie</h2>
            <p className="text-gray-400">Your destination for stylish and comfortable shoes. Step into style with Shoezie.</p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-300">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/category/all" className="hover:text-yellow-300">Shop All Shoes</a></li>
              <li><a href="/about" className="hover:text-yellow-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
              <li><a href="/faq" className="hover:text-yellow-300">FAQ</a></li>
              <li><a href="/privacy" className="hover:text-yellow-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-300">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">&copy; 2025 Shoezie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;