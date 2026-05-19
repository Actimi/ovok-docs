---
title: "Revoke sessions"
sidebar_label: "Revoke sessions"
description: "The Delete Session API endpoint revokes session(s) from the Ovok platform. The access and refresh tokens for the sessions(s) will be invalidated."
---

# Revoke sessions

<span className="api-method delete">DELETE</span> `/auth/session/{option}`

<ApiBase inline={false} />

The Delete Session API endpoint revokes session(s) from the Ovok platform. The access and refresh tokens for the sessions(s) will be invalidated.
You can specify if you'd like to revoke `all`, `current`, `other` or a specific session by providing the session ID.

## Example cURL request

```bash
curl -X DELETE \
 --url 'https://api.sandbox.ovok.com/auth/session/other' \
 -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NzkyMDQwNzgsImV4cCI6MTc3OTIwNzY3OH0.bYumRbOBAUVMnJh6wZmCNO6eYR3aDvqrDxPw1QyDXCo'
```



## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `option` | path | `—` | **yes** |  |



## Responses

| Code | Description |
| --- | --- |
| `200` |  |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |
