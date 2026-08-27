---
title: SubstanceSourceMaterial
sidebar_label: SubstanceSourceMaterial
description: "Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to"
---

# SubstanceSourceMaterial

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Specialized — Medication Definition</span>

Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.

## Endpoints

<ApiBase surface="fhir" path="/SubstanceSourceMaterial" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/SubstanceSourceMaterial/[id]` |
| Vread | `GET` | `/fhir/R4/SubstanceSourceMaterial/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/SubstanceSourceMaterial/[id]` |
| Patch | `PATCH` | `/fhir/R4/SubstanceSourceMaterial/[id]` |
| Delete | `DELETE` | `/fhir/R4/SubstanceSourceMaterial/[id]` |
| Create | `POST` | `/fhir/R4/SubstanceSourceMaterial` |
| Search | `GET` | `/fhir/R4/SubstanceSourceMaterial` |
| History | `GET` | `/fhir/R4/SubstanceSourceMaterial/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `sourceMaterialClass` | `CodeableConcept` | `0..1` | General high level classification of the source material specific to the origin of the material |
| `sourceMaterialType` | `CodeableConcept` | `0..1` | The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent |
| `sourceMaterialState` | `CodeableConcept` | `0..1` | The state of the source material when extracted |
| `organismId` | `Identifier` | `0..1` | The unique identifier associated with the source material parent organism shall be specified |
| `organismName` | `string` | `0..1` | The organism accepted Scientific name shall be provided based on the organism taxonomy |
| `parentSubstanceId` | `Identifier` | `0..*` | The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant) |
| `parentSubstanceName` | `string` | `0..*` | The parent substance of the Herbal Drug, or Herbal preparation |
| `countryOfOrigin` | `CodeableConcept` | `0..*` | The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate |
| `geographicalLocation` | `string` | `0..*` | The place/region where the plant is harvested or the places/regions where the animal source material has its habitat |
| `developmentStage` | `CodeableConcept` | `0..1` | Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum) |
| `fractionDescription` | `BackboneElement` | `0..*` | Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels |
| `organism` | `BackboneElement` | `0..1` | This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf |
| `partDescription` | `BackboneElement` | `0..*` | To do |

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

- Official FHIR R4 spec: [`SubstanceSourceMaterial`](https://hl7.org/fhir/R4/substancesourcematerial.html)
- Maturity: **Draft** (FMM 0).
