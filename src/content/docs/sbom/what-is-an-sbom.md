---
title: What is an SBOM?
description: Learn what a Software Bill of Materials is and how Aura uses SBOMs to build release-level software inventory.
sidebar:
  order: 1
---
An **SBOM**, or Software Bill of Materials, is a machine-readable inventory of the software components included in a product or software release.

An SBOM helps teams understand what software they are shipping and provides a structured foundation for vulnerability, license, policy, and compliance work.

## What information can an SBOM contain?

Depending on how it was generated, an SBOM can include information such as:

- component names;
- component versions;
- package identifiers;
- package URLs (PURLs);
- dependency relationships;
- license information;
- hashes;
- supplier information;
- metadata about the application or build.

The completeness of an SBOM depends on the tool and process used to generate it.

## How Aura uses an SBOM

In Aura, an SBOM is uploaded to a **product**.

Each successful SBOM upload creates a new **release** for that product.

Aura processes the SBOM and uses its component information to build release-level inventory and related security views.

Depending on your Aura plan and workspace configuration, this information can support areas such as:

- component inventory;
- dependency relationships;
- vulnerability findings;
- license information;
- policy results;
- evidence and reporting;
- ongoing monitoring.

## SBOMs and releases

An SBOM should represent the software inventory for a particular build or release.

Keeping the SBOM associated with a release helps preserve a record of what software was present at that point in time.

In Aura:

```text
Product
  ↓
Upload SBOM
  ↓
Aura creates a release
  ↓
Inventory and analysis
```

Uploading another SBOM creates another release, including when the SBOM represents the same software version.

## Why SBOMs matter

Without an accurate software inventory, it can be difficult to answer basic product-security questions such as:

- Which third-party components are included in this release?
- Which versions are being used?
- Is a newly disclosed vulnerability relevant to our software?
- Which release contains the affected component?
- What changed between releases?
- What evidence supports a vulnerability or compliance decision?

An SBOM provides a structured source of inventory data that can help answer these questions.

## SBOMs and vulnerability management

The presence of a vulnerable component in an SBOM does not automatically mean that a product is exploitable.

The SBOM identifies the component and version. Aura can then relate that inventory to known vulnerability information.

Teams may still need to assess the finding in the context of the product, document their decision, and determine whether remediation is required.

## SBOMs and the EU Cyber Resilience Act

The EU Cyber Resilience Act (CRA) includes requirements related to identifying and documenting software components and managing vulnerabilities throughout the product lifecycle.

Maintaining an SBOM as the product changes can support this work by providing traceable software inventory for releases.

Aura can help maintain and analyse this inventory, but your organisation remains responsible for determining which regulatory requirements apply to its products.

## Supported formats

Aura supports CycloneDX SBOM workflows.

See [Supported SBOM formats](/aura-help/sbom/supported-formats) for the formats currently accepted by the Aura upload workflow.

## Related articles

- [Supported SBOM formats](/aura-help/sbom/supported-formats)
- [Inventory Overview](/aura-help/inventory/overview)
