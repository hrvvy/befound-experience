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
| `server.js` | local preview server, byte-range aware |
| `hero.mp4` / `hero-poster.jpg` | hero film |
| `cards/` | four recognition-card images |
| `ba/` | before/after pairs for the sliders |
| `stories/` | three client story films and posters |
| `daphne.mp4` | client-filmed Skin Read walkthrough |
| `skin-read.jpg` | photographic ground for the Skin Read section |
| `scan-studio.jpg` | the imaging dome, three panels |
| `hero-prompts.md`, `card-image-spec.md` | generation prompts and framing constraints for the imagery |

## Conventions worth keeping

- **Progressive enhancement.** CSS defaults to the final state; the script adds
  `.js` to opt into animated starts. A script failure never hides content.
- **Bands alternate.** From the Skin Read down, every section is dark or light
  in strict alternation. Breaking it will be visible.
- **Video sections are dark.** A bright 9:16 frame reads as a screen on navy
  and as a stray photograph on cream.
- **Contrast is measured, not eyeballed.** Body text clears 4.5:1, meaningful
  graphics clear 3:1.
- **Media is remuxed, not re-encoded.** The client files arrived efficiently
  compressed; the remux exists to move the moov atom to the front so playback
  starts before buffering finishes.

## Still open

- The Acuity embed points at the resolved scheduler URL, not the
  `discoverbefound2` short link. If that short link is ever repointed, the
  target here must be updated by hand.
- The WhatsApp number in the footer is the general customer-service line from
  the site's schema markup. Confirm enquiries should go there.
- "Singapore's most-reviewed skin journey studio" in the reviews card is a
  superlative about competitors. Confirm before it ships.
- The reviews summary omits a rating distribution because the real per-star
  counts were not available.
