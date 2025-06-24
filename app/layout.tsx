import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { generateMetadata, siteConfig, jsonLd } from "@/lib/seo"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = generateMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/yelf-logo-ico.png" sizes="any" />
        <link rel="icon" href="/yelf-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/yelf-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffb800" />
        <meta name="msapplication-TileColor" content="#ffb800" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.organization) }} />
      </head>
      <body className="font-sans antialiased">
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
