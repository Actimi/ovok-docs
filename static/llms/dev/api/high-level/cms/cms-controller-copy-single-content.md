---
title: "Copy a content"
sidebar_label: "Copy a content"
description: "Copy a content."
---

# Copy a content

<span className="api-method post">POST</span> `/cms/{type}/{language}/{key}/copy-from-parent-project`

<ApiBase inline={false} />

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
| `200` |  |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |
