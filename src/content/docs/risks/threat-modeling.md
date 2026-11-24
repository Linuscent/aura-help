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
2. Open **Threat model** and select **Draft with Assistant** on **Diagram**.
   Aura uses the selected product's saved description and diagram to propose a
   new diagram or improve the existing one without replacing it. The shortcut
   leaves any unsent message or attachment in the composer.
3. If the Assistant asks a question, choose a suggested reply or type your
   answer. Review any proposed changes, then select **Apply** to save them or
   **Cancel** to leave the model unchanged. Choosing a reply never saves.

After a confirmed save, the current view updates without a page reload. If you
have unsaved edits or an open form, Aura keeps them. Use **Compare with saved
version** to inspect the new revision before deciding what to keep.

## Organize the diagram

In **Canvas**, select **Organize diagram** to reposition shapes and resize
trust-boundary frames around their members. This saves through normal autosave
without changing names, flows, memberships, or STRIDE checks. Ask the Assistant
to organize a named product's diagram if you prefer to review a proposal before
applying it. Use **Details** or **Outline** to read long labels in full.

## Review and revise

Use the **Canvas** or **Outline** to review the diagram. When you edit the
diagram, Aura saves the changes automatically. Use **Version history** to
inspect or restore a saved revision. Restoring the diagram does not undo
separately recorded risk decisions.

## Review STRIDE suggestions

1. Save a diagram with at least one process and one data flow. On **STRIDE**,
   select **Draft with Assistant**. If the diagram isn't ready, use **Go to
   Diagram**.
2. Review the proposed suggestions. **Apply** adds them to **Pending STRIDE
   suggestions** without removing recorded threats, completing checks, or
   creating risks.
3. Select **Review and add** to open a suggestion in the review editor. It is
   not a recorded threat until you select **Apply review**. The editor explains
   any change to the check's outcome. Select **Dismiss** to remove only the
   pending suggestion.

Review coverage describes which applicable checks have been reviewed; it does
not establish that a product is secure. On **Risks**, there is no drafting
shortcut. You can still ask threat and risk questions in the regular Assistant.

## Related articles

- [Product overview](/products-and-releases/product-overview/)
- [Use the dashboard Assistant](/getting-started/dashboard-assistant/)
- [Understand findings](/risks/understanding-findings/)
