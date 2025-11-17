# Adobe Fonts (Typekit) Setup Guide

Follow these steps to add your custom Adobe Fonts to the site.

## 📝 Step 1: Create an Adobe Fonts Web Project

1. **Go to Adobe Fonts**
   - Visit: https://fonts.adobe.com/
   - Sign in with your Adobe account (Creative Cloud subscription required)

2. **Browse and Add Fonts**
   - Search for **"Neue Haas Grotesk Display"** (for body text)
   - Click the font, then click "Add to Web Project"
   - Search for **"Fabulosa"** (for headings)
   - Click the font, then click "Add to Web Project"

3. **Create or Select Web Project**
   - Create a new project or add to an existing one
   - Name it something like "Krizel Fitness Site"
   - Add your domain (e.g., `yoursite.netlify.app`)

4. **Get Your Kit ID**
   - After saving, you'll see an embed code that looks like:
   ```html
   <link rel="stylesheet" href="https://use.typekit.net/abc1def.css">
   ```
   - Copy the part that says `abc1def` (your unique Kit ID)

## ✅ Step 2: Add Kit ID to Your Site

### Update app/layout.tsx

Replace `YOUR_KIT_ID` with your actual Kit ID:

```tsx
<link rel="stylesheet" href="https://use.typekit.net/YOUR_KIT_ID.css" />
```

For example, if your Kit ID is `xyz9abc`:
```tsx
<link rel="stylesheet" href="https://use.typekit.net/xyz9abc.css" />
```

## 🎨 Step 3: Verify Font Names

The font names in `app/globals.css` should match what Adobe Fonts provides.

### Check Your Font Names

1. In your Adobe Fonts project, click on each font
2. Look for the "CSS font-family" value
3. Update `app/globals.css` if different:

```css
:root {
  --font-neue-haas: 'neue-haas-grotesk-display', sans-serif;
  --font-scotch: 'fabulosa', serif;
}
```

Common Adobe Fonts naming:
- Neue Haas Grotesk Display → `neue-haas-grotesk-display`
- Fabulosa → `fabulosa`
- Font names are usually lowercase with hyphens

## 🧪 Step 4: Test Your Fonts

1. **Run your dev server:**
   ```bash
   npm run dev
   ```

2. **Check in browser:**
   - Open `http://localhost:3000`
   - Right-click on text → Inspect Element
   - Check the "Computed" tab for font-family
   - Should show your Adobe Fonts, not system fallbacks

3. **Verify in DevTools:**
   - Open Network tab
   - Reload page
   - Look for `YOUR_KIT_ID.css` request
   - Should return 200 OK status

## ⚠️ Common Issues

### Fonts Not Loading

**Issue:** Site still uses system fonts

**Solutions:**
1. Clear browser cache and hard reload (Cmd+Shift+R or Ctrl+Shift+R)
2. Verify Kit ID is correct in `layout.tsx`
3. Check Adobe Fonts project settings:
   - Domain is added to allowed domains
   - Fonts are published (not draft)
4. Check browser console for errors

### "Failed to minify stylesheet" Error

**Issue:** Build fails with CSS error

**Solutions:**
1. Verify Kit ID exists (not a placeholder like 'foobar')
2. Check that fonts are published in Adobe Fonts
3. Make sure domain is authorized in project settings
4. Kit must be active (not paused or deleted)

### Wrong Font Displaying

**Issue:** Different font shows than expected

**Solutions:**
1. Check exact font-family name in Adobe Fonts project
2. Update CSS variable in `globals.css` to match
3. Clear browser cache
4. Restart dev server

## 🔒 Domain Authorization

### For Development
Add `localhost` to your Adobe Fonts project domains.

### For Production
Add your actual domains:
- `yoursite.netlify.app`
- `yourdomain.com` (if using custom domain)
- `www.yourdomain.com`

## 💡 Alternative: Google Fonts

If you don't have Adobe Creative Cloud, you can use Google Fonts instead:

1. Go to https://fonts.google.com/
2. Find similar fonts (free alternatives)
3. Use Next.js font optimization:

```tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Use in body:
<body className={inter.className}>
```

## 📚 Resources

- [Adobe Fonts Documentation](https://helpx.adobe.com/fonts/using/add-fonts-website.html)
- [Next.js Font Optimization](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)
- [Adobe Fonts Font List](https://fonts.adobe.com/fonts)

## ✅ Checklist

Before deploying, make sure:
- [ ] Adobe Fonts Web Project created
- [ ] Neue Haas Grotesk Display added
- [ ] Fabulosa added
- [ ] Kit ID copied
- [ ] Kit ID added to `app/layout.tsx`
- [ ] Font names verified in `app/globals.css`
- [ ] Production domain added to Adobe Fonts project
- [ ] Tested locally (fonts load correctly)
- [ ] No build errors
- [ ] Site deployed and fonts working in production

---

Need help? Check Adobe Fonts support or open an issue in the repository.

