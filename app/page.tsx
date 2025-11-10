import Link from "next/link"
import { ArrowRight, Shield, TrendingUp, Users, Award } from "lucide-react"

export default function Home() {
  const stats = [
    { label: "Members", value: "28,000+", icon: Users },
    { label: "Branches", value: "4", icon: Award },
    { label: "Cooperatives", value: "80+", icon: TrendingUp },
    { label: "Years of Service", value: "17+", icon: Shield },
  ]

  const features = [
    {
      title: "Comprehensive Savings",
      description: "Multiple savings options tailored to your financial goals and lifestyle needs.",
      icon: Shield,
    },
    {
      title: "Flexible Loans",
      description: "From short-term personal loans to long-term business financing solutions.",
      icon: TrendingUp,
    },
    {
      title: "Insurance Protection",
      description: "Life and loan insurance to protect you and your family's financial future.",
      icon: Users,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Building Financial Futures Together</h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed">
              SOSER Saving & Credit Cooperative Union - Your trusted partner for savings, loans, and financial growth
              since 2008.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Explore Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4">
                    <Icon className="text-accent-foreground" size={24} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose SOSER Union?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We offer comprehensive financial services designed to meet the diverse needs of our community members.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4">
                    <Icon className="text-accent-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To address the social and economic issues faced by members and their communities by offering financial
                products and services that members can manage independently and that are not overly complicated to
                access.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become a leading cooperative bank that is continuously accessible, preferred and popular among our
                members and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Start Your Financial Journey?</h2>
          <p className="text-xl mb-8 text-muted-foreground text-pretty">
            Join thousands of members who trust SOSER Union for their financial needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-md font-medium text-lg hover:opacity-90 transition-opacity"
          >
            Get Started Today
            <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </section>
    </div>
  )
}
