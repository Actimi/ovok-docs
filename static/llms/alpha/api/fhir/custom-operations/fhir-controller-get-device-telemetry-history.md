---
title: "Get device telemetry history"
sidebar_label: "Get device telemetry history"
description: "Query observation history for a device from Signals. Defaults to the last 72 hours."
---

# Get device telemetry history

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">{"/fhir/Device/{id}/telemetry/history"}</code></div>
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">{"/fhir/R4/Device/{id}/telemetry/history"}</code></div>
</div>

<ApiBase inline={false} />

</div>

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
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |
