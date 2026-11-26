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

## Find Evidence or Regulations in the upcoming navigation

The upcoming dashboard navigation may not yet be available in your deployment.
If you no longer see a standalone **Evidence** sidebar item, open **Products →
choose a product release → release overview → Compliance workspace** and select the
**Evidence** tab. Confirm the selected release and your workspace plan and
permissions. Actual release Compliance workflows have Pro and Team access by
default; Free users will see the existing **Evidence on Pro** explanation with
links to **Risks** and **Reporting**.

**Reporting** stays in primary navigation for confidential CRA case evidence.
It is not replaced by the release Compliance workspace. See
[Evidence Overview](/evidence/overview/).

For the read-only educational Regulations reference, use **Help → Reference →
Regulations** in the Help footer or **Regulations reference** on release Compliance.
A regular click on the Help reference closes Help and navigates even if the
article cannot load. This is expected, unlike article links that stay inside the
panel. Modifier clicks leave Help open; normal in-panel **Back** and **Escape**
behavior is unchanged. See [Regulations](/compliance/regulations/).

## The Assistant misunderstands “here”

Name the **page and tab**, plus the **Product or release** for record-specific
questions. Ordinary chat uses a recognized page and supported tab hint from the
time you send or retry, even if chat stays open as you navigate. The hint does
not identify the selected record or read page contents; Trust Center supplies
only its page name, not its open tab. See
[Ask about the current page or tab](/getting-started/dashboard-assistant/#ask-about-the-current-page-or-tab).

## A diagram draft or firmware start is uncertain

If you can't tell whether the Assistant prepared a diagram draft, check chat
for **Review draft**. After an uncertain **Apply draft**, check the Product's
**Version history** before trying again. See [Diagram draft
recovery](/risks/threat-modeling/#if-the-draft-or-save-outcome-is-unclear).

If you can't tell whether firmware analysis started, check the exact release's
**Firmware Analysis** tab before submitting again. See [Firmware status and
action troubleshooting](/products-and-releases/firmware-analysis/#troubleshoot-unavailable-actions-or-uncertain-status).

## Product or upload outcome is unclear

Inspect **Products** and the relevant product's releases before submitting again. Check additional list pages and searches; a stale or empty result is not proof that nothing was created. Closing an import dialog does not delete its saved product or accepted release. Each accepted upload creates another release, even for identical content.

**Upload accepted** is not completed analysis or security clearance. **Open release overview** opens the exact saved release, and **Refresh results** reads current results without uploading again. See [Missing or unexpected findings](/troubleshooting/missing-or-unexpected-findings/).

## The onboarding illustration is static or sparse

Before creation, Home shows static Linuscent images of a router, camera, server, vehicle, and industrial arm. These are illustrative possibilities, not your product or inventory, and do not use WebGL. After creation, a 3D illustration represents the saved product; after an accepted upload, it adds shapes for at most five real entries from that file's preview. It is not a live scan and does not show all components, dependency edges, or analysis progress.

A static fallback after product creation is expected with reduced-motion preferences or a WebGL failure. The written product and preview values remain available, and the creation and upload workflow is unchanged.

## Related articles

- [SBOM Upload Errors](/troubleshooting/sbom-upload-errors/)
- [Troubleshoot an SBOM](/sbom/troubleshoot-sbom/)
