---
title: Releases
description: Learn how releases are created and used in Aura.
sidebar:
  order: 4
---
A release represents the result of a successful SBOM upload to an Aura product.

Aura creates releases automatically.

You do not need to create a release before uploading an SBOM.

## How a release is created

The workflow is:

```text
Open product
  ↓
Upload SBOM
  ↓
Aura processes the SBOM
  ↓
Aura creates a release
  ↓
Release becomes READY
```

Each successful SBOM upload creates a new release.

This also applies when another SBOM is uploaded for the same software version.

## What a release contains

A release connects the uploaded SBOM to the inventory and security information Aura derives from it.

Depending on the data available and your Aura configuration, a release can be used to review:

- components;
- dependency relationships;
- vulnerability findings;
- license information;
- policy results;
- security posture information.

## Release processing

After upload, Aura processes the SBOM before the release is ready for review.

When processing completes successfully, the release status changes to:

**READY**

If a release does not reach the expected state, see [Troubleshoot an SBOM](/sbom/troubleshoot-sbom/).

## Multiple releases for the same version

Aura creates a new release for every successful SBOM upload, even when the software version is the same.

This allows the product to preserve the inventory and analysis associated with each upload separately.

## Why releases matter

Release-level records help teams answer questions such as:

- What components were present in this upload?
- What security findings were associated with it?
- Did the inventory change between uploads?
- Which release contained a particular component or issue?
- What evidence was available at that point in time?

## Related articles

- [Product overview](/products-and-releases/product-overview/)
- [Active release monitoring](/products-and-releases/active-release-monitoring/)
- [Products and releases](/compliance/overview/)
- [Upload an SBOM](/sbom/upload-sbom/)
