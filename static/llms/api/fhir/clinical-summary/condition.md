---
title: Condition
sidebar_label: Condition
description: "A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern."
---

# Condition

<span className="fhir-maturity" data-level="5">Normative</span>
<span className="fhir-category">Clinical — Summary</span>

A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.

## Endpoints

<ApiBase surface="fhir" path="/Condition" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Condition/[id]` |
| Vread        | `GET`    | `/fhir/R5/Condition/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Condition/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Condition/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Condition/[id]` |
| Create       | `POST`   | `/fhir/R5/Condition` |
| Search       | `GET`    | `/fhir/R5/Condition?...` |
| History      | `GET`    | `/fhir/R5/Condition/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Condition/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External Ids for this condition |
| `clinicalStatus` | `CodeableConcept` | `1..1` | active | recurrence | relapse | inactive | remission | resolved | unknown _modifier_ |
| `verificationStatus` | `CodeableConcept` | `0..1` | unconfirmed | provisional | differential | confirmed | refuted | entered-in-error _modifier_ |
| `category` | `CodeableConcept` | `0..*` | problem-list-item | encounter-diagnosis |
| `severity` | `CodeableConcept` | `0..1` | Subjective severity of condition |
| `code` | `CodeableConcept` | `0..1` | Identification of the condition, problem or diagnosis |
| `bodySite` | `CodeableConcept` | `0..*` | Anatomical location, if relevant |
| `subject` | `Reference` | `1..1` | Who has the condition? |
| `encounter` | `Reference` | `0..1` | The Encounter during which this Condition was created |
| `onset[x]` | `dateTime` / `Age` / `Period` / `Range` / `string` | `0..1` | Estimated or actual date,  date-time, or age |
| `abatement[x]` | `dateTime` / `Age` / `Period` / `Range` / `string` | `0..1` | When in resolution/remission |
| `recordedDate` | `dateTime` | `0..1` | Date condition was first recorded |
| `participant` | `BackboneElement` | `0..*` | Who or what participated in the activities related to the condition and how they were involved |
| `stage` | `BackboneElement` | `0..*` | Stage/grade, usually assessed formally |
| `evidence` | `CodeableReference` | `0..*` | Supporting evidence for the verification status |
| `note` | `Annotation` | `0..*` | Additional information about the Condition |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`Condition` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `abatement-age` | `quantity` | Abatement as age or age range |
| `abatement-date` | `date` | Date-related abatements (dateTime and period) |
| `abatement-string` | `string` | Abatement as a string |
| `body-site` | `token` | Anatomical location, if relevant |
| `category` | `token` | The category of the condition |
| `clinical-status` | `token` | The clinical status of the condition |
| `code` | `token` | Event or incident that occurred or was averted |
| `encounter` | `reference` | Encounter related to the activity recorded in the AuditEvent |
| `evidence` | `token` | Manifestation/symptom |
| `evidence-detail` | `reference` | Supporting information found elsewhere |
| `identifier` | `token` | Account number |
| `onset-age` | `quantity` | Onsets as age or age range |
| `onset-date` | `date` | Date related onsets (dateTime and Period) |
| `onset-info` | `string` | Onsets as a string |
| `participant-actor` | `reference` | Who or what participated in the activities related to the condition |
| `participant-function` | `token` | Type of involvement of the actor in the activities related to the condition |
| `patient` | `reference` | The entity that caused the expenses |
| `recorded-date` | `date` | Date record was first recorded |
| `severity` | `token` | The severity of the condition |
| `stage` | `token` | Simple summary (disease specific) |
| `subject` | `reference` | Search by condition subject |
| `subject` | `reference` | Who has the condition? |
| `verification-status` | `token` | unconfirmed | provisional | differential | confirmed | refuted | entered-in-error |

## Reference

- Official FHIR R5 spec: [`Condition`](https://hl7.org/fhir/R5/condition.html)
- Element bindings & profiles: [`Condition` profile](https://hl7.org/fhir/R5/condition-definitions.html)
- Maturity: **Normative** (FMM 5).
