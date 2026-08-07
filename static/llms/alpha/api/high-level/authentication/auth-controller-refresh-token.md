---
title: "Refresh access token"
sidebar_label: "Refresh access token"
description: "By making a POST request to this endpoint you can refresh the access token, ensuring uninterrupted access to protected resources."
---

# Refresh access token

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method post">POST</span> <code className="endpoint-hero__path">{"/auth/refresh-token"}</code></div>
</div>

<ApiBase inline={false} />

</div>

By making a POST request to this endpoint you can refresh the access token, ensuring uninterrupted access to protected resources.

## Example cURL request

```bash
curl -X POST \
 --url 'https://api.dev.ovok.com/auth/refresh-token' \
 -H 'Content-Type: application/json' \
 -d '{
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzEzMzY0NDIsImV4cCI6MTczMTM0MDA0Mn0.MQbovtK2tKu8Zj6_7vaqSVXWunIG8-iuwa6JEXCqXAQ"
}'
```




## Request body

**Content-Type:** `application/json`

- `refresh_token`: `string` **(required)** — Refresh token.


## Responses

| Code | Description |
| --- | --- |
| `200` | Access token, refresh token and expiration time. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `ResponseTokenDto` (`application/json`)

- `access_token`: `string` **(required)** — Bearer access token. Expires in 1 hour.
- `refresh_token`: `string` — Refresh token.
- `expires_in`: `integer` **(required)** — Token expiration.

**Example**

```json
{
  "access_token": "example.jwt.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3ODYwOTAxMTcsImV4cCI6MTc4NjA5MzcxN30.GtZL3qnLnOr_04SAHzPGwBwk5FDQPncMHxGaz8M_5OM",
  "refresh_token": "example.jwt.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3ODYwOTAxMTcsImV4cCI6MTc4NjA5MzcxN30.GtZL3qnLnOr_04SAHzPGwBwk5FDQPncMHxGaz8M_5OM",
  "expires_in": 3600
}
```
