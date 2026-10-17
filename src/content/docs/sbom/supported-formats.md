---
title: Supported SBOM formats
description: Learn which SBOM formats can be uploaded to Aura and what to check before importing a file.
sidebar:
  order: 2
---
Aura supports **CycloneDX** SBOM workflows.

For manual SBOM uploads from a product, Aura accepts CycloneDX files in:

- **JSON**
- **XML**

## Before you upload

Before uploading an SBOM, check that:

- the file is a valid CycloneDX document;
- the document uses JSON or XML;
- the CycloneDX structure is complete and well-formed;
- the specification version is supported by Aura;
- required SBOM fields are present;
- the file has not been corrupted or truncated.

Aura validates the SBOM during ingestion.

If the file cannot be validated, Aura may reject the upload.

## CycloneDX JSON

A CycloneDX JSON SBOM normally identifies itself with fields such as:

```json
{
  "bomFormat": "CycloneDX",
  "specVersion": "1.x",
  "version": 1
}
```

The exact contents of the SBOM depend on the tool that generated it.

Do not manually change the specification version only to make an invalid SBOM pass validation. Regenerate or validate the SBOM using an appropriate CycloneDX-compatible tool when possible.

## CycloneDX XML

Aura also accepts supported CycloneDX SBOMs in XML format.

The XML must be valid and follow the CycloneDX specification used by the generated document.

## Other SBOM formats

Aura's standard SBOM workflow is based on CycloneDX.

Supplier inputs or other formats may require validation, conversion, or additional product-workflow configuration before they can be used.

Do not assume that a file is supported only because it contains software-component information.

## Specification versions

CycloneDX has multiple specification versions.

If Aura reports that an SBOM is invalid or asks you to review its specification version, verify the `specVersion` or CycloneDX XML namespace in the source file.

This documentation does not list a specific supported CycloneDX version range because support may change as Aura evolves.

## How to confirm your file

If you are unsure whether an SBOM is valid:

1. Confirm that the generating tool produced CycloneDX JSON or XML.
2. Check the SBOM metadata and specification version.
3. Validate the file with a CycloneDX-compatible validator or generation tool.
4. Upload the validated file to the appropriate Aura product.

## Related articles

- [What is an SBOM?](/sbom/what-is-an-sbom)
- [Upload an SBOM](/sbom/upload-sbom)
- [Inventory Overview](/inventory/overview)
