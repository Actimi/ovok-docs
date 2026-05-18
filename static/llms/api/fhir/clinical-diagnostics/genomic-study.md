---
title: GenomicStudy
sidebar_label: GenomicStudy
description: "A set of analyses performed to analyze and generate genomic data."
---

# GenomicStudy

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Clinical — Diagnostics</span>

A set of analyses performed to analyze and generate genomic data.

## Endpoints

<ApiBase surface="fhir" path="/GenomicStudy" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/GenomicStudy/[id]` |
| Vread        | `GET`    | `/fhir/R5/GenomicStudy/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/GenomicStudy/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/GenomicStudy/[id]` |
| Delete       | `DELETE` | `/fhir/R5/GenomicStudy/[id]` |
| Create       | `POST`   | `/fhir/R5/GenomicStudy` |
| Search       | `GET`    | `/fhir/R5/GenomicStudy?...` |
| History      | `GET`    | `/fhir/R5/GenomicStudy/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/GenomicStudy/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Identifiers for this genomic study |
| `status` | `code` | `1..1` | registered | available | cancelled | entered-in-error | unknown _modifier_ |
| `type` | `CodeableConcept` | `0..*` | The type of the study (e.g., Familial variant segregation, Functional variation detection, or Gene expression profiling) |
| `subject` | `Reference` | `1..1` | The primary subject of the genomic study |
| `encounter` | `Reference` | `0..1` | The healthcare event with which this genomics study is associated |
| `startDate` | `dateTime` | `0..1` | When the genomic study was started |
| `basedOn` | `Reference` | `0..*` | Event resources that the genomic study is based on |
| `referrer` | `Reference` | `0..1` | Healthcare professional who requested or referred the genomic study |
| `interpreter` | `Reference` | `0..*` | Healthcare professionals who interpreted the genomic study |
| `reason` | `CodeableReference` | `0..*` | Why the genomic study was performed |
| `instantiatesCanonical` | `canonical` | `0..1` | The defined protocol that describes the study |
| `instantiatesUri` | `uri` | `0..1` | The URL pointing to an externally maintained protocol that describes the study |
| `note` | `Annotation` | `0..*` | Comments related to the genomic study |
| `description` | `markdown` | `0..1` | Description of the genomic study |
| `analysis` | `BackboneElement` | `0..*` | Genomic Analysis Event |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`GenomicStudy` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `focus` | `reference` | What the genomic study analysis is about, when it is not about the subject of record |
| `identifier` | `token` | Identifiers for the Study |
| `patient` | `reference` | Who the study is about |
| `status` | `token` | The status of the study |
| `subject` | `reference` | Who the study is about |

## Reference

- Official FHIR R5 spec: [`GenomicStudy`](https://hl7.org/fhir/R5/genomicstudy.html)
- Element bindings & profiles: [`GenomicStudy` profile](https://hl7.org/fhir/R5/genomicstudy-definitions.html)
- Maturity: **Draft** (FMM 0).
