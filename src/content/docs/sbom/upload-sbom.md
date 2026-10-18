---
title: Upload an SBOM
description: Upload a CycloneDX JSON or XML SBOM to an Aura product and create a new release.
sidebar:
  order: 3
---
## About uploads

You can manually upload a supported SBOM to an Aura product. Each accepted upload creates a distinct release, even when you upload the same file or declared software version again.

## Before you begin

You need:

- access to an Aura workspace;
- a product selected or created during import;
- a valid CycloneDX SBOM in JSON or XML format.

If you do not have a product yet, select **Import SBOM** in Products, choose **New product**, and enter its name. After choosing your file, select **Create product & import** to create the product before uploading its SBOM. See [Create a product](/products-and-releases/create-product/) for this alternative, or [First steps in Aura](/getting-started/first-steps/) for the product-first Home flow.

Export a CycloneDX JSON or XML SBOM from your build or security tooling, or request one from your product supplier. The upload request limit is **10 MiB including the request envelope**, not a guarantee that a 10 MiB file fits. Aura uploads the original document text without converting or reserializing it.

## Upload an SBOM

1. Sign in to Aura.
2. Open the appropriate workspace.
3. Select **Products** from the navigation.
4. Open the product that the SBOM belongs to.
5. Select **Upload SBOM**, or select **Import SBOM** in Products and choose the existing product.
6. Choose or drag a CycloneDX JSON or XML file into the upload dialog.
7. Review the file preview, then select **Import SBOM**.

In the current empty-workspace Home flow, create the product first, then select **Upload an SBOM**. If you are not ready, **Open product without SBOM** opens that exact saved product and keeps it for later.

## Understand the guided file preview

The guided upload previews the local file before submission. It counts only top-level component entries and lists up to five names and versions. The metadata product and nested components are excluded. This is not a unique-package count, server inventory, full schema validation, or security analysis.

Missing names, versions, or component lists remain unavailable rather than being invented. An explicitly empty component list can show zero; an unavailable list is not zero. After acceptance, the guided product illustration uses only those preview entries, up to five, not all components or dependency relationships.

## What happens after upload?

**Upload accepted** (an HTTP **202 Accepted** receipt) means Aura accepted the upload and recorded a new release. It does not establish completed analysis or security clearance.

Select **Open release overview** to open the exact saved release. Acceptance does not automatically close the dialog or navigate. Closing the dialog does not undo the accepted release; in the current guided session, the receipt and file summary remain visible afterward.

Review the available release results and use **Refresh results** to read them again. Refreshing results is not another upload. Missing metrics remain unavailable, not healthy zeroes or proof of completion.

Depending on your workspace and plan, these can include:

- components;
- dependency relationships;
- vulnerability findings;
- license information;
- policy results;
- security posture information.

## Every upload creates a release

Every accepted SBOM upload creates a new release.

This also applies when you upload the same file again or another SBOM for the same software version.

This allows Aura to preserve release-specific inventory and security information over time.

## Manual upload or automated ingestion?

Manual upload is useful when:

- you are getting started with Aura;
- you are testing an SBOM;
- you need to add an individual SBOM manually.

For recurring engineering workflows, use the **SBOM Ingestion** area for automated ingestion through supported API or CI/CD workflows.

See:

- [SBOM ingestion](/integrations/sbom-ingestion/)
- [API ingestion](/integrations/api-ingestion/)
- [GitHub Actions](/integrations/github-actions/)

## If the upload fails

If the outcome is unknown or the acceptance receipt is missing, inspect the product and its release list before retrying. Check other pages and clear restrictive searches: an empty or stale list does not prove that no release was created. A product created during import is retained even if the upload fails or the dialog closes.

If Aura rejects the file or cannot process it, check:

- that the SBOM is CycloneDX;
- that it is valid JSON or XML;
- that the document is complete;
- that its CycloneDX specification version is supported;
- that the file was generated correctly.

See [Troubleshoot an SBOM](/sbom/troubleshoot-sbom/).

## Related articles

- [Supported SBOM formats](/sbom/supported-formats/)
- [Troubleshoot an SBOM](/sbom/troubleshoot-sbom/)
- [What is an SBOM?](/sbom/what-is-an-sbom/)
- [Inventory Overview](/inventory/overview/)
