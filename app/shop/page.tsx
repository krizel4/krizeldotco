import { ProductCard } from '@/components/ProductCard'
import { products } from '@/data/products'

export const metadata = {
  title: 'Fitness Shop - Supplements & Gear - krizel',
  description: 'Premium supplements, workout gear, and fitness equipment to maximize your training results.',
}

export default function ShopPage() {
  const categories = ['All Products', 'Supplements', 'Gear', 'Apparel']

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-accent-yellow text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-white mb-6">Fitness Shop</h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Premium supplements, gear, and equipment to help you crush your fitness goals
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white border-b sticky top-20 z-40">
        <div className="container-custom py-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-accent-cream">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-display text-secondary">All Products</h2>
              <p className="text-gray-600">{products.length} items available</p>
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
              <option>Newest</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-display text-secondary mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">All products lab-tested and verified for purity and effectiveness</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-accent-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-display text-secondary mb-2">Best Price Match</h3>
              <p className="text-gray-600">Competitive prices with our lowest price guarantee</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-accent-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-display text-secondary mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

