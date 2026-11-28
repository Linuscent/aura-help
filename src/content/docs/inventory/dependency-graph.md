---
title: Dependency Graph
description: Explore dependency relationships between software components in Aura.
sidebar:
  order: 3
---
The **Dependency graph** page provides a visual view of relationships
between software components. Open it from **Advanced → Dependency graph** in
the sidebar, or select **Dependency graph** in the release bar at the top of the
**Components** or **Risks** view.

It helps teams understand dependency paths and how risks may propagate
through the software supply chain.

![The Dependency Graph Explorer showing the empty state when no dependencies are available.](../../../assets/screenshots/inventory/dependency-graph.png)

## Using the dependency graph

The graph can help answer questions such as:

-   Which components depend on each other?
-   How are dependencies connected?
-   Where can security risks propagate?

## Availability

Dependency information depends on the uploaded SBOM data.

If no dependency relationships are available, the **Graph explorer** shows **No
dependencies found for this product yet** with a **Manage product and upload
SBOM** action.

## Related articles

- [Components](/inventory/components/)
- [Inventory Overview](/inventory/overview/)
- [Understanding Findings](/risks/understanding-findings/)
