# Good Company Senior Concierge Services Website

A modern, responsive Next.js website for Good Company—a non-medical senior concierge service operating in Shelby Township, Washington Township, and Rochester Hills, Michigan.

## Features

- **6 Landing Pages**: Home, Services, Pricing, About, Contact, Legal (Privacy/Terms)
- **Lead Capture Form**: Collects inquiries and sends automated emails to Natalie
- **Responsive Design**: Mobile-first, optimized for all screen sizes
- **Accessibility**: WCAG 2.1 AA compliant with 16px+ text, strong contrast, accessible forms
- **Brand Integration**: Custom Sage/Terracotta/Cream color palette, Fraunces typography, SVG logo
- **Email Integration**: Automated lead notifications and confirmation emails via Gmail SMTP

## Tech Stack

- **Framework**: Next.js 16.2.6 (App Router)
- **Styling**: Tailwind CSS 4
- **Font Family**: Fraunces (Google Fonts) + Source Sans Pro
- **Email**: Nodemailer with Gmail SMTP
- **Hosting**: Vercel (recommended)
- **Domain**: goodcompanyscs.com

## Project Structure

```
goodcompany-scs/
├── app/
│   ├── api/
│   │   └── submit-lead/
│   │       └── route.ts          # Form submission API endpoint
│   ├── about/
│   │   └── page.tsx               # About Natalie & company
│   ├── contact/
│   │   └── page.tsx               # Contact info & CTA
│   ├── pricing/
│   │   └── page.tsx               # Pricing tiers & bundles
│   ├── privacy/
│   │   └── page.tsx               # Privacy policy
│   ├── services/
│   │   └── page.tsx               # Service offerings
│   ├── terms/
│   │   └── page.tsx               # Terms of service
│   ├── globals.css                # Global styles & brand colors
│   ├── layout.tsx                 # Root layout (header/footer)
│   ├── page.tsx                   # Home page
│   └── favicon.ico
├── public/
│   └── logo.svg                   # Good Company logo
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## Setup Instructions

### 1. Prerequisites

- Node.js 18+ and npm
- Git
- GitHub account
- Vercel account (free tier is fine)
- Gmail account for email notifications

### 2. Local Development

Clone the repository and install dependencies:

```bash
cd goodcompany-scs
npm install
```

Run the development server:

```bash
npm run build
npm run dev
```

Visit `http://localhost:3000` to see the site locally.

### 3. Environment Variables

Before deploying, you need to set up email notifications. Create a `.env.local` file in the root directory:

```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-password
```

**Important**: If you use Gmail with 2-factor authentication (recommended):
1. Go to myaccount.google.com/apppasswords
2. Create an app password for "Mail" on "Windows PC" (or your device)
3. Use that 16-character password as `EMAIL_PASSWORD`

Do NOT use your regular Gmail password. Gmail app passwords are more secure and work with SMTP.

### 4. Push to GitHub

Initialize a new GitHub repository and push the code:

```bash
git init
git add .
git commit -m "Initial commit: Good Company website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/goodcompany-scs.git
git push -u origin main
```

### 5. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "New Project"
4. Select the `goodcompany-scs` repository
5. In "Environment Variables," add:
   - `EMAIL_USER`: your Gmail address
   - `EMAIL_PASSWORD`: your Gmail app password
6. Click "Deploy"
7. Once deployed, go to "Settings" → "Domains"
8. Add your custom domain: `goodcompanyscs.com`
9. Follow Vercel's DNS instructions to point your domain

### 6. Domain Setup (Namecheap)

Since your domain is on Namecheap:

1. Log into Namecheap
2. Go to Domain List → goodcompanyscs.com → Manage
3. Click "Advanced DNS"
4. Add the Vercel DNS records (Vercel will provide these in the domain setup screen)
5. Wait 24-48 hours for DNS to propagate

Once DNS is live, your site will be accessible at `https://goodcompanyscs.com`.

## Key Customizations

### Brand Colors

All colors are defined in `app/globals.css` as CSS variables:

- `--sage`: #87A878 (primary)
- `--terracotta`: #C9785B (accent)
- `--honey`: #E8C07D (tertiary)
- `--cream`: #F7F1E8 (background)
- `--charcoal`: #3A3A3A (text)

To change colors, edit `app/globals.css` and update the `:root` section.

### Typography

- **Headings**: Fraunces (via Google Fonts, loaded in `globals.css`)
- **Body**: Source Sans Pro (via Google Fonts)
- **Font Sizes**: Responsive (clamp units for mobile-first scaling)

### Logo

The logo is stored as SVG at `public/logo.svg`. To replace:

1. Export your logo as SVG from your design tool
2. Save as `/public/logo.svg`
3. The site will automatically use the new logo

### Service Area Validation

The form checks ZIP codes for Shelby Township (48316), Washington Township (48371), and Rochester Hills (48309). To modify:

Edit `app/api/submit-lead/route.ts` and update the `serviceZips` array.

## Email Notifications

When someone submits the lead form:

1. **Email to Natalie**: Full submission details sent to `harleywal1980@gmail.com`
2. **Email to Lead**: Automated confirmation sent to the person's email address

Both emails are HTML-formatted and professional.

## Making Updates

After launch, you can update content by:

1. Editing the relevant `.tsx` file in the `app/` directory
2. Commit and push to GitHub: `git push origin main`
3. Vercel automatically rebuilds and deploys (~1 minute)

Example: To change the home page tagline, edit `app/page.tsx` and push.

## Performance & SEO

- **Site Speed**: Optimized with Next.js Image component and Tailwind CSS
- **SEO**: Meta tags set in `app/layout.tsx`, server-rendered HTML for search engines
- **Mobile**: 100% responsive, touch-friendly buttons and forms
- **Accessibility**: WCAG 2.1 AA compliant

## Common Issues

### Form submissions not working?
- Check that `EMAIL_USER` and `EMAIL_PASSWORD` environment variables are set in Vercel
- Verify the Gmail app password (not your regular password)
- Check Vercel logs: go to project → Deployments → latest → Logs

### Domain not pointing to site?
- DNS changes can take 24-48 hours to propagate
- Verify DNS records in Namecheap match Vercel's instructions exactly
- Use [whatsmydns.net](https://whatsmydns.net) to check propagation

### Logo not showing?
- Ensure `public/logo.svg` exists and is a valid SVG
- Clear browser cache (Ctrl+Shift+Delete)
- Check Vercel deployment logs

## File Modifications & Testing

Before deploying changes:

1. Test locally: `npm run dev`
2. Visit `http://localhost:3000` and verify changes
3. Test form submission (will use environment variables from `.env.local`)
4. Commit: `git add . && git commit -m "Update: [description]"`
5. Push: `git push origin main`
6. Vercel deploys automatically

## Future Enhancements (Phase 2+)

- Client portal with login (requires authentication)
- Booking calendar integration (Calendly embed or custom)
- Invoice/payment tracking dashboard
- Expanded service area coverage
- Blog/resources section
- Video testimonials

## Support & Questions

Contact Natalie: harleywal1980@gmail.com

---

**Last Updated**: May 2026
**Status**: Ready for launch June 1, 2026
