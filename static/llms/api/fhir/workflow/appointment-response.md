---
title: AppointmentResponse
sidebar_label: AppointmentResponse
description: "A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection."
---

# AppointmentResponse

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Workflow</span>

A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.

## Endpoints

<ApiBase surface="fhir" path="/AppointmentResponse" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/AppointmentResponse/[id]` |
| Vread        | `GET`    | `/fhir/R5/AppointmentResponse/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/AppointmentResponse/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/AppointmentResponse/[id]` |
| Delete       | `DELETE` | `/fhir/R5/AppointmentResponse/[id]` |
| Create       | `POST`   | `/fhir/R5/AppointmentResponse` |
| Search       | `GET`    | `/fhir/R5/AppointmentResponse?...` |
| History      | `GET`    | `/fhir/R5/AppointmentResponse/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/AppointmentResponse/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External Ids for this item |
| `appointment` | `Reference` | `1..1` | Appointment this response relates to |
| `proposedNewTime` | `boolean` | `0..1` | Indicator for a counter proposal |
| `start` | `instant` | `0..1` | Time from appointment, or requested new start time |
| `end` | `instant` | `0..1` | Time from appointment, or requested new end time |
| `participantType` | `CodeableConcept` | `0..*` | Role of participant in the appointment |
| `actor` | `Reference` | `0..1` | Person(s), Location, HealthcareService, or Device |
| `participantStatus` | `code` | `1..1` | accepted | declined | tentative | needs-action | entered-in-error _modifier_ |
| `comment` | `markdown` | `0..1` | Additional comments |
| `recurring` | `boolean` | `0..1` | This response is for all occurrences in a recurring request |
| `occurrenceDate` | `date` | `0..1` | Original date within a recurring request |
| `recurrenceId` | `positiveInt` | `0..1` | The recurrence ID of the specific recurring request |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`AppointmentResponse` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `actor` | `reference` | The Person, Location/HealthcareService or Device that this appointment response replies for |
| `appointment` | `reference` | The appointment that the response is attached to |
| `group` | `reference` | This Response is for this Group |
| `identifier` | `token` | Account number |
| `location` | `reference` | This Response is for this Location |
| `part-status` | `token` | The participants acceptance status for this appointment |
| `patient` | `reference` | The entity that caused the expenses |
| `practitioner` | `reference` | This Response is for this Practitioner |

## Reference

- Official FHIR R5 spec: [`AppointmentResponse`](https://hl7.org/fhir/R5/appointmentresponse.html)
- Element bindings & profiles: [`AppointmentResponse` profile](https://hl7.org/fhir/R5/appointmentresponse-definitions.html)
- Maturity: **Trial Use 3** (FMM 3).
