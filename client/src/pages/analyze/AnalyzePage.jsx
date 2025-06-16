"use client"

import { useState } from "react"
import { Upload, FileText, AlertCircle, CheckCircle, Download, ArrowLeft, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AnalyzePage() {
  const [file, setFile] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState(null)
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0]
      if (validateFile(droppedFile)) {
        setFile(droppedFile)
      }
    }
  }

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      if (validateFile(selectedFile)) {
        setFile(selectedFile)
      }
    }
  }

  const validateFile = (file) => {
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ]
    const maxSize = 5 * 1024 * 1024 // 5MB

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a PDF, DOCX, or TXT file.")
      return false
    }

    if (file.size > maxSize) {
      alert("File size must be less than 5MB.")
      return false
    }

    return true
  }

  const analyzeContract = async () => {
    if (!file) return

    setIsAnalyzing(true)

    // Simulate AI analysis - replace with actual AI SDK call
    setTimeout(() => {
      setAnalysis({
        summary:
          "This is a standard employment contract with competitive terms. The agreement includes standard clauses for confidentiality, non-compete, and intellectual property rights.",
        keyFindings: [
          {
            type: "positive",
            title: "Fair Compensation Terms",
            description: "The salary and benefits package appears competitive for the industry standard.",
          },
          {
            type: "warning",
            title: "Non-Compete Clause",
            description:
              "The non-compete period extends to 12 months, which may limit future employment opportunities.",
          },
          {
            type: "risk",
            title: "Intellectual Property Rights",
            description:
              "All work-related intellectual property will belong to the company, including personal projects.",
          },
          {
            type: "positive",
            title: "Termination Clause",
            description: "Standard 30-day notice period with severance pay provisions.",
          },
        ],
        riskScore: 6.5,
        recommendations: [
          "Consider negotiating the non-compete period to 6 months instead of 12.",
          "Clarify the intellectual property clause to exclude personal projects unrelated to work.",
          "Request clarification on the remote work policy terms.",
        ],
      })
      setIsAnalyzing(false)
    }, 3000)
  }

  const resetAnalysis = () => {
    setFile(null)
    setAnalysis(null)
    setIsAnalyzing(false)
  }

  const getRiskColor = (score) => {
    if (score <= 3) return "text-green-600 bg-green-50"
    if (score <= 6) return "text-yellow-600 bg-yellow-50"
    return "text-red-600 bg-red-50"
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case "positive":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "warning":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
      case "risk":
        return <AlertCircle className="w-5 h-5 text-red-500" />
      default:
        return <FileText className="w-5 h-5 text-blue-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-lg">
        <div className="container px-4 py-4 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => window.history.back()} className="text-[#007BFF] hover:bg-blue-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <div className="w-px h-6 bg-gray-300"></div>
              <h1 className="text-xl font-bold text-[#212529]">Contract Analyzer</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8 mx-auto">
        {!analysis ? (
          <div className="max-w-4xl mx-auto">
            {/* Upload Section */}
            <div className="mb-8 text-center">
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-[#007BFF] mb-4">
                <span className="flex h-2 w-2 rounded-full bg-[#007BFF] mr-2"></span>
                AI-Powered Analysis
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#212529] mb-4">
                Upload Your Contract
              </h2>
              <p className="text-lg text-[#343A40]/80 max-w-2xl mx-auto">
                Upload your contract and get instant AI-powered insights, risk assessment, and recommendations
              </p>
            </div>

            <Card className="p-8 bg-white border-0 shadow-lg">
              {!file ? (
                <div
                  className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                    dragActive
                      ? "border-[#007BFF] bg-blue-50"
                      : "border-gray-300 hover:border-[#007BFF] hover:bg-blue-50/50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center space-y-6">
                    <div className="p-6 rounded-full bg-blue-50">
                      <Upload className="h-12 w-12 text-[#007BFF]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#212529] mb-2">Drop your contract here</h3>
                      <p className="text-[#343A40]/70 mb-4">or click to browse files</p>
                      <p className="text-sm text-[#343A40]/60">Supports PDF, DOCX, and TXT files up to 5MB</p>
                    </div>
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      accept=".pdf,.docx,.txt"
                      onChange={handleFileSelect}
                    />
                    <Button
                      onClick={() => document.getElementById("file-upload").click()}
                      className="bg-gradient-to-r from-[#17A2B8] to-[#007BFF] hover:opacity-90 text-white px-8 py-3 rounded-full shadow-lg shadow-blue-100 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200"
                    >
                      Choose File
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* File Preview */}
                  <div className="flex items-center justify-between p-6 bg-blue-50 rounded-2xl">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white rounded-lg shadow-sm">
                        <FileText className="h-8 w-8 text-[#007BFF]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#212529]">{file.name}</h3>
                        <p className="text-sm text-[#343A40]/70">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                    <Button variant="ghost" onClick={resetAnalysis} className="text-[#343A40]/70 hover:text-[#343A40]">
                      Remove
                    </Button>
                  </div>

                  {/* Analyze Button */}
                  <div className="text-center">
                    <Button
                      onClick={analyzeContract}
                      disabled={isAnalyzing}
                      className="bg-gradient-to-r from-[#28A745] to-[#17A2B8] hover:opacity-90 text-white px-12 py-4 text-lg rounded-full shadow-lg shadow-green-100 transition-all duration-300 hover:shadow-xl hover:shadow-green-200 disabled:opacity-50"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Analyzing Contract...
                        </>
                      ) : (
                        "Analyze Contract"
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        ) : (
          /* Analysis Results */
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Header with file info */}
            <Card className="p-6 bg-white border-0 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-blue-50">
                    <FileText className="h-8 w-8 text-[#007BFF]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#212529]">{file.name}</h2>
                    <p className="text-[#343A40]/70">Analysis completed</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className={`px-4 py-2 rounded-full font-medium ${getRiskColor(analysis.riskScore)}`}>
                    Risk Score: {analysis.riskScore}/10
                  </div>
                  <Button
                    onClick={resetAnalysis}
                    variant="outline"
                    className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white"
                  >
                    Analyze New Contract
                  </Button>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Summary */}
              <div className="space-y-6 lg:col-span-2">
                <Card className="p-6 bg-white border-0 shadow-lg">
                  <h3 className="text-xl font-bold text-[#212529] mb-4">Contract Summary</h3>
                  <p className="text-[#343A40] leading-relaxed">{analysis.summary}</p>
                </Card>

                {/* Key Findings */}
                <Card className="p-6 bg-white border-0 shadow-lg">
                  <h3 className="text-xl font-bold text-[#212529] mb-6">Key Findings</h3>
                  <div className="space-y-4">
                    {analysis.keyFindings.map((finding, index) => (
                      <div key={index} className="flex items-start p-4 space-x-4 rounded-lg bg-gray-50">
                        {getTypeIcon(finding.type)}
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#212529] mb-1">{finding.title}</h4>
                          <p className="text-[#343A40]/80 text-sm">{finding.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Recommendations Sidebar */}
              <div className="space-y-6">
                <Card className="p-6 bg-white border-0 shadow-lg">
                  <h3 className="text-xl font-bold text-[#212529] mb-4">Recommendations</h3>
                  <div className="space-y-3">
                    {analysis.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-[#007BFF] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-sm text-[#343A40]">{rec}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-white border-0 shadow-lg">
                  <h3 className="text-lg font-bold text-[#212529] mb-4">Export Report</h3>
                  <p className="text-sm text-[#343A40]/70 mb-4">Download a detailed PDF report of this analysis</p>
                  <Button className="w-full bg-gradient-to-r from-[#17A2B8] to-[#007BFF] hover:opacity-90 text-white rounded-full shadow-lg shadow-blue-100 transition-all duration-300">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
