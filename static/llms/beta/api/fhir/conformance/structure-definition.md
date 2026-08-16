---
title: StructureDefinition
sidebar_label: StructureDefinition
description: "A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and"
---

# StructureDefinition

<span className="fhir-maturity" data-level="5">Normative</span>
<span className="fhir-category">Conformance</span>

A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.

## Endpoints

<ApiBase surface="fhir" path="/StructureDefinition" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/StructureDefinition/[id]` |
| Vread | `GET` | `/fhir/R4/StructureDefinition/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/StructureDefinition/[id]` |
| Patch | `PATCH` | `/fhir/R4/StructureDefinition/[id]` |
| Delete | `DELETE` | `/fhir/R4/StructureDefinition/[id]` |
| Create | `POST` | `/fhir/R4/StructureDefinition` |
| Search | `GET` | `/fhir/R4/StructureDefinition` |
| History | `GET` | `/fhir/R4/StructureDefinition/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `1..1` | Canonical identifier for this structure definition, represented as a URI (globally unique) |
| `identifier` | `Identifier` | `0..*` | Additional identifier for the structure definition |
| `version` | `string` | `0..1` | Business version of the structure definition |
| `name` | `string` | `1..1` | Name for this structure definition (computer friendly) |
| `title` | `string` | `0..1` | Name for this structure definition (human friendly) |
| `status` | `code` | `1..1` | draft \| active \| retired \| unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the structure definition |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for structure definition (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this structure definition is defined |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `keyword` | `Coding` | `0..*` | Assist with indexing and finding |
| `fhirVersion` | `code` | `0..1` | FHIR Version this StructureDefinition targets |
| `mapping` | `BackboneElement` | `0..*` | External specification that the content is mapped to |
| `kind` | `code` | `1..1` | primitive-type \| complex-type \| resource \| logical |
| `abstract` | `boolean` | `1..1` | Whether the structure is abstract |
| `context` | `BackboneElement` | `0..*` | If an extension, where it can be used in instances |
| `contextInvariant` | `string` | `0..*` | FHIRPath invariants - when the extension can be used |
| `type` | `uri` | `1..1` | Type defined or constrained by this structure |
| `baseDefinition` | `canonical` | `0..1` | Definition that this type is constrained/specialized from |
| `derivation` | `code` | `0..1` | specialization \| constraint - How relates to base definition |
| `snapshot` | `BackboneElement` | `0..1` | Snapshot view of the structure |
| `differential` | `BackboneElement` | `0..1` | Differential view of the structure |

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
| `abstract` | `string` | http://hl7.org/fhir/SearchParameter/StructureDefinition-abstract |
| `base` | `string` | http://hl7.org/fhir/SearchParameter/StructureDefinition-base |
| `base-path` | `string` | http://hl7.org/fhir/SearchParameter/StructureDefinition-base-path |
| `context` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context |
| `context-quantity` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-quantity |
| `context-type` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type |
| `context-type-quantity` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity |
| `context-type-value` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type-value |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/conformance-date |
| `derivation` | `string` | http://hl7.org/fhir/SearchParameter/StructureDefinition-derivation |
| `description` | `string` | http://hl7.org/fhir/SearchParameter/conformance-description |
| `experimental` | `string` | http://hl7.org/fhir/SearchParameter/StructureDefinition-experimental |
| `ext-context` | `string` | http://hl7.org/fhir/SearchParameter/StructureDefinition-ext-context |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/conformance-identifier |
| `jurisdiction` | `string` | http://hl7.org/fhir/SearchParameter/conformance-jurisdiction |
| `keyword` | `string` | http://hl7.org/fhir/SearchParameter/StructureDefinition-keyword |
| `kind` | `string` | http://hl7.org/fhir/SearchParameter/StructureDefinition-kind |
| `name` | `string` | http://hl7.org/fhir/SearchParameter/conformance-name |
| `path` | `string` | http://hl7.org/fhir/SearchParameter/StructureDefinition-path |
| `publisher` | `string` | http://hl7.org/fhir/SearchParameter/conformance-publisher |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/conformance-status |
| `title` | `string` | http://hl7.org/fhir/SearchParameter/conformance-title |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/StructureDefinition-type |
| `url` | `string` | http://hl7.org/fhir/SearchParameter/conformance-url |
| `valueset` | `string` | http://hl7.org/fhir/SearchParameter/StructureDefinition-valueset |
| `version` | `string` | http://hl7.org/fhir/SearchParameter/conformance-version |

## Reference

- Official FHIR R4 spec: [`StructureDefinition`](https://hl7.org/fhir/R4/structuredefinition.html)
- Maturity: **Normative** (FMM 5).
