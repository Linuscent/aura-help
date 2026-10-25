---
title: Use the dashboard Assistant
description: Ask about Aura and your active workspace, review supported changes before confirming, and manage your saved Assistant chat.
sidebar:
  order: 5
---

## Open the Assistant

These instructions apply to deployments that include the dashboard **Assistant**.
If it is not available, ask your Aura administrator whether your deployment
includes it.

1. Sign in to Aura and select the workspace you want to work in.
2. Select **Assistant** in the left navigation.
3. Check the active workspace before sending a question; it sets the context for
   workspace requests.
4. Enter your question and select **Send**. Press **Shift+Enter** for a new line.

You do not need an API key or a separate AI client. The Assistant uses your
signed-in session and your current workspace permissions. **Help** remains an
independent article reader; you can use it without asking the Assistant.

## Ask a focused question

For public help, try **“How do I upload an SBOM?”** For current-workspace
information, try **“List the products in this workspace”** or **“Which releases
have critical risks?”** You can select a suggested question to put it in the
message box, then review it before sending.

The Assistant can search public help and perform supported read operations
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
2. Select **Cancel** if anything is wrong. Ask again with the intended details.
3. To proceed, select the confirmation button labelled with the action, such as
   **Create product**. This explicit confirmation is required; replying **“yes”**
   in chat is not confirmation.
4. Read the reported result and check the affected item when necessary.

A confirmation expires after **five minutes** and is single-use. It is tied to
your signed-in session, workspace, and current chat. Switching workspaces
cancels pending confirmations; switching back does not restore them. Clearing
chat or stopping a turn also invalidates pending confirmations.

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

## Use the regular dashboard for unsupported work

The Assistant does not support:

- file uploads or downloads;
- saving finding decisions;
- SBOM ingestion, including pasting serialized SBOM content into chat;
- retrying release synchronization.

It can explain an upload workflow, but you must perform the upload through the
regular dashboard or a supported integration. See [Upload an SBOM](/sbom/upload-sbom/).
Every accepted upload creates a new release, so inspect the product's releases
before repeating an upload with an unclear outcome.

Other human-only workflows also remain outside the Assistant. Use the regular
dashboard for Reporting, Compliance approvals, export creation, VEX publication
or withdrawal, API-key administration, workspace archival, member editing or
removal, creating invitations, creating or switching workspaces, accepting
invitations, billing, and sign-in. Do not assume that an operation is supported
just because a related read operation is available.

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
existing audit records, or delete provider-side records or gateway metadata. A
change already executing can temporarily block clearing; wait for its result.
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
| Expired or cancelled confirmation | Ask again for a fresh proposal and review it. An old confirmation cannot be reused. |
| Workspace access changed or chat was cleared in another tab | Select **Reload chat** when offered and check the active workspace before continuing. |
| Help could not be searched or an article could not be read | Open **Help** and check the original article. Do not treat an unsourced answer as verified instructions. |

## Distinguish the Assistant from an external MCP client

The dashboard Assistant uses your browser session and current workspace, with
server-enforced confirmation for supported changes. An
[external MCP client](/integrations/mcp-server/) instead uses a workspace-bound
personal API key. Switching workspaces in the browser does not retarget that
key. External-client confirmation is controlled by the client; the Assistant's
confirmation cards do not add server-enforced confirmation to MCP calls or change
which operations that connection supports.

## Related articles

- [First steps in Aura](/getting-started/first-steps/)
- [Connect an MCP client to Aura](/integrations/mcp-server/)
- [Access and Permissions](/workspace-and-account/access-and-permissions/)
- [Upload an SBOM](/sbom/upload-sbom/)
