---
title: "Patient - Login"
sidebar_label: "Patient - Login"
description: "Login with email and password. Response either contains challange or MFA challenge - which is followed up by challenge as a second step as well."
---

# Patient - Login

<span className="api-method post">POST</span> `/auth/tenant/Patient/login/start`

<ApiBase inline={false} />

Login with email and password. Response either contains challange or MFA challenge - which is followed up by challenge as a second step as well.



## Request body

**Content-Type:** `application/json`

- `email`: `string` **(required)**
- `password`: `string` **(required)**
- `tenantCode`: `string` **(required)** — Tenant code, e.g. "big-health-company"
- `codeChallenge`: `string` **(required)** — A randomly generated text that is sent from client application, the client application should generate it using the codeVerifier from the challange


## Responses

| Code | Description |
| --- | --- |
| `200` |  |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |
