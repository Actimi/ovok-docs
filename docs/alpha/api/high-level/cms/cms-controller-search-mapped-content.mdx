---
title: "Search mapped content"
sidebar_label: "Search mapped content"
description: "# Search Mapped Content"
---

# Search mapped content

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">{"/cms/{type}/map/{language}"}</code></div>
</div>

<ApiBase inline={false} />

</div>

# Search Mapped Content

Search CMS content with a side-by-side mapping between the project's default language and a target language.
<br />Each result contains a `source` (default-language entry) and a `target` (requested-language entry) for the same content key. This is useful for translation management UIs where editors need to see original and translated content together.

## Path Parameters

| Parameter  | Description                                                     | Example     |
| ---------- | --------------------------------------------------------------- | ----------- |
| `type`     | Content type (e.g. `article`, `faq`, `exercise`)                | `article`   |
| `language` | Target ISO language code to map against the default language     | `de-DE`     |

## Query Parameters

| Parameter  | Type     | Description                                  | Default |
| ---------- | -------- | -------------------------------------------- | ------- |
| `search`   | `string` | Free-text fuzzy search across title, section text, author, and key | -       |
| `code`     | `string` | Filter by content code                       | -       |
| `_count`   | `number` | Page size                                    | `10`    |
| `_offset`  | `number` | Number of items to skip                      | `0`     |

## Example cURL request

```bash
curl -X GET \
 --url 'https://api.dev.ovok.com/cms/article/map/de-DE?search=Blog&_count=20&_offset=0' \
 -H 'Authorization: Bearer <token>'
```

## Response

```json
{
  "total": 1,
  "resources": [
    {
      "source": { "title": "My Blog", "language": "en-US", "key": "article-my-blog-a1b2c3d4" },
      "target": { "title": "Mein Blog", "language": "de-DE", "key": "article-my-blog-a1b2c3d4" }
    }
  ]
}
```

**Notes:** If a content key exists in the default language but has no translation yet, `target` will be absent from that entry. The reverse is also possible if orphaned translations exist.



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
