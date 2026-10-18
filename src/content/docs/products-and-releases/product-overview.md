---
title: Product overview
description: Understand what you can view and manage from an Aura product.
sidebar:
  order: 3
---
An Aura product brings together SBOM releases and the security information associated with them.

Open a product from the **Products** area to review its releases and upload additional SBOMs.

## Product page

From a product, you can:

- view existing releases;
- upload an SBOM;
- review release status;
- open a release to inspect its analysis;
- continue to related inventory and security views.

The exact information available may depend on the product's releases, workspace configuration, and Aura plan.

## Upload an SBOM

Select **Upload SBOM** to add a supported CycloneDX JSON/XML or SPDX 2.3 JSON SBOM to the product. Review the preview, then select **Import SBOM** to submit. Aura sends the original document text; CycloneDX is passed through unchanged and SPDX is converted server-side. Conversion may omit source details, including dependency relationships. When relationships matter, generate native CycloneDX with those relationships included; completeness depends on the source SBOM.

Every accepted upload creates a new release.

For detailed instructions, see [Upload an SBOM](/sbom/upload-sbom).

## Release status

After an SBOM upload is accepted (HTTP 202), Aura submits the release for analysis. Acceptance does not mean analysis is complete or that the release is cleared. Select **Open release overview** from the acceptance confirmation, or inspect the product's releases and refresh later for results; Aura does not automatically navigate or resubmit.

## Release summary

A processed release can show summary information such as:

- Critical vulnerabilities;
- High vulnerabilities;
- Components.

Use the release to continue into more detailed views where available.

## Working with multiple releases

A product can contain multiple releases.

Because every accepted SBOM upload creates a new release, the product keeps separate release records for different uploads over time.

## Related articles

- [Create a product](/products-and-releases/create-product)
- [Releases](/products-and-releases/releases)
- [Products and releases](/products-and-releases/overview)
- [Upload an SBOM](/sbom/upload-sbom)
