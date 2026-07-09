---
title: NutritionProduct
sidebar_label: NutritionProduct
description: "A food or supplement that is consumed by patients."
---

# NutritionProduct

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Specialized — Public Health & Research</span>

A food or supplement that is consumed by patients.

## Endpoints

<ApiBase surface="fhir" path="/NutritionProduct" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/NutritionProduct/[id]` |
| Vread        | `GET`    | `/fhir/R5/NutritionProduct/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/NutritionProduct/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/NutritionProduct/[id]` |
| Delete       | `DELETE` | `/fhir/R5/NutritionProduct/[id]` |
| Create       | `POST`   | `/fhir/R5/NutritionProduct` |
| Search       | `GET`    | `/fhir/R5/NutritionProduct?...` |
| History      | `GET`    | `/fhir/R5/NutritionProduct/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/NutritionProduct/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `code` | `CodeableConcept` | `0..1` | A code that can identify the detailed nutrients and ingredients in a specific food product |
| `status` | `code` | `1..1` | active | inactive | entered-in-error _modifier_ |
| `category` | `CodeableConcept` | `0..*` | Broad product groups or categories used to classify the product, such as Legume and Legume Products, Beverages, or Beef Products |
| `manufacturer` | `Reference` | `0..*` | Manufacturer, representative or officially responsible for the product |
| `nutrient` | `BackboneElement` | `0..*` | The product's nutritional information expressed by the nutrients |
| `ingredient` | `BackboneElement` | `0..*` | Ingredients contained in this product |
| `knownAllergen` | `CodeableReference` | `0..*` | Known or suspected allergens that are a part of this product |
| `characteristic` | `BackboneElement` | `0..*` | Specifies descriptive properties of the nutrition product |
| `instance` | `BackboneElement` | `0..*` | One or several physical instances or occurrences of the nutrition product |
| `note` | `Annotation` | `0..*` | Comments made about the product |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `code` | `token` | The code identifying a specific nutrition product |
| `identifier` | `token` | The identifier for the physical instance, typically a serial number |
| `lot-number` | `token` | The lot number |
| `serial-number` | `token` | The serial number |
| `status` | `token` | The broad product group or category of the nutrition product |

## Reference

- Official FHIR R5 spec: [`NutritionProduct`](https://hl7.org/fhir/R5/nutritionproduct.html)
- Maturity: **Trial Use 1** (FMM 1).
