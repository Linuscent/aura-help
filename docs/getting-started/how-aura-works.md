---
title: How Aura works
description: Understand the main Aura workflow, from workspaces and projects to SBOM releases, findings, decisions, evidence, and ongoing monitoring.
---

# How Aura works

Aura connects software inventory, security findings, engineering decisions, and compliance evidence in one workflow.

At a high level, the process looks like this:

```text
Workspace
  ↓
Project
  ↓
Upload SBOM
  ↓
Aura creates a release
  ↓
Inventory and analysis
  ↓
Risks, licenses, and policies
  ↓
Assessment and decisions
  ↓
Remediation and evidence
  ↓
Ongoing monitoring
```

The exact capabilities available to you may depend on your Aura plan and workspace configuration.

## 1. Work inside a workspace

A workspace is the top-level area used to organise work in Aura.

A workspace can contain multiple projects and has its own plan and configuration.

## 2. Create a project

A project is the main unit used to organise SBOM releases and related security data.

Create a project before uploading an SBOM.

## 3. Upload an SBOM

Open a project and upload a supported SBOM.

Manual upload is available from the project.

Aura accepts supported CycloneDX SBOM files in JSON or XML format.

## 4. Aura creates a release

Each successful SBOM upload creates a new release for the project.

This also applies when another SBOM is uploaded for the same software version.

The release is processed by Aura before analysis results become available.

## 5. Review inventory and analysis

After processing completes, the release can be used to review information such as:

- components;
- services;
- dependency relationships;
- vulnerabilities;
- license information;
- policy results.

The exact views available may depend on your plan and workspace configuration.

## 6. Review and prioritise findings

Teams can review findings in the context of the affected project and release.

This may involve considering:

- severity;
- exploitability;
- how the component is used;
- product exposure;
- available fixes;
- internal security policies.

A finding does not automatically mean that the product is exploitable or non-compliant.

It indicates that additional review may be required.

## 7. Record decisions

Security decisions should be traceable.

For a vulnerability, a team may need to document whether the issue affects the product, why that conclusion was reached, and what action should be taken.

Where supported, Aura can maintain vulnerability decisions and VEX-related information alongside the release that was assessed.

Aura does not replace accountable engineering or security judgement.

## 8. Track remediation and evidence

When action is required, teams can track the work needed to address a finding.

This may include:

- upgrading a component;
- applying a security fix;
- replacing a dependency;
- accepting a documented risk;
- completing another approved remediation activity.

Aura can also retain evidence that supports security reviews, compliance activities, and audit preparation.

## 9. Monitor active releases

Security information changes after a release is created.

New vulnerabilities may be published, policies may change, and previously accepted findings may need to be reviewed again.

Aura can monitor active releases so teams can identify relevant changes over time.

Notification and monitoring capabilities may depend on your Aura plan.

## Manual and automated SBOM ingestion

Manual SBOM upload is available from a project and is useful when getting started or testing Aura.

The **SBOM Ingestion** area is intended for automated ingestion workflows, including API and CI/CD integrations.

## Aura and compliance

Aura helps teams structure and preserve product-security information that can support compliance activities.

For example, this information may contribute to work related to the EU Cyber Resilience Act (CRA).

Aura does not by itself determine whether a product meets all applicable regulatory requirements.

Your organisation remains responsible for regulatory interpretation, product decisions, and conformity activities.

## Next steps

Continue with:

- [Key concepts](./key-concepts.md)
- [First steps in Aura](./first-steps.md)
- [What is an SBOM?](../sbom/what-is-an-sbom.md)
- [Projects and releases](../projects-and-releases/overview.md)
