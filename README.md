# Udyami Infra Foundation — Website

Premium real estate website for Udyami Infra Foundation, founded by Umesh Daphal.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Excel Storage**: xlsx

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Enquiry System

All contact form submissions are saved to `/data/enquiries.xlsx`. The file is created automatically on the first enquiry. Each submission appends a new row — previous data is never deleted.

**Fields stored:**
- Name, Mobile, Email, Project Interest, Message, Date, Time

## Gallery Images

To update the Running Projects Gallery:
1. Add your images to `/public/images/projects/`
2. Edit the `galleryImages` array in `components/home/RunningSites.tsx`
3. Update the `src` and `caption` fields

## Site Configuration

Update `lib/site-config.ts` to change:
- Phone number, email, address
- Social media links
- Founder name

## Key Pages
- `/` — Home
- `/projects` — All Projects (with filters)
- `/projects/[slug]` — Project Detail (no Google Maps)
- `/about` — About Us
- `/gallery` — Photo Gallery
- `/contact` — Contact (no Google Maps embed)

## API Route

`POST /api/contact` — Receives form data and appends to `/data/enquiries.xlsx`
