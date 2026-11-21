---
title: Evidence Review
description: Learn how to review evidence and use it to support internal security and compliance decisions.
sidebar:
  order: 3
---
Evidence review helps teams evaluate collected information against
security requirements.

## Review Process

During review, teams may:

-   Examine supporting information
-   Verify available data
-   Record findings or decisions

## Distinguish a snapshot from the current finding

A captured technical assessment is historical Evidence. Review its component,
advisory, assessment fields and capture attribution before using it. Capture time
and actor are not the original decision time and author.

Use **Inspect current finding** to compare it with the current assessment. A later
assessment change does not update the snapshot or an internal decision's retained
citation. If a new snapshot is needed, capture it explicitly after reviewing the
saved assessment; do not assume the old record has refreshed.

See [Evidence Workflow](/evidence/evidence-workflow/) for capture and supporting
Evidence selection. Neither a snapshot nor its content hash proves that a finding
has been remediated.

## Review firmware advisory evidence

A release's firmware **Static advisory** has its own saved supporting evidence.
Check coverage, limitations, and the vulnerability snapshot capture time before
interpreting its observations. It compares with saved release results, not a new
vulnerability scan, and does not establish exploitability.

Expand an observation's **Evidence** to read numbered references, then use
**View E1 in all evidence** or **All evidence** to inspect the saved evidence.
Older advisories remain readable but may use **Show evidence** and lack grouped
observations or inventory counts. Do not infer missing details.

After a successful firmware replacement, the old advisory and its supporting
evidence are no longer accessible in the **Firmware Analysis** tab. Don't treat
those entries as separately captured Evidence or retained decision citations. See
[Analyze release firmware](/products-and-releases/firmware-analysis/) for the
review and replacement workflow.

## Compliance Context

Evidence supports compliance activities but does not replace formal
assessments, audits, or regulatory decisions.

The accuracy and completeness of evidence depends on the data available
in Aura and connected workflows.

## Related articles

- [Analyze release firmware](/products-and-releases/firmware-analysis/)
- [Evidence Workflow](/evidence/evidence-workflow)
- [Evidence Overview](/evidence/overview)
- [Compliance Overview](/compliance/overview)
