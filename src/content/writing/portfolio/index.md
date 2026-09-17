---
title: 'This site'
description: 'An Astro portfolio built around one idea: two visual registers, paper and instrument, sharing a single grid so that front-end work and AI work read as two halves of one job instead of two sites on one domain.'
date: 2026-09-12
beat: 'interface'
form: 'project'
status: 'Shipping'
stack:
  - Astro
  - TypeScript
  - Tailwind
  - CSS scroll-driven animation
repoURL: https://github.com/gianatiempo/portfolio2024
---

The problem with this site was never really visual. I needed one place that covers eleven years of front-end architecture _and_ a return to the server through Python. The obvious way to lay that out is a front-end section and an AI section, and that says exactly the wrong thing. Two sections read as somebody drifting. One publication with range reads like somebody who knows what they're doing.

So I made the structure do the arguing.

## Two registers, one grid

Every surface on the site belongs to one of two registers. **Paper** is warm, set in a serif, and holds the career, the writing and the human stuff. **Instrument** is cool, set in mono, and holds the data: Python, models, the career as a table of record.

The thing that stops them reading as two separate sites is the constraint. They share one grid, one type scale and one spacing rhythm, and the only things allowed to change are the surface colour and the display font. Loosen that and the whole thing falls apart into the exact problem I was trying to solve.

Mechanically, both palettes are declared as named sets and the live tokens are aliases onto one of them:

```css
.register-instrument {
	--bg-canvas: var(--ins-bg-canvas);
	--text-primary: var(--ins-text-primary);
	--accent: var(--ins-accent);
	/* and sixteen more */
}
```

Custom properties inherit, so re-pointing the aliases on a section means every utility I'd already written against them keeps working inside it. No variant classes, no second stylesheet. A `.register-paper` nested inside an instrument section resolves the paper set back out of `:root`, which means it returns to whichever paper the reader's theme is on.

## The seam

The hero and the closing block render their content twice. Once in normal flow as the paper copy, which owns the height, and once as an `aria-hidden` overlay in the instrument register, clipped to the far side of a registered `--seam` property. Identical markup, identical type metrics, so the two line up exactly and the headline gets cut in half mid-word.

The overlay takes no pointer events, which is the part that keeps it honest. Every link you can see on the instrument side is really the paper copy's link sitting underneath, so the whole trick costs nothing in keyboard order, screen reader output or hit targets. Without `clip-path` support you just get the paper copy on its own.

The seam then travels while you read. It's scrubbed against scroll position instead of playing once on entry:

```css
@keyframes seam-shift {
	to {
		--seam: 34%;
	}
}

.seam {
	animation: seam-shift linear both;
	animation-timeline: view();
	animation-range: entry 60% exit 40%;
}
```

It's the only bit of motion on the site that's actually saying something. The balance shifts from paper toward instrument in the same direction the page does, from nineteen years of career toward whatever I'm building now.

## What it costs

No animation library, no client framework, no smooth-scroll shim. The motion is native CSS scroll-driven animation behind `@supports` and `prefers-reduced-motion`, so content is visible by default and a browser that can't do any of it loses the movement and nothing else. The only JavaScript that ships is the mobile menu dismissal and the theme read that has to happen before paint.

---

_This is the first thing in the collection and the one I keep using as a template. The others are still in progress._
