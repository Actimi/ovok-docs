---
title: "Update patient threshold"
sidebar_label: "Update patient threshold"
description: "Save a patient-level threshold CarePlan. When updateOnSignals=true, also pushes the configuration to Signals."
---

# Update patient threshold

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method put">PUT</span> <code className="endpoint-hero__path">/fhir/Patient/&#123;id&#125;/threshold</code></div>
  <div className="endpoint-hero__path-row"><span className="api-method put">PUT</span> <code className="endpoint-hero__path">/fhir/R4/Patient/&#123;id&#125;/threshold</code></div>
  <div className="endpoint-hero__path-row"><span className="api-method put">PUT</span> <code className="endpoint-hero__path">/fhir/R5/Patient/&#123;id&#125;/threshold</code></div>
</div>

<ApiBase inline={false} />

</div>

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
| `200` | Success. |
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
  - `reference`: `string` **(required)**

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
