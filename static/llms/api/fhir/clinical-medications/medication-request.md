---
title: MedicationRequest
sidebar_label: MedicationRequest
description: "An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called \"Medication"
---

# MedicationRequest

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Clinical — Medications</span>

An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.

## Endpoints

<ApiBase surface="fhir" path="/MedicationRequest" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/MedicationRequest/[id]` |
| Vread        | `GET`    | `/fhir/R5/MedicationRequest/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/MedicationRequest/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/MedicationRequest/[id]` |
| Delete       | `DELETE` | `/fhir/R5/MedicationRequest/[id]` |
| Create       | `POST`   | `/fhir/R5/MedicationRequest` |
| Search       | `GET`    | `/fhir/R5/MedicationRequest?...` |
| History      | `GET`    | `/fhir/R5/MedicationRequest/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/MedicationRequest/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External ids for this request |
| `basedOn` | `Reference` | `0..*` | A plan or request that is fulfilled in whole or in part by this medication request |
| `priorPrescription` | `Reference` | `0..1` | Reference to an order/prescription that is being replaced by this MedicationRequest |
| `groupIdentifier` | `Identifier` | `0..1` | Composite request this is part of |
| `status` | `code` | `1..1` | active | on-hold | ended | stopped | completed | cancelled | entered-in-error | draft | unknown _modifier_ |
| `statusReason` | `CodeableConcept` | `0..1` | Reason for current status |
| `statusChanged` | `dateTime` | `0..1` | When the status was changed |
| `intent` | `code` | `1..1` | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option _modifier_ |
| `category` | `CodeableConcept` | `0..*` | Grouping or category of medication request |
| `priority` | `code` | `0..1` | routine | urgent | asap | stat |
| `doNotPerform` | `boolean` | `0..1` | True if patient is to stop taking or not to start taking the medication _modifier_ |
| `medication` | `CodeableReference` | `1..1` | Medication to be taken |
| `subject` | `Reference` | `1..1` | Individual or group for whom the medication has been requested |
| `informationSource` | `Reference` | `0..*` | The person or organization who provided the information about this request, if the source is someone other than the requestor |
| `encounter` | `Reference` | `0..1` | Encounter created as part of encounter/admission/stay |
| `supportingInformation` | `Reference` | `0..*` | Information to support fulfilling of the medication |
| `authoredOn` | `dateTime` | `0..1` | When request was initially authored |
| `requester` | `Reference` | `0..1` | Who/What requested the Request |
| `reported` | `boolean` | `0..1` | Reported rather than primary record |
| `performerType` | `CodeableConcept` | `0..1` | Desired kind of performer of the medication administration |
| `performer` | `Reference` | `0..*` | Intended performer of administration |
| `device` | `CodeableReference` | `0..*` | Intended type of device for the administration |
| `recorder` | `Reference` | `0..1` | Person who entered the request |
| `reason` | `CodeableReference` | `0..*` | Reason or indication for ordering or not ordering the medication |
| `courseOfTherapyType` | `CodeableConcept` | `0..1` | Overall pattern of medication administration |
| `insurance` | `Reference` | `0..*` | Associated insurance coverage |
| `note` | `Annotation` | `0..*` | Information about the prescription |
| `renderedDosageInstruction` | `markdown` | `0..1` | Full representation of the dosage instructions |
| `effectiveDosePeriod` | `Period` | `0..1` | Period over which the medication is to be taken |
| `dosageInstruction` | `Dosage` | `0..*` | Specific instructions for how the medication should be taken |
| `dispenseRequest` | `BackboneElement` | `0..1` | Medication supply authorization |
| `substitution` | `BackboneElement` | `0..1` | Any restrictions on medication substitution |
| `eventHistory` | `Reference` | `0..*` | A list of events of interest in the lifecycle |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`MedicationRequest` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `authoredon` | `date` | Return prescriptions written on this date |
| `category` | `token` | Returns prescriptions with different categories |
| `code` | `token` | Event or incident that occurred or was averted |
| `combo-date` | `date` | Returns medication request to be administered on a specific date or within a date range |
| `encounter` | `reference` | Return administrations that share this encounter |
| `group-identifier` | `token` | Composite request this is part of |
| `identifier` | `token` | Account number |
| `intended-dispenser` | `reference` | Returns prescriptions intended to be dispensed by this Organization |
| `intended-performer` | `reference` | Returns the intended performer of the administration of the medication request |
| `intended-performertype` | `token` | Returns requests for a specific type of performer |
| `intent` | `token` | Returns prescriptions with different intents |
| `medication` | `reference` | Return administrations of this medication reference |
| `patient` | `reference` | The entity that caused the expenses |
| `priority` | `token` | Returns prescriptions with different priorities |
| `requester` | `reference` | Returns prescriptions prescribed by this prescriber |
| `status` | `token` | MedicationAdministration event status (for example one of active/paused/completed/nullified) |
| `subject` | `reference` | The identity of a patient to list orders  for |

## Reference

- Official FHIR R5 spec: [`MedicationRequest`](https://hl7.org/fhir/R5/medicationrequest.html)
- Element bindings & profiles: [`MedicationRequest` profile](https://hl7.org/fhir/R5/medicationrequest-definitions.html)
- Maturity: **Trial Use 4** (FMM 4).
