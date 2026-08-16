---
title: BiologicallyDerivedProduct
sidebar_label: BiologicallyDerivedProduct
description: "A material substance originating from a biological entity intended to be transplanted or infused"
---

# BiologicallyDerivedProduct

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Specialized — Public Health & Research</span>

A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity.

## Endpoints

<ApiBase surface="fhir" path="/BiologicallyDerivedProduct" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/BiologicallyDerivedProduct/[id]` |
| Vread | `GET` | `/fhir/R4/BiologicallyDerivedProduct/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/BiologicallyDerivedProduct/[id]` |
| Patch | `PATCH` | `/fhir/R4/BiologicallyDerivedProduct/[id]` |
| Delete | `DELETE` | `/fhir/R4/BiologicallyDerivedProduct/[id]` |
| Create | `POST` | `/fhir/R4/BiologicallyDerivedProduct` |
| Search | `GET` | `/fhir/R4/BiologicallyDerivedProduct` |
| History | `GET` | `/fhir/R4/BiologicallyDerivedProduct/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External ids for this item |
| `productCategory` | `code` | `0..1` | organ \| tissue \| fluid \| cells \| biologicalAgent |
| `productCode` | `CodeableConcept` | `0..1` | What this biologically derived product is |
| `status` | `code` | `0..1` | available \| unavailable |
| `request` | `Reference` | `0..*` | Procedure request |
| `quantity` | `integer` | `0..1` | The amount of this biologically derived product |
| `parent` | `Reference` | `0..*` | BiologicallyDerivedProduct parent |
| `collection` | `BackboneElement` | `0..1` | How this product was collected |
| `processing` | `BackboneElement` | `0..*` | Any processing of the product during collection |
| `manipulation` | `BackboneElement` | `0..1` | Any manipulation of product post-collection |
| `storage` | `BackboneElement` | `0..*` | Product storage |

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

## Reference

- Official FHIR R4 spec: [`BiologicallyDerivedProduct`](https://hl7.org/fhir/R4/biologicallyderivedproduct.html)
- Maturity: **Draft** (FMM 0).
