# Podcast Website

A podcast website built with Astro and Tailwind CSS. Features audio playback with real-time progress tracking and clickable transcripts.

## Features

- **Podcast Cards**: Homepage displays podcast cards with title and summary
- **Multiple Tracks**: Each podcast supports multiple audio tracks (Dialogue, Vocabulary, Review)
- **Audio Player**: Custom audio player with play/pause, progress bar, volume control
- **Clickable Transcripts**: Click any timestamp to jump to that position in the audio
- **Real-time Highlighting**: Current transcript segment auto-highlights during playback
- **Smart Auto-scroll**: Transcript scrolls when active segment reaches bottom
- **Progress Memory**: Audio progress saved to localStorage, restored on page refresh
- **Sticky Player**: Audio player sticks to bottom when scrolling
- **Search**: Search podcasts by title and summary
- **Emotion Colors**: Transcript segments color-coded by emotion (neutral, happy, sad, angry)

## Project Structure

```
├── public/
│   └── resources/          # Podcast data (MP3 + JSON per track)
│       ├── 60/
│       │   ├── englishpod_C0060dg.mp3
│       │   ├── englishpod_C0060dg.json
│       │   └── ...
│       └── 78/
│           └── ...
├── src/
│   ├── components/
│   │   ├── AudioPlayer.astro
│   │   ├── PodcastCard.astro
│   │   └── TranscriptSegment.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/
│   │   └── podcasts.ts      # Data loading utilities
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   └── podcast/
│   │       └── [id].astro   # Podcast detail page
│   ├── types/
│   │   └── podcast.ts       # TypeScript interfaces
│   └── styles/
│       └── global.css
└── specs/                  # Project specifications
```

## Data Format

Each podcast folder contains MP3 files with corresponding JSON transcripts:

```json
{
  "summary": "Description of the podcast content",
  "segments": [
    {
      "speaker": "Speaker 1",
      "timestamp": "00:08",
      "content": "Transcript text...",
      "language": "English",
      "language_code": "en",
      "translation": null,
      "emotion": "neutral"
    }
  ]
}
```

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn or npm

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

Open http://localhost:4321 to view the website.

### Build

```bash
# Build for production
yarn build

# Preview production build
yarn preview
```

## Commands

| Command | Action |
|:--------|:-------|
| `yarn install` | Install dependencies |
| `yarn dev` | Start dev server at `localhost:4321` |
| `yarn build` | Build production site to `./dist/` |
| `yarn preview` | Preview build locally |

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org) - Type safety

## License

MIT
