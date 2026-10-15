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

Select **Upload SBOM** to manually add a supported CycloneDX SBOM to the product.

Every successful upload creates a new release.

For detailed instructions, see [Upload an SBOM](/aura-help/sbom/upload-sbom).

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

A product can contain multiple releases.

Because every successful SBOM upload creates a new release, the product can preserve separate inventory and analysis for different uploads over time.

## Related articles

- [Create a product](/aura-help/products-and-releases/create-product)
- [Releases](/aura-help/products-and-releases/releases)
- [Products and releases](/aura-help/products-and-releases/overview)
- [Upload an SBOM](/aura-help/sbom/upload-sbom)
