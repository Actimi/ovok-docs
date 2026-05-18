---
title: MeasureReport
sidebar_label: MeasureReport
description: "The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation."
---

# MeasureReport

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Specialized — Quality & Testing</span>

The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.

## Endpoints

<ApiBase surface="fhir" path="/MeasureReport" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/MeasureReport/[id]` |
| Vread        | `GET`    | `/fhir/R5/MeasureReport/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/MeasureReport/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/MeasureReport/[id]` |
| Delete       | `DELETE` | `/fhir/R5/MeasureReport/[id]` |
| Create       | `POST`   | `/fhir/R5/MeasureReport` |
| Search       | `GET`    | `/fhir/R5/MeasureReport?...` |
| History      | `GET`    | `/fhir/R5/MeasureReport/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/MeasureReport/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Additional identifier for the MeasureReport |
| `status` | `code` | `1..1` | complete | pending | error _modifier_ |
| `type` | `code` | `1..1` | individual | subject-list | summary | data-exchange |
| `dataUpdateType` | `code` | `0..1` | incremental | snapshot _modifier_ |
| `measure` | `canonical` | `0..1` | What measure was calculated |
| `subject` | `Reference` | `0..1` | What individual(s) the report is for |
| `date` | `dateTime` | `0..1` | When the measure was calculated |
| `reporter` | `Reference` | `0..1` | Who is reporting the data |
| `reportingVendor` | `Reference` | `0..1` | What vendor prepared the data |
| `location` | `Reference` | `0..1` | Where the reported data is from |
| `period` | `Period` | `1..1` | What period the report covers |
| `inputParameters` | `Reference` | `0..1` | What parameters were provided to the report |
| `scoring` | `CodeableConcept` | `0..1` | What scoring method (e.g. proportion, ratio, continuous-variable) _modifier_ |
| `improvementNotation` | `CodeableConcept` | `0..1` | increase | decrease _modifier_ |
| `group` | `BackboneElement` | `0..*` | Measure results for each group |
| `supplementalData` | `Reference` | `0..*` | Additional information collected for the report |
| `evaluatedResource` | `Reference` | `0..*` | What data was used to calculate the measure score |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`MeasureReport` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `date` | `date` | When the event occurred |
| `evaluated-resource` | `reference` | An evaluated resource referenced by the measure report |
| `identifier` | `token` | Account number |
| `location` | `reference` | The location to return measure report results for |
| `measure` | `reference` | The measure to return measure report results for |
| `patient` | `reference` | The entity that caused the expenses |
| `period` | `date` | The period of the measure report |
| `reporter` | `reference` | The reporter to return measure report results for |
| `status` | `token` | The status of the measure report |
| `subject` | `reference` | The identity of a subject to search for individual measure report results for |

## Reference

- Official FHIR R5 spec: [`MeasureReport`](https://hl7.org/fhir/R5/measurereport.html)
- Element bindings & profiles: [`MeasureReport` profile](https://hl7.org/fhir/R5/measurereport-definitions.html)
- Maturity: **Trial Use 4** (FMM 4).
