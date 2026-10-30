---
title: Compliance Overview
description: Understand how Aura supports evidence-based cybersecurity compliance workflows.
sidebar:
  order: 1
---
Aura helps teams organize cybersecurity information and evidence needed
to support compliance workflows.

Compliance activities in Aura are connected to product security
information, including:

-   Products and releases
-   Components
-   Vulnerabilities
-   Evidence
-   Security decisions

## Compliance Workflow

A typical workflow is:

```mermaid
flowchart LR
    subgraph analyse["Analyse and evidence"]
        direction TB
        A[Product Security Data] --> B[Analysis] --> C[Evidence Collection]
    end
    subgraph review["Review and support"]
        direction TB
        D[Review] --> E[Compliance Support]
    end

    analyse --> review
```

## Important Note

Aura supports compliance activities and evidence management. It does not
automatically certify a product or replace formal conformity
assessments.

## Related articles

- [Cyber Resilience Act (CRA) Overview](/compliance/cra-overview)
- [Evidence Overview](/evidence/overview)
