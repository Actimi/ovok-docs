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
| Read | `GET` | `/fhir/R4/Slot/[id]` |
| Vread | `GET` | `/fhir/R4/Slot/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Slot/[id]` |
| Patch | `PATCH` | `/fhir/R4/Slot/[id]` |
| Delete | `DELETE` | `/fhir/R4/Slot/[id]` |
| Create | `POST` | `/fhir/R4/Slot` |
| Search | `GET` | `/fhir/R4/Slot` |
| History | `GET` | `/fhir/R4/Slot/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External Ids for this item |
| `serviceCategory` | `CodeableConcept` | `0..*` | A broad categorization of the service that is to be performed during this appointment |
| `serviceType` | `CodeableConcept` | `0..*` | The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource |
| `specialty` | `CodeableConcept` | `0..*` | The specialty of a practitioner that would be required to perform the service requested in this appointment |
| `appointmentType` | `CodeableConcept` | `0..1` | The style of appointment or patient that may be booked in the slot (not service type) |
| `schedule` | `Reference` | `1..1` | The schedule resource that this slot defines an interval of status information |
| `status` | `code` | `1..1` | busy \| free \| busy-unavailable \| busy-tentative \| entered-in-error |
| `start` | `instant` | `1..1` | Date/Time that the slot is to begin |
| `end` | `instant` | `1..1` | Date/Time that the slot is to conclude |
| `overbooked` | `boolean` | `0..1` | This slot has already been overbooked, appointments are unlikely to be accepted for this time |
| `comment` | `string` | `0..1` | Comments on the slot to describe any extended information. Such as custom constraints on the slot |

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
| `appointment-type` | `string` | http://hl7.org/fhir/SearchParameter/Slot-appointment-type |
| `end` | `string` | https://medplum.com/fhir/SearchParameter/Slot-end |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/Slot-identifier |
| `schedule` | `string` | http://hl7.org/fhir/SearchParameter/Slot-schedule |
| `service-category` | `string` | http://hl7.org/fhir/SearchParameter/Slot-service-category |
| `service-type` | `string` | http://hl7.org/fhir/SearchParameter/Slot-service-type |
| `specialty` | `string` | http://hl7.org/fhir/SearchParameter/Slot-specialty |
| `start` | `string` | http://hl7.org/fhir/SearchParameter/Slot-start |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/Slot-status |

## Reference

- Official FHIR R4 spec: [`Slot`](https://hl7.org/fhir/R4/slot.html)
- Maturity: **Trial Use 3** (FMM 3).
