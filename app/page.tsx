import { Hero } from '@/components/Hero'
import { FeaturedBlogs } from '@/components/FeaturedBlogs'
import { ProductCarousel } from '@/components/ProductCarousel'
import { CTASection } from '@/components/CTASection'
import { CategoryGrid } from '@/components/CategoryGrid'
import { products } from '@/data/products'
import { blogPosts } from '@/data/blog-posts'

export default function Home() {
  const featuredProducts = products.slice(0, 6)
  const featuredPosts = blogPosts.slice(0, 3)

  return (
    <>
      <Hero 
        title="Transform Your Fitness Journey Today"
        subtitle="Expert workout tips, delicious meal plans, and fitness guidance to help you reach your goals"
        ctaText="Start Training"
        ctaLink="/blog"
        imageSrc="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200"
        secondaryCtaText="View Meal Plans"
        secondaryCtaLink="/resources/meal-plans"
      />
      
      <CategoryGrid />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-secondary mb-4">Latest Fitness Tips & Recipes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert workout advice and delicious meal ideas to fuel your fitness journey
            </p>
          </div>
          <FeaturedBlogs posts={featuredPosts} />
        </div>
      </section>

      <section className="section-padding bg-accent-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-secondary mb-4">Fitness Essentials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium supplements, gear, and equipment to maximize your results
            </p>
          </div>
          <ProductCarousel products={featuredProducts} />
        </div>
      </section>

      <CTASection />
    </>
  )
}

