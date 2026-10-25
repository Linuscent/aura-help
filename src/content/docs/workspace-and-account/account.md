---
title: Account
description: Understand the account area and user-specific settings available in Aura.
sidebar:
  order: 5
---
Account Settings contains **Profile**, **Security**, **API Keys**, and
**Billing**. You can open Account while signed in even if you no longer belong
to a workspace.

## Account Management

Under **Profile**, select the edit icon beside your name, then **Save Name** or
**Cancel**. Under **Security**, update your email or change your password using
your current and new passwords. Changing your password does not revoke existing
API keys.

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

## Manage subscriptions you pay for

Open **Billing** to review subscriptions you fund, manage payments or renewal,
and inspect transactions and available invoices. Payer access is separate from
workspace membership. See [Billing and invoices](/workspace-and-account/billing/).

## Related articles

- [Billing and invoices](/workspace-and-account/billing/)
- [Connect an MCP client to Aura](/integrations/mcp-server/)
- [Workspace Settings](/workspace-and-account/workspace-settings/)
- [Access and Permissions](/workspace-and-account/access-and-permissions/)
