---
title: "[Early Access] Read wearable credentials"
sidebar_label: "[Early Access] Read wearable credentials"
description: "**Early Access** — interfaces may change without notice."
---

# [Early Access] Read wearable credentials

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">{"/v1/wearables/{provider}/credentials"}</code></div>
</div>

<ApiBase inline={false} />

</div>

**Early Access** — interfaces may change without notice.

Report whether the caller's project has Strava / Polar OAuth app credentials on file, without ever returning the raw values. Use the response to drive a 'configured / not configured' indicator in the dashboard; the secret fields (`hasSecret`, `hasWebhookSecret`) report presence only and `clientIdLast4` lets the UI show 'ends in …XY34' for visual confirmation. Admin-only.


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `provider` | path | `string` | **yes** | Wearable provider slug whose stored credentials are being read. Currently `strava` or `polar`. |



## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `WearableCredentialsStatusDto` (`application/json`)

Status view of a project's wearable OAuth credentials. Returned by GET / PUT / DELETE — raw secrets are never surfaced, only their presence and the last 4 chars of the stored clientId.

- `configured`: `boolean` **(required)** — True when both clientId and clientSecret are on file for this provider.
- `clientIdLast4`: `string` **(required)** — Last 4 characters of the stored clientId, for visual confirmation. `null` when no clientId is on file.
- `hasSecret`: `boolean` **(required)** — True when a clientSecret is on file. The value itself is never returned.
- `hasWebhookSecret`: `boolean` **(required)** — True when a webhookSecret is on file. Required for inbound signature verification on Polar; optional on Strava.

**Example**

```json
{
  "configured": true,
  "clientIdLast4": "XY34",
  "hasSecret": true,
  "hasWebhookSecret": true
}
```
