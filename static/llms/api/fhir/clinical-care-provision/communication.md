---
title: Communication
sidebar_label: Communication
description: "A clinical or business level record of information being transmitted or shared; e.g. an alert that was sent to a responsible provider, a public health agency co"
---

# Communication

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Clinical — Care Provision</span>

A clinical or business level record of information being transmitted or shared; e.g. an alert that was sent to a responsible provider, a public health agency communication to a provider/reporter in response to a case report for a reportable condition.

## Endpoints

<ApiBase surface="fhir" path="/Communication" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Communication/[id]` |
| Vread        | `GET`    | `/fhir/R5/Communication/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Communication/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Communication/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Communication/[id]` |
| Create       | `POST`   | `/fhir/R5/Communication` |
| Search       | `GET`    | `/fhir/R5/Communication?...` |
| History      | `GET`    | `/fhir/R5/Communication/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Communication/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Unique identifier |
| `instantiatesCanonical` | `canonical` | `0..*` | Instantiates FHIR protocol or definition |
| `instantiatesUri` | `uri` | `0..*` | Instantiates external protocol or definition |
| `basedOn` | `Reference` | `0..*` | Request fulfilled by this communication |
| `partOf` | `Reference` | `0..*` | Part of referenced event (e.g. Communication, Procedure) |
| `inResponseTo` | `Reference` | `0..*` | Reply to |
| `status` | `code` | `1..1` | preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown _modifier_ |
| `statusReason` | `CodeableConcept` | `0..1` | Reason for current status |
| `category` | `CodeableConcept` | `0..*` | Message category |
| `priority` | `code` | `0..1` | routine | urgent | asap | stat |
| `medium` | `CodeableConcept` | `0..*` | A channel of communication |
| `subject` | `Reference` | `0..1` | Focus of message |
| `topic` | `CodeableConcept` | `0..1` | Description of the purpose/content |
| `about` | `Reference` | `0..*` | Resources that pertain to this communication |
| `encounter` | `Reference` | `0..1` | The Encounter during which this Communication was created |
| `sent` | `dateTime` | `0..1` | When sent |
| `received` | `dateTime` | `0..1` | When received |
| `recipient` | `Reference` | `0..*` | Who the information is shared with |
| `sender` | `Reference` | `0..1` | Who shares the information |
| `reason` | `CodeableReference` | `0..*` | Indication for message |
| `payload` | `BackboneElement` | `0..*` | Message payload |
| `note` | `Annotation` | `0..*` | Comments made about the communication |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`Communication` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `based-on` | `reference` | Request fulfilled by this communication |
| `category` | `token` | Message category |
| `encounter` | `reference` | Encounter related to the activity recorded in the AuditEvent |
| `identifier` | `token` | Account number |
| `instantiates-canonical` | `reference` | Instantiates FHIR protocol or definition |
| `instantiates-uri` | `uri` | Instantiates external protocol or definition |
| `medium` | `token` | A channel of communication |
| `part-of` | `reference` | Part of referenced event (e.g. Communication, Procedure) |
| `patient` | `reference` | The entity that caused the expenses |
| `received` | `date` | When received |
| `recipient` | `reference` | Who the information is shared with |
| `sender` | `reference` | Who shares the information |
| `sent` | `date` | When sent |
| `status` | `token` | preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown |
| `subject` | `reference` | Focus of message |
| `topic` | `token` | Description of the purpose/content |

## Reference

- Official FHIR R5 spec: [`Communication`](https://hl7.org/fhir/R5/communication.html)
- Element bindings & profiles: [`Communication` profile](https://hl7.org/fhir/R5/communication-definitions.html)
- Maturity: **Trial Use 2** (FMM 2).
