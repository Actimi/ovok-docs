---
title: StructureMap
sidebar_label: StructureMap
description: "A Map of relationships between 2 structures that can be used to transform data."
---

# StructureMap

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Conformance</span>

A Map of relationships between 2 structures that can be used to transform data.

## Endpoints

<ApiBase surface="fhir" path="/StructureMap" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/StructureMap/[id]` |
| Vread        | `GET`    | `/fhir/R5/StructureMap/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/StructureMap/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/StructureMap/[id]` |
| Delete       | `DELETE` | `/fhir/R5/StructureMap/[id]` |
| Create       | `POST`   | `/fhir/R5/StructureMap` |
| Search       | `GET`    | `/fhir/R5/StructureMap?...` |
| History      | `GET`    | `/fhir/R5/StructureMap/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/StructureMap/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `1..1` | Canonical identifier for this structure map, represented as a URI (globally unique) |
| `identifier` | `Identifier` | `0..*` | Additional identifier for the structure map |
| `version` | `string` | `0..1` | Business version of the structure map |
| `versionAlgorithm[x]` | `string` / `Coding` | `0..1` | How to compare versions |
| `name` | `string` | `1..1` | Name for this structure map (computer friendly) |
| `title` | `string` | `0..1` | Name for this structure map (human friendly) |
| `status` | `code` | `1..1` | draft | active | retired | unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher/steward (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the structure map |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for structure map (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this structure map is defined |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `copyrightLabel` | `string` | `0..1` | Copyright holder and year(s) |
| `structure` | `BackboneElement` | `0..*` | Structure Definition used by this map |
| `import` | `canonical` | `0..*` | Other maps used by this map (canonical URLs) |
| `const` | `BackboneElement` | `0..*` | Definition of the constant value used in the map rules |
| `group` | `BackboneElement` | `1..*` | Named sections for reader convenience |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `context` | `token` | A use context assigned to the activity definition |
| `context-quantity` | `quantity` | A quantity- or range-valued use context assigned to the activity definition |
| `context-type` | `token` | A type of use context assigned to the activity definition |
| `context-type-quantity` | `composite` | A use context type and quantity- or range-based value assigned to the activity definition |
| `context-type-value` | `composite` | A use context type and value assigned to the activity definition |
| `date` | `date` | The activity definition publication date |
| `description` | `string` | The description of the activity definition |
| `identifier` | `token` | External identifier for the activity definition |
| `jurisdiction` | `token` | Intended jurisdiction for the activity definition |
| `name` | `string` | Computationally friendly name of the activity definition |
| `publisher` | `string` | Name of the publisher of the activity definition |
| `status` | `token` | The current status of the activity definition |
| `title` | `string` | The human-friendly name of the activity definition |
| `url` | `uri` | The uri that identifies the activity definition |
| `version` | `token` | The business version of the activity definition |

## Reference

- Official FHIR R5 spec: [`StructureMap`](https://hl7.org/fhir/R5/structuremap.html)
- Maturity: **Trial Use 4** (FMM 4).
