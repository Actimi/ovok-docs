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
| Read         | `GET`    | `/fhir/R5/BodyStructure/[id]` |
| Vread        | `GET`    | `/fhir/R5/BodyStructure/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/BodyStructure/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/BodyStructure/[id]` |
| Delete       | `DELETE` | `/fhir/R5/BodyStructure/[id]` |
| Create       | `POST`   | `/fhir/R5/BodyStructure` |
| Search       | `GET`    | `/fhir/R5/BodyStructure?...` |
| History      | `GET`    | `/fhir/R5/BodyStructure/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/BodyStructure/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Bodystructure identifier |
| `active` | `boolean` | `0..1` | Whether this record is in active use _modifier_ |
| `morphology` | `CodeableConcept` | `0..1` | Kind of Structure |
| `includedStructure` | `BackboneElement` | `1..*` | Included anatomic location(s) |
| `excludedStructure` | — | `0..*` | Excluded anatomic locations(s) |
| `description` | `markdown` | `0..1` | Text description |
| `image` | `Attachment` | `0..*` | Attached images |
| `patient` | `Reference` | `1..1` | Who this is about |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`BodyStructure` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `excluded_structure` | `token` | Body site excludedStructure structure |
| `identifier` | `token` | Account number |
| `included_structure` | `token` | Body site includedStructure structure |
| `morphology` | `token` | Kind of Structure |
| `patient` | `reference` | The entity that caused the expenses |

## Reference

- Official FHIR R5 spec: [`BodyStructure`](https://hl7.org/fhir/R5/bodystructure.html)
- Element bindings & profiles: [`BodyStructure` profile](https://hl7.org/fhir/R5/bodystructure-definitions.html)
- Maturity: **Trial Use 1** (FMM 1).
