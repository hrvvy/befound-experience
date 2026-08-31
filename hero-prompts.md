# BeFound hero film: generation prompts

Two options. Both produce a 16:9 landscape frame with an **empty left third**, which is
what the lander's cream scrim gradient is built around. Do not crop that space out.

Output files go in this folder as:

- `hero.mp4` — the 5 second film
- `hero-poster.jpg` — the first frame, shown while the video loads and to reduced-motion visitors

No code changes needed once those two files exist.

---

## Settings, both options

**Image:** GPT Image 2 (`gpt_image_2`) / 16:9 / resolution **2k** / quality **high**

**Video:** Seedance 2.0 (`seedance_2_0`) / duration **5** / 16:9 / **1080p** / mode `std` /
`generate_audio: false` / the generated image as **start_image**

Audio stays off: hero video autoplays muted, so generated audio is wasted spend. Keep the
motion small too, since the clip loops every 5 seconds and large movement makes the seam obvious.

---

## Option A: the real team

Requires the team photo attached as a likeness reference. Team have given permission.
Rationale for using them: these are the faces a prospect actually meets in the studio.

### Image

Warm editorial group photograph, 16:9 landscape, matching the attached reference photo's
people and their likenesses exactly. The same six people, in a bright skincare studio against
a warm cream-beige seamless backdrop. They are laughing genuinely and playfully pointing at
one another's cheeks, teasing each other about their skin. Candid mid-laugh, eyes crinkled,
real friendship energy. Wardrobe in soft cream, warm white, terracotta and deep burgundy.
Natural un-retouched skin texture clearly visible: real pores, natural sheen, no airbrushing,
no beauty filter, no plastic smoothing. Soft diffused daylight from the left, gentle warm
shadows, shallow depth of field, 50mm at f/2. Group positioned right of centre, leaving the
left third of the frame as empty cream backdrop. Documentary beauty-brand photography.

### Video

Gentle candid motion. The group laughs and shifts naturally, playfully pointing at each
other's cheeks, small head turns and shoulder movement. Very subtle slow push-in. Lighting
and framing stay constant, the left third of the frame stays empty. Calm, warm, unhurried.
No cuts, no camera shake, no zoom-out.

---

## Option B: no likeness

Fictional people, no consent question, no reference image needed.

### Image

Warm editorial group photograph, 16:9 landscape. Five Singaporean women in their
early-to-mid thirties, working professionals, a mix of Chinese and Malay heritage, one
wearing a softly draped cream hijab. They stand and perch together in a bright studio against
a warm cream-beige seamless backdrop, laughing and playfully pointing at one another's
cheeks, complimenting each other's skin. Candid mid-laugh, eyes crinkled, easy familiarity,
like colleagues who have become friends.

Wardrobe is contemporary Singapore womenswear, elevated smart-casual: relaxed boxy blazers,
wide-leg tailored trousers, linen midi dresses, soft knit tops, clean architectural
silhouettes. Muted palette of oatmeal, warm white, clay terracotta, soft sage and deep navy.
Minimal gold jewellery. Natural everyday makeup, not editorial glam.

IMPORTANT: natural un-retouched skin texture clearly visible, real pores, faint freckles and
fine lines, natural sheen on the cheekbones, no airbrushing, no plastic smoothing, no beauty
filter.

Soft diffused daylight from the left, gentle warm shadows, shallow depth of field, 50mm at
f/2. The group sits right of centre, leaving the left third of the frame as clean empty cream
backdrop. Documentary beauty-brand photography, not a stock photo.

### Video

Gentle candid motion. The women laugh and shift naturally, playfully pointing at each other's
cheeks, small head turns, a hand brushing hair back, shoulders moving with the laughter. Very
subtle slow push-in. Lighting and framing stay constant, the left third of the frame stays
empty throughout. Calm, warm, unhurried. No cuts, no camera shake, no zoom-out.

---

## What the first render taught us

Option B was generated and is live in the hero. Three things to change if you regenerate:

**Ask for the left 45 to 50 percent empty, not "the left third."** The render put the group
starting at 34 percent. The headline column needs roughly 45 percent at desktop widths, so
the copy currently overlaps the leftmost woman by about 100px and sits over a soft scrim
there. It reads fine, but a wider clear zone would remove the compromise entirely.

**Ask for 1080p, not 4K.** The render came back 3840x2160 and 27MB, which is unusable on a
landing page. It is now transcoded to 1080p at 1.39MB. The 4K original is kept as
`hero-4k-original.mp4` in case it is wanted for anything else.

**Check the duration.** Requested 5 seconds, delivered 4.04. Harmless for a loop, but worth
knowing the setting is not always honoured.

The scrim in the CSS is keyed to `--hero-sand: #D9C6AB`, sampled from this render's backdrop.
A regenerate with a different backdrop tone needs that token resampled or the blend will band.

## Why the skin-texture line is non-negotiable

The page sells measured, un-retouched skin. /skin-read/ says "Real skin. Real barrier
movement. No filters, no perfect lighting." Every one of these models will smooth skin to
glass by default, and glass skin on this particular hero quietly contradicts the entire
argument below it. If a render comes back airbrushed, regenerate rather than ship it.

## Why the generation could not be run here

The Higgsfield MCP `generate_image` tool needs a `params` object, and objects sent from this
session arrive as strings: `{}`, `[]` and full JSON all fail the same way with
`params: Invalid input`. The tool schemas also arrive stripped of their properties. The same
limit blocks `medias`, which is the array a likeness reference would travel in. Run these in
the Higgsfield UI instead, or fix the MCP parameter encoding.
