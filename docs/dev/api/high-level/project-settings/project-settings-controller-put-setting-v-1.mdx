---
title: "Toggle a project setting"
sidebar_label: "Toggle a project setting"
description: "Flip a single boolean setting on the caller's current project. Some keys (`CONTENT_ENABLED`, `MAILING_ENABLED`) are paid-tier add-ons and return 402 on Free; fl"
---

# Toggle a project setting

<div className="endpoint-hero">

<div className="endpoint-hero__paths"><span className="api-method put">PUT</span> <code className="endpoint-hero__path">{"/v1/project/settings/{key}"}</code></div>

<ApiBase inline={false} />

</div>

Flip a single boolean setting on the caller's current project. Some keys (`CONTENT_ENABLED`, `MAILING_ENABLED`) are paid-tier add-ons and return 402 on Free; flipping them OFF is always allowed so a tier downgrade doesn't strand a project. Admin only.

### Body

`{ "enabled": true | false }`

### Example

```bash
curl -X PUT '<APP_BASE_URL>/v1/project/settings/WEARABLE_STRAVA_ENABLED' \
  -H 'Authorization: Bearer <admin-token>' \
  -H 'Content-Type: application/json' \
  -d '{ "enabled": true }'
```

Returns the full updated settings map.


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | path | `string` | **yes** |  |


## Request body

**Content-Type:** `application/json`

- `enabled`: `boolean` **(required)**


## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `ProjectSettingsResponseDto` (`application/json`)

Boolean toggle state for every known project setting

- `projectId`: `string` **(required)**
- `settings`: `object` **(required)**

**Example**

```json
{
  "projectId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "settings": {
    "CONTENT_ENABLED": false,
    "PATIENT_INVITATION_ENABLED": true,
    "PATIENT_REGISTRATION_ENABLED": true,
    "PATIENT_LOGIN_ENABLED": true,
    "PRACTITIONER_INVITATION_ENABLED": true,
    "PRACTITIONER_REGISTRATION_ENABLED": false,
    "PRACTITIONER_LOGIN_ENABLED": true
  }
}
```
