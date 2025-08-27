# Mostugu Cabin – Hafjell

Modern, single-page site for the Mostugu cabin at Hafjell. Built with Next.js (App Router) and Tailwind CSS. Contact form sends emails through Gmail SMTP using Nodemailer (serverless on Vercel).

## Quick Start

```bash
npm install
cp .env.example .env.local
# edit .env.local with your Gmail + app password
npm run dev
```

## Gmail App Password
1. In your Google Account, go to **Security → 2‑Step Verification → App passwords**.
2. Create a new **App password** (type: Mail, device: Other → "Mostugu").
3. Copy the generated 16‑character password into `EMAIL_PASS`.
4. Set `EMAIL_USER` and `TO_EMAIL` to your Gmail address.

## Deploy to Vercel
1. Push this repo to GitHub.
2. Create a new project in Vercel and import the repo.
3. Add the environment variables from `.env.example`.
4. Deploy.

## Notes
- External images are allowed via `next.config.js` for `lh3.googleusercontent.com`.
- Contact form hits `/api/contact`.
- Address: **Storslåvegen 42, 2636 Øyer, Norway**.
- Amenities: 5 bedrooms (12–14), 2 bathrooms, fireplace, EV charger, Wi‑Fi, sauna, large kitchen.
- Activities: Hiking, downhill cycling (summer); Alpine & cross‑country skiing (winter).
# Mostugu
