"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    street: "",
    postalCode: "",
  })

  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData)
      localStorage.setItem("user", JSON.stringify(res.data))
      navigate("/")
    } catch (err) {
      setError("Signup failed. Please try again.")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-2xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-8">Sign up</h1>
        </div>

        <div className="my-8 border-b border-gray-700" />

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-3 py-2 bg-[#121212] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="First Name"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-3 py-2 bg-[#121212] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Last Name"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 bg-[#121212] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full px-3 py-2 bg-[#121212] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white pr-20"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-400 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full px-3 py-2 bg-[#121212] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="country" className="block mb-2 text-sm font-medium">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="w-full px-3 py-2 bg-[#121212] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Country"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="state" className="block mb-2 text-sm font-medium">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="w-full px-3 py-2 bg-[#121212] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="State"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block mb-2 text-sm font-medium">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full px-3 py-2 bg-[#121212] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="City"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="postalCode" className="block mb-2 text-sm font-medium">
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                className="w-full px-3 py-2 bg-[#121212] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Postal Code"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="street" className="block mb-2 text-sm font-medium">
              Street Address
            </label>
            <input
              type="text"
              id="street"
              name="street"
              className="w-full px-3 py-2 bg-[#121212] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Street Address"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-yellow-300 text-black font-bold rounded-md hover:bg-yellow-600 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">Already have an account?</p>
          <a href="/Signin" className="text-sm text-yellow-100 hover:text-green-500">
            Log in to Shozie
          </a>
        </div>
      </div>
    </div>
  )
}

export default Signup