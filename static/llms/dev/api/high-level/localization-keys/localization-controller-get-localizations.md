---
title: "Get all localizations"
sidebar_label: "Get all localizations"
description: "Get all localizations"
---

# Get all localizations

**Available paths**

- <span className="api-method get">GET</span> `/localization/{language}`

<ApiBase inline={false} />

Get all localizations

All query parameters are FHIR query parameteters and therefore optional.

### Parameters

| Parameter Example            | Description                                                              |
| ---------------------------- | ------------------------------------------------------------------------ |
| category=language&#124;en-US | Get all localizations for the language `en-US`                           |
| category=key&#124;home.about | Get all localizations for the key `home.about`                           |
| title:contains=About Page    | Get all localizations where the value of the title contains `About Page` |
| \_offset=0                   | Offset of the first localization                                         |
| \_count=10                   | Count of the localizations                                               |

> NOTE: The provided language must be enabled in the system by calling Locale APIs.



## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `language` | path | `string` | **yes** |  |
| `_count` | query | `string` | no |  |
| `_offset` | query | `string` | no |  |
| `_sort` | query | `string` | no |  |
| `search` | query | `string` | no |  |



## Responses

| Code | Description |
| --- | --- |
| `200` |  |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `PaginatedSearchResponseDto` (`application/json`)

- `total`: `number` **(required)**
- `resources`: `array` **(required)**
