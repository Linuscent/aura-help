---
title: Connect an MCP client to Aura
description: Choose OAuth or a workspace API key to connect an MCP client, read Aura data, and safely manage supported workflows.
sidebar:
  order: 6
---

## Before you connect

Aura's Model Context Protocol (MCP) server lets a compatible client work with
your workspace. You need an Aura deployment that includes MCP support, access
to the workspace, and a client that supports **Streamable HTTP**. Ask your
administrator whether OAuth connection and the updated MCP transport are
available on your deployment; do not assume every deployment includes them.

This connection can read and change workspace data. If you only want public
help articles, use the separate [help-only connection](#help-only-connection).

The [dashboard Assistant](/getting-started/dashboard-assistant/) is a separate
browser-session feature for deployments that include it; it needs no personal
API key or external client. It follows the active workspace and requires
server-enforced confirmation for supported changes. This MCP connection remains
bound to its selected workspace, and its confirmation policy remains controlled
by your client. The Assistant does not change this connection's capabilities.

## Choose how to connect

| Method | Choose it when | Endpoint |
| --- | --- | --- |
| OAuth | Your administrator has configured an approved, pre-registered app and your client supports that setup. You sign in to Aura and approve one workspace. | `https://<your-aura-host>/api/mcp/oauth` |
| API key | Your client supports custom authorization headers. You want a key with **Read only** or **Read and write** access. | `https://<your-aura-host>/api/mcp` |

Replace the host placeholder with your Aura deployment's host. These endpoints
are distinct: do not send an API key to the OAuth endpoint or use OAuth
credentials at the API-key endpoint. OAuth is not automatic support for every
MCP client, and it does not provide a read-only access choice.

### Connect with OAuth

Use these steps only when your administrator confirms the updated deployment
and approved app are available.

1. Start a remote MCP connection in your app with
   `https://<your-aura-host>/api/mcp/oauth` and its pre-registered OAuth settings.
2. Follow the app's sign-in flow to Aura. Check the app name and the account you
   are signed in with.
3. Explicitly choose **one workspace**, even if only one is listed. Nothing is
   preselected. This does not switch your active workspace in the Aura website.
4. Review the access before selecting **Approve access**. **Full MCP access**
   includes permitted reads and writes through current tools and tools Aura
   adds later. Every request remains limited by your current role, resource
   permissions, and workspace plan. Human-only dashboard actions stay excluded.
5. If offered, decide whether to select **Stay connected for up to 30 days**.
   This optional checkbox starts unchecked. With it off, the app may need you to
   reconnect soon. You can remove access at any time.
6. Return to the app and let it finish connecting and discovering tools. Approval
   recorded in Aura does **not** prove the app finished connecting. Try a
   read-only call to `projects_list` with arguments `{}` to list Products in the
   selected workspace; an empty list can be valid.

The app stays bound to the approved workspace. Switching workspaces in your
browser does not retarget it; start a new connection and approval to choose a
different workspace. Signing out of the Aura website does **not** disconnect
the app. See [Authorized apps](/workspace-and-account/account/#authorized-apps)
to review status, understand replacement approvals, or remove access.

Enable and review your client's write confirmations before using change tools.
Aura does not ask you to confirm each external MCP change.

### Connect with an API key

1. Open **Account → API Keys → Create API key** in Aura.
2. Choose the workspace the client should access, name the key, and choose its
   expiry. Use **Read only** for inspection, or **Read and write** for supported
   mutations within your own permissions. Copy the secret when it is shown;
   it is shown only once. The Workspace Settings shortcut can preselect a
   workspace, but key management is in Account.
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

The API-key endpoint does not accept OAuth sign-in credentials. Browser session
cookies and the `X-Api-Key` header are not authentication fallbacks.

Store the key in your client's secret store or supported environment-variable
mechanism. Never put it in a URL, prompt, source file, shared configuration, or
screenshot. Revoke it in Aura if it is exposed or no longer needed.

### Check API-key workspace and permissions

The key is bound to the workspace selected when it was created. Switching workspaces
in your browser does **not** retarget the connection. Use a key created for the
intended workspace instead.

Each key has a fixed workspace and an access level. **Read only** keys cannot
perform mutations, even when their owner can. **Read and write** keys remain
limited by their owner's live role and permissions. There are no individual
MCP-tool scopes. Every call checks access, including applicable resource,
role, and plan restrictions. Revoking the key, removing its owner from the
workspace, or archiving the workspace prevents further access. A tool appearing
in discovery does **not** mean your key is authorized to use it.

## Check transport compatibility

On deployments with the updated transport, both endpoints support MCP
**2026-07-28** and older initialization-based protocol versions. Use a client
that accepts both **JSON** (`application/json`) and **SSE** (`text/event-stream`)
responses over Streamable HTTP. Older initialization-based clients receive SSE
responses where earlier Aura versions returned JSON, so JSON-only response
handling must be updated.

SSE responses on these endpoints are **not** the old separate HTTP+SSE transport.
There is no separate `/sse` endpoint or standalone event-stream connection to
configure. Protocol support alone is not proof that a particular ChatGPT,
Claude, or other client setup has completed a working connection.

### For administrators: configure an approved app

OAuth requires pre-registration by the Aura administrator. Aura does not offer
open dynamic client registration (DCR) or Client ID Metadata Documents (CIMD);
clients cannot register themselves automatically. Use the client's
provided/pre-registered OAuth setup, not automatic registration.

Server configuration uses `AURA_OAUTH_CLIENTS` and the named
`AURA_OAUTH_<ALIAS>_CLIENT_ID`, `_AUTH_METHOD`, `_REDIRECT_URIS`, optional `_NAME`,
and, for confidential clients, `_CLIENT_SECRET` settings. Configure the exact
callback URLs supplied by that client's setup, not a guessed universal callback.
Keep server secrets in server secret management and the client's secure
credential entry, never shared configuration. Apply settings with a full Aura
server restart; there is no registration CLI or administrator sign-in flow.

Consult the official [ChatGPT connection setup](https://developers.openai.com/apps-sdk/deploy/connect-chatgpt),
[OpenAI pre-registered MCP authentication settings](https://developers.openai.com/plugins/build/plugins#configure-mcp-authentication),
and [Claude custom connector setup](https://claude.com/docs/connectors/custom/add-unlisted)
with its [OAuth authentication guidance](https://claude.com/docs/connectors/building/authentication).
Client interfaces and account policies vary. These references are setup guidance,
not certification or confirmation of a tested production connection.

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

### Read the workspace overview or a release

Call `dashboard_insights` with arguments `{}` to read the overview for the
connection's bound workspace. It does not accept a `query` object, a Product or
release selection, a scope, or a time window.

For release-specific results, use the analysis tools instead:

| Tool | Example arguments | Use |
| --- | --- | --- |
| `analysis_graph` | `{"query":{"projectId":"<release-id>"}}` | Read release metrics. Despite its name, this tool does not return graph topology. |
| `analysis_trends` | `{"query":{"projectId":"<release-id>","days":30}}` | Read release metric trends over 7, 30, or 90 days. |
| `analysis_findings` | `{"query":{"projectId":"<release-id>","pageNumber":1,"pageSize":25}}` | Read a page of release findings. |

Replace `<release-id>` with an Aura release ID, not a Product ID. Use
`release_graph` for dependency graph topology; check its discovered schema for
arguments. Existing role and plan restrictions still apply.

After upgrading Aura, refresh your client's discovered tools using `tools/list`
or its tool-refresh/reconnect action. Clients that cache the previous schema may
still send retired `dashboard_insights` arguments such as `query.projectId`,
`query.days`, or `query.scope`; these calls now fail input validation. Refresh
discovery and send `{}` for the workspace overview, or choose a release-analysis
tool for release details. Update client templates or saved requests before
replaying calls that use the old arguments.

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
target, and arguments before approving. A connection with broad permissions can
make significant changes, including adding members, archiving Products, or publishing
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
| Endpoint missing or connection fails | Confirm the host, deployment availability, and correct path with your Aura administrator: `/api/mcp/oauth` for OAuth or `/api/mcp` for an API key. Use Streamable HTTP with JSON and SSE response support, not a legacy separate SSE connection. |
| API-key authentication fails (`401`, or `403` when the credential is missing or unrecognized) | Check the Bearer header and key, whether it was revoked, and whether its owner still belongs to an active workspace. Signing in through a browser does not authenticate this connection. |
| OAuth request denied | **Deny** approves no new access and leaves existing authorizations unchanged. If you intended to connect, start again from the app and review the new request. |
| OAuth app cannot register or is not approved | Ask your Aura administrator to configure the pre-registered app and its exact callback URLs. Automatic registration through DCR or CIMD is not supported. |
| OAuth authorization expired or removed | Start again from the app for a new explicit approval. Check [Authorized apps](/workspace-and-account/account/#authorized-apps) first if the status is uncertain. |
| Tool permission or plan error (`403`) | Check the current role, target resource's workspace, and plan entitlements; for API keys, also check the access level. Read-only keys cannot perform mutations. Discovery does not grant access, and reconnecting OAuth does not fix a permission denial. |
| `dashboard_insights` rejects previously valid arguments | Refresh discovered tool schemas and call it with `{}`. Use the release-analysis tools for release selection and trends; see [Read the workspace overview or a release](#read-the-workspace-overview-or-a-release). |
| Wrong workspace data | For OAuth, reconnect from the app and explicitly approve the intended workspace. For API keys, use a key created for that workspace. Changing the browser's active workspace is not enough. Remove any unwanted authorization separately. |
| Origin rejected (`403`) or browser CORS failure | Clients normally omit `Origin`. If sent, it must exactly match Aura's canonical origin. Cross-origin browser access is not enabled; use a compatible MCP client rather than bypassing browser protections. |
| Request or result too large | Reduce file size, filters, or page size within the limits above. Base64 increases request size. |
| Documentation unavailable | Ask your administrator to check the configured public documentation source and its reachability. Documentation failure does not disable application tools or discovery. |
| Rate limited (`429`) | Wait before retrying reads and follow returned retry guidance. Check state before retrying any ambiguous write. |
| Service configuration unavailable (`503`) | Ask your Aura administrator to check the deployment configuration or service availability. Do not repeatedly reauthorize: new approval does not repair a service failure. |

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

- [Account](/workspace-and-account/account/)
- [Billing and invoices](/workspace-and-account/billing/)
- [Use the dashboard Assistant](/getting-started/dashboard-assistant/)
- [API ingestion](/integrations/api-ingestion/)
- [Workspace settings](/workspace-and-account/workspace-settings/)
- [Access and permissions](/workspace-and-account/access-and-permissions/)
- [Upload an SBOM](/sbom/upload-sbom/)
- [VEX decisions](/risks/vex-decisions/)
