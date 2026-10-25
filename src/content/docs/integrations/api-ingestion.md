---
title: API Ingestion
description: Send CycloneDX SBOMs to an Aura product and handle upload receipts and workspace credentials safely.
sidebar:
  order: 2
---
Use Aura's SBOM upload API from an existing CI pipeline or another trusted
automation system. The same endpoint is used by repository workflows proposed
through Aura's GitHub.com and GitLab.com connections.

## Prepare an upload

Create or select an active product in the intended workspace. Obtain a personal
workspace API key through **Workspace settings → API keys**, and keep its value
in your automation platform's secret storage. Never commit the key to a
repository or paste it into a workflow file.

Send an HTTPS `POST` request to `/api/sbom/upload` on your Aura instance with:

- `Authorization: Bearer <AURA_API_KEY>`;
- `Content-Type: application/json`;
- `projectId`: the Aura product ID, not a GitHub or GitLab repository ID;
- `sbomContent`: the CycloneDX JSON or XML document encoded as a JSON string.

The request body must fit within the 10 MiB upload limit, including its JSON
envelope and escaping. A 10 MiB SBOM file may therefore be too large. Standard
workspace access, upload-rate and plan limits still apply.

## Interpret the result before retrying

A successful submission returns HTTP **202** with `status: "accepted"` and an
`upload` receipt containing the new release ID. This confirms acceptance, not
completed analysis.

Every accepted upload creates a new release, even for identical content or the
same declared version. If the request times out or the response is lost, inspect
the product's releases before repeating it. Do not configure blind upload
retries.

## Manage credential access

A personal workspace key acts with its owner's workspace permissions. It is
not restricted to SBOM uploads or to the product selected in your workflow.
Review who can read or use the secret in your CI platform.

Keys depend on their owner's continued workspace access and expire according
to their configured lifetime. Use **Account → API Keys** to inspect or revoke a
key. Revocation stops that key's access but does not delete already accepted
releases.

Aura's automatic repository setup can create and install a key for you, after
explicit consent. GitHub repository writers can access a repository secret
through other workflows, including before the setup pull request is merged.
See the provider guide for its exact trust requirements.

## Availability

The manual API and workflow references are shown in **SBOM Ingestion**.
Automatic repository setup additionally requires provider configuration by
your Aura administrator. It currently supports GitHub.com and GitLab.com, not
self-managed instances.

To use a compatible MCP client with workspace-scoped tools, see
[Connect an MCP client to Aura](/integrations/mcp-server/).

## Related articles

- [SBOM Ingestion](/integrations/sbom-ingestion/)
- [GitHub Actions Integration](/integrations/github-actions/)
- [GitLab CI Integration](/integrations/gitlab-ci/)
- [Upload an SBOM](/sbom/upload-sbom/)
