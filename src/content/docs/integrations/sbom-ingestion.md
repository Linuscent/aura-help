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

An uploaded SBOM creates the basis for analysis. Processing and
available results depend on the ingested data and Aura capabilities.

## Related articles

- [API Ingestion](/integrations/api-ingestion)
- [Upload an SBOM](/sbom/upload-sbom)
