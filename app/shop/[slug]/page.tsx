'use client'

import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/data/products'
import { ProductCarousel } from '@/components/ProductCarousel'
import { MainLayout } from '@/components/MainLayout'
import { notFound } from 'next/navigation'
import { useState } from 'react'

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <MainLayout>
      {/* Product Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-primary">Shop</Link>
            <span>/</span>
            <span className="text-gray-900">{product.category}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-accent-yellow text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              {product.isAffiliate && (
                <span className="inline-block bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Partner Product
                </span>
              )}
              
              <h1 className="text-secondary mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-2xl ${i < Math.floor(product.rating) ? 'text-accent-yellow' : 'text-gray-300'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-lg font-medium">{product.rating}</span>
                </div>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-5xl font-bold text-primary">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-400 line-through">${product.originalPrice}</span>
                )}
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Add to Cart / Affiliate Button */}
              <div className="space-y-4 mb-8">
                {!product.isAffiliate ? (
                  <>
                    <div className="flex items-center gap-4">
                      <label className="text-gray-700 font-medium">Quantity:</label>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-6 py-2 border-x">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button className="btn btn-primary w-full text-lg py-4">
                      Add to Cart - ${(product.price * quantity).toFixed(2)}
                    </button>
                  </>
                ) : (
                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full text-lg py-4 block"
                  >
                    View on Partner Site →
                  </a>
                )}
                <button className="btn btn-outline w-full">
                  Add to Wishlist
                </button>
              </div>

              {/* Product Features */}
              <div className="bg-accent-cream rounded-xl p-6 mb-8">
                <h3 className="font-display text-xl text-secondary mb-4">Product Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">High quality materials and construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Designed by wellness experts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">30-day money-back guarantee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Free shipping on orders over $50</span>
                  </li>
                </ul>
              </div>

              {/* Shipping Info */}
              <div className="border-t pt-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <span>Ships within 2-3 business days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description Tabs */}
          <div className="mt-16 border-t pt-16">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-display text-secondary mb-6">About This Product</h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  This carefully selected product is designed to support your mental wellness journey. 
                  Whether you&apos;re looking to establish a mindfulness practice, improve your sleep, or 
                  enhance your self-care routine, this item has been chosen for its quality and effectiveness.
                </p>
                <p>
                  We partner with trusted brands that share our commitment to mental health awareness 
                  and wellness. Each product is tested and reviewed to ensure it meets our high standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-accent-cream">
          <div className="container-custom">
            <h2 className="text-3xl font-display text-secondary mb-8 text-center">
              You May Also Like
            </h2>
            <ProductCarousel products={relatedProducts} />
        </div>
      </section>
      )}
    </MainLayout>
  )
}

