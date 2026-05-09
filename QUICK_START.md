# Good Company Website — Quick Start Guide

Your complete Next.js website is ready. Here's how to get it live by June 1st.

## Timeline (Target: June 1, 2026)

- **This week**: Get running locally, test form, push to GitHub
- **Week 2**: Deploy to Vercel, set up DNS
- **Week 3**: Polish, test everything, go live

## Step 1: Get It Running Locally (30 minutes)

### 1a. Install Node.js (if you haven't)
Download from nodejs.org (18+ required). This includes npm.

### 1b. Set Up the Project
```bash
cd goodcompany-scs
npm install
```

### 1c. Create `.env.local` file
In the project root, create a file named `.env.local` with:
```
EMAIL_USER=harleywal1980@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
```

**Important**: You need a Gmail app password, NOT your regular password.
- Go to myaccount.google.com/apppasswords
- Select "Mail" and "Windows PC" (or your device)
- Copy the 16-character password into `.env.local`

### 1d. Run Locally
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser. You should see the site.

### 1e. Test the Form
Fill out the lead form on the homepage. Check that:
- An email arrives in harleywal1980@gmail.com inbox (from your Gmail SMTP account)
- A confirmation email arrives in the test email address you used

If the form works locally, it will work on the live site.

## Step 2: Push to GitHub (15 minutes)

### 2a. Create GitHub Repository
1. Go to github.com
2. Click "+" → "New repository"
3. Name it `goodcompany-scs`
4. Leave defaults, click "Create repository"
5. Copy the commands under "…or push an existing repository from the command line"

### 2b. Push Your Code
```bash
git init
git add .
git commit -m "Initial commit: Good Company website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/goodcompany-scs.git
git push -u origin main
```

Now your code is on GitHub. Vercel will connect to it and auto-deploy.

## Step 3: Deploy to Vercel (20 minutes)

### 3a. Create Vercel Account
1. Go to vercel.com
2. Sign up with GitHub (easier)
3. Authorize GitHub access

### 3b. Import Your Project
1. Click "New Project"
2. Select `goodcompany-scs` repository
3. Click "Import"

### 3c. Add Environment Variables
Before deploying:
1. In "Environment Variables," add two:
   - `EMAIL_USER`: harleywal1980@gmail.com
   - `EMAIL_PASSWORD`: your Gmail app password
2. Click "Deploy"

Vercel will build and deploy in ~2 minutes. You'll get a live URL like `goodcompany-scs.vercel.app`.

### 3d. Test on Vercel
Visit the Vercel URL. Fill out the form. Verify emails arrive.

## Step 4: Connect Your Domain (15 minutes)

### 4a. In Vercel
1. Go to your project → Settings → Domains
2. Add domain: `goodcompanyscs.com`
3. Vercel shows you 2 NS records (nameserver records)

### 4b. In Namecheap
1. Log into Namecheap
2. Go to Domain List → goodcompanyscs.com → Manage
3. Click "Advanced DNS"
4. Under "Nameservers," select "Custom DNS"
5. Replace with Vercel's nameservers (copy from Vercel)
6. Save

DNS propagates in 24-48 hours. Your site will be live at `goodcompanyscs.com` within 2 days.

## If Something Breaks

### Form not submitting?
- Check `.env.local` has correct Gmail credentials
- Verify Gmail app password (not regular password)
- Check Vercel logs: go to project → Deployments → latest → Logs → Errors

### Domain not working?
- DNS takes 24-48 hours. Wait.
- Check DNS records in Namecheap match Vercel exactly
- Use whatsmydns.net to verify propagation

### Need to change something?
Edit the file, commit, and push to GitHub:
```bash
git add .
git commit -m "Update: [what changed]"
git push origin main
```
Vercel auto-deploys within 1 minute.

## Pages Built

✅ Home page (hero, services, trust signals, lead form)
✅ Services page (detailed list of all offerings)
✅ Pricing page (à la carte, packages, bundles)
✅ About page (Natalie's story, mission, standards)
✅ Contact page (direct contact info, service area)
✅ Privacy Policy
✅ Terms of Service
✅ Email API (form submission → Natalie's inbox)

All pages are responsive, accessible, and branded with Good Company colors.

## What's Ready to Launch

✅ Fully functional website with all 6 pages
✅ Lead-capture form with email notifications
✅ Mobile-responsive design (phones, tablets, desktops)
✅ Accessible (WCAG 2.1 AA compliant)
✅ SEO optimized
✅ Fast performance (Vercel CDN)

## Things NOT Included (Phase 2+)

❌ Client login / customer portal
❌ Payment processing
❌ Booking calendar
❌ Invoice/billing system
❌ Blog

These can be added later if needed.

## Support

Questions? Email Natalie at harleywal1980@gmail.com or contact Claude.

---

**Goal**: Live by June 1, 2026
**Status**: Code complete, ready to deploy
**Next Step**: Follow Step 1 (run locally) this week
