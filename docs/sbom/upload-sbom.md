---
title: Upload an SBOM
description: Upload a CycloneDX JSON or XML SBOM to an Aura project and create a new release.
---

# Upload an SBOM

You can manually upload a supported SBOM from an Aura project.

Each successful SBOM upload creates a new release for the project.

## Before you begin

You need:

- access to an Aura workspace;
- an existing project;
- a valid CycloneDX SBOM in JSON or XML format.

If you do not have a project yet, see [First steps in Aura](../getting-started/first-steps.md).

## Upload an SBOM

1. Sign in to Aura.
2. Open the appropriate workspace.
3. Select **Projects** from the navigation.
4. Open the project that the SBOM belongs to.
5. Select **Upload SBOM**.
6. Choose or drag a CycloneDX JSON or XML file into the upload dialog.
7. Select **Upload SBOM**.

Aura begins processing the file.

## What happens after upload?

After a successful upload:

1. Aura creates a new release for the project.
2. The SBOM is processed.
3. Release-level inventory and analysis are prepared.
4. When processing is complete, the release status changes to **READY**.

You can then review the release and related views.

Depending on your workspace and plan, these can include:

- components;
- services;
- dependency relationships;
- vulnerability findings;
- license information;
- policy results;
- security posture information.

## Every upload creates a release

Every successful SBOM upload creates a new release.

This also applies when you upload another SBOM for the same software version.

This allows Aura to preserve release-specific inventory and security information over time.

## Manual upload or automated ingestion?

Manual upload is useful when:

- you are getting started with Aura;
- you are testing an SBOM;
- you need to add an individual SBOM manually.

For recurring engineering workflows, use the **SBOM Ingestion** area for automated ingestion through supported API or CI/CD workflows.

See:

- [SBOM ingestion](../integrations/sbom-ingestion.md)
- [API ingestion](../integrations/api-ingestion.md)
- [GitHub Actions](../integrations/github-actions.md)

## If the upload fails

If Aura rejects the file or cannot process it, check:

- that the SBOM is CycloneDX;
- that it is valid JSON or XML;
- that the document is complete;
- that its CycloneDX specification version is supported;
- that the file was generated correctly.

See [Troubleshoot an SBOM](./troubleshoot-sbom.md).

## Related articles

- [What is an SBOM?](./what-is-an-sbom.md)
- [Supported SBOM formats](./supported-formats.md)
- [Troubleshoot an SBOM](./troubleshoot-sbom.md)
- [First steps in Aura](../getting-started/first-steps.md)
