---
title: Upload an SBOM
description: Upload a CycloneDX JSON or XML SBOM to an Aura product and create a new release.
sidebar:
  order: 3
---
You can manually upload a supported SBOM from an Aura product.

Each successful SBOM upload creates a new release for the product.

## Before you begin

You need:

- access to an Aura workspace;
- an existing product;
- a valid CycloneDX SBOM in JSON or XML format.

If you do not have a product yet, see [First steps in Aura](/aura-help/getting-started/first-steps).

## Upload an SBOM

1. Sign in to Aura.
2. Open the appropriate workspace.
3. Select **Products** from the navigation.
4. Open the product that the SBOM belongs to.
5. Select **Upload SBOM**.
6. Choose or drag a CycloneDX JSON or XML file into the upload dialog.
7. Select **Upload SBOM**.

Aura begins processing the file.

## What happens after upload?

After a successful upload:

1. Aura creates a new release for the product.
2. The SBOM is processed.
3. Release-level inventory and analysis are prepared.
4. When processing is complete, the release status changes to **READY**.

You can then review the release and related views.

Depending on your workspace and plan, these can include:

- components;
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

- [SBOM ingestion](/aura-help/integrations/sbom-ingestion)
- [API ingestion](/aura-help/integrations/api-ingestion)
- [GitHub Actions](/aura-help/integrations/github-actions)

## If the upload fails

If Aura rejects the file or cannot process it, check:

- that the SBOM is CycloneDX;
- that it is valid JSON or XML;
- that the document is complete;
- that its CycloneDX specification version is supported;
- that the file was generated correctly.

See [Troubleshoot an SBOM](/aura-help/sbom/troubleshoot-sbom).

## Related articles

- [Supported SBOM formats](/aura-help/sbom/supported-formats)
- [Troubleshoot an SBOM](/aura-help/sbom/troubleshoot-sbom)
- [What is an SBOM?](/aura-help/sbom/what-is-an-sbom)
- [Inventory Overview](/aura-help/inventory/overview)
