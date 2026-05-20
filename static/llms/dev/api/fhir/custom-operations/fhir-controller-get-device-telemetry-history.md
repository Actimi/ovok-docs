---
title: "Get device telemetry history"
sidebar_label: "Get device telemetry history"
description: "Query observation history for a device from Signals. Defaults to the last 72 hours."
---

# Get device telemetry history

**Available paths**

- <span className="api-method get">GET</span> `/fhir/Device/{id}/telemetry/history`
- <span className="api-method get">GET</span> `/fhir/R4/Device/{id}/telemetry/history`
- <span className="api-method get">GET</span> `/fhir/R5/Device/{id}/telemetry/history`

<ApiBase inline={false} />

Query observation history for a device from Signals. Defaults to the last 72 hours.


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | path | `string` | **yes** |  |
| `from` | query | `string` | no |  |
| `to` | query | `string` | no |  |
| `code` | query | `string` | no |  |
| `page` | query | `integer` | no |  |
| `pageSize` | query | `integer` | no |  |



## Responses

| Code | Description |
| --- | --- |
| `200` |  |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `DeviceTelemetryHistoryResponseDto` (`application/json`)

Observation history for a Device, fetched via the Signals service. Defaults to the last 72 hours when `from`/`to` are omitted. Pagination and shape beyond the three fixed ids depend on the upstream Signals response.

- `deviceId`: `string` **(required)** — FHIR Device id whose telemetry history was queried.
- `patientId`: `string` **(required)** — FHIR Patient id linked to the Device.
- `signalsPatientId`: `string` **(required)** — Internal Signals patient id used to fetch the history.

_Additional properties allowed._

**Example**

```json
{
  "deviceId": "87ea5dfc-8b8e-384d-8489-79496e706390",
  "patientId": "87ea5dfc-8b8e-384d-8489-79496e706390",
  "signalsPatientId": "signals-abc-123",
  "page": 1,
  "pageSize": 100,
  "total": 4,
  "entries": [
    {
      "resourceType": "Observation",
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
      "effectiveInstant": {},
      "valueQuantity": {
        "value": 72,
        "unit": "beats/min"
      }
    }
  ]
}
```
