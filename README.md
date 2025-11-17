# krizel - Fitness Tips & Meal Plans Blog

A modern JAMstack blog specializing in fitness, workouts, and nutrition, built with Next.js, TypeScript, and Tailwind CSS. Features include a blog platform, eCommerce integration, and affiliate program pages.

## 💪 Features

- **Fitness Blog** - Expert workout tips, meal plans, and nutrition guides
- **eCommerce Shop** - Premium supplements, gear, and fitness equipment
- **Affiliate Program** - Multiple partnership tiers
- **Responsive Design** - Beautiful UI across all devices
- **SEO Optimized** - Built-in metadata and semantic HTML
- **Fast Performance** - Static site generation with Next.js
- **Type Safe** - Full TypeScript implementation
- **Dropdown Navigation** - Hover menus with sub-navigation options

## 🎨 Brand Colors

- **Primary:** `#92C3A4` (Light Green)
- **Secondary:** `#FFCE55` (Golden Yellow)
- **Accent Green:** `#568265` (Sage Green)
- **Accent Yellow:** `#FB6E52` (Coral)
- **Accent Cream:** `#F2F6EB`
- **Accent Lime:** `#DBF58E`

## 📝 Typography

- **Body Font:** Neue Haas Grotesk
- **Display Font:** Fabulosa

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd krizeldotco
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
krizeldotco/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── blog/              # Blog pages
│   │   ├── page.tsx       # Blog index
│   │   └── [slug]/        # Individual blog posts
│   ├── shop/              # Shop pages
│   │   ├── page.tsx       # Shop index
│   │   └── [slug]/        # Individual products
│   ├── affiliates/        # Affiliate program
│   └── resources/         # Mental health resources
├── components/            # React components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── BlogCard.tsx       # Blog post card
│   ├── ProductCard.tsx    # Product card
│   ├── ProductCarousel.tsx # Product carousel
│   ├── FeaturedBlogs.tsx  # Featured blog section
│   ├── RecommendedBlogs.tsx # Recommended posts
│   ├── CategoryGrid.tsx   # Category navigation
│   └── CTASection.tsx     # Call-to-action section
├── data/                  # Data files
│   ├── blog-posts.ts      # Blog post data
│   └── products.ts        # Product data
├── types/                 # TypeScript types
│   └── index.ts          # Type definitions
└── public/               # Static assets

```

## 🧩 Key Components

### Navigation with Dropdowns
Responsive navigation with hover dropdown menus for Blog, Shop, and Resources sections.

### Hero
Customizable hero section with title, subtitle, CTA buttons, and image.

```tsx
<Hero 
  title="Transform Your Fitness Journey Today"
  subtitle="Expert workout tips and meal plans..."
  ctaText="Start Training"
  ctaLink="/blog"
  imageSrc="/hero-image.jpg"
/>
```

### Blog Cards
Display blog posts in card format with featured post support.

```tsx
<BlogCard post={blogPost} featured={true} />
<FeaturedBlogs posts={posts} />
<RecommendedBlogs posts={posts} currentPostSlug="current-post" />
```

### Product Components
Product cards and carousel for eCommerce functionality.

```tsx
<ProductCard product={product} />
<ProductCarousel products={products} />
```

### Category Grid
Visual category navigation with icons and colors.

```tsx
<CategoryGrid />
```

### CTA Section
Newsletter signup and community engagement section.

```tsx
<CTASection />
```

## 📄 Pages

- **Home (`/`)** - Landing page with hero, featured workouts, and products
- **Blog (`/blog`)** - Fitness blog with workout and nutrition categories (Workouts, Nutrition, Wellness)
- **Blog Post (`/blog/[slug]`)** - Individual blog post with recommendations
- **Shop (`/shop`)** - Product listing with categories (Supplements, Gear, Apparel)
- **Product (`/shop/[slug]`)** - Individual product page with details
- **Affiliates (`/affiliates`)** - Affiliate program information and signup
- **Resources (`/resources`)** - Free workout plans and meal prep guides

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[React 18](https://react.dev/)** - UI library

## 📝 Adding Content

### Add a Blog Post

Edit `data/blog-posts.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: 'unique-id',
    slug: 'post-url-slug',
    title: 'Post Title',
    excerpt: 'Brief description...',
    image: 'https://example.com/image.jpg',
    author: 'Krizel Santos',
    date: 'November 16, 2025',
    readTime: 8,
    category: 'Workouts', // or 'Nutrition', 'Wellness'
    content: 'Full post content...',
  },
  // ... more posts
]
```

### Add a Product

Edit `data/products.ts`:

```typescript
export const products: Product[] = [
  {
    id: 'unique-id',
    slug: 'product-url-slug',
    name: 'Product Name',
    description: 'Product description...',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://example.com/image.jpg',
    rating: 4.8,
    reviews: 124,
    category: 'Supplements', // or 'Gear', 'Apparel'
    badge: 'Bestseller',
    isAffiliate: false,
    inStock: true,
  },
  // ... more products
]
```

## 🎨 Customization

### Update Brand Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: '#FB6E52',
  secondary: '#568265',
  accent: {
    green: '#92C3A4',
    yellow: '#FFCE55',
    cream: '#F2F6EB',
    lime: '#DBF58E',
  },
}
```

### Update Fonts

Edit `app/globals.css`:

```css
:root {
  --font-neue-haas: 'Your Font', sans-serif;
  --font-scotch: 'Your Display Font', serif;
}
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Build for Production

```bash
npm run build
npm start
```

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔗 Important Links

- Always consult with a healthcare professional before starting any new fitness or nutrition program

## 📄 License

This project is created for mental health awareness and wellness education.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💬 Support

For questions or support, please open an issue in the repository.

---

Built with 💪 for fitness enthusiasts

