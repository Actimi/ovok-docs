---
title: ClinicalUseDefinition
sidebar_label: ClinicalUseDefinition
description: "A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure."
---

# ClinicalUseDefinition

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Specialized — Medication Definition</span>

A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.

## Endpoints

<ApiBase surface="fhir" path="/ClinicalUseDefinition" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/ClinicalUseDefinition/[id]` |
| Vread        | `GET`    | `/fhir/R5/ClinicalUseDefinition/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/ClinicalUseDefinition/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/ClinicalUseDefinition/[id]` |
| Delete       | `DELETE` | `/fhir/R5/ClinicalUseDefinition/[id]` |
| Create       | `POST`   | `/fhir/R5/ClinicalUseDefinition` |
| Search       | `GET`    | `/fhir/R5/ClinicalUseDefinition?...` |
| History      | `GET`    | `/fhir/R5/ClinicalUseDefinition/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/ClinicalUseDefinition/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier for this issue |
| `type` | `code` | `1..1` | indication | contraindication | interaction | undesirable-effect | warning |
| `category` | `CodeableConcept` | `0..*` | A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy", "Overdose" |
| `subject` | `Reference` | `0..*` | The medication, product, substance, device, procedure etc. for which this is an indication |
| `status` | `CodeableConcept` | `0..1` | Whether this is a current issue or one that has been retired etc |
| `contraindication` | `BackboneElement` | `0..1` | Specifics for when this is a contraindication |
| `indication` | `BackboneElement` | `0..1` | Specifics for when this is an indication |
| `interaction` | `BackboneElement` | `0..1` | Specifics for when this is an interaction |
| `population` | `Reference` | `0..*` | The population group to which this applies |
| `library` | `canonical` | `0..*` | Logic used by the clinical use definition |
| `undesirableEffect` | `BackboneElement` | `0..1` | A possible negative outcome from the use of this treatment |
| `warning` | `BackboneElement` | `0..1` | Critical environmental, health or physical risks or hazards. For example 'Do not operate heavy machinery', 'May cause drowsiness' |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `contraindication` | `token` | The situation that is being documented as contraindicating against this item, as a code |
| `contraindication-reference` | `reference` | The situation that is being documented as contraindicating against this item, as a reference |
| `effect` | `token` | The situation in which the undesirable effect may manifest, as a code |
| `effect-reference` | `reference` | The situation in which the undesirable effect may manifest, as a reference |
| `identifier` | `token` | Business identifier for this issue |
| `indication` | `token` | The situation that is being documented as an indicaton for this item, as a code |
| `indication-reference` | `reference` | The situation that is being documented as an indicaton for this item, as a reference |
| `interaction` | `token` | The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction |
| `product` | `reference` | The medicinal product for which this is a clinical usage issue |
| `status` | `token` | Whether this is a current issue or one that has been retired etc. |
| `subject` | `reference` | The resource for which this is a clinical usage issue |
| `type` | `token` | indication | contraindication | interaction | undesirable-effect | warning |

## Reference

- Official FHIR R5 spec: [`ClinicalUseDefinition`](https://hl7.org/fhir/R5/clinicalusedefinition.html)
- Maturity: **Trial Use 2** (FMM 2).
