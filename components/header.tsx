"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    {
      name: "About",
      href: "/about",
      submenu: [
        { name: "Our Story", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "Governance", href: "/about/governance" },
      ],
    },
    {
      name: "Programs",
      href: "/programs",
      submenu: [
        { name: "Energy Transition", href: "/programs/energy" },
        { name: "Industry Decarbonization", href: "/programs/industry" },
        { name: "Climate Finance", href: "/programs/finance" },
        { name: "Governance Reform", href: "/programs/governance" },
        { name: "Resilience & Development", href: "/programs/resilience" },
      ],
    },
    {
      name: "Research",
      href: "/research",
      submenu: [
        { name: "Low-Carbon Economy", href: "/research/low-carbon-economy" },
        { name: "Energy Transition", href: "/research/energy-transition" },
        { name: "Power Markets", href: "/research/power-markets" },
      ],
    },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <Image
                src="/yelf-logo-ico.png"
                alt="YELF Climate Trust Foundation"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 ml-auto">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors font-medium"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="pt-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block py-1 text-sm text-gray-600 hover:text-primary-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
