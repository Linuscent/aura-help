---
title: Account
description: Understand the account area and user-specific settings available in Aura.
sidebar:
  order: 5
---
Account Settings contains **Profile**, **Security**, **API Keys**, **Authorized apps**,
and **Billing**. You can open Account while signed in even if you no longer belong
to a workspace.

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

## Review and remove app authorizations

Open **Account → Authorized apps** to review your own app authorizations. Each
authorization is read-only and bound to one workspace. You can review and remove
your authorizations even if you no longer have access to that workspace.

Connecting apps through sign-in is not available yet. The **No authorized apps**
empty state is expected. For current MCP access, use the API-key workflow in
[Connect an MCP client to Aura](/integrations/mcp-server/). App authorizations are
separate from API keys; removing an authorization does not revoke an API key.

An authorization can show **Authorized**, **Expired**, **Workspace access lost**,
or **Removed**. To remove one, select **Remove**, then confirm with
**Remove authorization**. Removal blocks future authorization checks, but does
not stop requests already in flight. The row remains in the list as **Removed**.
If you cannot tell whether removal succeeded, reload the list and check its
status before retrying.

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
