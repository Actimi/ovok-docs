---
title: "Get all sessions"
sidebar_label: "Get all sessions"
description: "The GET Session API endpoint retrieves all sessions from the Ovok platform."
---

# Get all sessions

<span className="api-method get">GET</span> `/auth/session`

<ApiBase inline={false} />

The GET Session API endpoint retrieves all sessions from the Ovok platform.

## Example cURL request

```bash
curl -X GET \
 --url 'https://api.dev.ovok.com/auth/session' \
 -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NzgxMDg5MzQsImV4cCI6MTc3ODExMjUzNH0.xLs8hvtYqtL9CS-8CY8Izq4_1JRXmC5IBo8y9JCHAqc'
```





## Responses

| Code | Description |
| --- | --- |
| `200` |  |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |
