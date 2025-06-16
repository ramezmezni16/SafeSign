"use server"

import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function analyzeContract(contractText) {
  try {
    const result = await streamText({
      model: openai("gpt-4o"),
      system: `You are a legal contract analysis expert. Analyze the provided contract and return a JSON response with the following structure:
      {
        "summary": "Brief overview of the contract",
        "keyFindings": [
          {
            "type": "positive|warning|risk",
            "title": "Finding title",
            "description": "Detailed description"
          }
        ],
        "riskScore": number between 1-10,
        "recommendations": ["recommendation 1", "recommendation 2"]
      }`,
      prompt: `Please analyze this contract and provide insights: ${contractText}`,
    })

    return result
  } catch (error) {
    console.error("Error analyzing contract:", error)
    throw new Error("Failed to analyze contract")
  }
}