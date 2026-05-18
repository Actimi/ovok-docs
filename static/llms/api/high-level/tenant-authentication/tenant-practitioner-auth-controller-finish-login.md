---
title: "Practitioner - Exchange Token"
sidebar_label: "Practitioner - Exchange Token"
description: "Login with challenge token. Success response contains access and refresh tokens."
---

# Practitioner - Exchange Token

<span className="api-method post">POST</span> `/auth/tenant/Practitioner/login/token`

<ApiBase inline={false} />

Login with challenge token. Success response contains access and refresh tokens.



## Request body

**Content-Type:** `application/json`

- `sessionCode`: `string` **(required)**
- `codeVerifier`: `string` **(required)**
- `tenantCode`: `string` **(required)**


## Responses

| Code | Description |
| --- | --- |
| `200` |  |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |
