export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content?: string
  image: string
  author: string
  date: string
  readTime: number
  category: string
  tags?: string[]
}

export interface Product {
  id: string
  slug: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  rating: number
  reviews: number
  category: string
  badge?: string
  isAffiliate?: boolean
  affiliateLink?: string
  inStock?: boolean
}

export interface AffiliateProgram {
  id: string
  name: string
  description: string
  commission: string
  features: string[]
  icon: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  color: string
}

