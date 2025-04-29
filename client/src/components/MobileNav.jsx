"use client"

import { useState } from "react"
import { Menu, Shield, X } from "lucide-react"
import { Button } from "./ui/Button"

export function MobileNav({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const handleNavigation = (page) => {
    toggleMenu()
    onNavigate(page)
  }

  return (
    <>
      <Button variant="ghost" className="p-2 md:hidden" onClick={toggleMenu}>
        <Menu className="w-6 h-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden" onClick={toggleMenu}>
          <div
            className="fixed top-0 left-0 bottom-0 w-[75%] max-w-sm bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-xl font-bold">
                <div className="relative">
                  <Shield className="h-7 w-7 text-[#007BFF]" />
                  <div className="absolute bg-blue-100 rounded-full -inset-1 blur-sm -z-10"></div>
                </div>
                <span className="bg-gradient-to-r from-[#007BFF] to-[#17A2B8] bg-clip-text text-transparent">
                  SafeSign
                </span>
              </div>
              <Button variant="ghost" className="p-2" onClick={toggleMenu}>
                <X className="w-6 h-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="flex flex-col gap-6 bg-white">
              <a
                href="#"
                className="text-[#007BFF] font-medium text-lg"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("home")
                }}
              >
                Home
              </a>
              <a
                href="#how-it-works"
                className="text-[#343A40] hover:text-[#007BFF] transition-colors text-lg"
                onClick={toggleMenu}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-[#343A40] hover:text-[#007BFF] transition-colors text-lg"
                onClick={toggleMenu}
              >
                Pricing
              </a>
              <a
                href="/contact"
                className="text-[#343A40] hover:text-[#007BFF] transition-colors text-lg"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="flex flex-col gap-4 mt-6">
                <a
                  href="#"
                  className="text-[#343A40] hover:text-[#007BFF] transition-colors text-lg"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("signin")
                  }}
                >
                  Login
                </a>
                <Button
                  className="bg-gradient-to-r from-[#17A2B8] to-[#007BFF] hover:opacity-90 text-white w-full mt-2 rounded-full shadow-md shadow-blue-100"
                  onClick={() => handleNavigation("signup")}
                >
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}