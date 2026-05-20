---
title: "Search documents"
sidebar_label: "Search documents"
description: "File search"
---

# Search documents

**Available paths**

- <span className="api-method get">GET</span> `/document`

<ApiBase inline={false} />

File search

Information such as id, contentType, fileName, public token.

### Parameters

| Parameter | In      | Description                                                     | Example |
| --------- | ------- | --------------------------------------------------------------- | ------- |
| `_count`  | `query` | Total amount of file informations per query                     | `10`    |
| `_offset` | `query` | Total amount of file informations to be skipped (page \* count) | `0`     |



## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `_count` | query | `string` | no | Page size — maximum number of documents to return in one response. Defaults to `100`. |
| `_offset` | query | `string` | no | Number of documents to skip before returning results. Combine with `_count` to paginate (offset = page × count). |
| `_sort` | query | `string` | no | FHIR sort expression applied to the underlying `DocumentReference` search. Defaults to `-_lastUpdated` (most recently updated first). |



## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `GetSearchFilesResponseDto` (`application/json`)

- `total`: `number` **(required)** — Total number of documents in the system.
- `resources`: `object[]` **(required)**
  - `id`: `string` **(required)** — The ID of the DocumentReference resource.
  - `meta`: `object` — The metadata of the document.
  - `author`: `object` — The author of the document.
  - `fileName`: `string` — The name of the document.
  - `contentType`: `string` — The content type of the document.
  - `uploadOptions`: `object` — The upload options of the document.
  - `publicToken`: `string` — The public token of the document.

**Example**

```json
{
  "total": 100,
  "resources": [
    {
      "id": "87ea5dfc-8b8e-384d-8489-79496e706390",
      "fileName": "test.txt",
      "contentType": "text/plain",
      "publicToken": "example.jwt.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NzkyNjc3MTAsImV4cCI6MTc3OTI3MTMxMH0.5ZAIfQX3JUeRoBRZ0jvqywCpqI8NauHlsdeDO4PuBrA"
    }
  ]
}
```
