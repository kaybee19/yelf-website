import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const footerLinks = {
    about: [
      { name: "Our Story", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Governance", href: "/about/governance" },
    ],
    programs: [
      { name: "Energy Transition", href: "/programs/energy" },
      { name: "Industry Decarbonization", href: "/programs/industry" },
      { name: "Climate Finance", href: "/programs/finance" },
      { name: "Resilience & Development", href: "/programs/resilience" },
      { name: "Governance Reform", href: "/programs/governance" },
    ],
    resources: [
      { name: "Low-Carbon Economy", href: "/research/low-carbon-economy" },
      { name: "Energy Transition", href: "/research/energy-transition" },
      { name: "Power Markets", href: "/research/power-markets" },
    ],
    connect: [
      { name: "Contact Us", href: "/contact" },
      { name: "Newsletter", href: "/news" },
      { name: "Partner With Us", href: "mailto:info@yelfclimatetrustfoundation.org?subject=Media Inquiry" },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-48 h-28 relative">
                <Image
                  src="/yelf-logo2.png"
                  alt="YELF Climate Trust Foundation"
                  width={192}
                  height={192}
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              YELF Climate Trust Foundation is an independent think tank driving transformative, science-led climate
              solutions through strategic advocacy, research, and diplomacy across Nigeria and Africa.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="https://maps.google.com/?q=Suite+5+Maidabino+Plaza,+Wuse+Zone+5,+Abuja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
              >
                <MapPin className="h-5 w-5 mr-3 text-primary-400" />
                Suite 5 Maidabino Plaza, Wuse Zone 5, Abuja
              </a>
              <a 
                href="tel:+2347061961066"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Phone className="h-5 w-5 mr-3 text-primary-400" />
                +234 706 196 1066
              </a>
              <a 
                href="mailto:info@yelfclimatetrustfoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Mail className="h-5 w-5 mr-3 text-primary-400" />
                info@yelfclimatetrustfoundation.org
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Programs</h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Research</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                    {...(link.href.startsWith('mailto:') && {
                      target: "_blank",
                      rel: "noopener noreferrer"
                    })}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
