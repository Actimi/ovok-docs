---
title: DetectedIssue
sidebar_label: DetectedIssue
description: "Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineff"
---

# DetectedIssue

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Specialized — Public Health & Research</span>

Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, gaps in care, etc.

## Endpoints

<ApiBase surface="fhir" path="/DetectedIssue" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/DetectedIssue/[id]` |
| Vread        | `GET`    | `/fhir/R5/DetectedIssue/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/DetectedIssue/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/DetectedIssue/[id]` |
| Delete       | `DELETE` | `/fhir/R5/DetectedIssue/[id]` |
| Create       | `POST`   | `/fhir/R5/DetectedIssue` |
| Search       | `GET`    | `/fhir/R5/DetectedIssue?...` |
| History      | `GET`    | `/fhir/R5/DetectedIssue/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/DetectedIssue/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Unique id for the detected issue |
| `status` | `code` | `1..1` | preliminary | final | entered-in-error | mitigated _modifier_ |
| `category` | `CodeableConcept` | `0..*` | Type of detected issue, e.g. drug-drug, duplicate therapy, etc |
| `code` | `CodeableConcept` | `0..1` | Specific type of detected issue, e.g. drug-drug, duplicate therapy, etc |
| `severity` | `code` | `0..1` | high | moderate | low |
| `subject` | `Reference` | `0..1` | Associated subject |
| `encounter` | `Reference` | `0..1` | Encounter detected issue is part of |
| `identified[x]` | `dateTime` / `Period` | `0..1` | When identified |
| `author` | `Reference` | `0..1` | The provider or device that identified the issue |
| `implicated` | `Reference` | `0..*` | Problem resource |
| `evidence` | `BackboneElement` | `0..*` | Supporting evidence |
| `detail` | `markdown` | `0..1` | Description and context |
| `reference` | `uri` | `0..1` | Authority for issue |
| `mitigation` | `BackboneElement` | `0..*` | Step taken to address |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `author` | `reference` | The provider or device that identified the issue |
| `category` | `token` | Issue Category, e.g. drug-drug, duplicate therapy, etc. |
| `code` | `token` | Event or incident that occurred or was averted |
| `identified` | `date` | When identified |
| `identifier` | `token` | Account number |
| `implicated` | `reference` | Problem resource |
| `patient` | `reference` | The entity that caused the expenses |
| `status` | `token` | The status of the issue |
| `subject` | `reference` | Associated subject |

## Reference

- Official FHIR R5 spec: [`DetectedIssue`](https://hl7.org/fhir/R5/detectedissue.html)
- Maturity: **Trial Use 2** (FMM 2).
