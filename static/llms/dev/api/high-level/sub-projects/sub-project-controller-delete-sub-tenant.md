---
title: "Delete a sub tenant"
sidebar_label: "Delete a sub tenant"
description: "Tear down a child project. The FHIR Project resource and the parent ↔ child relationship are both removed."
---

# Delete a sub tenant

<div className="endpoint-hero">

<div className="endpoint-hero__paths"><span className="api-method delete">DELETE</span> <code className="endpoint-hero__path">/sub-project/&#123;subProjectId&#125;</code></div>

<ApiBase inline={false} />

</div>

Tear down a child project. The FHIR Project resource and the parent ↔ child relationship are both removed.

**Irreversible.** All resources stored on the child project (Patients, Practitioners, Observations, …) are removed from the active dataset. There is no soft-delete; if you need history, snapshot the child via the FHIR API before calling.

Admin-only. Only the parent project may delete a child it owns — cross-tenant attempts return 404 (same as "not found", to avoid leaking existence).

### Example

```bash
curl -X DELETE '<APP_BASE_URL>/v1/sub-project/<sub-project-id>' \
  -H 'Authorization: Bearer <admin-token>'
```


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `subProjectId` | path | `string` | **yes** |  |



## Responses

| Code | Description |
| --- | --- |
| `200` | The sub tenant was deleted successfully. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `SubProjectSuccessResponseDto` (`application/json`)

Acknowledgement that the sub-tenant mutation completed. `success: false` is currently unused — failures raise 4xx/5xx.

- `success`: `boolean` **(required)**
