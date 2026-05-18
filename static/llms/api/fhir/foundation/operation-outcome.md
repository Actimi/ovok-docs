---
title: OperationOutcome
sidebar_label: OperationOutcome
description: "A collection of error, warning, or information messages that result from a system action."
---

# OperationOutcome

<span className="fhir-maturity" data-level="5">Normative</span>
<span className="fhir-category">Foundation</span>

A collection of error, warning, or information messages that result from a system action.

## Endpoints

<ApiBase surface="fhir" path="/OperationOutcome" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/OperationOutcome/[id]` |
| Vread        | `GET`    | `/fhir/R5/OperationOutcome/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/OperationOutcome/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/OperationOutcome/[id]` |
| Delete       | `DELETE` | `/fhir/R5/OperationOutcome/[id]` |
| Create       | `POST`   | `/fhir/R5/OperationOutcome` |
| Search       | `GET`    | `/fhir/R5/OperationOutcome?...` |
| History      | `GET`    | `/fhir/R5/OperationOutcome/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/OperationOutcome/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `issue` | `BackboneElement` | `1..*` | A single issue associated with the action |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`OperationOutcome` supports the parameters below.

_No resource-specific search parameters defined. Universal parameters still apply._

## Reference

- Official FHIR R5 spec: [`OperationOutcome`](https://hl7.org/fhir/R5/operationoutcome.html)
- Element bindings & profiles: [`OperationOutcome` profile](https://hl7.org/fhir/R5/operationoutcome-definitions.html)
- Maturity: **Normative** (FMM 5).
