import { Button } from "@/components/ui/button";

export default function PartnersSection() {
  const partners = [
    {
      name: "Partner 1",
      logo: "/images/partners/partner-1.webp",
    },
    { 
      name: "Partner 2", 
      logo: "/images/partners/partner-2.png" 
    },
    { 
      name: "Partner 3", 
      logo: "/images/partners/partner-3.png" 
    },
    { 
      name: "Partner 4", 
      logo: "/images/partners/partner-4.webp" 
    },
    {
      name: "Partner 5",
      logo: "/images/partners/partner-5.jpg",
    },
    {
      name: "Partner 6",
      logo: "/images/partners/partner-6.jpg",
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 group"
            >
              <div className="h-16 w-full flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full w-auto h-auto object-contain"
                  style={{ height: '64px' }}
                />
              </div>
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
