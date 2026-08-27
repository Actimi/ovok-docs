---
title: DeviceRequest
sidebar_label: DeviceRequest
description: "Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker."
---

# DeviceRequest

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Clinical — Care Provision</span>

Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.

## Endpoints

<ApiBase surface="fhir" path="/DeviceRequest" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/DeviceRequest/[id]` |
| Vread | `GET` | `/fhir/R4/DeviceRequest/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/DeviceRequest/[id]` |
| Patch | `PATCH` | `/fhir/R4/DeviceRequest/[id]` |
| Delete | `DELETE` | `/fhir/R4/DeviceRequest/[id]` |
| Create | `POST` | `/fhir/R4/DeviceRequest` |
| Search | `GET` | `/fhir/R4/DeviceRequest` |
| History | `GET` | `/fhir/R4/DeviceRequest/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External Request identifier |
| `instantiatesCanonical` | `canonical` | `0..*` | Instantiates FHIR protocol or definition |
| `instantiatesUri` | `uri` | `0..*` | Instantiates external protocol or definition |
| `basedOn` | `Reference` | `0..*` | What request fulfills |
| `priorRequest` | `Reference` | `0..*` | What request replaces |
| `groupIdentifier` | `Identifier` | `0..1` | Identifier of composite request |
| `status` | `code` | `0..1` | draft \| active \| on-hold \| revoked \| completed \| entered-in-error \| unknown _modifier_ |
| `intent` | `code` | `1..1` | proposal \| plan \| directive \| order \| original-order \| reflex-order \| filler-order \| instance-order \| option _modifier_ |
| `priority` | `code` | `0..1` | routine \| urgent \| asap \| stat |
| `code[x]` | `Reference` / `CodeableConcept` | `1..1` | Device requested |
| `parameter` | `BackboneElement` | `0..*` | Device details |
| `subject` | `Reference` | `1..1` | Focus of request |
| `encounter` | `Reference` | `0..1` | Encounter motivating request |
| `occurrence[x]` | `dateTime` / `Period` / `Timing` | `0..1` | Desired time or schedule for use |
| `authoredOn` | `dateTime` | `0..1` | When recorded |
| `requester` | `Reference` | `0..1` | Who/what is requesting diagnostics |
| `performerType` | `CodeableConcept` | `0..1` | Filler role |
| `performer` | `Reference` | `0..1` | Requested Filler |
| `reasonCode` | `CodeableConcept` | `0..*` | Coded Reason for request |
| `reasonReference` | `Reference` | `0..*` | Linked Reason for request |
| `insurance` | `Reference` | `0..*` | Associated insurance coverage |
| `supportingInfo` | `Reference` | `0..*` | Additional clinical information |
| `note` | `Annotation` | `0..*` | Notes or comments |
| `relevantHistory` | `Reference` | `0..*` | Request provenance |

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
| `authored-on` | `string` | http://hl7.org/fhir/SearchParameter/DeviceRequest-authored-on |
| `based-on` | `string` | http://hl7.org/fhir/SearchParameter/DeviceRequest-based-on |
| `code` | `string` | http://hl7.org/fhir/SearchParameter/clinical-code |
| `device` | `string` | http://hl7.org/fhir/SearchParameter/DeviceRequest-device |
| `encounter` | `string` | http://hl7.org/fhir/SearchParameter/clinical-encounter |
| `event-date` | `string` | http://hl7.org/fhir/SearchParameter/DeviceRequest-event-date |
| `group-identifier` | `string` | http://hl7.org/fhir/SearchParameter/DeviceRequest-group-identifier |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/clinical-identifier |
| `instantiates-canonical` | `string` | http://hl7.org/fhir/SearchParameter/DeviceRequest-instantiates-canonical |
| `instantiates-uri` | `string` | http://hl7.org/fhir/SearchParameter/DeviceRequest-instantiates-uri |
| `insurance` | `string` | http://hl7.org/fhir/SearchParameter/DeviceRequest-insurance |
| `intent` | `string` | http://hl7.org/fhir/SearchParameter/DeviceRequest-intent |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/clinical-patient |
| `performer` | `string` | http://hl7.org/fhir/SearchParameter/DeviceRequest-performer |
| `prior-request` | `string` | http://hl7.org/fhir/SearchParameter/DeviceRequest-prior-request |
| `requester` | `string` | http://hl7.org/fhir/SearchParameter/DeviceRequest-requester |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/DeviceRequest-status |
| `subject` | `string` | http://hl7.org/fhir/SearchParameter/DeviceRequest-subject |

## Reference

- Official FHIR R4 spec: [`DeviceRequest`](https://hl7.org/fhir/R4/devicerequest.html)
- Maturity: **Trial Use 1** (FMM 1).
