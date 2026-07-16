---
title: NutritionOrder
sidebar_label: NutritionOrder
description: "A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident."
---

# NutritionOrder

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Clinical — Care Provision</span>

A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.

## Endpoints

<ApiBase surface="fhir" path="/NutritionOrder" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/NutritionOrder/[id]` |
| Vread        | `GET`    | `/fhir/R5/NutritionOrder/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/NutritionOrder/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/NutritionOrder/[id]` |
| Delete       | `DELETE` | `/fhir/R5/NutritionOrder/[id]` |
| Create       | `POST`   | `/fhir/R5/NutritionOrder` |
| Search       | `GET`    | `/fhir/R5/NutritionOrder?...` |
| History      | `GET`    | `/fhir/R5/NutritionOrder/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/NutritionOrder/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Identifiers assigned to this order |
| `instantiatesCanonical` | `canonical` | `0..*` | Instantiates FHIR protocol or definition |
| `instantiatesUri` | `uri` | `0..*` | Instantiates external protocol or definition |
| `instantiates` | `uri` | `0..*` | Instantiates protocol or definition |
| `basedOn` | `Reference` | `0..*` | What this order fulfills |
| `groupIdentifier` | `Identifier` | `0..1` | Composite Request ID |
| `status` | `code` | `1..1` | draft | active | on-hold | revoked | completed | entered-in-error | unknown _modifier_ |
| `intent` | `code` | `1..1` | proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option _modifier_ |
| `priority` | `code` | `0..1` | routine | urgent | asap | stat |
| `subject` | `Reference` | `1..1` | Who requires the diet, formula or nutritional supplement |
| `encounter` | `Reference` | `0..1` | The encounter associated with this nutrition order |
| `supportingInformation` | `Reference` | `0..*` | Information to support fulfilling of the nutrition order |
| `dateTime` | `dateTime` | `1..1` | Date and time the nutrition order was requested |
| `orderer` | `Reference` | `0..1` | Who ordered the diet, formula or nutritional supplement |
| `performer` | `CodeableReference` | `0..*` | Who is desired to perform the administration of what is being ordered |
| `allergyIntolerance` | `Reference` | `0..*` | List of the patient's food and nutrition-related allergies and intolerances |
| `foodPreferenceModifier` | `CodeableConcept` | `0..*` | Order-specific modifier about the type of food that should be given |
| `excludeFoodModifier` | `CodeableConcept` | `0..*` | Order-specific modifier about the type of food that should not be given |
| `outsideFoodAllowed` | `boolean` | `0..1` | Capture when a food item is brought in by the patient and/or family |
| `oralDiet` | `BackboneElement` | `0..1` | Oral diet components |
| `supplement` | `BackboneElement` | `0..*` | Supplement components |
| `enteralFormula` | `BackboneElement` | `0..1` | Enteral formula components |
| `note` | `Annotation` | `0..*` | Comments |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `additive` | `token` | Type of module component to add to the feeding |
| `datetime` | `date` | Return nutrition orders requested on this date |
| `encounter` | `reference` | Encounter related to the activity recorded in the AuditEvent |
| `formula` | `token` | Type of enteral or infant formula |
| `group-identifier` | `token` | Composite Request ID |
| `identifier` | `token` | Account number |
| `oraldiet` | `token` | Type of diet that can be consumed orally (i.e., take via the mouth). |
| `patient` | `reference` | The entity that caused the expenses |
| `provider` | `reference` | The identity of the provider who placed the nutrition order |
| `status` | `token` | Status of the nutrition order. |
| `subject` | `reference` | The identity of the individual or set of individuals who requires the diet, formula or nutritional supplement |
| `supplement` | `token` | Type of supplement product requested |

## Reference

- Official FHIR R5 spec: [`NutritionOrder`](https://hl7.org/fhir/R5/nutritionorder.html)
- Maturity: **Trial Use 2** (FMM 2).
