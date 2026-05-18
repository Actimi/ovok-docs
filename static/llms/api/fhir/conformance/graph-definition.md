---
title: GraphDefinition
sidebar_label: GraphDefinition
description: "A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition re"
---

# GraphDefinition

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Conformance</span>

A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.

## Endpoints

<ApiBase surface="fhir" path="/GraphDefinition" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/GraphDefinition/[id]` |
| Vread        | `GET`    | `/fhir/R5/GraphDefinition/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/GraphDefinition/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/GraphDefinition/[id]` |
| Delete       | `DELETE` | `/fhir/R5/GraphDefinition/[id]` |
| Create       | `POST`   | `/fhir/R5/GraphDefinition` |
| Search       | `GET`    | `/fhir/R5/GraphDefinition?...` |
| History      | `GET`    | `/fhir/R5/GraphDefinition/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/GraphDefinition/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this graph definition, represented as a URI (globally unique) |
| `identifier` | `Identifier` | `0..*` | Additional identifier for the GraphDefinition (business identifier) |
| `version` | `string` | `0..1` | Business version of the graph definition |
| `versionAlgorithm[x]` | `string` / `Coding` | `0..1` | How to compare versions |
| `name` | `string` | `1..1` | Name for this graph definition (computer friendly) |
| `title` | `string` | `0..1` | Name for this graph definition (human friendly) |
| `status` | `code` | `1..1` | draft | active | retired | unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher/steward (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the graph definition |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for graph definition (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this graph definition is defined |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `copyrightLabel` | `string` | `0..1` | Copyright holder and year(s) |
| `start` | `id` | `0..1` | Starting Node |
| `node` | `BackboneElement` | `0..*` | Potential target for the link |
| `link` | `BackboneElement` | `0..*` | Links this graph makes rules about |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`GraphDefinition` supports the parameters below.

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
| `start` | `token` | Type of resource at which the graph starts |
| `status` | `token` | The current status of the activity definition |
| `url` | `uri` | The uri that identifies the activity definition |
| `version` | `token` | The business version of the activity definition |

## Reference

- Official FHIR R5 spec: [`GraphDefinition`](https://hl7.org/fhir/R5/graphdefinition.html)
- Element bindings & profiles: [`GraphDefinition` profile](https://hl7.org/fhir/R5/graphdefinition-definitions.html)
- Maturity: **Trial Use 2** (FMM 2).
