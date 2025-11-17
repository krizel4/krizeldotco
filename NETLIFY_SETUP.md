# Netlify Setup Guide

This guide will help you deploy your site to Netlify with form submissions enabled.

## 📝 Contact Form Setup

The contact form at `/contact` is configured to work with Netlify Forms automatically.

### How It Works

1. **Static HTML Form** (`public/contact-form.html`)
   - Netlify detects this during the build process
   - Contains the form structure with `data-netlify="true"`

2. **Next.js Contact Page** (`app/contact/page.tsx`)
   - User-facing form with React state management
   - Submits to Netlify's form endpoint
   - Includes honeypot spam protection

### Configuration Files

**netlify.toml** - Basic Netlify configuration
```toml
[build]
  command = "npm run build"
  publish = ".next"
```

## 🚀 Deployment Steps

### 1. Push to Git Repository

```bash
git add .
git commit -m "Add contact form"
git push origin main
```

### 2. Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub, GitLab, Bitbucket)
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Click "Deploy site"

### 3. Enable Netlify Forms

Forms are automatically enabled! Once deployed:

1. Go to your site's dashboard on Netlify
2. Click "Forms" in the sidebar
3. You should see your "contact" form listed

### 4. Configure Form Notifications

To receive email notifications when someone submits the form:

1. In Netlify dashboard, go to **Site settings** → **Forms**
2. Click **Form notifications**
3. Add an **Email notification**:
   - Event: New form submission
   - Email: your@email.com
   - Form: contact

### 5. Access Form Submissions

View all form submissions in your Netlify dashboard:
- Go to **Forms** tab
- Click on "contact" form
- See all submissions with timestamps

## 📧 Form Data Received

Each submission will include:
- **firstName** - User's first name
- **email** - User's email address
- **message** - User's message

## 🔒 Spam Protection

The form includes:
- Honeypot field (`bot-field`) to catch bots
- Can add reCAPTCHA later if needed

## 🎨 Customization

### Change Form Fields

Edit `app/contact/page.tsx` and `public/contact-form.html` to add/remove fields.

**Important:** Keep field names consistent between both files!

### Add Email Notifications

You can also integrate with:
- Zapier
- Slack
- Discord
- Custom webhooks

Go to **Site settings** → **Forms** → **Form notifications** to add integrations.

## 🧪 Testing

### Local Testing

Forms won't work locally. To test:

1. Deploy to Netlify
2. Visit your live site's contact page
3. Submit a test form
4. Check Netlify dashboard → Forms

### Production Testing

1. Go to `https://your-site.netlify.app/contact`
2. Fill out the form
3. Submit
4. Check your Netlify dashboard or email for the submission

## ⚠️ Important Notes

- Forms are included in Netlify's free tier (100 submissions/month)
- For more submissions, upgrade to paid plan
- Form data is stored in Netlify for 30 days
- Export data regularly if needed for longer retention

## 🔧 Troubleshooting

### Form Not Detected

If Netlify doesn't detect your form:

1. Make sure `public/contact-form.html` exists
2. Verify `data-netlify="true"` is present
3. Check form `name` attribute matches in both files
4. Redeploy the site

### Submissions Not Working

1. Check browser console for errors
2. Verify form action points to `/`
3. Make sure hidden field `form-name` has value "contact"
4. Check Netlify form notifications are enabled

### 404 After Submit

Make sure your `netlify.toml` has the correct redirect rules.

## 📚 Additional Resources

- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Next.js on Netlify](https://docs.netlify.com/frameworks/next-js/overview/)
- [Form Spam Filters](https://docs.netlify.com/forms/spam-filters/)

---

Need help? Check the [Netlify Support Forum](https://answers.netlify.com/) or contact Netlify support.

