---
title: "Get device telemetry history"
sidebar_label: "Get device telemetry history"
description: "Query observation history for a device from Signals. Defaults to the last 72 hours."
---

# Get device telemetry history

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">/fhir/Device/&#123;id&#125;/telemetry/history</code></div>
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">/fhir/R4/Device/&#123;id&#125;/telemetry/history</code></div>
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">/fhir/R5/Device/&#123;id&#125;/telemetry/history</code></div>
</div>

<ApiBase inline={false} />

</div>

Query observation history for a device from Signals. Defaults to the last 72 hours.


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | path | `string` | **yes** | FHIR Device id whose historical observations should be returned from Signals. |
| `from` | query | `string` | no | ISO-8601 lower bound (inclusive) on observation effective time. Defaults to 72 hours before `to` when omitted. |
| `to` | query | `string` | no | ISO-8601 upper bound (inclusive) on observation effective time. Defaults to now when omitted. |
| `code` | query | `string` | no | Observation code to filter the history by (e.g. a LOINC or SNOMED code). |
| `page` | query | `integer` | no | 1-indexed page number for paginated results. Defaults to `1`. |
| `pageSize` | query | `integer` | no | Number of items per page, between 1 and 100. Defaults to `50`. |



## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
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
