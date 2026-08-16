---
title: Person
sidebar_label: Person
description: "Demographics and administrative information about a person independent of a specific health-related context."
---

# Person

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Base</span>

Demographics and administrative information about a person independent of a specific health-related context.

## Endpoints

<ApiBase surface="fhir" path="/Person" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/Person/[id]` |
| Vread | `GET` | `/fhir/R4/Person/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Person/[id]` |
| Patch | `PATCH` | `/fhir/R4/Person/[id]` |
| Delete | `DELETE` | `/fhir/R4/Person/[id]` |
| Create | `POST` | `/fhir/R4/Person` |
| Search | `GET` | `/fhir/R4/Person` |
| History | `GET` | `/fhir/R4/Person/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | A human identifier for this person |
| `name` | `HumanName` | `0..*` | A name associated with the person |
| `telecom` | `ContactPoint` | `0..*` | A contact detail for the person |
| `gender` | `code` | `0..1` | male \| female \| other \| unknown |
| `birthDate` | `date` | `0..1` | The date on which the person was born |
| `address` | `Address` | `0..*` | One or more addresses for the person |
| `photo` | `Attachment` | `0..1` | Image of the person |
| `managingOrganization` | `Reference` | `0..1` | The organization that is the custodian of the person record |
| `active` | `boolean` | `0..1` | This person's record is in active use _modifier_ |
| `link` | `BackboneElement` | `0..*` | Link to a resource that concerns the same actual person |

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
| `address` | `string` | http://hl7.org/fhir/SearchParameter/individual-address |
| `address-city` | `string` | http://hl7.org/fhir/SearchParameter/individual-address-city |
| `address-country` | `string` | http://hl7.org/fhir/SearchParameter/individual-address-country |
| `address-postalcode` | `string` | http://hl7.org/fhir/SearchParameter/individual-address-postalcode |
| `address-state` | `string` | http://hl7.org/fhir/SearchParameter/individual-address-state |
| `address-use` | `string` | http://hl7.org/fhir/SearchParameter/individual-address-use |
| `birthdate` | `string` | http://hl7.org/fhir/SearchParameter/individual-birthdate |
| `email` | `string` | http://hl7.org/fhir/SearchParameter/individual-email |
| `gender` | `string` | http://hl7.org/fhir/SearchParameter/individual-gender |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/Person-identifier |
| `link` | `string` | http://hl7.org/fhir/SearchParameter/Person-link |
| `name` | `string` | http://hl7.org/fhir/SearchParameter/Person-name |
| `organization` | `string` | http://hl7.org/fhir/SearchParameter/Person-organization |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/Person-patient |
| `phone` | `string` | http://hl7.org/fhir/SearchParameter/individual-phone |
| `phonetic` | `string` | http://hl7.org/fhir/SearchParameter/individual-phonetic |
| `practitioner` | `string` | http://hl7.org/fhir/SearchParameter/Person-practitioner |
| `relatedperson` | `string` | http://hl7.org/fhir/SearchParameter/Person-relatedperson |
| `telecom` | `string` | http://hl7.org/fhir/SearchParameter/individual-telecom |

## Reference

- Official FHIR R4 spec: [`Person`](https://hl7.org/fhir/R4/person.html)
- Maturity: **Trial Use 2** (FMM 2).
