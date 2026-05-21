---
title: "[Early Access] List wearable connections"
sidebar_label: "[Early Access] List wearable connections"
description: "**Early Access** — interfaces may change without notice."
---

# [Early Access] List wearable connections

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">{"/v1/wearables/connections"}</code></div>
</div>

<ApiBase inline={false} />

</div>

**Early Access** — interfaces may change without notice.

Every active wearable connection in the caller's project, across all patients and all providers. The dashboard renders these on the per-resident integrations panel.

Token values themselves are **never** returned — only the metadata (provider, patient id, remote-user id, expiresAt, scopes). To get the OAuth tokens for a programmatic API call, read the underlying `Endpoint` resource via the FHIR API; tokens are stored as encrypted `extension`s.

### Example

```bash
curl '<APP_BASE_URL>/v1/wearables/connections' \
  -H 'Authorization: Bearer <token>'
```




## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `ConnectionListResponseDto` (`application/json`)

All wearable connections for the caller’s project.

- `connections`: `object[]` **(required)**
  - `id`: `string` **(required)** — Endpoint resource id holding the connection.
  - `provider`: `string` **(required)**
  - `patientId`: `string` **(required)**
  - `remoteUserId`: `string` **(required)** — Provider-assigned user id (athlete_id, user_id…).
  - `expiresAt`: `number` **(required)** — Epoch ms when the current access token expires.
  - `scopes`: `string[]` **(required)**
