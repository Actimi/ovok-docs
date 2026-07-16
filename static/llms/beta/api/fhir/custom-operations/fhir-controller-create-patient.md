---
title: "Create Patient with Signals linking"
sidebar_label: "Create Patient with Signals linking"
description: "Create a FHIR Patient resource. When withSignals=true, also provisions a corresponding Signals patient."
---

# Create Patient with Signals linking

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method post">POST</span> <code className="endpoint-hero__path">{"/fhir/Patient"}</code></div>
  <div className="endpoint-hero__path-row"><span className="api-method post">POST</span> <code className="endpoint-hero__path">{"/fhir/R4/Patient"}</code></div>
  <div className="endpoint-hero__path-row"><span className="api-method post">POST</span> <code className="endpoint-hero__path">{"/fhir/R5/Patient"}</code></div>
</div>

<ApiBase inline={false} />

</div>

Create a FHIR Patient resource. When withSignals=true, also provisions a corresponding Signals patient.


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `withSignals` | query | `boolean` | no |  |



## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |
