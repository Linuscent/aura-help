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

Personal keys created under **Workspace settings → API keys** can authenticate
an MCP client to that workspace. See
[Connect an MCP client to Aura](/integrations/mcp-server/) for setup and key safety.

Repository setup in **SBOM Ingestion** can create a personal workspace key and
install it in GitHub or GitLab CI after your explicit consent. It has your
workspace permissions, not only access to the selected product. Manage its key
ID and expiry through **Account → API Keys**. Disconnecting the provider does
not revoke that key or stop existing CI uploads; see
[SBOM Ingestion](/integrations/sbom-ingestion/) before removing access.

## Related articles

- [Access and Permissions](/workspace-and-account/access-and-permissions)
- [Account](/workspace-and-account/account)
- [Workspace Overview](/workspace-and-account/workspace-overview)
- [First steps in Aura](/getting-started/first-steps)
