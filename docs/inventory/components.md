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

Available security information may include:

-   Vulnerabilities
-   Policy violations

## Understanding Components

Component data reflects the uploaded SBOM contents. Results depend on
the information available in the source SBOM.

## Related articles

- [Inventory Overview](../compliance/overview.md)
- [Dependency Graph](dependency-graph.md)
- [Understanding Findings](../risks/understanding-findings.md)
