---
title: MedicinalProductDefinition
sidebar_label: MedicinalProductDefinition
description: "Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use, drug catalogs, to support prescribing, adver"
---

# MedicinalProductDefinition

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Specialized — Medication Definition</span>

Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use, drug catalogs, to support prescribing, adverse events management etc.).

## Endpoints

<ApiBase surface="fhir" path="/MedicinalProductDefinition" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/MedicinalProductDefinition/[id]` |
| Vread        | `GET`    | `/fhir/R5/MedicinalProductDefinition/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/MedicinalProductDefinition/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/MedicinalProductDefinition/[id]` |
| Delete       | `DELETE` | `/fhir/R5/MedicinalProductDefinition/[id]` |
| Create       | `POST`   | `/fhir/R5/MedicinalProductDefinition` |
| Search       | `GET`    | `/fhir/R5/MedicinalProductDefinition?...` |
| History      | `GET`    | `/fhir/R5/MedicinalProductDefinition/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/MedicinalProductDefinition/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier for this product. Could be an MPID |
| `type` | `CodeableConcept` | `0..1` | Regulatory type, e.g. Investigational or Authorized |
| `domain` | `CodeableConcept` | `0..1` | If this medicine applies to human or veterinary uses |
| `version` | `string` | `0..1` | A business identifier relating to a specific version of the product |
| `status` | `CodeableConcept` | `0..1` | The status within the lifecycle of this product record _modifier_ |
| `statusDate` | `dateTime` | `0..1` | The date at which the given status became applicable |
| `description` | `markdown` | `0..1` | General description of this product |
| `combinedPharmaceuticalDoseForm` | `CodeableConcept` | `0..1` | The dose form for a single part product, or combined form of a multiple part product |
| `route` | `CodeableConcept` | `0..*` | The path by which the product is taken into or makes contact with the body |
| `indication` | `markdown` | `0..1` | Description of indication(s) for this product, used when structured indications are not required |
| `legalStatusOfSupply` | `CodeableConcept` | `0..1` | The legal status of supply of the medicinal product as classified by the regulator |
| `additionalMonitoringIndicator` | `CodeableConcept` | `0..1` | Whether the Medicinal Product is subject to additional monitoring for regulatory reasons |
| `specialMeasures` | `CodeableConcept` | `0..*` | Whether the Medicinal Product is subject to special measures for regulatory reasons |
| `pediatricUseIndicator` | `CodeableConcept` | `0..1` | If authorised for use in children |
| `classification` | `CodeableConcept` | `0..*` | Allows the product to be classified by various systems |
| `marketingStatus` | `MarketingStatus` | `0..*` | Marketing status of the medicinal product, in contrast to marketing authorization |
| `packagedMedicinalProduct` | `CodeableConcept` | `0..*` | Package type for the product |
| `comprisedOf` | `Reference` | `0..*` | Types of medicinal manufactured items and/or devices that this product consists of, such as tablets, capsule, or syringes |
| `ingredient` | `CodeableConcept` | `0..*` | The ingredients of this medicinal product - when not detailed in other resources |
| `impurity` | `CodeableReference` | `0..*` | Any component of the drug product which is not the chemical entity defined as the drug substance, or an excipient in the drug product |
| `attachedDocument` | `Reference` | `0..*` | Additional documentation about the medicinal product |
| `masterFile` | `Reference` | `0..*` | A master file for the medicinal product (e.g. Pharmacovigilance System Master File) |
| `contact` | `BackboneElement` | `0..*` | A product specific contact, person (in a role), or an organization |
| `clinicalTrial` | `Reference` | `0..*` | Clinical trials or studies that this product is involved in |
| `code` | `Coding` | `0..*` | A code that this product is known by, within some formal terminology |
| `name` | `BackboneElement` | `1..*` | The product's name, including full name and possibly coded parts |
| `crossReference` | `BackboneElement` | `0..*` | Reference to another product, e.g. for linking authorised to investigational product |
| `operation` | `BackboneElement` | `0..*` | A manufacturing or administrative process for the medicinal product |
| `characteristic` | `BackboneElement` | `0..*` | Key product features such as "sugar free", "modified release" |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`MedicinalProductDefinition` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `characteristic` | `token` | Allows the key product features to be recorded, such as "sugar free", "modified release", "parallel import" |
| `characteristic-type` | `token` | A category for the characteristic |
| `contact` | `reference` | A product specific contact, person (in a role), or an organization |
| `domain` | `token` | If this medicine applies to human or veterinary uses |
| `identifier` | `token` | Business identifier for this product. Could be an MPID |
| `ingredient` | `token` | An ingredient of this product |
| `master-file` | `reference` | A master file for to the medicinal product (e.g. Pharmacovigilance System Master File) |
| `name` | `string` | The full product name |
| `name-language` | `token` | Language code for this name |
| `product-classification` | `token` | Allows the product to be classified by various systems |
| `status` | `token` | The status within the lifecycle of this product record. A high-level status, this is not intended to duplicate details carried elsewhere such as legal status, or authorization status |
| `type` | `token` | Regulatory type, e.g. Investigational or Authorized |

## Reference

- Official FHIR R5 spec: [`MedicinalProductDefinition`](https://hl7.org/fhir/R5/medicinalproductdefinition.html)
- Element bindings & profiles: [`MedicinalProductDefinition` profile](https://hl7.org/fhir/R5/medicinalproductdefinition-definitions.html)
- Maturity: **Trial Use 3** (FMM 3).
