---
title: "List project settings"
sidebar_label: "List project settings"
description: "Returns every boolean setting on the caller's current project as a single map. Settings drive opt-in features (Payload CMS, custom mailing, wearable integration"
---

# List project settings

**Available paths**

- <span className="api-method get">GET</span> `/v1/project/settings`

<ApiBase inline={false} />

Returns every boolean setting on the caller's current project as a single map. Settings drive opt-in features (Payload CMS, custom mailing, wearable integrations, patient registration policies, …).

Defaults are applied for any setting the project has not explicitly set — see `PROJECT_SETTING_DEFAULTS` server-side. Admin only.

### Example

```bash
curl '<APP_BASE_URL>/v1/project/settings' \
  -H 'Authorization: Bearer <admin-token>'
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
