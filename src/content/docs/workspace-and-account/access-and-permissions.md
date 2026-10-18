---
title: Access and Permissions
description: Understand how workspace access and permissions control what users can view and manage.
sidebar:
  order: 3
---
## Check your active workspace

Access and plan allowances belong to a workspace, not your account as a whole. Check the active workspace before creating a product, inviting someone, or reviewing protected information. Membership in one workspace does not grant access to another.

## Understand workspace roles

The standard roles have different responsibilities:

- **Owner** — manages workspace settings, billing and membership, as well as products. Owners also have the standard approval and management permissions for paid Compliance workflows.
- **Admin** — manages membership and products, with standard Compliance management and approval permissions when that feature is available. Admin status does not itself grant owner-only workspace settings, billing or Trust Center management.
- **Member** — can read and create products. When Compliance is available and the product is accessible, members can contribute evidence, propose applicability and create actions; this does not grant approval or workspace-management rights.

Owners and admins can manage access within their role's authority; an admin cannot grant the owner role. Individual features can also require product access or case participation. A plan enables capabilities, but it does not replace those authorization checks.

## Check workspace allowances

The standard plan allowances are:

| Allowance | Free | Pro | Team |
| --- | --- | --- | --- |
| Active products | 1 | 3 | Unlimited |
| Users | 1 | 3 | Unlimited |
| Active releases | Unlimited | Unlimited | Unlimited |

**Active** means unarchived. User seats count members plus unexpired pending invitations; accepting an invitation that already reserves a seat does not use a second seat.

Unlimited means no count ceiling for that allowance, not unlimited storage or request rates. Upload-size limits, permissions, retention, archive eligibility and other operational safeguards still apply. Dedicated deployments can have different configured allowances; check your workspace's current access and limits rather than assuming the standard table applies unchanged.

## Distinguish technical security access from paid workflows

All plans include saved technical vulnerability assessments, justification and suppression, plus EPSS and known-exploited (KEV) information when source data is available. Missing source information remains unknown, not zero or proof that a vulnerability is not exploited.

Paid Compliance, rich VEX/VDR workflows and Trust Center are separate Pro and Team capabilities with their own permission checks. Free technical triage does not unlock them. Confidential CRA Reporting is available on all plans, but its case permissions still apply and it does not grant access to paid resources.

See [VEX decisions](/risks/vex-decisions/) and [How Aura supports CRA](/compliance/how-aura-supports-cra/) for these distinctions.

## Related articles

- [Working With Your Team](/workspace-and-account/working-with-your-team/)
- [Workspace Settings](/workspace-and-account/workspace-settings/)
- [Workspace Overview](/workspace-and-account/workspace-overview/)
- [First steps in Aura](/getting-started/first-steps/)
