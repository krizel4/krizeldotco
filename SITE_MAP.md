# Site Map - Krizel

## 🗺️ Page Structure

```
Krizel
│
├── 🏠 Home (/)
│   ├── Hero Section
│   ├── Category Grid (4 categories)
│   ├── Featured Blog Posts (3 posts)
│   ├── Product Carousel (6 products)
│   └── Newsletter CTA
│
├── 📝 Blog (/blog)
│   ├── Blog Header
│   ├── Category Filter (All, Anxiety, Mindfulness, Self-Care, Sleep)
│   ├── Blog Grid (All posts)
│   └── Newsletter Signup
│   │
│   └── 📄 Individual Post (/blog/[slug])
│       ├── Post Header with Meta
│       ├── Featured Image
│       ├── Full Content
│       ├── Share Buttons
│       ├── Recommended Posts (3)
│       └── CTA Section
│
├── 🛍️ Shop (/shop)
│   ├── Shop Header
│   ├── Category Filter
│   ├── Sort Options
│   ├── Product Grid (All products)
│   └── Feature Highlights
│   │
│   └── 📦 Individual Product (/shop/[slug])
│       ├── Product Images
│       ├── Product Details
│       ├── Price & Rating
│       ├── Add to Cart / Affiliate Link
│       ├── Product Features
│       ├── Description
│       └── Related Products (3)
│
├── 🤝 Affiliates (/affiliates)
│   ├── Hero Section
│   ├── Benefits Grid (4 benefits)
│   ├── Program Tiers (3 programs)
│   ├── How It Works (4 steps)
│   ├── Application Form
│   └── FAQ Section
│
└── 📚 Resources (/resources)
    ├── Hero Section
    ├── Crisis Support Banner
    ├── Resource Categories
    │   ├── Crisis Support
    │   ├── Mental Health Apps
    │   └── Educational Resources
    ├── Self-Help Tools (6 downloadable)
    └── Find Professional Help CTA
```

## 🧩 Component Usage Map

### Navigation (All Pages)
- Logo & Branding
- Main Menu Links
- Mobile Menu Toggle
- CTA Button

### Footer (All Pages)
- Brand Section with Social Links
- Resources Links
- Shop Links
- Company Links
- Copyright & Crisis Info

### Homepage Components
```
Hero
├── Used: Once at top
└── Props: title, subtitle, CTAs, image

CategoryGrid
├── Used: Once after hero
└── Shows: 4 mental health categories

FeaturedBlogs
├── Used: Once in middle section
└── Shows: 3 blog posts (1 featured + 2 regular)

ProductCarousel
├── Used: Once in lower section
└── Shows: 6 products with navigation

CTASection
├── Used: Once at bottom
└── Newsletter signup form
```

### Blog Page Components
```
BlogCard
├── Used: Multiple times in grid
└── Shows: Individual blog posts

Category Filters
├── Buttons for filtering
└── Categories: All, Anxiety, Mindfulness, Self-Care, Sleep
```

### Blog Post Page Components
```
Hero-style Header
├── Breadcrumb
├── Category Badge
├── Title
├── Author Info
└── Metadata

Content Area
├── Featured Image
├── Article Content
└── Share Buttons

RecommendedBlogs
├── Used: Once after content
└── Shows: 3 recommended posts
```

### Shop Page Components
```
ProductCard
├── Used: Multiple times in grid
└── Shows: Individual products

Filters & Sort
├── Category buttons
└── Sort dropdown
```

### Product Page Components
```
Product Gallery
├── Main Image
└── Badge (if applicable)

Product Info
├── Title
├── Rating & Reviews
├── Price
├── Description
├── Quantity Selector (or Affiliate Link)
└── Feature List

ProductCarousel (Related)
├── Used: Once at bottom
└── Shows: 3 related products
```

## 📱 Responsive Breakpoints

```
Mobile (< 768px)
├── Single column layouts
├── Stacked navigation
├── Full-width cards
└── Touch-friendly buttons

Tablet (768px - 1024px)
├── 2-column grids
├── Collapsed navigation
└── Medium cards

Desktop (> 1024px)
├── 3-4 column grids
├── Full navigation
├── Large cards
└── Hover effects
```

## 🎨 Color Usage Guide

### Primary (#FB6E52) - Coral
- CTA buttons
- Links hover state
- Badges
- Highlights
- Active states

### Secondary (#568265) - Sage Green
- Headings
- Secondary buttons
- Navigation active
- Footer background

### Accent Green (#92C3A4)
- Category backgrounds
- Author avatars
- Icons
- Borders

### Accent Yellow (#FFCE55)
- Special badges
- Star ratings
- Highlights
- Accent elements

### Accent Cream (#F2F6EB)
- Page backgrounds
- Section backgrounds
- Card hover states

### Accent Lime (#DBF58E)
- Category cards
- Call-out boxes
- Fresh accents

## 🔤 Typography Scale

```
Display (Scotch Display)
├── h1: 3.5rem - 4.5rem (56px - 72px)
├── h2: 2.5rem - 3rem (40px - 48px)
├── h3: 2rem - 2.5rem (32px - 40px)
└── h4: 1.5rem - 2rem (24px - 32px)

Body (Neue Haas Grotesk)
├── Large: 1.25rem (20px)
├── Regular: 1rem (16px)
├── Small: 0.875rem (14px)
└── Tiny: 0.75rem (12px)
```

## 🔗 Internal Linking Structure

```
Homepage
├── Links to: Blog, Shop, Resources, Affiliates
├── Category links to: Blog filtered by category
├── Blog cards link to: Individual posts
└── Product cards link to: Individual products

Blog Index
├── Links to: All individual posts
├── Category filters
└── Newsletter signup

Blog Post
├── Links to: Blog index, Related posts
└── CTA to: Resources, Shop

Shop Index
├── Links to: All products
└── Category filters

Product Page
├── Links to: Shop index, Related products
└── Affiliate external link (if applicable)

Resources
├── Links to: External resources
└── CTA to: Find therapist, Blog

Affiliates
├── Links to: Application form
└── Internal navigation
```

## 🎯 Conversion Paths

### Reader → Subscriber
```
Homepage → Newsletter CTA → Subscribe
Blog Post → Newsletter CTA → Subscribe
Resources → Professional Help CTA
```

### Reader → Customer
```
Homepage → Products → Product Page → Add to Cart
Blog Post → Related Products → Product Page
Resources → Shop CTA → Products
```

### Visitor → Affiliate
```
Homepage → Affiliates Nav → Program Info → Apply
Blog → Affiliates Link → Application Form
```

## 📊 Content Organization

### Blog Categories
1. **Anxiety** - Anxiety management and relief
2. **Mindfulness** - Meditation and presence
3. **Self-Care** - Personal wellness routines
4. **Sleep** - Sleep health and hygiene

### Product Categories
1. **Journals** - Guided journals and planners
2. **Wellness Tools** - Physical wellness aids
3. **Books** - Mental health literature
4. **Meditation** - Meditation accessories
5. **Sleep** - Sleep improvement products
6. **Exercise** - Yoga and movement gear

### Resource Categories
1. **Crisis Support** - Immediate help lines
2. **Mental Health Apps** - Digital tools
3. **Educational Resources** - Learning materials

## 🚀 User Journeys

### First-Time Visitor
```
1. Land on Homepage
2. Read hero message
3. Explore categories
4. Read featured blog post
5. Subscribe to newsletter
```

### Returning Reader
```
1. Navigate to Blog
2. Filter by category
3. Read article
4. Check recommended posts
5. Share on social media
```

### Product Shopper
```
1. Navigate to Shop
2. Browse products
3. Click product card
4. Read details
5. Add to cart or visit affiliate link
```

### Affiliate Applicant
```
1. Navigate to Affiliates
2. Read program benefits
3. Choose program tier
4. Fill application form
5. Submit application
```

## 📈 Growth Opportunities

### Phase 1 (Current)
- ✅ Static blog
- ✅ Product catalog
- ✅ Affiliate info pages

### Phase 2 (Future)
- Add CMS integration
- Implement shopping cart
- Add user accounts
- Enable comments

### Phase 3 (Future)
- Payment processing
- Email automation
- Search functionality
- Community features

## 🎨 Design Patterns Used

1. **Card Pattern** - Products, blog posts, resources
2. **Grid Layout** - Responsive multi-column grids
3. **Hero Pattern** - Large header sections
4. **Carousel** - Scrollable product displays
5. **CTA Sections** - Newsletter and action prompts
6. **Filter/Sort** - Category and sorting controls
7. **Breadcrumbs** - Navigation trails
8. **Related Content** - Recommended posts/products

---

This site map provides a complete overview of your Krizel site structure and how all pieces fit together! 🎉

