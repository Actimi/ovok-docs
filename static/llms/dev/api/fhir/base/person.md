---
title: Person
sidebar_label: Person
description: "Demographics and administrative information about a person independent of a specific health-related context."
---

# Person

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Base</span>

Demographics and administrative information about a person independent of a specific health-related context.

## Endpoints

<ApiBase surface="fhir" path="/Person" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Person/[id]` |
| Vread        | `GET`    | `/fhir/R5/Person/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Person/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Person/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Person/[id]` |
| Create       | `POST`   | `/fhir/R5/Person` |
| Search       | `GET`    | `/fhir/R5/Person?...` |
| History      | `GET`    | `/fhir/R5/Person/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Person/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | A human identifier for this person |
| `active` | `boolean` | `0..1` | This person's record is in active use _modifier_ |
| `name` | `HumanName` | `0..*` | A name associated with the person |
| `telecom` | `ContactPoint` | `0..*` | A contact detail for the person |
| `gender` | `code` | `0..1` | male | female | other | unknown |
| `birthDate` | `date` | `0..1` | The date on which the person was born |
| `deceased[x]` | `boolean` / `dateTime` | `0..1` | Indicates if the individual is deceased or not |
| `address` | `Address` | `0..*` | One or more addresses for the person |
| `maritalStatus` | `CodeableConcept` | `0..1` | Marital (civil) status of a person |
| `photo` | `Attachment` | `0..*` | Image of the person |
| `communication` | `BackboneElement` | `0..*` | A language which may be used to communicate with the person about his or her health |
| `managingOrganization` | `Reference` | `0..1` | The organization that is the custodian of the person record |
| `link` | `BackboneElement` | `0..*` | Link to a resource that concerns the same actual person |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `address` | `string` | A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text |
| `address-city` | `string` | A city specified in an address |
| `address-country` | `string` | A country specified in an address |
| `address-postalcode` | `string` | A postalCode specified in an address |
| `address-state` | `string` | A state specified in an address |
| `address-use` | `token` | A use code specified in an address |
| `birthdate` | `date` | The patient's date of birth |
| `death-date` | `date` | The date of death has been provided and satisfies this search value |
| `deceased` | `token` | This person has been marked as deceased, or has a death date entered |
| `email` | `token` | A value in an email contact |
| `family` | `string` | A portion of the family name of the person |
| `gender` | `token` | Gender of the patient |
| `given` | `string` | A portion of the given name of the person |
| `identifier` | `token` | Account number |
| `link` | `reference` | Any link has this Patient, Person, RelatedPerson or Practitioner reference |
| `name` | `string` | A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text |
| `organization` | `reference` | The organization at which this person record is being managed |
| `patient` | `reference` | The entity that caused the expenses |
| `phone` | `token` | A value in a phone contact |
| `phonetic` | `string` | A portion of either family or given name using some kind of phonetic matching algorithm |
| `practitioner` | `reference` | The Person links to this Practitioner |
| `relatedperson` | `reference` | The Person links to this RelatedPerson |
| `telecom` | `token` | The value in any kind of telecom details of the patient |

## Reference

- Official FHIR R5 spec: [`Person`](https://hl7.org/fhir/R5/person.html)
- Maturity: **Trial Use 4** (FMM 4).
