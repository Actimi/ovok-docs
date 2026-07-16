---
title: NutritionIntake
sidebar_label: NutritionIntake
description: "A record of food or fluid that is being consumed by a patient.  A NutritionIntake may indicate that the patient may be consuming the food or fluid now or has co"
---

# NutritionIntake

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Clinical — Care Provision</span>

A record of food or fluid that is being consumed by a patient.  A NutritionIntake may indicate that the patient may be consuming the food or fluid now or has consumed the food or fluid in the past.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay or through an app that tracks food or fluids consumed.   The consumption information may come from sources such as the patient's memory, from a nutrition label,  or from a clinician documenting observed intake.

## Endpoints

<ApiBase surface="fhir" path="/NutritionIntake" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/NutritionIntake/[id]` |
| Vread        | `GET`    | `/fhir/R5/NutritionIntake/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/NutritionIntake/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/NutritionIntake/[id]` |
| Delete       | `DELETE` | `/fhir/R5/NutritionIntake/[id]` |
| Create       | `POST`   | `/fhir/R5/NutritionIntake` |
| Search       | `GET`    | `/fhir/R5/NutritionIntake?...` |
| History      | `GET`    | `/fhir/R5/NutritionIntake/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/NutritionIntake/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External identifier |
| `instantiatesCanonical` | `canonical` | `0..*` | Instantiates FHIR protocol or definition |
| `instantiatesUri` | `uri` | `0..*` | Instantiates external protocol or definition |
| `basedOn` | `Reference` | `0..*` | Fulfils plan, proposal or order |
| `partOf` | `Reference` | `0..*` | Part of referenced event |
| `status` | `code` | `1..1` | preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown _modifier_ |
| `statusReason` | `CodeableConcept` | `0..*` | Reason for current status |
| `code` | `CodeableConcept` | `0..1` | Code representing an overall type of nutrition intake |
| `subject` | `Reference` | `1..1` | Who is/was consuming the food or fluid |
| `encounter` | `Reference` | `0..1` | Encounter associated with NutritionIntake |
| `occurrence[x]` | `dateTime` / `Period` | `0..1` | The date/time or interval when the food or fluid is/was consumed |
| `recorded` | `dateTime` | `0..1` | When the intake was recorded |
| `reported[x]` | `boolean` / `Reference` | `0..1` | Person or organization that provided the information about the consumption of this food or fluid |
| `consumedItem` | `BackboneElement` | `1..*` | What food or fluid product or item was consumed |
| `ingredientLabel` | `BackboneElement` | `0..*` | Total nutrient for the whole meal, product, serving |
| `performer` | `BackboneElement` | `0..*` | Who was performed in the intake |
| `location` | `Reference` | `0..1` | Where the intake occurred |
| `derivedFrom` | `Reference` | `0..*` | Additional supporting information |
| `reason` | `CodeableReference` | `0..*` | Reason for why the food or fluid is /was consumed |
| `note` | `Annotation` | `0..*` | Further information about the consumption |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `code` | `token` | Event or incident that occurred or was averted |
| `date` | `date` | When the event occurred |
| `encounter` | `reference` | Encounter related to the activity recorded in the AuditEvent |
| `identifier` | `token` | Account number |
| `nutrition` | `token` | Return intakes for a specific consumed item |
| `patient` | `reference` | The entity that caused the expenses |
| `source` | `reference` | Who or where the information in the statement came from |
| `status` | `token` | Return statements that match the given status |
| `subject` | `reference` | The identity of a patient, animal or group to list statements for |

## Reference

- Official FHIR R5 spec: [`NutritionIntake`](https://hl7.org/fhir/R5/nutritionintake.html)
- Maturity: **Trial Use 1** (FMM 1).
