---
title: "Log out (server-side token revocation)"
sidebar_label: "Log out (server-side token revocation)"
description: "## Log out"
---

# Log out (server-side token revocation)

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method post">POST</span> <code className="endpoint-hero__path">{"/auth/logout"}</code></div>
</div>

<ApiBase inline={false} />

</div>

## Log out

Server-side logout — adds the caller's Bearer token to a Redis-backed
revocation denylist so it cannot be replayed after the user signs out.

Closes the token-reuse-after-logout gap tracked in
[carehub-product-roadmap#949](https://github.com/Actimi/carehub-product-roadmap/issues/949).
Prior to this endpoint, the FE could only clear `localStorage`; the
token itself stayed cryptographically valid on every API endpoint for
its natural 60-minute lifetime.

## Behaviour

- **Auth required.** The caller must be authenticated; unauthed callers
  receive `401` via the global `BearerAuthGuard`.
- **Idempotent.** Repeated calls from the same token return `204` and
  have no additional side-effects.
- **TTL.** The denylist entry lives for exactly the token's remaining
  lifetime (from the `exp` claim). The denylist cannot grow larger than
  the pool of currently-live tokens.
- **No response body.** Returns `204 No Content`.

## Frontend integration

Call `POST /v1/auth/logout` before clearing local storage on user-
initiated logout. After the call succeeds (or fails — a Redis outage
must not block the UX), also clear the local session state and route
the user to the sign-in page. The revocation guard on the next authed
request will surface `401` for any lingering token copy captured via
XSS, shoulder surfing, or a compromised device.





## Responses

| Code | Description |
| --- | --- |
| `200` | Token was added to the revocation denylist. Returns 204 No Content. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |
