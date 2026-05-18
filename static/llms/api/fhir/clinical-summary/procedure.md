---
title: Procedure
sidebar_label: Procedure
description: "An action that is or was performed on or for a patient, practitioner, device, organization, or location. For example, this can be a physical intervention on a p"
---

# Procedure

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Clinical — Summary</span>

An action that is or was performed on or for a patient, practitioner, device, organization, or location. For example, this can be a physical intervention on a patient like an operation, or less invasive like long term services, counseling, or hypnotherapy.  This can be a quality or safety inspection for a location, organization, or device.  This can be an accreditation procedure on a practitioner for licensing.

## Endpoints

<ApiBase surface="fhir" path="/Procedure" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Procedure/[id]` |
| Vread        | `GET`    | `/fhir/R5/Procedure/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Procedure/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Procedure/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Procedure/[id]` |
| Create       | `POST`   | `/fhir/R5/Procedure` |
| Search       | `GET`    | `/fhir/R5/Procedure?...` |
| History      | `GET`    | `/fhir/R5/Procedure/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Procedure/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External Identifiers for this procedure |
| `instantiatesCanonical` | `canonical` | `0..*` | Instantiates FHIR protocol or definition |
| `instantiatesUri` | `uri` | `0..*` | Instantiates external protocol or definition |
| `basedOn` | `Reference` | `0..*` | A request for this procedure |
| `partOf` | `Reference` | `0..*` | Part of referenced event |
| `status` | `code` | `1..1` | preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown _modifier_ |
| `statusReason` | `CodeableConcept` | `0..1` | Reason for current status |
| `category` | `CodeableConcept` | `0..*` | Classification of the procedure |
| `code` | `CodeableConcept` | `0..1` | Identification of the procedure |
| `subject` | `Reference` | `1..1` | Individual or entity the procedure was performed on |
| `focus` | `Reference` | `0..1` | Who is the target of the procedure when it is not the subject of record only |
| `encounter` | `Reference` | `0..1` | The Encounter during which this Procedure was created |
| `occurrence[x]` | `dateTime` / `Period` / `string` / `Age` / `Range` / `Timing` | `0..1` | When the procedure occurred or is occurring |
| `recorded` | `dateTime` | `0..1` | When the procedure was first captured in the subject's record |
| `recorder` | `Reference` | `0..1` | Who recorded the procedure |
| `reported[x]` | `boolean` / `Reference` | `0..1` | Reported rather than primary record |
| `performer` | `BackboneElement` | `0..*` | Who performed the procedure and what they did |
| `location` | `Reference` | `0..1` | Where the procedure happened |
| `reason` | `CodeableReference` | `0..*` | The justification that the procedure was performed |
| `bodySite` | `CodeableConcept` | `0..*` | Target body sites |
| `outcome` | `CodeableConcept` | `0..1` | The result of procedure |
| `report` | `Reference` | `0..*` | Any report resulting from the procedure |
| `complication` | `CodeableReference` | `0..*` | Complication following the procedure |
| `followUp` | `CodeableConcept` | `0..*` | Instructions for follow up |
| `note` | `Annotation` | `0..*` | Additional information about the procedure |
| `focalDevice` | `BackboneElement` | `0..*` | Manipulated, implanted, or removed device |
| `used` | `CodeableReference` | `0..*` | Items used during procedure |
| `supportingInfo` | `Reference` | `0..*` | Extra information relevant to the procedure |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`Procedure` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `based-on` | `reference` | A request for this procedure |
| `category` | `token` | Classification of the procedure |
| `code` | `token` | Event or incident that occurred or was averted |
| `date` | `date` | When the event occurred |
| `encounter` | `reference` | Encounter related to the activity recorded in the AuditEvent |
| `identifier` | `token` | Account number |
| `instantiates-canonical` | `reference` | Instantiates FHIR protocol or definition |
| `instantiates-uri` | `uri` | Instantiates external protocol or definition |
| `location` | `reference` | Where the procedure happened |
| `part-of` | `reference` | Part of referenced event |
| `patient` | `reference` | The entity that caused the expenses |
| `performer` | `reference` | Who performed the procedure |
| `reason-code` | `token` | Reference to a concept (by class) |
| `reason-reference` | `reference` | Reference to a resource (by instance) |
| `report` | `reference` | Any report resulting from the procedure |
| `status` | `token` | preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown |
| `subject` | `reference` | Search by subject |

## Reference

- Official FHIR R5 spec: [`Procedure`](https://hl7.org/fhir/R5/procedure.html)
- Element bindings & profiles: [`Procedure` profile](https://hl7.org/fhir/R5/procedure-definitions.html)
- Maturity: **Trial Use 4** (FMM 4).
