---
title: High Level API
sidebar_position: 1
sidebar_label: Overview
description: The Ovok platform API on the alpha tier — auth, projects, content, billing, devices, signals.
---

# High Level API

The convenience layer that sits in front of the FHIR data plane.
Platform concepts — projects, members, billing, content, devices,
signals — exposed as a coherent REST surface.

<ApiBase inline={false} />

## Areas

- **[AI Translation](/alpha/api/high-level/ai-translation/translation-controller-translate)** — 1 endpoint
- **[Authentication](/alpha/api/high-level/authentication/auth-me-controller-get-user-profile)** — 5 endpoints
- **[Authentication - B2B](/alpha/api/high-level/authentication-b-2-b/auth-b-2-b-login-controller-login)** — 2 endpoints
- **[Authentication - Session Management](/alpha/api/high-level/authentication-session-management/auth-session-controller-find-all)** — 2 endpoints
- **[Bots - Execute a custom script](/alpha/api/high-level/bots-execute-a-custom-script/bots-controller-exec-bot-by-identifier-post)** — 1 endpoint
- **[CMS (FHIR Legacy)](/alpha/api/high-level/cms-fhir-legacy/cms-controller-copy-single-content)** — 16 endpoints
- **[Document](/alpha/api/high-level/document/document-controller-delete-document)** — 7 endpoints
- **[Localization](/alpha/api/high-level/localization/locale-controller-get-locale)** — 2 endpoints
- **[Localization Keys](/alpha/api/high-level/localization-keys/localization-controller-delete-localization)** — 7 endpoints
- **[Organization Code Information](/alpha/api/high-level/organization-code-information/organization-code-controller-get-organization-code)** — 2 endpoints
- **[Partner](/alpha/api/high-level/partner/partner-controller-health-check)** — 4 endpoints
- **[Tenant Authentication](/alpha/api/high-level/tenant-authentication/tenant-patient-auth-controller-finish-login)** — 7 endpoints

## Stability

Not every endpoint is at the same release stage. The
[API stability](/alpha/api/stability) page lists everything tagged
**Early Access** or **Deprecated** on this tier so you can scope
production integrations cleanly.

## Tier

You're viewing the **alpha** tier. Switch tiers from the navbar to
see the equivalent docs for another release surface.

The machine-readable spec for this tier is at
[`/openapi/alpha-public.yaml`](pathname:///openapi/alpha-public.yaml).
