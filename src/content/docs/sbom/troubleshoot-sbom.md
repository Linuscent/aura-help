---
title: Troubleshoot an SBOM
description: Diagnose common SBOM upload and validation problems in Aura.
sidebar:
  order: 4
---
If Aura cannot accept or process an SBOM, check its format and contents first. Aura accepts CycloneDX JSON/XML and SPDX 2.3 JSON; it detects formats by document contents.

## Aura says the SBOM is not valid CycloneDX

You may see an error similar to:

> The SBOM is not valid CycloneDX. Review its format and specification version.

This message can indicate invalid or unsupported content. Aura accepts CycloneDX JSON/XML and SPDX 2.3 JSON; other SPDX versions and serializations are not supported.

Check the following.

### 1. Confirm the file format

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

For manual uploads, use one of these formats:

- CycloneDX JSON;
- CycloneDX XML; or
- SPDX 2.3 JSON.

SPDX uploads are converted by Aura. You do not need to convert them yourself. Conversion may omit dependency relationships, custom license definitions, and some file or snippet details. When relationships matter, generate native CycloneDX with those relationships included; completeness depends on the source SBOM. SPDX 3.x, 2.2, tag-value, RDF/XML, and compressed files are unsupported.

### 3. Check the specification version

CycloneDX has multiple specification versions.

If the SBOM was generated using a version that Aura cannot process, validation may fail.

Check the format's version metadata:

- `specVersion` in CycloneDX JSON;
- the CycloneDX namespace/schema information in XML; or
- `spdxVersion` in SPDX JSON, which must be `SPDX-2.3`.

If the version is unsupported, export a supported format instead of manually relabeling version metadata.

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

After Aura accepts the upload (HTTP 202), it creates a release and submits the SBOM for analysis. Acceptance does not mean analysis is complete. Select **Open release overview** from the acceptance confirmation to view the release, or inspect the product's releases and refresh later for results. Aura does not automatically navigate or submit the upload again.

If the release does not reach the expected state:

1. wait briefly and refresh the product;
2. confirm that the uploaded SBOM is valid and complete;
3. check whether the release shows an error or processing status;
4. try a newly generated SBOM if the source file may be damaged;
5. contact your Aura administrator or support channel if the issue continues.

## SPDX conversion errors

- **Unsupported version or serialization:** Aura accepts SPDX 2.3 JSON only. Export SPDX 2.3 JSON; do not change a version field manually to make a document appear supported.
- **Invalid document or conversion error:** validate the original SPDX document with a compatible tool and regenerate it if needed. Conversion errors are identified as pre-submission refusals; inspect/acknowledge the error, review the corrected file, then deliberately submit again if appropriate.
- **Converted output too large:** converted output has a separate 10 MiB limit, even if the original fits the upload request limit. Reduce or regenerate the source SBOM.
- **Conversion busy, unavailable, or timed out:** these identified conversion errors happen before release creation and analysis submission. Review the file and retry deliberately after acknowledging the error. Do not infer this safe state from HTTP 503 or 504 alone; another failure with those statuses may have an uncertain outcome.

For an uncertain upload outcome, inspect the product's releases before submitting again. Each accepted upload creates a separate release; Aura does not automatically retry.

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

Each accepted SBOM upload creates a new release, including uploads for the same software version. Do not blindly retry an upload after an uncertain network/server failure; inspect the product's releases first because the request may have been accepted.

This behaviour helps preserve the inventory and analysis associated with each upload.

## Before contacting support

When reporting an SBOM problem, collect:

- the product name;
- the release or upload involved;
- SBOM format and specification version, if applicable;
- the tool used to generate the SBOM;
- the exact error message;
- whether the problem happens with a newly generated SBOM.

Do not share sensitive SBOM contents outside your organisation unless your support process allows it.

## Related articles

- [Upload an SBOM](/sbom/upload-sbom)
- [What is an SBOM?](/sbom/what-is-an-sbom)
- [Inventory Overview](/inventory/overview)
