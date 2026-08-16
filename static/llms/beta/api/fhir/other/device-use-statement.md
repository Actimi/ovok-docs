---
title: DeviceUseStatement
sidebar_label: DeviceUseStatement
description: "A record of a device being used by a patient where the record is the result of a report from the patient or another clinician."
---

# DeviceUseStatement

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Other</span>

A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.

## Endpoints

<ApiBase surface="fhir" path="/DeviceUseStatement" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/DeviceUseStatement/[id]` |
| Vread | `GET` | `/fhir/R4/DeviceUseStatement/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/DeviceUseStatement/[id]` |
| Patch | `PATCH` | `/fhir/R4/DeviceUseStatement/[id]` |
| Delete | `DELETE` | `/fhir/R4/DeviceUseStatement/[id]` |
| Create | `POST` | `/fhir/R4/DeviceUseStatement` |
| Search | `GET` | `/fhir/R4/DeviceUseStatement` |
| History | `GET` | `/fhir/R4/DeviceUseStatement/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External identifier for this record |
| `basedOn` | `Reference` | `0..*` | Fulfills plan, proposal or order |
| `status` | `code` | `1..1` | active \| completed \| entered-in-error + _modifier_ |
| `subject` | `Reference` | `1..1` | Patient using device |
| `derivedFrom` | `Reference` | `0..*` | Supporting information |
| `timing[x]` | `Timing` / `Period` / `dateTime` | `0..1` | How often  the device was used |
| `recordedOn` | `dateTime` | `0..1` | When statement was recorded |
| `source` | `Reference` | `0..1` | Who made the statement |
| `device` | `Reference` | `1..1` | Reference to device used |
| `reasonCode` | `CodeableConcept` | `0..*` | Why device was used |
| `reasonReference` | `Reference` | `0..*` | Why was DeviceUseStatement performed? |
| `bodySite` | `CodeableConcept` | `0..1` | Target body site |
| `note` | `Annotation` | `0..*` | Addition details (comments, instructions) |

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
| `device` | `string` | http://hl7.org/fhir/SearchParameter/DeviceUseStatement-device |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/DeviceUseStatement-identifier |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/clinical-patient |
| `subject` | `string` | http://hl7.org/fhir/SearchParameter/DeviceUseStatement-subject |

## Reference

- Official FHIR R4 spec: [`DeviceUseStatement`](https://hl7.org/fhir/R4/deviceusestatement.html)
- Maturity: **Draft** (FMM 0).
