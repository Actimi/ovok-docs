---
title: OperationDefinition
sidebar_label: OperationDefinition
description: "A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction)."
---

# OperationDefinition

<span className="fhir-maturity" data-level="5">Normative</span>
<span className="fhir-category">Conformance</span>

A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).

## Endpoints

<ApiBase surface="fhir" path="/OperationDefinition" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/OperationDefinition/[id]` |
| Vread | `GET` | `/fhir/R4/OperationDefinition/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/OperationDefinition/[id]` |
| Patch | `PATCH` | `/fhir/R4/OperationDefinition/[id]` |
| Delete | `DELETE` | `/fhir/R4/OperationDefinition/[id]` |
| Create | `POST` | `/fhir/R4/OperationDefinition` |
| Search | `GET` | `/fhir/R4/OperationDefinition` |
| History | `GET` | `/fhir/R4/OperationDefinition/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this operation definition, represented as a URI (globally unique) |
| `version` | `string` | `0..1` | Business version of the operation definition |
| `name` | `string` | `1..1` | Name for this operation definition (computer friendly) |
| `title` | `string` | `0..1` | Name for this operation definition (human friendly) |
| `status` | `code` | `1..1` | draft \| active \| retired \| unknown _modifier_ |
| `kind` | `code` | `1..1` | operation \| query |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the operation definition |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for operation definition (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this operation definition is defined |
| `affectsState` | `boolean` | `0..1` | Whether content is changed by the operation |
| `code` | `code` | `1..1` | Name used to invoke the operation |
| `comment` | `markdown` | `0..1` | Additional information about use |
| `base` | `canonical` | `0..1` | Marks this as a profile of the base |
| `resource` | `code` | `0..*` | Types this operation applies to |
| `system` | `boolean` | `1..1` | Invoke at the system level? |
| `type` | `boolean` | `1..1` | Invoke at the type level? |
| `instance` | `boolean` | `1..1` | Invoke on an instance? |
| `inputProfile` | `canonical` | `0..1` | Validation information for in parameters |
| `outputProfile` | `canonical` | `0..1` | Validation information for out parameters |
| `parameter` | `BackboneElement` | `0..*` | Parameters for the operation/query |
| `overload` | `BackboneElement` | `0..*` | Define overloaded variants for when  generating code |

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
| `base` | `string` | http://hl7.org/fhir/SearchParameter/OperationDefinition-base |
| `code` | `string` | http://hl7.org/fhir/SearchParameter/OperationDefinition-code |
| `context` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context |
| `context-quantity` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-quantity |
| `context-type` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type |
| `context-type-quantity` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity |
| `context-type-value` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type-value |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/conformance-date |
| `description` | `string` | http://hl7.org/fhir/SearchParameter/conformance-description |
| `input-profile` | `string` | http://hl7.org/fhir/SearchParameter/OperationDefinition-input-profile |
| `instance` | `string` | http://hl7.org/fhir/SearchParameter/OperationDefinition-instance |
| `jurisdiction` | `string` | http://hl7.org/fhir/SearchParameter/conformance-jurisdiction |
| `kind` | `string` | http://hl7.org/fhir/SearchParameter/OperationDefinition-kind |
| `name` | `string` | http://hl7.org/fhir/SearchParameter/conformance-name |
| `output-profile` | `string` | http://hl7.org/fhir/SearchParameter/OperationDefinition-output-profile |
| `publisher` | `string` | http://hl7.org/fhir/SearchParameter/conformance-publisher |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/conformance-status |
| `system` | `string` | http://hl7.org/fhir/SearchParameter/OperationDefinition-system |
| `title` | `string` | http://hl7.org/fhir/SearchParameter/conformance-title |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/OperationDefinition-type |
| `url` | `string` | http://hl7.org/fhir/SearchParameter/conformance-url |
| `version` | `string` | http://hl7.org/fhir/SearchParameter/conformance-version |

## Reference

- Official FHIR R4 spec: [`OperationDefinition`](https://hl7.org/fhir/R4/operationdefinition.html)
- Maturity: **Normative** (FMM 5).
