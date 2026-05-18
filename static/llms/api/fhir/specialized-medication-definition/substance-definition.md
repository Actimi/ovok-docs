---
title: SubstanceDefinition
sidebar_label: SubstanceDefinition
description: "The detailed description of a substance, typically at a level beyond what is used for prescribing."
---

# SubstanceDefinition

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Specialized — Medication Definition</span>

The detailed description of a substance, typically at a level beyond what is used for prescribing.

## Endpoints

<ApiBase surface="fhir" path="/SubstanceDefinition" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/SubstanceDefinition/[id]` |
| Vread        | `GET`    | `/fhir/R5/SubstanceDefinition/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/SubstanceDefinition/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/SubstanceDefinition/[id]` |
| Delete       | `DELETE` | `/fhir/R5/SubstanceDefinition/[id]` |
| Create       | `POST`   | `/fhir/R5/SubstanceDefinition` |
| Search       | `GET`    | `/fhir/R5/SubstanceDefinition?...` |
| History      | `GET`    | `/fhir/R5/SubstanceDefinition/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/SubstanceDefinition/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Identifier by which this substance is known |
| `version` | `string` | `0..1` | A business level version identifier of the substance |
| `status` | `CodeableConcept` | `0..1` | Status of substance within the catalogue e.g. active, retired |
| `classification` | `CodeableConcept` | `0..*` | A categorization, high level e.g. polymer or nucleic acid, or food, chemical, biological, or lower e.g. polymer linear or branch chain, or type of impurity |
| `domain` | `CodeableConcept` | `0..1` | If the substance applies to human or veterinary use |
| `grade` | `CodeableConcept` | `0..*` | The quality standard, established benchmark, to which substance complies (e.g. USP/NF, BP) |
| `description` | `markdown` | `0..1` | Textual description of the substance |
| `informationSource` | `Reference` | `0..*` | Supporting literature |
| `note` | `Annotation` | `0..*` | Textual comment about the substance's catalogue or registry record |
| `manufacturer` | `Reference` | `0..*` | The entity that creates, makes, produces or fabricates the substance |
| `supplier` | `Reference` | `0..*` | An entity that is the source for the substance. It may be different from the manufacturer |
| `moiety` | `BackboneElement` | `0..*` | Moiety, for structural modifications |
| `characterization` | `BackboneElement` | `0..*` | General specifications for this substance |
| `property` | `BackboneElement` | `0..*` | General specifications for this substance |
| `referenceInformation` | `Reference` | `0..1` | General information detailing this substance |
| `molecularWeight` | `BackboneElement` | `0..*` | The average mass of a molecule of a compound |
| `structure` | `BackboneElement` | `0..1` | Structural information |
| `code` | `BackboneElement` | `0..*` | Codes associated with the substance |
| `name` | `BackboneElement` | `0..*` | Names applicable to this substance |
| `relationship` | `BackboneElement` | `0..*` | A link between this substance and another |
| `nucleicAcid` | `Reference` | `0..1` | Data items specific to nucleic acids |
| `polymer` | `Reference` | `0..1` | Data items specific to polymers |
| `protein` | `Reference` | `0..1` | Data items specific to proteins |
| `sourceMaterial` | `BackboneElement` | `0..1` | Material or taxonomic/anatomical source |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`SubstanceDefinition` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `classification` | `token` | High or low level categorization, e.g. polymer vs. nucleic acid or linear vs. branch chain |
| `code` | `token` | The specific code |
| `domain` | `token` | If the substance applies to only human or veterinary use |
| `identifier` | `token` | Identifier by which this substance is known |
| `name` | `string` | The actual name |

## Reference

- Official FHIR R5 spec: [`SubstanceDefinition`](https://hl7.org/fhir/R5/substancedefinition.html)
- Element bindings & profiles: [`SubstanceDefinition` profile](https://hl7.org/fhir/R5/substancedefinition-definitions.html)
- Maturity: **Trial Use 1** (FMM 1).
