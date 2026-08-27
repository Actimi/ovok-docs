---
title: CompartmentDefinition
sidebar_label: CompartmentDefinition
description: "A compartment definition that defines how resources are accessed on a server."
---

# CompartmentDefinition

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Conformance</span>

A compartment definition that defines how resources are accessed on a server.

## Endpoints

<ApiBase surface="fhir" path="/CompartmentDefinition" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/CompartmentDefinition/[id]` |
| Vread | `GET` | `/fhir/R4/CompartmentDefinition/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/CompartmentDefinition/[id]` |
| Patch | `PATCH` | `/fhir/R4/CompartmentDefinition/[id]` |
| Delete | `DELETE` | `/fhir/R4/CompartmentDefinition/[id]` |
| Create | `POST` | `/fhir/R4/CompartmentDefinition` |
| Search | `GET` | `/fhir/R4/CompartmentDefinition` |
| History | `GET` | `/fhir/R4/CompartmentDefinition/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `1..1` | Canonical identifier for this compartment definition, represented as a URI (globally unique) |
| `version` | `string` | `0..1` | Business version of the compartment definition |
| `name` | `string` | `1..1` | Name for this compartment definition (computer friendly) |
| `status` | `code` | `1..1` | draft \| active \| retired \| unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the compartment definition |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `purpose` | `markdown` | `0..1` | Why this compartment definition is defined |
| `code` | `code` | `1..1` | Patient \| Encounter \| RelatedPerson \| Practitioner \| Device |
| `search` | `boolean` | `1..1` | Whether the search syntax is supported |
| `resource` | `BackboneElement` | `0..*` | How a resource is related to the compartment |

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
| `code` | `string` | http://hl7.org/fhir/SearchParameter/CompartmentDefinition-code |
| `context` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context |
| `context-quantity` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-quantity |
| `context-type` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type |
| `context-type-quantity` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity |
| `context-type-value` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type-value |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/conformance-date |
| `description` | `string` | http://hl7.org/fhir/SearchParameter/conformance-description |
| `name` | `string` | http://hl7.org/fhir/SearchParameter/conformance-name |
| `publisher` | `string` | http://hl7.org/fhir/SearchParameter/conformance-publisher |
| `resource` | `string` | http://hl7.org/fhir/SearchParameter/CompartmentDefinition-resource |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/conformance-status |
| `url` | `string` | http://hl7.org/fhir/SearchParameter/conformance-url |
| `version` | `string` | http://hl7.org/fhir/SearchParameter/conformance-version |

## Reference

- Official FHIR R4 spec: [`CompartmentDefinition`](https://hl7.org/fhir/R4/compartmentdefinition.html)
- Maturity: **Trial Use 1** (FMM 1).
