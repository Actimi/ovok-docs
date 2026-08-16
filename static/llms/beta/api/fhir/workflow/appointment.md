---
title: Appointment
sidebar_label: Appointment
description: "A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more E"
---

# Appointment

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Workflow</span>

A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).

## Endpoints

<ApiBase surface="fhir" path="/Appointment" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/Appointment/[id]` |
| Vread | `GET` | `/fhir/R4/Appointment/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Appointment/[id]` |
| Patch | `PATCH` | `/fhir/R4/Appointment/[id]` |
| Delete | `DELETE` | `/fhir/R4/Appointment/[id]` |
| Create | `POST` | `/fhir/R4/Appointment` |
| Search | `GET` | `/fhir/R4/Appointment` |
| History | `GET` | `/fhir/R4/Appointment/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External Ids for this item |
| `status` | `code` | `1..1` | proposed \| pending \| booked \| arrived \| fulfilled \| cancelled \| noshow \| entered-in-error \| checked-in \| waitlist _modifier_ |
| `cancelationReason` | `CodeableConcept` | `0..1` | The coded reason for the appointment being cancelled |
| `serviceCategory` | `CodeableConcept` | `0..*` | A broad categorization of the service that is to be performed during this appointment |
| `serviceType` | `CodeableConcept` | `0..*` | The specific service that is to be performed during this appointment |
| `specialty` | `CodeableConcept` | `0..*` | The specialty of a practitioner that would be required to perform the service requested in this appointment |
| `appointmentType` | `CodeableConcept` | `0..1` | The style of appointment or patient that has been booked in the slot (not service type) |
| `reasonCode` | `CodeableConcept` | `0..*` | Coded reason this appointment is scheduled |
| `reasonReference` | `Reference` | `0..*` | Reason the appointment is to take place (resource) |
| `priority` | `unsignedInt` | `0..1` | Used to make informed decisions if needing to re-prioritize |
| `description` | `string` | `0..1` | Shown on a subject line in a meeting request, or appointment list |
| `supportingInformation` | `Reference` | `0..*` | Additional information to support the appointment |
| `start` | `instant` | `0..1` | When appointment is to take place |
| `end` | `instant` | `0..1` | When appointment is to conclude |
| `minutesDuration` | `positiveInt` | `0..1` | Can be less than start/end (e.g. estimate) |
| `slot` | `Reference` | `0..*` | The slots that this appointment is filling |
| `created` | `dateTime` | `0..1` | The date that this appointment was initially created |
| `comment` | `string` | `0..1` | Additional comments |
| `patientInstruction` | `string` | `0..1` | Detailed information and instructions for the patient |
| `basedOn` | `Reference` | `0..*` | The service request this appointment is allocated to assess |
| `participant` | `BackboneElement` | `1..*` | Participants involved in appointment |
| `requestedPeriod` | `Period` | `0..*` | Potential date/time interval(s) requested to allocate the appointment within |

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
| `actor` | `string` | http://hl7.org/fhir/SearchParameter/Appointment-actor |
| `appointment-type` | `string` | http://hl7.org/fhir/SearchParameter/Appointment-appointment-type |
| `based-on` | `string` | http://hl7.org/fhir/SearchParameter/Appointment-based-on |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/Appointment-date |
| `end` | `string` | https://medplum.com/fhir/SearchParameter/Appointment-end |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/Appointment-identifier |
| `location` | `string` | http://hl7.org/fhir/SearchParameter/Appointment-location |
| `part-status` | `string` | http://hl7.org/fhir/SearchParameter/Appointment-part-status |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/Appointment-patient |
| `practitioner` | `string` | http://hl7.org/fhir/SearchParameter/Appointment-practitioner |
| `reason-code` | `string` | http://hl7.org/fhir/SearchParameter/Appointment-reason-code |
| `reason-reference` | `string` | http://hl7.org/fhir/SearchParameter/Appointment-reason-reference |
| `service-category` | `string` | http://hl7.org/fhir/SearchParameter/Appointment-service-category |
| `service-type` | `string` | http://hl7.org/fhir/SearchParameter/Appointment-service-type |
| `slot` | `string` | http://hl7.org/fhir/SearchParameter/Appointment-slot |
| `specialty` | `string` | http://hl7.org/fhir/SearchParameter/Appointment-specialty |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/Appointment-status |
| `supporting-info` | `string` | http://hl7.org/fhir/SearchParameter/Appointment-supporting-info |

## Reference

- Official FHIR R4 spec: [`Appointment`](https://hl7.org/fhir/R4/appointment.html)
- Maturity: **Trial Use 3** (FMM 3).
