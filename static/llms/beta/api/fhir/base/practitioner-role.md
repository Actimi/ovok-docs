---
title: PractitionerRole
sidebar_label: PractitionerRole
description: "A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time."
---

# PractitionerRole

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Base</span>

A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.

## Endpoints

<ApiBase surface="fhir" path="/PractitionerRole" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/PractitionerRole/[id]` |
| Vread | `GET` | `/fhir/R4/PractitionerRole/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/PractitionerRole/[id]` |
| Patch | `PATCH` | `/fhir/R4/PractitionerRole/[id]` |
| Delete | `DELETE` | `/fhir/R4/PractitionerRole/[id]` |
| Create | `POST` | `/fhir/R4/PractitionerRole` |
| Search | `GET` | `/fhir/R4/PractitionerRole` |
| History | `GET` | `/fhir/R4/PractitionerRole/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business Identifiers that are specific to a role/location |
| `active` | `boolean` | `0..1` | Whether this practitioner role record is in active use |
| `period` | `Period` | `0..1` | The period during which the practitioner is authorized to perform in these role(s) |
| `practitioner` | `Reference` | `0..1` | Practitioner that is able to provide the defined services for the organization |
| `organization` | `Reference` | `0..1` | Organization where the roles are available |
| `code` | `CodeableConcept` | `0..*` | Roles which this practitioner may perform |
| `specialty` | `CodeableConcept` | `0..*` | Specific specialty of the practitioner |
| `location` | `Reference` | `0..*` | The location(s) at which this practitioner provides care |
| `healthcareService` | `Reference` | `0..*` | The list of healthcare services that this worker provides for this role's Organization/Location(s) |
| `telecom` | `ContactPoint` | `0..*` | Contact details that are specific to the role/location/service |
| `availableTime` | `BackboneElement` | `0..*` | Times the Service Site is available |
| `notAvailable` | `BackboneElement` | `0..*` | Not available during this time due to provided reason |
| `availabilityExceptions` | `string` | `0..1` | Description of availability exceptions |
| `endpoint` | `Reference` | `0..*` | Technical endpoints providing access to services operated for the practitioner with this role |

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
| `active` | `string` | http://hl7.org/fhir/SearchParameter/PractitionerRole-active |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/PractitionerRole-date |
| `email` | `string` | http://hl7.org/fhir/SearchParameter/individual-email |
| `endpoint` | `string` | http://hl7.org/fhir/SearchParameter/PractitionerRole-endpoint |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/PractitionerRole-identifier |
| `location` | `string` | http://hl7.org/fhir/SearchParameter/PractitionerRole-location |
| `organization` | `string` | http://hl7.org/fhir/SearchParameter/PractitionerRole-organization |
| `phone` | `string` | http://hl7.org/fhir/SearchParameter/individual-phone |
| `practitioner` | `string` | http://hl7.org/fhir/SearchParameter/PractitionerRole-practitioner |
| `role` | `string` | http://hl7.org/fhir/SearchParameter/PractitionerRole-role |
| `service` | `string` | http://hl7.org/fhir/SearchParameter/PractitionerRole-service |
| `specialty` | `string` | http://hl7.org/fhir/SearchParameter/PractitionerRole-specialty |
| `telecom` | `string` | http://hl7.org/fhir/SearchParameter/individual-telecom |

## Reference

- Official FHIR R4 spec: [`PractitionerRole`](https://hl7.org/fhir/R4/practitionerrole.html)
- Maturity: **Trial Use 2** (FMM 2).
