---
title: "Get account information"
sidebar_label: "Get account information"
description: "This API fetches the user profile information."
---

# Get account information

**Available paths**

- <span className="api-method get">GET</span> `/auth/me`

<ApiBase inline={false} />

This API fetches the user profile information.

## Example cURL request

```bash
curl -X GET \
 --url 'https://api.dev.ovok.com/auth/me' \
 -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzEzMzY0NDIsImV4cCI6MTczMTM0MDA0Mn0.MQbovtK2tKu8Zj6_7vaqSVXWunIG8-iuwa6JEXCqXAQ'
```





## Responses

| Code | Description |
| --- | --- |
| `200` | User profile returned. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `ResponseMeDto` (`application/json`)

- `project`: `object` **(required)**
  - `resourceType`: `string` **(required)**
  - `id`: `string` **(required)**
  - `name`: `string` **(required)**
  - `strictMode`: `boolean` **(required)**
- `membership`: `object` **(required)**
  - `resourceType`: `string` **(required)**
  - `id`: `string` **(required)**
  - `user`: `object` **(required)**
- `profile`: `object` **(required)**
  - `resourceType`: `string` **(required)**
  - `id`: `string` **(required)**
  - `name`: `object[]` **(required)**
  - `telecom`: `object[]` **(required)**
- `config`: `object` **(required)**
  - `resourceType`: `string` **(required)**
  - `menu`: `object[]` **(required)**
- `accessPolicy`: `object` **(required)**
  - `resourceType`: `string` **(required)**
  - `resource`: `object[]` **(required)**
  - `ipAccessRule`: `object[]` **(required)**
- `security`: `object` **(required)**
  - `mfaEnrolled`: `boolean` **(required)**
  - `sessions`: `object[]` **(required)**

**Example**

```json
{
  "project": {
    "resourceType": "Project",
    "id": "f6f4da8d-93e8-8a08-220e-03b7810451d3",
    "name": "Example Project",
    "strictMode": true
  },
  "membership": {
    "resourceType": "ProjectMembership",
    "id": "d7f418aa-467d-d1ea-f0fc-d2dd841733e6",
    "user": {
      "reference": "9f8a2389-a20c-a075-2aa9-e95093515517",
      "display": "max.mustermann@example.com"
    }
  },
  "profile": {
    "resourceType": "Patient",
    "id": "de5c57ff-7257-57b0-13ab-aab6f5f91498",
    "name": [
      {
        "given": [
          "Example Patient"
        ],
        "family": "1"
      }
    ],
    "telecom": [
      {
        "system": "email",
        "use": "work",
        "value": "max.mustermann@example.com"
      }
    ]
  },
  "config": {
    "resourceType": "UserConfiguration",
    "menu": [
      {
        "title": "Favorites",
        "link": []
      }
    ]
  },
  "accessPolicy": {
    "resourceType": "AccessPolicy",
    "resource": [
      {
        "resourceType": "*"
      }
    ],
    "ipAccessRule": []
  },
  "security": {
    "mfaEnrolled": false,
    "sessions": []
  }
}
```
