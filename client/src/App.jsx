"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle, Cloud, FileText, Lock, MousePointer, Smile } from "lucide-react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Button } from "./components/ui/Button" // Changed to lowercase
import SignIn from "./pages/Signin"
import SignUp from "./pages/Signup"

function App() {
  // Simple routing state
  const [currentPage, setCurrentPage] = useState("home")

  // Handle navigation
  const navigate = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  // Render the appropriate page based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case "signin":
        return <SignIn onNavigate={navigate} /> // Pass the navigation function
      case "signup":
        return <SignUp onNavigate={navigate} /> // Pass the navigation function
      default:
        return (
          <div className="flex flex-col min-h-screen">
            <Header onNavigate={navigate} />

            <main className="flex-1">
              {/* Hero Section */}
              <section className="relative py-20 overflow-hidden md:py-32">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
                <div className="absolute right-0 bg-blue-100 rounded-full top-20 w-96 h-96 blur-3xl opacity-30 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30 -z-10"></div>

                <div className="container relative px-4 mx-auto md:px-6">
                  <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="max-w-xl space-y-6">
                      <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-[#007BFF] mb-2">
                        <span className="flex h-2 w-2 rounded-full bg-[#007BFF] mr-2"></span>
                        Trusted by 10,000+ users
                      </div>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#212529] leading-tight">
                        <span className="bg-gradient-to-r from-[#007BFF] to-[#17A2B8] bg-clip-text text-transparent">
                          Easily
                        </span>{" "}
                        and{" "}
                        <span className="bg-gradient-to-r from-[#28A745] to-[#17A2B8] bg-clip-text text-transparent">
                          Securely
                        </span>{" "}
                        Sign Documents Online
                      </h1>
                      <p className="text-lg text-[#343A40]/80 md:text-xl leading-relaxed">
                        Save time, reduce paperwork, and protect your documents with SafeSign's modern e-signature
                        solution.
                      </p>
                      <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                        <Button
                          className="bg-gradient-to-r from-[#17A2B8] to-[#007BFF] hover:opacity-90 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-blue-100 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5"
                          onClick={() => navigate("signup")}
                        >
                          Get Started Free
                        </Button>
                        <Button
                          variant="outline"
                          className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white text-lg px-8 py-6 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                        >
                          Learn More
                        </Button>
                      </div>
                      <div className="flex items-center gap-4 pt-8">
                        <div className="flex -space-x-2">
                          <div className="flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-blue-400 rounded-full">
                            JD
                          </div>
                          <div className="flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-green-400 rounded-full">
                            KL
                          </div>
                          <div className="flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-purple-400 rounded-full">
                            MN
                          </div>
                          <div className="flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-yellow-400 rounded-full">
                            OP
                          </div>
                        </div>
                        <p className="text-sm text-[#343A40]/70">
                          Joined by <span className="font-medium text-[#343A40]">10,000+</span> professionals
                        </p>
                      </div>
                    </div>
                    <div className="relative flex justify-center">
                      <div className="absolute inset-0 transform opacity-50 bg-gradient-to-r from-blue-100 to-green-100 rounded-3xl blur-xl -z-10 rotate-3"></div>
                      <div className="relative overflow-hidden transition-transform duration-500 transform bg-white border border-gray-100 shadow-2xl rounded-3xl shadow-blue-100/50 -rotate-2 hover:rotate-0">
                        <img
                          src="https://placehold.co/600x500"
                          alt="Person signing a document digitally"
                          className="object-cover rounded-t-lg"
                          width={600}
                          height={500}
                        />
                        <div className="p-6 bg-white">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                              <FileText className="h-5 w-5 text-[#007BFF]" />
                            </div>
                            <div>
                              <h3 className="font-medium">Contract_Final.pdf</h3>
                              <p className="text-sm text-gray-500">Signed 2 minutes ago</p>
                            </div>
                            <div className="ml-auto">
                              <div className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                Completed
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Brands Section */}
              <section className="py-12 border-gray-100 border-y">
                <div className="container px-4 mx-auto md:px-6">
                  <p className="mb-8 text-sm font-medium text-center text-gray-500">TRUSTED BY LEADING COMPANIES</p>
                  <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                    {["Acme Inc", "Globex", "Soylent Corp", "Initech", "Umbrella"].map((brand, i) => (
                      <div key={i} className="text-xl font-bold text-gray-300 transition-colors hover:text-gray-400">
                        {brand}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* How It Works Section */}
              <section id="how-it-works" className="relative py-24">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 -z-10"></div>
                <div className="absolute left-0 bg-blue-100 rounded-full top-1/2 w-72 h-72 blur-3xl opacity-30 -z-10"></div>
                <div className="absolute bottom-0 right-0 bg-green-100 rounded-full w-80 h-80 blur-3xl opacity-30 -z-10"></div>

                <div className="container px-4 mx-auto md:px-6">
                  <div className="flex flex-col items-center justify-center max-w-3xl mx-auto space-y-4 text-center">
                    <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-[#007BFF] mb-2">
                      <span className="flex h-2 w-2 rounded-full bg-[#007BFF] mr-2"></span>
                      Simple Process
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#212529]">
                      How SafeSign Works
                    </h2>
                    <p className="text-[#343A40]/80 md:text-xl">Complete your document signing in three simple steps</p>
                  </div>

                  <div className="relative mt-20">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-100 via-[#17A2B8] to-green-100 transform -translate-y-1/2 hidden md:block"></div>

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                      <div className="relative flex flex-col items-center p-8 space-y-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl shadow-blue-50 hover:shadow-xl hover:-translate-y-1">
                        <div className="absolute -top-8 bg-gradient-to-r from-[#007BFF] to-[#17A2B8] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-blue-100">
                          1
                        </div>
                        <div className="flex items-center justify-center w-20 h-20 mt-6 rounded-full bg-blue-50">
                          <FileText className="h-10 w-10 text-[#007BFF]" />
                        </div>
                        <h3 className="text-xl font-bold">Upload Your Document</h3>
                        <p className="text-[#343A40]/70">
                          Upload any document you need signed – PDFs, contracts, agreements, and more.
                        </p>
                      </div>

                      <div className="relative flex flex-col items-center p-8 space-y-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl shadow-blue-50 hover:shadow-xl hover:-translate-y-1">
                        <div className="absolute -top-8 bg-gradient-to-r from-[#17A2B8] to-[#28A745] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-blue-100">
                          2
                        </div>
                        <div className="flex items-center justify-center w-20 h-20 mt-6 rounded-full bg-blue-50">
                          <MousePointer className="h-10 w-10 text-[#17A2B8]" />
                        </div>
                        <h3 className="text-xl font-bold">Add Your Signature</h3>
                        <p className="text-[#343A40]/70">
                          Sign your document with our easy-to-use digital signature tool.
                        </p>
                      </div>

                      <div className="relative flex flex-col items-center p-8 space-y-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl shadow-blue-50 hover:shadow-xl hover:-translate-y-1">
                        <div className="absolute -top-8 bg-gradient-to-r from-[#28A745] to-[#17A2B8] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-green-100">
                          3
                        </div>
                        <div className="flex items-center justify-center w-20 h-20 mt-6 rounded-full bg-green-50">
                          <Cloud className="h-10 w-10 text-[#28A745]" />
                        </div>
                        <h3 className="text-xl font-bold">Download and Share</h3>
                        <p className="text-[#343A40]/70">Once signed, download your document and share it securely.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-16">
                    <Button className="bg-gradient-to-r from-[#17A2B8] to-[#007BFF] hover:opacity-90 text-white px-8 py-6 rounded-full shadow-lg shadow-blue-100 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5">
                      Try It Now <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </section>

              {/* Benefits Section */}
              <section className="py-24 bg-white">
                <div className="container px-4 mx-auto md:px-6">
                  <div className="flex flex-col items-center justify-center max-w-3xl mx-auto space-y-4 text-center">
                    <div className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-[#28A745] mb-2">
                      <span className="flex h-2 w-2 rounded-full bg-[#28A745] mr-2"></span>
                      Key Features
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#212529]">
                      Why Choose SafeSign?
                    </h2>
                    <p className="text-[#343A40]/80 md:text-xl">Our platform is designed with your needs in mind</p>
                  </div>

                  <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">
                    <div className="relative p-8 overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-2xl shadow-blue-50 hover:shadow-xl hover:-translate-y-1">
                      <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 transition-transform duration-500 rounded-full bg-blue-50 group-hover:scale-125"></div>
                      <div className="relative">
                        <div className="inline-block p-4 mb-6 bg-white shadow-md rounded-2xl">
                          <Lock className="h-8 w-8 text-[#007BFF]" />
                        </div>
                        <h3 className="mb-4 text-xl font-bold">Security</h3>
                        <p className="text-[#343A40]/70">
                          Your data is encrypted, and your documents are protected with enterprise-grade security.
                        </p>
                      </div>
                    </div>

                    <div className="relative p-8 overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-2xl shadow-blue-50 hover:shadow-xl hover:-translate-y-1">
                      <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 transition-transform duration-500 rounded-full bg-blue-50 group-hover:scale-125"></div>
                      <div className="relative">
                        <div className="inline-block p-4 mb-6 bg-white shadow-md rounded-2xl">
                          <Smile className="h-8 w-8 text-[#007BFF]" />
                        </div>
                        <h3 className="mb-4 text-xl font-bold">Ease of Use</h3>
                        <p className="text-[#343A40]/70">
                          No complicated software – simply upload, sign, and share with our intuitive interface.
                        </p>
                      </div>
                    </div>

                    <div className="relative p-8 overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-2xl shadow-blue-50 hover:shadow-xl hover:-translate-y-1">
                      <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 transition-transform duration-500 rounded-full bg-green-50 group-hover:scale-125"></div>
                      <div className="relative">
                        <div className="inline-block p-4 mb-6 bg-white shadow-md rounded-2xl">
                          <CheckCircle className="h-8 w-8 text-[#28A745]" />
                        </div>
                        <h3 className="mb-4 text-xl font-bold">Affordable</h3>
                        <p className="text-[#343A40]/70">
                          Start for free, and upgrade later as your needs grow with our flexible pricing plans.
                        </p>
                      </div>
                    </div>

                    <div className="relative p-8 overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-2xl shadow-blue-50 hover:shadow-xl hover:-translate-y-1">
                      <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 transition-transform duration-500 rounded-full bg-blue-50 group-hover:scale-125"></div>
                      <div className="relative">
                        <div className="inline-block p-4 mb-6 bg-white shadow-md rounded-2xl">
                          <Cloud className="h-8 w-8 text-[#007BFF]" />
                        </div>
                        <h3 className="mb-4 text-xl font-bold">Access Anywhere</h3>
                        <p className="text-[#343A40]/70">
                          Access your signed documents anytime, anywhere from any device with internet access.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Testimonials Section */}
              <section className="relative py-24">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
                <div className="absolute right-0 bg-blue-100 rounded-full top-1/3 w-96 h-96 blur-3xl opacity-30 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30 -z-10"></div>

                <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center justify-center max-w-3xl mx-auto space-y-4 text-center">
                    <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-[#007BFF] mb-2">
                      <span className="flex h-2 w-2 rounded-full bg-[#007BFF] mr-2"></span>
                      Testimonials
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#212529]">
                      What Our Users Say
                    </h2>
                    <p className="text-[#343A40]/80 md:text-xl">Don't just take our word for it</p>
                  </div>

                  <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
                    <div className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl shadow-blue-50 hover:shadow-xl hover:-translate-y-1">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <p className="italic text-[#343A40] mb-6">
                        "SafeSign made signing contracts so much easier! I no longer need to print, sign, and scan. The
                        interface is intuitive and the process is seamless."
                      </p>
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#007BFF] to-[#17A2B8] text-white flex items-center justify-center font-bold">
                          JD
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold">John Doe</h4>
                          <p className="text-sm text-[#343A40]/70">Small Business Owner</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl shadow-blue-50 hover:shadow-xl hover:-translate-y-1">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <p className="italic text-[#343A40] mb-6">
                        "The security features are great, and I can sign documents from my phone! The mobile experience is
                        flawless and I love how I can access my documents anywhere."
                      </p>
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#28A745] to-[#17A2B8] text-white flex items-center justify-center font-bold">
                          JS
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold">Jane Smith</h4>
                          <p className="text-sm text-[#343A40]/70">Freelance Designer</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl shadow-blue-50 hover:shadow-xl hover:-translate-y-1">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <p className="italic text-[#343A40] mb-6">
                        "SafeSign has streamlined our entire contract process. We've saved countless hours on paperwork and
                        improved our client experience."
                      </p>
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#17A2B8] to-[#007BFF] text-white flex items-center justify-center font-bold">
                          RJ
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold">Robert Johnson</h4>
                          <p className="text-sm text-[#343A40]/70">HR Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-16">
                    <Button 
                      onClick={() => onNavigate && onNavigate("signup")}
                      className="bg-gradient-to-r from-[#28A745] to-[#17A2B8] hover:opacity-90 text-white px-8 py-6 rounded-full shadow-lg shadow-green-100 transition-all duration-300 hover:shadow-xl hover:shadow-green-200 hover:-translate-y-0.5"
                    >
                      Start for Free <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </section>


              {/* Pricing Section */}
              <section id="pricing" className="relative py-24 bg-white">
                <div className="absolute top-0 right-0 rounded-full w-80 h-80 bg-blue-50 blur-3xl opacity-30 -z-10"></div>
                <div className="absolute bottom-0 left-0 rounded-full w-80 h-80 bg-green-50 blur-3xl opacity-30 -z-10"></div>

                <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center justify-center max-w-3xl mx-auto space-y-4 text-center">
                    <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-[#007BFF] mb-2">
                      <span className="flex h-2 w-2 rounded-full bg-[#007BFF] mr-2"></span>
                      Pricing
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#212529]">
                      Get Started with SafeSign
                    </h2>
                    <p className="text-[#343A40]/80 md:text-xl">Simple, transparent pricing that grows with your needs</p>
                  </div>

                  <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto mt-16 md:grid-cols-2">
                    <div className="relative p-8 overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl shadow-blue-50 hover:shadow-xl hover:-translate-y-1">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#007BFF] to-[#17A2B8]"></div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#007BFF] to-[#17A2B8] bg-clip-text text-transparent">
                        Free
                      </h3>
                      <p className="mt-2 text-[#343A40]/70">Perfect for individuals and small teams</p>
                      <div className="flex items-end mt-6">
                        <span className="text-5xl font-bold">$0</span>
                        <span className="text-[#343A40]/70 ml-2">/month</span>
                      </div>
                      <ul className="mt-8 space-y-5">
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#28A745] mr-3 flex-shrink-0" />
                          <span>Sign up to 1 document per month</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#28A745] mr-3 flex-shrink-0" />
                          <span>Basic document templates</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#28A745] mr-3 flex-shrink-0" />
                          <span>Email support</span>
                        </li>
                      </ul>
                      <Button className="w-full mt-8 bg-gradient-to-r from-[#17A2B8] to-[#007BFF] hover:opacity-90 text-white rounded-full shadow-lg shadow-blue-100 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200">
                        Get Started
                      </Button>
                    </div>

                    <div className="relative p-8 overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl shadow-blue-50 hover:shadow-xl hover:-translate-y-1">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#28A745] to-[#17A2B8]"></div>
                      <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-r from-[#28A745] to-[#17A2B8] rotate-45 transform origin-bottom-left"></div>
                      <div className="absolute top-6 right-6 bg-white text-[#28A745] px-3 py-1 text-sm font-bold rounded-full shadow-md">
                        Coming Soon
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-[#28A745] to-[#17A2B8] bg-clip-text text-transparent">
                        Pro
                      </h3>
                      <p className="mt-2 text-[#343A40]/70">For businesses with advanced needs</p>
                      <div className="flex items-end mt-6">
                        <span className="text-5xl font-bold">$19</span>
                        <span className="text-[#343A40]/70 ml-2">/month</span>
                      </div>
                      <ul className="mt-8 space-y-5">
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#28A745] mr-3 flex-shrink-0" />
                          <span>Unlimited document signing</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#28A745] mr-3 flex-shrink-0" />
                          <span>Advanced templates & customization</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#28A745] mr-3 flex-shrink-0" />
                          <span>Priority support</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#28A745] mr-3 flex-shrink-0" />
                          <span>Team collaboration features</span>
                        </li>
                      </ul>
                      <Button className="w-full mt-8" variant="outline" disabled>
                        Coming Soon
                      </Button>
                    </div>
                  </div>
                </div>
              </section>



              {/* Call to Action Section */}
              <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF] to-[#17A2B8] -z-10"></div>
                <div className="absolute top-0 right-0 bg-white rounded-full w-96 h-96 blur-3xl opacity-10 -z-10"></div>
                <div className="absolute bottom-0 left-0 bg-white rounded-full w-96 h-96 blur-3xl opacity-10 -z-10"></div>

                <div className="container relative px-4 md:px-6">
                  <div className="max-w-3xl p-12 mx-auto shadow-2xl bg-white/10 backdrop-blur-lg rounded-3xl">
                    <div className="flex flex-col items-center justify-center space-y-6 text-center text-white">
                      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                      <p className="max-w-[700px] md:text-xl">
                        Join thousands of users who trust SafeSign for their document signing needs.
                      </p>
                      <Button className="mt-6 bg-white text-[#0056b3] hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5">
                        Sign Up for Free <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>

                    </div>
                  </div>
                </div>
              </section>

            </main>

            <Footer />
          </div>
        )
    }
  }

  return renderPage()
}

export default App

