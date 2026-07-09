---
title: SupplyDelivery
sidebar_label: SupplyDelivery
description: "Record of delivery of what is supplied."
---

# SupplyDelivery

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Clinical — Care Provision</span>

Record of delivery of what is supplied.

## Endpoints

<ApiBase surface="fhir" path="/SupplyDelivery" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/SupplyDelivery/[id]` |
| Vread        | `GET`    | `/fhir/R5/SupplyDelivery/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/SupplyDelivery/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/SupplyDelivery/[id]` |
| Delete       | `DELETE` | `/fhir/R5/SupplyDelivery/[id]` |
| Create       | `POST`   | `/fhir/R5/SupplyDelivery` |
| Search       | `GET`    | `/fhir/R5/SupplyDelivery?...` |
| History      | `GET`    | `/fhir/R5/SupplyDelivery/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/SupplyDelivery/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External identifier |
| `basedOn` | `Reference` | `0..*` | Fulfills plan, proposal or order |
| `partOf` | `Reference` | `0..*` | Part of referenced event |
| `status` | `code` | `0..1` | in-progress | completed | abandoned | entered-in-error _modifier_ |
| `patient` | `Reference` | `0..1` | Patient for whom the item is supplied |
| `type` | `CodeableConcept` | `0..1` | Category of supply event |
| `suppliedItem` | `BackboneElement` | `0..*` | The item that is delivered or supplied |
| `occurrence[x]` | `dateTime` / `Period` / `Timing` | `0..1` | When event occurred |
| `supplier` | `Reference` | `0..1` | The item supplier |
| `destination` | `Reference` | `0..1` | Where the delivery was sent |
| `receiver` | `Reference` | `0..*` | Who received the delivery |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `identifier` | `token` | Account number |
| `patient` | `reference` | The entity that caused the expenses |
| `receiver` | `reference` | Who collected the Supply |
| `status` | `token` | in-progress | completed | abandoned | entered-in-error |
| `supplier` | `reference` | Dispenser |

## Reference

- Official FHIR R5 spec: [`SupplyDelivery`](https://hl7.org/fhir/R5/supplydelivery.html)
- Maturity: **Trial Use 1** (FMM 1).
