'use client'

import Link from 'next/link'
import { useState } from 'react'

interface SubNavItem {
  href: string
  label: string
  description?: string
}

interface NavLink {
  href: string
  label: string
  subNav?: SubNavItem[]
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    {
      href: '/blog',
      label: 'Blog',
      subNav: [
        { href: '/blog', label: 'All Posts', description: 'Browse all fitness articles' },
        { href: '/blog/category/workouts', label: 'Workouts', description: 'Training tips & routines' },
        { href: '/blog/category/nutrition', label: 'Nutrition', description: 'Meal plans & recipes' },
        { href: '/blog/category/wellness', label: 'Wellness', description: 'Recovery & health tips' },
      ],
    },
    {
      href: '/shop',
      label: 'Shop',
      subNav: [
        { href: '/shop', label: 'All Products', description: 'View entire catalog' },
        { href: '/shop/category/supplements', label: 'Supplements', description: 'Protein, vitamins & more' },
        { href: '/shop/category/gear', label: 'Gear', description: 'Training equipment' },
        { href: '/shop/category/apparel', label: 'Apparel', description: 'Workout clothing' },
      ],
    },
    {
      href: '/resources',
      label: 'Resources',
      subNav: [
        { href: '/resources', label: 'All Resources', description: 'Free fitness tools' },
        { href: '/resources/meal-plans', label: 'Meal Plans', description: 'Downloadable meal guides' },
        { href: '/resources/workout-plans', label: 'Workout Plans', description: 'Training programs' },
      ],
    },
    // { href: '/affiliates', label: 'Partner With Us' }, // Hidden for now
  ]

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-display text-xl font-bold">K</span>
            </div>
            <span className="font-display text-2xl text-secondary">krizel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.subNav && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-primary transition-colors font-medium px-4 py-2 rounded-lg hover:bg-accent-cream inline-flex items-center gap-1"
                >
                  {link.label}
                  {link.subNav && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.subNav && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fadeIn">
                    {link.subNav.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="block px-4 py-3 hover:bg-accent-cream transition-colors group"
                      >
                        <div className="font-medium text-secondary group-hover:text-primary transition-colors">
                          {subLink.label}
                        </div>
                        {subLink.description && (
                          <div className="text-sm text-gray-500 mt-0.5">
                            {subLink.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/shop" className="btn btn-primary ml-4">
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-800 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-800 transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-800 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-2">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block text-gray-700 hover:text-primary transition-colors font-medium py-2"
                  onClick={() => !link.subNav && setIsOpen(false)}
                >
                  {link.label}
                </Link>
                {link.subNav && (
                  <div className="pl-4 space-y-1 mt-1">
                    {link.subNav.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="block text-sm text-gray-600 hover:text-primary transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="/shop" 
              className="btn btn-primary w-full"
              onClick={() => setIsOpen(false)}
            >
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

