[README.md](https://github.com/user-attachments/files/27569333/README.md)
# BookTrack PWA

A personal book tracker — scan ISBN barcodes, pick your next read, install on iPhone.

## Features

- **Library** — search, filter by status (want to read / reading / finished)
- **ISBN barcode scanning** — uses your phone's camera, works on iOS Safari and Android Chrome
- **Auto-fetch book data** — pulls title, author, page count, and cover image from Open Library + Google Books
- **Reading progress** — track current page with progress bar
- **Ratings & notes** — 1-5 stars and personal reviews
- **Random picker** — randomly pick your next read from the "Want to read" list
- **Offline support** — service worker caches files for offline use
- **Export data** — download as JSON for backup

## Installation on iPhone

PWAs require HTTPS to access the camera. Deploy to one of these free services first:

### Option 1: GitHub Pages
1. Create a free account at github.com
2. Create a new public repository (e.g. `booktrack`)
3. Upload all the files from this folder (the contents inside, not the folder itself)
4. Settings → Pages → Source: deploy from branch `main` → `/` (root) → Save
5. Wait 1-2 minutes — your URL is `https://username.github.io/booktrack/`

### Option 2: Cloudflare Pages
1. Sign up at cloudflare.com
2. Workers & Pages → Create → Pages → Upload assets
3. Drag the files in
4. Done — URL is `https://your-project.pages.dev`

### Option 3: Netlify Drop
1. Go to https://app.netlify.com/drop
2. Drag the folder in
3. Done

### Add to Home Screen (iPhone)
1. Open your URL in **Safari** (must be Safari, not Chrome)
2. Tap the **Share** button (square with arrow up)
3. Scroll down → **Add to Home Screen**
4. Tap **Add**
5. The icon appears on your home screen and launches like a real app

## Data storage

All data is stored in your browser's `localStorage` — it persists between visits but is lost if you clear Safari data. Use the **Export** button (top-right) to save a JSON backup.

## Notes

- Camera scanning requires HTTPS (all the deploy options above provide it for free)
- iOS Safari will ask for camera permission the first time
- If scanning doesn't work, you can always enter the ISBN manually
- Tested on iOS 16+ Safari and Android Chrome

## Tech

- Vanilla HTML/CSS/JS — no build step
- [html5-qrcode](https://github.com/mebjas/html5-qrcode) for barcode scanning (works on iOS Safari)
- [Open Library API](https://openlibrary.org/dev/docs/api/books) + [Google Books API](https://developers.google.com/books) for ISBN lookup
