import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              About YCTF
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Driving Climate Action Across Nigeria & Africa
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              YELF Climate Trust Foundation is an independent think tank driving transformative, science-led climate
              solutions through strategic advocacy, research, and diplomacy across Nigeria and Africa.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Community Focus</h3>
                <p className="text-gray-600 text-sm">Empowering local communities through sustainable solutions</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Evidence-Based</h3>
                <p className="text-gray-600 text-sm">Research-driven policy recommendations and solutions</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Regional Impact</h3>
                <p className="text-gray-600 text-sm">Transformative solutions across Nigeria and West Africa</p>
              </div>
            </div>

            <Button className="bg-primary-600 hover:bg-primary-700 text-white" asChild>
              <Link href="/research">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/full-shot-peasant-woman-working-outdoors_23-2149894725-N36lV6XvdsQhIPFNClk0BpTUnPE6ti.avif"
              alt="Woman working in sustainable agriculture"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-primary-600 mb-1">2019</div>
              <div className="text-gray-600 text-sm">Founded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
