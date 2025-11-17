import Link from 'next/link'

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">
            Join Our Fitness Community
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Get exclusive access to workout plans, meal prep tips, and special offers. 
            Join thousands of others crushing their fitness goals.
          </p>
          
          <form className="max-w-md mx-auto flex gap-4 mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
              required
            />
            <button 
              type="submit"
              className="btn bg-accent-yellow text-gray-900 hover:bg-opacity-90 font-semibold whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-sm text-white opacity-75">
            No spam, unsubscribe anytime. Your privacy is important to us.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-12 border-t border-white border-opacity-20">
            <div className="text-center">
              <div className="text-4xl font-display font-bold">Free</div>
              <div className="text-sm opacity-90">Weekly Resources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold">24/7</div>
              <div className="text-sm opacity-90">Support Access</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold">Expert</div>
              <div className="text-sm opacity-90">Advice & Tips</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

