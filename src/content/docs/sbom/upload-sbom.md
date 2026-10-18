---
title: Upload an SBOM
description: Upload a CycloneDX or SPDX 2.3 JSON SBOM to an Aura product and create a new release.
sidebar:
  order: 3
---
You can manually upload a supported SBOM from an Aura product.

Each accepted SBOM upload creates a new release for the product.

## Before you begin

You need:

- access to an Aura workspace;
- an existing product;
- a valid CycloneDX JSON/XML or SPDX 2.3 JSON SBOM.

If you do not have a product yet, see [First steps in Aura](/getting-started/first-steps).

## Upload an SBOM

1. Sign in to Aura.
2. Open the appropriate workspace.
3. Select **Products** from the navigation.
4. Open the product that the SBOM belongs to.
5. Select **Upload SBOM**.
6. Choose or drag a supported CycloneDX JSON/XML or SPDX 2.3 JSON file into the upload dialog.
7. Review the preview and select **Import SBOM** to submit.

Aura detects the format from the document contents. The browser sends Aura the original document text. CycloneDX is passed through unchanged for analysis; SPDX is converted server-side, so you do not need to run a converter.

SPDX conversion can omit information, including dependency relationships (which are not reconstructed), custom license definitions, and some file or snippet details. When dependency relationships matter, generate native CycloneDX with those relationships included; completeness depends on the source SBOM. A preview's source package count is not the final unique inventory count; if the document does not identify exactly one root package, the suggested name and version remain unknown and Aura does not guess. An unknown version is okay.

Where evidence capture is available, Aura retains the original SPDX document and its digest, not the converted document. This does not mean every upload is retained as downloadable evidence.

The upload request is limited to 10 MiB, including its request envelope, and converted output has a separate 10 MiB limit. A source file under the request limit may still exceed the converted-output limit.

## What happens after upload?

After an upload is accepted:

1. Aura creates a new release for the product.
2. Aura submits the document for release-level analysis.

An accepted upload (HTTP 202) means a new release was accepted, not that analysis is complete or that the release is cleared. Select **Open release overview** from the acceptance confirmation to view it, or inspect the product's releases and refresh later for results. Aura does not automatically navigate or submit the upload again.

You can then review the release and related views.

Depending on your workspace and plan, these can include:

- components;
- dependency relationships;
- vulnerability findings;
- license information;
- policy results;
- security posture information.

## Every upload creates a release

Every accepted SBOM upload creates a new release.

This also applies when you upload another SBOM for the same software version.

This allows Aura to preserve release-specific inventory and security information over time.

## Manual upload or automated ingestion?

Manual upload is useful when:

- you are getting started with Aura;
- you are testing an SBOM;
- you need to add an individual SBOM manually.

For recurring engineering workflows, use the **SBOM Ingestion** area for automated ingestion through supported API or CI/CD workflows.

See:

- [SBOM ingestion](/integrations/sbom-ingestion)
- [API ingestion](/integrations/api-ingestion)
- [GitHub Actions](/integrations/github-actions)

## If the upload fails

If Aura rejects the file or cannot process it, check:

- that the format is supported (CycloneDX JSON/XML or SPDX 2.3 JSON);
- that the document contents match the declared format and are valid;
- that the document is complete;
- that the format version is supported (including `spdxVersion: "SPDX-2.3"` for SPDX JSON);
- that the file was generated correctly.

See [Troubleshoot an SBOM](/sbom/troubleshoot-sbom).

## Related articles

- [Supported SBOM formats](/sbom/supported-formats)
- [Troubleshoot an SBOM](/sbom/troubleshoot-sbom)
- [What is an SBOM?](/sbom/what-is-an-sbom)
- [Inventory Overview](/inventory/overview)
