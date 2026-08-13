---
title: "Schedule user account deletion"
sidebar_label: "Schedule user account deletion"
description: "The Delete User API endpoint schedules user account deletion from the Ovok platform to be carried out in 30 days."
---

# Schedule user account deletion

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method delete">DELETE</span> <code className="endpoint-hero__path">{"/auth/delete"}</code></div>
</div>

<ApiBase inline={false} />

</div>

The Delete User API endpoint schedules user account deletion from the Ovok platform to be carried out in 30 days.
<br />User deletion can be aborted by logging in to the account.

## Example cURL request

```bash
curl -X DELETE \
 --url 'https://api.dev.ovok.com/auth/delete' \
 -H 'Authorization: Bearer example.jwt.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3ODY2MDUwNTQsImV4cCI6MTc4NjYwODY1NH0.ob9Qx4wh8sblQsmuUTb8xWCZ0P2CCuEWuX0OFTiZmrA' \
 -H 'Content-Type: application/json' \
 -d '{
    "days": 30,
    "wipe": false
}'
```




## Request body

**Content-Type:** `application/json`

- `days`: `integer` — After how many days the user should be deleted.
- `wipe`: `boolean` — Deletes all medical data related to the user. If true, all medical data of the user will be deleted at the time of deletion. By default, this is false.


## Responses

| Code | Description |
| --- | --- |
| `200` | User account deletion confirmation. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `ResponseDeleteDto` (`application/json`)

- `scheduled`: `string` — Has the user account been scheduled for deletion.
- `user`: `object` — User resource.
  - `resourceType`: `string` — Resource type.
  - `id`: `string` — User ID.
  - `firstName`: `string` **(required)** — First name.
  - `lastName`: `string` **(required)** — Last name.
  - `email`: `string` — Email.
  - `project`: `object` — Project containing the User.
  - `meta`: `object`

**Example**

```json
{
  "scheduled": {},
  "user": {
    "resourceType": "User",
    "id": "9f8a2389-a20c-a075-2aa9-e95093515517",
    "firstName": "Max",
    "lastName": "Mustermann",
    "email": "max.mustermann@example.com",
    "project": {
      "reference": "Project/f6f4da8d-93e8-8a08-220e-03b7810451d3",
      "display": "My Medical Project"
    },
    "meta": {
      "versionId": "87ea5dfc-8b8e-384d-8489-79496e706390",
      "lastUpdated": {},
      "author": {
        "reference": "cd495e76-8385-ecb1-00a6-7e0381de4e42",
        "display": "John Doe"
      },
      "project": "f6f4da8d-93e8-8a08-220e-03b7810451d3",
      "compartment": [
        {
          "reference": "Project/f6f4da8d-93e8-8a08-220e-03b7810451d3"
        },
        {
          "reference": "Patient/de5c57ff-7257-57b0-13ab-aab6f5f91498"
        }
      ]
    }
  }
}
```
