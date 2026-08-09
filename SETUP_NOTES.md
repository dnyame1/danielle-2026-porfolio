# Danielle's Portfolio — What's Done & What's Left

This is the cupidbity/portfolio-template repo (https://github.com/cupidbity/portfolio-template),
customized with your content. It's MIT licensed — a credit line in your own
README or repo description (e.g. "Template by @cupidbity") is the polite norm
even beyond what the license requires. The original README.md (below, in this
same folder) still applies for general setup — this file just tells you what's
already done vs. what still needs you.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL it prints (usually http://localhost:5173).

To build for deployment:
```bash
npm run build
```
This outputs a `dist/` folder you can deploy to Vercel, Netlify, GitHub Pages, etc.

## What's already done

- **Dark mode** is now the default theme (toggle still works, top right nav)
- **Color palette**: brick red / ochre, with the dark-mode background changed
  from navy to a warm burgundy (`#220C0F` base) so it pairs with the kente
  gold/green/red accents instead of clashing
- **Headshot + 2 real photos** wired into the hero photo carousel: your UT
  Austin headshot, a photo of you presenting DermaTone at HookEmHacks, and a
  photo from the HerStory conference
- **Hero section**: "Hi, I am Danielle Nyame," first role shown is
  "Computer Science Student at UT Austin," then cycles through Researcher /
  Builder / Community Leader
- **Navigation & footer**: real name, real social links (GitHub, LinkedIn, email)
- **Projects**: LinguaRoots (centerpiece) and DermaTone, each with a full
  dedicated detail page (click "Details" on either card)
- **Experience section**: your real resume history — FRI research, Handshake,
  CS dept ambassador, UTCS camp counselor, H-E-B
- **Skills dome**: swapped to icons that match your actual stack (JS, TS, Java,
  C, C++, HTML, CSS, React, Node, GitHub, npm, Tailwind, Vite, Notion, Postman)
- **Resume button** (hero + footer) downloads your actual resume PDF
  (public/resume.pdf)
- **Certifications section removed** — the template ships with sample AWS/CITI
  badges that aren't yours. The component file is still there
  (src/components/section/Certifications.tsx) if you want to re-enable it later
  with real credentials (e.g. the Cornell Break Through Tech certification).

## What's still placeholder / needs your input

- **"About Me Journal" image** (src/assets/journal.PNG) — this is the
  template's generic handwritten-style graphic. Replace it with your own
  journal-style image for a more personal feel.
- **Project icons** — LinguaRoots and DermaTone currently use the generic
  "coming soon" icon (src/assets/coming_soon.png) on their cards and detail
  pages. Drop real project thumbnails into src/assets/project_icons/ and wire
  them in (see README.md section 6).
- **GitHub repo links** — .env currently points LinguaRoots and DermaTone's
  "Code" buttons at your GitHub profile / the HookEmHacks repo. Update
  VITE_GITHUB_PROJECT1_URL and VITE_GITHUB_PROJECT2_URL in .env once
  LinguaRoots has its own public repo.
- **Skills/tech icons missing**: this template's icon pack doesn't include
  Python, SQL, or Swift icons, even though they're on your resume. If you want
  them in the rotating dome, add SVGs to src/assets/techstack/ and register
  them in src/assets/techstack/index.ts and src/components/ui/domegallery.tsx.
- **Stickers and stars** are still the template defaults (decorative, not
  content — up to you whether you want to keep, remove, or restyle them).

## Deploying

Once you're happy with it locally, the fastest path is usually:
- **Vercel**: `npx vercel` from this folder, or connect the GitHub repo in
  the Vercel dashboard
- **Netlify**: drag the `dist/` folder into Netlify's deploy UI, or connect
  the repo
- **GitHub Pages**: push this to a repo, then use `npm run build` + a
  gh-pages deploy action

Don't forget to set the same environment variables from `.env` in your
hosting provider's dashboard if you deploy via git integration (rather than
uploading the built `dist/` folder directly).
