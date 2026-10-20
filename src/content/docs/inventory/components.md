---
title: Components
description: Review software components identified from product release SBOM data.
sidebar:
  order: 2
---
The Components view displays the software components identified from a
product release SBOM.

Each component represents a software dependency or package included in
the analyzed release.

## Component Inventory

The component list provides information such as:

-   Component name
-   Version
-   Package identifier
-   Component type

## Component Details

Selecting a component provides additional information, including:

### Package Information

-   Name
-   Version
-   PURL
-   Type

### Provenance

Information about the origin and identification of the component.

### Security Information

Expand a component to load **Associated vulnerabilities** for that exact
inventory entry. Each result shows the advisory identifier, severity and
assessment state. Suppressed findings are included and labelled **Suppressed**;
they are not shown in the default active Risks list.

Choose **Inspect finding** to open that component's finding in Risks. This also
works without a Package URL when Aura has an exact finding reference. Identical
component names or versions do not necessarily identify the same inventory entry.

Associated findings load when you expand the component, not for every collapsed
row. Wait for loading to finish. If results are unavailable or incomplete, choose
**Retry findings**; do not interpret that state as no vulnerabilities. Aura only
reports an empty association list after checking the complete findings inventory.
If exact component identity is unavailable, associations cannot be safely retrieved.

## Understanding Components

Component data reflects the uploaded SBOM contents. Results depend on
the information available in the source SBOM.

## Related articles

- [Inventory Overview](/inventory/overview)
- [Dependency Graph](/inventory/dependency-graph)
- [Understanding Findings](/risks/understanding-findings)
