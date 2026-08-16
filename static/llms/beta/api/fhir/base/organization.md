---
title: Organization
sidebar_label: Organization
description: "A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies,"
---

# Organization

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Base</span>

A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.

## Endpoints

<ApiBase surface="fhir" path="/Organization" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/Organization/[id]` |
| Vread | `GET` | `/fhir/R4/Organization/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Organization/[id]` |
| Patch | `PATCH` | `/fhir/R4/Organization/[id]` |
| Delete | `DELETE` | `/fhir/R4/Organization/[id]` |
| Create | `POST` | `/fhir/R4/Organization` |
| Search | `GET` | `/fhir/R4/Organization` |
| History | `GET` | `/fhir/R4/Organization/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Identifies this organization  across multiple systems |
| `active` | `boolean` | `0..1` | Whether the organization's record is still in active use _modifier_ |
| `type` | `CodeableConcept` | `0..*` | Kind of organization |
| `name` | `string` | `0..1` | Name used for the organization |
| `alias` | `string` | `0..*` | A list of alternate names that the organization is known as, or was known as in the past |
| `telecom` | `ContactPoint` | `0..*` | A contact detail for the organization |
| `address` | `Address` | `0..*` | An address for the organization |
| `partOf` | `Reference` | `0..1` | The organization of which this organization forms a part |
| `contact` | `BackboneElement` | `0..*` | Contact for the organization for a certain purpose |
| `endpoint` | `Reference` | `0..*` | Technical endpoints providing access to services operated for the organization |

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
| `active` | `string` | http://hl7.org/fhir/SearchParameter/Organization-active |
| `address` | `string` | http://hl7.org/fhir/SearchParameter/Organization-address |
| `address-city` | `string` | http://hl7.org/fhir/SearchParameter/Organization-address-city |
| `address-country` | `string` | http://hl7.org/fhir/SearchParameter/Organization-address-country |
| `address-postalcode` | `string` | http://hl7.org/fhir/SearchParameter/Organization-address-postalcode |
| `address-state` | `string` | http://hl7.org/fhir/SearchParameter/Organization-address-state |
| `address-use` | `string` | http://hl7.org/fhir/SearchParameter/Organization-address-use |
| `endpoint` | `string` | http://hl7.org/fhir/SearchParameter/Organization-endpoint |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/Organization-identifier |
| `name` | `string` | http://hl7.org/fhir/SearchParameter/Organization-name |
| `partof` | `string` | http://hl7.org/fhir/SearchParameter/Organization-partof |
| `phonetic` | `string` | http://hl7.org/fhir/SearchParameter/Organization-phonetic |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/Organization-type |

## Reference

- Official FHIR R4 spec: [`Organization`](https://hl7.org/fhir/R4/organization.html)
- Maturity: **Trial Use 3** (FMM 3).
