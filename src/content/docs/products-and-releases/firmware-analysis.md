---
title: Analyze release firmware
description: Upload release firmware, request a static advisory, and review its saved comparison, coverage, and supporting evidence.
sidebar:
  order: 7
---

## Before you begin

Firmware analysis compares observations from a release's firmware binary with
that release's saved SBOM and vulnerability results. Aura does not run the
firmware or files recovered from it. The **Static advisory** is not a new
vulnerability scan, release approval, compliance decision, or confirmation of
exploitability.

Uploading, replacing, requesting analysis, and retrying require permission to
manage the release and depend on your Aura operator's configuration. If you can
read the release's vulnerability results, you can read its saved firmware
advisory and supporting evidence.

A release can have one current firmware binary. Aura stores it privately and
does not offer a raw firmware download.

## Upload a firmware binary

1. Open the product, then go to **Overview** for the release you want to review.
2. In the release's **Firmware** panel, select **Upload firmware**.
3. Choose a non-empty firmware binary within the maximum size displayed in the
   dialog. The default is **100 MB (100,000,000 bytes)**, using decimal MB, but
   your operator may configure a different limit.
4. Select **Upload firmware** and wait for confirmation.

Uploading does not start analysis. A completed upload shows the filename, size,
upload time, and SHA-256 digest.

While **Upload pending** is shown, you can't upload another file or request
analysis. Closing the page does not undo a confirmed upload.

## Request analysis

1. Wait until the release's vulnerability results are complete and readable.
   Accepted SBOM or firmware uploads alone do not establish readiness. A
   completed vulnerability report with zero findings is valid.
2. Select **Analyze firmware**.
3. Review the selected binary, release comparison, and data-processing notice,
   then confirm with **Analyze firmware**.

Derived text is processed by a model on Cloudflare; the binary and extracted
files are not sent to the model. The model prioritizes existing observations and
supporting evidence. It does not create vulnerability findings or assign severity.

## Follow progress

In **Analysis progress**, **Queued** means the request is waiting to start;
**Running** means it is underway. When step details are available, look for
these steps:

1. **Prepare firmware**
2. **Inspect firmware**
3. **Compare with release results**
4. **Prepare advisory**

You can leave the page while analysis is queued or running. An open, visible
release page updates as progress is recorded. If the live connection is lost,
the panel retains the last-known status while reconnecting and falls back to
refreshing. Select **Refresh firmware status** to check the saved status yourself.

Steps are not time estimates, coverage measurements, or security checks that a
release has passed. Finished attempts retain recorded progress; older attempts
may not have step details.

## Review the static advisory

Start with coverage and limitations before interpreting observations:

| Coverage | Meaning |
| --- | --- |
| **Examined** | Supported content was examined; this is not a security conclusion. |
| **Partial** | Some content could not be examined. Review coverage notes and limitations. |
| **None** | No usable firmware observations were recovered. No security conclusion can be drawn. |

**Compared with** identifies the saved release SBOM and vulnerability snapshot
used by the analysis. Check its capture time: this is a saved comparison, not a
fresh vulnerability scan or a continuously updated report.

Review **Prioritized observations**, the available groups such as **Needs
review**, **Matched release components**, **Hardening and inventory**, and
**Coverage notes**, and the **Inventory comparison**:

- Aura calculates the inventory totals and the severity counts for saved
  findings. The model does not generate those counts.
- Saved active release findings apply only to an exact package and version
  match. A name-only match or version mismatch does not inherit those findings.
- An observed but undeclared component has not been checked for known
  vulnerabilities by this workflow. That does not mean it is free of
  vulnerabilities.
- A declared component that was not reliably observed is not proven absent.
- Inventory discrepancies and coverage gaps are not vulnerability severities.
  Zero saved findings, no advisory items, or no observations are not security
  clearance.

Expand **Evidence** under an observation to read its numbered references, such
as **E1**. Select **View E1 in all evidence** to open the corresponding entry, or
expand **All evidence** to review the complete saved evidence list. Review
limitations alongside the evidence before making a release decision.

Older advisories remain readable in their saved layout. They may use **Show
evidence** and may lack grouped observations, inventory counts, or numbered
cross-links; Aura does not infer missing details for older reports.

## Retry a failed analysis

If analysis fails, the panel shows a brief reason and the last recorded step
when known. **No reason recorded** means Aura did not save a reason. The last
step alone does not establish the cause, and the failed attempt produces no
advisory.

Aura does not retry automatically. If you can manage the release and its
vulnerability results are complete and readable, select **Retry analysis** when
available. Review the confirmation and confirm **Retry analysis** to start a
new attempt with the saved inputs. Progress resets because the attempt starts
over.

A successful analysis cannot be rerun against the same current firmware.
New vulnerability findings do not automatically trigger another analysis or
refresh the saved advisory.

## Replace the current firmware

Select **Replace firmware**, choose the new binary, review the replacement
notice, and confirm **Replace firmware**.

The current binary and advisory stay current until the replacement upload
succeeds. If the upload fails, they are kept. After successful replacement, the
old binary and advisory are no longer accessible through Aura; only minimal
replacement audit information remains. Uploading the replacement does not start
analysis: request it separately when the release results are ready.

Queued or running analysis blocks replacement and another analysis. A pending
upload blocks another upload and analysis.

## Troubleshoot unavailable actions or uncertain status

- **Upload status unknown:** select **Refresh firmware status** before uploading
  again. Do not assume that a missing confirmation means the upload failed.
- **Status cannot be read:** use **Reload** or **Refresh firmware status**.
  Actions remain unavailable until the status can be read.
- **Analysis is waiting for results:** check that the selected release's
  vulnerability results are complete and readable, not merely that an SBOM was
  accepted.
- **Firmware analysis unavailable:** contact your Aura operator. Upload,
  replacement, and analysis are unavailable, but you can still review any
  recorded advisory you have permission to read.
- **Analysis complete but the advisory is unavailable:** select **Refresh
  firmware status** to check again.
- **Failure persists:** review the displayed reason and contact your operator
  rather than repeatedly requesting retries.

## Related articles

- [Releases](/products-and-releases/releases/)
- [Product overview](/products-and-releases/product-overview/)
- [Missing or Unexpected Findings](/troubleshooting/missing-or-unexpected-findings/)
- [Evidence Review](/evidence/evidence-review/)
