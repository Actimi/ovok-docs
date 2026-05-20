---
title: "[Early Access] Wearable webhook subscription verification"
sidebar_label: "[Early Access] Wearable webhook subscript…"
description: "**Early Access** — interfaces may change without notice."
---

# [Early Access] Wearable webhook subscription verification

**Available paths**

- <span className="api-method get">GET</span> `/v1/wearables/{provider}/webhook`

<ApiBase inline={false} />

**Early Access** — interfaces may change without notice.

Verification handshake endpoint. Some providers (notably Strava) prove they own the callback URL by GETting it with a `hub.challenge` parameter and a `hub.verify_token` we agreed on at subscription time. We echo the challenge back if the verify token matches the platform-wide `WEARABLES_WEBHOOK_VERIFY_TOKEN` environment variable.

You will hit this endpoint only when **first registering** a webhook subscription with the provider (e.g. via Strava's `POST /api/v3/push_subscriptions`). After that, the provider POSTs events to the same path — see [Wearable webhook ingress] below.

### Example response

```json
{ "hub.challenge": "<echoed verbatim>" }
```

Returns `400` when the token does not match.


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `provider` | path | `string` | **yes** | Wearable provider slug. Verification handshake is currently used by `strava`. |
| `hub.verify_token` | query | `—` | **yes** | Verify token agreed with the provider at subscription time. Must equal `WEARABLES_WEBHOOK_VERIFY_TOKEN`. |
| `hub.challenge` | query | `—` | **yes** | Provider-supplied challenge string. Echoed back verbatim on a successful match. |



## Responses

| Code | Description |
| --- | --- |
| `200` |  |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `OkResponseDto` (`application/json`)

Side-effect-only acknowledgement. Body is the literal `{ "ok": true }`.

- `ok`: `boolean` **(required)**
