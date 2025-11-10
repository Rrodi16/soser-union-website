"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { Wallet, TrendingUp, Shield, Smartphone } from "lucide-react"

const Services = () => {
  const [services, setServices] = useState({
    savings: [],
    loans: [],
    insurance: [],
    digital: [],
  })
  const [activeTab, setActiveTab] = useState("savings")

  useEffect(() => {
    axios
      .get("/api/services")
      .then((response) => setServices(response.data))
      .catch((error) => console.error("Error fetching services:", error))
  }, [])

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
            {services[activeTab]?.map((service) => (
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

export default Services
