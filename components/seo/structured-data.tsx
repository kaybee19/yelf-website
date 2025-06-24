interface StructuredDataProps {
  data: Record<string, any>
}

export function StructuredData({ data }: StructuredDataProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export const structuredDataSchemas = {
  article: (title: string, description: string, publishDate: string, author: string, url: string) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "YELF Climate Trust Foundation",
      logo: {
        "@type": "ImageObject",
        url: "https://yelfclimatetrustfoundation.org/logo.png",
      },
    },
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }),

  program: (name: string, description: string, url: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "YELF Climate Trust Foundation",
    },
    areaServed: ["Nigeria", "Africa"],
    serviceType: "Climate Action Program",
    url,
  }),

  research: (name: string, description: string, url: string) => ({
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    name,
    description,
    researcher: {
      "@type": "Organization",
      name: "YELF Climate Trust Foundation",
    },
    url,
    about: "Climate Change Research",
  }),

  faq: (questions: Array<{ question: string; answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  }),
}
