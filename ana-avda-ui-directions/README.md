# Ana Avda UI directions

Static HTML exports of the six design canvases (2026-10-22). No build step, no runtime: each page is plain HTML + inline styles, fonts from Google Fonts.

## Open

- `index.html`: the viewer. Sidebar of every direction and screen, the screen in a frame (phone screens in a phone bezel), Fit / 100% zoom, filter, and a shareable URL per screen (`index.html#b-feed-first/Main`). Keys: ←/→ screen, ↑/↓ direction, F zoom, / filter.
- `overview.html`: all screens as cards, plus **Compare** two directions side by side.
- `ab.html`: sends a visitor to one random direction and remembers it (localStorage). Phones (≤600px wide) land on that direction's phone screen.
  - `ab.html?v=c-reading-first` forces a direction
  - `ab.html?only=a-chat-first,b-feed-first` A/B between just those
  - `ab.html?reset=1` re-rolls

Serve the folder from any static host (e.g. `npx serve .`); opening the files directly also works.

## Directions

| Folder | Direction | Entry |
|---|---|---|
| `a-chat-first` | Home is the chat, reader beside it | `Main.html` |
| `b-feed-first` | Feed of today's learning, Ana Avda on every post + own tab | `Main.html` |
| `c-reading-first` | Text is the app, select to ask | `Main.html` |
| `d-command-first` | ⌘K bar + answer pages | `Main.html` |
| `e-habit-first` | Today's learning as a path, story cards | `Main.html` |
| `f-workspace-first` | Tabs, split view, chavrusa spaces | `Main.html` |

## Caveats

- These are mockups: buttons and inputs are static (only the links between screens work). Good for preference / first-click / 5-second tests, not for task-completion tests.
- Personal details are replaced with placeholders (`[Your city]`, a generic avatar). Zmanim shown are sample values.
- Translations, notes and Ana Avda answers in the mockups were written for the design; placeholders are in [BRACKETS]. Review before showing to users.
- No analytics are included; add your own tag (or tool like Maze / Lyssna / PostHog) to each page's `<head>`.
