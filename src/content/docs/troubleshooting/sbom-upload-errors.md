---
title: SBOM Upload Errors
description: Troubleshoot common SBOM upload failures in Aura.
sidebar:
  order: 2
---
SBOM upload errors occur when Aura cannot successfully process uploaded
SBOM data.

## Common Causes

Aura accepts CycloneDX JSON/XML and SPDX 2.3 JSON. Possible causes include:

-   Unsupported file format
-   Invalid SBOM structure
-   Missing required information
-   Processing failures

## Troubleshooting Steps

1.  Confirm the SBOM format.
2.  Validate the SBOM file.
3.  Check that required information is included.
4.  If the outcome is uncertain after a network or server error, inspect the product's releases before retrying. The upload may already have been accepted, and each accepted upload creates a separate release.

## Supported Formats

SPDX is converted by Aura for analysis and may lose source details. Prefer CycloneDX when complete dependency relationships are important. Unsupported SPDX forms include 3.x, 2.2, tag-value, RDF/XML, and compressed files.

## Related articles

- [Troubleshooting Overview](/troubleshooting)
- [SBOM Validation Errors](/troubleshooting/sbom-validation-errors)
- [Troubleshoot an SBOM](/sbom/troubleshoot-sbom)
