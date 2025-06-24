export const dynamic = "force-static"

const routes = [
  "",
  "/about",
  "/about/governance",
  "/team",
  "/contact",
  "/programs",
  "/programs/energy",
  "/programs/industry",
  "/programs/finance",
  "/programs/governance",
  "/programs/resilience",
  "/research",
  "/research/low-carbon-economy",
  "/research/energy-transition",
  "/research/power-markets",
  "/news",
]

export default function sitemap() {
  return routes.map((route) => ({
    url: `https://www.yourdomain.com${route}`,
    lastmod: new Date(),
  }))
}
