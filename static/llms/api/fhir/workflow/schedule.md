---
title: Schedule
sidebar_label: Schedule
description: "A container for slots of time that may be available for booking appointments."
---

# Schedule

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Workflow</span>

A container for slots of time that may be available for booking appointments.

## Endpoints

<ApiBase surface="fhir" path="/Schedule" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Schedule/[id]` |
| Vread        | `GET`    | `/fhir/R5/Schedule/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Schedule/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Schedule/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Schedule/[id]` |
| Create       | `POST`   | `/fhir/R5/Schedule` |
| Search       | `GET`    | `/fhir/R5/Schedule?...` |
| History      | `GET`    | `/fhir/R5/Schedule/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Schedule/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External Ids for this item |
| `active` | `boolean` | `0..1` | Whether this schedule is in active use _modifier_ |
| `serviceCategory` | `CodeableConcept` | `0..*` | High-level category |
| `serviceType` | `CodeableReference` | `0..*` | Specific service |
| `specialty` | `CodeableConcept` | `0..*` | Type of specialty needed |
| `name` | `string` | `0..1` | Human-readable label |
| `actor` | `Reference` | `1..*` | Resource(s) that availability information is being provided for |
| `planningHorizon` | `Period` | `0..1` | Period of time covered by schedule |
| `comment` | `markdown` | `0..1` | Comments on availability |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`Schedule` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `active` | `token` | Is the schedule in active use |
| `actor` | `reference` | The individual(HealthcareService, Practitioner, Location, ...) to find a Schedule for |
| `date` | `date` | Search for Schedule resources that have a period that contains this date specified |
| `identifier` | `token` | A Schedule Identifier |
| `name` | `string` | A portion of the Schedule name |
| `service-category` | `token` | High-level category |
| `service-type` | `token` | The type (by coding) of appointments that can be booked into associated slot(s) |
| `service-type-reference` | `reference` | The type (by HealthcareService) of appointments that can be booked into associated slot(s) |
| `specialty` | `token` | Type of specialty needed |

## Reference

- Official FHIR R5 spec: [`Schedule`](https://hl7.org/fhir/R5/schedule.html)
- Element bindings & profiles: [`Schedule` profile](https://hl7.org/fhir/R5/schedule-definitions.html)
- Maturity: **Trial Use 3** (FMM 3).
