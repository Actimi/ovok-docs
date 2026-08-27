---
title: GraphDefinition
sidebar_label: GraphDefinition
description: "A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition re"
---

# GraphDefinition

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Conformance</span>

A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.

## Endpoints

<ApiBase surface="fhir" path="/GraphDefinition" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/GraphDefinition/[id]` |
| Vread | `GET` | `/fhir/R4/GraphDefinition/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/GraphDefinition/[id]` |
| Patch | `PATCH` | `/fhir/R4/GraphDefinition/[id]` |
| Delete | `DELETE` | `/fhir/R4/GraphDefinition/[id]` |
| Create | `POST` | `/fhir/R4/GraphDefinition` |
| Search | `GET` | `/fhir/R4/GraphDefinition` |
| History | `GET` | `/fhir/R4/GraphDefinition/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this graph definition, represented as a URI (globally unique) |
| `version` | `string` | `0..1` | Business version of the graph definition |
| `name` | `string` | `1..1` | Name for this graph definition (computer friendly) |
| `status` | `code` | `1..1` | draft \| active \| retired \| unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the graph definition |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for graph definition (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this graph definition is defined |
| `start` | `code` | `1..1` | Type of resource at which the graph starts |
| `profile` | `canonical` | `0..1` | Profile on base resource |
| `link` | `BackboneElement` | `0..*` | Links this graph makes rules about |

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
| `context` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context |
| `context-quantity` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-quantity |
| `context-type` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type |
| `context-type-quantity` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity |
| `context-type-value` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type-value |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/conformance-date |
| `description` | `string` | http://hl7.org/fhir/SearchParameter/conformance-description |
| `jurisdiction` | `string` | http://hl7.org/fhir/SearchParameter/conformance-jurisdiction |
| `name` | `string` | http://hl7.org/fhir/SearchParameter/conformance-name |
| `publisher` | `string` | http://hl7.org/fhir/SearchParameter/conformance-publisher |
| `start` | `string` | http://hl7.org/fhir/SearchParameter/GraphDefinition-start |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/conformance-status |
| `url` | `string` | http://hl7.org/fhir/SearchParameter/conformance-url |
| `version` | `string` | http://hl7.org/fhir/SearchParameter/conformance-version |

## Reference

- Official FHIR R4 spec: [`GraphDefinition`](https://hl7.org/fhir/R4/graphdefinition.html)
- Maturity: **Trial Use 1** (FMM 1).
