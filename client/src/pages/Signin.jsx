
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signin", formData)
      localStorage.setItem("user", JSON.stringify(res.data))
      navigate("/")
    } catch (err) {
      setError("Invalid email or password.")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-8">Log in</h1>
        </div>

        <div className="my-8 border-b border-gray-700" />

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email or username
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full px-3 py-2 bg-[#121212] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Email or username"
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
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 rounded bg-[#121212] border-gray-700 text-green-500 focus:ring-green-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-yellow-300 text-black font-bold rounded-md hover:bg-yellow-600 transition-colors"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-yellow-100 hover:text-green-500">
            Forgot your password?
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">Don't have an account?</p>
          <a href="/signup" className="text-sm text-yellow-100 hover:text-green-500">
            Sign up for Shozie
          </a>
        </div>
      </div>
    </div>
  )
}

export default Signin

