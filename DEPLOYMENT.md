# Deployment Guide

This guide will help you deploy your Krizel site to production.

## Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: (leave default)

### Step 3: Add Environment Variables

In Vercel project settings, add your environment variables from `.env.example`.

### Step 4: Deploy

Click "Deploy" and wait for the build to complete.

## Netlify

### Step 1: Build Settings

- Build command: `npm run build`
- Publish directory: `.next`

### Step 2: Environment Variables

Add all variables from `.env.example` in Netlify dashboard.

### Step 3: Deploy

Connect your GitHub repository and deploy.

## Custom Server

### Prerequisites

- Node.js 18+
- PM2 (process manager)

### Step 1: Build

```bash
npm run build
```

### Step 2: Start with PM2

```bash
pm2 start npm --name "mindful-haven" -- start
pm2 save
pm2 startup
```

### Step 3: Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Docker

### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and Run

```bash
docker build -t mindful-haven .
docker run -p 3000:3000 mindful-haven
```

## Post-Deployment Checklist

- [ ] Test all pages and routes
- [ ] Verify environment variables are set
- [ ] Check mobile responsiveness
- [ ] Test form submissions
- [ ] Verify analytics tracking
- [ ] Test affiliate links
- [ ] Check site speed (Lighthouse)
- [ ] Verify SEO metadata
- [ ] Test crisis hotline links
- [ ] Set up SSL certificate
- [ ] Configure custom domain
- [ ] Set up monitoring/alerts
- [ ] Create sitemap
- [ ] Submit to search engines

## Domain Configuration

### Custom Domain on Vercel

1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records:
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

### SSL Certificate

SSL is automatically provided by Vercel. For custom servers, use Let's Encrypt:

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Monitoring

### Set up monitoring with:

- **Vercel Analytics** (built-in)
- **Google Analytics**
- **Sentry** (error tracking)
- **Uptime Robot** (uptime monitoring)

## Performance Optimization

- Enable Vercel Edge Network
- Configure ISR (Incremental Static Regeneration)
- Optimize images with next/image
- Enable compression
- Set up CDN for static assets

## Backup Strategy

- Regular database backups (if using one)
- Git repository backups
- Content backups
- Environment variables backup (securely)

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### 404 Errors

- Check route structure in `app/` directory
- Verify dynamic route parameters
- Check middleware configuration

### Environment Variables Not Working

- Restart the server after adding variables
- Check variable names (NEXT_PUBLIC_ prefix for client-side)
- Verify variables are set in deployment platform

## Support

For deployment issues, check:
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- GitHub Issues in this repository

