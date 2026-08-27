---
title: BodyStructure
sidebar_label: BodyStructure
description: "Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case."
---

# BodyStructure

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Clinical — Diagnostics</span>

Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.

## Endpoints

<ApiBase surface="fhir" path="/BodyStructure" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/BodyStructure/[id]` |
| Vread | `GET` | `/fhir/R4/BodyStructure/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/BodyStructure/[id]` |
| Patch | `PATCH` | `/fhir/R4/BodyStructure/[id]` |
| Delete | `DELETE` | `/fhir/R4/BodyStructure/[id]` |
| Create | `POST` | `/fhir/R4/BodyStructure` |
| Search | `GET` | `/fhir/R4/BodyStructure` |
| History | `GET` | `/fhir/R4/BodyStructure/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Bodystructure identifier |
| `active` | `boolean` | `0..1` | Whether this record is in active use _modifier_ |
| `morphology` | `CodeableConcept` | `0..1` | Kind of Structure |
| `location` | `CodeableConcept` | `0..1` | Body site |
| `locationQualifier` | `CodeableConcept` | `0..*` | Body site modifier |
| `description` | `string` | `0..1` | Text description |
| `image` | `Attachment` | `0..*` | Attached images |
| `patient` | `Reference` | `1..1` | Who this is about |

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
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/BodyStructure-identifier |
| `location` | `string` | http://hl7.org/fhir/SearchParameter/BodyStructure-location |
| `morphology` | `string` | http://hl7.org/fhir/SearchParameter/BodyStructure-morphology |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/BodyStructure-patient |

## Reference

- Official FHIR R4 spec: [`BodyStructure`](https://hl7.org/fhir/R4/bodystructure.html)
- Maturity: **Trial Use 1** (FMM 1).
