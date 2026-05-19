# NOI Poster Hero Handoff

## Current Status

This folder is an isolated prototype for the new NOI hero direction.

Open:

```text
NOI/hero-poster/index.html
```

The original `NOI/index.html` is not meant to be edited for this prototype.

## Direction

Design direction:

```text
Soft Poster / Graphic NOI
```

Core worldview:

- Noise is not particles. Noise is emotional vibration.
- Hologram is not sci-fi. Hologram is refraction of feeling.
- Motion is not decoration. Motion is breathing.

Hero copy:

```text
MAKE NOISE. MOVE HEARTS.
```

Subcopy:

```text
揺れに、輪郭を。
```

The desired mood is a strong editorial poster, not a clean futuristic SaaS hero.

## Latest Decision

As of May 8, the preferred hologram direction is:

```text
Use a hologram-only video as the background layer, then keep all typography and editorial marks in HTML/CSS.
```

Reason:

- The CSS-only hologram still feels different from the reference.
- The reference has photographic refraction, soft white membrane edges, cyan/pink bleed, and analog grain.
- CSS gradients can approximate the mood, but they tend to look like artificial bands.
- A video background better supports the concept: `Motion is breathing`.

Candidate video from Lovart:

```text
/Users/chiikoba/Downloads/video.mp4
```

Confirmed metadata:

```text
Size: 1280 x 720
Aspect ratio: 16:9
Duration: about 10.04s
Codec: H.264
File size: about 2.0MB
```

Visual assessment:

- Good direction.
- Stronger match than CSS-only hologram.
- Right-side white/yellow membrane and cyan/pink refraction feel close to the reference.
- Good for prototype use.
- For production, 1920 x 1080 would be better if available.

## Files

```text
hero-poster/
  index.html
  css/style.css
  js/main.js
  HANDOFF.md
```

Important files:

- `index.html`: structure, text, and where the video layer should be added.
- `css/style.css`: layout, typography, colors, current CSS hologram layers, grain.
- `js/main.js`: slow breathing motion for the current CSS hologram layer.

## Visual Requirements

Keep:

- Aqua / blue-green background.
- Huge lime typography.
- Dark violet small text.
- Poster-like cropped composition.
- Left vertical service rail.
- Right editorial text:
  - `CREATING / WHAT WORDS / CAN'T SAY.`
  - vertical `MAKE NOISE. MOVE HEARTS.`
- Bottom metadata:
  - coordinates
  - `NOT ORDINARY IMAGINATION.`
- Paper / film noise texture.

Avoid:

- Particles.
- Network dots or connecting lines.
- Cyberpunk effects.
- Heavy glassmorphism.
- Overly glossy sci-fi hologram.
- Fast glitch motion.

## Recommended Next Implementation

1. Copy the Lovart video into the prototype, for example:

```text
hero-poster/assets/hologram.mp4
```

Do not reference `/Users/chiikoba/Downloads/video.mp4` directly in final prototype code.

2. Add a video layer in `hero-poster/index.html`, inside `.poster-hero`, behind typography and above the aqua base.

Suggested markup:

```html
<div class="hologram-video-layer" aria-hidden="true">
  <video src="assets/hologram.mp4" autoplay loop muted playsinline></video>
</div>
```

3. Style it in `hero-poster/css/style.css`:

```css
.hologram-video-layer {
  position: absolute;
  inset: 0;
  z-index: -3;
  pointer-events: none;
  overflow: hidden;
}

.hologram-video-layer video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

Then tune:

- `opacity`
- `mix-blend-mode: normal | screen | soft-light`
- `filter: saturate(...) brightness(...) contrast(...)`

4. Keep the existing `.grain-layer` if it improves analog texture.

5. Disable or remove the current CSS-only `.aura-layer` once the video gives enough refraction.

6. Respect `prefers-reduced-motion`.

If reduced motion is enabled, either hide the video animation or show a static poster frame if one is available.

## Current CSS Hologram State

The current CSS hologram is membrane-based, but it is no longer the recommended final direction.

It is built with spans inside `.aura-layer`:

```html
<span class="holo-membrane holo-membrane-main"></span>
<span class="holo-membrane holo-membrane-right"></span>
<span class="holo-membrane holo-membrane-lower"></span>
<span class="holo-band holo-band-right"></span>
<span class="holo-band holo-band-left"></span>
<span class="holo-fringe holo-fringe-right"></span>
<span class="holo-fringe holo-fringe-lower"></span>
```

If the video layer is used, this layer can be hidden with:

```css
.aura-layer {
  display: none;
}
```

or removed from `index.html`.

## Motion Notes

The current CSS breathing motion is in `js/main.js`:

```js
const x = Math.sin(elapsed / 8.5) * 12;
const y = Math.cos(elapsed / 10.5) * 9;
const scale = 1 + Math.sin(elapsed / 12) * 0.018;
```

If the MP4 is used, this JS may no longer be necessary unless it is used for another subtle overlay.

Keep all motion slow. The guiding phrase is:

```text
almost still, like breathing light
```

## Suggested Next Pass

1. Integrate `/Users/chiikoba/Downloads/video.mp4` as `hero-poster/assets/hologram.mp4`.
2. Add the video layer behind the typography.
3. Disable the CSS-only `.aura-layer`.
4. Tune opacity and blend mode until:
   - the hologram feels photographic,
   - the lime headline remains dominant,
   - the right-side editorial text remains readable.
5. If visually accepted, ask/export a 1920 x 1080 version for production.

## Validation

Run:

```bash
node --check hero-poster/js/main.js
```

Manual checks:

- Open `hero-poster/index.html`.
- Check desktop around 1600px width.
- Check mobile width for no horizontal overflow.
- Confirm there are no particles or network lines.
- Confirm video autoplay works locally.
- Confirm the loop does not feel jumpy.
- Confirm `MAKE NOISE. MOVE HEARTS.`, right-side editorial text, and `揺れに、輪郭を。` remain readable.
- Confirm `NOI/index.html` is not edited as part of this prototype task.

## Notes For Claude Code / Codex

Do not refactor the existing NOI site while working in this folder.

This prototype is intentionally separate so the design can be tuned without breaking the current homepage.

When making visual changes, keep them localized to:

```text
hero-poster/index.html
hero-poster/css/style.css
hero-poster/js/main.js
```

Priority is not to perfect the CSS hologram anymore. Priority is to test the Lovart MP4 as the hologram background and make the poster composition work on top of it.
