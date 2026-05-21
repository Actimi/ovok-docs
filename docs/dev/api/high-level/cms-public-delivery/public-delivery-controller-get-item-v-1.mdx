---
title: "Get a published item"
sidebar_label: "Get a published item"
description: "Fetch a single published item by id or slug. Authenticates with a project-scoped API key. Returns 404 for drafts, unpublished items, or items in another project"
---

# Get a published item

<div className="endpoint-hero">

<div className="endpoint-hero__paths"><span className="api-method get">GET</span> <code className="endpoint-hero__path">/v1/public/cms/&#123;typeSlug&#125;/items/&#123;idOrSlug&#125;</code></div>

<ApiBase inline={false} />

</div>

Fetch a single published item by id or slug. Authenticates with a project-scoped API key. Returns 404 for drafts, unpublished items, or items in another project.


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `typeSlug` | path | `string` | **yes** | Collection slug as defined in the project's Payload schema (e.g. `posts`, `services`). |
| `idOrSlug` | path | `string` | **yes** | Either the Payload item id or the collection's `slug` field. The handler tries id first, then slug. |
| `locale` | query | `string` | no | BCP-47-ish locale (e.g. `en`, `en-GB`). Falls back to the project default when unset or unmatched. |
| `depth` | query | `string` | no | Relationship resolve depth, 0–5. Higher values resolve more nested relations at the cost of extra round-trips. |



## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |


### `200` → `PublicDeliveryItemResponseDto` (`application/json`)

Published CMS item. Shape is project- and collection-specific — the documented fields are the envelope guaranteed by the delivery API; everything else comes from the Payload collection schema.

- `id`: `string` **(required)** — Stable Payload item id.
- `slug`: `string` — Slug for the item, when the collection defines a `slug` field.
- `publishedAt`: `string` — ISO-8601 timestamp the item was last published. Items without this field are filtered out of the response.

_Additional properties allowed._

**Example**

```json
{
  "id": "87ea5dfc-8b8e-384d-8489-79496e706390",
  "slug": "welcome-banner",
  "publishedAt": {},
  "title": "Welcome to Ovok",
  "body": "Long-form content authored in the Console."
}
```
