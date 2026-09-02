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

---

# Round two: the consultation, faces away

## Why the first hero failed

Feedback was that it read as AI, and it did. Five specific tells, only two of
which were about render quality:

1. **The gesture was invented.** Five women pointing at each other's cheeks is
   a concept being illustrated, not a moment being captured. No amount of
   re-rendering fixes a pose nobody strikes.
2. **A seamless cream backdrop with no room.** Infinity backdrops are the
   native visual language of stock and AI. Real studios have corners.
3. **Motion warping.** Five seconds of generative video morphs hands, teeth
   and hair between frames.
4. **Casting uniformity.** Same age, same beauty register, everyone delighted.
5. **It said nothing only BeFound could say.** "Happy women who like their
   skin" is every skincare hero.

The deeper problem: `/skin-read/` promises "Real skin. Real barrier movement.
No filters, no perfect lighting." A synthetic hero argues against the 27
screens beneath it.

## The fix is compositional, not technical

**Nobody's face points at the camera.** Generative models are worst at faces,
worst of all at faces in motion. Removing them removes the tell at its source
rather than trying to out-prompt it.

This composition is also trivially shootable on a phone in the studio, and
that is the better outcome. Everything below is written so the same brief
works either way.

## What the layout needs from the frame

| Requirement | Why |
|---|---|
| Subject right of centre, left 40% quiet | The headline column sits there |
| Clear air around and above her head | Four HTML question bubbles live there |
| Faces angled down or away, none to camera | The whole point |
| Survives a centre-right 4:3 crop | Mobile crops to 4:3 at `object-position:68%` |
| A real room, no seamless backdrop | Corners, shelving, depth |
| 16:9 | The hero is `aspect-ratio:16/9` on desktop |

The questions are **not** in the image. They are HTML over it, so the picture
only has to be a picture and nothing is left for a generator to garble.

**Settings:** GPT Image 2 (`gpt_image_2`) / **16:9** / **2k** / quality high.
Save as `hero-consult.jpg`.

---

## Wardrobe: read this before generating

The first pass of these prompts produced topless renders. That is not the
model misbehaving, it is the prompt: a figure seen from behind, described by
body parts ("her shoulder", "her upper back") and never by clothing, sits
squarely in a boudoir prior. Generators fill the gap with what that phrasing
usually accompanies.

Three rules fix it, and all three are used below.

**Name the garment before you name the person.** The clothing has to arrive in
the same breath as the subject, not in a wardrobe note at the bottom. By the
time a late instruction lands, the composition is already set.

**Never describe her by exposed anatomy.** No "shoulder", no "upper back", no
"bare". Say "the collar of her shirt", "her sleeves", "the shoulders of her
blazer". Describe fabric, and the body underneath is implied fully covered.

**Say it twice.** Once in the opening sentence, once in the IMPORTANT block.

---

## Option A: over the shoulder (recommended)

```
Warm documentary photograph, 16:9 landscape, shot from just behind and slightly
above a woman seated at a small round timber consultation table.

She is a Singaporean woman in her mid thirties, a working professional, wearing
a relaxed oatmeal linen shirt with long sleeves and a collar buttoned high at
the neck. Her dark hair is loosely tied back. We see the back of her head and
the collar and upper seams of her shirt. HER FACE IS COMPLETELY AWAY FROM THE
CAMERA AND NOT VISIBLE AT ALL. She is framed from her mid-torso upward and sits
right of centre.

Across the table from her, a skin barrier specialist in a long-sleeved soft
cream tunic is looking DOWN at a tablet lying flat on the table, explaining
something. HER FACE IS ANGLED DOWN AND AWAY FROM THE LENS, three-quarters
turned, softly out of focus. Neither woman looks toward the camera.

The setting is a real consultation room, not a studio backdrop: warm timber
shelving behind them with a few skincare bottles and a plant, concealed strip
lighting under the shelves, an upholstered chair, a corner of the room visible.
A white domed skin-imaging device sits on a side table in the background,
softly out of focus.

The LEFT 40 PERCENT of the frame is quiet: wall and shadow, no objects, nothing
competing. There is clear open space above the seated woman.

Available light only, warm and low, late afternoon. No flash, no studio strobe.

IMPORTANT: both women are fully dressed throughout in modest professional
smart-casual clothing. Long sleeves, buttoned collars, full coverage. This is a
skincare consultation in a professional studio, photographed as reportage.

IMPORTANT: completely un-retouched skin on the hands and on the specialist.
Real texture, no smoothing, no beauty filter.

Shot on 50mm at f/2, shallow depth of field, muted restrained colour grade.
Quiet and observational, the frame of someone who happened to be standing
there. Documentary, not an advertisement.
```

## Option B: her and the machine, no second person

Simpler, and the safest of all: one figure, no face, plus the one object no
competitor has.

```
Warm documentary photograph, 16:9 landscape. A Singaporean woman in her mid
thirties, a working professional, wearing a structured oatmeal blazer over a
high-necked cream knit top, long sleeves, seen from behind. Her dark hair is
loosely tied back. She is seated at a small timber table, leaning slightly
toward a white domed skin-imaging device in front of her. We see the back of
her head and the collar and seams of her blazer. HER FACE IS NOT VISIBLE. She
is framed from her mid-torso upward and sits right of centre.

The dome's interior glows faintly. Warm timber shelving behind, a few skincare
bottles, concealed strip lighting, a real room with a visible corner.

The LEFT 40 PERCENT of the frame is quiet wall and shadow with no objects, and
there is clear open space above her.

Available light only, warm and low. No flash.

IMPORTANT: she is fully dressed throughout in a blazer and a high-necked top,
long sleeves, full coverage. This is a skincare consultation in a professional
studio, photographed as reportage.

IMPORTANT: completely un-retouched. Real hair texture, real fabric, no
smoothing or plastic finish anywhere.

Shot on 50mm at f/2, shallow depth of field, muted restrained colour grade.
Observational and quiet. Documentary, not an advertisement.
```

## If a render comes back wrong

**Anyone is undressed.** The wardrobe sentence has drifted too late in the
prompt or the crop went too wide. Move the garment description earlier and add
"framed from her mid-torso upward" to keep the torso mostly out of frame.

**A face has crept toward the lens.** Regenerate. Do not accept a
three-quarter face because it "looks fine" — that is the exact thing the last
hero was rejected for.

**The left side is busy.** The headline will sit on top of it. Ask again for
the left 40 percent to be wall and shadow.

**It looks like a set.** Ask for a visible corner of the room and one object
that is slightly out of place. Perfect rooms read as renders.

**Everything is sharp.** Available light at f/2 should leave the background
soft. A fully sharp frame is a giveaway.

---

# Round three: the dome, extended to 16:9

The studio slide already contains the strongest hero frame: the open dome with
its LED array, shot close, the client's hair at the edge. It needs to be 16:9
and it needs to be flipped so the dome reads left to right into her.

Flipped copy is saved as `scan-dome-flipped.jpg` (586 x 690).

## Do not generate this from text

A text prompt will invent a device. It will be a generic white salon machine,
and it will not be the one in the studio. That matters more here than usual:
this object is the differentiator, and a client who books off the hero and then
walks in to find a different machine has been shown something that was not
true.

**Outpaint instead.** Extend the real photograph rather than replacing it. The
dome, the LEDs, the gold rim, the blue indicator and the hair stay untouched
photograph; only wall and room get invented, which is the part a generator is
actually good at.

## Outpaint brief

Upload `scan-dome-flipped.jpg`. Extend to **16:9**, adding all new pixels on
the **left** — the headline column lives there.

```
Extend this photograph to the left. Continue the same room: a softly lit
interior wall in warm off-white, gently out of focus, with the natural falloff
of window light from the left. Continue the pale surface the device sits on
along the bottom edge. Add nothing else: no furniture, no props, no people, no
text, no additional equipment.

The new area must be quiet and almost empty, slightly darker at the far left,
matching the existing exposure, grain and colour temperature exactly. Do not
alter, brighten, sharpen or reframe any part of the original image.
```

Target: **1227 x 690**, then upscale to 1920 wide.

## Why all the new pixels go left

The headline, the subtext and the CTA sit in the left 40 to 45 percent of the
hero. Extending left gives that column clean, quiet wall to sit on and leaves
the dome and the hair exactly where they are on the right.

## If outpainting is not available

Second best is image-to-image with `scan-dome-flipped.jpg` as the reference and
a low denoise, asking for a wider framing of the same scene. Expect the LED
arrangement and the rim to drift; check them against the original before
accepting.

Generating from text is the last resort, and if it comes to that the device
must be described from the real photograph rather than in the abstract: a
large white glossy hood open at the front, a champagne-gold inner rim, a matt
black interior lined with two curved rows of small square LED modules, a
slim vertical chrome post at the centre, a pale grey moulded chin rest at the
base, and a small circular control ring lit pale blue below it.

---

# Round five: pyjamas, at home, native

## Native is a reversal of the editorial brief, not a refinement

Round four asked for a magazine composition: a plain oatmeal sheet, one large
soft key from the upper left, a tonal palette, medium format, no clutter. It
worked, and it produced the frame currently on the page.

Native asks for the opposite of most of that. Something that looks like a
friend posted it, not something a brand commissioned. The two briefs cannot
both be followed, so this one drops the editorial framing deliberately:

| Editorial (round four) | Native (this one) |
|---|---|
| medium format, f/2.8 | phone camera, wider lens |
| one large soft key | whatever the window is doing |
| plain sheet, nothing else | a real bed, lived in |
| tonal, graded palette | uncorrected white balance |
| composed and still | slightly off, caught |
| fine grain | phone sensor grain |

**What does not change is the skin.** Un-retouched was the point in every
round and it is the point here. Native helps rather than hurts: phone photos
show texture that a beauty shoot would smooth away.

## What the layout still needs

These are not stylistic, they are the reasons the last frame had to be
re-cropped by hand. Ask for them explicitly.

| Requirement | Why |
|---|---|
| Left 40 to 45 percent quiet and plain | The headline column sits there. A bedside table in that half kills it. |
| Clear space above their heads, about a quarter of the frame | The question chips live there. |
| Heads in the lower two thirds, not the middle | The last render put them so low in a tall empty frame that 12% had to be cropped off the top. |
| Both faces up, parallel, not touching | Turned toward each other reads as intimacy, not friendship. |
| 16:9 | The hero box is roughly 1.8 and crops the sides, not the top. |
| Modest coverage, long sleeves | Overhead framing puts collars and shoulders in shot. |

**Settings:** GPT Image 2 (`gpt_image_2`) / **16:9** / **2k** / quality high.
Save as `hero-stayin.jpg`.

## The prompt

```
Candid phone photograph, 16:9 landscape, shot from DIRECTLY OVERHEAD looking
straight down at a bed. Two Singaporean women in their late twenties lie on
their backs on a rumpled duvet, heads side by side and close together, bodies
running away from the camera and cropped out of frame below the shoulders.
They lie PARALLEL, both faces up toward the lens, not turned toward each other
and not touching.

Both wear real pyjamas, FULLY COVERED: one in a soft washed-cotton pyjama
shirt with a collar and long sleeves in a faded stripe, the other in a plain
oatmeal long-sleeved pyjama top with a crew neck. The fabric is soft and
slightly creased from being worn. Only collars and shoulders are in frame.

The woman on the RIGHT wears a white cotton sheet mask over her whole face
with openings at the eyes, nostrils and mouth. THE MASK IS VISIBLY CREASED
AND FOLDED where it has been smoothed down, with a slightly damp edge lifting
near the jaw. Her eyes are closed.

The woman beside her is bare-faced, no makeup, eyes open, one eyebrow slightly
raised, glancing sideways toward her friend with a curious, questioning
expression, on the edge of a smile.

FRAMING: their heads sit RIGHT OF CENTRE and in the LOWER TWO THIRDS of the
frame. Above their heads there is about a quarter of a frame of clear space.
The LEFT 40 TO 45 PERCENT is a plain, quiet area of the duvet, softly creased,
carrying no objects at all.

THE ROOM: a real bedroom, lived in and not styled. In the right half only, a
few honest details near the edges — the corner of a pillow, a phone lying face
down, a hair tie, a paperback. Nothing arranged. No product packaging, no
jars, no tubes, no sachets, no labels, no text anywhere.

LIGHT: soft late-morning daylight from a window off to one side. Whatever the
room is doing, not a lighting setup. No flash.

IMPORTANT: completely un-retouched skin on the bare-faced woman. Visible
pores, fine vellus hair, natural unevenness, a few marks, real shine on the
nose and cheekbone. No smoothing, no beauty filter, no airbrushing. A glassy
render is unusable.

Shot handheld on a phone, wide lens, deep focus, faint sensor grain, natural
uncorrected colour. Slightly imperfect framing, as if taken quickly. It should
look like something one of them posted, not like a photograph a brand
commissioned.
```

## Check in this order

**The skin.** Bare-faced woman, at full size. If it is smoothed to glass the
render is unusable no matter how good the rest is.

**The mask.** Creases and a lifting edge. A smooth white shape reads as a
filter, which is the exact tell this page cannot afford.

**The left 40 percent.** Plain duvet, nothing on it. This is the one the
generator will get wrong most often, because "lived-in bedroom" pulls clutter
everywhere.

**Head height.** Lower two thirds, with about a quarter of a frame of clear
space above. If they float in the middle of an empty frame, the top has to be
cropped by hand again.

**Pyjamas.** Collars, long sleeves, full coverage. Overhead framing is where
the earlier topless problem came from.

**Whether it reads as native.** If it looks lit rather than found, ask again
for window light and a phone lens. The giveaway is a shadow that falls too
cleanly.

---

# Round six, when you want it: production-grade native

Not written as a full prompt yet, because round five has to run first. Native
answers whether the composition works; this answers whether the finish is
right, and there is no point tuning the finish on a composition that failed.

## What it actually is

The register Glossier, Rhode and Topicals shoot in. It reads as casual and is
not. **It looks unposed but nothing in it is accidental.**

That makes it a narrow band between the two things generators do easily, which
is why it is the hardest of the three to get:

| | Native (round five) | Production-grade |
|---|---|---|
| Camera | phone, wide lens | real glass, 50mm or 85mm |
| Light | whatever the window is doing | a large soft source *pretending* to be the window |
| Grain | phone sensor noise | clean, or fine film grain by choice |
| Colour | uncorrected | graded, consistent, quiet |
| The room | genuinely messy | messy on purpose, every object placed |
| Framing | slightly off, caught | looks casual, is exact |
| Skin | real because the phone cannot hide it | real because they decided not to retouch it |

The last row is the whole thing. Native gets honest skin for free. Production-grade has to **choose** it, which is why most brands in this register still
retouch and why the prompt has to fight for it hardest here.

## The deltas to apply to the round five prompt

Keep every layout constraint — left 40 to 45 percent quiet, heads in the lower
two thirds, parallel and not touching, modest coverage, 16:9. Change only:

- `Candid phone photograph` becomes `Photographed on a 50mm lens at f/2.8`
- `whatever the room is doing, not a lighting setup` becomes `one large soft
  source from a window position, shaped so it reads as daylight`
- `faint sensor grain, natural uncorrected colour` becomes `clean, fine film
  grain, a quiet consistent grade`
- `slightly imperfect framing, as if taken quickly` becomes `framing that
  looks casual and is exact`
- the room detail stays, but add: `every object deliberately placed to look
  as though it was not`
- keep the un-retouched paragraph **word for word**, and add: `this is a
  campaign image that has not been retouched, which is the point`

## Why this one may want a real shoot

The other rounds were about avoiding what generators are bad at. This one
asks for something they are bad at by definition: expensive restraint. A model
pushed toward "campaign" tends to return either stock polish or a snapshot,
and the space between is thin.

Two women, pyjamas, a bed, a window and someone who can hold a camera steady
gets there in an afternoon, and every constraint in round five works unchanged
as a shot list.
