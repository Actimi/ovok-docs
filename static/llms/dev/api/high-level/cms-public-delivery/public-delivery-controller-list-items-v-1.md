---
title: "List published items"
sidebar_label: "List published items"
description: "List published items from a CMS collection. Authenticates with a project-scoped API key (Authorization: Bearer …). Drafts and unpublished items are filtered out"
---

# List published items

<span className="api-method get">GET</span> `/v1/public/cms/{typeSlug}/items`

<ApiBase inline={false} />

List published items from a CMS collection. Authenticates with a project-scoped API key (Authorization: Bearer …). Drafts and unpublished items are filtered out server-side.


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `typeSlug` | path | `string` | **yes** |  |
| `page` | query | `string` | **yes** |  |
| `limit` | query | `string` | **yes** |  |
| `locale` | query | `string` | **yes** |  |
| `depth` | query | `string` | **yes** |  |



## Responses

| Code | Description |
| --- | --- |
| `200` |  |


### `200` → `PublicDeliveryListResponseDto` (`application/json`)

Paginated envelope of published items in a CMS collection. Items in `docs` follow the project-defined collection schema; the envelope fields (`totalDocs`, `limit`, `totalPages`, `page`) are fixed.

- `docs`: `array` **(required)** — Published items in the current page, oldest-first unless sorted otherwise.
- `totalDocs`: `integer` **(required)** — Total matching items across all pages.
- `limit`: `integer` **(required)** — Items per page (caller-supplied, capped at 100 server-side).
- `totalPages`: `integer` **(required)** — Total page count at the current limit.
- `page`: `integer` **(required)** — 1-indexed current page.
- `pagingCounter`: `integer` — 1-indexed position of the first item on this page across the full result set.
- `hasPrevPage`: `boolean`
- `hasNextPage`: `boolean`
- `prevPage`: `integer`
- `nextPage`: `integer`

**Example**

```json
{
  "docs": [
    {
      "id": "87ea5dfc-8b8e-384d-8489-79496e706390",
      "slug": "welcome-banner",
      "publishedAt": {},
      "title": "Welcome to Ovok"
    }
  ],
  "totalDocs": 1,
  "limit": 20,
  "totalPages": 1,
  "page": 1,
  "pagingCounter": 1,
  "hasPrevPage": false,
  "hasNextPage": false,
  "prevPage": null,
  "nextPage": null
}
```
