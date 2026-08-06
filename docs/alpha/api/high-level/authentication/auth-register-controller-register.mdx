---
title: "Register an account"
sidebar_label: "Register an account"
description: "The Register API endpoint allows users to create a new account on the Ovok platform."
---

# Register an account

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method post">POST</span> <code className="endpoint-hero__path">{"/auth/register"}</code></div>
</div>

<ApiBase inline={false} />

</div>

The Register API endpoint allows users to create a new account on the Ovok platform.
<br />This API is essential for onboarding new users and providing access to Ovok services.

## Example cURL request

```bash
curl -X POST \
 --url 'https://api.dev.ovok.com/auth/register' \
 -H 'Content-Type: application/json' \
 -d '{
    "email": "john.doe@mail.com",
    "password": "password1234",
    "clientId": "5e505642-9024-474d-9434-e5a44f505cc5",
    "type": "Patient",
    "name": "John",
    "surname": "Doe"
}'
```




## Request body

**Content-Type:** `application/json`

- `email`: `string` **(required)** — The email of the user registering, must be a valid email in order to send a verification email
- `password`: `string` **(required)**
- `clientId`: `string` **(required)** — The client id of the user registering, must be a client id of an existing client resource in the Project
- `name`: `string` **(required)** — The name of the user registering.
- `surname`: `string` **(required)** — The surname of the user registering.


## Responses

| Code | Description |
| --- | --- |
| `200` | Access token, refresh token and expiration time. |
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
  "accessToken": "example.jwt.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3ODYwMDYyMzYsImV4cCI6MTc4NjAwOTgzNn0.j87SYNCfiPlPpVZzoV7W6BfJWX8_xQmfZbUB1SUm4dU",
  "refreshToken": "example.jwt.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3ODYwMDYyMzYsImV4cCI6MTc4NjAwOTgzNn0.j87SYNCfiPlPpVZzoV7W6BfJWX8_xQmfZbUB1SUm4dU",
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
