# Claude Code Instructions

This is a podcast website built with Astro and Tailwind CSS.

## Project Overview

A static podcast website that displays English learning podcasts with:
- Audio playback with custom player
- Clickable transcripts with timestamp navigation
- Multiple tracks per episode (Dialogue, Vocabulary, Review)
- Auto-play functionality across tracks and episodes

## Tech Stack

- **Framework**: Astro 5.x (static site generator)
- **Styling**: Tailwind CSS 4.x
- **Language**: TypeScript
- **Package Manager**: Yarn

## Key Files

| File | Purpose |
|:-----|:--------|
| `src/lib/podcasts.ts` | Data loading from `public/resources/` |
| `src/pages/index.astro` | Homepage with podcast cards |
| `src/pages/podcast/[id].astro` | Podcast detail page with player |
| `src/layouts/BaseLayout.astro` | Main layout with search bar |
| `src/components/AudioPlayer.astro` | Audio player component |
| `src/components/TranscriptSegment.astro` | Transcript segment component |
| `src/types/podcast.ts` | TypeScript interfaces |

## Data Structure

Podcasts are stored in `public/resources/{id}/`:
- Each folder contains MP3 + JSON pairs
- File naming: `englishpod_X####YY.{mp3,json}`
  - `X` = category letter (C, E, etc.)
  - `####` = episode number
  - `YY` = track type (dg, pb, rv)

### Track Types
- `dg` (Dialogue): Main conversation
- `pb` (Vocabulary): Word explanations
- `rv` (Review): Summary and review

## localStorage Keys

| Key | Purpose |
|:----|:--------|
| `podcast_{id}_{track}_progress` | Audio playback position |
| `podcast_{id}_active_tab` | Selected track tab |
| `autoplay_next_podcast` | Flag for auto-play on navigation |

## Development Commands

```bash
yarn dev      # Start dev server
yarn build    # Production build
yarn preview  # Preview build
```

## Code Conventions

- Use Astro components (`.astro`) for pages and components
- Client-side JavaScript in `<script>` tags within Astro files
- Tailwind CSS for all styling (no custom CSS classes)
- TypeScript for type safety

## When Making Changes

1. Run `yarn build` to verify no errors
2. Test with `yarn dev` before committing
3. Update README files if adding new features
4. Do not auto-commit unless explicitly asked
