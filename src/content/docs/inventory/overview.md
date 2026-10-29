---
title: Inventory Overview
description: Learn how Aura organizes component inventory and dependency information for product releases.
sidebar:
  order: 1
---
Aura inventory provides visibility into the software components that
make up a product release.

The inventory is created from uploaded SBOM data and helps teams
understand what software exists inside their products.

## Inventory Workflow

The typical flow is:

```mermaid
flowchart TD
    A[Product] --> B[Release]
    B --> C[SBOM]
    C --> D[Component Inventory]
    D --> E[Security Analysis]
```

## Inventory Areas

The inventory section includes:

-   Components
-   Dependency Graph

Inventory information helps teams understand software composition,
dependencies, and related security context.

## Related articles

- [Components](/inventory/components)
- [Understanding Findings](/risks/understanding-findings)
