---
title: Condition
sidebar_label: Condition
description: "A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern."
---

# Condition

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Clinical — Summary</span>

A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.

## Endpoints

<ApiBase surface="fhir" path="/Condition" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/Condition/[id]` |
| Vread | `GET` | `/fhir/R4/Condition/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Condition/[id]` |
| Patch | `PATCH` | `/fhir/R4/Condition/[id]` |
| Delete | `DELETE` | `/fhir/R4/Condition/[id]` |
| Create | `POST` | `/fhir/R4/Condition` |
| Search | `GET` | `/fhir/R4/Condition` |
| History | `GET` | `/fhir/R4/Condition/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External Ids for this condition |
| `clinicalStatus` | `CodeableConcept` | `0..1` | active \| recurrence \| relapse \| inactive \| remission \| resolved _modifier_ |
| `verificationStatus` | `CodeableConcept` | `0..1` | unconfirmed \| provisional \| differential \| confirmed \| refuted \| entered-in-error _modifier_ |
| `category` | `CodeableConcept` | `0..*` | problem-list-item \| encounter-diagnosis |
| `severity` | `CodeableConcept` | `0..1` | Subjective severity of condition |
| `code` | `CodeableConcept` | `0..1` | Identification of the condition, problem or diagnosis |
| `bodySite` | `CodeableConcept` | `0..*` | Anatomical location, if relevant |
| `subject` | `Reference` | `1..1` | Who has the condition? |
| `encounter` | `Reference` | `0..1` | Encounter created as part of |
| `onset[x]` | `dateTime` / `Age` / `Period` / `Range` / `string` | `0..1` | Estimated or actual date,  date-time, or age |
| `abatement[x]` | `dateTime` / `Age` / `Period` / `Range` / `string` | `0..1` | When in resolution/remission |
| `recordedDate` | `dateTime` | `0..1` | Date record was first recorded |
| `recorder` | `Reference` | `0..1` | Who recorded the condition |
| `asserter` | `Reference` | `0..1` | Person who asserts this condition |
| `stage` | `BackboneElement` | `0..*` | Stage/grade, usually assessed formally |
| `evidence` | `BackboneElement` | `0..*` | Supporting evidence |
| `note` | `Annotation` | `0..*` | Additional information about the Condition |

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
| `abatement-age` | `string` | http://hl7.org/fhir/SearchParameter/Condition-abatement-age |
| `abatement-date` | `string` | http://hl7.org/fhir/SearchParameter/Condition-abatement-date |
| `abatement-string` | `string` | http://hl7.org/fhir/SearchParameter/Condition-abatement-string |
| `asserted-date` | `string` | http://hl7.org/fhir/us/core/SearchParameter/us-core-condition-asserted-date |
| `asserter` | `string` | http://hl7.org/fhir/SearchParameter/Condition-asserter |
| `body-site` | `string` | http://hl7.org/fhir/SearchParameter/Condition-body-site |
| `category` | `string` | http://hl7.org/fhir/SearchParameter/Condition-category |
| `clinical-status` | `string` | http://hl7.org/fhir/SearchParameter/Condition-clinical-status |
| `code` | `string` | http://hl7.org/fhir/SearchParameter/clinical-code |
| `encounter` | `string` | http://hl7.org/fhir/SearchParameter/Condition-encounter |
| `evidence` | `string` | http://hl7.org/fhir/SearchParameter/Condition-evidence |
| `evidence-detail` | `string` | http://hl7.org/fhir/SearchParameter/Condition-evidence-detail |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/clinical-identifier |
| `onset-age` | `string` | http://hl7.org/fhir/SearchParameter/Condition-onset-age |
| `onset-date` | `string` | http://hl7.org/fhir/SearchParameter/Condition-onset-date |
| `onset-info` | `string` | http://hl7.org/fhir/SearchParameter/Condition-onset-info |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/clinical-patient |
| `recorded-date` | `string` | http://hl7.org/fhir/SearchParameter/Condition-recorded-date |
| `severity` | `string` | http://hl7.org/fhir/SearchParameter/Condition-severity |
| `stage` | `string` | http://hl7.org/fhir/SearchParameter/Condition-stage |
| `subject` | `string` | http://hl7.org/fhir/SearchParameter/Condition-subject |
| `verification-status` | `string` | http://hl7.org/fhir/SearchParameter/Condition-verification-status |

## Reference

- Official FHIR R4 spec: [`Condition`](https://hl7.org/fhir/R4/condition.html)
- Maturity: **Trial Use 3** (FMM 3).
