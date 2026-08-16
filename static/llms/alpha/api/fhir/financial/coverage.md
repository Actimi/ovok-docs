---
title: Coverage
sidebar_label: Coverage
description: "Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment."
---

# Coverage

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Financial</span>

Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.

## Endpoints

<ApiBase surface="fhir" path="/Coverage" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/Coverage/[id]` |
| Vread | `GET` | `/fhir/R4/Coverage/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Coverage/[id]` |
| Patch | `PATCH` | `/fhir/R4/Coverage/[id]` |
| Delete | `DELETE` | `/fhir/R4/Coverage/[id]` |
| Create | `POST` | `/fhir/R4/Coverage` |
| Search | `GET` | `/fhir/R4/Coverage` |
| History | `GET` | `/fhir/R4/Coverage/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business Identifier for the coverage |
| `status` | `code` | `1..1` | active \| cancelled \| draft \| entered-in-error _modifier_ |
| `type` | `CodeableConcept` | `0..1` | Coverage category such as medical or accident |
| `policyHolder` | `Reference` | `0..1` | Owner of the policy |
| `subscriber` | `Reference` | `0..1` | Subscriber to the policy |
| `subscriberId` | `string` | `0..1` | ID assigned to the subscriber |
| `beneficiary` | `Reference` | `1..1` | Plan beneficiary |
| `dependent` | `string` | `0..1` | Dependent number |
| `relationship` | `CodeableConcept` | `0..1` | Beneficiary relationship to the subscriber |
| `period` | `Period` | `0..1` | Coverage start and end dates |
| `payor` | `Reference` | `1..*` | Issuer of the policy |
| `class` | `BackboneElement` | `0..*` | Additional coverage classifications |
| `order` | `positiveInt` | `0..1` | Relative order of the coverage |
| `network` | `string` | `0..1` | Insurer network |
| `costToBeneficiary` | `BackboneElement` | `0..*` | Patient payments for services/products |
| `subrogation` | `boolean` | `0..1` | Reimbursement to insurer |
| `contract` | `Reference` | `0..*` | Contract details |

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
| `beneficiary` | `string` | http://hl7.org/fhir/SearchParameter/Coverage-beneficiary |
| `class-type` | `string` | http://hl7.org/fhir/SearchParameter/Coverage-class-type |
| `class-value` | `string` | http://hl7.org/fhir/SearchParameter/Coverage-class-value |
| `dependent` | `string` | http://hl7.org/fhir/SearchParameter/Coverage-dependent |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/Coverage-identifier |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/Coverage-patient |
| `payor` | `string` | http://hl7.org/fhir/SearchParameter/Coverage-payor |
| `policy-holder` | `string` | http://hl7.org/fhir/SearchParameter/Coverage-policy-holder |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/Coverage-status |
| `subscriber` | `string` | http://hl7.org/fhir/SearchParameter/Coverage-subscriber |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/Coverage-type |

## Reference

- Official FHIR R4 spec: [`Coverage`](https://hl7.org/fhir/R4/coverage.html)
- Maturity: **Trial Use 2** (FMM 2).
