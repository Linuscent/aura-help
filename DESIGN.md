---
name: Linuscent Aura reference library
description: Linuscent Aura reference library
colors:
  dark-page: "#05060a"
  dark-nav: "#0a0c14"
  dark-raised: "#111722"
  dark-hover: "#16212d"
  dark-heading: "#e5e7eb"
  dark-body: "#b7c1ce"
  dark-muted: "#91a0b4"
  dark-border: "#293343"
  dark-border-strong: "#465367"
  dark-action: "#22d3ee"
  dark-action-hover: "#67e8f9"
  dark-selected: "#102d38"
  dark-positive: "#4ade80"
  dark-positive-bg: "#102b21"
  dark-warning: "#f59e0b"
  dark-warning-bg: "#30230d"
  dark-danger: "#fb7185"
  dark-danger-bg: "#341620"
  dark-overlay: "rgb(5 6 10 / 80%)"
  light-page: "#ffffff"
  light-nav: "#f4f5f7"
  light-raised: "#edf1f5"
  light-hover: "#e7edf2"
  light-heading: "#0e0c1b"
  light-body: "#384454"
  light-muted: "#526073"
  light-border: "#d5dce4"
  light-border-strong: "#8190a2"
  light-action: "#08758a"
  light-action-hover: "#075b6c"
  light-selected: "#dff4f7"
  light-positive: "#166534"
  light-positive-bg: "#e6f5ec"
  light-warning: "#92400e"
  light-warning-bg: "#fff3d9"
  light-danger: "#be123c"
  light-danger-bg: "#fff0f3"
  light-overlay: "rgb(14 12 27 / 48%)"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 3vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2rem, 1.5rem + 1.5vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.75
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
  code:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.875rem"
rounded:
  control: "0.375rem"
  panel: "0.75rem"
spacing:
  space-1: "0.25rem"
  space-2: "0.5rem"
  space-3: "0.75rem"
  space-4: "1rem"
  space-6: "1.5rem"
  space-8: "2rem"
  space-12: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.dark-action}"
    textColor: "{colors.dark-page}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.5rem"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.dark-action-hover}"
  button-primary-light:
    backgroundColor: "{colors.light-action}"
    textColor: "{colors.light-page}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.5rem"
    typography: "{typography.label}"
  button-primary-light-hover:
    backgroundColor: "{colors.light-action-hover}"
  button-secondary:
    textColor: "{colors.dark-heading}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.5rem"
  topic-link:
    backgroundColor: "transparent"
    rounded: "0"
    padding: "1.5rem 1rem"
  search-trigger:
    backgroundColor: "{colors.dark-page}"
    textColor: "{colors.dark-muted}"
    rounded: "{rounded.control}"
  search-dialog:
    rounded: "{rounded.panel}"
---

# Design System: Linuscent Aura reference library

## Overview

**Creative North Star: "Linuscent Aura reference library"**

This is the established Linuscent Aura identity adapted to documentation, not a new identity. Near-black and navy surfaces, cyan interaction, geometric headings, and quiet reading text carry the parent brand without its cinematic decoration. A matching light theme uses darker cyan for legible interaction.

The implementation authority is `src/styles/theme.css` and `src/styles/docs.css`, with native Starlight components. Brand evidence comes from `../linuscent-website/src/styles/global.css`; it is not a runtime dependency. The official `public/logo-linuscent.png` remains unchanged, including its red color. This document describes implemented styling, not a browser-accessibility certification.

**Key Characteristics:**
- Cyan interaction with neutral reading surfaces.
- Self-hosted fonts and compact, flat components.
- Familiar Starlight navigation and search.
- Equivalent semantic roles in dark and light themes.

## Colors

### Primary

Use `--aura-action` for links, focus, selected navigation text, and primary actions. Its hover role is `--aura-action-hover`; filled actions use `--aura-on-action` for text. Do not substitute brand cyan directly in themed components.

### Neutral

The frontmatter records exact values. Each row below maps a CSS semantic role to its dark and light frontmatter keys. Unprefixed keys in the two theme columns receive `dark-` or `light-` respectively.

| CSS role (`--aura-` prefix) | Dark key | Light key | Use |
| --- | --- | --- | --- |
| surface-page | page | page | Reading canvas |
| surface-nav | nav | nav | Header, sidebar, quiet hover |
| surface-raised | raised | raised | Search keys, inline code |
| surface-hover | hover | hover | Secondary and navigation hover |
| text-heading | heading | heading | Titles and strong emphasis |
| text-body | body | body | Article text |
| text-muted | muted | muted | Supporting descriptions |
| border | border | border | Dividers |
| border-strong | border-strong | border-strong | Control outlines |
| action | action | action | Interactive accent |
| action-hover | action-hover | action-hover | Primary hover |
| on-action | page | page | Filled-action text |
| selected-bg | selected | selected | Current navigation background |
| positive / positive-bg | positive / positive-bg | positive / positive-bg | Positive semantic status |
| warning / warning-bg | warning / warning-bg | warning / warning-bg | Caution |
| danger / danger-bg | danger / danger-bg | danger / danger-bg | Danger |
| overlay | overlay | overlay | Dialog backdrop |

Starlight's accent, text, surface, hairline, and status variables are adapters to these roles. Its blue and purple callout families both use the cyan roles; orange maps to warning, red to danger, and green to positive. Status colors convey meaning, not extra brand accents.

**The Semantic Color Rule.** Consume `--aura-*` roles in shared CSS; never hard-code a theme's color into an article.

Dark is seeded only when `starlight-theme` has no saved value. Existing dark, light, and auto choices remain intact. When storage is unavailable, Starlight can use the system preference; do not claim dark is unconditional.

## Typography

Fonts are self-hosted through Fontsource: Inter (400, 500, 600, 700), Space Grotesk (500, 600, 700), and JetBrains Mono (400). Use the exact family roles in frontmatter; no remote font service.

- **Display:** splash title only, with an 18ch maximum width.
- **Headline:** article title; Starlight renders it from frontmatter.
- **Title:** article h2. H3 is 1.25rem and h4 is 1.125rem; all h1–h4 use display type at weight 600.
- **Body:** article prose, capped at 70ch on non-splash pages.
- **Label:** compact actions and sidebar group labels. Sidebar links use 0.875rem/1.5; table-of-contents links use 0.8125rem/1.6.
- **Code:** inline and block code; retain wrapping for inline code and horizontal scrolling for blocks.

Start article headings at h2. Keep bold emphasis at weight 600; do not turn body text into display type. Splash supporting text uses 1.125rem/1.7 with a 46ch measure.

## Layout

Keep Starlight's responsive grid and navigation model. Shared dimensions are a 4.5rem header, 18rem sidebar, and 47rem content container, with a 70ch article measure. At widths below 50rem, the header becomes 4rem and the mark shrinks from 2rem to 1.75rem. Starlight continues to own sidebar and contents-rail visibility.

Use the seven spacing steps in frontmatter. Article subheadings have 3rem space before and 0.75rem after; adjacent list items have 0.5rem separation. Table cells use 0.75rem by 1rem padding.

The splash keeps a single-column, left-aligned hero and the existing topic index. Its hero has 3rem vertical padding, increasing to 4rem at 50rem; the desktop splash container caps at 68rem. Topic links use 1.5rem by 1rem padding, with horizontal padding removed below 50rem. The card grid has a 2rem column gap and no row gap. The mobile splash exposes a separate appearance selector because it has no sidebar.

## Elevation & Depth

Flat surfaces and fine borders carry the document hierarchy. Topic links, pagination, and search triggers have no shadow. The search dialog uses `--aura-shadow-panel`: dark `0 16px 48px rgb(0 0 0 / 28%)`, light `0 16px 48px rgb(14 12 27 / 14%)`. Selected sidebar links use an inset one-pixel border. Do not import parent-site glass, glow, scanlines, or floating-card effects.

## Shapes

Controls, code, callouts, and pagination use the control radius. The search dialog uses the panel radius. Topic links are square-edged, bottom-divided rows rather than rounded panels. The official mark is neither recolored nor reshaped.

## Components

### Actions and topic links

Reuse Starlight `LinkButton`, `LinkCard`, and `CardGrid`; avoid custom replicas. Primary buttons are filled with action color and switch to action-hover. Secondary buttons use heading text and a strong border, then hover surface and action border. Buttons have a 2.75rem minimum height. LinkCard rows have no resting fill or shadow; hover and focus-within use the navigation surface and cyan title. No custom pressed or disabled LinkButton state is defined here.

```mdx
import { Aside, CardGrid, LinkButton, LinkCard } from '@astrojs/starlight/components';

<LinkButton href="/getting-started/what-is-aura/" variant="primary">
  Get Started
</LinkButton>
<LinkButton href="/products-and-releases/overview/" variant="secondary">
  Explore Documentation
</LinkButton>
<CardGrid>
  <LinkCard title="SBOM" href="/sbom/what-is-an-sbom/"
    description="Understand SBOMs, supported formats, uploads, and troubleshooting." />
</CardGrid>
<Aside type="note" title="Related guidance">
  Read the relevant workflow before continuing.
</Aside>
```

Aside supports Starlight's `note`, `tip`, `caution`, and `danger` variants. Retain native titles and icons; do not communicate severity through color alone. The theme provides a one-pixel border and control-radius corners, not a new callout API.

### Search and navigation

Keep native search, keyboard shortcut, dialog focus handling, and Pagefind result behavior. The trigger has a strong outline and a 2.75rem minimum in both dimensions; hover uses the raised surface and action border. Its implemented disabled/loading appearance uses a wait cursor and 0.65 opacity. The dialog has panel corners and the panel shadow. Do not claim bespoke validation, error, or empty-state designs.

Sidebar links use hover surface and heading text; the current page uses selected background, action text, weight 600, and an inset border. Active contents links use action color plus underline. Keep `aria-current` attributes and built-in mobile menu behavior.

### Interaction, motion, and accessibility

The shared keyboard rule is a two-pixel action-colored outline, offset four pixels, for links, buttons, inputs, selects, textareas, summaries, and tabindex elements. Preserve visible focus and article link underlines. Search, menu, and action transitions use `--aura-motion-fast` (160ms) and `--aura-motion-ease` (`cubic-bezier(0.16, 1, 0.3, 1)`), limited to color/background/border changes. No decorative motion is introduced.

Reduced-motion CSS zeros animation and transition duration and restores automatic scrolling. Forced-colors mode adds a Highlight outline to the current sidebar link. These are implemented accommodations, not evidence that every state has passed contrast, assistive-technology, or keyboard testing.

Use semantic roles in any shared extension, for example:

```css
.related-guidance {
  color: var(--aura-text-body);
  background: var(--aura-surface-nav);
  border: 1px solid var(--aura-border);
  border-radius: var(--aura-radius-control);
  padding: var(--aura-space-4);
}
```

This illustrates token consumption; it is not a shipped component.

## Do's and Don'ts

### Do:
- **Do** use semantic Aura roles and test both themes.
- **Do** preserve native Starlight search, navigation, and theme preferences.
- **Do** keep the official Linuscent mark unchanged and fonts self-hosted.
- **Do** preserve product copy, URLs, and heading hierarchy.

### Don't:
- **Don't** use raw brand cyan for light-theme body links.
- **Don't** import marketing glow, glass, decorative motion, or background artwork.
- **Don't** invent product capabilities or compliance certification claims.
- **Don't** claim untested component states or accessibility conformance.
