---
title: "Practitioner - Exchange Token"
sidebar_label: "Practitioner - Exchange Token"
description: "Login with challenge token. Success response contains access and refresh tokens."
---

# Practitioner - Exchange Token

<div className="endpoint-hero">

<div className="endpoint-hero__paths"><span className="api-method post">POST</span> <code className="endpoint-hero__path">/auth/tenant/Practitioner/login/token</code></div>

<ApiBase inline={false} />

</div>

Login with challenge token. Success response contains access and refresh tokens.



## Request body

**Content-Type:** `application/json`

- `sessionCode`: `string` **(required)**
- `codeVerifier`: `string` **(required)**
- `tenantCode`: `string` **(required)**


## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
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
