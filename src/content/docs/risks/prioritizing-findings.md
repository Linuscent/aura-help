---
title: Prioritizing Findings
description: Learn how to prioritize findings using severity, component context, and product impact.
sidebar:
  order: 3
---
Prioritizing findings helps teams focus remediation efforts on the most
important security issues.

## Considerations

When reviewing findings, consider:

-   Severity level
-   Affected component
-   Product context
-   Available assessment information
-   Business impact

## Start from Fix first on Home

**Home** shows a **Fix first** list of up to eight vulnerabilities from your
products' latest releases. Aura orders them by severity, then known
exploitation, then exploit likelihood (EPSS) when available for your workspace,
then the number of affected products. Each vulnerability appears once, with the
products it affects.

The list is built from a limited set of results for each release, so treat it as
a starting point rather than a complete ranking. Open a row to review the
finding on the Risks page, then decide using the considerations above. See
[Workspace Overview](/workspace-and-account/workspace-overview/) for how the list
connects to the numbered markers on each product drawing.

## Risk Review

Aura provides security context to support review decisions. Teams should
evaluate findings based on their own security processes and
requirements.

## Related articles

- [Vulnerability Severity](/risks/vulnerability-severity)
- [VEX Decisions](/risks/vex-decisions)
- [Understanding Findings](/risks/understanding-findings)
- [Evidence Overview](/evidence/overview)
- [Workspace Overview](/workspace-and-account/workspace-overview/)
