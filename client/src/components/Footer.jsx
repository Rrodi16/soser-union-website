import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">SOSER Union</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A leading cooperative bank serving the Awi Zone since 2008, committed to financial inclusion and community
              development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/branches" className="text-sm hover:text-accent transition-colors">
                  Branches
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-sm hover:text-accent transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Savings Accounts</li>
              <li className="text-sm text-muted-foreground">Loan Services</li>
              <li className="text-sm text-muted-foreground">Insurance</li>
              <li className="text-sm text-muted-foreground">Digital Banking</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Dangila, Awi Zone, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+251-XXX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@soserunion.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 SOSER Saving & Credit Cooperative Union LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
