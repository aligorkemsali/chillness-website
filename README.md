# Chill'Ness: The Tenth Wave

The official site for the 10th edition of **Chill'Ness** by ESN Türkiye, built with
**Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — that's it.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        # root layout, fonts, metadata
  page.tsx          # home page (composes all sections)
  globals.css       # Tailwind + custom CSS
components/
  Navbar.tsx
  Hero.tsx          # title, dates, CTAs, animated waves
  Marquee.tsx       # scrolling tagline strip
  About.tsx         # "Escape the Ordinary"
  Performers.tsx    # DJ cards (Berkutay & Salih by default — edit array to change)
  Activities.tsx    # daytime / night / transport / participation grid
  Gallery.tsx       # 8 empty photo slots
  Aftermovie.tsx    # video placeholder
  CTA.tsx           # final "Reach Us" call-to-action
  Footer.tsx
public/img/
  performer/        # performer photos (3.svg, 4.svg are placeholders)
  photos/           # drop your gallery photos here
  aftermovie/       # video poster, etc.
```

## What to edit

### 1. Replace performer photos

Drop real images into `public/img/performer/` and update `components/Performers.tsx`:

```ts
const performers: Performer[] = [
  {
    name: "Berkutay Öztürk",
    role: "DJ — Performer",
    image: "/img/performer/3.jpg",   // put your real file here
    instagram: "https://www.instagram.com/berkutayozturk07",
  },
  // ...
];
```

To **add** a performer, just append a new object to the array — the grid scales automatically.

### 2. Fill the photo gallery

Edit `components/Gallery.tsx` — replace the placeholder `<div>`s with `<Image>` tags pointing at files in `public/img/photos/`.

### 3. Embed the aftermovie

Open `components/Aftermovie.tsx` and replace the placeholder play-button block with either:

```tsx
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  className="absolute inset-0 w-full h-full"
  allowFullScreen
/>
```

or an HTML5 `<video>` tag pointing at `public/img/aftermovie/your-clip.mp4`.

### 4. Update dates / location

Edit `components/Hero.tsx` and `components/Footer.tsx` — currently both say `TBA`.

## Contact

The "Reach Us" buttons throughout the site link to **chillness@esnturkey.org** via `mailto:`.
Search for that string and replace it if you ever need to change the address.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript 5
- Tailwind CSS 3
- Google Fonts (Fraunces — italic display, Outfit — body, JetBrains Mono — accents)
- Pure-CSS wave animations, marquee, and grain texture (no JS animation libraries)

---

© ESN Türkiye
