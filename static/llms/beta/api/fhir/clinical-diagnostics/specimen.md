---
title: Specimen
sidebar_label: Specimen
description: "A sample to be used for analysis."
---

# Specimen

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Clinical — Diagnostics</span>

A sample to be used for analysis.

## Endpoints

<ApiBase surface="fhir" path="/Specimen" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/Specimen/[id]` |
| Vread | `GET` | `/fhir/R4/Specimen/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Specimen/[id]` |
| Patch | `PATCH` | `/fhir/R4/Specimen/[id]` |
| Delete | `DELETE` | `/fhir/R4/Specimen/[id]` |
| Create | `POST` | `/fhir/R4/Specimen` |
| Search | `GET` | `/fhir/R4/Specimen` |
| History | `GET` | `/fhir/R4/Specimen/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External Identifier |
| `accessionIdentifier` | `Identifier` | `0..1` | Identifier assigned by the lab |
| `status` | `code` | `0..1` | available \| unavailable \| unsatisfactory \| entered-in-error _modifier_ |
| `type` | `CodeableConcept` | `0..1` | Kind of material that forms the specimen |
| `subject` | `Reference` | `0..1` | Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device |
| `receivedTime` | `dateTime` | `0..1` | The time when specimen was received for processing |
| `parent` | `Reference` | `0..*` | Specimen from which this specimen originated |
| `request` | `Reference` | `0..*` | Why the specimen was collected |
| `collection` | `BackboneElement` | `0..1` | Collection details |
| `processing` | `BackboneElement` | `0..*` | Processing and processing step details |
| `container` | `BackboneElement` | `0..*` | Direct container of specimen (tube/slide, etc.) |
| `condition` | `CodeableConcept` | `0..*` | State of the specimen |
| `note` | `Annotation` | `0..*` | Comments |

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
| `accession` | `string` | http://hl7.org/fhir/SearchParameter/Specimen-accession |
| `bodysite` | `string` | http://hl7.org/fhir/SearchParameter/Specimen-bodysite |
| `collected` | `string` | http://hl7.org/fhir/SearchParameter/Specimen-collected |
| `collector` | `string` | http://hl7.org/fhir/SearchParameter/Specimen-collector |
| `container` | `string` | http://hl7.org/fhir/SearchParameter/Specimen-container |
| `container-id` | `string` | http://hl7.org/fhir/SearchParameter/Specimen-container-id |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/Specimen-identifier |
| `parent` | `string` | http://hl7.org/fhir/SearchParameter/Specimen-parent |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/Specimen-patient |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/Specimen-status |
| `subject` | `string` | http://hl7.org/fhir/SearchParameter/Specimen-subject |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/Specimen-type |

## Reference

- Official FHIR R4 spec: [`Specimen`](https://hl7.org/fhir/R4/specimen.html)
- Maturity: **Trial Use 2** (FMM 2).
