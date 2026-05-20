---
title: "Update project features"
sidebar_label: "Update project features"
description: "Replace the FHIR-server feature flag list on the caller’s current project. Admin-only. Empty array disables every flag."
---

# Update project features

**Available paths**

- <span className="api-method patch">PATCH</span> `/v1/projects/me/features`

<ApiBase inline={false} />

Replace the FHIR-server feature flag list on the caller’s current project. Admin-only. Empty array disables every flag.



## Request body

**Content-Type:** `application/json`

- `features`: `array` **(required)**


## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `ProjectFeaturesResponseDto` (`application/json`)

Current project-level feature flags.

- `features`: `string[]` **(required)**
