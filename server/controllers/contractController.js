const pdfParse = require("pdf-parse");
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const analyzeContract = async (req, res) => {
  try {
    const fileBuffer = req.file.buffer;
    const { text } = await pdfParse(fileBuffer);

    const gptResponse = await openai.chat.completions.create({
      model: "gpt-4o", // or gpt-3.5-turbo
      messages: [
        {
          role: "system",
          content: "You are a legal assistant. Analyze this contract and provide summary, risks, and suggestions.",
        },
        {
          role: "user",
          content: text,
        },
      ],
    });

    res.json({
      summary: gptResponse.choices[0].message.content,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong during analysis." });
  }
};

module.exports = { analyzeContract };
