# reCAPTCHA v2 Setup Guide for Netlify

Your contact form is now configured with Google reCAPTCHA v2. Follow these steps to complete the setup.

## 🔑 Step 1: Get Your reCAPTCHA Keys

1. **Go to Google reCAPTCHA Admin Console**
   - Visit: https://www.google.com/recaptcha/admin/create

2. **Register Your Site**
   - **Label:** Give it a name (e.g., "Krizel Fitness Contact Form")
   - **reCAPTCHA Type:** Select **reCAPTCHA v2** → "I'm not a robot" Checkbox
   - **Domains:** Add your domains:
     - `yoursitename.netlify.app` (or your custom domain)
     - `localhost` (for local testing - optional)
   - **Owners:** Your Google account email
   - Accept the terms and click **Submit**

3. **Copy Your Keys**
   You'll receive two keys:
   - **Site Key** (public) - Goes in your frontend code
   - **Secret Key** (private) - Keep this secret!

## 🚀 Step 2: Configure Netlify

### Option A: Using Netlify UI (Recommended)

1. **Go to your Netlify Dashboard**
   - Select your site
   - Go to **Site settings** → **Build & deploy** → **Environment**

2. **Add Environment Variables**
   Click "Add variable" and add:
   
   **Variable 1:**
   - Key: `SITE_RECAPTCHA_KEY`
   - Value: `[Your Site Key from Google]`

   **Variable 2:**
   - Key: `SITE_RECAPTCHA_SECRET`
   - Value: `[Your Secret Key from Google]`

3. **Save Changes**
   - Click "Save"
   - Netlify will automatically use these for form verification

### Option B: Using Netlify CLI

```bash
netlify env:set SITE_RECAPTCHA_KEY "your_site_key_here"
netlify env:set SITE_RECAPTCHA_SECRET "your_secret_key_here"
```

## 🔄 Step 3: Redeploy Your Site

After adding the environment variables:

1. **Trigger a new deploy**
   - Push a new commit, OR
   - In Netlify dashboard: **Deploys** → **Trigger deploy** → **Deploy site**

2. **Wait for deployment to complete**
   - Check the deploy log for any errors

## ✅ Step 4: Test Your Form

1. **Visit your contact page**
   - Go to `https://yoursite.netlify.app/contact`

2. **You should see:**
   - The reCAPTCHA checkbox ("I'm not a robot")
   - All form fields working normally

3. **Submit a test form**
   - Fill out the form
   - Check the reCAPTCHA box
   - Click "Send Message"
   - Check Netlify dashboard → Forms for the submission

## 🔧 How It Works

### Netlify's Built-in Integration

When you use `data-netlify-recaptcha="true"`:

1. **Netlify automatically:**
   - Injects the reCAPTCHA widget
   - Handles verification server-side
   - Rejects spam submissions
   - No additional code needed!

2. **Google verifies:**
   - User isn't a bot
   - Request is legitimate
   - Returns verification to Netlify

3. **Your form:**
   - Only accepts verified submissions
   - Blocks spam automatically
   - You receive clean data

## 🎨 Customization

### Change reCAPTCHA Theme

The default theme is light. To use dark theme, you can add:

```html
<div 
  data-netlify-recaptcha="true"
  data-theme="dark"
></div>
```

### Change Size

For compact size:

```html
<div 
  data-netlify-recaptcha="true"
  data-size="compact"
></div>
```

## 🐛 Troubleshooting

### reCAPTCHA Not Showing

**Issue:** The checkbox doesn't appear

**Solutions:**
1. Check that reCAPTCHA script is loaded (check browser console)
2. Verify `data-netlify-recaptcha="true"` is in both:
   - `app/contact/page.tsx` (form tag)
   - `public/contact-form.html` (form tag)
3. Clear browser cache and reload
4. Check browser console for JavaScript errors

### "ERROR for site owner: Invalid site key"

**Issue:** reCAPTCHA shows error message

**Solutions:**
1. Double-check your Site Key in Netlify environment variables
2. Verify domain is registered in Google reCAPTCHA console
3. Make sure you're using reCAPTCHA v2 (not v3)
4. Redeploy your site after adding keys

### Form Submits Without Checking reCAPTCHA

**Issue:** Form submits even without clicking checkbox

**Solutions:**
1. Verify Netlify environment variables are set:
   - `SITE_RECAPTCHA_KEY`
   - `SITE_RECAPTCHA_SECRET`
2. Make sure you redeployed after adding variables
3. Check Netlify deploy log for errors

### reCAPTCHA Works but Form Doesn't Submit

**Issue:** Can check reCAPTCHA but form submission fails

**Solutions:**
1. Check browser console for errors
2. Verify form `name="contact"` matches in:
   - Form tag
   - Hidden input field
   - `public/contact-form.html`
3. Check Network tab for failed POST requests
4. Verify Netlify Forms is enabled (check dashboard)

### Local Development Issues

**Issue:** reCAPTCHA doesn't work on localhost

**Solutions:**
1. Add `localhost` to your reCAPTCHA domains in Google Console
2. Or test on the deployed Netlify site instead
3. Netlify Forms don't work locally anyway

## 📊 Monitoring

### View Form Submissions

Netlify Dashboard → Forms → contact

You'll see:
- ✅ Submissions that passed reCAPTCHA
- ❌ Spam blocked by reCAPTCHA

### Check reCAPTCHA Stats

Google reCAPTCHA Admin → Your Site → Analytics

Shows:
- Number of verifications
- Bot detection rate
- Challenge solve rate

## 🔒 Security Best Practices

1. **Never commit keys to Git**
   - Keys should only be in Netlify environment variables
   - Don't add them to your code

2. **Regenerate keys if exposed**
   - If you accidentally commit keys, regenerate them immediately
   - Update Netlify environment variables

3. **Monitor for spam**
   - Check Netlify Forms dashboard regularly
   - Adjust reCAPTCHA settings if needed

4. **Use Secret Key properly**
   - Only store in Netlify (server-side)
   - Never expose in frontend code

## 📈 Next Steps

### Optional Enhancements

1. **Add custom error messages**
   - Handle reCAPTCHA errors gracefully
   - Show user-friendly messages

2. **Track conversions**
   - Add analytics to track form submissions
   - Monitor completion rates

3. **Email notifications**
   - Set up email alerts for new submissions
   - Integrate with Slack/Discord

## 📚 Additional Resources

- [Google reCAPTCHA Documentation](https://developers.google.com/recaptcha/docs/display)
- [Netlify Forms with reCAPTCHA](https://docs.netlify.com/forms/spam-filters/#recaptcha-2-challenge)
- [Netlify Environment Variables](https://docs.netlify.com/environment-variables/overview/)

## ✅ Checklist

Before going live, make sure:

- [ ] reCAPTCHA keys obtained from Google
- [ ] Keys added to Netlify environment variables
- [ ] Site redeployed after adding keys
- [ ] reCAPTCHA checkbox appears on form
- [ ] Test submission works (with checkbox checked)
- [ ] Spam is blocked (try submitting without checking)
- [ ] Form submissions appear in Netlify dashboard
- [ ] Email notifications configured (optional)

---

🎉 **Your contact form is now protected by reCAPTCHA!**

Need help? Check the troubleshooting section above or contact Netlify support.

