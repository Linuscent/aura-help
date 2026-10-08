---
title: Projects and releases
description: Learn how Aura organises projects, SBOM uploads, and releases.
---

# Projects and releases

Aura organises software-security information around **projects** and **releases**.

A project is the main container for SBOM uploads and the security information derived from them.

Each successful SBOM upload creates a new release inside the project.

## How projects and releases fit together

The basic relationship is:

```text
Workspace
  ↓
Project
  ↓
Upload SBOM
  ↓
Release
  ↓
Inventory and analysis
```

A workspace can contain multiple projects.

A project can contain multiple releases.

## Project

A **project** represents the software or product area you want to track in Aura.

Projects help keep related:

- SBOM uploads;
- releases;
- software inventory;
- vulnerability findings;
- dependency information;
- license information;
- policy results

grouped together.

## Release

A **release** is created when an SBOM is successfully uploaded to a project.

Each upload creates a new release, including when another SBOM is uploaded for the same software version.

This allows Aura to keep release-specific inventory and security information over time.

## Typical workflow

A common workflow is:

1. Create a project.
2. Open the project.
3. Upload a supported SBOM.
4. Wait for Aura to process the upload.
5. Review the release when its status becomes **READY**.
6. Review inventory and security information associated with the release.
7. Upload another SBOM when you want to create another release.

## Related articles

- [Create a project](./create-project.md)
- [Project overview](./project-overview.md)
- [Releases](./releases.md)
- [Upload an SBOM](../sbom/upload-sbom.md)
