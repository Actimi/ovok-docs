---
title: ImmunizationEvaluation
sidebar_label: ImmunizationEvaluation
description: "Describes a comparison of an immunization event against published recommendations to determine if the administration is \"valid\" in relation to those  recommenda"
---

# ImmunizationEvaluation

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Clinical — Medications</span>

Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.

## Endpoints

<ApiBase surface="fhir" path="/ImmunizationEvaluation" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/ImmunizationEvaluation/[id]` |
| Vread | `GET` | `/fhir/R4/ImmunizationEvaluation/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/ImmunizationEvaluation/[id]` |
| Patch | `PATCH` | `/fhir/R4/ImmunizationEvaluation/[id]` |
| Delete | `DELETE` | `/fhir/R4/ImmunizationEvaluation/[id]` |
| Create | `POST` | `/fhir/R4/ImmunizationEvaluation` |
| Search | `GET` | `/fhir/R4/ImmunizationEvaluation` |
| History | `GET` | `/fhir/R4/ImmunizationEvaluation/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier |
| `status` | `code` | `1..1` | completed \| entered-in-error _modifier_ |
| `patient` | `Reference` | `1..1` | Who this evaluation is for |
| `date` | `dateTime` | `0..1` | Date evaluation was performed |
| `authority` | `Reference` | `0..1` | Who is responsible for publishing the recommendations |
| `targetDisease` | `CodeableConcept` | `1..1` | Evaluation target disease |
| `immunizationEvent` | `Reference` | `1..1` | Immunization being evaluated |
| `doseStatus` | `CodeableConcept` | `1..1` | Status of the dose relative to published recommendations |
| `doseStatusReason` | `CodeableConcept` | `0..*` | Reason for the dose status |
| `description` | `string` | `0..1` | Evaluation notes |
| `series` | `string` | `0..1` | Name of vaccine series |
| `doseNumber[x]` | `positiveInt` / `string` | `0..1` | Dose number within series |
| `seriesDoses[x]` | `positiveInt` / `string` | `0..1` | Recommended number of doses for immunity |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `_compartment` | `string` |  |
| `_count` | `string` | https://www.hl7.org/fhir/search.html#_count |
| `_elements` | `string` | https://www.hl7.org/fhir/search.html#_elements |
| `_id` | `string` |  |
| `_lastUpdated` | `string` |  |
| `_profile` | `string` |  |
| `_security` | `string` |  |
| `_sort` | `string` | https://www.hl7.org/fhir/search.html#_sort |
| `_source` | `string` |  |
| `_summary` | `string` | https://www.hl7.org/fhir/search.html#_summary |
| `_tag` | `string` |  |
| `_total` | `string` | https://www.hl7.org/fhir/search.html#_total |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-date |
| `dose-status` | `string` | http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-dose-status |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-identifier |
| `immunization-event` | `string` | http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-immunization-event |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-patient |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-status |
| `target-disease` | `string` | http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-target-disease |

## Reference

- Official FHIR R4 spec: [`ImmunizationEvaluation`](https://hl7.org/fhir/R4/immunizationevaluation.html)
- Maturity: **Draft** (FMM 0).
