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

1. Open the finding on the **Risks** page and select the affected component.
   An advisory can affect more than one component; an assessment applies to the
   selected component and advisory in that release, not every occurrence.
2. Choose **Draft assessment**. Select **Under review**, **Exploitable**,
   **Not affected**, **False positive**, **Resolved** or **Not set**. A
   justification is asked for only when you choose **Not affected**.
3. Set the response and add your reasoning in **Details**. Details is an editable
   note, not a comment thread or decision history.
4. Choose **Save** and wait for confirmation. **Refresh assessment** reads the
   saved values; it does not save a draft. If the saved assessment changed,
   review the refreshed values and your draft before choosing Save again.

A missing Package URL does not by itself prevent assessment. Aura can identify
some findings exactly without it. If exact identification is unavailable or
ambiguous, you can inspect the facts but cannot save an assessment. Do not use
matching component names alone to assume two findings are the same.

Drafts are temporary and can be lost on reload or when the tab closes. If a save
is **unconfirmed**, inspect the current assessment before another explicit save:
the first request may already have succeeded. Cancel or discard affects the
draft, not an already saved decision.

## Review suppressed findings

Suppression removes a finding from the active Risks list; it does not remove the
component or prove that the vulnerability is fixed. **Audit Vulnerabilities** and
expanded **Components** include suppressed findings. Open the exact assessment
there to review or reverse suppression. An existing exact finding link can also
open a suppressed finding.

Use the available finding facts and product context to justify your decision. EPSS and known-exploited (KEV) information are available on all plans when supplied by the source. Unavailable scores or statuses remain unknown; do not interpret them as zero risk or a negative exploitation result.

Saving a technical assessment or changing suppression does not automatically
create Evidence or create or export a VEX document. It also does not determine
whether an incident or vulnerability is legally reportable.

## Retain a decision as Evidence

On Pro or Team, with the required Evidence access, choose **Review evidence**
from the exact finding. Use **Preview saved assessment for Evidence**, review
the saved values, confirm that you want to retain them, then choose **Capture
assessment as Evidence**.

This is a separate, explicit capture of the saved assessment, not your unsaved
draft. The snapshot remains unchanged when the current assessment changes. You
can select it as supporting Evidence for an internal release decision. Follow
the [Evidence workflow](/evidence/evidence-workflow/) for the complete steps.

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
