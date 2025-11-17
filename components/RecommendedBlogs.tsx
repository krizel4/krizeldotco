import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/types'

interface RecommendedBlogsProps {
  posts: BlogPost[]
  currentPostSlug?: string
}

export function RecommendedBlogs({ posts, currentPostSlug }: RecommendedBlogsProps) {
  const filteredPosts = currentPostSlug 
    ? posts.filter(post => post.slug !== currentPostSlug).slice(0, 3)
    : posts.slice(0, 3)

  return (
    <section className="bg-accent-cream py-16">
      <div className="container-custom">
        <h2 className="text-3xl font-display text-secondary mb-8 text-center">
          Recommended Reading
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              
              <div className="p-5">
                {post.category && (
                  <span className="inline-block bg-accent-green text-secondary px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {post.category}
                  </span>
                )}
                
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-lg font-display text-secondary hover:text-primary transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

