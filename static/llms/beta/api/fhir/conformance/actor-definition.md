---
title: ActorDefinition
sidebar_label: ActorDefinition
description: "The ActorDefinition resource is used to describe an actor - a human or an application that plays a role in data exchange, and that may have obligations associat"
---

# ActorDefinition

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Conformance</span>

The ActorDefinition resource is used to describe an actor - a human or an application that plays a role in data exchange, and that may have obligations associated with the role the actor plays.

## Endpoints

<ApiBase surface="fhir" path="/ActorDefinition" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/ActorDefinition/[id]` |
| Vread        | `GET`    | `/fhir/R5/ActorDefinition/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/ActorDefinition/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/ActorDefinition/[id]` |
| Delete       | `DELETE` | `/fhir/R5/ActorDefinition/[id]` |
| Create       | `POST`   | `/fhir/R5/ActorDefinition` |
| Search       | `GET`    | `/fhir/R5/ActorDefinition?...` |
| History      | `GET`    | `/fhir/R5/ActorDefinition/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/ActorDefinition/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this actor definition, represented as a URI (globally unique) |
| `identifier` | `Identifier` | `0..*` | Additional identifier for the actor definition (business identifier) |
| `version` | `string` | `0..1` | Business version of the actor definition |
| `versionAlgorithm[x]` | `string` / `Coding` | `0..1` | How to compare versions |
| `name` | `string` | `0..1` | Name for this actor definition (computer friendly) |
| `title` | `string` | `0..1` | Name for this actor definition (human friendly) |
| `status` | `code` | `1..1` | draft | active | retired | unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher/steward (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the actor |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for actor definition (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this actor definition is defined |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `copyrightLabel` | `string` | `0..1` | Copyright holder and year(s) |
| `type` | `code` | `1..1` | person | system |
| `documentation` | `markdown` | `0..1` | Functionality associated with the actor |
| `reference` | `url` | `0..*` | Reference to more information about the actor |
| `capabilities` | `canonical` | `0..1` | CapabilityStatement for the actor (if applicable) |
| `derivedFrom` | `canonical` | `0..*` | Definition of this actor in another context / IG |

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
| `publisher` | `string` | Name of the publisher of the activity definition |
| `status` | `token` | The current status of the activity definition |
| `title` | `string` | The human-friendly name of the activity definition |
| `type` | `token` | The type of actor |
| `url` | `uri` | The uri that identifies the activity definition |
| `version` | `token` | The business version of the activity definition |

## Reference

- Official FHIR R5 spec: [`ActorDefinition`](https://hl7.org/fhir/R5/actordefinition.html)
- Maturity: **Trial Use 1** (FMM 1).
