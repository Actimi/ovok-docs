---
title: FamilyMemberHistory
sidebar_label: FamilyMemberHistory
description: "Significant health conditions for a person related to the patient relevant in the context of care for the patient."
---

# FamilyMemberHistory

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Clinical — Summary</span>

Significant health conditions for a person related to the patient relevant in the context of care for the patient.

## Endpoints

<ApiBase surface="fhir" path="/FamilyMemberHistory" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/FamilyMemberHistory/[id]` |
| Vread        | `GET`    | `/fhir/R5/FamilyMemberHistory/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/FamilyMemberHistory/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/FamilyMemberHistory/[id]` |
| Delete       | `DELETE` | `/fhir/R5/FamilyMemberHistory/[id]` |
| Create       | `POST`   | `/fhir/R5/FamilyMemberHistory` |
| Search       | `GET`    | `/fhir/R5/FamilyMemberHistory?...` |
| History      | `GET`    | `/fhir/R5/FamilyMemberHistory/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/FamilyMemberHistory/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External Id(s) for this record |
| `instantiatesCanonical` | `canonical` | `0..*` | Instantiates FHIR protocol or definition |
| `instantiatesUri` | `uri` | `0..*` | Instantiates external protocol or definition |
| `status` | `code` | `1..1` | partial | completed | entered-in-error | health-unknown _modifier_ |
| `dataAbsentReason` | `CodeableConcept` | `0..1` | subject-unknown | withheld | unable-to-obtain | deferred |
| `patient` | `Reference` | `1..1` | Patient history is about |
| `date` | `dateTime` | `0..1` | When history was recorded or last updated |
| `participant` | `BackboneElement` | `0..*` | Who or what participated in the activities related to the family member history and how they were involved |
| `name` | `string` | `0..1` | The family member described |
| `relationship` | `CodeableConcept` | `1..1` | Relationship to the subject |
| `sex` | `CodeableConcept` | `0..1` | male | female | other | unknown |
| `born[x]` | `Period` / `date` / `string` | `0..1` | (approximate) date of birth |
| `age[x]` | `Age` / `Range` / `string` | `0..1` | (approximate) age |
| `estimatedAge` | `boolean` | `0..1` | Age is estimated? |
| `deceased[x]` | `boolean` / `Age` / `Range` / `date` / `string` | `0..1` | Dead? How old/when? |
| `reason` | `CodeableReference` | `0..*` | Why was family member history performed? |
| `note` | `Annotation` | `0..*` | General note about related person |
| `condition` | `BackboneElement` | `0..*` | Condition that the related person had |
| `procedure` | `BackboneElement` | `0..*` | Procedures that the related person had |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `code` | `token` | Event or incident that occurred or was averted |
| `date` | `date` | When the event occurred |
| `identifier` | `token` | Account number |
| `instantiates-canonical` | `reference` | Instantiates FHIR protocol or definition |
| `instantiates-uri` | `uri` | Instantiates external protocol or definition |
| `patient` | `reference` | The entity that caused the expenses |
| `relationship` | `token` | A search by a relationship type |
| `sex` | `token` | A search by a sex code of a family member |
| `status` | `token` | partial | completed | entered-in-error | health-unknown |

## Reference

- Official FHIR R5 spec: [`FamilyMemberHistory`](https://hl7.org/fhir/R5/familymemberhistory.html)
- Maturity: **Trial Use 2** (FMM 2).
