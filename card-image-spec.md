# Deck card images: prompts

Four cards in the "Four things women say" section. The image is the whole card
face; the numeral and statement sit over a navy gradient at the base.

**Settings for all four:** GPT Image 2 (`gpt_image_2`) / aspect **3:4** /
resolution **2k** / quality **high**.

Drop the results in as `cards/sign-1.jpg` … `sign-4.jpg`, or send the raw files
and I will crop and encode them.

---

## Three constraints baked into every prompt below

**The lower third gets covered.** The copy gradient sits over roughly the bottom
35% of the card and is near-opaque at the base. Every prompt therefore asks for
the key detail high in the frame and the lower third falling into shadow.

**They are read at three sizes.** Front card is 253px wide; the flanking pair at
93% under 1.1px blur; the far card at 86% under 2.2px. Each image needs one bold
tonal shape that survives blurring, not fine detail alone.

**Same world.** Deep navy ground, warm rim light from behind, cool fill. That is
what makes four separate generations read as one set.

---

## 1 — "Your skin stings or flushes after cleansing"

```
Editorial beauty photograph, 3:4 portrait. Tight but not macro crop of one
Singaporean woman's face, from just below the eye down to the jaw, filling the
left two thirds of the frame. Her skin carries a diffuse pink flush across the
cheek, the kind that appears right after washing: slightly damp at the hairline,
a faint sheen on the cheekbone, no makeup. Calm expression, eyes lowered.

Deep navy backdrop, warm rim light raking from behind her, cool soft fill from
the front. The lower third of the frame falls into shadow and carries no
important detail.

IMPORTANT: completely un-retouched skin texture. Visible pores, fine vellus
hair, natural unevenness. No smoothing, no beauty filter, no plastic finish.

Shot on 85mm at f/2.8, shallow depth of field. Muted, restrained colour grade.
Documentary beauty photography, not a skincare advertisement.
```

---

## 2 — "A drawer of products that worked for three weeks and then stopped"

The hardest of the four, because the statement is about **futility, not skin**.
No dermatological close-up can say "I tried and it stopped working." This one
needs objects.

```
Editorial still life, 3:4 portrait. A woman's hand, seen from her own point of
view, resting on the edge of a crowded bathroom shelf crowded with skincare
bottles and jars, all unbranded and unlabelled in muted glass and matte plastic.
Some containers are open, one is tipped on its side, one is clearly almost
empty. The arrangement is cluttered and accumulated rather than styled, as
though bought over years and never thrown away.

The hand and the products sit in the upper two thirds of the frame. Deep navy
background, warm rim light from behind, cool soft fill. The lower third falls
into shadow and carries no important detail.

Quiet, slightly weary mood. No faces. No text or logos on any container.

Shot on 50mm at f/2.8, shallow depth of field, muted restrained colour grade.
Documentary still life, not a product advertisement.
```

**Alternative if you want the set to stay purely dermatological:** a face with
flat, tired neutrality. No redness, no breakout, nothing visibly wrong and
nothing better. Harder to generate convincingly, but it lands the plateau.

---

## 3 — "Everything either does nothing or breaks you out"

The current image already works. Regenerate only if you want the whole set
consistent.

```
Editorial beauty photograph, 3:4 portrait. Close crop on the lower cheek and
jawline of one Singaporean woman, face turned away, filling the left two thirds
of the frame. Active breakouts across the jaw: a few raised inflamed spots, some
smaller closed bumps, faint post-inflammatory marks from older ones. Raking side
light so the raised texture casts real micro-shadows and reads as three
dimensional.

Deep navy backdrop, warm rim light from behind, cool soft fill. The lower third
of the frame falls into shadow and carries no important detail.

IMPORTANT: completely un-retouched. No smoothing, no concealing, no beauty
filter. The texture is the subject.

Shot on 85mm at f/2.8. Muted restrained colour grade. Clinical documentary
photography, sympathetic rather than harsh.
```

---

## 4 — "You were fine at 22. Now your skin reacts to things it never used to"

Go **much closer** than card 1. Crop distance is the only thing keeping these
two apart once they are blurred at the back of the deck.

```
Extreme macro beauty photograph, 3:4 portrait. Very tight crop on a single
cheek, so close that the face is unreadable and only skin fills the frame. Fine
broken capillaries thread visibly beneath the surface, surrounded by an angry
uneven redness that fades into normal tone at the edges. Every pore and fine
line is visible.

Deep navy backdrop just showing at one edge, warm rim light from behind, cool
soft fill. The lower third of the frame falls into shadow and carries no
important detail.

IMPORTANT: completely un-retouched. Real capillaries, real pores, no smoothing,
no beauty filter.

Shot on a 100mm macro at f/4, razor-thin focus on the capillaries. Muted
restrained colour grade. Clinical documentary photography.
```

---

## The line to hold

Generated images are fine **here**, because they illustrate a symptom and nobody
reads a symptom close-up as a claim about a named person.

They are not fine in the before/after gallery further down, which uses real
clients as proof. Keep the boundary clean: **generated for symptoms, real
photography for results.** The page argues for measured, un-retouched skin, so a
synthetic result shot would undercut the whole argument.

---

# Hidden cost section: illustration

Replaces the drawn barrier cross-section currently in the left column.

**Settings:** GPT Image 2 (`gpt_image_2`) / aspect **4:3** / **2k** / quality high.
Save as `cost-mirror.jpg` in this folder.

## Why not money

The section's own lede says the bottles are "the cost you can see. But it is also
the smallest one." Dollar signs would illustrate the cost the copy just told the
reader to discount. Four of the five bullets are not financial at all: time,
shrinking options, mental load, self-doubt. Cash imagery cannot carry any of
them, and it puts the reader in a transactional frame immediately before a free
offer.

## The prompt

```
Warm documentary photograph, 4:3. A Singaporean woman in her mid thirties stands
at a bathroom mirror in the early morning, seen slightly from the side. She is
looking at her own reflection with a neutral, faintly tired expression. Not sad,
not distressed, just unremarkable: the face of someone who has checked her skin
every morning for years and seen the same thing.

Her skin is bare and un-madeup. Several skincare bottles sit out of focus in the
foreground of the frame, close to the lens, so they frame her without competing
for attention. Deep navy and warm neutral bathroom, soft window light from the
side, one warm practical light behind her.

IMPORTANT: completely un-retouched skin. Real pores, real texture, no smoothing,
no beauty filter.

Shot on 35mm at f/2, shallow depth of field, muted restrained colour grade.
Quiet and observational. Not an advertisement, not a before-and-after.
```

## Why this image

Bullets four and five are the emotional floor of the section: the mental load,
and "maybe the next one will work." Those are the costs worth showing. A mirror
is also the only object that makes "the face in the mirror looks much the same"
literal.

It resets the page rhythm too. This section currently follows the animated
cycle, so the reader gets two abstract diagrams in a row. A photograph breaks
that, which is likely a bigger part of why the section reads thin than the
drawing itself.

## What NOT to shoot

A drawer or shelf of bottles. It matches the lede, but card 2 of the deck above
is already a hand on a crowded shelf of skincare, and at a glance the two read
as the same picture.

---

# Skin Read section: the photographic ground

Full-bleed image behind the dark Skin Read section. Save as **`skin-read.jpg`**
in this folder. Until it exists the section falls back to flat navy and looks
exactly as it did before, so nothing breaks in the meantime.

**Settings:** GPT Image 2 (`gpt_image_2`) / aspect **16:9** / **2k** / quality high.

## What the first draft got wrong

It asked for a specialist holding a scanning device against a client's cheek.
Two people arranged to demonstrate a procedure reads as staged no matter how
well it is lit, because nobody sits like that unless a camera is present.

Both reference images work for the opposite reason. One woman, absorbed in
something, mid-gesture, unaware she is being photographed. The room is a real
room rather than a set. Nobody is presenting anything to the lens.

So: **one subject, caught rather than arranged.** If a second person appears at
all they are a soft out-of-focus shoulder in the foreground, not a co-star.

## Three constraints the CSS imposes

**The left 45 to 50 percent must be clear, and it must be dark.** The headline,
body and CTA sit there under a heavy navy scrim. Dark pixels under a dark scrim
stay clean; a warm timber wall under 90 percent navy turns to mud, because navy
over orange is complementary and lands on grey. Put the shadow on the left and
the warm wood on the right, where the scrim thins to nothing.

**The subject belongs in the upper right.** The image is anchored `right top`
and the scrim closes to solid navy 42 percent up from the bottom, because the
timeline and CTA sit down there. Anything important low in the frame is painted
over.

**No readable screen.** The barrier readout is a real HTML panel floating over
this photograph. A second readout inside the image competes with it and dates
the page the moment the real UI changes.

---

## Option A: reading her Findings (recommended)

Closest to the photo you shared, and it puts the offer's actual artefact in
frame. The page already promises "you leave with your Findings on paper whether
you ever come back or not", so this is the moment right after the Read.

```
Candid documentary photograph, 16:9 landscape. A Singaporean woman in her mid
thirties sits alone at a small round consultation table in a warm skincare
studio, seen from the side, unaware of the camera. She is looking down at a
printed sheet of paper on the table in front of her, one hand lifted mid
gesture as though partway through asking a question. Absorbed, thoughtful,
slightly amused. Contemporary smart-casual workwear in a dark muted tone.

She sits in the RIGHT HALF of the frame, high in it, her head in the upper
third. The LEFT 45 TO 50 PERCENT of the frame is deep shadow: an unlit corner
of the room falling to near black, carrying no objects and no detail.

Behind her, warm timber shelving with concealed strip lighting, a few quiet
objects on the shelves, a soft upholstered chair. Available light only, warm
and low, no visible flash and no studio strobe. The far side of the frame is
warm; the near side falls away into darkness.

IMPORTANT: completely un-retouched skin. Real pores, real texture, faint fine
lines, natural sheen on the cheekbone. No smoothing, no beauty filter, no
plastic finish.

Shot on 50mm at f/1.8 from across the room, shallow depth of field, muted
restrained colour grade. Quiet and observational, the frame of someone who
happened to be standing there. Not an advertisement, not a stock photo.
```

## Option B: over the shoulder

Carries the "one-on-one" fact without either person performing it. The
specialist is present but is foreground blur, not a subject.

```
Candid documentary photograph, 16:9 landscape. Shot past the blurred shoulder
and upper arm of a person in soft cream clothing in the near foreground,
heavily out of focus and cropped by the frame edge. Beyond them, sharply in
focus, a Singaporean woman in her mid thirties sits at a small round table in a
warm skincare studio, listening, head slightly tilted, one hand resting on a
printed sheet in front of her. Natural and unposed, mid conversation, neither
person looking toward the camera.

The seated woman sits in the RIGHT HALF of the frame, high in it. The LEFT 45
TO 50 PERCENT is deep shadow falling to near black, carrying no detail.

Warm timber shelving with concealed strip lighting behind her. Available light
only, warm and low. No visible screens.

IMPORTANT: completely un-retouched skin. Real pores, real texture, natural
sheen. No smoothing, no beauty filter.

Shot on 85mm at f/1.8, very shallow depth of field, muted restrained colour
grade. Observational, unstaged. Not an advertisement.
```

---

## If it comes back looking posed anyway

The tells are eye contact with the lens, both hands still and symmetrical, and
a face doing an expression rather than having one. Ask for **mid-gesture**,
**mid-sentence**, and **looking at something in the room**, which are the three
things the photo you shared does and a staged frame never does.

## If it comes back too low or too central

Regenerate rather than crop. The scrim geometry assumes the head sits in the
upper third, and cropping upward throws away the empty left half that the copy
column needs.
