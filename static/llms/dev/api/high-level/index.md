---
title: High Level API
sidebar_position: 1
sidebar_label: Overview
description: The Ovok platform API on the dev tier — auth, projects, content, billing, devices, signals.
---

# High Level API

The convenience layer that sits in front of the FHIR data plane.
Platform concepts — projects, members, billing, content, devices,
signals — exposed as a coherent REST surface.

<ApiBase inline={false} />

## Areas

- **[AI Translation](/dev/api/high-level/ai-translation/translation-controller-translate)** — 1 endpoint
- **[Authentication](/dev/api/high-level/authentication/auth-me-controller-get-user-profile)** — 5 endpoints
- **[Authentication - B2B](/dev/api/high-level/authentication-b-2-b/auth-b-2-b-login-controller-login)** — 2 endpoints
- **[Authentication - Session Management](/dev/api/high-level/authentication-session-management/auth-session-controller-find-all)** — 2 endpoints
- **[Bots - Execute a custom script](/dev/api/high-level/bots-execute-a-custom-script/bots-controller-exec-bot-by-identifier-post)** — 1 endpoint
- **[CMS Public Delivery](/dev/api/high-level/cms-public-delivery/public-delivery-controller-get-item-v-1)** — 2 endpoints
- **[Content](/dev/api/high-level/content/content-proxy-controller-proxy-get)** — 14 endpoints
- **[Document](/dev/api/high-level/document/document-controller-delete-document)** — 7 endpoints
- **[Localization](/dev/api/high-level/localization/locale-controller-get-locale)** — 2 endpoints
- **[Localization Keys](/dev/api/high-level/localization-keys/localization-controller-delete-localization)** — 7 endpoints
- **[Organization Code Information](/dev/api/high-level/organization-code-information/organization-code-controller-get-organization-code)** — 2 endpoints
- **[Partner](/dev/api/high-level/partner/partner-controller-health-check-0)** — 4 endpoints
- **[Tenant Authentication](/dev/api/high-level/tenant-authentication/tenant-patient-auth-controller-finish-login)** — 7 endpoints

## Tier

You're viewing the **dev** tier. Switch tiers from the navbar to
see the equivalent docs for another release surface.

The machine-readable spec for this tier is at
[`/openapi/dev-public.yaml`](pathname:///openapi/dev-public.yaml).
