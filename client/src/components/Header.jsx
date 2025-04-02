"use client"
import { Shield } from "lucide-react"
import { Button } from "./ui/Button"
import { MobileNav } from "./MobileNav"

export function Header({ onNavigate }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 backdrop-blur-md bg-white/80">
      <div className="container flex items-center justify-between h-20 px-4 mx-auto md:px-6">
        <div className="flex items-center gap-2 text-xl font-bold">
          <div className="relative">
            <Shield className="h-7 w-7 text-[#007BFF]" />
            <div className="absolute bg-blue-100 rounded-full -inset-1 blur-sm -z-10"></div>
          </div>
          <span className="bg-gradient-to-r from-[#007BFF] to-[#17A2B8] bg-clip-text text-transparent">SafeSign</span>
        </div>
        <nav className="items-center hidden gap-8 md:flex">
          <a
            href="/"
            className="text-[#007BFF] font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#007BFF] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            Home
          </a>
          <a
            href="#how-it-works"
            className="text-[#343A40] hover:text-[#007BFF] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#007BFF] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-[#343A40] hover:text-[#007BFF] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#007BFF] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            Pricing
          </a>
          <a
            href="/contact"
            className="text-[#343A40] hover:text-[#007BFF] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#007BFF] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden md:inline-flex text-[#343A40] hover:text-[#007BFF] transition-colors font-medium"
            onClick={(e) => {
              e.preventDefault()
              onNavigate("signin")
            }}
          >
            Login
          </a>
          <Button
            className="bg-gradient-to-r from-[#17A2B8] to-[#007BFF] hover:opacity-90 text-white rounded-full shadow-md shadow-blue-100 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200"
            onClick={() => onNavigate("signup")}
          >
            Sign Up
          </Button>
        </div>
        <div className="md:hidden">
          <MobileNav onNavigate={onNavigate} />
        </div>
      </div>
    </header>
  )
}