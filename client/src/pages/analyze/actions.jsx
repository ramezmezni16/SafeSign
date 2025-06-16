"use server"

import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function analyzeContract(contractText) {
  try {
    console.log("Contract text to analyze:", contractText) // Log input contract text

    const { textStream } = await streamText({
      model: openai("gpt-4o"),
      system: `You are a legal contract analysis expert. Analyze the provided contract thoroughly and return a JSON response ONLY, strictly in this exact format without any extra text or explanations:

{
  "summary": "Brief overview of the contract, focusing on main obligations and purpose.",
  "keyFindings": [
    {
      "type": "positive|warning|risk",
      "title": "Clear title describing the finding",
      "description": "Detailed and precise explanation of the finding, its implications, and context."
    }
  ],
  "riskScore": number between 1 and 10, // 1 means very low risk, 10 means very high risk,
  "recommendations": [
    "Specific actionable advice for improving the contract or mitigating risks."
  ]
}

Make sure the JSON is valid and parsable. Do NOT include any text outside the JSON.`,
      prompt: `Analyze the following contract text:\n\n${contractText}`,
      temperature: 0.7  // add this to get varied answers
    })

    let fullResponse = ""
    for await (const chunk of textStream) {
      fullResponse += chunk
    }

    console.log("Full response from AI:", fullResponse) // Log full AI response

    // Try to parse JSON safely by extracting JSON from response
    const jsonMatch = fullResponse.match(/\{[\s\S]*\}/) 
    if (!jsonMatch) {
      throw new Error("No JSON object found in AI response")
    }

    const parsed = JSON.parse(jsonMatch[0])
    return parsed

  } catch (error) {
    console.error("Error analyzing contract:", error)
    throw new Error("Failed to analyze contract: " + (error.message || error.toString()))
  }
}

