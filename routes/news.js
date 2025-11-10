const express = require("express")
const router = express.Router()

const news = [
  {
    id: 1,
    title: "SOSER Union Launches New Digital Banking Platform",
    excerpt: "We are excited to announce the upcoming launch of our comprehensive digital banking services.",
    date: "2025-10-15",
    category: "Technology",
    image: "/digital-banking-app.png",
  },
  {
    id: 2,
    title: "Annual General Assembly Meeting Scheduled",
    excerpt: "All members are invited to attend our annual general assembly meeting.",
    date: "2025-10-10",
    category: "Events",
    image: "/business-meeting-collaboration.png",
  },
  {
    id: 3,
    title: "New Branch Opening in Awi Zone",
    excerpt: "SOSER continues its expansion with plans for additional service locations.",
    date: "2025-10-05",
    category: "Expansion",
    image: "/bank-branch.jpg",
  },
  {
    id: 4,
    title: "Financial Literacy Program for Members",
    excerpt: "Join our free financial literacy workshops designed to help members make informed financial decisions.",
    date: "2025-09-28",
    category: "Education",
    image: "/education-workshop.png",
  },
]

// Get all news
router.get("/", (req, res) => {
  res.json(news)
})

// Get news by id
router.get("/:id", (req, res) => {
  const article = news.find((n) => n.id === Number.parseInt(req.params.id))
  if (article) {
    res.json(article)
  } else {
    res.status(404).json({ message: "Article not found" })
  }
})

module.exports = router
