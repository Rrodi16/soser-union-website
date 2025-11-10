const express = require("express")
const router = express.Router()

// Services data
const services = {
  savings: [
    {
      id: 1,
      name: "Compulsory Saving",
      description: "A mandatory savings type that cannot be withdrawn without due purpose and members' decision.",
      icon: "shield",
    },
    {
      id: 2,
      name: "Voluntary Saving",
      description: "Members can easily save and withdraw like most banks' savings today.",
      icon: "wallet",
    },
    {
      id: 3,
      name: "Contractual Saving",
      description: "Based on agreements between savers and the union with certain terms and conditions.",
      icon: "document",
    },
    {
      id: 4,
      name: "Current Account",
      description: "Non-interest-bearing current account, very easy to withdraw.",
      icon: "card",
    },
    {
      id: 5,
      name: "Children Saving",
      description: "A saving type with similar but less restrictive conditions compared to contractual savings.",
      icon: "users",
    },
    {
      id: 6,
      name: "Special Savings",
      description:
        "Includes financial literacy, low minimum balance, educational resources, and parental oversight options.",
      icon: "star",
    },
  ],
  loans: [
    {
      id: 1,
      name: "Short-Term Loans",
      description: "For immediate personal or business needs (up to 1 year).",
      duration: "1 year",
      icon: "clock",
    },
    {
      id: 2,
      name: "Medium-Term Loans",
      description: "Typically used for asset purchases or small business expansion (2-5 years).",
      duration: "2-5 years",
      icon: "trending",
    },
    {
      id: 3,
      name: "Long-Term Loans",
      description: "For large project financing (6-10 years).",
      duration: "6-10 years",
      icon: "building",
    },
    {
      id: 4,
      name: "Manufacturing Loan",
      description: "For equipment financing, factory setup, raw material purchase and production expansion.",
      icon: "factory",
    },
    {
      id: 5,
      name: "Agricultural Loan",
      description: "For farm equipment, seed and fertilizer, irrigation systems, and livestock purchase.",
      icon: "leaf",
    },
    {
      id: 6,
      name: "Construction Loan",
      description: "For building materials, labor costs, project financing, and property development.",
      icon: "home",
    },
    {
      id: 7,
      name: "Service Loan",
      description: "For business expansion, service equipment, working capital, and technology upgrade.",
      icon: "briefcase",
    },
    {
      id: 8,
      name: "Group Loans",
      description: "Offered to cooperative groups for joint projects.",
      icon: "people",
    },
  ],
  insurance: [
    {
      id: 1,
      name: "Life Loan Insurance",
      description:
        "Protection that covers the remaining loan repayment in case of death of either the debtor or the debtor's spouse, with a funeral service benefit.",
      icon: "umbrella",
    },
    {
      id: 2,
      name: "Saving Led Life Insurance",
      description:
        "Protection that provides double the balance of saving in case of death of either the saver or the saver's spouse with a funeral service benefit.",
      icon: "heart",
    },
  ],
  digital: [
    {
      id: 1,
      name: "Mobile Banking",
      description: "Account balance inquiry, money transfer, bill payments, transaction history.",
      icon: "phone",
      status: "Coming Soon",
    },
    {
      id: 2,
      name: "Digital Payments",
      description: "QR code payments, contactless payments, online shopping, utility bill payments, merchant payments.",
      icon: "credit-card",
      status: "Coming Soon",
    },
    {
      id: 3,
      name: "TeleBirr Integration",
      description: "Instant transfers, cash in/out, airtime purchase, international remittances, merchant payments.",
      icon: "smartphone",
      status: "Coming Soon",
    },
    {
      id: 4,
      name: "Online Banking",
      description:
        "Account management, loan applications, investment tracking, statement downloads, security settings.",
      icon: "monitor",
      status: "Coming Soon",
    },
  ],
}

// Get all services
router.get("/", (req, res) => {
  res.json(services)
})

// Get services by category
router.get("/:category", (req, res) => {
  const category = req.params.category
  if (services[category]) {
    res.json(services[category])
  } else {
    res.status(404).json({ message: "Category not found" })
  }
})

module.exports = router
