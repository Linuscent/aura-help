---
title: Understanding Findings
description: Understand security findings displayed in the Aura Risks Center.
sidebar:
  order: 1
---
Aura Risks Center provides a view of security findings identified from
product releases.

Findings are generated from analyzed release data and may include
vulnerability, policy, and license-related observations.

## Finding Categories

Risk findings may include:

-   Vulnerabilities
-   Policy observations
-   License observations

## Finding Information

A finding may include:

-   Component affected
-   Vulnerability identifier
-   Severity
-   Available assessment information
-   Response or justification data when available

## Reading the Risks page

At the top of the Risks page, **Vulnerability groups by severity** shows a
coloured bar for the vulnerability groups currently loaded. It counts the loaded
page only, before search or view filters. It is not a release-wide total; the
release overview shows the release totals.

Use **All**, **Vulnerabilities**, **Policy** and **License** to change the view.
Each vulnerability group shows its identifier, a short summary and its severity.
Groups marked **Known exploited** are reported as exploited in the wild.

Select a group to inspect it. Long advisory text is shortened; select **Show
full advisory** to read all of it, and **Show less** to collapse it again.

## Important Note

Severity indicates the classified impact level of a finding. Severity
alone does not establish exploitability, reachability, or final risk
acceptance status.

## Related articles

- [Vulnerability Severity](/risks/vulnerability-severity)
- [Evidence Overview](/evidence/overview)
