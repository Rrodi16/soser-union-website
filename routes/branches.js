const express = require("express")
const router = express.Router()

const branches = [
  {
    id: 1,
    name: "Dangila Head Office",
    location: "Dangila, Awi Zone",
    manager: "Mr. Aschalew Mohammed",
    phone: "+251-XXX-XXXXXX",
    email: "dangila@soserunion.com",
    services: ["All Services", "Administration", "IT Support"],
    coordinates: { lat: 11.2667, lng: 36.8333 },
  },
  {
    id: 2,
    name: "Injibara Branch",
    location: "Injibara, Awi Zone",
    manager: "Mr. Yeneneh Kassahun",
    phone: "+251-XXX-XXXXXX",
    email: "injibara@soserunion.com",
    services: ["Savings", "Loans", "Insurance"],
    coordinates: { lat: 10.9667, lng: 36.9333 },
  },
  {
    id: 3,
    name: "Adiskedam Branch",
    location: "Adiskedam, Awi Zone",
    manager: "Mr. Takele Dagnaw",
    phone: "+251-XXX-XXXXXX",
    email: "adiskedam@soserunion.com",
    services: ["Savings", "Loans", "Insurance"],
    coordinates: { lat: 11.1, lng: 36.7 },
  },
  {
    id: 4,
    name: "Jawi Branch",
    location: "Jawi, Awi Zone",
    manager: "Mr. Getaneh Asabu",
    phone: "+251-XXX-XXXXXX",
    email: "jawi@soserunion.com",
    services: ["Savings", "Loans", "Insurance"],
    coordinates: { lat: 11.4, lng: 36.5 },
  },
]

// Get all branches
router.get("/", (req, res) => {
  res.json(branches)
})

// Get branch by id
router.get("/:id", (req, res) => {
  const branch = branches.find((b) => b.id === Number.parseInt(req.params.id))
  if (branch) {
    res.json(branch)
  } else {
    res.status(404).json({ message: "Branch not found" })
  }
})

module.exports = router
