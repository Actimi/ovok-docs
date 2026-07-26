---
title: "Get all sessions"
sidebar_label: "Get all sessions"
description: "The GET Session API endpoint retrieves all sessions from the Ovok platform."
---

# Get all sessions

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">{"/auth/session"}</code></div>
</div>

<ApiBase inline={false} />

</div>

The GET Session API endpoint retrieves all sessions from the Ovok platform.

## Example cURL request

```bash
curl -X GET \
 --url 'https://api.dev.ovok.com/auth/session' \
 -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3ODUwNzYyNjAsImV4cCI6MTc4NTA3OTg2MH0.x_CNpfvtHM8HhFQNDWZYLkDEtrZrMelplRsorMvWnuU'
```





## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `SessionsResponseDto` (`application/json`)

- `sessions`: `object[]` **(required)**
  - `id`: `string` **(required)**
  - `lastUpdated`: `string` **(required)**
  - `authMethod`: `string` **(required)**
  - `remoteAddress`: `string` **(required)**
  - `browser`: `string` **(required)**
  - `os`: `string` **(required)**

**Example**

```json
{
  "sessions": [
    {
      "id": "4e5a2893-bdcc-7d23-9c1d-b72e4c4ffbe4",
      "lastUpdated": {},
      "authMethod": "password",
      "remoteAddress": "192.168.1.1",
      "browser": "Chrome",
      "os": "Mac OS"
    }
  ]
}
```
