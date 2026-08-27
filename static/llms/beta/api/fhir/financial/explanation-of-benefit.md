---
title: ExplanationOfBenefit
sidebar_label: ExplanationOfBenefit
description: "This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the su"
---

# ExplanationOfBenefit

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Financial</span>

This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.

## Endpoints

<ApiBase surface="fhir" path="/ExplanationOfBenefit" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/ExplanationOfBenefit/[id]` |
| Vread | `GET` | `/fhir/R4/ExplanationOfBenefit/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/ExplanationOfBenefit/[id]` |
| Patch | `PATCH` | `/fhir/R4/ExplanationOfBenefit/[id]` |
| Delete | `DELETE` | `/fhir/R4/ExplanationOfBenefit/[id]` |
| Create | `POST` | `/fhir/R4/ExplanationOfBenefit` |
| Search | `GET` | `/fhir/R4/ExplanationOfBenefit` |
| History | `GET` | `/fhir/R4/ExplanationOfBenefit/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business Identifier for the resource |
| `status` | `code` | `1..1` | active \| cancelled \| draft \| entered-in-error _modifier_ |
| `type` | `CodeableConcept` | `1..1` | Category or discipline |
| `subType` | `CodeableConcept` | `0..1` | More granular claim type |
| `use` | `code` | `1..1` | claim \| preauthorization \| predetermination |
| `patient` | `Reference` | `1..1` | The recipient of the products and services |
| `billablePeriod` | `Period` | `0..1` | Relevant time frame for the claim |
| `created` | `dateTime` | `1..1` | Response creation date |
| `enterer` | `Reference` | `0..1` | Author of the claim |
| `insurer` | `Reference` | `1..1` | Party responsible for reimbursement |
| `provider` | `Reference` | `1..1` | Party responsible for the claim |
| `priority` | `CodeableConcept` | `0..1` | Desired processing urgency |
| `fundsReserveRequested` | `CodeableConcept` | `0..1` | For whom to reserve funds |
| `fundsReserve` | `CodeableConcept` | `0..1` | Funds reserved status |
| `related` | `BackboneElement` | `0..*` | Prior or corollary claims |
| `prescription` | `Reference` | `0..1` | Prescription authorizing services or products |
| `originalPrescription` | `Reference` | `0..1` | Original prescription if superceded by fulfiller |
| `payee` | `BackboneElement` | `0..1` | Recipient of benefits payable |
| `referral` | `Reference` | `0..1` | Treatment Referral |
| `facility` | `Reference` | `0..1` | Servicing Facility |
| `claim` | `Reference` | `0..1` | Claim reference |
| `claimResponse` | `Reference` | `0..1` | Claim response reference |
| `outcome` | `code` | `1..1` | queued \| complete \| error \| partial |
| `disposition` | `string` | `0..1` | Disposition Message |
| `preAuthRef` | `string` | `0..*` | Preauthorization reference |
| `preAuthRefPeriod` | `Period` | `0..*` | Preauthorization in-effect period |
| `careTeam` | `BackboneElement` | `0..*` | Care Team members |
| `supportingInfo` | `BackboneElement` | `0..*` | Supporting information |
| `diagnosis` | `BackboneElement` | `0..*` | Pertinent diagnosis information |
| `procedure` | `BackboneElement` | `0..*` | Clinical procedures performed |
| `precedence` | `positiveInt` | `0..1` | Precedence (primary, secondary, etc.) |
| `insurance` | `BackboneElement` | `1..*` | Patient insurance information |
| `accident` | `BackboneElement` | `0..1` | Details of the event |
| `item` | `BackboneElement` | `0..*` | Product or service provided |
| `addItem` | `BackboneElement` | `0..*` | Insurer added line items |
| `adjudication` | — | `0..*` | Header-level adjudication |
| `total` | `BackboneElement` | `0..*` | Adjudication totals |
| `payment` | `BackboneElement` | `0..1` | Payment Details |
| `formCode` | `CodeableConcept` | `0..1` | Printed form identifier |
| `form` | `Attachment` | `0..1` | Printed reference or actual form |
| `processNote` | `BackboneElement` | `0..*` | Note concerning adjudication |
| `benefitPeriod` | `Period` | `0..1` | When the benefits are applicable |
| `benefitBalance` | `BackboneElement` | `0..*` | Balance by Benefit Category |

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
| `care-team` | `string` | http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-care-team |
| `claim` | `string` | http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-claim |
| `coverage` | `string` | http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-coverage |
| `created` | `string` | http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-created |
| `detail-udi` | `string` | http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-detail-udi |
| `disposition` | `string` | http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-disposition |
| `encounter` | `string` | http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-encounter |
| `enterer` | `string` | http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-enterer |
| `facility` | `string` | http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-facility |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-identifier |
| `item-udi` | `string` | http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-item-udi |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-patient |
| `payee` | `string` | http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-payee |
| `procedure-udi` | `string` | http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-procedure-udi |
| `provider` | `string` | http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-provider |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-status |
| `subdetail-udi` | `string` | http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-subdetail-udi |

## Reference

- Official FHIR R4 spec: [`ExplanationOfBenefit`](https://hl7.org/fhir/R4/explanationofbenefit.html)
- Maturity: **Trial Use 2** (FMM 2).
