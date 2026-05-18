---
title: Claim
sidebar_label: Claim
description: "A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimb"
---

# Claim

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Financial</span>

A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.

## Endpoints

<ApiBase surface="fhir" path="/Claim" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Claim/[id]` |
| Vread        | `GET`    | `/fhir/R5/Claim/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Claim/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Claim/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Claim/[id]` |
| Create       | `POST`   | `/fhir/R5/Claim` |
| Search       | `GET`    | `/fhir/R5/Claim?...` |
| History      | `GET`    | `/fhir/R5/Claim/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Claim/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business Identifier for claim |
| `traceNumber` | `Identifier` | `0..*` | Number for tracking |
| `status` | `code` | `1..1` | active | cancelled | draft | entered-in-error _modifier_ |
| `type` | `CodeableConcept` | `1..1` | Category or discipline |
| `subType` | `CodeableConcept` | `0..1` | More granular claim type |
| `use` | `code` | `1..1` | claim | preauthorization | predetermination |
| `patient` | `Reference` | `1..1` | The recipient of the products and services |
| `billablePeriod` | `Period` | `0..1` | Relevant time frame for the claim |
| `created` | `dateTime` | `1..1` | Resource creation date |
| `enterer` | `Reference` | `0..1` | Author of the claim |
| `insurer` | `Reference` | `0..1` | Target |
| `provider` | `Reference` | `0..1` | Party responsible for the claim |
| `priority` | `CodeableConcept` | `0..1` | Desired processing urgency |
| `fundsReserve` | `CodeableConcept` | `0..1` | For whom to reserve funds |
| `related` | `BackboneElement` | `0..*` | Prior or corollary claims |
| `prescription` | `Reference` | `0..1` | Prescription authorizing services and products |
| `originalPrescription` | `Reference` | `0..1` | Original prescription if superseded by fulfiller |
| `payee` | `BackboneElement` | `0..1` | Recipient of benefits payable |
| `referral` | `Reference` | `0..1` | Treatment referral |
| `encounter` | `Reference` | `0..*` | Encounters associated with the listed treatments |
| `facility` | `Reference` | `0..1` | Servicing facility |
| `diagnosisRelatedGroup` | `CodeableConcept` | `0..1` | Package billing code |
| `event` | `BackboneElement` | `0..*` | Event information |
| `careTeam` | `BackboneElement` | `0..*` | Members of the care team |
| `supportingInfo` | `BackboneElement` | `0..*` | Supporting information |
| `diagnosis` | `BackboneElement` | `0..*` | Pertinent diagnosis information |
| `procedure` | `BackboneElement` | `0..*` | Clinical procedures performed |
| `insurance` | `BackboneElement` | `0..*` | Patient insurance information |
| `accident` | `BackboneElement` | `0..1` | Details of the event |
| `patientPaid` | `Money` | `0..1` | Paid by the patient |
| `item` | `BackboneElement` | `0..*` | Product or service provided |
| `total` | `Money` | `0..1` | Total claim cost |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`Claim` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `care-team` | `reference` | Member of the CareTeam |
| `created` | `date` | The creation date for the Claim |
| `detail-udi` | `reference` | UDI associated with a line item, detail product or service |
| `encounter` | `reference` | Encounter related to the activity recorded in the AuditEvent |
| `enterer` | `reference` | The party responsible for the entry of the Claim |
| `facility` | `reference` | Facility where the products or services have been or will be provided |
| `identifier` | `token` | Account number |
| `insurer` | `reference` | The target payor/insurer for the Claim |
| `item-udi` | `reference` | UDI associated with a line item product or service |
| `patient` | `reference` | The entity that caused the expenses |
| `payee` | `reference` | The party receiving any payment for the Claim |
| `priority` | `token` | Processing priority requested |
| `procedure-udi` | `reference` | UDI associated with a procedure |
| `provider` | `reference` | Provider responsible for the Claim |
| `status` | `token` | The status of the Claim instance. |
| `subdetail-udi` | `reference` | UDI associated with a line item, detail, subdetail product or service |
| `use` | `token` | The kind of financial resource |

## Reference

- Official FHIR R5 spec: [`Claim`](https://hl7.org/fhir/R5/claim.html)
- Element bindings & profiles: [`Claim` profile](https://hl7.org/fhir/R5/claim-definitions.html)
- Maturity: **Trial Use 2** (FMM 2).
