---
title: "List project relationships"
sidebar_label: "List project relationships"
description: "Returns the caller project's place in the project hierarchy: its own id, its parent's id (if any), and the ids of any direct children."
---

# List project relationships

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">{"/sub-project"}</code></div>
</div>

<ApiBase inline={false} />

</div>

Returns the caller project's place in the project hierarchy: its own id, its parent's id (if any), and the ids of any direct children.

The dashboard renders this on the project switcher; SDK consumers use it to navigate between tenants the caller has access to without minting separate credentials.

### Example

```bash
curl '<APP_BASE_URL>/v1/sub-project' \
  -H 'Authorization: Bearer <admin-token>'
```

Returns the relationship graph as a `SubProjectsResponseDto`. 400 when no project is bound to the session.




## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `SubProjectsResponseDto` (`application/json`)

- `currentProjectId`: `string` **(required)**
- `parentProjectId`: `string` **(required)**
- `subProjectIds`: `string[]` **(required)**

**Example**

```json
{
  "parentProjectId": "f6f4da8d-93e8-8a08-220e-03b7810451d3",
  "subProjectIds": [
    "8618c885-485f-614e-f65e-c365e1be0086",
    "06c4d19a-2f20-242f-4194-966ec82b63e2",
    "25654af8-b5de-5060-1e09-ef4fd62e592f",
    "43583c84-f8d2-a31a-3f64-0c545e22d847"
  ]
}
```
