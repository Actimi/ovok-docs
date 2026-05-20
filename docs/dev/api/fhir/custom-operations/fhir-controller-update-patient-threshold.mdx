---
title: "Update patient threshold"
sidebar_label: "Update patient threshold"
description: "Save a patient-level threshold CarePlan. When updateOnSignals=true, also pushes the configuration to Signals."
---

# Update patient threshold

**Available paths**

- <span className="api-method put">PUT</span> `/fhir/Patient/{id}/threshold`
- <span className="api-method put">PUT</span> `/fhir/R4/Patient/{id}/threshold`
- <span className="api-method put">PUT</span> `/fhir/R5/Patient/{id}/threshold`

<ApiBase inline={false} />

Save a patient-level threshold CarePlan. When updateOnSignals=true, also pushes the configuration to Signals.


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | path | `string` | **yes** | FHIR Patient id whose threshold CarePlan should be created or updated. |
| `updateOnSignals` | query | `boolean` | no | Set to `true` to also push the updated threshold configuration to Signals. Defaults to `false`. |


## Request body

**Content-Type:** `application/json`

- `id`: `string`
- `patientId`: `string` **(required)**
- `projectId`: `string`
- `status`: `string` **(required)**
- `date`: `string`
- `settings`: `object` **(required)**


## Responses

| Code | Description |
| --- | --- |
| `200` |  |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `PatientThresholdResponseDto` (`application/json`)

Persisted patient threshold configuration. Stored as a FHIR CarePlan whose detail extensions encode per-observation min/max bounds. When `?updateOnSignals=true` was sent, the same configuration has been pushed to Signals (failures are logged, not surfaced — the saved CarePlan is still returned).

- `resourceType`: `string` **(required)** — Patient thresholds are persisted as a FHIR CarePlan.
- `id`: `string` **(required)**
- `subject`: `object` **(required)**

_Additional properties allowed._

**Example**

```json
{
  "resourceType": "CarePlan",
  "id": "87ea5dfc-8b8e-384d-8489-79496e706390",
  "status": "active",
  "intent": "plan",
  "subject": {
    "reference": "Patient/87ea5dfc-8b8e-384d-8489-79496e706390"
  },
  "category": [
    {
      "coding": [
        {
          "system": "https://ovok.com/fhir/CodeSystem/care-plan-category",
          "code": "thresholds"
        }
      ]
    }
  ]
}
```
