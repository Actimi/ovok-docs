---
title: MedicationStatement
sidebar_label: MedicationStatement
description: "A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has take"
---

# MedicationStatement

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Clinical — Medications</span>

A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains. 

The primary difference between a medicationstatement and a medicationadministration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medicationstatement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the Medication Statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.

## Endpoints

<ApiBase surface="fhir" path="/MedicationStatement" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/MedicationStatement/[id]` |
| Vread        | `GET`    | `/fhir/R5/MedicationStatement/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/MedicationStatement/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/MedicationStatement/[id]` |
| Delete       | `DELETE` | `/fhir/R5/MedicationStatement/[id]` |
| Create       | `POST`   | `/fhir/R5/MedicationStatement` |
| Search       | `GET`    | `/fhir/R5/MedicationStatement?...` |
| History      | `GET`    | `/fhir/R5/MedicationStatement/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/MedicationStatement/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External identifier |
| `partOf` | `Reference` | `0..*` | Part of referenced event |
| `status` | `code` | `1..1` | recorded | entered-in-error | draft _modifier_ |
| `category` | `CodeableConcept` | `0..*` | Type of medication statement |
| `medication` | `CodeableReference` | `1..1` | What medication was taken |
| `subject` | `Reference` | `1..1` | Who is/was taking  the medication |
| `encounter` | `Reference` | `0..1` | Encounter associated with MedicationStatement |
| `effective[x]` | `dateTime` / `Period` / `Timing` | `0..1` | The date/time or interval when the medication is/was/will be taken |
| `dateAsserted` | `dateTime` | `0..1` | When the usage was asserted? |
| `informationSource` | `Reference` | `0..*` | Person or organization that provided the information about the taking of this medication |
| `derivedFrom` | `Reference` | `0..*` | Link to information used to derive the MedicationStatement |
| `reason` | `CodeableReference` | `0..*` | Reason for why the medication is being/was taken |
| `note` | `Annotation` | `0..*` | Further information about the usage |
| `relatedClinicalInformation` | `Reference` | `0..*` | Link to information relevant to the usage of a medication |
| `renderedDosageInstruction` | `markdown` | `0..1` | Full representation of the dosage instructions |
| `dosage` | `Dosage` | `0..*` | Details of how medication is/was taken or should be taken |
| `adherence` | `BackboneElement` | `0..1` | Indicates whether the medication is or is not being consumed or administered |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`MedicationStatement` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `adherence` | `token` | Returns statements based on adherence or compliance |
| `category` | `token` | Returns statements of this category of MedicationStatement |
| `code` | `token` | Event or incident that occurred or was averted |
| `effective` | `date` | Date when patient was taking (or not taking) the medication |
| `encounter` | `reference` | Encounter related to the activity recorded in the AuditEvent |
| `identifier` | `token` | Account number |
| `medication` | `reference` | Return administrations of this medication reference |
| `patient` | `reference` | The entity that caused the expenses |
| `source` | `reference` | Who or where the information in the statement came from |
| `status` | `token` | MedicationAdministration event status (for example one of active/paused/completed/nullified) |
| `subject` | `reference` | The identity of a patient, animal or group to list statements for |

## Reference

- Official FHIR R5 spec: [`MedicationStatement`](https://hl7.org/fhir/R5/medicationstatement.html)
- Element bindings & profiles: [`MedicationStatement` profile](https://hl7.org/fhir/R5/medicationstatement-definitions.html)
- Maturity: **Trial Use 4** (FMM 4).
