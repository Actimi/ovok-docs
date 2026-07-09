---
title: "Get Organization Code"
sidebar_label: "Get Organization Code"
description: "Get organization code"
---

# Get Organization Code

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">{"/organizations/code"}</code></div>
</div>

<ApiBase inline={false} />

</div>

Get organization code




## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `TenantCodeDto` (`application/json`)

Tenant code

- `id`: `string`
- `code`: `string` **(required)**
- `projectId`: `string` **(required)**

**Example**

```json
{
  "id": "aa2c96da-cf00-c451-ef46-5f6115a45a20",
  "code": "FHXQ-123",
  "project": "Project/f6f4da8d-93e8-8a08-220e-03b7810451d3"
}
```
