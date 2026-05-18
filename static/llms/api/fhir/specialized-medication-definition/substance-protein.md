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
| Read         | `GET`    | `/fhir/R5/SubstanceProtein/[id]` |
| Vread        | `GET`    | `/fhir/R5/SubstanceProtein/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/SubstanceProtein/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/SubstanceProtein/[id]` |
| Delete       | `DELETE` | `/fhir/R5/SubstanceProtein/[id]` |
| Create       | `POST`   | `/fhir/R5/SubstanceProtein` |
| Search       | `GET`    | `/fhir/R5/SubstanceProtein?...` |
| History      | `GET`    | `/fhir/R5/SubstanceProtein/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/SubstanceProtein/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `sequenceType` | `CodeableConcept` | `0..1` | The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence |
| `numberOfSubunits` | `integer` | `0..1` | Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable |
| `disulfideLinkage` | `string` | `0..*` | The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions |
| `subunit` | `BackboneElement` | `0..*` | This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`SubstanceProtein` supports the parameters below.

_No resource-specific search parameters defined. Universal parameters still apply._

## Reference

- Official FHIR R5 spec: [`SubstanceProtein`](https://hl7.org/fhir/R5/substanceprotein.html)
- Element bindings & profiles: [`SubstanceProtein` profile](https://hl7.org/fhir/R5/substanceprotein-definitions.html)
- Maturity: **Draft** (FMM 0).
