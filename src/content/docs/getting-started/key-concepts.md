---
title: Key concepts
description: Learn the main terms and concepts used throughout Aura.
sidebar:
  order: 3
---
Before working with Aura, it is useful to understand a few terms that appear throughout the product and documentation.

You do not need to learn all of them before getting started. Use this page as a reference whenever you encounter an unfamiliar term.

## Workspace

A **workspace** is the top-level area used to organise work in Aura.

A workspace contains products, releases, SBOMs, and related security and compliance information.

Each workspace also has its own plan and configuration.

## Product

A **product** is the main unit used to organise software security data inside an Aura workspace.

A product contains its SBOM releases and related security information.

Products can be used to review areas such as:

- components;
- vulnerabilities;
- exploit information;
- policy violations;
- release history.

Each successful SBOM upload to a product creates a new release.

## Release

A **release** represents a specific SBOM upload associated with a product.

Aura creates a new release each time an SBOM is successfully uploaded, including when another SBOM is uploaded for the same software version.

A release can be used to review the software inventory and security information captured from that upload.

## SBOM

An **SBOM**, or Software Bill of Materials, is a machine-readable inventory of software components associated with a product release.

An SBOM can contain information such as:

- component names;
- versions;
- package identifiers;
- dependency information;
- license information.

Aura supports CycloneDX SBOM workflows.

For more information, see [What is an SBOM?](/sbom/what-is-an-sbom).

## Component

A **component** is a software package, library, framework, module, or other software item included in a product inventory.

For example, an application may depend on open-source libraries that appear as components in its SBOM.

Component identity and version information allow Aura to relate inventory to vulnerability and policy information.

## Finding

A **finding** is information identified during analysis that may require attention or review.

Examples can include:

- a known vulnerability;
- a license-related issue;
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

A **vulnerability decision** is a documented conclusion about how a vulnerability applies to a specific product release.

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

An **active release** is a product release included in ongoing monitoring.

Monitoring active releases helps teams identify when new vulnerability or policy information becomes relevant after the original release assessment.

## SBOM Ingestion

**SBOM Ingestion** is the area used for automated SBOM ingestion workflows.

This can include API-based and CI/CD-based ingestion.

Manual SBOM uploads are performed from a product.

## CRA

The **Cyber Resilience Act (CRA)** is an EU regulation that establishes cybersecurity requirements for products with digital elements.

Aura can help teams maintain software inventory, vulnerability-handling records, and traceable evidence that may support CRA-related activities.

Aura does not by itself determine whether a product is compliant with the CRA.

## Related articles

- [How Aura works](/getting-started/how-aura-works)
- [First steps in Aura](/getting-started/first-steps)
- [What is Aura?](/getting-started/what-is-aura)
- [Products and releases](/products-and-releases/overview)
