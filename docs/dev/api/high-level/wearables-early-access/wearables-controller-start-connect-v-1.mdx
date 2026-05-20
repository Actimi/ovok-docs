---
title: "[Early Access] Start a wearable OAuth flow"
sidebar_label: "[Early Access] Start a wearable OAuth flow"
description: "**Early Access** — interfaces may change without notice."
---

# [Early Access] Start a wearable OAuth flow

**Available paths**

- <span className="api-method post">POST</span> `/v1/wearables/{provider}/connect`

<ApiBase inline={false} />

**Early Access** — interfaces may change without notice.

Generates the provider authorization URL the dashboard should send the user to. The user authenticates with the provider (Strava, Polar, …), the provider redirects back to `/v1/wearables/:provider/callback`, and at that point we exchange the code, persist the tokens on a FHIR Endpoint resource, and (optionally) bounce the user to a dashboard URL of your choice.

### Prerequisites

1. The matching project-setting toggle must be ON (`WEARABLE_STRAVA_ENABLED` or `WEARABLE_POLAR_ENABLED`). See `PUT /v1/project/settings/:key`.
2. The provider's OAuth app credentials must be on file in `Project.systemSecret[]`:
    - Strava: `WEARABLE_STRAVA_CLIENT_ID`, `WEARABLE_STRAVA_CLIENT_SECRET`, `WEARABLE_STRAVA_WEBHOOK_SECRET`
    - Polar: `WEARABLE_POLAR_CLIENT_ID`, `WEARABLE_POLAR_CLIENT_SECRET`, `WEARABLE_POLAR_WEBHOOK_SECRET`
   Issue them in the provider's developer portal first, then paste into project settings (admin only).
3. The provider's redirect URI registration must point at `<APP_BASE_URL>/v1/wearables/:provider/callback`.

### Example

```bash
curl -X POST '<APP_BASE_URL>/v1/wearables/strava/connect' \
  -H 'Authorization: Bearer <token>' \
  -H 'Content-Type: application/json' \
  -d '{ "patientId": "<patient-uuid>", "redirectUri": "https://my.dashboard/connect-done" }'
```

Response carries an `authorizationUrl` you redirect the user to.


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `provider` | path | `string` | **yes** | Wearable provider slug. Currently `strava` or `polar` — must match a slug enabled in `WearableProvider`. |


## Request body

**Content-Type:** `application/json`

- `patientId`: `string` **(required)** — FHIR Patient id to connect.
- `redirectUri`: `string` — Where to send the user after the OAuth callback completes. Defaults to a JSON success page.


## Responses

| Code | Description |
| --- | --- |
| `200` |  |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `ConnectResponseDto` (`application/json`)

Authorization URL the dashboard should redirect the user to. `state` is opaque — the provider echoes it back to us; you do not need to interpret it.

- `provider`: `string` **(required)**
- `authorizationUrl`: `string` **(required)**
- `state`: `string` **(required)**
