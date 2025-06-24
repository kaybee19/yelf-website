import type { Metadata } from "next"
import { generateMetadata } from "@/lib/seo"

export const metadata: Metadata = generateMetadata({
  title: "Climate News & Insights from Nigeria and Africa",
  description:
    "Stay updated with the latest climate action news, policy insights, and research findings from YELF Climate Trust Foundation covering Nigeria and Africa's climate transition.",
  url: "/news",
})

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 