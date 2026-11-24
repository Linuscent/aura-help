---
title: Model product threats
description: Open a product threat model, draft a data-flow diagram, and review suggested threats before recording decisions.
sidebar:
  order: 8
---

## Open a threat model

In **Products**, open the product and select **Threat model**. You can also
select a product in **Risks** and use the **Threat model** shortcut. These
instructions apply to deployments that include product threat modeling. You
do not need a release or SBOM to start.

## Draft with Assistant

1. In **Product details**, save a description of the product's purpose, main
   parts, connections, and the data it handles. Do not include secrets.
2. Open **Threat model** and select **Draft with Assistant**. The shortcut
   opens chat and sends a request for the selected product. It leaves any
   unsent message or attachment in the composer.
3. Review the draft in chat. Aura uses the selected product's saved
   description and current threat model, if one exists. The Assistant can
   suggest data flows, flag gaps, and label assumptions.

The shortcut **does not save the threat model** or record reviewed checks or
risks. Review the draft, then apply useful changes in the editor. If you ask
separately in chat to save a draft, review the proposed change before confirming.

## Review and revise

Use the **Canvas** or **Outline** to review the diagram. When you edit the
diagram, Aura saves the changes automatically. Use **Version history** to
inspect or restore a saved revision. Restoring the diagram does not undo
separately recorded risk decisions.

Treat suggested STRIDE checks as prompts for review, not as completed checks.
Review coverage describes which applicable checks have been reviewed; it does
not establish that a product is secure.

## Related articles

- [Product overview](/products-and-releases/product-overview/)
- [Use the dashboard Assistant](/getting-started/dashboard-assistant/)
- [Understand findings](/risks/understanding-findings/)
