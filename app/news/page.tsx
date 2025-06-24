import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, User } from "lucide-react"
import { generateMetadata } from "@/lib/seo"
import { StructuredData, structuredDataSchemas } from "@/components/seo/structured-data"
import Link from "next/link"

export const metadata: Metadata = generateMetadata({
  title: "Climate News & Insights from Nigeria and Africa",
  description:
    "Stay updated with the latest climate action news, policy insights, and research findings from YELF Climate Trust Foundation covering Nigeria and Africa's climate transition.",
  url: "/news",
})

export default function NewsPage() {
  const articles = [
    {
      id: 1,
      title: "Nigeria's Path to Net-Zero: A Comprehensive Roadmap for 2050",
      excerpt:
        "Our latest analysis outlines key strategies for Nigeria to achieve carbon neutrality while maintaining economic growth and social equity through evidence-based policy recommendations.",
      date: "2025-03-15",
      author: "YCTF Research Team",
      category: "Policy Brief",
      slug: "nigeria-net-zero-roadmap-2050",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nigeria-gas-shutterstock_2044596500.jpg-WXUYECvgkK6JuAKwly4OjfWedZ2Q1b.jpeg",
    },
    {
      id: 2,
      title: "Financing the Green Transition: Unlocking Climate Investment in West Africa",
      excerpt:
        "New research reveals innovative financing mechanisms that could mobilize $50 billion for climate projects across the West African region, focusing on renewable energy and adaptation.",
      date: "2025-01-28",
      author: "Finance Programme Team",
      category: "Research",
      slug: "financing-green-transition-west-africa",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/impact-funds-invest-banner-south-pole-v2_1145x700.jpg-M3JzwuX2KTfmrMX9lsh2wE7Dt9reCP.jpeg",
    },
    {
      id: 3,
      title: "Building Climate Resilience in Agricultural Communities: A Community-Centered Approach",
      excerpt:
        "Research on climate adaptation strategies for agricultural communities, focusing on drought-resistant crops, water management, and sustainable farming practices.",
      date: "2024-11-12",
      author: "Resilience Programme Team",
      category: "Research",
      slug: "climate-resilience-agricultural-communities",
      image: "/images/community-farming.jpeg",
    },
    {
      id: 4,
      title: "Industrial Decarbonization in Nigeria: Steel Sector Transformation Pathways",
      excerpt:
        "Comprehensive analysis of decarbonization options for Nigeria's steel industry, including hydrogen-based production, electric arc furnaces, and carbon capture technologies.",
      date: "2024-09-08",
      author: "Industry Programme Team",
      category: "Research",
      slug: "industrial-decarbonization-steel-sector",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240806-WA0003.jpg-j8RhXjEBZGI2TFhnlZwqXJFi6oBtLA.jpeg",
    },
    {
      id: 5,
      title: "Energy Transition Jobs: Creating 2 Million Green Jobs by 2030",
      excerpt:
        "Analysis of employment opportunities in Nigeria's clean energy transition, identifying pathways to create 2 million green jobs across renewable energy, efficiency, and grid modernization.",
      date: "2024-07-22",
      author: "Energy Programme Team",
      category: "Analysis",
      slug: "energy-transition-green-jobs-2030",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/commonwealth-sustainable-energy-transition-agenda.jpg-nevLIc9UxillvC8Y772bB4W6oNpNdf.jpeg",
    },
    {
      id: 6,
      title: "Climate Governance Reform: Strengthening Nigeria's Institutional Framework",
      excerpt:
        "Policy recommendations for reforming Nigeria's climate governance structures to improve coordination between federal, state, and local levels for effective climate action.",
      date: "2024-05-03",
      author: "Governance Programme Team",
      category: "Policy Brief",
      slug: "climate-governance-reform-nigeria",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nature-based%20projects_A%20man%20working%20on%20a%20tree%20nursery%20in%20Kenya%20as%20a%20part%20of%20DGB%20Hongera%20Reforestation%20Project_visual%203-IlxEaUB5jMxWx0TLjoFgLadEL4mrtA.png",
    },
  ]

  const jsonLd = structuredDataSchemas.article(
    "Climate News & Insights",
    "Latest climate action news and research from Nigeria and Africa",
    "2025-03-15",
    "YELF Climate Trust Foundation",
    "https://yelfclimatetrustfoundation.org/news",
  )

  return (
    <>
      <StructuredData data={jsonLd} />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 text-white">
          <div className="container-max">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Climate News & Insights</h1>
              <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
                Stay informed about the latest climate action developments, policy insights, and research findings from
                across Nigeria and Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
                >
                  <CardContent className="p-0">
                    <Link href={`/news/${article.slug}`}>
                      <div className="relative overflow-hidden">
                        <img
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {article.category}
                          </span>
                        </div>
                      </div>
                    </Link>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(article.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                        <span className="mx-2">•</span>
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>

                      <Link href={`/news/${article.slug}`}>
                        <h2 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                          {article.title}
                        </h2>
                      </Link>

                      <p className="text-gray-600 mb-6 leading-relaxed">{article.excerpt}</p>

                      <Link href={`/news/${article.slug}`}>
                        <Button
                          variant="ghost"
                          className="p-0 h-auto text-yellow-600 hover:text-yellow-700 font-semibold"
                        >
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-3xl p-8 lg:p-16 text-white text-center">
              <h2 className="text-3xl font-serif font-bold mb-6">Never Miss Climate Action Updates</h2>
              <p className="text-yellow-100 mb-8 text-lg max-w-2xl mx-auto">
                Subscribe to our newsletter for weekly climate insights, policy updates, and research findings delivered
                directly to your inbox.
              </p>
              <form 
                name="newsletter" 
                method="POST" 
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                {/* Netlify hidden inputs */}
                <input type="hidden" name="form-name" value="newsletter" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button type="submit" className="bg-white text-yellow-600 hover:bg-yellow-50 px-8 py-3">
                  Subscribe
                </Button>
              </form>
              <p className="text-yellow-200 text-sm mt-4">Join 5,000+ climate leaders and policymakers</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
