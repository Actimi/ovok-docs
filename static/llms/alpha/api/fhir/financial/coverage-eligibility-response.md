---
title: CoverageEligibilityResponse
sidebar_label: CoverageEligibilityResponse
description: "This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource."
---

# CoverageEligibilityResponse

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Financial</span>

This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.

## Endpoints

<ApiBase surface="fhir" path="/CoverageEligibilityResponse" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/CoverageEligibilityResponse/[id]` |
| Vread | `GET` | `/fhir/R4/CoverageEligibilityResponse/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/CoverageEligibilityResponse/[id]` |
| Patch | `PATCH` | `/fhir/R4/CoverageEligibilityResponse/[id]` |
| Delete | `DELETE` | `/fhir/R4/CoverageEligibilityResponse/[id]` |
| Create | `POST` | `/fhir/R4/CoverageEligibilityResponse` |
| Search | `GET` | `/fhir/R4/CoverageEligibilityResponse` |
| History | `GET` | `/fhir/R4/CoverageEligibilityResponse/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business Identifier for coverage eligiblity request |
| `status` | `code` | `1..1` | active \| cancelled \| draft \| entered-in-error _modifier_ |
| `purpose` | `code` | `1..*` | auth-requirements \| benefits \| discovery \| validation |
| `patient` | `Reference` | `1..1` | Intended recipient of products and services |
| `serviced[x]` | `date` / `Period` | `0..1` | Estimated date or dates of service |
| `created` | `dateTime` | `1..1` | Response creation date |
| `requestor` | `Reference` | `0..1` | Party responsible for the request |
| `request` | `Reference` | `1..1` | Eligibility request reference |
| `outcome` | `code` | `1..1` | queued \| complete \| error \| partial |
| `disposition` | `string` | `0..1` | Disposition Message |
| `insurer` | `Reference` | `1..1` | Coverage issuer |
| `insurance` | `BackboneElement` | `0..*` | Patient insurance information |
| `preAuthRef` | `string` | `0..1` | Preauthorization reference |
| `form` | `CodeableConcept` | `0..1` | Printed form identifier |
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
| `created` | `string` | http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-created |
| `disposition` | `string` | http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-disposition |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-identifier |
| `insurer` | `string` | http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-insurer |
| `outcome` | `string` | http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-outcome |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-patient |
| `request` | `string` | http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-request |
| `requestor` | `string` | http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-requestor |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-status |

## Reference

- Official FHIR R4 spec: [`CoverageEligibilityResponse`](https://hl7.org/fhir/R4/coverageeligibilityresponse.html)
- Maturity: **Trial Use 2** (FMM 2).
