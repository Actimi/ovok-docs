---
title: SpecimenDefinition
sidebar_label: SpecimenDefinition
description: "A kind of specimen with associated set of requirements."
---

# SpecimenDefinition

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Specialized — Quality & Testing</span>

A kind of specimen with associated set of requirements.

## Endpoints

<ApiBase surface="fhir" path="/SpecimenDefinition" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/SpecimenDefinition/[id]` |
| Vread | `GET` | `/fhir/R4/SpecimenDefinition/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/SpecimenDefinition/[id]` |
| Patch | `PATCH` | `/fhir/R4/SpecimenDefinition/[id]` |
| Delete | `DELETE` | `/fhir/R4/SpecimenDefinition/[id]` |
| Create | `POST` | `/fhir/R4/SpecimenDefinition` |
| Search | `GET` | `/fhir/R4/SpecimenDefinition` |
| History | `GET` | `/fhir/R4/SpecimenDefinition/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..1` | Business identifier of a kind of specimen |
| `typeCollected` | `CodeableConcept` | `0..1` | Kind of material to collect |
| `patientPreparation` | `CodeableConcept` | `0..*` | Patient preparation for collection |
| `timeAspect` | `string` | `0..1` | Time aspect for collection |
| `collection` | `CodeableConcept` | `0..*` | Specimen collection procedure |
| `typeTested` | `BackboneElement` | `0..*` | Specimen in container intended for testing by lab |

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
| `container` | `string` | http://hl7.org/fhir/SearchParameter/SpecimenDefinition-container |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/SpecimenDefinition-identifier |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/SpecimenDefinition-type |

## Reference

- Official FHIR R4 spec: [`SpecimenDefinition`](https://hl7.org/fhir/R4/specimendefinition.html)
- Maturity: **Draft** (FMM 0).
