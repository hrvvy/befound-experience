# BeFound Studios — /experience/ lander

Barrier-first rebuild of `befoundstudios.com/experience/`. The offer is the
**Skin Read**: free, 45 minutes, one-on-one.

Single static page. No build step, no framework — `index.html` carries its own
CSS and one small script.

## Run it

```bash
node server.js
```

Serves this folder on <http://127.0.0.1:8791>. The server exists because
`python -m http.server` and most one-liners do not answer HTTP range requests,
and without those a `<video>` cannot be scrubbed and Safari refuses to play at
all.

## Layout

| Path | What it is |
|---|---|
| `index.html` | the whole page |
| `film.html` | the same page with the earlier hero film, kept live for comparison |
| `server.js` | local preview server, byte-range aware |
| `hero-stayin.jpg` | hero photograph |
| `hero.mp4` / `hero-poster.jpg` | the earlier hero film, used only by `film.html` |
| `cards/` | four recognition-card images |
| `ba/` | before/after pairs for the sliders |
| `stories/` | three client story films and posters |
| `daphne.mp4` | client-filmed Skin Read walkthrough |
| `skin-read.jpg` | photographic ground for the Skin Read section |
| `scan-studio.jpg` | the imaging dome, three panels |

## Conventions worth keeping

- **Progressive enhancement.** CSS defaults to the final state; the script adds
  `.js` to opt into animated starts. A script failure never hides content. Two
  reveals learned this the hard way — anything gated behind
  `requestAnimationFrame` or an IntersectionObserver callback needs a floor
  underneath it, or a suspended callback leaves the content invisible for good.
- **Bands alternate.** From the Skin Read down, every section is dark or light
  in strict alternation. Breaking it will be visible.
- **Video sections are dark.** A bright 9:16 frame reads as a screen on navy
  and as a stray photograph on cream.
- **Contrast is measured, not eyeballed.** Body text clears 4.5:1, meaningful
  graphics clear 3:1. Over a photograph, measure the pixel behind the worst line
  of each element rather than the block as a whole — block averages hide
  failures that are obvious on screen.
- **Media is remuxed, not re-encoded.** The client files arrived efficiently
  compressed; the remux exists to move the moov atom to the front so playback
  starts before buffering finishes.

## Deployment

GitHub Pages, from `main`. Every file on the branch is publicly readable, so
working notes stay untracked — see `.gitignore`.
