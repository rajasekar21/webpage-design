# Editing Guide — edwinchelliah.com

This guide covers how to change colours, update content, and add real photos to the memorial website.
All edits go into the `src/` or `public/` folders. After saving, commit and push to `main` — the site redeploys automatically.

---

## 1. Changing Colours

### Primary colour palette — `tailwind.config.ts`

All site colours are defined in one place:

```ts
// tailwind.config.ts
colors: {
  paper:   '#f7f3ed',  // Light mode background (warm off-white)
  ink:     '#262421',  // Light mode text (near-black)
  linen:   '#ebe3d7',  // Cards, borders, subtle backgrounds
  clay:    '#9a7864',  // Secondary accents, captions
  cedar:   '#4f6f64',  // Buttons, links, active states
  gold:    '#b4935a',  // Highlights, hover states, selection
  twilight:'#161a22',  // Dark mode background
}
```

**How to change a colour:**
1. Open `tailwind.config.ts`
2. Replace the hex value next to the colour name
3. Save — all elements using that colour update instantly

**Example — change the button/link colour from teal to navy:**
```ts
cedar: '#1e3a5f',   // change from '#4f6f64'
```

**Example — change the background to pure white:**
```ts
paper: '#ffffff',   // change from '#f7f3ed'
```

### Dark mode and body colours — `src/app/globals.css`

```css
body {
  background: #f7f3ed;  /* light mode background */
  color: #262421;        /* light mode text */
}

.dark body {
  background: #161a22;  /* dark mode background */
  color: #f7f3ed;        /* dark mode text */
}

::selection {
  background: #b4935a;  /* text highlight colour */
}
```

Change these hex values to adjust the base page colours independent of Tailwind classes.

---

## 2. Changing Content

All text content — name, biography, timeline, tributes, events — lives in a **single file**:

```
src/data/memorial.ts
```

### 2a. Name, dates, quote, biography

```ts
export const memorialProfile = {
  fullName: 'J.P.Edwin Chelliah',       // ← Full name displayed in hero
  dates: '1955 to 2025',                // ← Lifespan shown under name
  portrait: '/images/portrait.jpg',     // ← Main portrait photo (see Section 3)
  quote: 'A life remembered ...',       // ← Italic quote in hero section

  biography: [
    'First paragraph of biography.',    // ← Each string is one paragraph
    'Second paragraph of biography.',
  ],

  values: ['Kindness', 'Integrity', 'Family', 'Service', 'Resilience', 'Faith'],
  // ↑ Displayed as tags/badges — add or remove values freely

  familyMessage: 'We remember him ...' // ← Appears in the Family Message section
};
```

### 2b. Timeline events

Each entry appears as a card in the Timeline section:

```ts
export const timeline: TimelineEvent[] = [
  {
    year: '1955',
    title: 'A Life Begins',
    description: 'Born into a loving family ...',
    icon: Sparkles          // ← Icon from lucide-react (see icon list below)
  },
  // Add more entries by copying the block above
];
```

**Available icons** (import at the top of the file):
`Award`, `BookOpen`, `Briefcase`, `GraduationCap`, `Heart`, `Home`, `Sparkles`, `Users`

To use a different icon, add it to the import line and use it in the entry:
```ts
import { Camera, Church, Star } from 'lucide-react';
```

### 2c. Achievements / About cards

```ts
export const achievements = [
  { title: 'Beloved Family Elder', text: 'A source of steadiness ...', icon: Heart },
  { title: 'Respected Professional', text: 'Known for commitment ...', icon: Award },
  { title: 'Keeper of Stories', text: 'Preserved family history ...', icon: BookOpen },
  // Add more cards here
];
```

### 2d. Gallery photo captions and albums

```ts
export const galleryPhotos: GalleryPhoto[] = [
  {
    src: '/images/gallery-family.jpg',       // ← File in public/images/
    alt: 'Family gathering at home',         // ← Screen reader description
    album: 'Family',                         // ← Filter tab: Family | Career | Celebrations | Legacy
    caption: 'Family gatherings and ...'     // ← Caption shown below photo
  },
  // Add more photos by copying this block
];
```

### 2e. Tributes / Messages

```ts
export const tributes: Tribute[] = [
  {
    name: 'Family',
    relationship: 'Children and grandchildren',
    message: 'Thank you for teaching us ...',
    date: 'April 2024'
  },
  // Add more tributes here
];
```

### 2f. Events

```ts
export const events = [
  {
    title: 'Annual Remembrance Gathering',
    date: 'Every April',
    location: 'Family residence',
    details: 'A quiet evening of prayer, stories, and shared food.'
  },
  // Add more events here
];
```

---

## 3. Adding Real Photos

All images go in the `public/images/` folder.

### Portrait photo

Replace the placeholder with a real portrait:

1. Add your photo to `public/images/` — name it `portrait.jpg` (or `.png`, `.webp`)
2. In `src/data/memorial.ts` update:
   ```ts
   portrait: '/images/portrait.jpg',
   ```

**Recommended size:** 400 × 500 px, under 300 KB

### Gallery photos

The gallery currently uses placeholder SVG illustrations. To add real photos:

1. Add photo files to `public/images/` — e.g. `family-1.jpg`, `wedding.jpg`
2. In `src/data/memorial.ts`, update or add entries in `galleryPhotos`:
   ```ts
   {
     src: '/images/family-1.jpg',
     alt: 'Family gathering at home 1990',
     album: 'Family',
     caption: 'Sunday lunch at home, 1990'
   },
   ```

**Recommended size:** 800 × 600 px, under 500 KB each

**To add a new album tab** (e.g. `'Faith'`), update the `GalleryPhoto` type at the top of `memorial.ts`:
```ts
album: 'Family' | 'Career' | 'Celebrations' | 'Legacy' | 'Faith';
```

### Image tips
- Use `.jpg` for photos (smaller file size)
- Use `.webp` for best quality-to-size ratio
- Compress images before uploading using [squoosh.app](https://squoosh.app) (free, browser-based)
- Keep filenames lowercase with hyphens: `family-gathering.jpg` not `Family Gathering.jpg`

---

## 4. Missing Information to Fill In

The following sections contain placeholder text and need real family-provided details:

| Section | File | What to update |
|---|---|---|
| **Full biography** | `src/data/memorial.ts` → `biography[]` | Replace placeholder paragraphs with real life story |
| **Portrait photo** | `public/images/portrait.svg` | Replace with real photo (`portrait.jpg`) |
| **Timeline events** | `src/data/memorial.ts` → `timeline[]` | Update years, titles, and descriptions with real dates and milestones |
| **Gallery photos** | `public/images/gallery-*.svg` | Replace SVG placeholders with real family photographs |
| **Tribute messages** | `src/data/memorial.ts` → `tributes[]` | Add real messages from family and friends |
| **Values/qualities** | `src/data/memorial.ts` → `values[]` | Update with words that truly describe him |
| **Family message** | `src/data/memorial.ts` → `familyMessage` | Replace with the family's own words |
| **Achievements** | `src/data/memorial.ts` → `achievements[]` | Update titles and descriptions with real accomplishments |
| **Events** | `src/data/memorial.ts` → `events[]` | Update with real remembrance dates and locations |

---

## 5. How to Deploy Changes

After making any edits:

```bash
git add .
git commit -m "Update content / photos / colours"
git push origin main
```

GitHub Actions automatically rebuilds and publishes the site to **https://www.edwinchelliah.com** within 2–3 minutes.

To check deployment status: https://github.com/rajasekar21/jpedwin-memorial-page/actions

---

## 6. Quick Reference — File Map

```
src/
  data/
    memorial.ts        ← ALL text content, photo paths, timeline, tributes, events
  app/
    globals.css        ← Base colours, fonts, dark mode
  components/
    gallery.tsx        ← Gallery layout and filter tabs
    section.tsx        ← Reusable section wrapper

public/
  images/
    portrait.svg       ← Replace with portrait.jpg
    gallery-family.svg ← Replace with real family photos
    gallery-career.svg
    gallery-celebration.svg
    gallery-legacy.svg
  CNAME                ← Custom domain (do not edit)

tailwind.config.ts     ← Colour palette and font definitions
```
