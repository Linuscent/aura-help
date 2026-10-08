---
title: How Aura works
description: Understand the main Aura workflow, from product inventory and SBOMs to vulnerability decisions, evidence, and ongoing monitoring.
---

# How Aura works

Aura connects product inventory, security findings, engineering decisions, and compliance evidence in one workflow.

At a high level, the process looks like this:

```text
Product
  ↓
Release
  ↓
SBOM and software inventory
  ↓
Security and policy findings
  ↓
Assessment and decisions
  ↓
Remediation
  ↓
Evidence
  ↓
Ongoing monitoring
```

The exact capabilities available to you may depend on your Aura plan and workspace configuration.

## 1. Start with a product and release

Aura organizes security and compliance information around products and their releases.

A release represents a specific version of a product that has its own software inventory, findings, decisions, and supporting evidence.

Keeping this information associated with a specific release makes it easier to understand what was shipped and what security decisions applied at that point in time.

## 2. Add software inventory

Aura uses software inventory to understand which components are included in a product release.

One way to provide this inventory is by importing a supported Software Bill of Materials (SBOM).

Aura supports CycloneDX SBOM workflows for importing and exporting software-component information.

After an SBOM is processed, its components become part of the release inventory.

## 3. Analyse components

Aura uses the component inventory to identify information that may require review.

Depending on the available capabilities, this may include:

- known vulnerabilities;
- licence information;
- policy results;
- other product-security findings.

A finding does not automatically mean that a product is exploitable or non-compliant.

It indicates that additional review may be required.

## 4. Review and prioritise findings

Teams can review findings in the context of the affected product and release.

This may involve considering:

- severity;
- exploitability;
- how the component is used;
- product exposure;
- available fixes;
- internal security policies.

Prioritisation helps teams focus on findings that require the most attention.

## 5. Record decisions

Security decisions should be traceable.

For a vulnerability, a team may need to document whether the issue affects the product, why that conclusion was reached, and what action should be taken.

Where supported, Aura can maintain vulnerability decisions and VEX-related information alongside the release that was assessed.

Aura does not automatically replace accountable engineering or security judgement.

## 6. Track remediation

When action is required, teams can track the work needed to address the finding.

This may include:

- upgrading a component;
- applying a security fix;
- replacing a dependency;
- accepting a documented risk;
- completing another approved remediation activity.

The goal is to keep the finding, decision, action, and outcome connected.

## 7. Maintain evidence

Aura maintains records that can support security reviews, compliance activities, and audit preparation.

Evidence may connect information such as:

- product and release identity;
- software inventory;
- vulnerability findings;
- assessment decisions;
- remediation information;
- approvals and related records.

This creates a traceable history of what was reviewed and why decisions were made.

## 8. Monitor active releases

Security information changes after a product is released.

New vulnerabilities may be published, policies may change, and previously accepted findings may need to be reviewed again.

Aura can monitor active product releases so teams can identify relevant changes without treating security review as a one-time activity.

Notification and monitoring capabilities may depend on your Aura plan.

## Aura and compliance

Aura helps teams structure and preserve the product-security information that can support compliance activities.

For example, this information may contribute to work related to the EU Cyber Resilience Act (CRA).

Aura does not by itself determine whether a product meets all applicable regulatory requirements.

Your organisation remains responsible for regulatory interpretation, product decisions, and conformity activities.

## Next steps

Continue with:

- [Key concepts](./key-concepts.md)
- [First steps in Aura](./first-steps.md)
- [What is an SBOM?](../sbom/what-is-an-sbom.md)
- [Products and releases](../products-and-releases/products-and-releases.md)
