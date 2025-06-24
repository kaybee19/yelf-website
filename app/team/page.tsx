import Image from "next/image"
import Link from "next/link"

const team = [
  {
    name: "Ethel Okosuns",
    role: "Chief Executive Officer",
    bio: "Ethel brings extensive experience in climate policy and sustainable development across Africa. She has led numerous initiatives focused on renewable energy transition and climate resilience building.",
    image: "/images/team/ethel.jpeg",
    linkedin: "#",
    twitter: "#",
    email: "ethel.okosuns@yelfclimatetrustfoundation.org",
  },
  {
    name: "Farooq Bello",
    role: "Co-Founder & Secretary",
    bio: "Farooq is a climate finance expert with deep knowledge of international climate mechanisms and policy frameworks. He has worked extensively on climate diplomacy and international cooperation.",
    image: "/images/team/farooq.jpeg",
    linkedin: "#",
    twitter: "#",
    email: "bello.info@yelfclimatetrustfoundation.org",
  },
  {
    name: "Yasir Musa",
    role: "Co-Founder & Chief Operations Officer",
    bio: "Yasir specializes in energy systems, industrial decarbonization, and sustainable agriculture. His expertise spans renewable energy integration, grid modernization, sustainable industrial transformation, and climate-smart agricultural practices.",
    image: "/images/team/yasir.jpeg",
    linkedin: "#",
    twitter: "#",
    email: "yasir.musa@yelfclimatetrustfoundation.org",
  },
  {
    name: "Abdelrahman Habashneh",
    role: "Programme Director",
    bio: "Abdelrahman leads our research programs and policy development initiatives. He has extensive experience in climate research, data analysis, and evidence-based policy recommendations.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "#",
    twitter: "#",
    email: "abdelrahman.habashneh@yelfclimatetrustfoundation.org",
  },
]

export default function TeamPage() {
  return (
    <div className="bg-white pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-yellow-600">Our Team</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We are a team of dedicated professionals committed to making a difference in our community.
          </p>
        </div>

        <div className="mt-20">
          <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image
                    className="h-16 w-16 rounded-full object-cover"
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    width={500}
                    height={500}
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-yellow-600">{person.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Community-Centered Approach Section */}
      <div className="bg-yellow-50 py-12 mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Community-Centered Approach</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We believe in empowering communities through intergenerational knowledge transfer.
            </p>
          </div>
          <div className="mt-10">
            <p className="text-base leading-7 text-gray-600">
              Our approach focuses on connecting younger generations with the wisdom and experience of elders. This
              fosters a sense of belonging, strengthens community bonds, and promotes sustainable development.
            </p>
            <ul role="list" className="mt-6 space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                </div>
                <p className="ml-3 text-sm leading-6 text-gray-600">
                  Facilitating mentorship programs between experienced professionals and aspiring youth.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                </div>
                <p className="ml-3 text-sm leading-6 text-gray-600">
                  Organizing workshops and seminars where elders share their knowledge and skills with the community.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-yellow-100 text-yellow-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                </div>
                <p className="ml-3 text-sm leading-6 text-gray-600">
                  Creating platforms for intergenerational dialogue and collaboration on community projects.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Join Our Mission Section */}
      <div className="bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join Our Mission</h2>
          <p className="mt-4 text-lg leading-8 text-yellow-100">
            Be a part of our journey to empower communities and create lasting change.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
