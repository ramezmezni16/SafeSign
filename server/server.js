const express = require("express")
const cors = require("cors")
const multer = require("multer")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(cors())
app.use(express.json())

// Import routes
const contractRoutes = require("./routes/contractRoutes")
app.use("/api", contractRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
