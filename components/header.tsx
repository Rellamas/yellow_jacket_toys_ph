"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "PRODUCTS", href: "/products" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header className="sticky top-0 z-50 w-full bg-orange-500 text-white shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="flex h-10 w-10 items-center justify-center font-bold text-xl bg-yellow-300 text-orange-600 rounded-full">
            ⭐
          </div>
          <span className="hidden font-bold text-lg sm:inline">YELLOW JACKET</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors tracking-wide ${
                isActive(link.href) ? "text-yellow-200" : "hover:text-yellow-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-block px-6 py-2 bg-yellow-300 text-orange-600 font-bold rounded-full text-sm hover:bg-yellow-200 transition-colors"
        >
          CONTACT US
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-orange-600">
          <div className="space-y-1 px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 text-sm font-medium transition-colors rounded ${
                  isActive(link.href) ? "bg-orange-600" : "hover:bg-orange-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full px-3 py-2 bg-yellow-300 text-orange-600 font-bold rounded mt-2 text-center"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
