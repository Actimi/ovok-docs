---
title: "Populate questionnaire"
sidebar_label: "Populate questionnaire"
description: "This endpoint builds a FHIR QuestionnaireResponse based on provided questionnaire, patient and context."
---

# Populate questionnaire

<div className="endpoint-hero">

<div className="endpoint-hero__paths">
  <div className="endpoint-hero__path-row"><span className="api-method post">POST</span> <code className="endpoint-hero__path">{"/fhir/Questionnaire/{id}/$populate"}</code></div>
  <div className="endpoint-hero__path-row"><span className="api-method post">POST</span> <code className="endpoint-hero__path">{"/fhir/R4/Questionnaire/{id}/$populate"}</code></div>
  <div className="endpoint-hero__path-row"><span className="api-method post">POST</span> <code className="endpoint-hero__path">{"/fhir/R5/Questionnaire/{id}/$populate"}</code></div>
</div>

<ApiBase inline={false} />

</div>

This endpoint builds a FHIR QuestionnaireResponse based on provided questionnaire, patient and context.

Here is an example questionnaire and its usage to generate a questionnaire response.

The questionnaire has some variables fetched at runtime:

- `ObsBodyHeight` which is the result of the following query: `Observation?code=8302-2&_count=1&_sort=-date&patient=Patient/{{%patient.id}}`.
- `patient` which is the patient reference that is fetched at runtime with `launchContext`.

The other variables can be sent from the client side in the request body if desired. See the example request body for more information.

`patient-height` and `patient-weight` are the linkIds of the questionnaire items that will be populated with the fetched values and they will be used in the generated questionnaire response.

### Example questionnaire

```json
{
  "resourceType": "Questionnaire",
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/variable",
      "valueExpression": {
        "name": "ObsBodyHeight",
        "language": "application/x-fhir-query",
        "expression": "Observation?code=8302-2&_count=1&_sort=-date&patient=Patient/patientId
      }
    },
    {
      "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-launchContext",
      "extension": [
        {
          "url": "name",
          "valueCoding": {
            "system": "http://hl7.org/fhir/uv/sdc/CodeSystem/launchContext",
            "code": "patient"
          }
        },
        {
          "url": "type",
          "valueCode": "Patient"
        },
        {
          "url": "description",
          "valueString": "The patient that is to be used to pre-populate the form"
        }
      ]
    },
    {
      "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-targetStructureMap",
      "valueCanonical": "https://smartforms.csiro.au/docs/StructureMap/extract-bmi"
    }
  ],
  "url": "https://fhir.ovok.com/fhir/R4/Questionnaire/example-questionnaire-id",
  "version": "0.1.0",
  "name": "CalculatedExpressionBMICalculatorPrepop",
  "title": "CalculatedExpression BMI Calculator - Pre-population",
  "status": "draft",
  "date": "2024-12-18",
  "publisher": "AEHRC CSIRO",
  "item": [
    {
      "extension": [
        {
          "url": "http://hl7.org/fhir/StructureDefinition/variable",
          "valueExpression": {
            "name": "height",
            "language": "text/fhirpath",
            // NOTE: Here it's accessing the global variables
            // NOTE: Instead you can also use the fetched Observation resource with %ObsBodyHeight.entry.resource.valueQuantity.value, and you don't need to use it in the request body anymore, however this would mean that the result is coming from the server and not from the client (Patient).
            "expression": "%response.item.where(linkId='bmi-calculation').item.where(linkId='patient-height').answer.valueDecimal"
          }
        },
        {
          "url": "http://hl7.org/fhir/StructureDefinition/variable",
          "valueExpression": {
            "name": "weight",
            "language": "text/fhirpath",
            // NOTE: Here it's accessing the locally available context
            "expression": "item.where(linkId='patient-weight').answer.valueDecimal"
          }
        }
      ],
      "linkId": "bmi-calculation",
      "text": "BMI Calculation",
      "type": "group",
      "repeats": false,
      "item": [
        {
          "linkId": "patient-height",
          "text": "Height",
          "type": "decimal",
          "repeats": false,
          "readOnly": false
        },
        {
          "linkId": "patient-weight",
          "text": "Weight",
          "type": "decimal",
          "repeats": false,
          "readOnly": false
        },
        {
          "extension": [
            {
              "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression",
              "valueExpression": {
                "description": "BMI calculation",
                "language": "text/fhirpath",
                "expression": "(%weight/((%height/100).power(2))).round(1)"
              }
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
              "valueCoding": {
                "system": "http://unitsofmeasure.org",
                "code": "kg/m2",
                "display": "kg/m2"
              }
            },
            {
              "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationExtract",
              "valueBoolean": true
            }
          ],
          "linkId": "bmi-result",
          "code": [
            {
              "system": "http://snomed.info/sct",
              "code": "60621009",
              "display": "Body mass index"
            }
          ],
          "text": "Value",
          "type": "decimal",
          "repeats": false,
          "readOnly": true
        }
      ]
    }
  ],
  "id": "example-questionnaire-id"
}
```

### Example request body

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "context",
      "part": [
        {
          "name": "name",
          "valueString": "myCustomVariableName"
        },
        {
          "name": "content",
          "resource": {
            // NOTE: This can be accessed within the questionnaire response with %context.myCustomVariableName.myCustomDataKey
            "myCustomDataKey": "myCustomDataValue"
          }
        }
      ]
    },
    {
      "name": "response",
      "resource": {
        "resourceType": "QuestionnaireResponse",
        "status": "in-progress",
        "item": [
          {
            "linkId": "bmi-calculation",
            "text": "BMI Calculation",
            "item": [
              {
                "linkId": "patient-height",
                "text": "Height",
                "answer": [
                  {
                    // NOTE: You can also use the value of this item in the questionnaire response with %response.item.where(linkId='patient-height').answer.valueDecimal
                    // OR directly use without the global context with item.where(linkId='patient-height').answer.valueDecimal
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
        ]
      }
    }
  ]
}
```

### Example cURL request

```bash
curl -X POST \
 --url 'https://api.dev.ovok.com/fhir/Questionnaire/example-questionnaire-id/$populate' \
 -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3ODYzNzIwNTcsImV4cCI6MTc4NjM3NTY1N30.znUAqXoLb3zIHTneF33sQAvhLCGLSn-WEC7DGZD17QA' \
 -H 'Content-Type: application/json' \
 -d @populate-body.json # @populate-body.json is the request body from the previous example
```

### Example response, which is either a QuestionnaireResponse or an OperationOutcome (error)

```json
{
  "resourceType": "QuestionnaireResponse",
  "status": "in-progress",
  "item": [
    {
      "linkId": "bmi-calculation",
      "text": "BMI Calculation",
      "item": [
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
        },
        {
          "linkId": "bmi-result",
          "answer": [
            {
              "valueDecimal": 32.7
            }
          ],
          "text": "Value"
        }
      ]
    }
  ]
}
```

Now you can use the response (QuestionnaireResponse) and POST it if you want to save it to the server.



## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | path | `string` | **yes** |  |


## Request body

**Content-Type:** `application/json`

- `resourceType`: `string` **(required)**
- `parameter`: `array` **(required)**


## Responses

| Code | Description |
| --- | --- |
| `200` | Success. |
| `400` | The request could not be operated by the server. |
| `401` | The resource owner or authorization server denied the request. |
| `404` | The requested resource could not be found. |
| `422` | The request could not be validated by the server. |
| `500` | The server encountered an unexpected condition. Please try again later. |


### `200` → `PopulateBodyResponseDto` (`application/json`)

- `resourceType`: `string` **(required)**
- `questionnaire`: `string` **(required)**
- `subject`: `object` **(required)**
- `item`: `object[]` **(required)**

_Additional properties allowed._

**Example**

```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "response",
      "resource": {
        "resourceType": "QuestionnaireResponse",
        "status": "in-progress",
        "questionnaire": "https://fhir.ovok.com/fhir/Questionnaire/59d9a1ce-008c-4e4f-97fb-ef598d3f2c34|0.1.0",
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
        "meta": {
          "profile": [
            "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaireresponse"
          ]
        }
      }
    }
  ]
}
```
