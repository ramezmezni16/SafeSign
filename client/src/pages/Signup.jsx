"use client"

import { useState } from "react"
// Remove React Router imports since we're using custom routing
import { ArrowLeft, Check, Eye, EyeOff, Shield, X } from "lucide-react"
import { Button } from "@/components/ui/button" // Keep lowercase "button"

// Add the onNavigate prop to receive the navigation function from App.jsx
export default function SignUp({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)

  // Password strength indicators
  const hasMinLength = password.length >= 8
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password)

  const passwordStrength = [hasMinLength, hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar].filter(Boolean).length

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return "Weak"
    if (passwordStrength <= 4) return "Medium"
    return "Strong"
  }

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return "bg-red-500"
    if (passwordStrength <= 4) return "bg-yellow-500"
    return "bg-green-500"
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle sign up logic
    console.log({ name, email, password, agreeTerms })
    // Use the custom navigation function instead of React Router's navigate
    onNavigate("signin")
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
                <h2 className="text-2xl font-bold text-[#212529]">Create Your Account</h2>
                <p className="text-[#343A40]/70 mt-2">Join SafeSign and start signing documents securely</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-[#343A40]">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007BFF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

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
                  <label htmlFor="password" className="block text-sm font-medium text-[#343A40]">
                    Password
                  </label>
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

                  {/* Password Strength Indicator */}
                  {password && (
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#343A40]/70">Password strength:</span>
                        <span className="text-xs font-medium">{getPasswordStrengthText()}</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${getPasswordStrengthColor()} transition-all duration-300`}
                          style={{ width: `${(passwordStrength / 5) * 100}%` }}
                        ></div>
                      </div>

                      {/* Password Requirements */}
                      <ul className="mt-2 space-y-1">
                        <li className="flex items-center text-xs">
                          {hasMinLength ? (
                            <Check className="h-3.5 w-3.5 text-green-500 mr-1.5" />
                          ) : (
                            <X className="h-3.5 w-3.5 text-gray-300 mr-1.5" />
                          )}
                          <span className={hasMinLength ? "text-[#343A40]" : "text-[#343A40]/50"}>At least 8 characters</span>
                        </li>
                        <li className="flex items-center text-xs">
                          {hasUpperCase ? (
                            <Check className="h-3.5 w-3.5 text-green-500 mr-1.5" />
                          ) : (
                            <X className="h-3.5 w-3.5 text-gray-300 mr-1.5" />
                          )}
                          <span className={hasUpperCase ? "text-[#343A40]" : "text-[#343A40]/50"}>At least one uppercase letter</span>
                        </li>
                        <li className="flex items-center text-xs">
                          {hasLowerCase ? (
                            <Check className="h-3.5 w-3.5 text-green-500 mr-1.5" />
                          ) : (
                            <X className="h-3.5 w-3.5 text-gray-300 mr-1.5" />
                          )}
                          <span className={hasLowerCase ? "text-[#343A40]" : "text-[#343A40]/50"}>At least one lowercase letter</span>
                        </li>
                        <li className="flex items-center text-xs">
                          {hasNumber ? (
                            <Check className="h-3.5 w-3.5 text-green-500 mr-1.5" />
                          ) : (
                            <X className="h-3.5 w-3.5 text-gray-300 mr-1.5" />
                          )}
                          <span className={hasNumber ? "text-[#343A40]" : "text-[#343A40]/50"}>At least one number</span>
                        </li>
                        <li className="flex items-center text-xs">
                          {hasSpecialChar ? (
                            <Check className="h-3.5 w-3.5 text-green-500 mr-1.5" />
                          ) : (
                            <X className="h-3.5 w-3.5 text-gray-300 mr-1.5" />
                          )}
                          <span className={hasSpecialChar ? "text-[#343A40]" : "text-[#343A40]/50"}>At least one special character</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-[#007BFF] focus:ring-[#007BFF]"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-[#343A40]">
                      I agree to the{" "}
                      <button 
                        type="button"
                        onClick={() => onNavigate("terms")} 
                        className="text-[#007BFF] hover:underline"
                      >
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button
                        type="button"
                        onClick={() => onNavigate("privacy")}
                        className="text-[#007BFF] hover:underline"
                      >
                        Privacy Policy
                      </button>
                    </label>
                  </div>
                </div>

                {/* Sign Up Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#28A745] to-[#17A2B8] hover:opacity-90 text-white py-3 rounded-xl shadow-lg shadow-green-100 transition-all duration-300 hover:shadow-xl hover:shadow-green-200"
                >
                  Create Account
                </Button>

                {/* Sign In Link */}
                <div className="text-sm text-center">
                  <span className="text-[#343A40]/70">Already have an account?</span>{" "}
                  <button 
                    type="button"
                    onClick={() => onNavigate("signin")}
                    className="text-[#007BFF] hover:underline font-medium"
                  >
                    Sign in
                  </button>
                </div>
              </form>
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