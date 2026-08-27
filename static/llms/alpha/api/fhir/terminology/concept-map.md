---
title: ConceptMap
sidebar_label: ConceptMap
description: "A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or"
---

# ConceptMap

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Terminology</span>

A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.

## Endpoints

<ApiBase surface="fhir" path="/ConceptMap" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/ConceptMap/[id]` |
| Vread | `GET` | `/fhir/R4/ConceptMap/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/ConceptMap/[id]` |
| Patch | `PATCH` | `/fhir/R4/ConceptMap/[id]` |
| Delete | `DELETE` | `/fhir/R4/ConceptMap/[id]` |
| Create | `POST` | `/fhir/R4/ConceptMap` |
| Search | `GET` | `/fhir/R4/ConceptMap` |
| History | `GET` | `/fhir/R4/ConceptMap/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this concept map, represented as a URI (globally unique) |
| `identifier` | `Identifier` | `0..1` | Additional identifier for the concept map |
| `version` | `string` | `0..1` | Business version of the concept map |
| `name` | `string` | `0..1` | Name for this concept map (computer friendly) |
| `title` | `string` | `0..1` | Name for this concept map (human friendly) |
| `status` | `code` | `1..1` | draft \| active \| retired \| unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the concept map |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for concept map (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this concept map is defined |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `source[x]` | `uri` / `canonical` | `0..1` | The source value set that contains the concepts that are being mapped |
| `target[x]` | `uri` / `canonical` | `0..1` | The target value set which provides context for the mappings |
| `group` | `BackboneElement` | `0..*` | Same source and target systems |

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
| `dependson` | `string` | http://hl7.org/fhir/SearchParameter/ConceptMap-dependson |
| `description` | `string` | http://hl7.org/fhir/SearchParameter/conformance-description |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/conformance-identifier |
| `jurisdiction` | `string` | http://hl7.org/fhir/SearchParameter/conformance-jurisdiction |
| `name` | `string` | http://hl7.org/fhir/SearchParameter/conformance-name |
| `other` | `string` | http://hl7.org/fhir/SearchParameter/ConceptMap-other |
| `product` | `string` | http://hl7.org/fhir/SearchParameter/ConceptMap-product |
| `publisher` | `string` | http://hl7.org/fhir/SearchParameter/conformance-publisher |
| `source` | `string` | http://hl7.org/fhir/SearchParameter/ConceptMap-source |
| `source-code` | `string` | http://hl7.org/fhir/SearchParameter/ConceptMap-source-code |
| `source-system` | `string` | http://hl7.org/fhir/SearchParameter/ConceptMap-source-system |
| `source-uri` | `string` | http://hl7.org/fhir/SearchParameter/ConceptMap-source-uri |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/conformance-status |
| `target` | `string` | http://hl7.org/fhir/SearchParameter/ConceptMap-target |
| `target-code` | `string` | http://hl7.org/fhir/SearchParameter/ConceptMap-target-code |
| `target-system` | `string` | http://hl7.org/fhir/SearchParameter/ConceptMap-target-system |
| `target-uri` | `string` | http://hl7.org/fhir/SearchParameter/ConceptMap-target-uri |
| `title` | `string` | http://hl7.org/fhir/SearchParameter/conformance-title |
| `url` | `string` | http://hl7.org/fhir/SearchParameter/conformance-url |
| `version` | `string` | http://hl7.org/fhir/SearchParameter/conformance-version |

## Reference

- Official FHIR R4 spec: [`ConceptMap`](https://hl7.org/fhir/R4/conceptmap.html)
- Maturity: **Trial Use 3** (FMM 3).
