---
title: Trust Center
description: Configure Aura's public security portal with branding, a custom domain, and analytics.
sidebar:
  order: 8
---
The **Trust Center** is Aura's public security portal and gated document access
for your workspace.

Select **Trust Center** in the left navigation to open it.

![The Trust Center showing the Publish action, navigation tabs, Branding settings, Custom domain, and Analytics.](../../../assets/screenshots/compliance/trust-center.png)

## Publish the portal

The portal starts as a draft. Select **Publish** to make it live. A public URL is
shown with **Copy** and **Open** actions; until you publish, the portal is not
live.

Publishing is a persistent workspace action. This article describes the
available settings; it does not publish the portal for you.

## Navigation tabs

The Trust Center is organised into tabs:

- **Settings** — branding, custom domain, and analytics.
- **Products**
- **Documents**
- **Content**
- **Access requests**
- **Vuln reports**

The **Settings** tab is described below. The remaining tabs are available but are
not covered in detail here.

## Branding

Under **Settings → Branding**, you can configure:

- **Company name**
- **Security contact email**
- **Primary color** (hex)
- **Logo URL**
- **Support URL**
- **Overview blurb** (Markdown)

Select **Save branding** to keep your changes.

## Custom domain

Under **Settings → Custom domain**, enter a **Domain** (for example
`trust.acme.com`) and select **Save**.

## Analytics

The **Analytics** section shows counts for:

- Access requests
- Approvals
- Downloads
- NDA acceptances
- Vuln reports
- Revocations

## Upload a document with the Assistant

On deployments with the updated [dashboard Assistant](/getting-started/dashboard-assistant/),
a workspace owner with the current Trust Center plan entitlement can attach a
document and ask to add it to the Trust Center. Current permissions and file
validation still apply; chat does not grant extra access.

Enter an instruction with the document title, use **Attach file**, and select
**Send**. Review **File**, the target, title, visibility, and watermark settings
before selecting **Upload document**. Omitted settings default to **Gated**
visibility and **Watermark: Yes**; confirm the explicit choices rather than
assuming the document will be public. The decoded file limit is **2 MiB**, within
the shared 4 MiB request limit. Uploading a document does not publish a draft
portal.

See [Assistant file handling](/getting-started/dashboard-assistant/#attach-a-file-for-a-supported-upload)
for temporary payloads, confirmation, and size limits.

## Related articles

- [Reporting](/compliance/reporting)
- [Compliance Overview](/compliance/overview)
- [Workspace Settings](/workspace-and-account/workspace-settings)
- [Access and Permissions](/workspace-and-account/access-and-permissions)
- [Use the dashboard Assistant](/getting-started/dashboard-assistant/)
