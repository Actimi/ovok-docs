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
| Read         | `GET`    | `/fhir/R5/OperationDefinition/[id]` |
| Vread        | `GET`    | `/fhir/R5/OperationDefinition/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/OperationDefinition/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/OperationDefinition/[id]` |
| Delete       | `DELETE` | `/fhir/R5/OperationDefinition/[id]` |
| Create       | `POST`   | `/fhir/R5/OperationDefinition` |
| Search       | `GET`    | `/fhir/R5/OperationDefinition?...` |
| History      | `GET`    | `/fhir/R5/OperationDefinition/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/OperationDefinition/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this operation definition, represented as an absolute URI (globally unique) |
| `identifier` | `Identifier` | `0..*` | Additional identifier for the implementation guide (business identifier) |
| `version` | `string` | `0..1` | Business version of the operation definition |
| `versionAlgorithm[x]` | `string` / `Coding` | `0..1` | How to compare versions |
| `name` | `string` | `1..1` | Name for this operation definition (computer friendly) |
| `title` | `string` | `0..1` | Name for this operation definition (human friendly) |
| `status` | `code` | `1..1` | draft | active | retired | unknown _modifier_ |
| `kind` | `code` | `1..1` | operation | query |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher/steward (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the operation definition |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for operation definition (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this operation definition is defined |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `copyrightLabel` | `string` | `0..1` | Copyright holder and year(s) |
| `affectsState` | `boolean` | `0..1` | Whether content is changed by the operation |
| `code` | `code` | `1..1` | Recommended name for operation in search url |
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

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`OperationDefinition` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `base` | `reference` | Marks this as a profile of the base |
| `code` | `token` | Name used to invoke the operation |
| `context` | `token` | A use context assigned to the activity definition |
| `context-quantity` | `quantity` | A quantity- or range-valued use context assigned to the activity definition |
| `context-type` | `token` | A type of use context assigned to the activity definition |
| `context-type-quantity` | `composite` | A use context type and quantity- or range-based value assigned to the activity definition |
| `context-type-value` | `composite` | A use context type and value assigned to the activity definition |
| `date` | `date` | The activity definition publication date |
| `description` | `string` | The description of the activity definition |
| `identifier` | `token` | External identifier for the activity definition |
| `input-profile` | `reference` | Validation information for in parameters |
| `instance` | `token` | Invoke on an instance? |
| `jurisdiction` | `token` | Intended jurisdiction for the activity definition |
| `kind` | `token` | operation | query |
| `name` | `string` | Computationally friendly name of the activity definition |
| `output-profile` | `reference` | Validation information for out parameters |
| `publisher` | `string` | Name of the publisher of the activity definition |
| `status` | `token` | The current status of the activity definition |
| `system` | `token` | Invoke at the system level? |
| `title` | `string` | The human-friendly name of the activity definition |
| `type` | `token` | Invoke at the type level? |
| `url` | `uri` | The uri that identifies the activity definition |
| `version` | `token` | The business version of the activity definition |

## Reference

- Official FHIR R5 spec: [`OperationDefinition`](https://hl7.org/fhir/R5/operationdefinition.html)
- Element bindings & profiles: [`OperationDefinition` profile](https://hl7.org/fhir/R5/operationdefinition-definitions.html)
- Maturity: **Normative** (FMM 5).
