---
title: "Create a sub tenant"
sidebar_label: "Create a sub tenant"
description: "Create a child project (\"sub tenant\") nested under the caller's current project. The admin issuing the request is automatically joined to the new child project "
---

# Create a sub tenant

<div className="endpoint-hero">

<div className="endpoint-hero__paths"><span className="api-method post">POST</span> <code className="endpoint-hero__path">/sub-project</code></div>

<ApiBase inline={false} />

</div>

Create a child project ("sub tenant") nested under the caller's current project. The admin issuing the request is automatically joined to the new child project as a Practitioner with admin rights, so the OAuth credentials they already hold keep working against it.

Use this to spin up isolated environments per customer, per clinic, or per integration partner without minting new accounts. The parent project retains full read/write across all its children — child-project access policies stay scoped to the child.

### Body

`SubProjectRequestBodyDto` — at minimum a `name`. See the schema below for optional metadata (`organizationName`, `accessPolicies`, etc.).

### Example

```bash
curl -X POST '<APP_BASE_URL>/v1/sub-project' \
  -H 'Authorization: Bearer <admin-token>' \
  -H 'Content-Type: application/json' \
  -d '{ "name": "Acme — Berlin clinic" }'
```

Admin-only. Returns `{ success: true }`.



## Request body

**Content-Type:** `application/json`

- `name`: `string` **(required)**
- `extension`: `—`


## Responses

| Code | Description |
| --- | --- |
| `200` | The sub tenant was created successfully. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `SubProjectSuccessResponseDto` (`application/json`)

Acknowledgement that the sub-tenant mutation completed. `success: false` is currently unused — failures raise 4xx/5xx.

- `success`: `boolean` **(required)**
