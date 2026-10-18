---
title: Missing or Unexpected Findings
description: Troubleshoot findings that are missing, unexpected, or still being processed.
sidebar:
  order: 5
---
## Understand what you are seeing

Findings depend on the data available from uploaded SBOMs, configured
analysis capabilities, and product context.

**Upload accepted** confirms that the upload was accepted, not that analysis is complete or the release is secure. A local guided SBOM preview is not a finding result. For CycloneDX, it counts only direct, top-level component entries, excluding the metadata product and nested components. For SPDX, it counts source package entries, not converted or ingested components. It shows up to five names and versions from those entries; neither count is the final unique inventory count.

The onboarding illustration uses those preview entries only after acceptance. Its shapes are not dependency relationships, a security graph, a live vulnerability scan, or evidence of completed analysis. Missing preview or result values remain unavailable; they must not be interpreted as zero findings.

## Possible Causes

Missing or unexpected findings may occur because:

-   The component is not included in the SBOM.
-   The uploaded data has changed.
-   Analysis is still processing.
-   Available metadata is incomplete.

## Troubleshooting Steps

1.  Verify the uploaded release data.
2.  Confirm the affected component exists.
3.  Use **Open release overview** from the acceptance receipt to open the exact saved release, or check your selected product and release.
4.  Use **Refresh results** to read current results. This does not upload the SBOM again or establish that analysis has finished.
5.  Review relevant releases and their source data. Missing or partial results are not a security clearance.

If an upload outcome is unclear, inspect the release list, including other pages and any active search, before retrying. Every accepted upload creates a distinct release, even for the same file or version; closing the dialog does not undo it.

## Important Note

Finding results should be interpreted using product context and
available assessment information.

## Related articles

- [Integration Issues](/troubleshooting/integration-issues/)
- [Troubleshooting Overview](/troubleshooting/)
- [Troubleshoot an SBOM](/sbom/troubleshoot-sbom/)
