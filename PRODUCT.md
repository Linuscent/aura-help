# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Engineering, security, and compliance teams looking up Aura workflows. The user
confirmed this audience and requested that existing content and functionality be
preserved.

## Product Purpose

Aura Help explains how to use Linuscent Aura: workspaces, products, releases,
SBOMs, inventory, findings, decisions, and compliance evidence. Success means
readers find a relevant guide and understand how to complete their task.

## Capabilities and Constraints

- Static Astro and Starlight site at `https://aura.docs.linuscent.com/`.
- Preserve the existing article content, URLs, search, sidebar, table of
  contents, theme selection, and mobile navigation.
- Keep Product terminology and distinguish findings from risk decisions.
- Never imply legal certification or invent product capabilities.
- Keep contributor and design-system documentation outside published articles.

## Brand Commitments

The Linuscent website source in `../linuscent-website/` is the brand reference.
The user selected its Aura-led identity, with dark as the initial theme and an
accessible matching light theme. Apply the design system to existing pages and
document its reusable tokens and component rules. Do not redesign the parent
website or rewrite product copy.

## Evidence on Hand

- Existing articles: `src/content/docs/`.
- Brand palette and fonts: `../linuscent-website/src/styles/global.css`.
- Aura brand application: `../linuscent-website/src/pages/linuscent-aura/index.astro`.
- Official light/dark Linuscent wordmarks: `public/brand/`.
- Official Linuscent favicon assets: `public/favicon.png` and `public/favicon-32.png`.

## Product Principles

- Reading and wayfinding take priority over marketing effects.
- Preserve familiar documentation interactions.
- Make shared styles reusable rather than adding per-page overrides.
- Treat the source website as brand evidence, not product feature verification.
