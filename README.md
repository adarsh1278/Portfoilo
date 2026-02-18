# Adarsh Tiwari Portfolio (Next.js + TypeScript)

A production-ready, dark-themed personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Project Structure

```bash
app/
  layout.tsx
  page.tsx
  globals.css
components/
  AnimatedCounter.tsx
  Navbar.tsx
  Reveal.tsx
data/
  userData.js
types/
  userData.ts
public/
```

## Single Source of Truth: `data/userData.js`

All personal content is rendered dynamically from `data/userData.js`.

### Update your profile

Edit:

- `personal` for name, title, email, headshot, resume
- `education` for degree and CGPA
- `achievements` for quick highlights
- `experience` for company details and impact bullets
- `leadership` for role and metrics
- `contacts` for profile URLs

### Update projects (important)

Inside `projects` array in `data/userData.js`, each project supports:

- `title`
- `description`
- `techStack` (string array)
- `achievements` (string array)
- `image`
- `githubUrl`
- `liveUrl`
- `featured` (optional)
- `architecture` (optional)

To add a new project:

1. Copy an existing project object.
2. Change `id` to a unique value.
3. Fill the content fields.
4. Save the file — UI updates automatically.

### Update sections

You can reorder or remove entire sections by editing arrays in `data/userData.js`:

- `experience`
- `projects`
- `profiles`
- `achievements`

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

## Notes

- Theme defaults to dark and uses glassmorphism cards.
- Section animations trigger once on scroll.
- Project cards include hover lift, image zoom, and architecture flow blocks where provided.
