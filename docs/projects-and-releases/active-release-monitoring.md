---
title: Active release monitoring
description: Understand how Aura uses active releases in workspace monitoring and compliance workflows.
---

# Active release monitoring

Aura uses active release information to support workspace-level monitoring, analysis coverage, and some compliance workflows.

## What Aura shows as an active release

The workspace Overview shows a count of **active releases**.

For workspace aggregate metrics, Aura uses each project's latest successfully uploaded, non-archived release, once per project.

This release is used as the current source for workspace-level metrics such as:

- component occurrences;
- vulnerability occurrences;
- Critical findings;
- High findings;
- policy violations;
- analysis coverage.

## Latest successful non-archived release

Aura's Overview explains that workspace totals use:

> each project's latest successfully uploaded, non-archived release, once per project

This prevents multiple releases from the same project from being counted at the same time in workspace aggregate metrics.

## Active releases in Compliance

The **Compliance** area includes an **Active releases** section.

The interface allows users to select an authorised release for its internal compliance workflow.

Access to this workflow can depend on the current Aura plan.

## Internal workflow only

Aura explicitly identifies the Compliance workflow as an internal workflow.

The records support internal decisions and do not by themselves:

- certify legal compliance;
- determine regulatory applicability;
- replace organisational compliance responsibility.

## Monitoring and workspace coverage

The workspace Overview can show:

- total projects;
- active releases;
- projects with eligible uploads;
- metric coverage;
- projects and analysis coverage.

If Aura cannot use a release as a healthy source for workspace metrics, the Overview may indicate missing, failed, or ineligible sources.

## Release preservation

Active release monitoring does not replace historical release records.

Aura preserves uploads as separate releases so previous release data remains available for history and future comparison workflows.

## Related articles

- [Releases](./releases.md)
- [Project overview](./project-overview.md)
- [Projects and releases](./overview.md)
- [Upload an SBOM](../sbom/upload-sbom.md)
