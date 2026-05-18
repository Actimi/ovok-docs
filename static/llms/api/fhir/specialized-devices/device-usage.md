---
title: DeviceUsage
sidebar_label: DeviceUsage
description: "A record of a device being used by a patient where the record is the result of a report from the patient or a clinician."
---

# DeviceUsage

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Specialized — Devices</span>

A record of a device being used by a patient where the record is the result of a report from the patient or a clinician.

## Endpoints

<ApiBase surface="fhir" path="/DeviceUsage" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/DeviceUsage/[id]` |
| Vread        | `GET`    | `/fhir/R5/DeviceUsage/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/DeviceUsage/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/DeviceUsage/[id]` |
| Delete       | `DELETE` | `/fhir/R5/DeviceUsage/[id]` |
| Create       | `POST`   | `/fhir/R5/DeviceUsage` |
| Search       | `GET`    | `/fhir/R5/DeviceUsage?...` |
| History      | `GET`    | `/fhir/R5/DeviceUsage/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/DeviceUsage/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External identifier for this record |
| `basedOn` | `Reference` | `0..*` | Fulfills plan, proposal or order |
| `status` | `code` | `1..1` | active | completed | not-done | entered-in-error + _modifier_ |
| `category` | `CodeableConcept` | `0..*` | The category of the statement - classifying how the statement is made |
| `patient` | `Reference` | `1..1` | Patient using device |
| `derivedFrom` | `Reference` | `0..*` | Supporting information |
| `context` | `Reference` | `0..1` | The encounter or episode of care that establishes the context for this device use statement |
| `timing[x]` | `Timing` / `Period` / `dateTime` | `0..1` | How often  the device was used |
| `dateAsserted` | `dateTime` | `0..1` | When the statement was made (and recorded) |
| `usageStatus` | `CodeableConcept` | `0..1` | The status of the device usage, for example always, sometimes, never. This is not the same as the status of the statement |
| `usageReason` | `CodeableConcept` | `0..*` | The reason for asserting the usage status - for example forgot, lost, stolen, broken |
| `adherence` | `BackboneElement` | `0..1` | How device is being used |
| `informationSource` | `Reference` | `0..1` | Who made the statement |
| `device` | `CodeableReference` | `1..1` | Code or Reference to device used |
| `reason` | `CodeableReference` | `0..*` | Why device was used |
| `bodySite` | `CodeableReference` | `0..1` | Target body site |
| `note` | `Annotation` | `0..*` | Addition details (comments, instructions) |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`DeviceUsage` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `device` | `token` | Search by device |
| `identifier` | `token` | Account number |
| `patient` | `reference` | The entity that caused the expenses |
| `status` | `token` | The status of the device usage |

## Reference

- Official FHIR R5 spec: [`DeviceUsage`](https://hl7.org/fhir/R5/deviceusage.html)
- Element bindings & profiles: [`DeviceUsage` profile](https://hl7.org/fhir/R5/deviceusage-definitions.html)
- Maturity: **Trial Use 1** (FMM 1).
