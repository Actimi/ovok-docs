---
title: DetectedIssue
sidebar_label: DetectedIssue
description: "Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineff"
---

# DetectedIssue

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Specialized — Public Health & Research</span>

Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.

## Endpoints

<ApiBase surface="fhir" path="/DetectedIssue" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/DetectedIssue/[id]` |
| Vread | `GET` | `/fhir/R4/DetectedIssue/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/DetectedIssue/[id]` |
| Patch | `PATCH` | `/fhir/R4/DetectedIssue/[id]` |
| Delete | `DELETE` | `/fhir/R4/DetectedIssue/[id]` |
| Create | `POST` | `/fhir/R4/DetectedIssue` |
| Search | `GET` | `/fhir/R4/DetectedIssue` |
| History | `GET` | `/fhir/R4/DetectedIssue/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Unique id for the detected issue |
| `status` | `code` | `1..1` | registered \| preliminary \| final \| amended + _modifier_ |
| `code` | `CodeableConcept` | `0..1` | Issue Category, e.g. drug-drug, duplicate therapy, etc. |
| `severity` | `code` | `0..1` | high \| moderate \| low |
| `patient` | `Reference` | `0..1` | Associated patient |
| `identified[x]` | `dateTime` / `Period` | `0..1` | When identified |
| `author` | `Reference` | `0..1` | The provider or device that identified the issue |
| `implicated` | `Reference` | `0..*` | Problem resource |
| `evidence` | `BackboneElement` | `0..*` | Supporting evidence |
| `detail` | `string` | `0..1` | Description and context |
| `reference` | `uri` | `0..1` | Authority for issue |
| `mitigation` | `BackboneElement` | `0..*` | Step taken to address |

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
| `author` | `string` | http://hl7.org/fhir/SearchParameter/DetectedIssue-author |
| `code` | `string` | http://hl7.org/fhir/SearchParameter/DetectedIssue-code |
| `identified` | `string` | http://hl7.org/fhir/SearchParameter/DetectedIssue-identified |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/clinical-identifier |
| `implicated` | `string` | http://hl7.org/fhir/SearchParameter/DetectedIssue-implicated |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/clinical-patient |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/DetectedIssue-status |

## Reference

- Official FHIR R4 spec: [`DetectedIssue`](https://hl7.org/fhir/R4/detectedissue.html)
- Maturity: **Trial Use 1** (FMM 1).
