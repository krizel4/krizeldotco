# Component Reference Guide

This guide provides detailed information about all available components and how to use them.

## 🎨 Layout Components

### Navigation

Main site navigation with responsive mobile menu.

**Location:** `components/Navigation.tsx`

**Features:**
- Sticky header
- Mobile hamburger menu
- Customizable links
- Logo and branding

**Customization:**
```tsx
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  // Add more links
]
```

### Footer

Site footer with links, social media, and branding.

**Location:** `components/Footer.tsx`

**Features:**
- Multi-column layout
- Social media links
- Crisis hotline information
- Copyright and legal links

**Customization:**
Edit the `footerLinks` object to add/remove sections and links.

---

## 🎯 Hero Components

### Hero

Large hero section with title, subtitle, CTA buttons, and image.

**Location:** `components/Hero.tsx`

**Props:**
- `title` (string) - Main heading
- `subtitle` (string) - Supporting text
- `ctaText` (string) - Primary button text
- `ctaLink` (string) - Primary button URL
- `imageSrc` (string) - Hero image URL
- `secondaryCtaText` (string, optional) - Secondary button text
- `secondaryCtaLink` (string, optional) - Secondary button URL

**Example:**
```tsx
<Hero 
  title="Your Journey to Wellness Starts Here"
  subtitle="Discover resources and tools to support your mental health"
  ctaText="Explore Resources"
  ctaLink="/blog"
  imageSrc="https://images.unsplash.com/photo-xxxxx?w=1200"
  secondaryCtaText="Shop Now"
  secondaryCtaLink="/shop"
/>
```

**Styling:**
- Gradient background (cream to green)
- Responsive grid layout
- Trust indicators showing stats

---

## 📝 Blog Components

### BlogCard

Individual blog post card with image, metadata, and excerpt.

**Location:** `components/BlogCard.tsx`

**Props:**
- `post` (BlogPost) - Blog post object
- `featured` (boolean, optional) - Display as featured (larger)

**Example:**
```tsx
<BlogCard post={blogPost} featured={false} />
```

**Layout:**
- Standard: Single column card
- Featured: Two-column layout with larger image

### FeaturedBlogs

Grid layout for featured blog posts with one large featured post.

**Location:** `components/FeaturedBlogs.tsx`

**Props:**
- `posts` (BlogPost[]) - Array of blog posts

**Example:**
```tsx
<FeaturedBlogs posts={blogPosts.slice(0, 3)} />
```

**Layout:**
- First post: 2 columns (featured)
- Remaining posts: 1 column each
- Grid auto-adjusts based on number of posts

### RecommendedBlogs

Horizontal section showing recommended blog posts.

**Location:** `components/RecommendedBlogs.tsx`

**Props:**
- `posts` (BlogPost[]) - Array of blog posts
- `currentPostSlug` (string, optional) - Excludes this post from recommendations

**Example:**
```tsx
<RecommendedBlogs 
  posts={allPosts} 
  currentPostSlug="current-post-slug" 
/>
```

**Features:**
- Filters out current post
- Shows up to 3 recommendations
- Compact card design
- Full-width background section

---

## 🛍️ Product Components

### ProductCard

Individual product card with image, price, rating, and CTA.

**Location:** `components/ProductCard.tsx`

**Props:**
- `product` (Product) - Product object

**Example:**
```tsx
<ProductCard product={product} />
```

**Features:**
- Hover effects (scale image)
- Sale badge (if originalPrice exists)
- Affiliate badge (if isAffiliate is true)
- Star rating display
- Add to cart or affiliate link button

### ProductCarousel

Carousel/slider for displaying multiple products with navigation.

**Location:** `components/ProductCarousel.tsx`

**Props:**
- `products` (Product[]) - Array of products

**Example:**
```tsx
<ProductCarousel products={featuredProducts} />
```

**Features:**
- Shows 3 products at a time (desktop)
- Previous/Next navigation buttons
- Dot indicators
- Responsive (shows fewer on mobile)
- Auto-calculates pages based on product count

---

## 🎨 UI Components

### CategoryGrid

Grid of category cards with icons and colors.

**Location:** `components/CategoryGrid.tsx`

**Example:**
```tsx
<CategoryGrid />
```

**Customization:**
Edit the `categories` array:
```tsx
{
  name: 'Category Name',
  icon: '🌿', // Any emoji
  color: 'bg-accent-green', // Tailwind class
  href: '/category/slug',
}
```

**Features:**
- Hover effects (scale, shadow)
- Color-coded categories
- Large emoji icons
- Responsive grid (1-4 columns)

### CTASection

Call-to-action section with newsletter signup.

**Location:** `components/CTASection.tsx`

**Example:**
```tsx
<CTASection />
```

**Features:**
- Gradient background (primary to secondary)
- Email signup form
- Trust indicators
- Responsive layout

**Customization:**
- Edit heading and copy directly in component
- Modify gradient colors in className
- Add form submission handler

---

## 🎨 Styling System

### Color Classes

```css
/* Background Colors */
bg-primary          /* #FB6E52 - Coral */
bg-secondary        /* #568265 - Sage Green */
bg-accent-green     /* #92C3A4 */
bg-accent-yellow    /* #FFCE55 */
bg-accent-cream     /* #F2F6EB */
bg-accent-lime      /* #DBF58E */

/* Text Colors */
text-primary
text-secondary
text-accent-green
/* etc. */
```

### Button Classes

```css
btn                 /* Base button styles */
btn-primary         /* Primary button (coral) */
btn-secondary       /* Secondary button (green) */
btn-outline         /* Outlined button */
```

**Example:**
```tsx
<button className="btn btn-primary">
  Click Me
</button>
```

### Utility Classes

```css
card                /* Card with shadow and hover effect */
container-custom    /* Max-width container with padding */
section-padding     /* Vertical padding for sections */
```

---

## 📦 Data Types

### BlogPost

```typescript
interface BlogPost {
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
```

### Product

```typescript
interface Product {
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
```

---

## 🔧 Creating Custom Components

### Basic Component Template

```tsx
// components/MyComponent.tsx
import Link from 'next/link'

interface MyComponentProps {
  title: string
  items: any[]
}

export function MyComponent({ title, items }: MyComponentProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-secondary mb-8">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="card p-6">
              <h3 className="text-xl font-display text-secondary">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### Using the Component

```tsx
// app/page.tsx
import { MyComponent } from '@/components/MyComponent'

export default function Page() {
  const items = [/* your data */]
  
  return (
    <MyComponent title="My Section" items={items} />
  )
}
```

---

## 🎯 Component Patterns

### Section Layout Pattern

Most sections follow this pattern:

```tsx
<section className="section-padding bg-[color]">
  <div className="container-custom">
    {/* Title */}
    <div className="text-center mb-12">
      <h2 className="text-secondary mb-4">Section Title</h2>
      <p className="text-lg text-gray-600">Subtitle</p>
    </div>
    
    {/* Content */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Grid items */}
    </div>
  </div>
</section>
```

### Card Pattern

Cards follow this structure:

```tsx
<article className="card">
  {/* Image */}
  <div className="relative h-64 w-full">
    <Image src={image} alt={title} fill className="object-cover" />
  </div>
  
  {/* Content */}
  <div className="p-6">
    <h3 className="text-xl font-display text-secondary mb-2">
      {title}
    </h3>
    <p className="text-gray-600 mb-4">
      {description}
    </p>
    <button className="btn btn-primary w-full">
      Action
    </button>
  </div>
</article>
```

---

## 🚀 Performance Tips

### Image Optimization

Always use Next.js Image component:

```tsx
import Image from 'next/image'

<Image
  src={imageSrc}
  alt={description}
  fill
  className="object-cover"
  priority  // Use on above-fold images only
/>
```

### Dynamic Imports

For heavy components, use dynamic imports:

```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
})
```

### Client Components

Only use 'use client' when necessary:

```tsx
'use client'  // Only for components with hooks, event handlers

import { useState } from 'react'

export function InteractiveComponent() {
  const [state, setState] = useState(false)
  // ...
}
```

---

## 📱 Responsive Design

All components are mobile-first and responsive:

- **Mobile:** Single column layout
- **Tablet (md:):** 2 columns
- **Desktop (lg:):** 3-4 columns

### Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

### Example Responsive Classes

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  {/* Content adapts at each breakpoint */}
</div>
```

---

## 🎨 Theme Customization

### Adding New Colors

1. Add to `tailwind.config.ts`:
```typescript
colors: {
  'my-color': '#123456',
}
```

2. Use in components:
```tsx
<div className="bg-my-color text-white">
  Content
</div>
```

### Adding New Fonts

1. Load font in `app/layout.tsx`
2. Add to CSS variables in `app/globals.css`
3. Configure in `tailwind.config.ts`

---

## 🆘 Common Issues

### Component Not Found

```bash
Error: Cannot find module '@/components/MyComponent'
```

**Solution:** Check import path matches file location

### Styling Not Applied

**Solution:** 
1. Check Tailwind class names
2. Restart dev server
3. Clear `.next` folder

### TypeScript Errors

**Solution:**
1. Check prop types match interface
2. Run `npm run build` to see all errors
3. Check `types/index.ts` for type definitions

---

## 📚 Additional Resources

- [Next.js Components](https://nextjs.org/docs/app/building-your-application/routing)
- [React Documentation](https://react.dev/reference/react)
- [Tailwind Components](https://tailwindcss.com/docs/utility-first)

Need help? Check the main [README.md](README.md) or [GETTING_STARTED.md](GETTING_STARTED.md).

