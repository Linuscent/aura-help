---
title: Troubleshooting Overview
description: Find common troubleshooting paths for SBOM, integration, findings, and validation issues.
sidebar:
  order: 1
---
## Find the right guidance

The troubleshooting section helps users identify and resolve common
issues when working with Aura.

Common areas include:

-   SBOM uploads
-   Integration problems
-   Unexpected findings
-   Validation issues

## Troubleshooting Approach

When investigating an issue:

1.  Check the affected workflow.
2.  Review available error messages.
3.  Confirm input data and configuration.
4.  Verify workspace permissions and settings.

## Get Help from the dashboard

In deployments with current dashboard Help, select **Help** in the left-navigation footer. A right-side modal opens guidance for your current page without replacing the page or losing your work. If no dedicated article is available, it explains the fallback to the general guide.

Read article links and use **Back** within the panel. **Open in new tab** opens the currently displayed article, including a fallback article; browser settings determine whether it opens in a tab or window. Close the panel or press **Escape** to return to your unchanged work. On mobile, the navigation closes before Help opens.

If published documentation is unavailable, select **Retry**. A Help loading failure does not change the original page. Help is available in the normal workspace dashboard, not onboarding before you have a workspace.

## Product or upload outcome is unclear

Inspect **Products** and the relevant product's releases before submitting again. Check additional list pages and searches; a stale or empty result is not proof that nothing was created. Closing an import dialog does not delete its saved product or accepted release. Each accepted upload creates another release, even for identical content.

**Upload accepted** is not completed analysis or security clearance. **Open release overview** opens the exact saved release, and **Refresh results** reads current results without uploading again. See [Missing or unexpected findings](/troubleshooting/missing-or-unexpected-findings/).

## The onboarding illustration is static or sparse

Before creation, Home shows static Linuscent images of a router, camera, server, vehicle, and industrial arm. These are illustrative possibilities, not your product or inventory, and do not use WebGL. After creation, a 3D illustration represents the saved product; after an accepted upload, it adds shapes for at most five real entries from that file's preview. It is not a live scan and does not show all components, dependency edges, or analysis progress.

A static fallback after product creation is expected with reduced-motion preferences or a WebGL failure. The written product and preview values remain available, and the creation and upload workflow is unchanged.

## Related articles

- [SBOM Upload Errors](/troubleshooting/sbom-upload-errors/)
- [Troubleshoot an SBOM](/sbom/troubleshoot-sbom/)
