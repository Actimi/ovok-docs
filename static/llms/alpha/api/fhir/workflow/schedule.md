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
| Read | `GET` | `/fhir/R4/Schedule/[id]` |
| Vread | `GET` | `/fhir/R4/Schedule/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Schedule/[id]` |
| Patch | `PATCH` | `/fhir/R4/Schedule/[id]` |
| Delete | `DELETE` | `/fhir/R4/Schedule/[id]` |
| Create | `POST` | `/fhir/R4/Schedule` |
| Search | `GET` | `/fhir/R4/Schedule` |
| History | `GET` | `/fhir/R4/Schedule/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External Ids for this item |
| `active` | `boolean` | `0..1` | Whether this schedule is in active use _modifier_ |
| `serviceCategory` | `CodeableConcept` | `0..*` | High-level category |
| `serviceType` | `CodeableConcept` | `0..*` | Specific service |
| `specialty` | `CodeableConcept` | `0..*` | Type of specialty needed |
| `actor` | `Reference` | `1..*` | Resource(s) that availability information is being provided for |
| `planningHorizon` | `Period` | `0..1` | Period of time covered by schedule |
| `comment` | `string` | `0..1` | Comments on availability |

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
| `active` | `string` | http://hl7.org/fhir/SearchParameter/Schedule-active |
| `actor` | `string` | http://hl7.org/fhir/SearchParameter/Schedule-actor |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/Schedule-date |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/Schedule-identifier |
| `service-category` | `string` | http://hl7.org/fhir/SearchParameter/Schedule-service-category |
| `service-type` | `string` | http://hl7.org/fhir/SearchParameter/Schedule-service-type |
| `specialty` | `string` | http://hl7.org/fhir/SearchParameter/Schedule-specialty |

## Reference

- Official FHIR R4 spec: [`Schedule`](https://hl7.org/fhir/R4/schedule.html)
- Maturity: **Trial Use 3** (FMM 3).
