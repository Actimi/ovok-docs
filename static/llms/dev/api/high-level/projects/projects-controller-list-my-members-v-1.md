---
title: "List project members"
sidebar_label: "List project members"
description: "Members of the caller’s current project, including pending invites (users who have not completed their first sign-in)."
---

# List project members

<div className="endpoint-hero">

<div className="endpoint-hero__paths"><span className="api-method get">GET</span> <code className="endpoint-hero__path">/v1/projects/me/members</code></div>

<ApiBase inline={false} />

</div>

Members of the caller’s current project, including pending invites (users who have not completed their first sign-in).




## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `MembersListResponseDto` (`application/json`)

Team members on the caller’s current project, including pending invites (users who have not completed their first sign-in).

Array of `object`:

- `id`: `string` **(required)** — ProjectMembership resource id.
- `email`: `string` **(required)**
- `displayName`: `string` **(required)**
- `firstName`: `string` **(required)**
- `lastName`: `string` **(required)**
- `admin`: `boolean` **(required)**
- `profileType`: `string` **(required)**
- `profileId`: `string` **(required)**
- `pending`: `boolean` **(required)** — True when the user has never completed the invite (no password set yet).
- `invitedAt`: `string` **(required)** — ISO-8601 timestamp of the invite, or null when not known.
