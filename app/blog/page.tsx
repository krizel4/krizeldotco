import { BlogCard } from '@/components/BlogCard'
import { blogPosts } from '@/data/blog-posts'

export const metadata = {
  title: 'Fitness Blog - Workout Tips & Meal Plans - krizel',
  description: 'Expert workout routines, nutrition advice, and delicious meal plans for your fitness journey.',
}

export default function BlogPage() {
  const categories = ['All', 'Workouts', 'Nutrition', 'Wellness']

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-secondary to-accent-green text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-white mb-6">Fitness & Nutrition Blog</h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Expert workout routines, meal plans, and nutrition tips to help you reach your fitness goals
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white border-b">
        <div className="container-custom py-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-accent-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn btn-primary">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-accent-lime to-accent-green rounded-2xl p-12">
            <h2 className="text-secondary mb-4">Never Miss a Workout or Recipe</h2>
            <p className="text-gray-700 mb-6">
              Get weekly fitness tips, workout plans, and meal prep ideas delivered to your inbox
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <button type="submit" className="btn btn-secondary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

