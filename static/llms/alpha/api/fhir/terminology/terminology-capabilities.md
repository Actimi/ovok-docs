---
title: TerminologyCapabilities
sidebar_label: TerminologyCapabilities
description: "A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server fun"
---

# TerminologyCapabilities

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Terminology</span>

A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.

## Endpoints

<ApiBase surface="fhir" path="/TerminologyCapabilities" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/TerminologyCapabilities/[id]` |
| Vread        | `GET`    | `/fhir/R5/TerminologyCapabilities/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/TerminologyCapabilities/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/TerminologyCapabilities/[id]` |
| Delete       | `DELETE` | `/fhir/R5/TerminologyCapabilities/[id]` |
| Create       | `POST`   | `/fhir/R5/TerminologyCapabilities` |
| Search       | `GET`    | `/fhir/R5/TerminologyCapabilities?...` |
| History      | `GET`    | `/fhir/R5/TerminologyCapabilities/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/TerminologyCapabilities/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this terminology capabilities, represented as a URI (globally unique) |
| `identifier` | `Identifier` | `0..*` | Additional identifier for the terminology capabilities |
| `version` | `string` | `0..1` | Business version of the terminology capabilities |
| `versionAlgorithm[x]` | `string` / `Coding` | `0..1` | How to compare versions |
| `name` | `string` | `0..1` | Name for this terminology capabilities (computer friendly) |
| `title` | `string` | `0..1` | Name for this terminology capabilities (human friendly) |
| `status` | `code` | `1..1` | draft | active | retired | unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `1..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher/steward (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the terminology capabilities |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for terminology capabilities (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this terminology capabilities is defined |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `copyrightLabel` | `string` | `0..1` | Copyright holder and year(s) |
| `kind` | `code` | `1..1` | instance | capability | requirements |
| `software` | `BackboneElement` | `0..1` | Software that is covered by this terminology capability statement |
| `implementation` | `BackboneElement` | `0..1` | If this describes a specific instance |
| `lockedDate` | `boolean` | `0..1` | Whether lockedDate is supported |
| `codeSystem` | `BackboneElement` | `0..*` | A code system supported by the server |
| `expansion` | `BackboneElement` | `0..1` | Information about the [ValueSet/$expand](https://hl7.org/fhir/R5/valueset-operation-expand.html) operation |
| `codeSearch` | `code` | `0..1` | in-compose | in-expansion | in-compose-or-expansion |
| `validateCode` | `BackboneElement` | `0..1` | Information about the [ValueSet/$validate-code](https://hl7.org/fhir/R5/valueset-operation-validate-code.html) operation |
| `translation` | `BackboneElement` | `0..1` | Information about the [ConceptMap/$translate](https://hl7.org/fhir/R5/conceptmap-operation-translate.html) operation |
| `closure` | `BackboneElement` | `0..1` | Information about the [ConceptMap/$closure](https://hl7.org/fhir/R5/conceptmap-operation-closure.html) operation |

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

- Official FHIR R5 spec: [`TerminologyCapabilities`](https://hl7.org/fhir/R5/terminologycapabilities.html)
- Maturity: **Trial Use 1** (FMM 1).
