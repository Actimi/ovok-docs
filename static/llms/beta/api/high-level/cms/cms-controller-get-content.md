---
title: "Get content by key and language"
sidebar_label: "Get content by key and language"
description: "# Get Content by Key and Language"
---

# Get content by key and language

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">{"/cms/{type}/{language}/{key}"}</code></div>
</div>

<ApiBase inline={false} />

</div>

# Get Content by Key and Language

Retrieve a single CMS content entry by its unique key and language.
<br />Returns the full content DTO including title, sections, author, date, and category.

## Path Parameters

| Parameter  | Description                                                     | Example                      |
| ---------- | --------------------------------------------------------------- | ---------------------------- |
| `type`     | Content type (e.g. `article`, `faq`, `exercise`)                | `article`                    |
| `language` | ISO language code                                               | `en-US`                      |
| `key`      | Unique content key that links translations across languages     | `article-my-blog-a1b2c3d4`  |

## Example cURL request

```bash
curl -X GET \
 --url 'https://api.staging.ovok.com/cms/article/en-US/article-my-blog-a1b2c3d4' \
 -H 'Authorization: Bearer <token>'
```

## Response

Returns a `ContentDto` object:

```json
{
  "id": "composition-id",
  "title": "My Blog",
  "category": "123",
  "section": [
    { "title": "Intro", "text": "Welcome text", "code": ["main-content"] }
  ],
  "language": "en-US",
  "key": "article-my-blog-a1b2c3d4",
  "type": "article",
  "date": "2025-01-15T12:00:00.000Z",
  "author": {
    "reference": "Practitioner/abc",
    "display": "Dr. Smith"
  }
}
```

**Notes:** Returns `404 Not Found` if no content matches the given type, language, and key within the caller's project.



## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `type` | path | `string` | **yes** |  |
| `language` | path | `string` | **yes** |  |
| `key` | path | `string` | **yes** | A key that is used to identify the content between languages. |



## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `ContentDto` (`application/json`)

- `id`: `string`
- `title`: `string` **(required)**
- `author`: `object` **(required)**
  - `reference`: `string` **(required)**
  - `display`: `string`
- `key`: `string` **(required)** — A random UUID that is used to identify the content, not ID!
- `language`: `string` **(required)**
- `date`: `string` **(required)**
- `projectId`: `string`
- `type`: `string` **(required)**
- `code`: `string`
- `category`: `string[]`
- `section`: `object[]`
  - `title`: `string`
  - `text`: `string`
  - `extension`: `object`
  - `code`: `string[]`

**Example**

```json
{
  "id": "123",
  "title": "My Blog",
  "author": {
    "reference": "123",
    "display": "John Doe"
  },
  "date": {},
  "project": "123",
  "type": "blog",
  "category": [
    "123",
    "456"
  ],
  "section": [
    {
      "title": "My Blog",
      "text": "My Blog Text",
      "extension": {
        "covert-media": "http://example.com/extensionValue"
      }
    }
  ]
}
```
