---
title: InventoryItem
sidebar_label: InventoryItem
description: "functional description of an inventory item used in inventory and supply-related workflows."
---

# InventoryItem

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Other</span>

functional description of an inventory item used in inventory and supply-related workflows.

## Endpoints

<ApiBase surface="fhir" path="/InventoryItem" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/InventoryItem/[id]` |
| Vread        | `GET`    | `/fhir/R5/InventoryItem/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/InventoryItem/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/InventoryItem/[id]` |
| Delete       | `DELETE` | `/fhir/R5/InventoryItem/[id]` |
| Create       | `POST`   | `/fhir/R5/InventoryItem` |
| Search       | `GET`    | `/fhir/R5/InventoryItem?...` |
| History      | `GET`    | `/fhir/R5/InventoryItem/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/InventoryItem/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier for the inventory item |
| `status` | `code` | `1..1` | active | inactive | entered-in-error | unknown |
| `category` | `CodeableConcept` | `0..*` | Category or class of the item |
| `code` | `CodeableConcept` | `0..*` | Code designating the specific type of item |
| `name` | `BackboneElement` | `0..*` | The item name(s) - the brand name, or common name, functional name, generic name or others |
| `responsibleOrganization` | `BackboneElement` | `0..*` | Organization(s) responsible for the product |
| `description` | `BackboneElement` | `0..1` | Descriptive characteristics of the item |
| `inventoryStatus` | `CodeableConcept` | `0..*` | The usage status like recalled, in use, discarded |
| `baseUnit` | `CodeableConcept` | `0..1` | The base unit of measure - the unit in which the product is used or counted |
| `netContent` | `Quantity` | `0..1` | Net content or amount present in the item |
| `association` | `BackboneElement` | `0..*` | Association with other items or products |
| `characteristic` | `BackboneElement` | `0..*` | Characteristic of the item |
| `instance` | `BackboneElement` | `0..1` | Instances or occurrences of the product |
| `productReference` | `Reference` | `0..1` | Link to a product resource used in clinical workflows |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `code` | `token` | Search for products that match this code |
| `identifier` | `token` | The identifier of the item |
| `status` | `token` | The status of the item |
| `subject` | `reference` | The identity of a patient for whom to list associations |

## Reference

- Official FHIR R5 spec: [`InventoryItem`](https://hl7.org/fhir/R5/inventoryitem.html)
- Maturity: **Draft** (FMM 0).
