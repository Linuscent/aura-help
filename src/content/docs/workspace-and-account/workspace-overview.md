---
title: Workspace Overview
description: Understand the workspace as the top-level environment for products, security data, and collaboration in Aura.
sidebar:
  order: 1
---
A workspace is the central environment where teams manage products,
releases, security information, and collaboration in Aura.

## Workspace Contains

A workspace can include:

-   Products
-   Releases
-   Security findings
-   Evidence
-   Team members
-   Configuration settings

## Working in a Workspace

Users work inside a workspace to organize product security activities
and collaborate with other team members.

Access to information depends on user permissions and workspace
configuration.

## The Home overview

When a workspace has products, **Home** summarises each product's latest
uploaded release. Earlier releases are not combined into these totals.

### Open findings by severity

A coloured bar splits the open findings across **Critical**, **High**,
**Medium**, **Low** and **Unassigned**, with the count for each level below it.
Red is used for critical findings and for items that need attention; it is not
used for buttons.

If some products have no results yet, a short note says how many are missing.
Select the **About these numbers** info button for what the counts include.
If results for a product are missing or could not be read, Aura shows them as
unavailable rather than counting them as zero.

### Product drawings

Each product is drawn as a stack of layers made from its components:

- **Layers** group the product's components for display. They do not show which
  component depends on which.
- **Numbered red markers** point to components that appear in the **Fix first**
  list. The number matches the row in that list. A drawing shows up to six
  markers; **+N** means more of that product's items are in the list.
- **The strip under the drawing** has one bar per component, coloured by the
  most severe finding observed for it. Grey means no finding, or that the
  severity is not known.

Hover over or focus a drawing to highlight its rows in **Fix first**. Select the
drawing to open that release.

### Fix first

**Fix first** lists up to eight vulnerabilities across your products' latest
releases. Aura orders them by:

1. severity;
2. whether the vulnerability is known to be exploited;
3. exploit likelihood (EPSS), when available for your workspace;
4. how many products are affected.

The same vulnerability appears once, with the number of affected products, such
as **2 of 3**. Select a row to open the Risks page for that release.

This list is a starting point built from a limited set of results, not a complete
priority ranking. See [Prioritizing Findings](/risks/prioritizing-findings/).

### Products and analysis coverage

The table at the bottom lists each product, its latest release, and whether its
results are available. Select **View release** to open it.

## Related articles

- [Working With Your Team](/workspace-and-account/working-with-your-team)
- [First steps in Aura](/getting-started/first-steps)
- [Prioritizing Findings](/risks/prioritizing-findings/)
- [Vulnerability Severity](/risks/vulnerability-severity/)
