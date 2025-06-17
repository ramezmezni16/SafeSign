const analyzeContract = async (req, res) => {
  const file = req.file

  if (!file) {
    return res.status(400).json({ error: "No file uploaded" })
  }

  // Simulate AI analysis – this is where real AI logic would go
  setTimeout(() => {
    res.json({
      summary:
        "This is a standard employment contract with competitive terms. The agreement includes standard clauses for confidentiality, non-compete, and intellectual property rights.",
      keyFindings: [
        {
          type: "positive",
          title: "Fair Compensation Terms",
          description:
            "The salary and benefits package appears competitive for the industry standard.",
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
          description:
            "Standard 30-day notice period with severance pay provisions.",
        },
      ],
      riskScore: 6.5,
      recommendations: [
        "Consider negotiating the non-compete period to 6 months instead of 12.",
        "Clarify the intellectual property clause to exclude personal projects unrelated to work.",
        "Request clarification on the remote work policy terms.",
      ],
    })
  }, 2000)
}

module.exports = {
  analyzeContract,
}
