import type { Metadata } from "next"

export const siteConfig = {
  name: "YELF Climate Trust Foundation",
  description:
    "Independent climate change think tank driving transformative solutions for a resilient, emissions-free future in Nigeria and Africa through strategic advocacy, research, and diplomacy.",
  url: "https://yelfclimatetrustfoundation.org",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/yctf_nigeria",
    linkedin: "https://linkedin.com/company/yelf-climate-trust-foundation",
    facebook: "https://facebook.com/yctfnigeria",
  },
  keywords: [
    "climate change Nigeria",
    "climate action Africa",
    "renewable energy Nigeria",
    "climate policy",
    "sustainable development",
    "energy transition",
    "climate finance",
    "climate governance",
    "climate resilience",
    "green economy Nigeria",
    "Paris Agreement Nigeria",
    "climate research Africa",
    "decarbonization Nigeria",
    "climate think tank",
  ],
}

export function generateMetadata({
  title,
  description,
  image,
  url,
  type = "website",
  publishedTime,
  authors,
}: {
  title: string
  description: string
  image?: string
  url?: string
  type?: "website" | "article"
  publishedTime?: string
  authors?: string[]
}): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`
  const fullUrl = url ? `${siteConfig.url}${url}` : siteConfig.url
  const ogImage = image || siteConfig.ogImage

  return {
    title: fullTitle,
    description,
    keywords: siteConfig.keywords,
    authors: authors ? authors.map((name) => ({ name })) : [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type,
      locale: "en_US",
      url: fullUrl,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === "article" &&
        publishedTime && {
          publishedTime,
        }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@yctf_nigeria",
      site: "@yctf_nigeria",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export const jsonLd = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 5 Maidabino Plaza",
      addressLocality: "Wuse Zone 5",
      addressRegion: "FCT",
      addressCountry: "Nigeria",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-706-196-1066",
      contactType: "customer service",
      email: "bello.farooq@yelfclimatetrustfoundation.org",
    },
    sameAs: [siteConfig.links.twitter, siteConfig.links.linkedin, siteConfig.links.facebook],
    areaServed: ["Nigeria", "Africa"],
    knowsAbout: [
      "Climate Change",
      "Renewable Energy",
      "Climate Policy",
      "Sustainable Development",
      "Energy Transition",
      "Climate Finance",
    ],
  },
}
