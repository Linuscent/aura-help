---
title: Supported SBOM formats
description: Learn which SBOM formats can be uploaded to Aura and what to check before importing a file.
sidebar:
  order: 2
---
Aura accepts these SBOM formats:

- **CycloneDX JSON**
- **CycloneDX XML**
- **SPDX 2.3 JSON** (`.json` or `.spdx.json`)

## Before you upload

Aura detects the SBOM format from its contents, not just its filename. Before uploading, check that:

- the file's contents match one of the supported formats;
- the document is well-formed for its format;
- its format and specification version are supported by Aura;
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

## SPDX 2.3 JSON

For an SPDX 2.3 JSON upload, Aura converts the document for analysis; you do not need to convert it yourself. Conversion is lossy: dependency relationships are not reconstructed, and custom license definitions and some file or snippet details may be absent. The ingested inventory can therefore differ from the source. Use native CycloneDX when you need full dependency relationships.

The source package count shown in preview is not a guaranteed count of ingested components. If Aura cannot identify one unambiguous root package, its name and version remain unknown rather than being guessed from the first package.

## Unsupported formats

SPDX 3.x, SPDX 2.2, SPDX tag-value, SPDX RDF/XML, and compressed files are not supported.

## Specification versions

CycloneDX has multiple specification versions. For SPDX JSON, check that `spdxVersion` is `SPDX-2.3`; do not relabel another SPDX version to make it appear supported.

If Aura reports that an SBOM is invalid or asks you to review its specification version, verify the `specVersion` or CycloneDX XML namespace in the source file.

This documentation does not list a specific supported CycloneDX version range because support may change as Aura evolves.

## How to confirm your file

If you are unsure whether an SBOM is valid:

1. Confirm that the generating tool produced CycloneDX JSON/XML or SPDX 2.3 JSON.
2. Check the SBOM metadata and version: for SPDX JSON, `spdxVersion` must be `SPDX-2.3`.
3. Validate the file with a tool that supports its format.
4. Upload the validated file to the appropriate Aura product. When dependency relationships matter, generate native CycloneDX with those relationships included; inventory completeness depends on the source SBOM.

## Related articles

- [What is an SBOM?](/sbom/what-is-an-sbom)
- [Upload an SBOM](/sbom/upload-sbom)
- [Inventory Overview](/inventory/overview)
