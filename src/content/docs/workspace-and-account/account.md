---
title: Account
description: Understand the account area and user-specific settings available in Aura.
sidebar:
  order: 5
---
Account settings contains **Profile**, **Security**, **API keys**, and
**Billing**. Where OAuth for MCP is available, it also lists **Authorized apps**.
You can open Account while signed in even if you no longer belong to a workspace.

## Account Management

Under **Profile**, select the edit icon beside your name, then **Save Name** or
**Cancel**. Under **Security**, update your email or change your password using
your current and new passwords. Changing your password does not revoke existing
API keys.

## Sign-in methods

If Google sign-in is available for your account, you can connect Google as an
additional way to sign in. Connecting Google doesn't replace or remove your
existing sign-in method.

1. First, sign in to Aura with your existing sign-in method.
2. Open **Account → Security → Sign-in methods → Connect Google**.

Before connecting Google:

- You need a recent sign-in. If Aura asks you to sign in again, choose
  **Sign in again**, then retry connecting Google.
- Both your Aura account email and your Google account email must be verified.
- Use an eligible Gmail or managed Workspace account with the same verified
  email address as your Aura account. Email matching is case-insensitive.

Google accounts aren't linked automatically: connecting Google always requires
this explicit action, even when the email addresses match. Disconnecting Google
isn't available in this release.

Connecting Google is separate from accepting workspace invitations and from
authorizing MCP apps; those remain separate and explicit. See
[Respond to an invitation](/workspace-and-account/working-with-your-team/#respond-to-an-invitation)
and [Connect with OAuth](/integrations/mcp-server/#connect-with-oauth).

### Set up a password

If you created your Aura account with a social sign-in method and don't have a
password, open **Account → Security** and choose **Set up a password** in the
**Password** card. Enter your Aura email address, then follow the reset link
sent to that address to set a password; afterwards you can sign in with email
and password as well.

### GitHub

If GitHub sign-in is available for your account, you can connect GitHub as an
additional way to sign in when it is shown. GitHub sign-in is not offered in
every deployment.

1. First, sign in to Aura with your usual existing sign-in method.
2. Open **Account → Security → Connect GitHub**.
3. Connect GitHub only when your verified Aura account email and your GitHub
   verified primary email match. A GitHub primary email marked private can
   still match. Matching email addresses do not link accounts automatically;
   connecting GitHub requires this explicit action.
4. Use a recent session. If Aura asks you to sign in again, sign in again with
   your usual method, then retry connecting GitHub.
5. After linking, use **Sign in with GitHub** on the Aura sign-in page.

Connecting GitHub doesn't replace or remove your existing sign-in method.
Linking GitHub for sign-in doesn't grant access to your GitHub repositories or
your Aura workspaces. This sign-in linking is separate from authorizing GitHub
repositories, accepting workspace invitations, and authorizing other apps.

### Microsoft

If Microsoft sign-in is available for your account, you can connect Microsoft
as an additional way to sign in when it is shown. Microsoft sign-in is not
offered in every deployment. You can connect a personal, work, or school
Microsoft account. Existing accounts are not linked automatically, even when
the email addresses match.

1. First, sign in normally to Aura with your existing sign-in method.
2. Open **Account → Security → Sign-in methods → Connect Microsoft**.
3. Choose the Microsoft account and complete the prompts at Microsoft. Aura
   sends a confirmation email to your existing Aura email address; the
   Microsoft account email address does not need to match. Open that email in
   the **same browser** and in the **same still-recent signed-in session**;
   opening the link is the confirmation.

The **Connected** badge appears only after confirmation.

Before connecting Microsoft:

- Your Aura account email must be verified.
- You need a recent Aura sign-in.

Troubleshooting:

- If the confirmation email has not arrived, check spam and wait a few minutes
  before choosing **Connect Microsoft again**, if still signed in.
- If your session is no longer recent or Aura asks you to sign in again, sign
  in again with your usual method and start over.
- If the confirmation link has expired or you lost it, sign in again and restart
  from **Account → Security**; the original session must still be recent.

After connecting, select **Sign in with Microsoft** on the Aura sign-in page
and use the same linked Microsoft account. Connecting Microsoft doesn't
replace or remove your existing sign-in method, and there is no disconnect
control. Aura uses basic identity information for sign-in and does not request
access to Microsoft files or other services. Connecting Microsoft does not
change your Aura workspace access.

## Pending invitations

**Account → Profile** lists every pending workspace invitation sent to your
account, including invitations you hid by closing the Home banner. Accept or
reject them here. See
[Respond to an invitation](/workspace-and-account/working-with-your-team/#respond-to-an-invitation).

## Create an API key

You must belong to an active workspace to create a new key. Without one, you
can still review and revoke existing keys; create or join a workspace before
creating another.

1. Open **Account → API keys → Create API key**.
2. Choose the workspace the key will access. Direct Account access requires an
   explicit choice; the Workspace settings shortcut preselects its workspace.
3. Choose an access level:
   - **Read only** is the default. It allows reading, not creating, changing, or
     deleting workspace data.
   - **Read and write** allows only operations your current workspace role
     permits. It is unavailable if your role has no write permissions.
4. Enter a name of up to **100 characters** and choose an expiry: **No expiry**
   (the default), **30 days**, **90 days**, or **1 year**.
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

## Review and remove authorized apps

Open **Account → Authorized apps** to review OAuth authorizations across
workspaces. This is separate from **API keys**. Check the app and workspace
here if you aren't sure whether approval was recorded. **Deny** on a new
request does not remove a previous authorization.

To disconnect an app, find its entry for the intended workspace, select
**Remove**, then **Remove authorization**. You can do this even after losing
access to that workspace. If the result is unclear, check the refreshed list
before trying again.

Signing out of Aura does not remove authorizations. Removal blocks future
access under that authorization; it does not undo changes or stop requests
already in progress. See [Connect with OAuth](/integrations/mcp-server/#connect-with-oauth)
for what an app can access and the optional stay-connected setting.

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
