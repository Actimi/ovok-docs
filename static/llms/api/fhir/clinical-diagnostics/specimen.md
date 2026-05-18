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
| Read         | `GET`    | `/fhir/R5/Specimen/[id]` |
| Vread        | `GET`    | `/fhir/R5/Specimen/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Specimen/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Specimen/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Specimen/[id]` |
| Create       | `POST`   | `/fhir/R5/Specimen` |
| Search       | `GET`    | `/fhir/R5/Specimen?...` |
| History      | `GET`    | `/fhir/R5/Specimen/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Specimen/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External Identifier |
| `accessionIdentifier` | `Identifier` | `0..1` | Identifier assigned by the lab |
| `status` | `code` | `0..1` | available | unavailable | unsatisfactory | entered-in-error _modifier_ |
| `type` | `CodeableConcept` | `0..1` | Kind of material that forms the specimen |
| `subject` | `Reference` | `0..1` | Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance, a biologically-derived product, or a device |
| `receivedTime` | `dateTime` | `0..1` | The time when specimen is received by the testing laboratory |
| `parent` | `Reference` | `0..*` | Specimen from which this specimen originated |
| `request` | `Reference` | `0..*` | Why the specimen was collected |
| `combined` | `code` | `0..1` | grouped | pooled |
| `role` | `CodeableConcept` | `0..*` | The role the specimen serves |
| `feature` | `BackboneElement` | `0..*` | The physical feature of a specimen |
| `collection` | `BackboneElement` | `0..1` | Collection details |
| `processing` | `BackboneElement` | `0..*` | Processing and processing step details |
| `container` | `BackboneElement` | `0..*` | Direct container of specimen (tube/slide, etc.) |
| `condition` | `CodeableConcept` | `0..*` | State of the specimen |
| `note` | `Annotation` | `0..*` | Comments |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`Specimen` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `accession` | `token` | The accession number associated with the specimen |
| `bodysite` | `reference` | Reference to a resource (by instance) |
| `collected` | `date` | The date the specimen was collected |
| `collector` | `reference` | Who collected the specimen |
| `container-device` | `reference` | The unique identifier associated with the specimen container |
| `identifier` | `token` | Account number |
| `parent` | `reference` | The parent of the specimen |
| `patient` | `reference` | The entity that caused the expenses |
| `procedure` | `reference` | The procedure that collected the specimen |
| `status` | `token` | available | unavailable | unsatisfactory | entered-in-error |
| `subject` | `reference` | The subject of the specimen |
| `type` | `token` | E.g. patient, expense, depreciation |

## Reference

- Official FHIR R5 spec: [`Specimen`](https://hl7.org/fhir/R5/specimen.html)
- Element bindings & profiles: [`Specimen` profile](https://hl7.org/fhir/R5/specimen-definitions.html)
- Maturity: **Trial Use 2** (FMM 2).
