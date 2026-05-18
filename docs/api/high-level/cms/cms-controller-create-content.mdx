---
title: "Create content"
sidebar_label: "Create content"
description: "# Create Content"
---

# Create content

<span className="api-method post">POST</span> `/cms/{type}/{language}`

<ApiBase inline={false} />

# Create Content

Create a new CMS content entry for a given content type and language.
<br />The content is stored as a FHIR Composition resource scoped to the caller's project. A unique key is auto-generated from the title and used to link translations across languages.

## Path Parameters

| Parameter  | Description                                      | Example     |
| ---------- | ------------------------------------------------ | ----------- |
| `type`     | Content type (e.g. `article`, `faq`, `exercise`) | `article`   |
| `language` | ISO language code                                | `en-US`     |

## Request Body

| Field      | Type       | Description                                                  |
| ---------- | ---------- | ------------------------------------------------------------ |
| `title`    | `string`   | Title of the content entry                                   |
| `category` | `string`   | Category identifier                                          |
| `section`  | `array`    | Array of sections, each with `title`, `text`, and `code`     |
| `code`     | `string`   | Optional code used for additional classification             |

## Example cURL request

```bash
curl -X POST \
 --url 'https://api.dev.ovok.com/cms/article/en-US' \
 -H 'Authorization: Bearer <token>' \
 -H 'Content-Type: application/json' \
 -d '{
    "title": "My Blog",
    "category": "123",
    "section": [
      { "title": "Intro", "text": "Welcome text", "code": ["main-content"] }
    ]
}'
```

**Side Effects:** A background job is enqueued for every other language configured in the project locale, so translation stubs can be generated automatically.

**Notes:** The same description is reused for the **Update content** (`PUT /:language/:key`) route. Updates follow the same body schema but target an existing key.



## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `type` | path | `string` | **yes** |  |
| `language` | path | `string` | **yes** |  |


## Request body

**Content-Type:** `application/json`

- `title`: `string` **(required)**
- `category`: `array`
- `section`: `array`
- `code`: `string`


## Responses

| Code | Description |
| --- | --- |
| `200` |  |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |
