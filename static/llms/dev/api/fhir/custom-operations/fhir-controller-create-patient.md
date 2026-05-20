---
title: "Create Patient with Signals linking"
sidebar_label: "Create Patient with Signals linking"
description: "Create a FHIR Patient resource. When withSignals=true, also provisions a corresponding Signals patient."
---

# Create Patient with Signals linking

**Available paths**

- <span className="api-method post">POST</span> `/fhir/Patient`
- <span className="api-method post">POST</span> `/fhir/R4/Patient`
- <span className="api-method post">POST</span> `/fhir/R5/Patient`

<ApiBase surface="api" inline={false} />

Create a FHIR Patient resource. When withSignals=true, also provisions a corresponding Signals patient.


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `withSignals` | query | `boolean` | no |  |



## Responses

| Code | Description |
| --- | --- |
| `200` |  |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `PatientResponseDto` (`application/json`)

A FHIR Patient resource as stored in the FHIR API. When created with `?withSignals=true` the resource is re-read after Signals provisioning so any identifiers stamped by the link step are reflected.

- `resourceType`: `string` **(required)**
- `id`: `string` **(required)**

_Additional properties allowed._

**Example**

```json
{
  "resourceType": "Patient",
  "id": "87ea5dfc-8b8e-384d-8489-79496e706390",
  "meta": {
    "versionId": "1",
    "lastUpdated": {}
  },
  "name": [
    {
      "given": [
        "Ada"
      ],
      "family": "Lovelace"
    }
  ],
  "birthDate": {},
  "gender": "female"
}
```
