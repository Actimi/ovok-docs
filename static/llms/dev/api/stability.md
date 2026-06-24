---
title: API stability
sidebar_position: 2
sidebar_label: API stability
description: Lifecycle status of every Ovok dev-tier endpoint — what's stable, what's early access, what's on the way out.
---

# API stability

Lifecycle status of every endpoint exposed on the **dev** tier. Anything not listed below is considered general availability — stable enough to build production integrations against.

## Stability levels

- **General availability** — covered by the standard release cadence. Breaking changes go through deprecation first.
- **Early Access** — works end-to-end, but the request / response shapes can change without a deprecation window. Safe to prototype against; not yet recommended for production criticality.
- **Deprecated** — still functional, scheduled for removal. Migrate to the replacement noted on the endpoint page.

## Summary

| Status | Endpoints |
| --- | --- |
| General availability | 93 |
| Early Access | 9 |
| Deprecated | 0 |

_Counts cover the **dev** tier. Switch tiers from the navbar to see the equivalent stability map for another release surface._

## Detail

### Early Access

| Endpoint | Method | Tag |
| --- | --- | --- |
| [Start a wearable OAuth flow](/dev/api/high-level/wearables-early-access/wearables-controller-start-connect-v-1) | `POST` `/v1/wearables/&#123;provider&#125;/connect` | Wearables (Early Access) |
| [Wearable OAuth callback](/dev/api/high-level/wearables-early-access/wearables-controller-oauth-callback-v-1) | `GET` `/v1/wearables/&#123;provider&#125;/callback` | Wearables (Early Access) |
| [Revoke a wearable connection](/dev/api/high-level/wearables-early-access/wearables-controller-revoke-v-1) | `DELETE` `/v1/wearables/&#123;provider&#125;/connections/&#123;patientId&#125;` | Wearables (Early Access) |
| [List wearable connections](/dev/api/high-level/wearables-early-access/wearables-controller-list-connections-v-1) | `GET` `/v1/wearables/connections` | Wearables (Early Access) |
| [Wearable webhook subscription verification](/dev/api/high-level/wearables-early-access/wearables-controller-webhook-verify-v-1) | `GET` `/v1/wearables/&#123;provider&#125;/webhook` | Wearables (Early Access) |
| [Wearable webhook ingress](/dev/api/high-level/wearables-early-access/wearables-controller-webhook-ingress-v-1) | `POST` `/v1/wearables/&#123;provider&#125;/webhook` | Wearables (Early Access) |
| [Read wearable credentials](/dev/api/high-level/wearables-early-access/wearable-credentials-controller-get-v-1) | `GET` `/v1/wearables/&#123;provider&#125;/credentials` | Wearables (Early Access) |
| [Set wearable credentials](/dev/api/high-level/wearables-early-access/wearable-credentials-controller-put-v-1) | `PUT` `/v1/wearables/&#123;provider&#125;/credentials` | Wearables (Early Access) |
| [Clear wearable credentials](/dev/api/high-level/wearables-early-access/wearable-credentials-controller-clear-v-1) | `DELETE` `/v1/wearables/&#123;provider&#125;/credentials` | Wearables (Early Access) |

### Deprecated

_No endpoints currently marked deprecated on this tier._
