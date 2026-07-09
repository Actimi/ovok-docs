---
title: MolecularSequence
sidebar_label: MolecularSequence
description: "Representation of a molecular sequence."
---

# MolecularSequence

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Clinical — Diagnostics</span>

Representation of a molecular sequence.

## Endpoints

<ApiBase surface="fhir" path="/MolecularSequence" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/MolecularSequence/[id]` |
| Vread        | `GET`    | `/fhir/R5/MolecularSequence/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/MolecularSequence/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/MolecularSequence/[id]` |
| Delete       | `DELETE` | `/fhir/R5/MolecularSequence/[id]` |
| Create       | `POST`   | `/fhir/R5/MolecularSequence` |
| Search       | `GET`    | `/fhir/R5/MolecularSequence?...` |
| History      | `GET`    | `/fhir/R5/MolecularSequence/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/MolecularSequence/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Unique ID for this particular sequence |
| `type` | `code` | `0..1` | aa | dna | rna |
| `subject` | `Reference` | `0..1` | Subject this sequence is associated too |
| `focus` | `Reference` | `0..*` | What the molecular sequence is about, when it is not about the subject of record |
| `specimen` | `Reference` | `0..1` | Specimen used for sequencing |
| `device` | `Reference` | `0..1` | The method for sequencing |
| `performer` | `Reference` | `0..1` | Who should be responsible for test result |
| `literal` | `string` | `0..1` | Sequence that was observed |
| `formatted` | `Attachment` | `0..*` | Embedded file or a link (URL) which contains content to represent the sequence |
| `relative` | `BackboneElement` | `0..*` | A sequence defined relative to another sequence |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `focus` | `reference` | What the molecular sequence is about, when it is not about the subject of record |
| `identifier` | `token` | Account number |
| `patient` | `reference` | The entity that caused the expenses |
| `subject` | `reference` | The subject that the sequence is about |
| `type` | `token` | E.g. patient, expense, depreciation |

## Reference

- Official FHIR R5 spec: [`MolecularSequence`](https://hl7.org/fhir/R5/molecularsequence.html)
- Maturity: **Trial Use 1** (FMM 1).
