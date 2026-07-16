---
title: ResearchSubject
sidebar_label: ResearchSubject
description: "A ResearchSubject is a participant or object which is the recipient of investigative activities in a research study."
---

# ResearchSubject

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Specialized — Public Health & Research</span>

A ResearchSubject is a participant or object which is the recipient of investigative activities in a research study.

## Endpoints

<ApiBase surface="fhir" path="/ResearchSubject" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/ResearchSubject/[id]` |
| Vread        | `GET`    | `/fhir/R5/ResearchSubject/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/ResearchSubject/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/ResearchSubject/[id]` |
| Delete       | `DELETE` | `/fhir/R5/ResearchSubject/[id]` |
| Create       | `POST`   | `/fhir/R5/ResearchSubject` |
| Search       | `GET`    | `/fhir/R5/ResearchSubject?...` |
| History      | `GET`    | `/fhir/R5/ResearchSubject/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/ResearchSubject/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business Identifier for research subject in a study |
| `status` | `code` | `1..1` | draft | active | retired | unknown _modifier_ |
| `progress` | `BackboneElement` | `0..*` | Subject status |
| `period` | `Period` | `0..1` | Start and end of participation |
| `study` | `Reference` | `1..1` | Study subject is part of |
| `subject` | `Reference` | `1..1` | Who or what is part of study |
| `assignedComparisonGroup` | `id` | `0..1` | What path should be followed |
| `actualComparisonGroup` | `id` | `0..1` | What path was followed |
| `consent` | `Reference` | `0..*` | Agreement to participate in study |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `date` | `date` | When the event occurred |
| `identifier` | `token` | Account number |
| `patient` | `reference` | The entity that caused the expenses |
| `status` | `token` | draft | active | retired | unknown |
| `study` | `reference` | Study subject is part of |
| `subject` | `reference` | Who or what is part of study |
| `subject_state` | `token` | candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn |

## Reference

- Official FHIR R5 spec: [`ResearchSubject`](https://hl7.org/fhir/R5/researchsubject.html)
- Maturity: **Draft** (FMM 0).
