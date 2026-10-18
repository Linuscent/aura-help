---
title: Create a product
description: Create a new product in an Aura workspace.
sidebar:
  order: 2
---
## About products

Create a product before uploading an SBOM.

A product is used to organise its releases, SBOMs, inventory, and related security information.

## Before you begin

You need:

- access to an Aura workspace;
- permission to create products in that workspace.

## Create your first product from Home

In deployments with current onboarding, Home immediately displays **Create your first product** when the active workspace is empty. There is no introductory screen or **Skip** action.

1. Enter a **Product name**.
2. Select **Create product**.
3. Select **Upload an SBOM**, or **Open product without SBOM** to open that exact saved product and return to uploading later.

The product is real and retained even if you close the upload dialog. A workspace with products, including products without releases, shows the normal Home overview instead of repeating this flow. If creation cannot be confirmed, inspect **Products** before trying to create it again.

## Create a product from Products

1. Sign in to Aura.
2. Open the workspace where you want to create the product.
3. Select **Products** from the navigation.
4. Select **New**.
5. In the **New Product** dialog, enter a product name.
6. Optionally enter a product description.
7. Select **Create Product**.

The new product appears in the product list.

Alternatively, **Import SBOM** in Home or Products opens the shared importer. Choose **New product**, enter its name, and select **Create product & import** after choosing a file. **Use suggested name** copies an available name from the SBOM only when you choose it; you can edit it before creating the product. The product is created before its SBOM is uploaded.

## What happens next?

After creating the product, open it to:

- upload an SBOM;
- create the product's first release;
- review release-level inventory;
- review related security information.

A release is not created when the product itself is created.

Every accepted SBOM upload creates a distinct release, even for the same file or version. Acceptance does not confirm completed analysis. Select **Open release overview** to open the exact saved release and review available results.

## Product naming

Choose a name that clearly identifies the software or product area represented by the product.

Use naming that remains understandable across engineering, security, product, and compliance teams.

## Related articles

- [Products and releases](/products-and-releases/overview/)
- [Product overview](/products-and-releases/product-overview/)
- [Upload an SBOM](/sbom/upload-sbom/)
