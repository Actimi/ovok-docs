---
title: EncounterHistory
sidebar_label: EncounterHistory
description: "A record of significant events/milestones key data throughout the history of an Encounter"
---

# EncounterHistory

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Clinical — Care Provision</span>

A record of significant events/milestones key data throughout the history of an Encounter

## Endpoints

<ApiBase surface="fhir" path="/EncounterHistory" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/EncounterHistory/[id]` |
| Vread        | `GET`    | `/fhir/R5/EncounterHistory/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/EncounterHistory/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/EncounterHistory/[id]` |
| Delete       | `DELETE` | `/fhir/R5/EncounterHistory/[id]` |
| Create       | `POST`   | `/fhir/R5/EncounterHistory` |
| Search       | `GET`    | `/fhir/R5/EncounterHistory?...` |
| History      | `GET`    | `/fhir/R5/EncounterHistory/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/EncounterHistory/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `encounter` | `Reference` | `0..1` | The Encounter associated with this set of historic values |
| `identifier` | `Identifier` | `0..*` | Identifier(s) by which this encounter is known |
| `status` | `code` | `1..1` | planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown _modifier_ |
| `class` | `CodeableConcept` | `1..1` | Classification of patient encounter |
| `type` | `CodeableConcept` | `0..*` | Specific type of encounter |
| `serviceType` | `CodeableReference` | `0..*` | Specific type of service |
| `subject` | `Reference` | `0..1` | The patient or group related to this encounter |
| `subjectStatus` | `CodeableConcept` | `0..1` | The current status of the subject in relation to the Encounter |
| `actualPeriod` | `Period` | `0..1` | The actual start and end time associated with this set of values associated with the encounter |
| `plannedStartDate` | `dateTime` | `0..1` | The planned start date/time (or admission date) of the encounter |
| `plannedEndDate` | `dateTime` | `0..1` | The planned end date/time (or discharge date) of the encounter |
| `length` | `Duration` | `0..1` | Actual quantity of time the encounter lasted (less time absent) |
| `location` | `BackboneElement` | `0..*` | Location of the patient at this point in the encounter |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `encounter` | `reference` | Encounter related to the activity recorded in the AuditEvent |
| `identifier` | `token` | Identifier(s) by which this encounter is known |
| `patient` | `reference` | The patient present at the encounter |
| `status` | `token` | Status of the Encounter history entry |
| `subject` | `reference` | The patient or group present at the encounter |

## Reference

- Official FHIR R5 spec: [`EncounterHistory`](https://hl7.org/fhir/R5/encounterhistory.html)
- Maturity: **Draft** (FMM 0).
