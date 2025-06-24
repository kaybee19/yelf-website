import type { Metadata } from "next"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import ProgramsOverview from "@/components/programs-overview"
import ImpactStats from "@/components/impact-stats"
import PartnersSection from "@/components/partners-section"
import { generateMetadata } from "@/lib/seo"

export const metadata: Metadata = generateMetadata({
  title: "Accelerating Climate Action in Nigeria & Africa",
  description:
    "YELF Climate Trust Foundation is an independent think tank driving transformative, science-led climate solutions through strategic advocacy, research, and diplomacy across Nigeria and Africa.",
  url: "/",
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "YELF Climate Trust Foundation",
  url: "https://yelfclimatetrustfoundation.org",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://yelfclimatetrustfoundation.org/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen">
        <Hero />
        <AboutSection />
        <ImpactStats />
        <ProgramsOverview />
        <PartnersSection />
      </main>
    </>
  )
}
