---
title: SubstanceProtein
sidebar_label: SubstanceProtein
description: "A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined"
---

# SubstanceProtein

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Specialized — Medication Definition</span>

A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators.

## Endpoints

<ApiBase surface="fhir" path="/SubstanceProtein" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/SubstanceProtein/[id]` |
| Vread | `GET` | `/fhir/R4/SubstanceProtein/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/SubstanceProtein/[id]` |
| Patch | `PATCH` | `/fhir/R4/SubstanceProtein/[id]` |
| Delete | `DELETE` | `/fhir/R4/SubstanceProtein/[id]` |
| Create | `POST` | `/fhir/R4/SubstanceProtein` |
| Search | `GET` | `/fhir/R4/SubstanceProtein` |
| History | `GET` | `/fhir/R4/SubstanceProtein/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `sequenceType` | `CodeableConcept` | `0..1` | The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence |
| `numberOfSubunits` | `integer` | `0..1` | Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable |
| `disulfideLinkage` | `string` | `0..*` | The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions |
| `subunit` | `BackboneElement` | `0..*` | This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times |

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

- Official FHIR R4 spec: [`SubstanceProtein`](https://hl7.org/fhir/R4/substanceprotein.html)
- Maturity: **Draft** (FMM 0).
