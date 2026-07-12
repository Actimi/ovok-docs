---
title: "Search content"
sidebar_label: "Search content"
description: "# Search Content"
---

# Search content

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">{"/cms/{type}/{language}"}</code></div>
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">{"/internal/cms/{type}/{language}"}</code></div>
</div>

<ApiBase inline={false} />

</div>

# Search Content

Search and paginate CMS content entries for a given content type and language.
<br />Results are sorted by date (newest first). An optional free-text search performs fuzzy matching across title, author, category, section titles, section text, and key.

## Path Parameters

| Parameter  | Description                                                     | Example     |
| ---------- | --------------------------------------------------------------- | ----------- |
| `type`     | Content type (e.g. `article`, `faq`, `exercise`)                | `article`   |
| `language` | ISO language code                                               | `en-US`     |

## Query Parameters

| Parameter  | Type     | Description                                  | Default |
| ---------- | -------- | -------------------------------------------- | ------- |
| `search`   | `string` | Free-text fuzzy search term                  | -       |
| `code`     | `string` | Filter by content code                       | -       |
| `_count`   | `number` | Page size                                    | `10`    |
| `_offset`  | `number` | Number of items to skip                      | `0`     |

## Example cURL request

```bash
curl -X GET \
 --url 'https://api.dev.ovok.com/cms/article/en-US?search=Blog&_count=20&_offset=0' \
 -H 'Authorization: Bearer <token>'
```

## Response

```json
{
  "total": 42,
  "resources": [
    {
      "id": "composition-id",
      "title": "My Blog",
      "category": "123",
      "section": [],
      "language": "en-US",
      "key": "article-my-blog-a1b2c3d4",
      "type": "article",
      "date": "2025-01-15T12:00:00.000Z",
      "author": {
        "reference": "Practitioner/abc",
        "display": "Dr. Smith"
      }
    }
  ]
}
```

**Notes:** The fuzzy search uses Fuse.js. When no `search` term is provided, all entries for the given type and language are returned, paginated by `_count` and `_offset`.



## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `type` | path | `string` | **yes** |  |
| `language` | path | `string` | **yes** |  |
| `search` | query | `string` | no |  |
| `code` | query | `string` | no |  |
| `_count` | query | `string` | no |  |
| `_offset` | query | `string` | no |  |



## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |
