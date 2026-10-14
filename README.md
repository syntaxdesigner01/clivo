# Clivo — marketing site

Next.js (App Router) + TypeScript export of the Clivo landing pages: Home, About, Team, Contact, Terms and Privacy.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Needs Node 20.9+.

## Structure

```
app/
  layout.tsx            root layout: Outfit font (self-hosted), theme init script
  globals.css           all styles and animations, scoped per page with .page-<name>
  page.tsx              Home
  about/page.tsx
  team/page.tsx         + TeamView.tsx   (client: infinite carousel)
  contact/page.tsx      + ContactView.tsx (client: form state)
  terms/page.tsx
  privacy/page.tsx
  fonts/                Outfit variable font (SIL OFL)
components/
  Header.tsx            glass nav bar, takes `active` and `ctaHref`
  ThemeToggle.tsx       light/dark toggle (saved to localStorage "clivo-theme")
  Footer.tsx  BackToTop.tsx  ExchangeMarquee.tsx  Testimonials.tsx
  DownloadSection.tsx   Faq.tsx
lib/
  data.ts               exchange list + testimonial quotes
  team.ts               team members + social links
public/team/            team portraits
```

## Before launch — placeholders to replace

Find them all with `grep -rn "\[[A-Z]" app components lib`.

- `lib/data.ts`: exchange monograms are placeholders (swap in real logos once you have permission); testimonials are **sample** quotes.
- `lib/team.ts`: names, roles and the `[LINKEDIN URL]` / `[INSTAGRAM URL]` / `[X URL]` links.
- Contact page: `[support@yourdomain.com]`, `[COMPANY ADDRESS]`; the form is UI-only — wire `send` in `app/contact/ContactView.tsx` to your API.
- Download section: App Store / Google Play links.
- Terms and Privacy are draft text with `[BRACKETED]` placeholders — have a lawyer review them.

## Notes

- Dark mode inverts the page with a CSS filter (`html[data-theme="dark"]`) and counter-inverts images and the logo.
- Scroll reveals use CSS `animation-timeline: view()`; browsers without it just show content. Everything respects `prefers-reduced-motion`.
- Styles are inline `style={{…}}` objects carried over from the design. Moving them to Tailwind or CSS modules is a good next refactor.
