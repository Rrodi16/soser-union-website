const express = require("express")
const cors = require("cors")
const path = require("path")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// API Routes
app.use("/api/services", require("./routes/services"))
app.use("/api/branches", require("./routes/branches"))
app.use("/api/contact", require("./routes/contact"))
app.use("/api/news", require("./routes/news"))

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")))

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
  })
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
