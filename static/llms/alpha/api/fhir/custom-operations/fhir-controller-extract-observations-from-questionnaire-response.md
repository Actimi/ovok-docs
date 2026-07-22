---
title: "Extract observations from questionnaire response"
sidebar_label: "Extract observations from questionnaire response"
description: "This endpoint builds Observations based on the provided QuestionnaireResponse."
---

# Extract observations from questionnaire response

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method post">POST</span> <code className="endpoint-hero__path">{"/fhir/QuestionnaireResponse/{id}/$extract"}</code></div>
  <div className="endpoint-hero__path-row"><span className="api-method post">POST</span> <code className="endpoint-hero__path">{"/fhir/R4/QuestionnaireResponse/{id}/$extract"}</code></div>
  <div className="endpoint-hero__path-row"><span className="api-method post">POST</span> <code className="endpoint-hero__path">{"/fhir/R5/QuestionnaireResponse/{id}/$extract"}</code></div>
</div>

<ApiBase inline={false} />

</div>

This endpoint builds Observations based on the provided QuestionnaireResponse.

Please use the `Questionnaire/<id>/$populate` endpoint to get the QuestionnaireResponse first, save it and then use the id of the saved QuestionnaireResponse in this endpoint.

### Example questionnaire response resource in the database

```json
{
  "resourceType": "QuestionnaireResponse",
  "status": "in-progress",
  "questionnaire": "https://fhir.ovok.com/fhir/R4/Questionnaire/59d9a1ce-008c-4e4f-97fb-ef598d3f2c34|0.1.0",
  "item": [
    {
      "linkId": "bmi-calculation",
      "text": "BMI Calculation",
      "item": [
        {
          "linkId": "bmi-result",
          "answer": [
            {
              "valueDecimal": 32.7
            }
          ],
          "text": "Value"
        },
        {
          "linkId": "patient-height",
          "text": "Height",
          "answer": [
            {
              "valueDecimal": 175
            }
          ]
        },
        {
          "linkId": "patient-weight",
          "text": "Weight",
          "answer": [
            {
              "valueDecimal": 100
            }
          ]
        }
      ]
    }
  ],
  "subject": {
    "type": "Patient",
    "reference": "Patient/1684f841-953a-41c2-a298-64af08945349"
  },
  "id": "example-questionnaire-response-id"
}
```

Given that the above questionnaire response is saved in the database, you can use the id of the questionnaire response in this endpoint to extract the Observations.

### Example request

```bash
curl -X POST \
  --url 'https://api.dev.ovok.com/QuestionnaireResponse/example-questionnaire-response-id/$extract' \
  --header 'Authorization: Bearer example.jwt.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3ODQ3NTkwMzAsImV4cCI6MTc4NDc2MjYzMH0.4VqUkOmCGDpE_CwZKYvfeWUkDBZ0KvDzbxzeTN7eWNM'
```

### Example response containing a bundle of Observations (wrapped in a Parameter resource)

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "response",
      "resource": {
        "resourceType": "Bundle",
        "type": "transaction",
        "entry": [
          {
            "request": {
              "method": "POST",
              "url": "Observation"
            },
            "resource": {
              "resourceType": "Observation",
              "status": "final",
              "code": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "60621009",
                    "display": "Body mass index"
                  }
                ]
              },
              "subject": {
                "type": "Patient",
                "reference": "Patient/1684f841-953a-41c2-a298-64af08945349"
              },
              "derivedFrom": [
                {
                  "reference": "QuestionnaireResponse/26073103-8a48-4fed-8f38-b1b1e39f4083"
                }
              ],
              "valueQuantity": {
                "value": 32.7
              }
            }
          }
        ]
      }
    }
  ]
}
```



## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | path | `string` | **yes** |  |



## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `ExtractBodyResponseDto` (`application/json`)

- `resourceType`: `string` **(required)**
- `id`: `string` **(required)**

_Additional properties allowed._

**Example**

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "response",
      "resource": {
        "resourceType": "Bundle",
        "type": "transaction",
        "entry": [
          {
            "request": {
              "method": "POST",
              "url": "Observation"
            },
            "resource": {
              "resourceType": "Observation",
              "status": "final",
              "code": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "60621009",
                    "display": "Body mass index"
                  }
                ]
              },
              "subject": {
                "type": "Patient",
                "reference": "Patient/1684f841-953a-41c2-a298-64af08945349"
              },
              "derivedFrom": [
                {
                  "reference": "QuestionnaireResponse/26073103-8a48-4fed-8f38-b1b1e39f4083"
                }
              ],
              "valueQuantity": {
                "value": 32.7
              }
            }
          }
        ]
      }
    }
  ]
}
```
