# Session Cove

Session Cove is a **WhatsApp-first scheduling and reminders tool** for **solo trainers and tutors**.

Target users:
- Personal trainers & fitness coaches
- Yoga / Pilates instructors
- Academic and language tutors
- Music teachers and other solo service providers

Core idea:
- Turn messy WhatsApp DMs and screenshots into **clean, reliable sessions**.
- Trainers share **one booking link**.
- Clients book a slot in their own time.
- Session Cove sends **automatic WhatsApp confirmations and reminders** to reduce no-shows.

## Repo structure

- `assets/` – logos, social headers, visual references.
- `docs/` – specs, product notes, copy drafts (optional for now).
- `landing/` – Next.js + TypeScript + Tailwind **marketing site (v0 Coming Soon + waitlist)**.

Later this repo may include:
- `app/` – main web app for trainers (dashboard).
- `api/` – backend services.
- `mobile/` – mobile app.

## Tech stack (for now)

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- Deployed via **Vercel** later.

## Design & UX principles (landing v0)

- Minimal, calm layout. No heavy animations.
- Mobile-first, responsive layout.
- One primary CTA: **join the early access waitlist**.
- Clear hierarchy:
  1. Hero section with headline, subheadline, and waitlist form.
  2. "Who it’s for" – three short cards.
  3. "How it works" – three simple steps.
  4. FAQ – 2–3 common questions.
- Avoid “we / our” in public copy. Copy should speak neutrally about Session Cove.
- Keep sections short and easy to scan.

## Current focus

1. Build a **Coming Soon + waitlist** landing page at `landing/`.
2. Connect domain + socials to this landing.
3. Later, extend the landing into a full marketing page once the MVP shape is stable.
