---
title: MedicinalProductAuthorization
sidebar_label: MedicinalProductAuthorization
description: "The regulatory authorization of a medicinal product."
---

# MedicinalProductAuthorization

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Other</span>

The regulatory authorization of a medicinal product.

## Endpoints

<ApiBase surface="fhir" path="/MedicinalProductAuthorization" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/MedicinalProductAuthorization/[id]` |
| Vread | `GET` | `/fhir/R4/MedicinalProductAuthorization/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/MedicinalProductAuthorization/[id]` |
| Patch | `PATCH` | `/fhir/R4/MedicinalProductAuthorization/[id]` |
| Delete | `DELETE` | `/fhir/R4/MedicinalProductAuthorization/[id]` |
| Create | `POST` | `/fhir/R4/MedicinalProductAuthorization` |
| Search | `GET` | `/fhir/R4/MedicinalProductAuthorization` |
| History | `GET` | `/fhir/R4/MedicinalProductAuthorization/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier for the marketing authorization, as assigned by a regulator |
| `subject` | `Reference` | `0..1` | The medicinal product that is being authorized |
| `country` | `CodeableConcept` | `0..*` | The country in which the marketing authorization has been granted |
| `jurisdiction` | `CodeableConcept` | `0..*` | Jurisdiction within a country |
| `status` | `CodeableConcept` | `0..1` | The status of the marketing authorization |
| `statusDate` | `dateTime` | `0..1` | The date at which the given status has become applicable |
| `restoreDate` | `dateTime` | `0..1` | The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored |
| `validityPeriod` | `Period` | `0..1` | The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format |
| `dataExclusivityPeriod` | `Period` | `0..1` | A period of time after authorization before generic product applicatiosn can be submitted |
| `dateOfFirstAuthorization` | `dateTime` | `0..1` | The date when the first authorization was granted by a Medicines Regulatory Agency |
| `internationalBirthDate` | `dateTime` | `0..1` | Date of first marketing authorization for a company's new medicinal product in any country in the World |
| `legalBasis` | `CodeableConcept` | `0..1` | The legal framework against which this authorization is granted |
| `jurisdictionalAuthorization` | `BackboneElement` | `0..*` | Authorization in areas within a country |
| `holder` | `Reference` | `0..1` | Marketing Authorization Holder |
| `regulator` | `Reference` | `0..1` | Medicines Regulatory Agency |
| `procedure` | `BackboneElement` | `0..1` | The regulatory procedure for granting or amending a marketing authorization |

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
| `country` | `string` | http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-country |
| `holder` | `string` | http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-holder |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-identifier |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-status |
| `subject` | `string` | http://hl7.org/fhir/SearchParameter/MedicinalProductAuthorization-subject |

## Reference

- Official FHIR R4 spec: [`MedicinalProductAuthorization`](https://hl7.org/fhir/R4/medicinalproductauthorization.html)
- Maturity: **Draft** (FMM 0).
