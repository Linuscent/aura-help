---
title: SBOM Ingestion
description: Learn how automated SBOM ingestion feeds product release analysis in Aura.
sidebar:
  order: 1
---
SBOM ingestion allows Aura to receive Software Bill of Materials data
for analysis.

An SBOM provides information about the software components included in a
release.

The **SBOM Ingestion** area provides Aura-native examples for ingesting SBOMs
through CI pipelines and direct API uploads.

![The SBOM Ingestion area showing the Connect a repository options, the Quick API Reference, and the GitHub Actions workflow.](../../../assets/screenshots/integrations/sbom-ingestion.png)

## Workflow

The general workflow is:

    SBOM file
        ↓
    Ingestion
        ↓
    Release creation
        ↓
    Component analysis

## Connect a repository

**Connect a repository** generates an SBOM in your own CI and proposes the
configuration in a pull or merge request. Aura never builds your source or
merges the change.

Connections are private to your Aura account and workspace:

- **GitHub** requires repository administrator access.
- **GitLab.com** requires Maintainer access and the OAuth API scope to create
  files, merge requests, and protected CI variables.

In the current environment, both **GitHub** and **GitLab.com** show
**Unavailable**. These connections require an administrator to configure the
GitHub App (or GitLab.com OAuth) and repository encryption on the Aura server.
They are not active until that configuration is completed.

**Disconnect** only stops Aura from accessing the provider. To stop ingestion,
revoke the setup key in **Account → API Keys**, or remove its CI secret and
workflow.

## Quick API Reference

The API reference documents the direct upload endpoint:

- **Endpoint:** `POST /api/sbom/upload`
- **Authentication:** `Authorization: Bearer <AURA_API_TOKEN>`
- **Required body fields:**
  - `projectId` — the Aura project ID;
  - `sbomContent` — the CycloneDX JSON/XML or SPDX 2.3 JSON file contents as a
    string.

SPDX JSON is converted for analysis; some relationship and custom-license detail
may be absent.

## GitHub Actions

The **GitHub Actions** section provides a reference workflow for GitHub
pipelines that uploads an SBOM to Aura on push to `main`:

```yaml
name: Upload SBOM to Aura

on:
  workflow_dispatch:
  push:
    branches: [main]

jobs:
  upload-sbom:
    runs-on: ubuntu-latest
    env:
      AURA_API_TOKEN: ${{ secrets.AURA_API_TOKEN }}
      AURA_BASE_URL: https://<AURA_HOST>
      AURA_PROJECT_ID: <AURA_PROJECT_ID>
      SBOM_FILE_PATH: sbom.cdx.json
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Build upload payload
        id: payload
        run: |
          sbomContent=$(jq -Rs . < "$SBOM_FILE_PATH")
          payload=$(jq -n --arg projectId "$AURA_PROJECT_ID" --argjson sbomContent "$sbomContent" '{ projectId: $projectId, sbomContent: $sbomContent }')
          echo "payload=$payload" >> "$GITHUB_OUTPUT"

      - name: Upload SBOM to Aura
        run: |
          curl --fail --show-error --silent -X POST "$AURA_BASE_URL/api/sbom/upload" -H "Authorization: Bearer $AURA_API_TOKEN" -H "Content-Type: application/json" --data "$PAYLOAD"
        env:
          PAYLOAD: ${{ steps.payload.outputs.payload }}
```

Replace `<AURA_HOST>`, `<AURA_PROJECT_ID>`, and the SBOM file path with your own
values, and store the API token as a GitHub secret.

## Supported Data

SBOM ingestion can provide information about:

-   Components
-   Versions
-   Dependencies
-   Software relationships

## Important Note

An uploaded SBOM creates the basis for analysis. Processing and
available results depend on the ingested data and Aura capabilities.

Aura accepts CycloneDX JSON/XML and SPDX 2.3 JSON. SPDX is converted for analysis; dependency relationships are not reconstructed, and some source details may be absent. Prefer CycloneDX when a complete dependency graph is important. An accepted upload creates a release but does not mean analysis is complete.

## Related articles

- [API Ingestion](/integrations/api-ingestion)
- [Upload an SBOM](/sbom/upload-sbom)
