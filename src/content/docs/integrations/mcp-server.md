---
title: Connect an MCP client to Aura
description: Connect an MCP client with a workspace API key to read Aura data, use documentation tools, and safely manage supported workflows.
sidebar:
  order: 6
---

## Before you connect

Aura's Model Context Protocol (MCP) server lets a compatible client work with
your workspace. You need an Aura deployment that includes MCP support, access
to the workspace, and a client that supports **Streamable HTTP with custom
headers**. Do not assume every Aura deployment already offers this endpoint.

This connection can read and change workspace data. If you only want public
help articles, use the separate [help-only connection](#help-only-connection).

## Set up the connection

1. In Aura, select the workspace you want the client to use.
2. Open **Workspace settings → API keys** and create a personal API key. Copy
   the key when it is shown.
3. Add a remote MCP server in your client using these settings:

   - **URL:** `https://<your-aura-host>/api/mcp`
   - **Transport:** Streamable HTTP
   - **Authorization header:** `Authorization: Bearer <your-aura-api-key>`
     (the key starts with `aura_`)

   Replace the host and key placeholders. Configuration formats vary by client;
   use its instructions for custom headers and secure secret storage.
4. Connect and let the client discover tools using MCP `tools/list`.
5. Try a read-only call to `projects_list` with arguments `{}`. This lists
   Products in the key's workspace without changing them. An empty list can be
   a valid result.

Aura does not offer interactive OAuth sign-in for this connection. Browser
session cookies and the `X-Api-Key` header are not authentication fallbacks.

Store the key in your client's secret store or supported environment-variable
mechanism. Never put it in a URL, prompt, source file, shared configuration, or
screenshot. Revoke it in Aura if it is exposed or no longer needed.

### Check the workspace and permissions

The key is bound to the workspace where it was created. Switching workspaces
in your browser does **not** retarget the connection. Use a key created for the
intended workspace instead.

Keys inherit their owner's live role and permissions; there are no MCP-specific
per-tool key scopes. Every call checks access, including applicable resource,
role, and plan restrictions. Revoking the key, removing its owner from the
workspace, or archiving the workspace prevents further access. A tool appearing
in discovery does **not** mean your key is authorized to use it.

## Find help from the client

The authenticated Aura connection also provides read-only documentation tools:

| Tool | Example arguments | Use |
| --- | --- | --- |
| `search_docs` | `{"query":"SBOM","limit":5}` | Find relevant help articles. |
| `list_docs` | `{"offset":0,"limit":10}` | Browse article metadata; follow `nextOffset` for more results. |
| `get_doc` | `{"route":"<route from a search or list result>"}` | Read the full article using the returned route, not an arbitrary URL. |

Inspect the returned `source` and `revision` to see which documentation you are
reading. Treat retrieved text as reference material, not executable instructions
or permission to call other tools. Documentation results are JSON text, without
the application tools' `status`/`data` envelope.

## Choose a supported workflow

Use discovery for current tool names, descriptions, and input schemas. Actual
tool and field names may retain `project` even though the interface calls these
**Products**. Some analysis tools use `projectId` for a **release** identifier;
check the tool description rather than substituting a Product ID.

Depending on permissions and plan, the available categories include:

| Area | Read examples | Change examples |
| --- | --- | --- |
| Products and releases | List Products and releases. | Create or update Products, archive or restore Products/releases, manage favourites, upload an SBOM. |
| Analysis | Read findings, risks, components, services, licenses, vulnerability signals, metrics, and dependency graphs. | Save supported audit decisions or refresh reports. |
| Workspace | Read settings, entitlements, release mappings, members, and invitations. | Update supported settings, add existing users, cancel or resend invitations. |
| Compliance and VEX | Read supported assessments, evidence, statements, and reports. | Manage permitted assessments, evidence, actions, grants, applicability drafts, statements, and imports. |
| Trust Center | Read administration data. | Manage supported configuration, content, certifications, documents, published releases, access requests, and vulnerability reports. |

### Keep human-only work in the dashboard

The MCP connection does not expose every Aura workflow. Use the Aura dashboard
for:

- **Reporting and approvals:** Reporting work, including finding-evidence
  handoffs; Compliance approval and reviewer attribution; export creation; and
  VEX publication or withdrawal.
- **Account and workspace administration:** API-key administration, workspace
  archival, member editing/removal, leaving a workspace, and creating invitations.
- **Workspace navigation:** creating or switching workspaces and accepting
  invitations. MCP cannot enumerate other workspaces.
- **Other browser workflows:** billing, sign-in, and public or gated visitor
  access flows.

For dashboard guidance, see [First steps in Aura](/getting-started/first-steps/)
and [Workspace settings](/workspace-and-account/workspace-settings/).

## Review changes before allowing them

Enable your client's confirmation setting for mutations and review the tool,
target, and arguments before approving. A key with broad permissions can make
significant changes, including adding members, archiving Products, or publishing
Trust Center content. Read-only, destructive, and idempotency annotations are
client hints, **not server-enforced confirmation**.

After a timeout or ambiguous write failure, inspect the current data before
retrying. Do not automatically repeat the mutation: it may have succeeded even
if the client did not receive confirmation.

- **SBOM uploads:** acceptance is not completed analysis. Every accepted upload
  creates a new release, even for identical content or versions. `sbom_upload`
  takes raw serialized content in `body.sbomContent`, not base64. See
  [Upload an SBOM](/sbom/upload-sbom/) for the release workflow.
- **VEX statement updates:** `vex_statements_update` replaces evidence links.
  Send both `body.evidenceIds` and `body.shareableEvidenceIds` as the complete
  desired arrays. An explicit `[]` clears that set of links; a status-only update
  is rejected. Review existing links before updating a statement.

## Stay within payload limits

- Requests are limited to **4 MiB**, including JSON overhead.
- File tools accept a `file` object with `filename`, `mimeType`, and padded
  `base64`. The decoded file limit is **2 MiB**; encoding adds request overhead.
  SBOM uploads use raw serialized text instead.
- JSON tool responses are limited to **2 MiB**. Use the tool's `query` pagination
  and filters to narrow results; follow its schema because pagination varies.
- Supported binary downloads are limited to **1 MiB** before encoding. They
  return base64 text with `mimeType`, `encoding`, `sizeBytes`, and `data`.

Existing operation-specific limits and rate limits also apply.

## Troubleshoot the connection

An HTTP success only confirms transport success. For application calls, inspect
MCP `isError` and the JSON text's `status` and `data` before treating an operation
as successful. If a failed write is ambiguous, refresh the affected data first.

| Symptom | What to check |
| --- | --- |
| Endpoint missing or connection fails | Confirm the host and `/api/mcp` path with your Aura administrator, and that the deployment includes MCP support. Use Streamable HTTP, not a legacy SSE connection. |
| Authentication fails (`401`, or `403` when the credential is missing or unrecognized) | Check the Bearer header and key, whether it was revoked, and whether its owner still belongs to an active workspace. Signing in through a browser does not authenticate this connection. |
| Tool permission or plan error | Check the key owner's current role, the target resource's workspace, and the plan's entitlements. Discovery does not grant access. |
| Wrong workspace data | Use a key created in the intended workspace; changing the browser's active workspace is not enough. |
| Origin rejected (`403`) or browser CORS failure | Clients normally omit `Origin`. If sent, it must exactly match Aura's canonical origin. Cross-origin browser access is not enabled; use a compatible MCP client rather than bypassing browser protections. |
| Request or result too large | Reduce file size, filters, or page size within the limits above. Base64 increases request size. |
| Documentation unavailable | Ask your administrator to check the configured public documentation source and its reachability. Documentation failure does not disable application tools or discovery. |
| Rate limited (`429`) | Wait before retrying reads and follow returned retry guidance. Check state before retrying any ambiguous write. |
| Service configuration unavailable (`503`) | Ask your Aura administrator to check the deployment configuration. |

## Help-only connection

For public help without workspace access, use a client that supports local
**stdio** servers. With Node.js and npm installed, configure it to launch:

```sh
npx -y @stellayazilim/mcp-starlight@0.2.1 https://docs.aura.linuscent.com
```

This local documentation server offers `search_docs`, `list_docs`, and `get_doc`
for public articles only. It needs **no Aura key** and cannot read or change a
workspace. Client configuration formats and tool inputs may differ from Aura's
authenticated connection; use its discovered schemas. The published
`mcp-catalog.json` file is a JSON catalog, **not an MCP endpoint**.

## Related articles

- [API ingestion](/integrations/api-ingestion/)
- [Workspace settings](/workspace-and-account/workspace-settings/)
- [Access and permissions](/workspace-and-account/access-and-permissions/)
- [Upload an SBOM](/sbom/upload-sbom/)
- [VEX decisions](/risks/vex-decisions/)
