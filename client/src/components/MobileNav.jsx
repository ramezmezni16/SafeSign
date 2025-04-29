"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function MobileNav({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = !isOpen ? "hidden" : "auto"
  }

  const handleNavigation = (page) => {
    toggleMenu()
    onNavigate(page)
  }

  return (
    <>
      <button className="p-2 md:hidden" onClick={toggleMenu}>
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 p-6 bg-white md:hidden"
          onClick={toggleMenu}
        >
          <div
            className="w-full max-w-xs p-4 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-bold">Menu</span>
              <button onClick={toggleMenu}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              <a href="#" onClick={() => handleNavigation("home")}>Home</a>
              <a href="#how-it-works" onClick={toggleMenu}>How It Works</a>
              <a href="#pricing" onClick={toggleMenu}>Pricing</a>
              <a href="/contact" onClick={toggleMenu}>Contact</a>
              <a href="#" onClick={() => handleNavigation("signin")}>Login</a>
              <button
                onClick={() => handleNavigation("signup")}
                className="p-2 text-white bg-blue-600 rounded"
              >
                Sign Up
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
