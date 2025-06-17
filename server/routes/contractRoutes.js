const express = require("express")
const router = express.Router()
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() }) // Store file in memory
const { analyzeContract } = require("../controllers/contractController")

// Route: POST /api/analyze-contract
router.post("/analyze-contract", upload.single("file"), analyzeContract)

module.exports = router
