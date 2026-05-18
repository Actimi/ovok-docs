---
title: Flag
sidebar_label: Flag
description: "Prospective warnings of potential issues when providing care to the patient."
---

# Flag

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Clinical — Care Provision</span>

Prospective warnings of potential issues when providing care to the patient.

## Endpoints

<ApiBase surface="fhir" path="/Flag" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Flag/[id]` |
| Vread        | `GET`    | `/fhir/R5/Flag/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Flag/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Flag/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Flag/[id]` |
| Create       | `POST`   | `/fhir/R5/Flag` |
| Search       | `GET`    | `/fhir/R5/Flag?...` |
| History      | `GET`    | `/fhir/R5/Flag/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Flag/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier |
| `status` | `code` | `1..1` | active | inactive | entered-in-error _modifier_ |
| `category` | `CodeableConcept` | `0..*` | Clinical, administrative, etc |
| `code` | `CodeableConcept` | `1..1` | Coded or textual message to display to user |
| `subject` | `Reference` | `1..1` | Who/What is flag about? |
| `period` | `Period` | `0..1` | Time period when flag is active |
| `encounter` | `Reference` | `0..1` | Alert relevant during encounter |
| `author` | `Reference` | `0..1` | Flag creator |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`Flag` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `author` | `reference` | Flag creator |
| `category` | `token` | The category of the flag, such as clinical, administrative, etc. |
| `date` | `date` | When the event occurred |
| `encounter` | `reference` | Encounter related to the activity recorded in the AuditEvent |
| `identifier` | `token` | Account number |
| `patient` | `reference` | The entity that caused the expenses |
| `status` | `token` | active | inactive | entered-in-error |
| `subject` | `reference` | The identity of a subject to list flags for |

## Reference

- Official FHIR R5 spec: [`Flag`](https://hl7.org/fhir/R5/flag.html)
- Element bindings & profiles: [`Flag` profile](https://hl7.org/fhir/R5/flag-definitions.html)
- Maturity: **Trial Use 1** (FMM 1).
