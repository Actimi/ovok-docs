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
| Read         | `GET`    | `/fhir/R5/AllergyIntolerance/[id]` |
| Vread        | `GET`    | `/fhir/R5/AllergyIntolerance/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/AllergyIntolerance/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/AllergyIntolerance/[id]` |
| Delete       | `DELETE` | `/fhir/R5/AllergyIntolerance/[id]` |
| Create       | `POST`   | `/fhir/R5/AllergyIntolerance` |
| Search       | `GET`    | `/fhir/R5/AllergyIntolerance?...` |
| History      | `GET`    | `/fhir/R5/AllergyIntolerance/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/AllergyIntolerance/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External ids for this item |
| `clinicalStatus` | `CodeableConcept` | `0..1` | active | inactive | resolved _modifier_ |
| `verificationStatus` | `CodeableConcept` | `0..1` | unconfirmed | presumed | confirmed | refuted | entered-in-error _modifier_ |
| `type` | `CodeableConcept` | `0..1` | allergy | intolerance - Underlying mechanism (if known) |
| `category` | `code` | `0..*` | food | medication | environment | biologic |
| `criticality` | `code` | `0..1` | low | high | unable-to-assess |
| `code` | `CodeableConcept` | `0..1` | Code that identifies the allergy or intolerance |
| `patient` | `Reference` | `1..1` | Who the allergy or intolerance is for |
| `encounter` | `Reference` | `0..1` | Encounter when the allergy or intolerance was asserted |
| `onset[x]` | `dateTime` / `Age` / `Period` / `Range` / `string` | `0..1` | When allergy or intolerance was identified |
| `recordedDate` | `dateTime` | `0..1` | Date allergy or intolerance was first recorded |
| `participant` | `BackboneElement` | `0..*` | Who or what participated in the activities related to the allergy or intolerance and how they were involved |
| `lastOccurrence` | `dateTime` | `0..1` | Date(/time) of last known occurrence of a reaction |
| `note` | `Annotation` | `0..*` | Additional text not captured in other fields |
| `reaction` | `BackboneElement` | `0..*` | Adverse Reaction Events linked to exposure to substance |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `category` | `token` | food | medication | environment | biologic |
| `clinical-status` | `token` | active | inactive | resolved |
| `code` | `token` | Event or incident that occurred or was averted |
| `criticality` | `token` | low | high | unable-to-assess |
| `date` | `date` | When the event occurred |
| `identifier` | `token` | Account number |
| `last-date` | `date` | Date(/time) of last known occurrence of a reaction |
| `manifestation-code` | `token` | Clinical symptoms/signs associated with the Event |
| `manifestation-reference` | `reference` | Clinical symptoms/signs associated with the Event |
| `participant` | `reference` | Who or what participated in the activities related to the allergy or intolerance |
| `patient` | `reference` | The entity that caused the expenses |
| `route` | `token` | How the subject was exposed to the substance |
| `severity` | `token` | mild | moderate | severe (of event as a whole) |
| `type` | `token` | E.g. patient, expense, depreciation |
| `verification-status` | `token` | unconfirmed | presumed | confirmed | refuted | entered-in-error |

## Reference

- Official FHIR R5 spec: [`AllergyIntolerance`](https://hl7.org/fhir/R5/allergyintolerance.html)
- Maturity: **Trial Use 3** (FMM 3).
