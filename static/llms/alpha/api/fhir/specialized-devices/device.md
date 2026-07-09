---
title: Device
sidebar_label: Device
description: "This resource describes the properties (regulated, has real time clock, etc.), adminstrative (manufacturer name, model number, serial number, firmware, etc.), a"
---

# Device

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Specialized — Devices</span>

This resource describes the properties (regulated, has real time clock, etc.), adminstrative (manufacturer name, model number, serial number, firmware, etc.), and type (knee replacement, blood pressure cuff, MRI, etc.) of a physical unit (these values do not change much within a given module, for example the serail number, manufacturer name, and model number). An actual unit may consist of several modules in a distinct hierarchy and these are represented by multiple Device resources and bound through the 'parent' element.

## Endpoints

<ApiBase surface="fhir" path="/Device" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Device/[id]` |
| Vread        | `GET`    | `/fhir/R5/Device/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Device/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Device/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Device/[id]` |
| Create       | `POST`   | `/fhir/R5/Device` |
| Search       | `GET`    | `/fhir/R5/Device?...` |
| History      | `GET`    | `/fhir/R5/Device/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Device/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Instance identifier |
| `displayName` | `string` | `0..1` | The name used to display by default when the device is referenced |
| `definition` | `CodeableReference` | `0..1` | The reference to the definition for the device |
| `udiCarrier` | `BackboneElement` | `0..*` | Unique Device Identifier (UDI) Barcode string |
| `status` | `code` | `0..1` | active | inactive | entered-in-error _modifier_ |
| `availabilityStatus` | `CodeableConcept` | `0..1` | lost | damaged | destroyed | available |
| `biologicalSourceEvent` | `Identifier` | `0..1` | An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled |
| `manufacturer` | `string` | `0..1` | Name of device manufacturer |
| `manufactureDate` | `dateTime` | `0..1` | Date when the device was made |
| `expirationDate` | `dateTime` | `0..1` | Date and time of expiry of this device (if applicable) |
| `lotNumber` | `string` | `0..1` | Lot number of manufacture |
| `serialNumber` | `string` | `0..1` | Serial number assigned by the manufacturer |
| `name` | `BackboneElement` | `0..*` | The name or names of the device as known to the manufacturer and/or patient |
| `modelNumber` | `string` | `0..1` | The manufacturer's model number for the device |
| `partNumber` | `string` | `0..1` | The part number or catalog number of the device |
| `category` | `CodeableConcept` | `0..*` | Indicates a high-level grouping of the device |
| `type` | `CodeableConcept` | `0..*` | The kind or type of device |
| `version` | `BackboneElement` | `0..*` | The actual design of the device or software version running on the device |
| `conformsTo` | `BackboneElement` | `0..*` | Identifies the standards, specifications, or formal guidances for the capabilities supported by the device |
| `property` | `BackboneElement` | `0..*` | Inherent, essentially fixed, characteristics of the device.  e.g., time properties, size, material, etc. |
| `mode` | `CodeableConcept` | `0..1` | The designated condition for performing a task |
| `cycle` | `Count` | `0..1` | The series of occurrences that repeats during the operation of the device |
| `duration` | `Duration` | `0..1` | A measurement of time during the device's operation (e.g., days, hours, mins, etc.) |
| `owner` | `Reference` | `0..1` | Organization responsible for device |
| `contact` | `ContactPoint` | `0..*` | Details for human/organization for support |
| `location` | `Reference` | `0..1` | Where the device is found |
| `url` | `uri` | `0..1` | Network address to contact device |
| `endpoint` | `Reference` | `0..*` | Technical endpoints providing access to electronic services provided by the device |
| `gateway` | `CodeableReference` | `0..*` | Linked device acting as a communication/data collector, translator or controller |
| `note` | `Annotation` | `0..*` | Device notes and comments |
| `safety` | `CodeableConcept` | `0..*` | Safety Characteristics of Device |
| `parent` | `Reference` | `0..1` | The higher level or encompassing device that this device is a logical part of |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `biological-source-event` | `token` | The biological source for the device |
| `code` | `token` | The definition / type of the device (code) |
| `code-value-concept` | `composite` | Code and value parameter pair |
| `definition` | `reference` | The definition / type of the device |
| `device-name` | `string` | A server defined search that may match any of the string fields in Device.name or Device.type. |
| `expiration-date` | `date` | The expiration date of the device |
| `identifier` | `token` | Instance id from manufacturer, owner, and others |
| `location` | `reference` | A location, where the resource is found |
| `lot-number` | `string` | The lot number of the device |
| `manufacture-date` | `date` | The manufacture date of the device |
| `manufacturer` | `string` | The manufacturer of the device |
| `model` | `string` | The model of the device |
| `organization` | `reference` | The organization responsible for the device |
| `parent` | `reference` | The parent device |
| `serial-number` | `string` | The serial number of the device |
| `specification` | `token` | The standards, specifications, or formal guidances. |
| `specification-version` | `composite` | A composite of both specification and version |
| `status` | `token` | active | inactive | entered-in-error | unknown |
| `type` | `token` | The type of the device |
| `udi-carrier` | `string` | UDI Barcode (RFID or other technology) string in *HRF* format. |
| `udi-di` | `string` | The udi Device Identifier (DI) |
| `url` | `uri` | Network address to contact device |
| `version` | `string` | The specific version of the device |

## Reference

- Official FHIR R5 spec: [`Device`](https://hl7.org/fhir/R5/device.html)
- Maturity: **Trial Use 2** (FMM 2).
