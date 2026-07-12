---
title: "Copy a content"
sidebar_label: "Copy a content"
description: "Copy a content."
---

# Copy a content

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method post">POST</span> <code className="endpoint-hero__path">{"/cms/{type}/{language}/{key}/copy-from-parent-project"}</code></div>
  <div className="endpoint-hero__path-row"><span className="api-method post">POST</span> <code className="endpoint-hero__path">{"/internal/cms/{type}/{language}/{key}/copy-from-parent-project"}</code></div>
</div>

<ApiBase inline={false} />

</div>

Copy a content.


## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `type` | path | `string` | **yes** |  |
| `language` | path | `string` | **yes** |  |
| `key` | path | `string` | **yes** | A key that is used to identify the content between languages. |



## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |
