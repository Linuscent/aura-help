---
title: Use the dashboard Assistant
description: Ask about Aura and your active workspace, review supported changes before confirming, and manage your saved Assistant chat.
sidebar:
  order: 5
---

## Open the Assistant

These instructions apply to deployments with the updated dashboard **Assistant**,
including shared MCP tools and file attachments. Ask your Aura administrator
whether your deployment includes this update; an older Assistant may not offer
the operations described here.

1. Sign in to Aura and select the workspace you want to work in.
2. Select **Assistant** in the left navigation.
3. Check the active workspace before sending a question; it sets the context for
   workspace requests.
4. Enter your question and select **Send**. Press **Shift+Enter** for a new line.

You do not need an API key, OAuth connection, or a separate AI client. The
Assistant uses your signed-in session and your current workspace permissions.
**Help** remains an independent article reader; you can use it without asking
the Assistant.

## Ask a focused question

For public help, try **“How do I upload an SBOM?”** For current-workspace
information, try **“List the products in this workspace”** or **“Which releases
have critical risks?”** You can select a suggested question to put it in the
message box, then review it before sending.

The Assistant uses the full current shared MCP tool catalog, not every Aura
workflow. It can search public help and perform supported read operations
without asking for confirmation. Access to workspace information still depends
on your role, access to the resource, and the workspace's plan. Not every Aura
operation is available through chat.

Some apparently read-only requests can initialize workspace settings. For
example, the first read of certain Compliance or Trust Center information can
create baseline records. Those operations also require confirmation.

### Check the answer and its sources

Activity messages show when the Assistant searches help or opens an article.
Help citations come from articles it actually opened, not just search results.
Select an article citation to open it in **Help**.

**Answers can be wrong. Check before acting.** An answer can misstate an article
even when it includes a citation. Read the original guidance and check current
workspace data, especially before making security decisions or relying on claims
about data retention. A missing value is not proof of zero risk, and an answer is
not a compliance assurance. If no relevant article could be read, the Assistant
cannot verify procedural instructions from that article.

## Confirm a supported change

Asking for a change does not authorize it. For a supported change, the Assistant
shows a **Confirm change** card instead of immediately carrying it out.

1. Review **Action**, **Target**, **Workspace**, **Changes**, and **Effect**.
   For an upload, also check the **File** row after **Workspace**.
2. Select **Cancel** if anything is wrong. Ask again with the intended details.
3. To proceed, select the confirmation button labelled with the action, such as
   **Create product**. This explicit confirmation is required; replying **“yes”**
   in chat is not confirmation.
4. Read the human-readable result receipt and check the affected item when
   necessary.

A confirmation expires after **five minutes** and is single-use. It is tied to
your signed-in session, workspace, and current chat. Switching workspaces
cancels pending confirmations; switching back does not restore them. Clearing
chat or stopping a turn also invalidates pending confirmations. Cancelling or
expiry leaves an unclaimed change unexecuted, but cannot undo an operation
already sent for execution. An expired card has no **Retry** action: ask for a
fresh proposal and review it again.

The preview describes the proposed change, not a locked snapshot of the item.
Someone else may change the item before you confirm. Aura checks permissions,
limits, and existing API rules again when executing the operation against its
current state. Confirmation does not bypass those checks.

### If the outcome is unknown

**Stop**, closing the panel, or switching workspaces cannot undo a change already
sent for execution. A timeout or lost response can mean that a change was saved
even though its result could not be confirmed.

If the Assistant reports an unknown outcome, open the affected item and inspect
its current state before asking for the change again. There is no automatic
mutation retry. Retrying a failed question is not a way to replay a confirmed
change.

## Attach a file for a supported upload

1. Check the active workspace and enter an instruction naming the intended
   operation and target. A file alone is not an instruction.
2. Select the paperclip **Attach file** control and choose one file. You can attach
   only **one file per message**. Use **Remove** to discard a mistaken selection.
3. Select **Send**. Until then, the file stays local in your browser. Sending
   transfers it to Aura as a temporary payload; it does not yet upload it to a
   Product, release, or Trust Center document collection.
4. Review the confirmation card, including **File**, target, settings, and effect.
   Select the named upload action only when they are correct.

The AI receives only the filename, type, size, and a reference for this turn—not
the file's bytes. It does **not** read or summarize the attached file's contents.
You do not need to encode it as base64 or paste its contents into chat. File
metadata is not proof of what the file contains.

The picker accepts non-empty files up to **4 MiB** as an initial size check.
Operation-specific validation can reject a smaller file:

- **SBOM:** the complete shared MCP request must fit **4 MiB including JSON
  overhead**. Choose a supported UTF-8 SBOM document. This is smaller than the
  regular dashboard upload allowance.
- **VEX and Trust Center documents:** the decoded file limit is **2 MiB**, and
  the complete request must still fit the 4 MiB limit. Existing format and
  validation rules also apply.

Temporary payloads are cleaned up when their lifecycle ends. Expired payload
cleanup is opportunistic: the five-minute confirmation expiry is not a promise
of physical deletion at exactly five minutes. Clearing chat does not delete
completed native uploads or change their retention rules.

### Review the upload's effect

| Confirmation | What to check |
| --- | --- |
| **Upload SBOM** | Select an existing Product. Every accepted upload creates a new release, even for identical content or versions. Acceptance does not mean analysis has finished. See [Upload an SBOM](/sbom/upload-sbom/). |
| **Import VEX** | Select the exact release and a CycloneDX VEX JSON file matching its captured SBOM. A current captured SBOM, Compliance evidence-management permission, release access, and a paid VEX-enabled plan are required. Import stores evidence and stages statements and conflicts; it does not apply or publish them. |
| **Upload document** | Check the title, file, visibility, and watermark settings. Workspace-owner access and current Trust Center plan entitlement are required. Omitted settings default to **Gated** visibility and **Watermark: Yes**; review the explicit choices before confirming. Uploading a document does not publish a draft portal. See [Trust Center](/compliance/trust-center/). |

## Save a finding decision or retry archive sync

For **Save decision**, identify the exact release, component, and advisory, not
just a component name. Review the full assessment fields—state, justification,
response, details, and suppression—before confirming. Saving affects only that
exact finding; suppression does not fix a vulnerability. Current finding access
and permissions still apply. If the save is unconfirmed, refresh the assessment
before trying again. See [VEX decisions](/risks/vex-decisions/).

**Retry archive sync** retries pending release archive or restore
synchronization. It does **not** retry SBOM ingestion or analysis.

## Download an existing report

Ask for an existing VEX/VDR report revision in the active workspace. This does
not create an export or publish a report.

1. Review the report and release on the confirmation card, then select
   **Prepare download**.
2. Check the filename, type, and size on the **File ready** card.
3. Select **Download** to save the file. It never downloads automatically,
   including after reloading chat. HTML reports are downloaded, not displayed
   inline.

Assistant downloads are limited to **1 MiB**. Aura checks current report access
again when you click: withdrawal, a different active workspace, or lost workspace
membership can prevent download even if a card remains visible. If the file is
expired, missing, or no longer available, ask again; a fresh request cannot
bypass lost permissions. Clearing chat invalidates its download cards.

## Use the regular dashboard for unsupported work

Human-only workflows remain outside the Assistant. Use the regular
dashboard for Reporting, Compliance approvals, export creation, VEX publication
or withdrawal, API-key administration, workspace archival, member editing or
removal, leaving a workspace, creating invitations, creating or switching
workspaces, accepting invitations, billing, sign-in, and public or gated visitor
access flows. Do not assume that an operation is supported just because a related
read operation is available.

## Understand saved history and privacy

You have **one personal saved conversation across workspaces**, not a separate
chat for each workspace. Earlier messages stay associated with their original
workspace. Only messages from the current authorized workspace are used as
conversation context for its answers. History from a workspace you can no longer
access is excluded when chat is revalidated; already displayed content cannot be
recalled instantly.

History is saved to your account until you clear it or delete the account; it
does not automatically expire after a fixed age. Signing out clears the loaded
interface, not the saved history. Reloading chat reads saved messages and results
without replaying operations. **Load earlier messages** retrieves older history,
but the AI receives only a bounded portion of the current workspace's conversation,
not everything you have ever saved.

Cloudflare processes your messages and the necessary tool results to generate
answers. Aura configures gateway logging for request metadata, not raw prompt or
response payloads. That logging setting does not mean there is no provider-side
processing or retention: Cloudflare's separate terms and retention practices
apply. Do not put passwords, API keys, session tokens, or other credentials in
chat.

### Clear your chat

1. Select **Clear chat**.
2. In **Clear your chat?**, review the warning.
3. Select **Clear chat** to confirm, or **Keep chat** to cancel.

Clearing deletes your saved chat content across **all workspaces** and cancels
changes waiting for confirmation. It does not undo completed changes, remove
existing audit records, delete completed native uploads, or delete provider-side
records or gateway metadata. A change already executing can temporarily block
clearing; wait for its result.
Other open tabs recheck chat state rather than updating instantaneously. If
prompted, select **Reload chat** before continuing.

## Stay within the limits

- Each question is limited to **4,000 characters**.
- A turn can use at most **four tool operations** and **five AI responses**,
  including any final answer. Help searches and article reads count as operations.
- New questions and change confirmations share an allowance of **ten requests
  per minute per user**. Underlying operation limits also apply.
- A turn or confirmed operation has a **60-second timeout**. A timeout does not
  establish that a dispatched change was undone.
- Conversation context, tool results, and answer length are bounded. A saved
  history or long article may exceed what can be used in one answer.

Ask one focused question at a time. If information is too large, narrow the
request or read the relevant article directly in **Help**.

## Troubleshoot a request

| What you see | What to do |
| --- | --- |
| **Writing the answer…** with no answer yet | Answers are buffered before display rather than shown token by token. Wait for the result, or select **Stop** to stop the turn. Stopping is not an undo action. |
| Assistant temporarily unavailable | Your saved chat remains. Use **Open Help** for articles and ask your administrator to check Assistant provider configuration and availability. |
| Too many requests | Wait for the displayed countdown before trying again. Check the current state before repeating any change with an unknown outcome. |
| Permission error or unsupported operation | Check the selected workspace, your access, and whether the operation is supported. Use the regular dashboard where appropriate; do not try to bypass the restriction through another prompt. |
| Expired or cancelled confirmation | Ask again for a fresh proposal and review it. An old confirmation cannot be reused; expiry does not offer a Retry action. |
| File rejected or too large | Check the operation's format and size limits, not just the picker's 4 MiB check. Attach a suitable file again with an instruction. |
| Download no longer available | Check the active workspace and current report access, then ask again. A saved card does not preserve access to a withdrawn or missing report. |
| Workspace access changed or chat was cleared in another tab | Select **Reload chat** when offered and check the active workspace before continuing. |
| Help could not be searched or an article could not be read | Open **Help** and check the original article. Do not treat an unsourced answer as verified instructions. |

## Distinguish the Assistant from an external MCP client

The dashboard Assistant uses your browser session and current workspace, with
server-enforced confirmation for supported changes. An
[external MCP client](/integrations/mcp-server/) instead connects using OAuth or a
personal API key, bound to the workspace selected for that connection. Switching
workspaces in the browser does not retarget it. Both use the shared tool catalog,
but the Assistant supplies its own file picker and confirmation flow.
External-client confirmation is controlled by the client; the Assistant's
confirmation cards do not add server-enforced confirmation to MCP calls or change
which operations that connection supports.

## Related articles

- [First steps in Aura](/getting-started/first-steps/)
- [Connect an MCP client to Aura](/integrations/mcp-server/)
- [Access and Permissions](/workspace-and-account/access-and-permissions/)
- [Upload an SBOM](/sbom/upload-sbom/)
- [VEX decisions](/risks/vex-decisions/)
- [Trust Center](/compliance/trust-center/)
