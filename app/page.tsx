import Image from 'next/image'

export default function UnderConstruction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-cream via-white to-accent-green flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-display text-3xl font-bold">K</span>
            </div>
            <span className="font-display text-4xl text-secondary">krizel</span>
          </div>

          {/* Main Content */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-display text-secondary mb-6 leading-tight italic">
              progress in motion.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="font-display text-xl text-secondary mb-2">Workout Plans</h3>
              <p className="text-gray-600">Workouts designed for every level (and every kind of busy).</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🥗</div>
              <h3 className="font-display text-xl text-secondary mb-2">Meal Prep Guides</h3>
              <p className="text-gray-600">Fuel for you, win for the kids—healthy food made family-proof.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🧘🏻‍♀️</div>
              <h3 className="font-display text-xl text-secondary mb-2">Self-Care</h3>
              <p className="text-gray-600">Self-care is a must in every mom-strength routine.</p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display text-secondary mb-4">
              Get Notified at Launch
            </h2>
            <p className="text-gray-600 mb-6">
              Be the first to know when we go live. Plus, get exclusive early access to our best content!
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
              />
              <button
                type="submit"
                className="btn btn-primary text-lg py-4 px-8 whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="max-w-xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700">Site Progress</span>
              <span className="text-sm font-bold text-primary">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-1000"
                style={{ width: '85%' }}
              ></div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-center space-x-6">
              <a href="https://instagram.com/krizelbeliftingkrizelbefit" className="text-gray-600 hover:text-primary transition-colors" aria-label="Instagram">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </a>
{/*               
              <a href="#" className="text-gray-600 hover:text-primary transition-colors" aria-label="Facebook">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
