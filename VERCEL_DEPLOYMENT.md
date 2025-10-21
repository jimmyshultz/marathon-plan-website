# Vercel Deployment Guide

## Setting Environment Variables on Vercel

You're absolutely right - **NEVER commit your API keys to GitHub!** Here's how to set them securely on Vercel.

### Method 1: Via Vercel Dashboard (Recommended)

#### Step 1: Go to Your Project Settings
1. Log in to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Click on **Settings** tab

#### Step 2: Navigate to Environment Variables
1. In the left sidebar, click **Environment Variables**
2. You'll see a form to add new variables

#### Step 3: Add Your API Key
1. **Key (Name):** `RESEND_API_KEY`
2. **Value:** `re_your_actual_api_key_here` (paste your Resend API key)
3. **Environments:** Select which environments to apply to:
   - ✅ **Production** - For your live site
   - ✅ **Preview** - For preview deployments (branches)
   - ⬜ **Development** - Usually not needed (use `.env.local` instead)

#### Step 4: Save
1. Click **Save**
2. Vercel will ask if you want to redeploy - click **Yes** to apply changes

### Method 2: Via Vercel CLI

If you prefer command line:

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Login to Vercel
vercel login

# Link to your project (if not already)
vercel link

# Add environment variable
vercel env add RESEND_API_KEY production
# Paste your API key when prompted

# Add for preview deployments too
vercel env add RESEND_API_KEY preview

# Trigger a new deployment to apply changes
vercel --prod
```

## Deployment Workflow

### Before You Merge to Main

#### 1. Test Locally
```bash
# Make sure everything works
npm run dev
# Test the custom plan feature
```

#### 2. Run Build Locally
```bash
# Ensure production build works
npm run build
npm start
```

#### 3. Push to a Preview Branch
```bash
git checkout -b test-custom-plan
git add .
git commit -m "Add custom training plan feature"
git push origin test-custom-plan
```

Vercel will automatically create a **preview deployment** for this branch!

#### 4. Test Preview Deployment
1. Go to your Vercel dashboard
2. Find the preview deployment for your branch
3. Click the preview URL
4. Test the custom plan feature on the live preview
5. If you set environment variables for "Preview", email should work here too

#### 5. Merge to Main (When Ready)
```bash
# On GitHub, create a Pull Request
# Review changes
# Merge to main

# Or via command line:
git checkout main
git merge test-custom-plan
git push origin main
```

Vercel will automatically deploy to production!

## Environment Variable Best Practices

### ✅ DO:
- Store API keys in Vercel environment variables
- Use `.env.local` for local development (never commit!)
- Add `.env.local` to `.gitignore` (already done in Next.js)
- Use different API keys for development and production if possible
- Document required environment variables in `.env.example`

### ❌ DON'T:
- Commit `.env.local` to Git
- Hardcode API keys in your code
- Share API keys in public forums or screenshots
- Use production API keys in development

## Checking Environment Variables on Vercel

### Via Dashboard:
1. Go to your project → Settings → Environment Variables
2. You'll see the variable names (values are hidden for security)

### Via CLI:
```bash
# List all environment variables
vercel env ls

# Pull environment variables to local (for reference only)
vercel env pull .env.vercel
```

## Troubleshooting

### Environment Variable Not Working?

1. **Check the variable name is exactly:** `RESEND_API_KEY`
2. **Verify it's set for the right environment** (Production/Preview)
3. **Redeploy after adding variables:**
   ```bash
   # In Vercel dashboard, go to Deployments → Click ... → Redeploy
   # Or push a new commit to trigger deployment
   ```

### Email Not Sending on Vercel But Works Locally?

1. Check Vercel deployment logs:
   - Go to Deployments → Click on latest deployment → Runtime Logs
2. Look for error messages related to Resend or email
3. Verify environment variable is set correctly
4. Check Resend dashboard for failed email attempts
5. Ensure you're not hitting rate limits

### Preview Deployments Not Using Environment Variables?

Make sure you selected "Preview" when adding the environment variable!

## Monitoring

### Vercel Logs
Check runtime logs in Vercel dashboard:
- Deployments → Select deployment → Runtime Logs
- Look for console.log outputs from your server actions

### Resend Dashboard
Monitor email sending:
- Log in to Resend
- Check Email Logs for sent/failed emails
- Monitor your usage/quota

## Security Checklist

Before deploying to production:

- [ ] `.env.local` is in `.gitignore`
- [ ] No API keys in committed code
- [ ] Environment variables set on Vercel
- [ ] Different API keys for dev/prod (recommended)
- [ ] Email "from" address uses verified domain (for production)
- [ ] Rate limiting configured if needed

## Cost Monitoring

### Vercel
- Free tier: Unlimited deployments
- Check your usage in Settings → Usage

### Resend
- Free tier: 3,000 emails/month, 100 emails/day
- Monitor in Resend dashboard
- Set up alerts before hitting limits

## Quick Reference

```bash
# Local development
npm run dev                          # Start dev server
npm run build                        # Test production build
npm run lint                         # Check code quality

# Vercel deployment
vercel                               # Deploy to preview
vercel --prod                        # Deploy to production
vercel env add VARIABLE_NAME         # Add environment variable
vercel env ls                        # List environment variables
vercel logs                          # View deployment logs
```

## Need Help?

- Vercel Docs: https://vercel.com/docs/concepts/projects/environment-variables
- Resend Docs: https://resend.com/docs
- Next.js Docs: https://nextjs.org/docs
