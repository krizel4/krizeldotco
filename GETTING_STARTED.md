# Getting Started with Krizel

Welcome! This guide will help you get your mental health and wellness blog up and running.

## 📋 Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including Next.js, React, TypeScript, and Tailwind CSS.

### 2. Start Development Server

```bash
npm run dev
```

Your site will be available at [http://localhost:3000](http://localhost:3000)

### 3. Explore the Site

- **Homepage** - `/` - Hero section, featured blogs, and product carousel
- **Blog** - `/blog` - All blog posts with category filters
- **Shop** - `/shop` - Product catalog with eCommerce features
- **Resources** - `/resources` - Mental health resources and crisis support
- **Affiliates** - `/affiliates` - Affiliate program information

## 🎨 Customization Guide

### Update Site Name and Branding

**In `app/layout.tsx`:**
```tsx
export const metadata: Metadata = {
  title: 'Your Site Name',
  description: 'Your description',
}
```

**In `components/Navigation.tsx` and `components/Footer.tsx`:**
- Update the logo and site name
- Customize navigation links
- Update social media links

### Change Brand Colors

**In `tailwind.config.ts`:**
```typescript
colors: {
  primary: '#FB6E52',      // Your primary color
  secondary: '#568265',    // Your secondary color
  accent: {
    green: '#92C3A4',
    yellow: '#FFCE55',
    cream: '#F2F6EB',
    lime: '#DBF58E',
  },
}
```

Colors are used throughout the site as:
- `bg-primary` - Primary background
- `text-primary` - Primary text color
- `bg-secondary` - Secondary background
- `bg-accent-green` - Accent colors

### Update Typography

The site uses custom fonts that need to be loaded from Adobe Fonts or Google Fonts.

**Option 1: Google Fonts**

Add to `app/layout.tsx`:
```tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

**Option 2: Adobe Fonts (Typekit)**

Update the font link in `app/layout.tsx`:
```tsx
<link rel="stylesheet" href="https://use.typekit.net/YOUR_KIT_ID.css" />
```

Then update CSS variables in `app/globals.css`:
```css
:root {
  --font-neue-haas: 'Neue Haas Grotesk Display Pro', sans-serif;
  --font-scotch: 'Scotch Display', serif;
}
```

## ✍️ Adding Content

### Add a Blog Post

Edit `data/blog-posts.ts` and add a new entry:

```typescript
{
  id: '7',
  slug: 'your-post-slug',
  title: 'Your Post Title',
  excerpt: 'A brief description of your post (2-3 sentences)',
  image: 'https://images.unsplash.com/photo-xxxxx?w=800',
  author: 'Your Name',
  date: 'November 16, 2025',
  readTime: 5,
  category: 'Anxiety', // or 'Mindfulness', 'Self-Care', 'Sleep'
  content: `
    <p>Your full blog post content here. You can use HTML.</p>
    <h2>Section Title</h2>
    <p>More content...</p>
  `,
}
```

**Finding Images:**
- [Unsplash](https://unsplash.com/) - Free high-quality images
- [Pexels](https://www.pexels.com/) - Free stock photos
- Make sure to use images that are 800px wide or larger

### Add a Product

Edit `data/products.ts`:

```typescript
{
  id: '10',
  slug: 'product-slug',
  name: 'Product Name',
  description: 'Detailed product description',
  price: 29.99,
  originalPrice: 39.99, // Optional - for showing discounts
  image: 'https://images.unsplash.com/photo-xxxxx?w=800',
  rating: 4.8,
  reviews: 50,
  category: 'Journals', // or 'Wellness Tools', 'Books', etc.
  badge: 'New', // Optional - 'New', 'Bestseller', 'Popular'
  isAffiliate: false, // Set to true for affiliate products
  affiliateLink: 'https://...', // Required if isAffiliate is true
  inStock: true,
}
```

### Add a Category

Edit `components/CategoryGrid.tsx`:

```typescript
{
  name: 'Your Category',
  icon: '😊', // Any emoji
  color: 'bg-accent-green', // Tailwind color class
  href: '/blog/category/your-category',
}
```

## 🖼️ Using Images

### Recommended Image Sizes

- **Hero Images:** 1200px × 800px
- **Blog Post Headers:** 800px × 600px
- **Product Images:** 800px × 800px
- **Blog Card Thumbnails:** 600px × 400px

### Image Sources

1. **Unsplash:** Copy image URL and add `?w=800` for optimized size
2. **Local Images:** Place in `public/images/` and reference as `/images/filename.jpg`

Example:
```tsx
image: 'https://images.unsplash.com/photo-1234567890?w=800'
// or
image: '/images/my-photo.jpg'
```

## 🔧 Configuration

### Update Site Metadata

Edit `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your Site - Mental Health & Wellness',
  description: 'Your custom description for SEO',
  keywords: ['mental health', 'wellness', 'self-care'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Site Name',
    description: 'Description for social sharing',
    images: ['/og-image.jpg'],
  },
}
```

### Add Google Analytics

1. Get your Google Analytics ID
2. Add to your site by installing `@next/third-parties`:

```bash
npm install @next/third-parties
```

3. Add to `app/layout.tsx`:

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

## 📱 Testing Responsive Design

Test your site on different screen sizes:

```bash
# Desktop
http://localhost:3000

# Tablet (iPad)
Resize browser to 768px width

# Mobile (iPhone)
Resize browser to 375px width
```

Use Chrome DevTools (F12) to test various devices.

## 🚀 Building for Production

### Test Production Build Locally

```bash
npm run build
npm start
```

### Check for Errors

```bash
npm run lint
```

## 📝 Content Best Practices

### Writing Blog Posts

1. **Tone:** Compassionate, informative, non-judgmental
2. **Length:** 800-1500 words for SEO
3. **Structure:** Use headings (H2, H3), bullet points, and short paragraphs
4. **Include:** Actionable tips and resources
5. **Avoid:** Medical diagnoses or treatment advice

### Crisis Resources

Always include crisis resources on mental health content:

```html
<div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
  <p className="font-bold">Crisis Support</p>
  <p>If you're in crisis, call 988 or text HOME to 741741</p>
</div>
```

### SEO Tips

- Use descriptive titles (50-60 characters)
- Write compelling excerpts (150-160 characters)
- Include keywords naturally
- Use descriptive image alt text
- Internal link between related posts

## 🔒 Privacy and Legal

### Add Privacy Policy

Create `app/privacy/page.tsx` for your privacy policy.

### Cookie Consent

Consider adding a cookie consent banner if using analytics:

```bash
npm install react-cookie-consent
```

### Terms of Service

Create `app/terms/page.tsx` for terms and conditions.

## 🆘 Troubleshooting

### Port 3000 Already in Use

```bash
# Use a different port
PORT=3001 npm run dev
```

### Images Not Loading

- Check image URLs are valid
- Ensure domain is added to `next.config.js`:

```javascript
images: {
  domains: ['images.unsplash.com', 'yourdomain.com'],
}
```

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Tailwind Styles Not Working

1. Check classes are correct
2. Restart dev server
3. Check `tailwind.config.ts` includes all directories

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

## 🤝 Getting Help

- Check [README.md](README.md) for project overview
- Review [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help
- Open an issue on GitHub

## ✅ Next Steps

1. ✏️ Customize brand colors and fonts
2. 📝 Add your first blog post
3. 🛍️ Add your products
4. 🎨 Customize navigation and footer
5. 📱 Test on mobile devices
6. 🚀 Deploy to production
7. 📊 Set up analytics
8. 🔍 Submit to search engines

Happy building! 💚

