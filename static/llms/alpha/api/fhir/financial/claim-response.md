---
title: ClaimResponse
sidebar_label: ClaimResponse
description: "This resource provides the adjudication details from the processing of a Claim resource."
---

# ClaimResponse

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Financial</span>

This resource provides the adjudication details from the processing of a Claim resource.

## Endpoints

<ApiBase surface="fhir" path="/ClaimResponse" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/ClaimResponse/[id]` |
| Vread | `GET` | `/fhir/R4/ClaimResponse/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/ClaimResponse/[id]` |
| Patch | `PATCH` | `/fhir/R4/ClaimResponse/[id]` |
| Delete | `DELETE` | `/fhir/R4/ClaimResponse/[id]` |
| Create | `POST` | `/fhir/R4/ClaimResponse` |
| Search | `GET` | `/fhir/R4/ClaimResponse` |
| History | `GET` | `/fhir/R4/ClaimResponse/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business Identifier for a claim response |
| `status` | `code` | `1..1` | active \| cancelled \| draft \| entered-in-error _modifier_ |
| `type` | `CodeableConcept` | `1..1` | More granular claim type |
| `subType` | `CodeableConcept` | `0..1` | More granular claim type |
| `use` | `code` | `1..1` | claim \| preauthorization \| predetermination |
| `patient` | `Reference` | `1..1` | The recipient of the products and services |
| `created` | `dateTime` | `1..1` | Response creation date |
| `insurer` | `Reference` | `1..1` | Party responsible for reimbursement |
| `requestor` | `Reference` | `0..1` | Party responsible for the claim |
| `request` | `Reference` | `0..1` | Id of resource triggering adjudication |
| `outcome` | `code` | `1..1` | queued \| complete \| error \| partial |
| `disposition` | `string` | `0..1` | Disposition Message |
| `preAuthRef` | `string` | `0..1` | Preauthorization reference |
| `preAuthPeriod` | `Period` | `0..1` | Preauthorization reference effective period |
| `payeeType` | `CodeableConcept` | `0..1` | Party to be paid any benefits payable |
| `item` | `BackboneElement` | `0..*` | Adjudication for claim line items |
| `addItem` | `BackboneElement` | `0..*` | Insurer added line items |
| `adjudication` | — | `0..*` | Header-level adjudication |
| `total` | `BackboneElement` | `0..*` | Adjudication totals |
| `payment` | `BackboneElement` | `0..1` | Payment Details |
| `fundsReserve` | `CodeableConcept` | `0..1` | Funds reserved status |
| `formCode` | `CodeableConcept` | `0..1` | Printed form identifier |
| `form` | `Attachment` | `0..1` | Printed reference or actual form |
| `processNote` | `BackboneElement` | `0..*` | Note concerning adjudication |
| `communicationRequest` | `Reference` | `0..*` | Request for additional information |
| `insurance` | `BackboneElement` | `0..*` | Patient insurance information |
| `error` | `BackboneElement` | `0..*` | Processing errors |

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
| `created` | `string` | http://hl7.org/fhir/SearchParameter/ClaimResponse-created |
| `disposition` | `string` | http://hl7.org/fhir/SearchParameter/ClaimResponse-disposition |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/ClaimResponse-identifier |
| `insurer` | `string` | http://hl7.org/fhir/SearchParameter/ClaimResponse-insurer |
| `outcome` | `string` | http://hl7.org/fhir/SearchParameter/ClaimResponse-outcome |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/ClaimResponse-patient |
| `payment-date` | `string` | http://hl7.org/fhir/SearchParameter/ClaimResponse-payment-date |
| `request` | `string` | http://hl7.org/fhir/SearchParameter/ClaimResponse-request |
| `requestor` | `string` | http://hl7.org/fhir/SearchParameter/ClaimResponse-requestor |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/ClaimResponse-status |
| `use` | `string` | http://hl7.org/fhir/SearchParameter/ClaimResponse-use |

## Reference

- Official FHIR R4 spec: [`ClaimResponse`](https://hl7.org/fhir/R4/claimresponse.html)
- Maturity: **Trial Use 2** (FMM 2).
