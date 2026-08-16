---
title: ImmunizationRecommendation
sidebar_label: ImmunizationRecommendation
description: "A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification."
---

# ImmunizationRecommendation

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Clinical — Medications</span>

A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.

## Endpoints

<ApiBase surface="fhir" path="/ImmunizationRecommendation" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/ImmunizationRecommendation/[id]` |
| Vread | `GET` | `/fhir/R4/ImmunizationRecommendation/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/ImmunizationRecommendation/[id]` |
| Patch | `PATCH` | `/fhir/R4/ImmunizationRecommendation/[id]` |
| Delete | `DELETE` | `/fhir/R4/ImmunizationRecommendation/[id]` |
| Create | `POST` | `/fhir/R4/ImmunizationRecommendation` |
| Search | `GET` | `/fhir/R4/ImmunizationRecommendation` |
| History | `GET` | `/fhir/R4/ImmunizationRecommendation/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier |
| `patient` | `Reference` | `1..1` | Who this profile is for |
| `date` | `dateTime` | `1..1` | Date recommendation(s) created |
| `authority` | `Reference` | `0..1` | Who is responsible for protocol |
| `recommendation` | `BackboneElement` | `1..*` | Vaccine administration recommendations |

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
| `date` | `string` | http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-date |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-identifier |
| `information` | `string` | http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-information |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-patient |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-status |
| `support` | `string` | http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-support |
| `target-disease` | `string` | http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-target-disease |
| `vaccine-type` | `string` | http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-vaccine-type |

## Reference

- Official FHIR R4 spec: [`ImmunizationRecommendation`](https://hl7.org/fhir/R4/immunizationrecommendation.html)
- Maturity: **Trial Use 1** (FMM 1).
