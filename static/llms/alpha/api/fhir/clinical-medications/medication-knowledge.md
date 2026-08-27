---
title: MedicationKnowledge
sidebar_label: MedicationKnowledge
description: "Information about a medication that is used to support knowledge."
---

# MedicationKnowledge

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Clinical — Medications</span>

Information about a medication that is used to support knowledge.

## Endpoints

<ApiBase surface="fhir" path="/MedicationKnowledge" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/MedicationKnowledge/[id]` |
| Vread | `GET` | `/fhir/R4/MedicationKnowledge/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/MedicationKnowledge/[id]` |
| Patch | `PATCH` | `/fhir/R4/MedicationKnowledge/[id]` |
| Delete | `DELETE` | `/fhir/R4/MedicationKnowledge/[id]` |
| Create | `POST` | `/fhir/R4/MedicationKnowledge` |
| Search | `GET` | `/fhir/R4/MedicationKnowledge` |
| History | `GET` | `/fhir/R4/MedicationKnowledge/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `code` | `CodeableConcept` | `0..1` | Code that identifies this medication |
| `status` | `code` | `0..1` | active \| inactive \| entered-in-error _modifier_ |
| `manufacturer` | `Reference` | `0..1` | Manufacturer of the item |
| `doseForm` | `CodeableConcept` | `0..1` | powder \| tablets \| capsule + |
| `amount` | `Quantity` | `0..1` | Amount of drug in package |
| `synonym` | `string` | `0..*` | Additional names for a medication |
| `relatedMedicationKnowledge` | `BackboneElement` | `0..*` | Associated or related medication information |
| `associatedMedication` | `Reference` | `0..*` | A medication resource that is associated with this medication |
| `productType` | `CodeableConcept` | `0..*` | Category of the medication or product |
| `monograph` | `BackboneElement` | `0..*` | Associated documentation about the medication |
| `ingredient` | `BackboneElement` | `0..*` | Active or inactive ingredient |
| `preparationInstruction` | `markdown` | `0..1` | The instructions for preparing the medication |
| `intendedRoute` | `CodeableConcept` | `0..*` | The intended or approved route of administration |
| `cost` | `BackboneElement` | `0..*` | The pricing of the medication |
| `monitoringProgram` | `BackboneElement` | `0..*` | Program under which a medication is reviewed |
| `administrationGuidelines` | `BackboneElement` | `0..*` | Guidelines for administration of the medication |
| `medicineClassification` | `BackboneElement` | `0..*` | Categorization of the medication within a formulary or classification system |
| `packaging` | `BackboneElement` | `0..1` | Details about packaged medications |
| `drugCharacteristic` | `BackboneElement` | `0..*` | Specifies descriptive properties of the medicine |
| `contraindication` | `Reference` | `0..*` | Potential clinical issue with or between medication(s) |
| `regulatory` | `BackboneElement` | `0..*` | Regulatory information about a medication |
| `kinetics` | `BackboneElement` | `0..*` | The time course of drug absorption, distribution, metabolism and excretion of a medication from the body |

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
| `classification` | `string` | http://hl7.org/fhir/SearchParameter/MedicationKnowledge-classification |
| `classification-type` | `string` | http://hl7.org/fhir/SearchParameter/MedicationKnowledge-classification-type |
| `code` | `string` | http://hl7.org/fhir/SearchParameter/MedicationKnowledge-code |
| `doseform` | `string` | http://hl7.org/fhir/SearchParameter/MedicationKnowledge-doseform |
| `ingredient` | `string` | http://hl7.org/fhir/SearchParameter/MedicationKnowledge-ingredient |
| `ingredient-code` | `string` | http://hl7.org/fhir/SearchParameter/MedicationKnowledge-ingredient-code |
| `manufacturer` | `string` | http://hl7.org/fhir/SearchParameter/MedicationKnowledge-manufacturer |
| `monitoring-program-name` | `string` | http://hl7.org/fhir/SearchParameter/MedicationKnowledge-monitoring-program-name |
| `monitoring-program-type` | `string` | http://hl7.org/fhir/SearchParameter/MedicationKnowledge-monitoring-program-type |
| `monograph` | `string` | http://hl7.org/fhir/SearchParameter/MedicationKnowledge-monograph |
| `monograph-type` | `string` | http://hl7.org/fhir/SearchParameter/MedicationKnowledge-monograph-type |
| `source-cost` | `string` | http://hl7.org/fhir/SearchParameter/MedicationKnowledge-source-cost |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/MedicationKnowledge-status |

## Reference

- Official FHIR R4 spec: [`MedicationKnowledge`](https://hl7.org/fhir/R4/medicationknowledge.html)
- Maturity: **Draft** (FMM 0).
