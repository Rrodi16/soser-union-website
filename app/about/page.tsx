import { Calendar, Users, Building, Award } from "lucide-react"

export default function About() {
  const milestones = [
    { year: "2008", event: "SOSER Union established with 23 primary cooperatives" },
    { year: "2010", event: "Expanded to serve over 50 cooperative groups" },
    { year: "2015", event: "Opened Injibara and Adiskedam branches" },
    { year: "2020", event: "Launched centralized online system" },
    { year: "2025", event: "Serving 80+ cooperatives with 28,000+ members" },
  ]

  const values = [
    {
      title: "Community First",
      description: "We prioritize the needs and wellbeing of our communities in every decision we make.",
      icon: Users,
    },
    {
      title: "Trust & Integrity",
      description: "We maintain the highest standards of transparency and ethical conduct in all our operations.",
      icon: Award,
    },
    {
      title: "Inclusive Growth",
      description:
        "We believe in creating opportunities for everyone, regardless of their background or circumstances.",
      icon: Building,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About SOSER Union</h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-pretty">
            A cooperative financial institution dedicated to empowering communities through accessible financial
            services since 2008.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our History</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                SOSER Saving & Credit Cooperative Union LTD was established on March 24, 2008, and certified by the ANRS
                Cooperative Agency under registration code 02/1729 on June 19, 2008.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Founded by 23 primary cooperative societies with an initial paid-up capital of 666,000 ETB and a total
                membership of 28,194 individuals, SOSER has grown to become one of the leading cooperative financial
                institutions in the Awi Zone.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we operate four main branches and manage over 80 cooperative saving and credit groups, employing
                427+ staff members dedicated to serving our community.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <img
                src="/cooperative-bank-building.jpg"
                alt="SOSER Union Building"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Calendar className="text-accent-foreground" size={24} />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">{milestone.year}</div>
                  <p className="text-lg text-muted-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-card rounded-lg p-8 shadow-sm">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4">
                    <Icon className="text-accent-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">Mission</h2>
              <p className="text-lg leading-relaxed">
                SOSER Saving & Credit Cooperative Union LTD is committed to addressing the social and economic issues
                faced by members and their communities by offering financial products and services that members can
                manage independently and that are not overly complicated to access.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">Vision</h2>
              <p className="text-lg leading-relaxed">
                To become a leading cooperative bank that is continuously accessible, preferred and popular among our
                members and communities throughout Ethiopia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
