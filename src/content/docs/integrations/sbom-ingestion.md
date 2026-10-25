---
title: SBOM Ingestion
description: Learn how automated SBOM ingestion feeds product release analysis in Aura.
sidebar:
  order: 1
---
SBOM ingestion sends a Software Bill of Materials to an existing Aura product
and creates a release for analysis. You can upload a CycloneDX file manually,
send it through the API, or generate and upload it from your CI pipeline.

## Workflow

The general workflow is:

    SBOM file
        ↓
    Ingestion
        ↓
    Release creation
        ↓
    Component analysis

## Supported Data

SBOM ingestion can provide information about:

-   Components
-   Versions
-   Dependencies
-   Software relationships

## Important Note

An accepted upload creates the basis for analysis; it does not mean processing
has finished. Each accepted upload creates a distinct release, even when the
content or declared version is unchanged. If you lose the upload response or a
CI job times out, inspect the product's releases before trying again.

## Set up repository generation

When your Aura administrator has configured a provider, workspace owners and
admins can connect GitHub.com or GitLab.com under **SBOM Ingestion**. Select an
existing product and lockfile, preview the proposed files, then explicitly
authorize creating a workspace API key, installing a CI secret and opening a
pull or merge request. Aura does not merge it automatically.

Generation runs in your CI environment using sbomify; a sbomify account is not
required. The generated job runs on protected tags or a manual run on a
protected ref, not on every push. A repository connection does not change the
release-per-upload behavior.

:::caution[Review the credential trust boundary]
The generated credential is a personal, full-role workspace API key, not an
upload-only key. Every GitHub repository writer can access its repository
secret through another workflow, even before Aura's pull request is merged.
GitLab setup uses a protected CI variable and requires trusting maintainers and
actors able to run protected-ref pipelines. Read the provider guide before
authorizing setup.
:::

Connections are private to your Aura account in the workspace. **Disconnect**
does not revoke the upload key or remove the provider workflow/secret. To stop
uploads, revoke the specific key through **Account → API Keys**. Keys also stop
working on expiry or loss of the owner's required workspace access.

Automatic setup allows one setup per repository in each workspace, including a setup
that needs inspection. It does not currently create multiple product mappings
for the same repository. Ask your administrator to reconcile an existing setup
instead of trying to create a duplicate.

Aura accepts CycloneDX JSON/XML and SPDX 2.3 JSON. SPDX is converted for analysis; dependency relationships are not reconstructed, and some source details may be absent. Prefer CycloneDX when a complete dependency graph is important. An accepted upload creates a release but does not mean analysis is complete.

## Related articles

- [GitHub Actions Integration](/integrations/github-actions/)
- [GitLab CI Integration](/integrations/gitlab-ci/)
- [API Ingestion](/integrations/api-ingestion/)
- [Upload an SBOM](/sbom/upload-sbom/)
