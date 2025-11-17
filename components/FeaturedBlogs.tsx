import { BlogCard } from './BlogCard'
import { BlogPost } from '@/types'

interface FeaturedBlogsProps {
  posts: BlogPost[]
}

export function FeaturedBlogs({ posts }: FeaturedBlogsProps) {
  if (!posts || posts.length === 0) return null

  const [featuredPost, ...otherPosts] = posts

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Featured Post - Takes 2 columns */}
      {featuredPost && <BlogCard post={featuredPost} featured />}
      
      {/* Other Posts */}
      {otherPosts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}

