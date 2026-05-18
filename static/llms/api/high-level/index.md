---
title: High Level API
sidebar_position: 1
sidebar_label: Overview
description: The Ovok platform API — auth, projects, content, billing, devices, signals. The convenience layer that sits in front of the FHIR data plane.
---

# High Level API

The High Level API is the convenience layer that sits in front of the
FHIR data plane. It exposes platform concepts — projects, members,
billing, content, devices, signals — as a coherent REST surface so
applications don't have to assemble them out of raw FHIR resources.

<ApiBase inline={false} />

> Looking for raw FHIR access? See the [FHIR API](/api/fhir).

## Areas

- **[AI Translation](/api/high-level/ai-translation/translation-controller-translate)** — 1 endpoint
- **[Authentication](/api/high-level/authentication/auth-controller-refresh-token)** — 5 endpoints
- **[Authentication - B2B](/api/high-level/authentication-b-2-b/auth-b-2-b-login-controller-login)** — 2 endpoints
- **[Authentication - Session Management](/api/high-level/authentication-session-management/auth-session-controller-find-all)** — 2 endpoints
- **[Bots - Execute a custom script](/api/high-level/bots-execute-a-custom-script/bots-controller-exec-bot-by-identifier-post)** — 1 endpoint
- **[CMS](/api/high-level/cms/cms-controller-search-mapped-content)** — 8 endpoints
- **[Document](/api/high-level/document/document-controller-create-upload-credentials)** — 7 endpoints
- **[Localization](/api/high-level/localization/locale-controller-get-locale)** — 2 endpoints
- **[Localization Keys](/api/high-level/localization-keys/localization-i-18-next-controller-get-all-i-18-n)** — 7 endpoints
- **[Organization Code Information](/api/high-level/organization-code-information/organization-code-controller-send-email-of-organizations)** — 2 endpoints
- **[Partner](/api/high-level/partner/partner-controller-health-check-0)** — 4 endpoints
- **[Tenant Authentication](/api/high-level/tenant-authentication/tenant-practitioner-auth-controller-start-login)** — 7 endpoints

## How endpoints are documented

Each endpoint page lists:

- **Method + path** with a coloured method badge.
- **Parameters** — path, query, header and cookie, with types and requirements.
- **Request body** — content-type and schema summary.
- **Responses** — status code → description, from the spec.

The full machine-readable spec is at
[`/openapi/ovok-api-public.yaml`](pathname:///openapi/ovok-api-public.yaml).
