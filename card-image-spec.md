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

## Retired

A prompt for a hidden-cost illustration lived here. That section was
reformatted into a two-column ledger with no image slot, so the prompt was
documenting an asset the page cannot place. Recover it from git history if the
layout ever changes back.
