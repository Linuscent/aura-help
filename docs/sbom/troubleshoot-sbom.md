---
title: Troubleshoot an SBOM
description: Diagnose common SBOM upload and validation problems in Aura.
sidebar:
  order: 4
---
If Aura cannot accept or process an SBOM, start by checking the file format, CycloneDX structure, and specification version.

## Aura says the SBOM is not valid CycloneDX

You may see an error similar to:

> The SBOM is not valid CycloneDX. Review its format and specification version.

This means Aura could not validate the uploaded document as a supported CycloneDX SBOM.

Check the following.

### 1. Confirm the file is CycloneDX

A JSON file containing component information is not automatically a CycloneDX SBOM.

For CycloneDX JSON, the document should include CycloneDX metadata such as:

```json
{
  "bomFormat": "CycloneDX",
  "specVersion": "1.x",
  "version": 1
}
```

For XML, confirm that the document follows a CycloneDX XML schema and namespace.

### 2. Check the file type

For manual uploads, use a supported CycloneDX file in:

- JSON; or
- XML.

If the file uses another SBOM format, it may require conversion or another configured workflow.

### 3. Check the specification version

CycloneDX has multiple specification versions.

If the SBOM was generated using a version that Aura cannot process, validation may fail.

Check:

- `specVersion` in CycloneDX JSON; or
- the CycloneDX namespace/schema information in XML.

If possible, regenerate the SBOM with a CycloneDX-compatible tool instead of manually changing version metadata.

### 4. Check JSON or XML syntax

A file can be conceptually correct but still fail because it is malformed.

For JSON, check for issues such as:

- missing commas;
- invalid quotation marks;
- incomplete objects or arrays;
- truncated content.

For XML, check for:

- invalid or missing closing tags;
- malformed namespaces;
- incomplete content.

### 5. Check that the file is complete

A partially generated, truncated, or corrupted SBOM may fail validation.

Regenerate the SBOM from the original source or build process when possible.

## The upload succeeds but processing does not complete

After a successful upload, Aura creates and processes a release.

When processing completes normally, the release status becomes **READY**.

If the release does not reach the expected state:

1. wait briefly and refresh the product;
2. confirm that the uploaded SBOM is valid and complete;
3. check whether the release shows an error or processing status;
4. try a newly generated SBOM if the source file may be damaged;
5. contact your Aura administrator or support channel if the issue continues.

## The release contains unexpected components

Aura's release inventory is based on information contained in the uploaded SBOM.

If components are missing or unexpected:

1. inspect the source SBOM;
2. confirm how the SBOM-generation tool handles direct and transitive dependencies;
3. verify that the correct build or product artefact was scanned;
4. generate the SBOM again if necessary;
5. upload the corrected SBOM as a new release.

## The same version appears more than once

This can be expected.

Each successful SBOM upload creates a new release, including uploads for the same software version.

This behaviour helps preserve the inventory and analysis associated with each upload.

## Before contacting support

When reporting an SBOM problem, collect:

- the product name;
- the release or upload involved;
- SBOM format (JSON or XML);
- CycloneDX specification version;
- the tool used to generate the SBOM;
- the exact error message;
- whether the problem happens with a newly generated SBOM.

Do not share sensitive SBOM contents outside your organisation unless your support process allows it.

## Related articles

- [Upload an SBOM](/sbom/upload-sbom/)
- [What is an SBOM?](/sbom/what-is-an-sbom/)
- [Inventory Overview](/compliance/overview/)
