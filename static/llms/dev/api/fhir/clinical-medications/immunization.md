---
title: Immunization
sidebar_label: Immunization
description: "Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party."
---

# Immunization

<span className="fhir-maturity" data-level="5">Normative</span>
<span className="fhir-category">Clinical — Medications</span>

Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.

## Endpoints

<ApiBase surface="fhir" path="/Immunization" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Immunization/[id]` |
| Vread        | `GET`    | `/fhir/R5/Immunization/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Immunization/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Immunization/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Immunization/[id]` |
| Create       | `POST`   | `/fhir/R5/Immunization` |
| Search       | `GET`    | `/fhir/R5/Immunization?...` |
| History      | `GET`    | `/fhir/R5/Immunization/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Immunization/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier |
| `basedOn` | `Reference` | `0..*` | Authority that the immunization event is based on |
| `status` | `code` | `1..1` | completed | entered-in-error | not-done _modifier_ |
| `statusReason` | `CodeableConcept` | `0..1` | Reason for current status |
| `vaccineCode` | `CodeableConcept` | `1..1` | Vaccine administered |
| `administeredProduct` | `CodeableReference` | `0..1` | Product that was administered |
| `manufacturer` | `CodeableReference` | `0..1` | Vaccine manufacturer |
| `lotNumber` | `string` | `0..1` | Vaccine lot number |
| `expirationDate` | `date` | `0..1` | Vaccine expiration date |
| `patient` | `Reference` | `1..1` | Who was immunized |
| `encounter` | `Reference` | `0..1` | Encounter immunization was part of |
| `supportingInformation` | `Reference` | `0..*` | Additional information in support of the immunization |
| `occurrence[x]` | `dateTime` / `string` | `1..1` | Vaccine administration date |
| `primarySource` | `boolean` | `0..1` | Indicates context the data was captured in |
| `informationSource` | `CodeableReference` | `0..1` | Indicates the source of a  reported record |
| `location` | `Reference` | `0..1` | Where immunization occurred |
| `site` | `CodeableConcept` | `0..1` | Body site vaccine  was administered |
| `route` | `CodeableConcept` | `0..1` | How vaccine entered body |
| `doseQuantity` | `Quantity` | `0..1` | Amount of vaccine administered |
| `performer` | `BackboneElement` | `0..*` | Who performed event |
| `note` | `Annotation` | `0..*` | Additional immunization notes |
| `reason` | `CodeableReference` | `0..*` | Why immunization occurred |
| `isSubpotent` | `boolean` | `0..1` | Dose potency _modifier_ |
| `subpotentReason` | `CodeableConcept` | `0..*` | Reason for being subpotent |
| `programEligibility` | `BackboneElement` | `0..*` | Patient eligibility for a specific vaccination program |
| `fundingSource` | `CodeableConcept` | `0..1` | Funding source for the vaccine |
| `reaction` | `BackboneElement` | `0..*` | Details of a reaction that follows immunization |
| `protocolApplied` | `BackboneElement` | `0..*` | Protocol followed by the provider |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `date` | `date` | When the event occurred |
| `identifier` | `token` | Account number |
| `location` | `reference` | The service delivery location or facility in which the vaccine was / was to be administered |
| `lot-number` | `string` | Vaccine Lot Number |
| `manufacturer` | `reference` | Vaccine Manufacturer |
| `patient` | `reference` | The entity that caused the expenses |
| `performer` | `reference` | The practitioner, individual or organization who played a role in the vaccination |
| `reaction` | `reference` | Additional information on reaction |
| `reaction-date` | `date` | When reaction started |
| `reason-code` | `token` | Reason why the vaccine was administered |
| `reason-reference` | `reference` | Reference to a resource (by instance) |
| `series` | `string` | The series being followed by the provider |
| `status` | `token` | Immunization event status |
| `status-reason` | `token` | Reason why the vaccine was not administered |
| `target-disease` | `token` | The target disease the dose is being administered against |
| `vaccine-code` | `token` | Vaccine Product Administered |

## Reference

- Official FHIR R5 spec: [`Immunization`](https://hl7.org/fhir/R5/immunization.html)
- Maturity: **Normative** (FMM 5).
