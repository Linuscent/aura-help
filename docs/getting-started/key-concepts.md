---
title: Key concepts
description: Learn the main terms and concepts used throughout Aura.
---

# Key concepts

Before working with Aura, it is useful to understand a few terms that appear throughout the product and documentation.

You do not need to learn all of them before getting started. Use this page as a reference whenever you encounter an unfamiliar term.

## Workspace

A **workspace** is an area in Aura where product-security and compliance work is organised.

A workspace can contain products, releases, inventory, findings, evidence, and team activity.

The capabilities available inside a workspace may depend on your Aura plan and configuration.

## Product

A **product** represents the product or product line being managed in Aura.

Security information is organised around the product so teams can understand its software inventory, releases, findings, and evidence over time.

## Release

A **release** is a specific version of a product.

Each release can have its own:

- software inventory;
- SBOM;
- vulnerability findings;
- security decisions;
- remediation information;
- supporting evidence.

Associating information with a release helps preserve the security state and decisions that applied to that version of the product.

## SBOM

An **SBOM**, or Software Bill of Materials, is a machine-readable inventory of software components associated with a product or release.

An SBOM can contain information such as:

- component names;
- versions;
- package identifiers;
- dependency information;
- licence information.

Aura supports CycloneDX SBOM workflows.

For more information, see [What is an SBOM?](../sbom/what-is-an-sbom.md).

## Component

A **component** is a software package, library, framework, module, or other software item included in a product inventory.

For example, an application may depend on open-source libraries that appear as components in its SBOM.

Component identity and version information allow Aura to relate inventory to vulnerability and policy information.

## Finding

A **finding** is information identified during analysis that may require attention or review.

Examples can include:

- a known vulnerability;
- a licence-related issue;
- a policy result.

A finding is a signal for review. It does not necessarily mean that the product is exploitable or that a compliance requirement has been violated.

## Vulnerability

A **vulnerability** is a known security weakness that may affect a software component.

Aura can relate known vulnerability information to components in a product release.

Whether a vulnerability actually affects the product may require additional assessment.

## Severity

**Severity** describes the potential seriousness of a vulnerability.

Severity can help teams understand technical impact, but it should not always be used as the only factor when deciding what to address first.

Product context and exploitability may also affect prioritisation.

## Vulnerability decision

A **vulnerability decision** is a documented conclusion about how a vulnerability applies to a specific product or release.

A decision may record information such as:

- whether the product is affected;
- the reason for the assessment;
- whether remediation is required;
- the status of remediation;
- supporting evidence.

Keeping decisions with the release creates a traceable record of the security assessment.

## VEX

**VEX**, or Vulnerability Exploitability eXchange, is a machine-readable way to communicate the status of vulnerabilities in a product.

For example, VEX information can communicate that a known vulnerability:

- affects the product;
- does not affect the product;
- has been fixed;
- is still being investigated.

A VEX status should be based on a product-specific assessment rather than automatically inferred from the existence of a vulnerability.

## VDR

A **VDR**, or Vulnerability Disclosure Report, is a report that communicates vulnerability information and related product-security decisions to an intended audience.

Aura can use release-related vulnerability information and decisions to support VEX and VDR workflows where those capabilities are available.

## Evidence

**Evidence** is information retained to support a security, compliance, review, or audit activity.

Examples may include:

- an SBOM;
- a vulnerability assessment;
- a documented decision;
- remediation information;
- approval records;
- exported reports.

Evidence is most useful when it remains connected to the product, release, finding, and decision it supports.

## Remediation

**Remediation** is the action taken to address an identified security issue.

Examples include:

- upgrading a vulnerable dependency;
- applying a patch;
- replacing a component;
- making another approved product change.

Not every finding requires the same remediation.

## Active release

An **active release** is a product release that is currently included in ongoing monitoring.

Monitoring active releases helps teams identify when new vulnerability or policy information becomes relevant after the original release assessment.

## CRA

The **Cyber Resilience Act (CRA)** is an EU regulation that establishes cybersecurity requirements for products with digital elements.

Aura can help teams maintain software inventory, vulnerability-handling records, and traceable evidence that may support CRA-related activities.

Aura does not by itself determine whether a product is compliant with the CRA.

## Related articles

- [What is Aura?](./what-is-aura.md)
- [How Aura works](./how-aura-works.md)
- [First steps in Aura](./first-steps.md)
- [What is an SBOM?](../sbom/what-is-an-sbom.md)
