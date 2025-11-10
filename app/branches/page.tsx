import { MapPin, Phone, Mail, User } from "lucide-react"

export default function Branches() {
  const branches = [
    {
      id: 1,
      name: "Dangila Head Office",
      location: "Dangila, Awi Zone",
      manager: "Mr. Aschalew Mohammed",
      phone: "+251-XXX-XXXXXX",
      email: "dangila@soserunion.com",
      services: ["All Services", "Administration", "IT Support"],
    },
    {
      id: 2,
      name: "Injibara Branch",
      location: "Injibara, Awi Zone",
      manager: "Mr. Yeneneh Kassahun",
      phone: "+251-XXX-XXXXXX",
      email: "injibara@soserunion.com",
      services: ["Savings", "Loans", "Insurance"],
    },
    {
      id: 3,
      name: "Adiskedam Branch",
      location: "Adiskedam, Awi Zone",
      manager: "Mr. Takele Dagnaw",
      phone: "+251-XXX-XXXXXX",
      email: "adiskedam@soserunion.com",
      services: ["Savings", "Loans", "Insurance"],
    },
    {
      id: 4,
      name: "Jawi Branch",
      location: "Jawi, Awi Zone",
      manager: "Mr. Getaneh Asabu",
      phone: "+251-XXX-XXXXXX",
      email: "jawi@soserunion.com",
      services: ["Savings", "Loans", "Insurance"],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Branches</h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-pretty">
            Visit any of our four branches across the Awi Zone for personalized service and support.
          </p>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-accent p-6">
                  <h2 className="text-2xl font-bold text-accent-foreground">{branch.name}</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground">{branch.location}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <User className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-medium">Branch Manager</div>
                      <div className="text-muted-foreground">{branch.manager}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">{branch.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">{branch.email}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="font-medium mb-2">Services Available</div>
                    <div className="flex flex-wrap gap-2">
                      {branch.services.map((service, index) => (
                        <span key={index} className="px-3 py-1 bg-muted text-sm rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="bg-card rounded-lg p-4 shadow-md">
            <div className="aspect-video bg-muted rounded flex items-center justify-center">
              <p className="text-muted-foreground">Map integration coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
