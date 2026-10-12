---
title: First steps in Aura
description: Create your first Aura workspace and product, upload an SBOM, and review your first analysis.
sidebar:
  order: 4
---
This guide walks you through the basic Aura workflow, from creating an account to reviewing the results of your first SBOM upload.

At a high level:

```text
Create account
  ↓
Verify email
  ↓
Create workspace
  ↓
Choose workspace plan
  ↓
Create product
  ↓
Upload SBOM
  ↓
Aura creates a release
  ↓
Review results
```

## Before you begin

To complete this guide, you need:

- an Aura account;
- access to a verified email address;
- a CycloneDX SBOM in JSON or XML format.

## 1. Create your account

On the Aura sign-up page:

1. Enter your name.
2. Enter your email address.
3. Create and confirm your password.
4. Accept the Terms & Conditions and acknowledge the Privacy Policy.
5. Complete the human verification check.
6. Select **Create account**.

Aura is provided for business use.

## 2. Verify your email

After creating your account, Aura asks you to verify your email address.

Open the verification message sent to your email address and complete the verification process.

If you did not receive the message, you can request another verification email from the verification page.

## 3. Create a workspace

After signing in for the first time, Aura displays the **Welcome to Aura** page.

A workspace contains your products, releases, SBOMs, and related security information.

Select **Create workspace**.

Enter:

- **Workspace name** — a name for the workspace;
- **Plan** — select one of the available workspace plans;
- **Description** — an optional description of the workspace.

Select **Create workspace**.

Aura creates the workspace and switches you to it automatically.

## 4. Create your first product

From the main navigation, select **Products**.

Select **New**.

In the **New Product** dialog:

1. Enter a product name.
2. Optionally enter a product description.
3. Select **Create Product**.

The product appears in the product list.

A product is used to organise its releases, SBOMs, and related security data.

## 5. Upload your first SBOM

Open the product you created.

Select **Upload SBOM**.

Aura accepts supported CycloneDX SBOM files in:

- JSON;
- XML.

Choose or drag your SBOM file into the upload dialog, then select **Upload SBOM**.

Each successful SBOM upload creates a new release for the product, including when another SBOM is uploaded for the same software version.

## 6. Wait for the release to be processed

After the upload, Aura processes the SBOM and creates the corresponding release.

When processing completes, the release status changes to:

**READY**

The release can then be used throughout Aura for inventory, vulnerability, dependency, license, policy, and reporting views.

## 7. Review your first results

After processing completes, Aura displays a summary of the release.

The summary can include metrics such as:

- Critical vulnerabilities;
- High vulnerabilities;
- Policy violations;
- Components.

From the release view, you can continue to areas such as:

### Inventory

- Components
- Dependency Graph

### Risk

- Risks

### Compliance

- Licenses
- Evidence

You can also review other release-related security information available in your workspace.

## What happens next?

Your SBOM is now associated with a release in Aura.

You can continue by reviewing:

1. the components identified in the SBOM;
2. vulnerability findings;
3. dependency relationships;
4. license information;
5. policy findings;
6. the security posture of the release.

You can upload another SBOM later to create another release and review how the product changes over time.

## Manual and automated SBOM ingestion

Manual SBOM upload is available from a product and is useful when getting started or testing Aura.

The **SBOM Ingestion** area is intended for automated ingestion workflows, including API and CI/CD integrations.

See:

- [SBOM ingestion](../integrations/sbom-ingestion.md)
- [API ingestion](../integrations/api-ingestion.md)
- [GitHub Actions](../integrations/github-actions.md)

## Troubleshooting

If Aura rejects your SBOM or cannot process it, see:

- [Troubleshoot an SBOM](../sbom/troubleshoot-sbom.md)
- [SBOM upload errors](../troubleshooting/sbom-upload-errors.md)
- [SBOM validation errors](../troubleshooting/sbom-validation-errors.md)

## Related articles

- [Key concepts](key-concepts.md)
- [What is Aura?](what-is-aura.md)
- [Products and releases](../compliance/overview.md)
