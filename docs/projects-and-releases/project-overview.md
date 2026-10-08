---
title: Project overview
description: Understand what you can view and manage from an Aura project.
---

# Project overview

An Aura project brings together SBOM releases and the security information associated with them.

Open a project from the **Projects** area to review its releases and upload additional SBOMs.

## Project page

From a project, you can:

- view existing releases;
- upload an SBOM;
- review release status;
- open a release to inspect its analysis;
- continue to related inventory and security views.

The exact information available may depend on the project's releases, workspace configuration, and Aura plan.

## Upload an SBOM

Select **Upload SBOM** to manually add a supported CycloneDX SBOM to the project.

Every successful upload creates a new release.

For detailed instructions, see [Upload an SBOM](../sbom/upload-sbom.md).

## Release status

After an SBOM is uploaded, Aura processes the release.

When processing completes successfully, the release status becomes:

**READY**

A ready release can then be reviewed for inventory and security information.

## Release summary

A processed release can show summary information such as:

- Critical vulnerabilities;
- High vulnerabilities;
- Policy violations;
- Components.

Use the release to continue into more detailed views where available.

## Working with multiple releases

A project can contain multiple releases.

Because every successful SBOM upload creates a new release, the project can preserve separate inventory and analysis for different uploads over time.

## Related articles

- [Projects and releases](./overview.md)
- [Create a project](./create-project.md)
- [Releases](./releases.md)
- [Upload an SBOM](../sbom/upload-sbom.md)
