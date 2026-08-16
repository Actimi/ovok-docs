---
title: AllergyIntolerance
sidebar_label: AllergyIntolerance
description: "Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance."
---

# AllergyIntolerance

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Clinical — Summary</span>

Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.

## Endpoints

<ApiBase surface="fhir" path="/AllergyIntolerance" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/AllergyIntolerance/[id]` |
| Vread | `GET` | `/fhir/R4/AllergyIntolerance/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/AllergyIntolerance/[id]` |
| Patch | `PATCH` | `/fhir/R4/AllergyIntolerance/[id]` |
| Delete | `DELETE` | `/fhir/R4/AllergyIntolerance/[id]` |
| Create | `POST` | `/fhir/R4/AllergyIntolerance` |
| Search | `GET` | `/fhir/R4/AllergyIntolerance` |
| History | `GET` | `/fhir/R4/AllergyIntolerance/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External ids for this item |
| `clinicalStatus` | `CodeableConcept` | `0..1` | active \| inactive \| resolved _modifier_ |
| `verificationStatus` | `CodeableConcept` | `0..1` | unconfirmed \| confirmed \| refuted \| entered-in-error _modifier_ |
| `type` | `code` | `0..1` | allergy \| intolerance - Underlying mechanism (if known) |
| `category` | `code` | `0..*` | food \| medication \| environment \| biologic |
| `criticality` | `code` | `0..1` | low \| high \| unable-to-assess |
| `code` | `CodeableConcept` | `0..1` | Code that identifies the allergy or intolerance |
| `patient` | `Reference` | `1..1` | Who the sensitivity is for |
| `encounter` | `Reference` | `0..1` | Encounter when the allergy or intolerance was asserted |
| `onset[x]` | `dateTime` / `Age` / `Period` / `Range` / `string` | `0..1` | When allergy or intolerance was identified |
| `recordedDate` | `dateTime` | `0..1` | Date first version of the resource instance was recorded |
| `recorder` | `Reference` | `0..1` | Who recorded the sensitivity |
| `asserter` | `Reference` | `0..1` | Source of the information about the allergy |
| `lastOccurrence` | `dateTime` | `0..1` | Date(/time) of last known occurrence of a reaction |
| `note` | `Annotation` | `0..*` | Additional text not captured in other fields |
| `reaction` | `BackboneElement` | `0..*` | Adverse Reaction Events linked to exposure to substance |

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
| `asserter` | `string` | http://hl7.org/fhir/SearchParameter/AllergyIntolerance-asserter |
| `category` | `string` | http://hl7.org/fhir/SearchParameter/AllergyIntolerance-category |
| `clinical-status` | `string` | http://hl7.org/fhir/SearchParameter/AllergyIntolerance-clinical-status |
| `code` | `string` | http://hl7.org/fhir/SearchParameter/clinical-code |
| `criticality` | `string` | http://hl7.org/fhir/SearchParameter/AllergyIntolerance-criticality |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/clinical-date |
| `encounter` | `string` | https://medplum.com/fhir/SearchParameter/AllergyIntolerance-encounter |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/clinical-identifier |
| `last-date` | `string` | http://hl7.org/fhir/SearchParameter/AllergyIntolerance-last-date |
| `manifestation` | `string` | http://hl7.org/fhir/SearchParameter/AllergyIntolerance-manifestation |
| `onset` | `string` | http://hl7.org/fhir/SearchParameter/AllergyIntolerance-onset |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/clinical-patient |
| `recorder` | `string` | http://hl7.org/fhir/SearchParameter/AllergyIntolerance-recorder |
| `route` | `string` | http://hl7.org/fhir/SearchParameter/AllergyIntolerance-route |
| `severity` | `string` | http://hl7.org/fhir/SearchParameter/AllergyIntolerance-severity |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/clinical-type |
| `verification-status` | `string` | http://hl7.org/fhir/SearchParameter/AllergyIntolerance-verification-status |

## Reference

- Official FHIR R4 spec: [`AllergyIntolerance`](https://hl7.org/fhir/R4/allergyintolerance.html)
- Maturity: **Trial Use 3** (FMM 3).
