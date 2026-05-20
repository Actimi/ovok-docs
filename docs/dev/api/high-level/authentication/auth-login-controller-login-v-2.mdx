---
title: "Login"
sidebar_label: "Login"
description: "The Login API endpoint facilitates the authentication process, allowing users to obtain a JWT (JSON Web Token) for subsequent authorized requests."
---

# Login

**Available paths**

- <span className="api-method post">POST</span> `/v2/auth/login`

<ApiBase inline={false} />

The Login API endpoint facilitates the authentication process, allowing users to obtain a JWT (JSON Web Token) for subsequent authorized requests.
<br />This API is crucial for secure access to Ovok services.

## Example cURL request

```bash
curl -X POST \
 --url 'https://api.dev.ovok.com/auth/login' \
 -H 'Content-Type: application/json' \
 -d '{
    "email": "john.doe@mail.com",
    "password": "password1234",
    "clientId": "5e505642-9024-474d-9434-e5a44f505cc5"
}'
```




## Request body

**Content-Type:** `application/json`

- `email`: `string` **(required)** — The user's email address.
- `password`: `string` **(required)** — The user's password.
- `clientId`: `string` **(required)** — The client ID from the ClientApplication resource.


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
  "accessToken": "example.jwt.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NzkyNjc3MTAsImV4cCI6MTc3OTI3MTMxMH0.5ZAIfQX3JUeRoBRZ0jvqywCpqI8NauHlsdeDO4PuBrA",
  "refreshToken": "example.jwt.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NzkyNjc3MTAsImV4cCI6MTc3OTI3MTMxMH0.5ZAIfQX3JUeRoBRZ0jvqywCpqI8NauHlsdeDO4PuBrA",
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
