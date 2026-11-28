---
title: Notifications and Routing
description: Learn which Aura workflows send email and what CRA Reporting reminders do.
sidebar:
  order: 5
---
## Built-in email is workflow-specific

Aura's built-in email is **workflow-specific**: individual workflows send
email for their own purposes, and it is not a general-purpose notification
channel. Which emails a workflow sends depends on how that workflow and the
Aura environment are configured.

**General configurable vulnerability notification routing** — sending
vulnerability notifications to chat platforms or issue trackers with your own
routing rules — **is not available as a built-in Aura workflow**. Teams should check with their Aura operator about any deployment-specific email or webhook delivery.

## CRA Reporting reminders

When mail and its worker are configured, **Reporting** can send internal
reminders for confirmed deadlines in **live** cases. Reminders are sent to
the responsible case members and contain a generic reminder and an
authenticated case link, not case titles or exploit details.

- **Exercises never send reminder email.**
- Reminders are **not authority filings or customer notifications**.
  Recording a submission to an authority is a separate manual step, and
  notifying customers is not part of this workflow.

## Related articles

- [GitHub Actions Integration](/integrations/github-actions/)
- [SBOM Ingestion](/integrations/sbom-ingestion/)
- [Upload an SBOM](/sbom/upload-sbom/)
- [Reporting](/compliance/reporting/)
