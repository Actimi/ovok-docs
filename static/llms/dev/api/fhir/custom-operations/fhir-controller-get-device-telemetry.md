---
title: "Get device telemetry"
sidebar_label: "Get device telemetry"
description: "Returns the current effective telemetry for a device as a FHIR searchset Bundle of Observations, derived from the device's state machine snapshot. One Observati"
---

# Get device telemetry

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">/fhir/Device/&#123;id&#125;/telemetry</code></div>
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">/fhir/R4/Device/&#123;id&#125;/telemetry</code></div>
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">/fhir/R5/Device/&#123;id&#125;/telemetry</code></div>
</div>

<ApiBase inline={false} />

</div>

Returns the current effective telemetry for a device as a FHIR searchset Bundle of Observations, derived from the device's state machine snapshot. One Observation per metric is included: presence, heart rate (when a fresh value is cached), respiratory rate (when a fresh value is cached), and sleep status. Each Observation uses its own `effectiveInstant` so clients can reason about staleness per metric.

## Example cURL request

```bash
curl -X GET \
 'https://api.dev.ovok.com/fhir/R4/Device/87ea5dfc-8b8e-384d-8489-79496e706390/telemetry' \
 -H 'Authorization: Bearer <token>'
```

## Example JSON response

```json
{
  "resourceType": "Bundle",
  "type": "searchset",
  "total": 4,
  "entry": [
    {
      "resource": {
        "resourceType": "Observation",
        "id": "presence",
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "https://sleepiz.com/fhir/CodeSystem/observation-codes",
              "code": "presence-detection",
              "display": "Presence detection"
            }
          ]
        },
        "subject": { "reference": "Device/87ea5dfc-8b8e-384d-8489-79496e706390" },
        "device": { "reference": "Device/87ea5dfc-8b8e-384d-8489-79496e706390" },
        "effectiveInstant": "2026-04-22T10:00:00.000Z",
        "valueBoolean": true
      }
    },
    {
      "resource": {
        "resourceType": "Observation",
        "id": "heartRate",
        "status": "final",
        "code": {
          "coding": [{ "system": "http://loinc.org", "code": "8867-4", "display": "Heart rate" }]
        },
        "subject": { "reference": "Device/87ea5dfc-8b8e-384d-8489-79496e706390" },
        "device": { "reference": "Device/87ea5dfc-8b8e-384d-8489-79496e706390" },
        "effectiveInstant": "2026-04-22T10:00:00.000Z",
        "valueQuantity": { "value": 72, "unit": "beats/min", "system": "http://unitsofmeasure.org", "code": "/min" }
      }
    },
    {
      "resource": {
        "resourceType": "Observation",
        "id": "respiratoryRate",
        "status": "final",
        "code": {
          "coding": [{ "system": "http://loinc.org", "code": "9279-1", "display": "Respiratory rate" }]
        },
        "subject": { "reference": "Device/87ea5dfc-8b8e-384d-8489-79496e706390" },
        "device": { "reference": "Device/87ea5dfc-8b8e-384d-8489-79496e706390" },
        "effectiveInstant": "2026-04-22T10:00:00.000Z",
        "valueQuantity": { "value": 14, "unit": "breaths/min", "system": "http://unitsofmeasure.org", "code": "/min" }
      }
    },
    {
      "resource": {
        "resourceType": "Observation",
        "id": "sleep",
        "status": "final",
        "code": {
          "coding": [{ "system": "http://loinc.org", "code": "107145-5", "display": "Sleep status" }]
        },
        "subject": { "reference": "Device/87ea5dfc-8b8e-384d-8489-79496e706390" },
        "device": { "reference": "Device/87ea5dfc-8b8e-384d-8489-79496e706390" },
        "effectiveInstant": "2026-04-22T10:00:00.000Z",
        "valueCodeableConcept": { "text": "asleep" }
      }
    }
  ]
}
```



## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | path | `string` | **yes** | FHIR Device id whose latest telemetry observations should be returned. |



## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `DeviceTelemetryResponseDto` (`application/json`)

- `resourceType`: `string` **(required)**
- `type`: `string` **(required)**
- `total`: `number`
- `entry`: `object[]` **(required)**
  - `resource`: `object` **(required)**
  - `fullUrl`: `string`

**Example**

```json
{
  "resourceType": "Bundle",
  "type": "searchset",
  "total": 4,
  "entry": [
    {
      "resource": {
        "resourceType": "Observation",
        "id": "presence",
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "https://sleepiz.com/fhir/CodeSystem/observation-codes",
              "code": "presence-detection",
              "display": "Presence detection"
            }
          ]
        },
        "subject": {
          "reference": "Device/87ea5dfc-8b8e-384d-8489-79496e706390"
        },
        "effectiveInstant": {},
        "valueBoolean": true
      }
    },
    {
      "resource": {
        "resourceType": "Observation",
        "id": "heartRate",
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8867-4",
              "display": "Heart rate"
            }
          ]
        },
        "subject": {
          "reference": "Device/87ea5dfc-8b8e-384d-8489-79496e706390"
        },
        "effectiveInstant": {},
        "valueQuantity": {
          "value": 72,
          "unit": "beats/min",
          "system": "http://unitsofmeasure.org",
          "code": "/min"
        }
      }
    },
    {
      "resource": {
        "resourceType": "Observation",
        "id": "respiratoryRate",
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "9279-1",
              "display": "Respiratory rate"
            }
          ]
        },
        "subject": {
          "reference": "Device/87ea5dfc-8b8e-384d-8489-79496e706390"
        },
        "effectiveInstant": {},
        "valueQuantity": {
          "value": 14,
          "unit": "breaths/min",
          "system": "http://unitsofmeasure.org",
          "code": "/min"
        }
      }
    },
    {
      "resource": {
        "resourceType": "Observation",
        "id": "sleep",
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "107145-5",
              "display": "Sleep status"
            }
          ]
        },
        "subject": {
          "reference": "Device/87ea5dfc-8b8e-384d-8489-79496e706390"
        },
        "effectiveInstant": {},
        "valueCodeableConcept": {
          "text": "asleep"
        }
      }
    }
  ]
}
```
