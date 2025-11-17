import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/types'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const cardClass = featured
    ? 'card lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-6'
    : 'card'

  return (
    <article className={cardClass}>
      <Link href={`/blog/${post.slug}`} className="block">
        <div className={`relative ${featured ? 'h-full min-h-[300px]' : 'h-64'} w-full`}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          {post.category && (
            <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          )}
        </div>
      </Link>
      
      <div className={`p-6 ${featured ? 'flex flex-col justify-center' : ''}`}>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <time dateTime={post.date}>{post.date}</time>
          <span>•</span>
          <span>{post.readTime} min read</span>
        </div>
        
        <Link href={`/blog/${post.slug}`}>
          <h3 className={`${featured ? 'text-3xl' : 'text-2xl'} font-display text-secondary mb-3 hover:text-primary transition-colors`}>
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent-green flex items-center justify-center text-secondary font-semibold">
              {post.author.charAt(0)}
            </div>
            <span className="text-sm font-medium text-gray-700">{post.author}</span>
          </div>
          
          <Link 
            href={`/blog/${post.slug}`}
            className="text-primary hover:text-secondary transition-colors font-medium text-sm"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  )
}

