---
title: "[Early Access] Wearable webhook ingress"
sidebar_label: "[Early Access] Wearable webhook ingress"
description: "**Early Access** — interfaces may change without notice."
---

# [Early Access] Wearable webhook ingress

**Available paths**

- <span className="api-method post">POST</span> `/v1/wearables/{provider}/webhook`

<ApiBase inline={false} />

**Early Access** — interfaces may change without notice.

Endpoint the wearable provider POSTs activity / sleep / heart-rate events to. Not called by the dashboard — only by the provider's webhook delivery service.

### Per-provider behaviour

**Strava** (`webhookPing` model):

The payload contains only `{ object_type, object_id, aspect_type, owner_id }`. We follow up with `GET /api/v3/activities/{id}` using the connection's access token, map the result to a FHIR `Procedure` plus summary `Observation`s (distance, moving-time, kcal, average HR, max HR), and enqueue them for write.

Signature verification: Strava does not HMAC-sign events. We accept the payload if (a) the structural shape is correct and (b) an optional `x-ovok-signature` HMAC header matches the configured `WEARABLE_STRAVA_WEBHOOK_SECRET` when present.

**Polar** (`webhookStream` model):

The payload contains the full event (`EXERCISE`, `SLEEP`, `CONTINUOUS_HEART_RATE`). `EXERCISE` maps to a Procedure plus summary Observations; `SLEEP` maps to a duration Observation on LOINC 93832-4. `CONTINUOUS_HEART_RATE` is currently a no-op and reserved for a future pass that writes `valueSampledData` so the stream renders via [GET /Observation/:id?asTimeseries=true].

Signature verification: mandatory. Polar HMAC-SHA256-signs the raw body and sends the hex digest in the `polar-webhook-signature` header. We compare against `WEARABLE_POLAR_WEBHOOK_SECRET`; mismatches return 400.

### Routing

The webhook arrives without project context. We look up the matching FHIR Endpoint resource cross-tenant by `(provider, remote_user_id)` — provider's user id is `owner_id` (Strava) or `user_id` (Polar). Webhook events for an unknown user are silently 200'd to stop the provider retrying after a revoke.

### Body

`application/json` — raw provider payload. We parse it with the strategy and enqueue the result onto the `wearable-ingest` BullMQ queue, then 200 quickly so the provider doesn't retry. FHIR writes happen off-thread.


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `provider` | path | `string` | **yes** | Wearable provider slug delivering the event. Provider-specific payload + signing rules apply (see description). |



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
