---
title: VEX Decisions
description: Understand how VEX decisions document vulnerability applicability and response.
sidebar:
  order: 4
---
## Understand vulnerability decisions

VEX decisions help teams document whether a vulnerability affects a
product and what action should be taken.

Distinguish an ordinary saved technical assessment from the richer VEX/VDR workflow. They do not have the same plan or permission requirements.

## Save a technical assessment

All plans, including Free, support the existing technical vulnerability assessment workflow: saved assessment decisions, justification, response information and suppression, subject to workspace and finding access.

To record an assessment, open the finding on the Risks page, select the affected
component, and choose **Draft assessment**. States use plain names: **Under
review**, **Exploitable**, **Not affected**, **False positive**, **Resolved** and
**Not set**. A justification is asked for only when you choose **Not affected**.

Use the available finding facts and product context to justify your decision. EPSS and known-exploited (KEV) information are available on all plans when supplied by the source. Unavailable scores or statuses remain unknown; do not interpret them as zero risk or a negative exploitation result.

Saving a technical assessment or changing suppression does not automatically create or export a VEX document. It also does not determine whether an incident or vulnerability is legally reportable.

## Use rich VEX/VDR workflows

The existing rich VEX/VDR workflows require Pro or Team and the applicable workspace, product, release and evidence permissions. Free technical triage does not unlock paid Compliance evidence, VEX/VDR exports or Trust Center publication.

## Decision Context

A VEX decision may include:

-   Applicability assessment
-   Justification
-   Response information

VEX workflows depend on available product and vulnerability data. Review unknowns and supporting evidence rather than treating a recorded decision as a security guarantee.

For separate human-led reportability assessments, see [How Aura supports CRA](/compliance/how-aura-supports-cra/). Check [Access and permissions](/workspace-and-account/access-and-permissions/) before assuming your plan grants access to a particular workflow.

## Related articles

- [Prioritizing Findings](/risks/prioritizing-findings/)
- [Remediation](/risks/remediation/)
- [Understanding Findings](/risks/understanding-findings/)
- [Evidence Overview](/evidence/overview/)
