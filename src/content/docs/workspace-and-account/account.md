---
title: Account
description: Understand the account area and user-specific settings available in Aura.
sidebar:
  order: 5
---
Account Settings contains **Profile**, **Security**, **API Keys**, **Billing**,
and, on updated deployments, **Authorized apps**. You can open Account while
signed in even if you no longer belong to a workspace.

## Account Management

Under **Profile**, select the edit icon beside your name, then **Save Name** or
**Cancel**. Under **Security**, update your email or change your password using
your current and new passwords. Changing your password does not revoke existing
API keys.

## Pending invitations

**Account → Profile** lists every pending workspace invitation sent to your
account, including invitations you hid by closing the Home banner. Accept or
reject them here. See
[Respond to an invitation](/workspace-and-account/working-with-your-team/#respond-to-an-invitation).

## Create an API key

You must belong to an active workspace to create a new key. Without one, you
can still review and revoke existing keys; create or join a workspace before
creating another.

1. Open **Account → API Keys → Create API key**.
2. Choose the workspace the key will access. Direct Account access requires an
   explicit choice; the Workspace Settings shortcut preselects its workspace.
3. Choose an access level:
   - **Read only** is the default. It allows reading, not creating, changing, or
     deleting workspace data.
   - **Read and write** allows only operations your current workspace role
     permits. It is unavailable if your role has no write permissions.
4. Enter a name and choose an expiry: **No expiry** (the default), **30 days**,
   **90 days**, or **1 year**.
5. Create the key and copy its secret immediately. Select **I have copied this
   key**, then **Done**. The secret is shown only once.

If creation cannot be confirmed, close the dialog and inspect the key list.
Revoke any newly created key whose secret you did not save before creating
another key.

Keep the secret in a secure secret store, not a URL, prompt, shared file, or
screenshot. Each key is bound to one workspace; switching your active workspace
does not retarget it. Access levels do not replace live role, resource, and plan
checks. There is no individual-permission or per-tool scope picker.

## Review and revoke keys

Account lists your keys across workspaces, including keys you can no longer use.
Select **Revoke**, then **Revoke key**, to invalidate a key immediately and
permanently. You can revoke your key even after losing access to its workspace.
Replace exposed keys and update clients that used them.

Keys marked **Read and write (legacy)** retain role-limited access. To restrict
one to read-only access, create a replacement key, update its clients, and revoke
the old key.

## Authorized apps

Ask your administrator whether OAuth connection is available on your updated
Aura deployment. Where available, start from an approved, pre-registered app,
sign in to Aura, and explicitly choose one workspace to approve. See
[Connect with OAuth](/integrations/mcp-server/#connect-with-oauth).

Open **Account → Authorized apps** to review your own authorizations across
workspaces, including workspaces you can no longer access. The list records
approval, not proof that an app finished connecting.

Each authorization grants **Full MCP access** in its selected workspace:
supported reads and writes through current tools and tools Aura adds later,
limited on every request by your current role, resource permissions, and
workspace plan. It does not include actions reserved for the Aura dashboard.
Switching the website's active workspace does not retarget an app.

| Status | Meaning |
| --- | --- |
| **Authorized** | The authorization currently permits access, subject to current permissions. This does not confirm that the app finished connecting. |
| **Expired** | The authorization is no longer usable. Start from the app for a new approval if you still want access. |
| **Workspace access lost** | The authorization can no longer use that workspace. Check your workspace access before starting a new approval. |
| **Removed** | The authorization no longer permits access. Its row remains in the list. |

When offered during approval, **Stay connected for up to 30 days** is optional
and unchecked. If you leave it off, the app may need you to reconnect soon.
**Stays connected**
with an **Until** date appears only for a currently authorized app with continued
access; inactive rows do not show a future date. Signing out of the Aura website
does **not** revoke app authorization.

### Remove an authorization

1. Open **Account → Authorized apps** and find the app and workspace.
2. Select **Remove**, then confirm with **Remove authorization**.
3. Check that the row shows **Removed**. If removal cannot be confirmed, inspect
   the current list before trying again.

Removal permanently denies future access under that authorization. It does not
undo earlier changes, and requests already in progress may finish, including
writes. You can remove your authorization even after leaving its workspace.
To allow access again, start from the app and approve a new request.

Approving the same app for the same workspace replaces its previous
authorization, which stops working. Selecting **Deny** on a new request leaves
existing authorizations unchanged. If an approval result is uncertain, inspect
this list before repeating approval.

API keys are separate: removing an app authorization does not revoke API keys,
and revoking an API key does not remove an app authorization. Manage keys
under **Account → API Keys**.

## Manage subscriptions you pay for

Open **Billing** to review subscriptions you fund, manage payments or renewal,
and inspect transactions and available invoices. Payer access is separate from
workspace membership. See [Billing and invoices](/workspace-and-account/billing/).

## Related articles

- [Billing and invoices](/workspace-and-account/billing/)
- [Connect an MCP client to Aura](/integrations/mcp-server/)
- [Workspace Settings](/workspace-and-account/workspace-settings/)
- [Access and Permissions](/workspace-and-account/access-and-permissions/)
- [Working With Your Team](/workspace-and-account/working-with-your-team/)
- [Workspace Overview](/workspace-and-account/workspace-overview/)
- [First steps in Aura](/getting-started/first-steps/)
