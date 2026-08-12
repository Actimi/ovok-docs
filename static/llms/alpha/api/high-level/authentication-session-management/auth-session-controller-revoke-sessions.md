---
title: "Revoke sessions"
sidebar_label: "Revoke sessions"
description: "The Delete Session API endpoint revokes session(s) from the Ovok platform. The access and refresh tokens for the sessions(s) will be invalidated."
---

# Revoke sessions

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method delete">DELETE</span> <code className="endpoint-hero__path">{"/auth/session/{option}"}</code></div>
</div>

<ApiBase inline={false} />

</div>

The Delete Session API endpoint revokes session(s) from the Ovok platform. The access and refresh tokens for the sessions(s) will be invalidated.
You can specify if you'd like to revoke `all`, `current`, `other` or a specific session by providing the session ID.

## Example cURL request

```bash
curl -X DELETE \
 --url 'https://api.dev.ovok.com/auth/session/other' \
 -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3ODY1MjUyMDIsImV4cCI6MTc4NjUyODgwMn0.NnQILDIkMWWx_NY0O06QRXrJtohNh7uBcNre1id122E'
```



## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `option` | path | `—` | **yes** |  |



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
