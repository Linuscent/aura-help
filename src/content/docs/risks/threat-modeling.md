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

## Draft and review a diagram

These steps apply where Assistant diagram review on the **Threat model** page
is available.

1. In **Product details**, save a description of the Product's purpose, main
   parts, connections, and the data it handles. Do not include secrets.
2. Open **Threat model** and select **Draft with Assistant** on **Diagram**.
   Or type a request in Assistant chat using the exact Product name, such as
   **“Draft a diagram for Gateway.”** Aura uses the saved description and
   diagram to propose a new diagram or improve the existing one without
   replacing it. The shortcut leaves any unsent message or attachment in the
   composer.
3. If the Assistant asks a question, choose a suggested reply or type your
   answer. Choosing a reply never saves the model.
4. Both entry points show **Review draft** in chat when a draft is ready.
   Follow that link to the same Product's **Threat model** page. Check the
   proposed diagram, field changes, and effects on STRIDE checks.
5. Resolve any unsaved local edits before selecting **Apply draft** to save a
   revision. Select **Discard draft** to leave the saved model unchanged.
   Drafting and reviewing do not change the saved model.

Check **Expires**: a draft lasts 30 minutes. Leaving review does not discard it.
If it expires or the saved model changes, request a fresh draft; Aura does not
merge it automatically. If there are no changes to apply, the Assistant reports
that nothing changed and shows no approval card.

### If the draft or save outcome is unclear

- **Not sure a draft was prepared?** Check chat for **Review draft** before
  asking again. Retry only when Aura confirms it did not prepare a draft.
- **Not sure Apply succeeded?** Check **Version history** for a saved revision
  before trying again. Aura never automatically retries applying a draft.

After a confirmed save, the current view updates without a page reload. If you
have unsaved edits or an open form, Aura keeps them. Use **Compare with saved
version** to inspect the new revision before deciding what to keep.

## Organize the diagram

In **Canvas**, select **Organize diagram** to reposition shapes and resize
trust-boundary frames around their members. This saves through normal autosave
without changing names, flows, memberships, or STRIDE checks. If you ask the
Assistant to organize a named Product's diagram, review and confirm the
layout-only change on the inline card in chat, not on the diagram review page.
Use **Details** or **Outline** to read long labels in full.

## Review and revise

Use the **Canvas** or **Outline** to review the diagram. When you edit the
diagram, Aura saves the changes automatically. Use **Version history** to
inspect or restore a saved revision. Restoring the diagram does not undo
separately recorded risk decisions.

## Review STRIDE suggestions

1. Save a diagram with at least one process and one data flow. On **STRIDE
   review**, select **Draft with Assistant**. If the diagram isn't ready, use
   **Go to Diagram**.
2. Review the inline confirmation in chat. **Apply** adds the proposed items
   to **Pending STRIDE suggestions**. This does not record threats, complete
   checks, change review coverage, or create risks. If no applicable suggestion
   can be prepared, the Assistant reports that nothing was saved and shows no
   approval card.
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
