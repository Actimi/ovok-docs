---
title: "[Early Access] Revoke a wearable connection"
sidebar_label: "[Early Access] Revoke a wearable connection"
description: "**Early Access** — interfaces may change without notice."
---

# [Early Access] Revoke a wearable connection

<div className="endpoint-hero">

<div className="endpoint-hero__paths"><span className="api-method delete">DELETE</span> <code className="endpoint-hero__path">{"/v1/wearables/{provider}/connections/{patientId}"}</code></div>

<ApiBase inline={false} />

</div>

**Early Access** — interfaces may change without notice.

Deletes the stored OAuth tokens (the FHIR Endpoint resource) for the given (patient, provider) pair. The user must re-authenticate with the provider to reconnect. Historical Observation / Procedure data already written is **not** deleted — by design, audit history is append-only.

### Example

```bash
curl -X DELETE '<APP_BASE_URL>/v1/wearables/strava/connections/<patient-uuid>' \
  -H 'Authorization: Bearer <token>'
```

Returns `{ ok: true }` whether or not a connection existed (idempotent).


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `provider` | path | `string` | **yes** | Wearable provider slug whose tokens should be deleted. |
| `patientId` | path | `string` | **yes** | FHIR Patient id whose connection to revoke. Idempotent — non-existent connections still return `{ ok: true }`. |



## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `OkResponseDto` (`application/json`)

Side-effect-only acknowledgement. Body is the literal `{ "ok": true }`.

- `ok`: `boolean` **(required)**
