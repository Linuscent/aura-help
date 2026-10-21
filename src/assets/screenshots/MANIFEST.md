# Screenshot manifest

Captured from the authenticated Aura application (`https://aura.linuscent.com/`) for the Aura Help Center.

- **Application version:** not exposed in the Aura UI (no version or build identifier available).
- **Capture context:** desktop viewport 1440 × 900 CSS px (full-page where noted), `devicePixelRatio` 1, Light theme, application-only (no browser chrome or OS chrome).
- **Data:** synthetic data only — workspace **Linuscent - Team** (Team Trial), product **Example Product**, and a synthetic CycloneDX 1.5 SBOM of public open-source components. This is not a real security assessment.
- **Privacy:** account avatar initials were redacted in the workspace-shell images. No emails, tokens, credentials, or customer data are included.
- **Raw captures:** kept in the git-ignored `.playwright-mcp/` directory and not committed.

| File | Capture date | Route | Target documentation page | Description |
| --- | --- | --- | --- | --- |
| `getting-started/welcome-empty-workspace.png` | 2026-10-20 | `/` (empty-workspace onboarding) | `src/content/docs/getting-started/first-steps.md` §3 | “Welcome to Aura” empty-workspace onboarding page with the Create a workspace card. |
| `getting-started/create-workspace-form.png` | 2026-10-20 | `/` (Create workspace dialog) | `src/content/docs/getting-started/first-steps.md` §3 | Create workspace dialog: Workspace name, plan options (Free selected), and description. |
| `getting-started/create-product-form.png` | 2026-10-20 | `/` (workspace Home, empty workspace) | `src/content/docs/getting-started/first-steps.md` §4 | “Create your first product” form in the demo workspace. |
| `getting-started/sbom-import-preview.png` | 2026-10-20 | `/` (product page, Import an SBOM dialog) | `src/content/docs/getting-started/first-steps.md` §5 | Import dialog with the synthetic CycloneDX preview (five top-level component entries). |
| `getting-started/accepted-release.png` | 2026-10-20 | `/` (product page, accepted receipt) | `src/content/docs/getting-started/first-steps.md` §6 | Upload accepted receipt for release 1.0.0 with “Open release overview”. |
| `integrations/sbom-ingestion.png` | 2026-10-21 | `/integrations/ingestion` (full page) | `src/content/docs/integrations/sbom-ingestion.md` | SBOM Ingestion area: Connect a repository, Quick API Reference, and GitHub Actions workflow. |
| `compliance/trust-center.png` | 2026-10-21 | `/trust-center` (full page) | `src/content/docs/compliance/trust-center.md` | Trust Center portal: Publish/URL, tabs, Branding, Custom domain, Analytics (workspace-ID URL and avatar redacted). |
| `compliance/reporting-cases.png` | 2026-10-21 | `/reporting` (full page) | `src/content/docs/compliance/reporting.md` | Reporting cases queue with tabs and the empty state. |
| `compliance/reporting-new-case.png` | 2026-10-21 | `/reporting` (New case dialog) | `src/content/docs/compliance/reporting.md` | New reporting case form (Title, summary, manufacturer, product descriptors). |
| `products-and-releases/portfolio.png` | 2026-10-21 | `/dependencies/portfolio` (full page) | `src/content/docs/products-and-releases/portfolio.md` | Portfolio metrics and trend chart for the workspace scope. |
| `licenses-and-policies/licenses.png` | 2026-10-21 | `/dependencies/licenses` (full page) | `src/content/docs/licenses-and-policies/licenses.md` | Licenses view: license inventory, filter, and license table (avatar and upload ID redacted). |
| `inventory/components.png` | 2026-10-21 | `/dependencies/components` (full page) | `src/content/docs/inventory/components.md` | Components view: inventory table (Component, Type, Package ID, Risk, Details). |
| `inventory/dependency-graph.png` | 2026-10-21 | `/dependencies/graph` (full page) | `src/content/docs/inventory/dependency-graph.md` | Dependency Graph Explorer empty state. |
| `risks/understanding-findings.png` | 2026-10-21 | `/dependencies/risks` (full page) | `src/content/docs/risks/understanding-findings.md` | Risks page: severity bar, Risk Inspection filters, and findings list. |
| `evidence/evidence-overview.png` | 2026-10-21 | `/compliance` (full page) | `src/content/docs/evidence/overview.md` | Evidence page: authorized-release selector before a release is chosen. |
| `products-and-releases/products.png` | 2026-10-21 | `/dependencies/project` (full page) | `src/content/docs/products-and-releases/overview.md` | Products page: product list, New/Import SBOM actions, and filters. |
| `workspace-and-account/workspace-settings.png` | 2026-10-21 | `/workspaces/<id>/settings` (full page) | `src/content/docs/workspace-and-account/workspace-settings.md` | Workspace Settings General tab (workspace ID and avatar redacted). |

## Batch 1 (Team) notes

- The five `getting-started/` onboarding screenshots above were **preserved** as-is. They remain accurate because: (a) the empty-workspace “Welcome to Aura” and “Create your first product” states cannot be reproduced safely in the current Team account (which already has a product), and (b) the import/accepted-receipt dialogs are plan-agnostic. Their only Team-edition difference is the header plan badge (Free vs “Team Trial”), which is not material to the illustrated steps.
- `integrations/sbom-ingestion.png` was **newly captured** from the Team edition (full page) and its account avatar was redacted.

## Batch 2 (Team) notes

- `compliance/trust-center.png`, `compliance/reporting-cases.png`, `compliance/reporting-new-case.png`, and `products-and-releases/portfolio.png` were **newly captured** from the Team edition. The account avatar was redacted in all four; the Trust Center capture also had its public-URL workspace ID redacted. No cases were created/submitted, and no Trust Center settings were changed.

## Batch 3 (Licenses & Policies) notes

- `licenses-and-policies/licenses.png` was **newly captured** from the Team edition (`/dependencies/licenses`). The account avatar and the internal upload ID in the “License Inventory” header were redacted. No application data was changed.
- Policy features are not present in the current Team application, so `policy-results.md` and `reviewing-policy-findings.md` were left unchanged (they already state that policy features are unavailable).

## Batch 4 (Inventory, Risks, Evidence) notes

- `inventory/components.png`, `inventory/dependency-graph.png`, `risks/understanding-findings.png`, and `evidence/evidence-overview.png` were **newly captured** from the Team edition; the account avatar was redacted in all four. No application data or decisions were changed.

## Batch 5 (Products & Releases, Workspace & Account) notes

- `products-and-releases/products.png` and `workspace-and-account/workspace-settings.png` were **newly captured** from the Team edition. The account avatar was redacted in both, and the Workspace Settings capture also had its workspace ID redacted. No settings or data were changed. The Account page shows personal identity (name/email), so it is documented text-only with no screenshot.
