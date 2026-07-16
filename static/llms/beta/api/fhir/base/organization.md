---
title: Organization
sidebar_label: Organization
description: "A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies,"
---

# Organization

<span className="fhir-maturity" data-level="5">Normative</span>
<span className="fhir-category">Base</span>

A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.

## Endpoints

<ApiBase surface="fhir" path="/Organization" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Organization/[id]` |
| Vread        | `GET`    | `/fhir/R5/Organization/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Organization/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Organization/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Organization/[id]` |
| Create       | `POST`   | `/fhir/R5/Organization` |
| Search       | `GET`    | `/fhir/R5/Organization?...` |
| History      | `GET`    | `/fhir/R5/Organization/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Organization/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Identifies this organization  across multiple systems |
| `active` | `boolean` | `0..1` | Whether the organization's record is still in active use _modifier_ |
| `type` | `CodeableConcept` | `0..*` | Kind of organization |
| `name` | `string` | `0..1` | Name used for the organization |
| `alias` | `string` | `0..*` | A list of alternate names that the organization is known as, or was known as in the past |
| `description` | `markdown` | `0..1` | Additional details about the Organization that could be displayed as further information to identify the Organization beyond its name |
| `contact` | `ExtendedContactDetail` | `0..*` | Official contact details for the Organization |
| `partOf` | `Reference` | `0..1` | The organization of which this organization forms a part |
| `endpoint` | `Reference` | `0..*` | Technical endpoints providing access to services operated for the organization |
| `qualification` | `BackboneElement` | `0..*` | Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `active` | `token` | Is the Organization record active |
| `address` | `string` | A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text |
| `address-city` | `string` | A city specified in an address |
| `address-country` | `string` | A country specified in an address |
| `address-postalcode` | `string` | A postal code specified in an address |
| `address-state` | `string` | A state specified in an address |
| `address-use` | `token` | A use code specified in an address |
| `endpoint` | `reference` | Technical endpoints providing access to services operated for the organization |
| `identifier` | `token` | Any identifier for the organization (not the accreditation issuer's identifier) |
| `name` | `string` | A portion of the organization's name or alias |
| `partof` | `reference` | An organization of which this organization forms a part |
| `phonetic` | `string` | A portion of the organization's name using some kind of phonetic matching algorithm |
| `type` | `token` | A code for the type of organization |

## Reference

- Official FHIR R5 spec: [`Organization`](https://hl7.org/fhir/R5/organization.html)
- Maturity: **Normative** (FMM 5).
