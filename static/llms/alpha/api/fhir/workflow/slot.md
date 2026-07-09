---
title: Slot
sidebar_label: Slot
description: "A slot of time on a schedule that may be available for booking appointments."
---

# Slot

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Workflow</span>

A slot of time on a schedule that may be available for booking appointments.

## Endpoints

<ApiBase surface="fhir" path="/Slot" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Slot/[id]` |
| Vread        | `GET`    | `/fhir/R5/Slot/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Slot/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Slot/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Slot/[id]` |
| Create       | `POST`   | `/fhir/R5/Slot` |
| Search       | `GET`    | `/fhir/R5/Slot?...` |
| History      | `GET`    | `/fhir/R5/Slot/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Slot/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External Ids for this item |
| `serviceCategory` | `CodeableConcept` | `0..*` | A broad categorization of the service that is to be performed during this appointment |
| `serviceType` | `CodeableReference` | `0..*` | The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the Schedule resource |
| `specialty` | `CodeableConcept` | `0..*` | The specialty of a practitioner that would be required to perform the service requested in this appointment |
| `appointmentType` | `CodeableConcept` | `0..*` | The style of appointment or patient that may be booked in the slot (not service type) |
| `schedule` | `Reference` | `1..1` | The schedule resource that this slot defines an interval of status information |
| `status` | `code` | `1..1` | busy | free | busy-unavailable | busy-tentative | entered-in-error |
| `start` | `instant` | `1..1` | Date/Time that the slot is to begin |
| `end` | `instant` | `1..1` | Date/Time that the slot is to conclude |
| `overbooked` | `boolean` | `0..1` | This slot has already been overbooked, appointments are unlikely to be accepted for this time |
| `comment` | `string` | `0..1` | Comments on the slot to describe any extended information. Such as custom constraints on the slot |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `appointment-type` | `token` | The style of appointment or patient that may be booked in the slot (not service type) |
| `identifier` | `token` | A Slot Identifier |
| `schedule` | `reference` | The Schedule Resource that we are seeking a slot within |
| `service-category` | `token` | A broad categorization of the service that is to be performed during this appointment |
| `service-type` | `token` | The type (by coding) of appointments that can be booked into the slot |
| `service-type-reference` | `reference` | The type (by HealthcareService) of appointments that can be booked into the slot |
| `specialty` | `token` | The specialty of a practitioner that would be required to perform the service requested in this appointment |
| `start` | `date` | Appointment date/time. |
| `status` | `token` | The free/busy status of the appointment |

## Reference

- Official FHIR R5 spec: [`Slot`](https://hl7.org/fhir/R5/slot.html)
- Maturity: **Trial Use 3** (FMM 3).
