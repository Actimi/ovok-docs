---
title: MedicationDispense
sidebar_label: MedicationDispense
description: "Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) p"
---

# MedicationDispense

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Clinical — Medications</span>

Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.

## Endpoints

<ApiBase surface="fhir" path="/MedicationDispense" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/MedicationDispense/[id]` |
| Vread | `GET` | `/fhir/R4/MedicationDispense/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/MedicationDispense/[id]` |
| Patch | `PATCH` | `/fhir/R4/MedicationDispense/[id]` |
| Delete | `DELETE` | `/fhir/R4/MedicationDispense/[id]` |
| Create | `POST` | `/fhir/R4/MedicationDispense` |
| Search | `GET` | `/fhir/R4/MedicationDispense` |
| History | `GET` | `/fhir/R4/MedicationDispense/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External identifier |
| `partOf` | `Reference` | `0..*` | Event that dispense is part of |
| `status` | `code` | `1..1` | preparation \| in-progress \| cancelled \| on-hold \| completed \| entered-in-error \| stopped \| declined \| unknown _modifier_ |
| `statusReason[x]` | `CodeableConcept` / `Reference` | `0..1` | Why a dispense was not performed |
| `category` | `CodeableConcept` | `0..1` | Type of medication dispense |
| `medication[x]` | `CodeableConcept` / `Reference` | `1..1` | What medication was supplied |
| `subject` | `Reference` | `0..1` | Who the dispense is for |
| `context` | `Reference` | `0..1` | Encounter / Episode associated with event |
| `supportingInformation` | `Reference` | `0..*` | Information that supports the dispensing of the medication |
| `performer` | `BackboneElement` | `0..*` | Who performed event |
| `location` | `Reference` | `0..1` | Where the dispense occurred |
| `authorizingPrescription` | `Reference` | `0..*` | Medication order that authorizes the dispense |
| `type` | `CodeableConcept` | `0..1` | Trial fill, partial fill, emergency fill, etc. |
| `quantity` | `Quantity` | `0..1` | Amount dispensed |
| `daysSupply` | `Quantity` | `0..1` | Amount of medication expressed as a timing amount |
| `whenPrepared` | `dateTime` | `0..1` | When product was packaged and reviewed |
| `whenHandedOver` | `dateTime` | `0..1` | When product was given out |
| `destination` | `Reference` | `0..1` | Where the medication was sent |
| `receiver` | `Reference` | `0..*` | Who collected the medication |
| `note` | `Annotation` | `0..*` | Information about the dispense |
| `dosageInstruction` | `Dosage` | `0..*` | How the medication is to be used by the patient or administered by the caregiver |
| `substitution` | `BackboneElement` | `0..1` | Whether a substitution was performed on the dispense |
| `detectedIssue` | `Reference` | `0..*` | Clinical issue with action |
| `eventHistory` | `Reference` | `0..*` | A list of relevant lifecycle events |

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
| `code` | `string` | http://hl7.org/fhir/SearchParameter/clinical-code |
| `context` | `string` | http://hl7.org/fhir/SearchParameter/MedicationDispense-context |
| `destination` | `string` | http://hl7.org/fhir/SearchParameter/MedicationDispense-destination |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/clinical-identifier |
| `medication` | `string` | http://hl7.org/fhir/SearchParameter/medications-medication |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/clinical-patient |
| `performer` | `string` | http://hl7.org/fhir/SearchParameter/MedicationDispense-performer |
| `prescription` | `string` | http://hl7.org/fhir/SearchParameter/medications-prescription |
| `receiver` | `string` | http://hl7.org/fhir/SearchParameter/MedicationDispense-receiver |
| `responsibleparty` | `string` | http://hl7.org/fhir/SearchParameter/MedicationDispense-responsibleparty |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/medications-status |
| `subject` | `string` | http://hl7.org/fhir/SearchParameter/MedicationDispense-subject |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/MedicationDispense-type |
| `whenhandedover` | `string` | http://hl7.org/fhir/SearchParameter/MedicationDispense-whenhandedover |
| `whenprepared` | `string` | http://hl7.org/fhir/SearchParameter/MedicationDispense-whenprepared |

## Reference

- Official FHIR R4 spec: [`MedicationDispense`](https://hl7.org/fhir/R4/medicationdispense.html)
- Maturity: **Trial Use 2** (FMM 2).
