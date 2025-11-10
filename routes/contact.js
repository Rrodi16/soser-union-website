const express = require("express")
const router = express.Router()

// Contact form submission
router.post("/", (req, res) => {
  const { name, email, phone, subject, message } = req.body

  // In production, this would send an email or save to database
  console.log("Contact form submission:", { name, email, phone, subject, message })

  res.json({
    success: true,
    message: "Thank you for contacting us. We will get back to you soon.",
  })
})

module.exports = router
