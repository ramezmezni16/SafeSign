"use client"

import { useState } from "react"
import { ArrowLeft, Eye, EyeOff, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SignIn({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate sign-in logic
    console.log({ email, password, rememberMe })

    // After sign-in success, navigate to dashboard
    onNavigate("dashboard")
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="container py-6 mx-auto">
        <button 
          onClick={() => onNavigate("home")} 
          className="inline-flex items-center text-[#343A40] hover:text-[#007BFF] transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>
      </header>

      <main className="flex items-center justify-center flex-1 px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-2">
              <Shield className="h-12 w-12 text-[#007BFF]" />
              <div className="absolute bg-blue-100 rounded-full -inset-1 blur-md -z-10"></div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#007BFF] to-[#17A2B8] bg-clip-text text-transparent">
              SafeSign
            </h1>
          </div>

          {/* Form Card */}
          <div className="relative">
            <div className="absolute opacity-50 -inset-1 bg-gradient-to-r from-blue-100 to-green-100 rounded-3xl blur-md -z-10"></div>
            <div className="relative z-10 p-8 bg-white shadow-xl rounded-2xl">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-[#212529]">Welcome Back</h2>
                <p className="text-[#343A40]/70 mt-2">Sign in to your SafeSign account</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-[#343A40]">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007BFF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-[#343A40]">
                      Password
                    </label>
                    <button 
                      type="button"
                      onClick={() => onNavigate("forgot-password")}
                      className="text-sm text-[#007BFF] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007BFF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      className="absolute text-gray-400 -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-[#007BFF] focus:ring-[#007BFF]"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-[#343A40]">
                    Remember me
                  </label>
                </div>

                {/* Sign In Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#17A2B8] to-[#007BFF] hover:opacity-90 text-white py-3 rounded-xl shadow-lg shadow-blue-100 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200"
                >
                  Sign In
                </Button>

                {/* Sign Up Link */}
                <div className="text-sm text-center">
                  <span className="text-[#343A40]/70">Don't have an account?</span>{" "}
                  <button 
                    type="button"
                    onClick={() => onNavigate("signup")}
                    className="text-[#007BFF] hover:underline font-medium"
                  >
                    Sign up
                  </button>
                </div>
              </form>

              {/* Social Login Divider */}
              <div className="relative mt-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-[#343A40]/70">Or continue with</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <button
                  type="button"
                  className="flex justify-center items-center py-2.5 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  {/* Google Icon */}
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  className="flex justify-center items-center py-2.5 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  {/* Facebook Icon */}
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                  </svg>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto py-6 text-center text-sm text-[#343A40]/70">
        <p>© SafeSign 2025. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
