---
title: VisionPrescription
sidebar_label: VisionPrescription
description: "An authorization for the provision of glasses and/or contact lenses to a patient."
---

# VisionPrescription

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Clinical — Care Provision</span>

An authorization for the provision of glasses and/or contact lenses to a patient.

## Endpoints

<ApiBase surface="fhir" path="/VisionPrescription" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/VisionPrescription/[id]` |
| Vread        | `GET`    | `/fhir/R5/VisionPrescription/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/VisionPrescription/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/VisionPrescription/[id]` |
| Delete       | `DELETE` | `/fhir/R5/VisionPrescription/[id]` |
| Create       | `POST`   | `/fhir/R5/VisionPrescription` |
| Search       | `GET`    | `/fhir/R5/VisionPrescription?...` |
| History      | `GET`    | `/fhir/R5/VisionPrescription/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/VisionPrescription/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business Identifier for vision prescription |
| `status` | `code` | `1..1` | active | cancelled | draft | entered-in-error _modifier_ |
| `created` | `dateTime` | `1..1` | Response creation date |
| `patient` | `Reference` | `1..1` | Who prescription is for |
| `encounter` | `Reference` | `0..1` | Created during encounter / admission / stay |
| `dateWritten` | `dateTime` | `1..1` | When prescription was authorized |
| `prescriber` | `Reference` | `1..1` | Who authorized the vision prescription |
| `lensSpecification` | `BackboneElement` | `1..*` | Vision lens authorization |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `datewritten` | `date` | Return prescriptions written on this date |
| `encounter` | `reference` | Encounter related to the activity recorded in the AuditEvent |
| `identifier` | `token` | Account number |
| `patient` | `reference` | The entity that caused the expenses |
| `prescriber` | `reference` | Who authorized the vision prescription |
| `status` | `token` | The status of the vision prescription |

## Reference

- Official FHIR R5 spec: [`VisionPrescription`](https://hl7.org/fhir/R5/visionprescription.html)
- Maturity: **Trial Use 3** (FMM 3).
