---
title: SBOM Validation Errors
description: Resolve common SBOM validation errors and data-quality problems.
sidebar:
  order: 3
---
SBOM validation checks whether uploaded SBOM data can be processed
correctly.

## Common Validation Problems

Validation issues may relate to:

-   Invalid structure
-   Missing metadata
-   Incorrect formatting
-   Incomplete component information

Aura accepts CycloneDX JSON/XML and SPDX 2.3 JSON only. For SPDX, unsupported versions or serialization, invalid content, conversion errors, or converted output exceeding Aura's limit can prevent submission. A source file fitting the request limit does not guarantee its converted output will fit.

## Troubleshooting Steps

1.  Review the validation message.
2.  Check the SBOM source.
3.  Correct the SBOM data.
4.  Upload the updated file.

## Important Note

The quality of analysis depends on the completeness and accuracy of the
uploaded SBOM.

## Related articles

- [SBOM Upload Errors](/troubleshooting/sbom-upload-errors)
- [Integration Issues](/troubleshooting/integration-issues)
- [Troubleshooting Overview](/troubleshooting)
- [Troubleshoot an SBOM](/sbom/troubleshoot-sbom)
