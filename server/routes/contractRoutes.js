const express = require("express");
const multer = require("multer");
const { analyzeContract } = require("../controllers/contractController");

const router = express.Router();
const upload = multer(); // Configure if you need disk storage

router.post("/analyze-contract", upload.single("file"), analyzeContract);

module.exports = router;
