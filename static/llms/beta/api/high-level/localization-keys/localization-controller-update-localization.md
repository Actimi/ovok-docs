---
title: "Update a single localization"
sidebar_label: "Update a single localization"
description: "Update or create a single localization by language and key"
---

# Update a single localization

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method put">PUT</span> <code className="endpoint-hero__path">{"/localization/{language}/{key}"}</code></div>
</div>

<ApiBase inline={false} />

</div>

Update or create a single localization by language and key

The request body is a JSON object with the localization.

> NOTE: The provided language must be enabled in the system by calling Locale APIs.



## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | path | `string` | **yes** |  |
| `language` | path | `string` | **yes** |  |


## Request body

**Content-Type:** `application/json`

- `value`: `string` **(required)**


## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `LocalizationDto` (`application/json`)

- `id`: `string`
- `key`: `string` **(required)**
- `language`: `string` **(required)**
- `value`: `string` **(required)**
- `author`: `object` **(required)**
  - `reference`: `string` **(required)**
  - `display`: `string`
- `date`: `string`
- `projectId`: `string`

**Example**

```json
{
  "key": "home.title",
  "language": "en",
  "value": "Home",
  "author": {
    "reference": "Practitioner/123",
    "display": "John Doe"
  },
  "date": {}
}
```
