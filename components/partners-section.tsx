import { Button } from "@/components/ui/button";

export default function PartnersSection() {
  const partners = [
    {
      name: "African Development Bank",
      logo: "/placeholder.svg?height=80&width=200",
    },
    { name: "ECOWAS", logo: "/placeholder.svg?height=80&width=200" },
    { name: "African Union", logo: "/placeholder.svg?height=80&width=200" },
    { name: "UNFCCC", logo: "/placeholder.svg?height=80&width=200" },
    {
      name: "Islamic Development Bank",
      logo: "/placeholder.svg?height=80&width=200",
    },
    {
      name: "Nigeria National Assembly",
      logo: "/placeholder.svg?height=80&width=200",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Strategic Partners & Collaborators
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work in ongoing dialogue with stakeholders from politics,
            institutions, business, civil society, and the international
            community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-h-12 w-auto"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Interested in partnering with us to accelerate climate action in
            Africa?
          </p>
          <Button 
            className="bg-primary-600 hover:bg-primary-700 text-white"
            asChild
          >
            <a 
              href="mailto:info@yelfclimatetrustfoundation.org?subject=Partnership Opportunities"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Partnership Opportunities
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
