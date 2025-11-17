import Link from 'next/link'

export function Footer() {
  const footerLinks = {
    'Resources': [
      { label: 'Blog', href: '/blog' },
      { label: 'Workout Plans', href: '/resources/workout-plans' },
      { label: 'Meal Plans', href: '/resources/meal-plans' },
      { label: 'Fitness Tips', href: '/resources/fitness-tips' },
    ],
    'Shop': [
      { label: 'All Products', href: '/shop' },
      { label: 'Supplements', href: '/shop/category/supplements' },
      { label: 'Gear', href: '/shop/category/gear' },
      { label: 'Apparel', href: '/shop/category/apparel' },
    ],
    'Company': [
      { label: 'About Us', href: '/about' },
      // { label: 'Affiliate Program', href: '/affiliates' }, // Hidden for now
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  }

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-secondary font-display text-xl font-bold">K</span>
              </div>
              <span className="font-display text-2xl">krizel</span>
            </Link>
            <p className="text-accent-cream opacity-90 mb-6">
              Your fitness companion for workout tips, meal plans, and wellness guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-lime transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </a>
              <a href="#" className="hover:text-accent-lime transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-accent-lime transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display text-xl mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-accent-cream opacity-90 hover:opacity-100 hover:text-accent-lime transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white border-opacity-20 mt-12 pt-8 text-center text-accent-cream opacity-75">
          <p>&copy; {new Date().getFullYear()} krizel. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Always consult with a healthcare professional before starting any new fitness program.
          </p>
        </div>
      </div>
    </footer>
  )
}

