---
title: SubstanceReferenceInformation
sidebar_label: SubstanceReferenceInformation
description: "Todo."
---

# SubstanceReferenceInformation

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Specialized — Medication Definition</span>

Todo.

## Endpoints

<ApiBase surface="fhir" path="/SubstanceReferenceInformation" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/SubstanceReferenceInformation/[id]` |
| Vread        | `GET`    | `/fhir/R5/SubstanceReferenceInformation/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/SubstanceReferenceInformation/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/SubstanceReferenceInformation/[id]` |
| Delete       | `DELETE` | `/fhir/R5/SubstanceReferenceInformation/[id]` |
| Create       | `POST`   | `/fhir/R5/SubstanceReferenceInformation` |
| Search       | `GET`    | `/fhir/R5/SubstanceReferenceInformation?...` |
| History      | `GET`    | `/fhir/R5/SubstanceReferenceInformation/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/SubstanceReferenceInformation/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `comment` | `string` | `0..1` | Todo |
| `gene` | `BackboneElement` | `0..*` | Todo |
| `geneElement` | `BackboneElement` | `0..*` | Todo |
| `target` | `BackboneElement` | `0..*` | Todo |

## Resource-specific search parameters

_No resource-specific search parameters defined._

## Reference

- Official FHIR R5 spec: [`SubstanceReferenceInformation`](https://hl7.org/fhir/R5/substancereferenceinformation.html)
- Maturity: **Draft** (FMM 0).
