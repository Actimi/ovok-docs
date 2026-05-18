---
title: SubstancePolymer
sidebar_label: SubstancePolymer
description: "Properties of a substance specific to it being a polymer."
---

# SubstancePolymer

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Specialized — Medication Definition</span>

Properties of a substance specific to it being a polymer.

## Endpoints

<ApiBase surface="fhir" path="/SubstancePolymer" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/SubstancePolymer/[id]` |
| Vread        | `GET`    | `/fhir/R5/SubstancePolymer/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/SubstancePolymer/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/SubstancePolymer/[id]` |
| Delete       | `DELETE` | `/fhir/R5/SubstancePolymer/[id]` |
| Create       | `POST`   | `/fhir/R5/SubstancePolymer` |
| Search       | `GET`    | `/fhir/R5/SubstancePolymer?...` |
| History      | `GET`    | `/fhir/R5/SubstancePolymer/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/SubstancePolymer/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..1` | A business idenfier for this polymer, but typically this is handled by a SubstanceDefinition identifier |
| `class` | `CodeableConcept` | `0..1` | Overall type of the polymer |
| `geometry` | `CodeableConcept` | `0..1` | Polymer geometry, e.g. linear, branched, cross-linked, network or dendritic |
| `copolymerConnectivity` | `CodeableConcept` | `0..*` | Descrtibes the copolymer sequence type (polymer connectivity) |
| `modification` | `string` | `0..1` | Todo - this is intended to connect to a repeating full modification structure, also used by Protein and Nucleic Acid . String is just a placeholder |
| `monomerSet` | `BackboneElement` | `0..*` | Todo |
| `repeat` | `BackboneElement` | `0..*` | Specifies and quantifies the repeated units and their configuration |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`SubstancePolymer` supports the parameters below.

_No resource-specific search parameters defined. Universal parameters still apply._

## Reference

- Official FHIR R5 spec: [`SubstancePolymer`](https://hl7.org/fhir/R5/substancepolymer.html)
- Element bindings & profiles: [`SubstancePolymer` profile](https://hl7.org/fhir/R5/substancepolymer-definitions.html)
- Maturity: **Draft** (FMM 0).
