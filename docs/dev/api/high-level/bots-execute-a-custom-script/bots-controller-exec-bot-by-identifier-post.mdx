---
title: "Execute a bot with request body"
sidebar_label: "Execute a bot with request body"
description: "This API executes a bot by its identifier."
---

# Execute a bot with request body

<div className="endpoint-hero">

<div className="endpoint-hero__paths"><span className="api-method post">POST</span> <code className="endpoint-hero__path">/bots</code></div>

<ApiBase inline={false} />

</div>

This API executes a bot by its identifier.
<br />Additional parameters can be provided in the request body.

## Example bot resource

```json
{
  "resourceType": "Bot",
  "identifier": [{
    "system": "https://example.com",
    "value": "get-users"
  }],
  ...
}
```

## Example cURL request

The bot identifier is provided in the query, while additional parameters are sent in the JSON body.

```bash
curl -X POST \
 --url 'https://api.dev.ovok.com/bots?identifier=https://example.com|get-users' \
 -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzEzMzY0NDIsImV4cCI6MTczMTM0MDA0Mn0.MQbovtK2tKu8Zj6_7vaqSVXWunIG8-iuwa6JEXCqXAQ' \
 -H 'Content-Type: application/json' \
 -d '{
    "parameter1": "value1",
    "parameter2": "value2"
}'
```

**Note**: The `https://example.com|get-users` query parameter value consists of identifier's `system` and `value` properties merged by a single pipe `|` symbol, following the FHIR search parameter syntax.



## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `identifier` | query | `string` | **yes** | Bot identifier in FHIR `system|value` form (e.g. `https://example.com|get-users`); the `system` half may be omitted. The request body is forwarded to the bot as its input. |



## Responses

| Code | Description |
| --- | --- |
| `200` | Bot response (shape depends on the bot). |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `BotExecResponseDto` (`application/json`)

Whatever the bot script returns. Shape is bot-specific — typically a FHIR Parameters/OperationOutcome resource or an arbitrary JSON object. SDK consumers should treat this as `unknown` and narrow per bot.

- `resourceType`: `string` — Present when the bot returns a FHIR resource (often Parameters or OperationOutcome).

_Additional properties allowed._
