---
title: SubstanceNucleicAcid
sidebar_label: SubstanceNucleicAcid
description: "Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. T"
---

# SubstanceNucleicAcid

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Specialized — Medication Definition</span>

Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction.

## Endpoints

<ApiBase surface="fhir" path="/SubstanceNucleicAcid" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/SubstanceNucleicAcid/[id]` |
| Vread        | `GET`    | `/fhir/R5/SubstanceNucleicAcid/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/SubstanceNucleicAcid/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/SubstanceNucleicAcid/[id]` |
| Delete       | `DELETE` | `/fhir/R5/SubstanceNucleicAcid/[id]` |
| Create       | `POST`   | `/fhir/R5/SubstanceNucleicAcid` |
| Search       | `GET`    | `/fhir/R5/SubstanceNucleicAcid?...` |
| History      | `GET`    | `/fhir/R5/SubstanceNucleicAcid/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/SubstanceNucleicAcid/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `sequenceType` | `CodeableConcept` | `0..1` | The type of the sequence shall be specified based on a controlled vocabulary |
| `numberOfSubunits` | `integer` | `0..1` | The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit |
| `areaOfHybridisation` | `string` | `0..1` | The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue” |
| `oligoNucleotideType` | `CodeableConcept` | `0..1` | (TBC) |
| `subunit` | `BackboneElement` | `0..*` | Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`SubstanceNucleicAcid` supports the parameters below.

_No resource-specific search parameters defined. Universal parameters still apply._

## Reference

- Official FHIR R5 spec: [`SubstanceNucleicAcid`](https://hl7.org/fhir/R5/substancenucleicacid.html)
- Element bindings & profiles: [`SubstanceNucleicAcid` profile](https://hl7.org/fhir/R5/substancenucleicacid-definitions.html)
- Maturity: **Draft** (FMM 0).
