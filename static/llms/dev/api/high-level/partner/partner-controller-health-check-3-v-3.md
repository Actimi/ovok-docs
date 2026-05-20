---
title: "Partner integration health check"
sidebar_label: "Partner integration health check"
description: "Unauthenticated liveness ping for partner load balancers and sandbox smoke checks. Always returns `{ status: \"ok\", healthy: true, timestamp }` when the handler "
---

# Partner integration health check

**Available paths**

- <span className="api-method get">GET</span> `/v3/partner/health-check`

<ApiBase inline={false} />

Unauthenticated liveness ping for partner load balancers and sandbox smoke checks. Always returns `{ status: "ok", healthy: true, timestamp }` when the handler is reachable. Mounted at version-neutral, v1, v2 and v3 paths so older partner SDKs keep working as the surrounding API evolves.




## Responses

| Code | Description |
| --- | --- |
| `200` |  |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `PartnerHealthResponseDto` (`application/json`)

Liveness ping for the Partner integration surface.

- `status`: `string` **(required)** — Always "ok" when the handler responds — non-200 surfaces a real failure.
- `healthy`: `boolean` **(required)** — Boolean mirror of `status` for clients that only inspect this field.
- `timestamp`: `string` **(required)** — ISO-8601 timestamp the response was generated at, server clock.

**Example**

```json
{
  "status": "ok",
  "healthy": true,
  "timestamp": {}
}
```
