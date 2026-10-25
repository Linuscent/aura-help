---
title: Workspace Settings
description: Understand workspace-level configuration options in Aura.
sidebar:
  order: 4
---
Workspace settings control configuration options for a workspace.

## Settings Management

Depending on available capabilities, workspace settings may include:

-   Workspace configuration
-   Access management
-   Integration-related options

## Important Note

Available settings depend on the Aura workspace configuration.

To manage personal API keys, open **Workspace Settings → API keys → Manage API
keys in Account**. This opens Account with this workspace preselected for key
creation. Keys are managed in Account, not directly in Workspace Settings. See
[Account](/workspace-and-account/account/) for access levels and revocation, and
[Connect an MCP client to Aura](/integrations/mcp-server/) for setup and key safety.

Repository setup in **SBOM Ingestion** can create a personal workspace key and
install it in GitHub or GitLab CI after your explicit consent. It has your
workspace permissions, not only access to the selected product. Manage its key
ID and expiry through **Account → API Keys**. Disconnecting the provider does
not revoke that key or stop existing CI uploads; see
[SBOM Ingestion](/integrations/sbom-ingestion/) before removing access.

## Review workspace billing

Workspace owners use **Workspace Settings → Billing** to review workspace
access and available plans. Starting a subscription requires confirming
**I'll pay for this subscription from my personal billing account**.

For subscriptions linked to a personal billing account, ownership alone does
not grant access to another person's payment details or cancellation rights.
Changing the plan requires being both its payer and a current workspace owner.
Older subscriptions not yet linked to a personal billing account retain
workspace-owner management until migrated. Manage subscriptions you fund,
payment methods, transactions, and invoices under **Account → Billing**. See
[Billing and invoices](/workspace-and-account/billing/).

## Related articles

- [Access and Permissions](/workspace-and-account/access-and-permissions/)
- [Account](/workspace-and-account/account/)
- [Billing and invoices](/workspace-and-account/billing/)
- [Workspace Overview](/workspace-and-account/workspace-overview/)
- [First steps in Aura](/getting-started/first-steps/)
