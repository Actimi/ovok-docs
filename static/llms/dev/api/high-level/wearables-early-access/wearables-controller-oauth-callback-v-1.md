---
title: "[Early Access] Wearable OAuth callback"
sidebar_label: "[Early Access] Wearable OAuth callback"
description: "**Early Access** — interfaces may change without notice."
---

# [Early Access] Wearable OAuth callback

<span className="api-method get">GET</span> `/v1/wearables/{provider}/callback`

<ApiBase inline={false} />

**Early Access** — interfaces may change without notice.

Endpoint the provider redirects the user to after they authorize. The dashboard does not call this directly — the user's browser does, via a 302 from the provider.

We exchange the `code` query parameter for an access + refresh token pair, persist them as a FHIR `Endpoint` resource (encrypted, keyed on the project), then either redirect the browser to the `redirectUri` the dashboard supplied at connect time, or return a `200 { ok: true, provider, patientId }` JSON payload.

### Query parameters

| Name                | Notes                                                               |
| ------------------- | ------------------------------------------------------------------- |
| `code`              | Authorization code returned by the provider. Required on success.   |
| `state`             | Opaque CSRF token we minted at connect time. Required on success.   |
| `error`             | Set when the user denied or the provider failed. We forward 400.    |
| `error_description` | Human-readable error context (optional).                            |

### Notes

The state token is single-use (Redis `GETDEL`) — replays return 401. State expires after 600 seconds; if the user takes longer to authorize, the flow must be restarted.


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `provider` | path | `string` | **yes** |  |



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
