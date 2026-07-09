---
title: "List published items"
sidebar_label: "List published items"
description: "List published items from a CMS collection. Authenticates with a project-scoped API key (Authorization: Bearer …). Drafts and unpublished items are filtered out"
---

# List published items

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">{"/v1/public/cms/{typeSlug}/items"}</code></div>
</div>

<ApiBase inline={false} />

</div>

List published items from a CMS collection. Authenticates with a project-scoped API key (Authorization: Bearer …). Drafts and unpublished items are filtered out server-side.


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `typeSlug` | path | `string` | **yes** | Collection slug as defined in the project's Payload schema (e.g. `posts`, `services`). Bounded to 80 chars; longer values are rejected with 400. |
| `page` | query | `string` | no | 1-indexed page number. Defaults to `1`; out-of-range values are clamped. |
| `limit` | query | `string` | no | Items per page. Defaults to `20`, capped server-side at `100`. |
| `locale` | query | `string` | no | BCP-47-ish locale (e.g. `en`, `en-GB`). Falls back to the project default when unset or unmatched. |
| `depth` | query | `string` | no | Relationship resolve depth, 0–5. Higher values resolve more nested relations at the cost of extra round-trips. |



## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |


### `200` → `PublicDeliveryListResponseDto` (`application/json`)

Paginated envelope of published items in a CMS collection. Items in `docs` follow the project-defined collection schema; the envelope fields (`totalDocs`, `limit`, `totalPages`, `page`) are fixed.

- `docs`: `object[]` **(required)** — Published items in the current page, oldest-first unless sorted otherwise.
  - `id`: `string` **(required)** — Stable Payload item id.
  - `slug`: `string` — Slug for the item, when the collection defines a `slug` field.
  - `publishedAt`: `string` — ISO-8601 timestamp the item was last published. Items without this field are filtered out of the response.
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
