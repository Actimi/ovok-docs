---
title: Basic
sidebar_label: Basic
description: "Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropria"
---

# Basic

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Foundation</span>

Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.

## Endpoints

<ApiBase surface="fhir" path="/Basic" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Basic/[id]` |
| Vread        | `GET`    | `/fhir/R5/Basic/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Basic/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Basic/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Basic/[id]` |
| Create       | `POST`   | `/fhir/R5/Basic` |
| Search       | `GET`    | `/fhir/R5/Basic?...` |
| History      | `GET`    | `/fhir/R5/Basic/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Basic/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier |
| `code` | `CodeableConcept` | `1..1` | Kind of Resource _modifier_ |
| `subject` | `Reference` | `0..1` | Identifies the focus of this resource |
| `created` | `dateTime` | `0..1` | When created |
| `author` | `Reference` | `0..1` | Who created |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`Basic` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `author` | `reference` | Who created |
| `code` | `token` | Event or incident that occurred or was averted |
| `created` | `date` | When created |
| `identifier` | `token` | Account number |
| `patient` | `reference` | The entity that caused the expenses |
| `subject` | `reference` | Identifies the focus of this resource |

## Reference

- Official FHIR R5 spec: [`Basic`](https://hl7.org/fhir/R5/basic.html)
- Element bindings & profiles: [`Basic` profile](https://hl7.org/fhir/R5/basic-definitions.html)
- Maturity: **Trial Use 3** (FMM 3).
