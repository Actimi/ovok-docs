---
title: "Expand Observation SampledData to a {t,v} time-series"
sidebar_label: "Expand Observation SampledData to a {t,v}…"
description: "Custom operation on `Observation/:id`. Set `?asTimeseries=true` to get a JSON time-series instead of the raw FHIR resource. Useful for plotting Observations who"
---

# Expand Observation SampledData to a &#123;t,v&#125; time-series

**Available paths**

- <span className="api-method get">GET</span> `/fhir/Observation/{id}`
- <span className="api-method get">GET</span> `/fhir/R4/Observation/{id}`
- <span className="api-method get">GET</span> `/fhir/R5/Observation/{id}`

<ApiBase inline={false} />

Custom operation on `Observation/:id`. Set `?asTimeseries=true` to get a JSON time-series instead of the raw FHIR resource. Useful for plotting Observations whose values are stored as `valueSampledData` (ECG traces, accelerometer streams, contiguous vital-sign batches). Requests without the flag pass through to the standard FHIR GET.


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | path | `string` | **yes** |  |



## Responses

| Code | Description |
| --- | --- |
| `200` |  |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `ObservationTimeseriesResponseDto` (`application/json`)

Expanded &#123;timestamp, value&#125; view of an Observation's SampledData. Returned when GET Observation/:id is called with ?asTimeseries=true. One entry per (component × dimension) combination; the root SampledData (if any) emits one entry with code=null.

- `observationId`: `string` **(required)**
- `effectiveStart`: `string` **(required)** — ISO-8601 anchor for the first sample (t0).
- `periodMs`: `number` **(required)** — Milliseconds between consecutive samples.
- `series`: `array` **(required)**
