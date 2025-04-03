import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#343A40] text-white py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-blue-500 rounded-full w-96 h-96 blur-3xl opacity-10 -z-10"></div>
      <div className="absolute bottom-0 left-0 bg-green-500 rounded-full w-96 h-96 blur-3xl opacity-10 -z-10"></div>

      <div className="container px-4 mx-auto md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-6 text-xl font-bold">
              <Shield className="w-6 h-6 text-white" />
              <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text"> SafeSign </span>
            </div>
            <p className="mb-6 text-gray-300">Secure, Fast, and Reliable Contract Analysis – Powered by AI.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 transition-colors hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-300 transition-colors hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 transition-colors hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-bold">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="/about" className="text-gray-300 transition-colors hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 transition-colors hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-300 transition-colors hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-bold">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="/terms" className="text-gray-300 transition-colors hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-300 transition-colors hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/security" className="text-gray-300 transition-colors hover:text-white">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-bold">Support</h3>
            <ul className="space-y-4">
              <li>
                <a href="/help" className="text-gray-300 transition-colors hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-300 transition-colors hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/documentation" className="text-gray-300 transition-colors hover:text-white">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-12 text-center text-gray-300 border-t border-gray-700">
          <p>© GoVeltron 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

