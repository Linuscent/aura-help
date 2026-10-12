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

- [API Ingestion](/integrations/api-ingestion/)
- [Notifications and Routing](/integrations/notifications-and-routing/)
- [SBOM Ingestion](/integrations/sbom-ingestion/)
- [Upload an SBOM](/sbom/upload-sbom/)
