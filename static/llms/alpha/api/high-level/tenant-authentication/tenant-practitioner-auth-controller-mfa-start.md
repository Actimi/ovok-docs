---
title: "Practitioner - MFA"
sidebar_label: "Practitioner - MFA"
description: "Login with MFA token. Success response contains a challenge token that can be used to finish login via login/token endpoint."
---

# Practitioner - MFA

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method post">POST</span> <code className="endpoint-hero__path">{"/auth/tenant/Practitioner/login/mfa"}</code></div>
</div>

<ApiBase inline={false} />

</div>

Login with MFA token. Success response contains a challenge token that can be used to finish login via login/token endpoint.



## Request body

**Content-Type:** `application/json`

- `mfaToken`: `string` **(required)**
- `loginId`: `string` **(required)**


## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `StartPractitionerMFAResponseDto` (`application/json`)

- `nextStep`: `string` **(required)**
- `sessionCode`: `string` **(required)**
- `tenants`: `object[]` **(required)**
  - `project`: `—`
  - `profile`: `—`
  - `tenantCode`: `string` **(required)**

**Example**

```json
{
  "nextStep": "token",
  "sessionCode": "MttZmYcwdDLJz8v6mnUMN8EqfnEirjo4"
}
```
