---
title: "Register an account"
sidebar_label: "Register an account"
description: "This API endpoint registers a user to a project."
---

# Register an account

<div className="endpoint-hero">

<div className="endpoint-hero__paths"><span className="api-method post">POST</span> <code className="endpoint-hero__path">/auth/b2b/register</code></div>

<ApiBase inline={false} />

</div>

This API endpoint registers a user to a project.

## Example cURL request

```bash
curl -X POST \
 --url 'https://api.dev.ovok.com/auth/b2b/register' \
 -H 'Content-Type: application/json' \
 -d '{
    "email": "max.mustermann@example.com",
    "password": "{GVQSQ;G[-g&lt;t6Mh",
    "name": "Max",
    "surname": "Mustermann",
    "tenantId": "87ea5dfc-8b8e-384d-8489-79496e706390",
    "clientId": "87ea5dfc-8b8e-384d-8489-79496e706390"
}'
```




## Request body

**Content-Type:** `application/json`

- `email`: `string` **(required)** — The email of the user registering, must be a valid email in order to send a verification email
- `password`: `string` **(required)**
- `name`: `string` **(required)** — The name of the user registering.
- `surname`: `string` **(required)** — The surname of the user registering.
- `tenantId`: `string` **(required)** — ID of the parent project.
- `clientId`: `string` **(required)** — ID of the client.


## Responses

| Code | Description |
| --- | --- |
| `200` | Login response with tokens and IDs. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `ResponseRegisterLoginDto` (`application/json`)

- `accessToken`: `string` **(required)** — Bearer access token. Expires in 1 hour.
- `refreshToken`: `string` — Refresh token.
- `expiresIn`: `integer` — Token expiration.
- `project`: `object` **(required)**
  - `reference`: `string` **(required)** — Reference of the project.
  - `display`: `string` **(required)** — Display name of the project.
- `profile`: `object` **(required)**
  - `reference`: `string` **(required)** — Reference of the profile.
  - `display`: `string` **(required)** — Display name of the profile.

**Example**

```json
{
  "accessToken": "example.jwt.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NzkyODUwNjUsImV4cCI6MTc3OTI4ODY2NX0.hWVqb9o_Bcix949tRWlNPQ36XFB1RuTGap56ovg1JKQ",
  "refreshToken": "example.jwt.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NzkyODUwNjUsImV4cCI6MTc3OTI4ODY2NX0.hWVqb9o_Bcix949tRWlNPQ36XFB1RuTGap56ovg1JKQ",
  "expiresIn": 3600,
  "project": {
    "reference": "Project/f6f4da8d-93e8-8a08-220e-03b7810451d3",
    "display": "My Medical Project"
  },
  "profile": {
    "reference": "Patient/de5c57ff-7257-57b0-13ab-aab6f5f91498",
    "display": "Max Mustermann"
  }
}
```
