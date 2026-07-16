---
title: DeviceRequest
sidebar_label: DeviceRequest
description: "Represents a request a device to be provided to a specific patient. The device may be an implantable device to be subsequently implanted, or an external assisti"
---

# DeviceRequest

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Clinical — Care Provision</span>

Represents a request a device to be provided to a specific patient. The device may be an implantable device to be subsequently implanted, or an external assistive device, such as a walker, to be delivered and subsequently be used.

## Endpoints

<ApiBase surface="fhir" path="/DeviceRequest" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/DeviceRequest/[id]` |
| Vread        | `GET`    | `/fhir/R5/DeviceRequest/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/DeviceRequest/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/DeviceRequest/[id]` |
| Delete       | `DELETE` | `/fhir/R5/DeviceRequest/[id]` |
| Create       | `POST`   | `/fhir/R5/DeviceRequest` |
| Search       | `GET`    | `/fhir/R5/DeviceRequest?...` |
| History      | `GET`    | `/fhir/R5/DeviceRequest/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/DeviceRequest/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External Request identifier |
| `instantiatesCanonical` | `canonical` | `0..*` | Instantiates FHIR protocol or definition |
| `instantiatesUri` | `uri` | `0..*` | Instantiates external protocol or definition |
| `basedOn` | `Reference` | `0..*` | What request fulfills |
| `replaces` | `Reference` | `0..*` | What request replaces |
| `groupIdentifier` | `Identifier` | `0..1` | Identifier of composite request |
| `status` | `code` | `0..1` | draft | active | on-hold | revoked | completed | entered-in-error | unknown _modifier_ |
| `intent` | `code` | `1..1` | proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option _modifier_ |
| `priority` | `code` | `0..1` | routine | urgent | asap | stat |
| `doNotPerform` | `boolean` | `0..1` | True if the request is to stop or not to start using the device _modifier_ |
| `code` | `CodeableReference` | `1..1` | Device requested |
| `quantity` | `integer` | `0..1` | Quantity of devices to supply |
| `parameter` | `BackboneElement` | `0..*` | Device details |
| `subject` | `Reference` | `1..1` | Focus of request |
| `encounter` | `Reference` | `0..1` | Encounter motivating request |
| `occurrence[x]` | `dateTime` / `Period` / `Timing` | `0..1` | Desired time or schedule for use |
| `authoredOn` | `dateTime` | `0..1` | When recorded |
| `requester` | `Reference` | `0..1` | Who/what submitted the device request |
| `performer` | `CodeableReference` | `0..1` | Requested Filler |
| `reason` | `CodeableReference` | `0..*` | Coded/Linked Reason for request |
| `asNeeded` | `boolean` | `0..1` | PRN status of request |
| `asNeededFor` | `CodeableConcept` | `0..1` | Device usage reason |
| `insurance` | `Reference` | `0..*` | Associated insurance coverage |
| `supportingInfo` | `Reference` | `0..*` | Additional clinical information |
| `note` | `Annotation` | `0..*` | Notes or comments |
| `relevantHistory` | `Reference` | `0..*` | Request provenance |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `authored-on` | `date` | When the request transitioned to being actionable |
| `based-on` | `reference` | Plan/proposal/order fulfilled by this request |
| `code` | `token` | Event or incident that occurred or was averted |
| `device` | `reference` | Reference to resource that is being requested/ordered |
| `encounter` | `reference` | Encounter related to the activity recorded in the AuditEvent |
| `event-date` | `date` | When service should occur |
| `group-identifier` | `token` | Composite request this is part of |
| `identifier` | `token` | Account number |
| `instantiates-canonical` | `reference` | Instantiates FHIR protocol or definition |
| `instantiates-uri` | `uri` | Instantiates external protocol or definition |
| `insurance` | `reference` | Associated insurance coverage |
| `intent` | `token` | proposal | plan | original-order |reflex-order |
| `patient` | `reference` | The entity that caused the expenses |
| `performer` | `reference` | Desired performer for service |
| `performer-code` | `token` | Desired performer for service |
| `prior-request` | `reference` | Request takes the place of referenced completed or terminated requests |
| `requester` | `reference` | Who/what is requesting service |
| `status` | `token` | entered-in-error | draft | active |suspended | completed |
| `subject` | `reference` | Individual the service is ordered for |

## Reference

- Official FHIR R5 spec: [`DeviceRequest`](https://hl7.org/fhir/R5/devicerequest.html)
- Maturity: **Trial Use 1** (FMM 1).
