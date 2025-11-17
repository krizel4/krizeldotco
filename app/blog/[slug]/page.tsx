import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/data/blog-posts'
import { RecommendedBlogs } from '@/components/RecommendedBlogs'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Krizel`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Article Header */}
      <article className="bg-white">
        <div className="container-custom py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">{post.category}</span>
          </nav>

          {/* Category Badge */}
          {post.category && (
            <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              {post.category}
            </span>
          )}

          {/* Title */}
          <h1 className="text-secondary mb-6 max-w-4xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-6 mb-8 text-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent-green flex items-center justify-center text-secondary font-semibold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-gray-900">{post.author}</div>
                <div className="text-sm">Mental Health Expert</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <time dateTime={post.date}>{post.date}</time>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              {post.content && (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              )}

              <h2 className="text-3xl font-display text-secondary mt-12 mb-4">
                Understanding the Impact
              </h2>
              <p>
                Mental health is a crucial aspect of our overall wellbeing, yet it's often overlooked or stigmatized. 
                By understanding the factors that affect our mental health, we can take proactive steps to maintain 
                and improve our psychological wellness.
              </p>

              <h3 className="text-2xl font-display text-secondary mt-8 mb-4">
                Practical Strategies
              </h3>
              <p>
                Implementing effective strategies for mental wellness doesn't have to be complicated. Start with 
                small, manageable changes that you can sustain over time. Remember, progress isn't linear, and 
                it's okay to have setbacks along the way.
              </p>

              <div className="bg-accent-cream border-l-4 border-primary p-6 rounded-r-lg my-8">
                <p className="text-lg font-medium text-secondary mb-2">Key Takeaway</p>
                <p className="text-gray-700">
                  Your mental health journey is unique to you. What works for one person may not work for another, 
                  so be patient with yourself as you discover what helps you thrive.
                </p>
              </div>

              <h3 className="text-2xl font-display text-secondary mt-8 mb-4">
                Moving Forward
              </h3>
              <p>
                Remember that seeking help is a sign of strength, not weakness. Whether you're working with a 
                therapist, joining a support group, or using self-help resources, taking steps to support your 
                mental health is always worthwhile.
              </p>
            </div>
          </div>

          {/* Share Section */}
          <div className="max-w-4xl mx-auto mt-12 pt-8 border-t">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Share this article</h3>
                <div className="flex gap-4">
                  <button className="text-gray-600 hover:text-primary transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-primary transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-primary transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6" fill="none" stroke="white" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              </div>
              <Link href="/blog" className="btn btn-outline">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Recommended Posts */}
      <RecommendedBlogs posts={blogPosts} currentPostSlug={post.slug} />

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-12">
            <h2 className="text-white mb-4">Need Support?</h2>
            <p className="text-xl mb-8 opacity-90">
              Explore our resources or connect with our community for support
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/resources" className="btn bg-white text-primary hover:bg-opacity-90">
                View Resources
              </Link>
              <Link href="/shop" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
                Shop Wellness Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

