# Udyami Infra Foundation — Vercel Deployment Guide

## 1. Deploy on Vercel

### Prerequisites
- A [Vercel account](https://vercel.com) (free tier works)
- A [Resend account](https://resend.com) for email notifications
- Your project pushed to GitHub / GitLab / Bitbucket

### Steps

1. Push this project to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Click **Import Git Repository** and select your repo
4. Vercel auto-detects Next.js — no build config needed
5. Before deploying, add environment variables (see Section 2)
6. Click **Deploy**

---

## 2. Add RESEND_API_KEY

1. Sign up at [resend.com](https://resend.com) (free plan: 3,000 emails/month)
2. Go to **API Keys** → **Create API Key**
3. Copy the key (starts with `re_`)
4. In Vercel: **Project Settings → Environment Variables**
5. Add:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_your_actual_key_here`
   - **Environment**: Production, Preview, Development
6. Redeploy for the variable to take effect

> **Important**: Resend requires a verified domain to send from custom addresses.
> Until your domain is verified, emails are sent from `onboarding@resend.dev`.
> To send from your own domain (e.g., `noreply@udyamiinfra.com`):
> - Go to Resend → Domains → Add Domain
> - Follow DNS verification steps
> - Update `from` in `app/api/contact/route.ts`

---

## 3. Connect Enquiry Emails

Enquiry form submissions are emailed to `udyami.infra5757@gmail.com` via Resend.

Each email includes:
- Customer Name, Mobile, Email
- Project Interest
- Message
- Date and Time of submission

To change the recipient email, update `ADMIN_EMAIL` in `app/api/contact/route.ts`.

---

## 4. Update Website Content

| Content | File to Edit |
|---|---|
| Projects (add/edit/remove) | `data/projects.ts` |
| Gallery images | `data/gallery.ts` |
| Testimonials | `data/testimonials.ts` |
| Phone, Email, Address | `lib/site-config.ts` |
| Hindi translations | `lib/i18n.tsx` (add to `dict`) |
| Hero section | `components/home/Hero.tsx` |
| About page | `app/about/page.tsx` |
| Project images | `public/images/projects/` |
| Logo / Founder photo | `public/images/misc/` |

### Adding a New Project
1. Add a new image to `public/images/projects/`
2. Open `data/projects.ts`
3. Copy an existing project entry and update all fields
4. The new project will appear automatically on the homepage and projects page

### Updating Hindi Translations
1. Open `lib/i18n.tsx`
2. Find the `dict` object
3. Add a new entry: `"English text": "हिन्दी अनुवाद"`
4. Save and redeploy

---

## Environment Variables Summary

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | ✅ Yes | Email service API key from resend.com |

---

## Support
For technical issues, refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Resend Docs](https://resend.com/docs)
