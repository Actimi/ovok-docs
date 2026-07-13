---
title: "Generate credentials for document file replacement"
sidebar_label: "Generate credentials for document file replacement"
description: "Generate credentials for file replacement"
---

# Generate credentials for document file replacement

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method post">POST</span> <code className="endpoint-hero__path">{"/document/{id}"}</code></div>
</div>

<ApiBase inline={false} />

</div>

Generate credentials for file replacement

The file replacement follows the same pattern as file creation - you first get upload credentials, then upload directly to S3.

### Parameters

| Parameter     | In       | Description                                    | Example     |
| ------------- | -------- | ---------------------------------------------- | ----------- |
| `id`          | `params` | The id of the DocumentReference                | `023f2f-`   |
| `fileName`    | `body`   | The filename of the resource to be saved with. | `cat.png`   |
| `contentType` | `body`   | The mime type of the file                      | `image/png` |

### Response

Similar to document creation, this endpoint returns upload credentials:

```json
{
  "id": "12345",
  "lastUpdated": "2000-01-01T00:00:00.000Z",
  "author": {
    "reference": "Practitioner/...",
    "display": "Max Mustermann"
  },
  "fileName": "cat.png",
  "contentType": "image/png",
  "uploadOptions": {
    "url": "https://s3.eu-central-1.amazonaws.com/s...",
    "fields": {
      "bucket": "s...",
      "X-Amz-Algorithm": "A...",
      "X-Amz-Credential": "A...",
      "X-Amz-Date": "2025...",
      "key": "bi...",
      "Policy": "ey...",
      "X-Amz-Signature": "a6..."
    }
  }
}
```

Use the credentials in `uploadOptions` to upload your replacement file directly to S3 using form data, exactly like the initial upload process.



## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | path | `string` | **yes** | The id of the DocumentReference resource |


## Request body

**Content-Type:** `application/json`

- `fileName`: `string` **(required)** — The filename of the resource to be saved with.
- `contentType`: `string` **(required)** — The MIME type of the file.
- `isPublic`: `boolean` — Whether the file should be public or private.


## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `FileEntryDto` (`application/json`)

- `id`: `string` **(required)** — The ID of the DocumentReference resource.
- `meta`: `object` — The metadata of the document.
  - `lastUpdated`: `string` **(required)** — The last updated date of the document.
- `author`: `object` — The author of the document.
  - `reference`: `string` — The reference of the author.
  - `display`: `string` — The display name of the author.
- `fileName`: `string` — The name of the document.
- `contentType`: `string` — The content type of the document.
- `uploadOptions`: `object` — The upload options of the document.
  - `url`: `string` **(required)** — The upload URL of the document.
  - `fields`: `object` **(required)** — The fields of the document.
- `publicToken`: `string` — The public token of the document.

**Example**

```json
{
  "id": "87ea5dfc-8b8e-384d-8489-79496e706390",
  "fileName": "test.txt",
  "contentType": "text/plain",
  "publicToken": "example.jwt.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3ODM5MzEwNzYsImV4cCI6MTc4MzkzNDY3Nn0.3QEWCGmWnOr_aXym4o-n0_L7yilo46G9xpdr6ZEaDIg",
  "uploadOptions": {
    "url": "https://example.com/upload",
    "fields": {
      "key": "value"
    }
  }
}
```
