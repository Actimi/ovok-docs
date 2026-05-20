---
title: "Update a project member"
sidebar_label: "Update a project member"
description: "Toggle admin status on an existing membership. Admin-only."
---

# Update a project member

**Available paths**

- <span className="api-method patch">PATCH</span> `/v1/projects/me/members/{id}`

<ApiBase inline={false} />

Toggle admin status on an existing membership. Admin-only.


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | path | `string` | **yes** |  |


## Request body

**Content-Type:** `application/json`

- `admin`: `boolean`


## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `MemberResponseDto` (`application/json`)

A team member on the caller’s current project — admin or practitioner.

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
