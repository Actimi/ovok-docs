---
title: Parameters
sidebar_label: Parameters
description: "This resource is used to pass information into and back from an operation (whether invoked directly from REST or within a messaging environment).  It is not per"
---

# Parameters

<span className="fhir-maturity" data-level="5">Normative</span>
<span className="fhir-category">Foundation</span>

This resource is used to pass information into and back from an operation (whether invoked directly from REST or within a messaging environment).  It is not persisted or allowed to be referenced by other resources except as described in the definition of the Parameters resource.

## Endpoints

<ApiBase surface="fhir" path="/Parameters" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Parameters/[id]` |
| Vread        | `GET`    | `/fhir/R5/Parameters/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Parameters/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Parameters/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Parameters/[id]` |
| Create       | `POST`   | `/fhir/R5/Parameters` |
| Search       | `GET`    | `/fhir/R5/Parameters?...` |
| History      | `GET`    | `/fhir/R5/Parameters/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Parameters/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `parameter` | `BackboneElement` | `0..*` | Operation Parameter |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`Parameters` supports the parameters below.

_No resource-specific search parameters defined. Universal parameters still apply._

## Reference

- Official FHIR R5 spec: [`Parameters`](https://hl7.org/fhir/R5/parameters.html)
- Element bindings & profiles: [`Parameters` profile](https://hl7.org/fhir/R5/parameters-definitions.html)
- Maturity: **Normative** (FMM 5).
