---
title: PractitionerRole
sidebar_label: PractitionerRole
description: "A specific set of Roles/Locations/specialties/services that a practitioner may perform, or has performed at an organization during a period of time."
---

# PractitionerRole

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Base</span>

A specific set of Roles/Locations/specialties/services that a practitioner may perform, or has performed at an organization during a period of time.

## Endpoints

<ApiBase surface="fhir" path="/PractitionerRole" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/PractitionerRole/[id]` |
| Vread        | `GET`    | `/fhir/R5/PractitionerRole/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/PractitionerRole/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/PractitionerRole/[id]` |
| Delete       | `DELETE` | `/fhir/R5/PractitionerRole/[id]` |
| Create       | `POST`   | `/fhir/R5/PractitionerRole` |
| Search       | `GET`    | `/fhir/R5/PractitionerRole?...` |
| History      | `GET`    | `/fhir/R5/PractitionerRole/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/PractitionerRole/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Identifiers for a role/location |
| `active` | `boolean` | `0..1` | Whether this practitioner role record is in active use |
| `period` | `Period` | `0..1` | The period during which the practitioner is authorized to perform in these role(s) |
| `practitioner` | `Reference` | `0..1` | Practitioner that provides services for the organization |
| `organization` | `Reference` | `0..1` | Organization where the roles are available |
| `code` | `CodeableConcept` | `0..*` | Roles which this practitioner may perform |
| `specialty` | `CodeableConcept` | `0..*` | Specific specialty of the practitioner |
| `location` | `Reference` | `0..*` | Location(s) where the practitioner provides care |
| `healthcareService` | `Reference` | `0..*` | Healthcare services provided for this role's Organization/Location(s) |
| `contact` | `ExtendedContactDetail` | `0..*` | Official contact details relating to this PractitionerRole |
| `characteristic` | `CodeableConcept` | `0..*` | Collection of characteristics (attributes) |
| `communication` | `CodeableConcept` | `0..*` | A language the practitioner (in this role) can use in patient communication |
| `availability` | `Availability` | `0..*` | Times the Practitioner is available at this location and/or healthcare service (including exceptions) |
| `endpoint` | `Reference` | `0..*` | Endpoints for interacting with the practitioner in this role |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`PractitionerRole` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `active` | `token` | Whether this practitioner role record is in active use |
| `characteristic` | `token` | One of the PractitionerRole's characteristics |
| `communication` | `token` | One of the languages that the practitioner can communicate with |
| `date` | `date` | The period during which the practitioner is authorized to perform in these role(s) |
| `email` | `token` | A value in an email contact |
| `endpoint` | `reference` | Technical endpoints providing access to services operated for the practitioner with this role |
| `identifier` | `token` | A practitioner's Identifier |
| `location` | `reference` | One of the locations at which this practitioner provides care |
| `organization` | `reference` | The identity of the organization the practitioner represents / acts on behalf of |
| `phone` | `token` | A value in a phone contact |
| `practitioner` | `reference` | Practitioner that is able to provide the defined services for the organization |
| `role` | `token` | The practitioner can perform this role at for the organization |
| `service` | `reference` | The list of healthcare services that this worker provides for this role's Organization/Location(s) |
| `specialty` | `token` | The practitioner has this specialty at an organization |
| `telecom` | `token` | The value in any kind of telecom details of the patient |

## Reference

- Official FHIR R5 spec: [`PractitionerRole`](https://hl7.org/fhir/R5/practitionerrole.html)
- Element bindings & profiles: [`PractitionerRole` profile](https://hl7.org/fhir/R5/practitionerrole-definitions.html)
- Maturity: **Trial Use 4** (FMM 4).
