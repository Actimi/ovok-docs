---
title: Practitioner
sidebar_label: Practitioner
description: "A person who is directly or indirectly involved in the provisioning of healthcare."
---

# Practitioner

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Base</span>

A person who is directly or indirectly involved in the provisioning of healthcare.

## Endpoints

<ApiBase surface="fhir" path="/Practitioner" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/Practitioner/[id]` |
| Vread | `GET` | `/fhir/R4/Practitioner/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Practitioner/[id]` |
| Patch | `PATCH` | `/fhir/R4/Practitioner/[id]` |
| Delete | `DELETE` | `/fhir/R4/Practitioner/[id]` |
| Create | `POST` | `/fhir/R4/Practitioner` |
| Search | `GET` | `/fhir/R4/Practitioner` |
| History | `GET` | `/fhir/R4/Practitioner/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | An identifier for the person as this agent |
| `active` | `boolean` | `0..1` | Whether this practitioner's record is in active use |
| `name` | `HumanName` | `0..*` | The name(s) associated with the practitioner |
| `telecom` | `ContactPoint` | `0..*` | A contact detail for the practitioner (that apply to all roles) |
| `address` | `Address` | `0..*` | Address(es) of the practitioner that are not role specific (typically home address) |
| `gender` | `code` | `0..1` | male \| female \| other \| unknown |
| `birthDate` | `date` | `0..1` | The date  on which the practitioner was born |
| `photo` | `Attachment` | `0..*` | Image of the person |
| `qualification` | `BackboneElement` | `0..*` | Certification, licenses, or training pertaining to the provision of care |
| `communication` | `CodeableConcept` | `0..*` | A language the practitioner can use in patient communication |

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
| `active` | `string` | http://hl7.org/fhir/SearchParameter/Practitioner-active |
| `address` | `string` | http://hl7.org/fhir/SearchParameter/individual-address |
| `address-city` | `string` | http://hl7.org/fhir/SearchParameter/individual-address-city |
| `address-country` | `string` | http://hl7.org/fhir/SearchParameter/individual-address-country |
| `address-postalcode` | `string` | http://hl7.org/fhir/SearchParameter/individual-address-postalcode |
| `address-state` | `string` | http://hl7.org/fhir/SearchParameter/individual-address-state |
| `address-use` | `string` | http://hl7.org/fhir/SearchParameter/individual-address-use |
| `communication` | `string` | http://hl7.org/fhir/SearchParameter/Practitioner-communication |
| `email` | `string` | http://hl7.org/fhir/SearchParameter/individual-email |
| `family` | `string` | http://hl7.org/fhir/SearchParameter/individual-family |
| `gender` | `string` | http://hl7.org/fhir/SearchParameter/individual-gender |
| `given` | `string` | http://hl7.org/fhir/SearchParameter/individual-given |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/Practitioner-identifier |
| `name` | `string` | http://hl7.org/fhir/SearchParameter/Practitioner-name |
| `phone` | `string` | http://hl7.org/fhir/SearchParameter/individual-phone |
| `phonetic` | `string` | http://hl7.org/fhir/SearchParameter/individual-phonetic |
| `qualification-code` | `string` | https://medplum.com/fhir/SearchParameter/Practitioner-qualification-code |
| `telecom` | `string` | http://hl7.org/fhir/SearchParameter/individual-telecom |

## Reference

- Official FHIR R4 spec: [`Practitioner`](https://hl7.org/fhir/R4/practitioner.html)
- Maturity: **Trial Use 3** (FMM 3).
