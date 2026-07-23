---
title: "Upload document - Generate credentials"
sidebar_label: "Upload document - Generate credentials"
description: "Generate a file upload url and credentials"
---

# Upload document - Generate credentials

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method post">POST</span> <code className="endpoint-hero__path">{"/document"}</code></div>
</div>

<ApiBase inline={false} />

</div>

Generate a file upload url and credentials

### Parameters

| Parameter     | In     | Description                                    | Example     |
| ------------- | ------ | ---------------------------------------------- | ----------- |
| `contentType` | `body` | The mime type of the file                      | `image/png` |
| `fileName`    | `body` | The filename of the resource to be saved with. | `cat.png`   |

### Response

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

By using the credentials provided in the `uploadOptions`, you can use any http client to upload your file in http form field.
All of the `field` values in the `uploadOptions` should be provided as form data key value pairs, along with another form data field `file` with the value of actual file itself.

```ts
import axios from 'axios';
import * as fs from 'fs';
import FormData from 'form-data';

async function uploadFileWithCredentials(filePath: string, uploadCredentialsResponse: any) {
  const { url, fields } = uploadCredentialsResponse.uploadOptions;
  const formData = new FormData();

  for (const [key, value] of Object.entries(fields)) {
    formData.append(key, value);
  }

  try {
    const fileContent = fs.readFileSync(filePath);
    formData.append('file', fileContent);

    const response = await axios.post(url, formData, {
      headers: formData.getHeaders(),
    });
    console.log('Upload successful:', response.status);
  } catch (error: any) {
    console.error('Upload failed:', error);
  }
}

const uploadCredentialsResponse = {
  id: '12345',
  lastUpdated: '2000-01-01T00:00:00.000Z',
  author: {
    reference: 'Practitioner/...',
    display: 'Max Mustermann',
  },
  fileName: 'cat.png',
  contentType: 'image/png',
  uploadOptions: {
    url: 'https://s3.eu-central-1.amazonaws.com/s...',
    fields: {
      bucket: 's...',
      'X-Amz-Algorithm': 'A...',
      'X-Amz-Credential': 'A...',
      'X-Amz-Date': '2025...',
      key: 'bi...',
      Policy: 'ey...',
      'X-Amz-Signature': 'a6...',
    },
  },
};

uploadFileWithCredentials('path/to/cat.png', uploadCredentialsResponse);
```




## Request body

**Content-Type:** `application/json`

- `fileName`: `string` **(required)** — The name of the file.
- `contentType`: `string` **(required)** — The MIME type of the file.
- `isPublic`: `string` — Whether the file is public. If true file will be publicly accessable with the token defined in the DocumentReference.extension


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
  "publicToken": "example.jwt.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3ODQ4MDk0NDgsImV4cCI6MTc4NDgxMzA0OH0.CqWt5CaHU9fC6_Pk3vBXAgFJ8vVXFJ_bfQ7MbFCr4uw",
  "uploadOptions": {
    "url": "https://example.com/upload",
    "fields": {
      "key": "value"
    }
  }
}
```
