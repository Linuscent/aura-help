---
title: GitHub Actions Integration
description: Learn how GitHub Actions can support automated security data collection for Aura.
sidebar:
  order: 3
---
Aura can be integrated into GitHub Actions workflows to support
automated security data collection.

This allows development workflows to connect software changes with
security analysis processes.

## Workflow

A typical workflow is:

    Code change
        ↓
    GitHub Actions workflow
        ↓
    SBOM generation or security data collection
        ↓
    Aura ingestion
        ↓
    Analysis

## Benefits

Using GitHub Actions integration helps teams:

-   Automate security workflows
-   Reduce manual data transfer
-   Keep product security information updated

## Requirements

The exact configuration depends on the GitHub workflow and Aura
integration settings.

## Related articles

- [API Ingestion](api-ingestion.md)
- [Notifications and Routing](notifications-and-routing.md)
- [SBOM Ingestion](sbom-ingestion.md)
- [Upload an SBOM](../sbom/upload-sbom.md)
