---
title: MedicationStatement
sidebar_label: MedicationStatement
description: "A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has take"
---

# MedicationStatement

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Clinical — Medications</span>

A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains. 

The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.

## Endpoints

<ApiBase surface="fhir" path="/MedicationStatement" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/MedicationStatement/[id]` |
| Vread | `GET` | `/fhir/R4/MedicationStatement/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/MedicationStatement/[id]` |
| Patch | `PATCH` | `/fhir/R4/MedicationStatement/[id]` |
| Delete | `DELETE` | `/fhir/R4/MedicationStatement/[id]` |
| Create | `POST` | `/fhir/R4/MedicationStatement` |
| Search | `GET` | `/fhir/R4/MedicationStatement` |
| History | `GET` | `/fhir/R4/MedicationStatement/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External identifier |
| `basedOn` | `Reference` | `0..*` | Fulfils plan, proposal or order |
| `partOf` | `Reference` | `0..*` | Part of referenced event |
| `status` | `code` | `1..1` | active \| completed \| entered-in-error \| intended \| stopped \| on-hold \| unknown \| not-taken _modifier_ |
| `statusReason` | `CodeableConcept` | `0..*` | Reason for current status |
| `category` | `CodeableConcept` | `0..1` | Type of medication usage |
| `medication[x]` | `CodeableConcept` / `Reference` | `1..1` | What medication was taken |
| `subject` | `Reference` | `1..1` | Who is/was taking  the medication |
| `context` | `Reference` | `0..1` | Encounter / Episode associated with MedicationStatement |
| `effective[x]` | `dateTime` / `Period` | `0..1` | The date/time or interval when the medication is/was/will be taken |
| `dateAsserted` | `dateTime` | `0..1` | When the statement was asserted? |
| `informationSource` | `Reference` | `0..1` | Person or organization that provided the information about the taking of this medication |
| `derivedFrom` | `Reference` | `0..*` | Additional supporting information |
| `reasonCode` | `CodeableConcept` | `0..*` | Reason for why the medication is being/was taken |
| `reasonReference` | `Reference` | `0..*` | Condition or observation that supports why the medication is being/was taken |
| `note` | `Annotation` | `0..*` | Further information about the statement |
| `dosage` | `Dosage` | `0..*` | Details of how medication is/was taken or should be taken |

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
| `category` | `string` | http://hl7.org/fhir/SearchParameter/MedicationStatement-category |
| `code` | `string` | http://hl7.org/fhir/SearchParameter/clinical-code |
| `context` | `string` | http://hl7.org/fhir/SearchParameter/MedicationStatement-context |
| `effective` | `string` | http://hl7.org/fhir/SearchParameter/MedicationStatement-effective |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/clinical-identifier |
| `medication` | `string` | http://hl7.org/fhir/SearchParameter/medications-medication |
| `part-of` | `string` | http://hl7.org/fhir/SearchParameter/MedicationStatement-part-of |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/clinical-patient |
| `source` | `string` | http://hl7.org/fhir/SearchParameter/MedicationStatement-source |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/medications-status |
| `subject` | `string` | http://hl7.org/fhir/SearchParameter/MedicationStatement-subject |

## Reference

- Official FHIR R4 spec: [`MedicationStatement`](https://hl7.org/fhir/R4/medicationstatement.html)
- Maturity: **Trial Use 3** (FMM 3).
