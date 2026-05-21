---
title: "Get a single localization"
sidebar_label: "Get a single localization"
description: "Get a single localization by language and key"
---

# Get a single localization

<div className="endpoint-hero">

<div className="endpoint-hero__paths"><span className="api-method get">GET</span> <code className="endpoint-hero__path">{"/localization/{language}/{key}"}</code></div>

<ApiBase inline={false} />

</div>

Get a single localization by language and key

The response is a JSON object with the localization.

> NOTE: The provided language must be enabled in the system by calling Locale APIs.



## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | path | `string` | **yes** | Dot-separated localization key. Alphanumerics, `_`, `-`, `.` only. Hierarchical convention recommended (e.g. `home.screen.title`). |
| `language` | path | `string` | **yes** | BCP-47 locale code drawn from the i18n ISO list. Use the short form (`en`, `de`) for the platform-default region, or the full form (`en-US`, `de-DE`) for a specific variant. |



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
- `key`: `string` **(required)** — Dot-separated localization key. Alphanumerics, `_`, `-`, `.` only. Hierarchical convention recommended (e.g. `home.screen.title`).
- `language`: `string` **(required)** — BCP-47 locale code drawn from the i18n ISO list. Use the short form (`en`, `de`) for the platform-default region, or the full form (`en-US`, `de-DE`) for a specific variant.
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
