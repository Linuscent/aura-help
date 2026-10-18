---
title: GitLab CI Integration
description: Connect GitLab.com, review an SBOM pipeline merge request, and manage protected upload credentials.
sidebar:
  order: 4
---

Aura can propose a GitLab CI job that generates a CycloneDX SBOM with sbomify and
uploads it to an existing Aura product. Generation runs on your GitLab runner.
Aura does not build your source or merge the change. You do not need a sbomify
account.

## Check requirements

You need an Aura workspace owner or admin account, an existing active product,
and **Maintainer** access to the GitLab.com project. Your Aura administrator must
configure a confidential GitLab.com OAuth application. This flow does not
support self-managed GitLab instances.

The project must have a supported lockfile on its default branch and a runner
that supports the generated container job. Private package access and generator
requirements may need additional CI configuration.

The default `.gitlab-ci.yml` must be suitable for a safe automatic edit. Setup
rejects custom CI paths, root `workflow` rules, aliases, custom YAML tags and
other ambiguous configuration. If the root file already includes other CI
files but has no explicit `stages` list, setup asks you to configure it manually
or declare the complete stage list first. This avoids overriding stages defined
by an included file.

If GitLab.com shows **Unavailable** in **SBOM Ingestion**, ask your Aura
administrator to configure the connection. You can still adapt the manual
GitLab reference shown below the repository setup area.

## Understand permissions and credentials

GitLab authorization requests the `api` scope to manage repository files, merge
requests and protected CI variables. This is broader than access to one project.
Connecting GitLab is separate from signing in to Aura.

:::caution[Use a project whose maintainers you trust]
Aura creates a normal personal workspace API key with your workspace
permissions, not a product-scoped or upload-only credential. It installs the key
as a masked, hidden, protected project CI variable.

Trust the project's maintainers and actors who can run eligible protected-ref
pipelines with that access. Masking is not a security boundary against a
workflow intentionally sending a credential elsewhere.
:::

Protected variables require an eligible protected ref. Configure protected tags
or branches before running the generated job.

## Connect and review the pipeline

1. Select your workspace and open **SBOM Ingestion** in Aura.
2. Under **Connect a repository**, select **Connect GitLab.com** and review the
   GitLab authorization request.
3. Under **Propose an ingestion workflow**, select GitLab.com, the repository
   and the existing Aura product.
4. Enter a supported **Lockfile path**, such as `package-lock.json` or
   `services/api/uv.lock`. Use a repository-relative path without parent
   directories or wildcards.
5. Select a **Workspace API-key lifetime** of 30, 90 or 365 days, then select
   **Preview file changes**.
6. Review `.gitlab/ci/aura-sbom.yml` and the proposed include/stage changes to
   `.gitlab-ci.yml`. Previewing creates no key and makes no provider changes.
7. Read the key warning, check the consent box, then select
   **Create secret and open PR/MR**. Aura provisions the CI variable and opens a
   merge request.
8. Select **Review PR/MR**. Review all affected and included CI configuration
   before merging it yourself. Existing included workflow rules can still block
   the intended pipelines even when automatic editing succeeds.

Connection and setup records belong to your Aura account in this workspace.
Changing accounts or workspaces clears the local setup form. If the repository
changes or the preview expires, generate another preview before proceeding.

## Run and verify an upload

The generated job uses a pinned sbomify container. It runs for a protected tag
or a manually started **web pipeline** on a protected ref. It is not a job for
every push or an untrusted merge-request pipeline. The job and lockfile must
exist at the selected ref.

A successful upload receipt means **accepted for analysis**, not completed
analysis. Each accepted upload creates a distinct Aura release, including a
repeat of the same content or version. Do not automatically retry a timed-out
or uncertain upload: inspect the product's release list first.

## Recover or stop ingestion

Read failures expose retry controls. If provisioning is interrupted, Aura clears
the preview and shows **Inspection required**. Use **Inspect**, then check the
merge request, branch, CI variable and listed Aura key. Aura attempts to revoke
the new key after a failure, so an existing merge request does not prove its
credential still works. Automatic replacement of failed setups is not
supported; ask your Aura administrator to reconcile the result.

Use **Account → API Keys** to manage the setup's key. It expires after the chosen
lifetime and depends on the owner's continued workspace access; there is no
automatic renewal.

**Disconnect** removes Aura's provider connection but leaves the CI variable,
workflow, merge request and Aura key in place. It does not stop an existing
pipeline from uploading. Revoke the specific Aura key to stop its access and
remove the GitLab workflow/variable separately if needed. Revoke the OAuth
authorization in GitLab account settings if you also want to withdraw that grant.

## Related articles

- [GitHub Actions Integration](/integrations/github-actions/)
- [SBOM Ingestion](/integrations/sbom-ingestion/)
- [API Ingestion](/integrations/api-ingestion/)
- [Upload an SBOM](/sbom/upload-sbom/)
