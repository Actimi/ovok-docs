---
title: "Get a document as public user"
sidebar_label: "Get a document as public user"
description: "Public file download"
---

# Get a document as public user

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method get">GET</span> <code className="endpoint-hero__path">{"/document/public/{token}"}</code></div>
</div>

<ApiBase inline={false} />

</div>

Public file download

Information such as id, contentType, fileName, publicToken can be fetched by querying /fhir/DocumentReference.

### Parameters

| Parameter | In       | Description                                                                                                  | Example             |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------ | ------------------- |
| `token`   | `params` | The DocumentReference public token found in the extension of the resource                                    | `example.jwt.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3ODUxOTQ3NDIsImV4cCI6MTc4NTE5ODM0Mn0.iw6R4Lce8dxkDjIk8NXEOqOCrVlBWfSaXibyiS5_R_Y` |
| `width`   | `query`  | The width of the image to resize the image to (optional)                                                     | `100`               |
| `height`  | `query`  | The height of the image to resize the image to (optional)                                                    | `100`               |
| `fit`     | `query`  | The fit of the image to resize the image to (optional) [See](https://sharp.pixelplumbing.com/api-resize#fit) | `cover`             |

> Useful for embedding images with \<img\> tags on websites, predefined HTML files. Note that anyone with the url will be able to access the file without any Authorization.



## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `token` | path | `string` | **yes** | The public token of the DocumentReference resource |
| `ETag` | header | `string` | no | The ETag of the file for GET requests. If provided, the server will check the value of the ETag against the value of the ETag in the request headers. If the values match, the server will return a 304 Not Modified response. If the values do not match, the server will return a 200 OK response and the file content, if the file exists. |
| `width` | query | `string` | no | The width of the binary resource if the resource is an image. |
| `height` | query | `string` | no | The height of the binary resource if the resource is an image. |
| `fit` | query | `string` | no | The fit of the image. See https://sharp.pixelplumbing.com/api-resize#fit for more information. |



## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |
