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
| Read | `GET` | `/fhir/R4/OperationOutcome/[id]` |
| Vread | `GET` | `/fhir/R4/OperationOutcome/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/OperationOutcome/[id]` |
| Patch | `PATCH` | `/fhir/R4/OperationOutcome/[id]` |
| Delete | `DELETE` | `/fhir/R4/OperationOutcome/[id]` |
| Create | `POST` | `/fhir/R4/OperationOutcome` |
| Search | `GET` | `/fhir/R4/OperationOutcome` |
| History | `GET` | `/fhir/R4/OperationOutcome/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `issue` | `BackboneElement` | `1..*` | A single issue associated with the action |

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

## Reference

- Official FHIR R4 spec: [`OperationOutcome`](https://hl7.org/fhir/R4/operationoutcome.html)
- Maturity: **Normative** (FMM 5).
