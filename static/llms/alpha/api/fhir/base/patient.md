---
title: Patient
sidebar_label: Patient
description: "Demographics and other administrative information about an individual or animal receiving care or other health-related services."
---

# Patient

<span className="fhir-maturity" data-level="5">Normative</span>
<span className="fhir-category">Base</span>

Demographics and other administrative information about an individual or animal receiving care or other health-related services.

## Endpoints

<ApiBase surface="fhir" path="/Patient" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Patient/[id]` |
| Vread        | `GET`    | `/fhir/R5/Patient/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Patient/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Patient/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Patient/[id]` |
| Create       | `POST`   | `/fhir/R5/Patient` |
| Search       | `GET`    | `/fhir/R5/Patient?...` |
| History      | `GET`    | `/fhir/R5/Patient/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Patient/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | An identifier for this patient |
| `active` | `boolean` | `0..1` | Whether this patient's record is in active use _modifier_ |
| `name` | `HumanName` | `0..*` | A name associated with the patient |
| `telecom` | `ContactPoint` | `0..*` | A contact detail for the individual |
| `gender` | `code` | `0..1` | male | female | other | unknown |
| `birthDate` | `date` | `0..1` | The date of birth for the individual |
| `deceased[x]` | `boolean` / `dateTime` | `0..1` | Indicates if the individual is deceased or not _modifier_ |
| `address` | `Address` | `0..*` | An address for the individual |
| `maritalStatus` | `CodeableConcept` | `0..1` | Marital (civil) status of a patient |
| `multipleBirth[x]` | `boolean` / `integer` | `0..1` | Whether patient is part of a multiple birth |
| `photo` | `Attachment` | `0..*` | Image of the patient |
| `contact` | `BackboneElement` | `0..*` | A contact party (e.g. guardian, partner, friend) for the patient |
| `communication` | `BackboneElement` | `0..*` | A language which may be used to communicate with the patient about his or her health |
| `generalPractitioner` | `Reference` | `0..*` | Patient's nominated primary care provider |
| `managingOrganization` | `Reference` | `0..1` | Organization that is the custodian of the patient record |
| `link` | `BackboneElement` | `0..*` | Link to a Patient or RelatedPerson resource that concerns the same actual individual _modifier_ |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `active` | `token` | Whether the patient record is active |
| `address` | `string` | A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text |
| `address-city` | `string` | A city specified in an address |
| `address-country` | `string` | A country specified in an address |
| `address-postalcode` | `string` | A postalCode specified in an address |
| `address-state` | `string` | A state specified in an address |
| `address-use` | `token` | A use code specified in an address |
| `birthdate` | `date` | The patient's date of birth |
| `death-date` | `date` | The date of death has been provided and satisfies this search value |
| `deceased` | `token` | This patient has been marked as deceased, or has a death date entered |
| `email` | `token` | A value in an email contact |
| `family` | `string` | A portion of the family name of the patient |
| `gender` | `token` | Gender of the patient |
| `general-practitioner` | `reference` | Patient's nominated general practitioner, not the organization that manages the record |
| `given` | `string` | A portion of the given name of the patient |
| `identifier` | `token` | A patient identifier |
| `language` | `token` | Language code (irrespective of use value) |
| `link` | `reference` | All patients/related persons linked to the given patient |
| `name` | `string` | A server defined search that may match any of the string fields in the HumanName, including family, given, prefix, suffix, and/or text |
| `organization` | `reference` | The organization that is the custodian of the patient record |
| `part-agree` | `reference` | Search by url for a participation agreement, which is stored as an extension referencing a DocumentReference |
| `phone` | `token` | A value in a phone contact |
| `phonetic` | `string` | A portion of either family or given name using some kind of phonetic matching algorithm |
| `telecom` | `token` | The value in any kind of telecom details of the patient |

## Reference

- Official FHIR R5 spec: [`Patient`](https://hl7.org/fhir/R5/patient.html)
- Maturity: **Normative** (FMM 5).
