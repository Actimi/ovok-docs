---
title: InsurancePlan
sidebar_label: InsurancePlan
description: "Details of a Health Insurance product/plan provided by an organization."
---

# InsurancePlan

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Financial</span>

Details of a Health Insurance product/plan provided by an organization.

## Endpoints

<ApiBase surface="fhir" path="/InsurancePlan" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/InsurancePlan/[id]` |
| Vread | `GET` | `/fhir/R4/InsurancePlan/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/InsurancePlan/[id]` |
| Patch | `PATCH` | `/fhir/R4/InsurancePlan/[id]` |
| Delete | `DELETE` | `/fhir/R4/InsurancePlan/[id]` |
| Create | `POST` | `/fhir/R4/InsurancePlan` |
| Search | `GET` | `/fhir/R4/InsurancePlan` |
| History | `GET` | `/fhir/R4/InsurancePlan/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business Identifier for Product |
| `status` | `code` | `0..1` | draft \| active \| retired \| unknown _modifier_ |
| `type` | `CodeableConcept` | `0..*` | Kind of product |
| `name` | `string` | `0..1` | Official name |
| `alias` | `string` | `0..*` | Alternate names |
| `period` | `Period` | `0..1` | When the product is available |
| `ownedBy` | `Reference` | `0..1` | Plan issuer |
| `administeredBy` | `Reference` | `0..1` | Product administrator |
| `coverageArea` | `Reference` | `0..*` | Where product applies |
| `contact` | `BackboneElement` | `0..*` | Contact for the product |
| `endpoint` | `Reference` | `0..*` | Technical endpoint |
| `network` | `Reference` | `0..*` | What networks are Included |
| `coverage` | `BackboneElement` | `0..*` | Coverage details |
| `plan` | `BackboneElement` | `0..*` | Plan details |

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
| `address` | `string` | http://hl7.org/fhir/SearchParameter/InsurancePlan-address |
| `address-city` | `string` | http://hl7.org/fhir/SearchParameter/InsurancePlan-address-city |
| `address-country` | `string` | http://hl7.org/fhir/SearchParameter/InsurancePlan-address-country |
| `address-postalcode` | `string` | http://hl7.org/fhir/SearchParameter/InsurancePlan-address-postalcode |
| `address-state` | `string` | http://hl7.org/fhir/SearchParameter/InsurancePlan-address-state |
| `address-use` | `string` | http://hl7.org/fhir/SearchParameter/InsurancePlan-address-use |
| `administered-by` | `string` | http://hl7.org/fhir/SearchParameter/InsurancePlan-administered-by |
| `endpoint` | `string` | http://hl7.org/fhir/SearchParameter/InsurancePlan-endpoint |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/InsurancePlan-identifier |
| `name` | `string` | http://hl7.org/fhir/SearchParameter/InsurancePlan-name |
| `owned-by` | `string` | http://hl7.org/fhir/SearchParameter/InsurancePlan-owned-by |
| `phonetic` | `string` | http://hl7.org/fhir/SearchParameter/InsurancePlan-phonetic |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/InsurancePlan-status |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/InsurancePlan-type |

## Reference

- Official FHIR R4 spec: [`InsurancePlan`](https://hl7.org/fhir/R4/insuranceplan.html)
- Maturity: **Draft** (FMM 0).
