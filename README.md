# Marathon Training Plans Website

A comprehensive React application built with Next.js that displays structured 12-week marathon training plans based on Jack Daniels' VDOT methodology. The application includes plans for 3-hour, 4-hour, and 5-hour marathon goal times, catering to runners of different ability levels.

## Live Demo

Coming soon at [marathontrainingplans.com](https://www.marathontrainingplans.com)

## Features

- **Multiple Marathon Plans**:
  - 3-hour plan (7 days/week, up to 70 miles weekly, multiple 22-mile long runs)
  - 4-hour plan (5 days/week, up to 60 miles weekly, two 20-mile long runs)
  - 5-hour plan (5 days/week, up to 55 miles weekly, one 20-mile long run)

- **Plan Details**:
  - Color-coded training days (workouts, long runs, and easy days)
  - Personalized training pace zones based on VDOT values
  - Weekly mileage totals and daily workout descriptions
  - Long run variation with proper recovery weeks

- **User Experience**:
  - Responsive design that works on all devices
  - Interactive plan selection
  - Cookie consent banner for GDPR compliance
  - Privacy policy page

- **SEO & Monetization**:
  - Optimized meta tags for better search engine visibility
  - Structured sitemap and robots.txt
  - AdSense-ready with proper components
  - Complete privacy policy for AdSense compliance

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 20.x or later (also compatible with Node.js 18.17+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/marathon-plan-website.git
   cd marathon-plan-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
marathon-plan-website/
├── src/
│   ├── app/                 # App router pages
│   │   ├── privacy-policy/  # Privacy policy page
│   │   ├── robots.ts        # Robots.txt configuration
│   │   ├── sitemap.ts       # Sitemap generation
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable UI components
│   │   ├── CookieConsent.tsx     # GDPR cookie consent banner
│   │   ├── GoogleAdsense.tsx     # AdSense integration component
│   │   ├── MetaTags.tsx          # SEO meta tags helper
│   │   ├── PaceCard.tsx          # Training paces display
│   │   ├── PlanSelector.tsx      # Marathon plan selector
│   │   ├── TrainingPlanDisplay.tsx # Full plan display
│   │   └── TrainingWeek.tsx      # Weekly training display
│   └── data/                # Training plan data
│       └── trainingPlans.ts # Marathon plans data structure
├── public/                  # Static files
├── package.json             # Dependencies and scripts
└── tailwind.config.js       # Tailwind CSS configuration
```

## Deployment

This application is configured for easy deployment on Vercel with continuous integration:

1. Create a Vercel account and connect your GitHub repository
2. Configure the environment variables if needed
3. Set up GitHub Actions for continuous deployment:
   - The workflow automatically deploys when you push to the main branch
   - It uses Vercel's CLI for production deployments
   - Required GitHub secrets:
     - `VERCEL_TOKEN`: Your Vercel API token
     - `VERCEL_ORG_ID`: Your Vercel organization ID
     - `VERCEL_PROJECT_ID`: Your Vercel project ID

The GitHub Actions workflow uses:
- The latest checkout action (v4)
- Node.js 20 for optimal compatibility with Next.js 15
- Vercel's CLI for streamlined deployment

For other hosting providers, build the application using:

```bash
npm run build
# or
yarn build
```

## Setting up Vercel Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Login to Vercel: `vercel login`
3. Link your project: `vercel link`
4. Get your environment variables:
   ```bash
   # This will show your VERCEL_ORG_ID and VERCEL_PROJECT_ID
   vercel env pull .env.local
   ```
5. Create a Vercel API token at https://vercel.com/account/tokens
6. Add the following secrets to your GitHub repository:
   - `VERCEL_TOKEN`: Your Vercel API token
   - `VERCEL_ORG_ID`: From the `.env.local` file
   - `VERCEL_PROJECT_ID`: From the `.env.local` file

## AdSense Integration

The application is ready for Google AdSense integration:

1. Apply for a Google AdSense account
2. Once approved, get your Publisher ID and Ad Unit IDs
3. Use the `GoogleAdsense` component to place ads on your site:

```tsx
<GoogleAdsense 
  client="ca-pub-XXXXXXXXXXXXXXXX" // Your Publisher ID
  slot="1234567890"                // Your Ad Unit ID
/>
```

## Adding New Training Plans

To add more training plans:

1. Create a new plan data structure in `src/data/trainingPlans.ts` following the existing pattern
2. Add the new plan to the `trainingPlans` array
3. The plan will automatically appear in the plan selector UI

## Privacy and GDPR Compliance

The site includes:

- A comprehensive privacy policy page
- GDPR-compliant cookie consent banner
- Proper disclosure of AdSense advertising
- User data protection information

## License

MIT

## Acknowledgements

- Training plans based on Jack Daniels' running formula
- Built with Next.js, React and Tailwind CSS
- Icons provided by Heroicons