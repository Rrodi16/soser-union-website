"use client"

import { useState } from "react"
import { Wallet, TrendingUp, Shield, Smartphone } from "lucide-react"

export default function Services() {
  const [activeTab, setActiveTab] = useState("savings")

  const services = {
    savings: [
      {
        id: 1,
        name: "Compulsory Saving",
        description: "A mandatory savings type that cannot be withdrawn without due purpose and members' decision.",
      },
      {
        id: 2,
        name: "Voluntary Saving",
        description: "Members can easily save and withdraw like most banks' savings today.",
      },
      {
        id: 3,
        name: "Contractual Saving",
        description: "Based on agreements between savers and the union with certain terms and conditions.",
      },
      {
        id: 4,
        name: "Current Account",
        description: "Non-interest-bearing current account, very easy to withdraw.",
      },
      {
        id: 5,
        name: "Children Saving",
        description: "A saving type with similar but less restrictive conditions compared to contractual savings.",
      },
      {
        id: 6,
        name: "Special Savings",
        description:
          "Includes financial literacy, low minimum balance, educational resources, and parental oversight options.",
      },
    ],
    loans: [
      {
        id: 1,
        name: "Short-Term Loans",
        description: "For immediate personal or business needs (up to 1 year).",
        duration: "1 year",
      },
      {
        id: 2,
        name: "Medium-Term Loans",
        description: "Typically used for asset purchases or small business expansion (2-5 years).",
        duration: "2-5 years",
      },
      {
        id: 3,
        name: "Long-Term Loans",
        description: "For large project financing (6-10 years).",
        duration: "6-10 years",
      },
      {
        id: 4,
        name: "Manufacturing Loan",
        description: "For equipment financing, factory setup, raw material purchase and production expansion.",
      },
      {
        id: 5,
        name: "Agricultural Loan",
        description: "For farm equipment, seed and fertilizer, irrigation systems, and livestock purchase.",
      },
      {
        id: 6,
        name: "Construction Loan",
        description: "For building materials, labor costs, project financing, and property development.",
      },
      {
        id: 7,
        name: "Service Loan",
        description: "For business expansion, service equipment, working capital, and technology upgrade.",
      },
      {
        id: 8,
        name: "Group Loans",
        description: "Offered to cooperative groups for joint projects.",
      },
    ],
    insurance: [
      {
        id: 1,
        name: "Life Loan Insurance",
        description:
          "Protection that covers the remaining loan repayment in case of death of either the debtor or the debtor's spouse, with a funeral service benefit.",
      },
      {
        id: 2,
        name: "Saving Led Life Insurance",
        description:
          "Protection that provides double the balance of saving in case of death of either the saver or the saver's spouse with a funeral service benefit.",
      },
    ],
    digital: [
      {
        id: 1,
        name: "Mobile Banking",
        description: "Account balance inquiry, money transfer, bill payments, transaction history.",
        status: "Coming Soon",
      },
      {
        id: 2,
        name: "Digital Payments",
        description:
          "QR code payments, contactless payments, online shopping, utility bill payments, merchant payments.",
        status: "Coming Soon",
      },
      {
        id: 3,
        name: "TeleBirr Integration",
        description: "Instant transfers, cash in/out, airtime purchase, international remittances, merchant payments.",
        status: "Coming Soon",
      },
      {
        id: 4,
        name: "Online Banking",
        description:
          "Account management, loan applications, investment tracking, statement downloads, security settings.",
        status: "Coming Soon",
      },
    ],
  }

  const tabs = [
    { id: "savings", label: "Savings", icon: Wallet },
    { id: "loans", label: "Loans", icon: TrendingUp },
    { id: "insurance", label: "Insurance", icon: Shield },
    { id: "digital", label: "Digital Banking", icon: Smartphone },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-pretty">
            Comprehensive financial solutions designed to meet your personal and business needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-foreground hover:bg-accent/10"
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[activeTab as keyof typeof services]?.map((service: any) => (
              <div key={service.id} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                {service.duration && (
                  <div className="text-sm text-accent font-medium">Duration: {service.duration}</div>
                )}
                {service.status && (
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {service.status}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-balance">Need Help Choosing a Service?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Our team is here to help you find the perfect financial solution for your needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-md font-medium text-lg hover:opacity-90 transition-opacity"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  )
}
