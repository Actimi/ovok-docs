---
title: CodeSystem
sidebar_label: CodeSystem
description: "The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a"
---

# CodeSystem

<span className="fhir-maturity" data-level="5">Normative</span>
<span className="fhir-category">Terminology</span>

The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.

## Endpoints

<ApiBase surface="fhir" path="/CodeSystem" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/CodeSystem/[id]` |
| Vread        | `GET`    | `/fhir/R5/CodeSystem/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/CodeSystem/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/CodeSystem/[id]` |
| Delete       | `DELETE` | `/fhir/R5/CodeSystem/[id]` |
| Create       | `POST`   | `/fhir/R5/CodeSystem` |
| Search       | `GET`    | `/fhir/R5/CodeSystem?...` |
| History      | `GET`    | `/fhir/R5/CodeSystem/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/CodeSystem/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this code system, represented as a URI (globally unique) (Coding.system) |
| `identifier` | `Identifier` | `0..*` | Additional identifier for the code system (business identifier) |
| `version` | `string` | `0..1` | Business version of the code system (Coding.version) |
| `versionAlgorithm[x]` | `string` / `Coding` | `0..1` | How to compare versions |
| `name` | `string` | `0..1` | Name for this code system (computer friendly) |
| `title` | `string` | `0..1` | Name for this code system (human friendly) |
| `status` | `code` | `1..1` | draft | active | retired | unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher/steward (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the code system |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for code system (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this code system is defined |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `copyrightLabel` | `string` | `0..1` | Copyright holder and year(s) |
| `approvalDate` | `date` | `0..1` | When the CodeSystem was approved by publisher |
| `lastReviewDate` | `date` | `0..1` | When the CodeSystem was last reviewed by the publisher |
| `effectivePeriod` | `Period` | `0..1` | When the CodeSystem is expected to be used |
| `topic` | `CodeableConcept` | `0..*` | E.g. Education, Treatment, Assessment, etc |
| `author` | `ContactDetail` | `0..*` | Who authored the CodeSystem |
| `editor` | `ContactDetail` | `0..*` | Who edited the CodeSystem |
| `reviewer` | `ContactDetail` | `0..*` | Who reviewed the CodeSystem |
| `endorser` | `ContactDetail` | `0..*` | Who endorsed the CodeSystem |
| `relatedArtifact` | `RelatedArtifact` | `0..*` | Additional documentation, citations, etc |
| `caseSensitive` | `boolean` | `0..1` | If code comparison is case sensitive |
| `valueSet` | `canonical` | `0..1` | Canonical reference to the value set with entire code system |
| `hierarchyMeaning` | `code` | `0..1` | grouped-by | is-a | part-of | classified-with |
| `compositional` | `boolean` | `0..1` | If code system defines a compositional grammar |
| `versionNeeded` | `boolean` | `0..1` | If definitions are not stable |
| `content` | `code` | `1..1` | not-present | example | fragment | complete | supplement |
| `supplements` | `canonical` | `0..1` | Canonical URL of Code System this adds designations and properties to |
| `count` | `unsignedInt` | `0..1` | Total concepts in the code system |
| `filter` | `BackboneElement` | `0..*` | Filter that can be used in a value set |
| `property` | `BackboneElement` | `0..*` | Additional information supplied about each concept |
| `concept` | `BackboneElement` | `0..*` | Concepts in the code system |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `code` | `token` | A code defined in the code system |
| `content-mode` | `token` | not-present | example | fragment | complete | supplement |
| `context` | `token` | A use context assigned to the activity definition |
| `context-quantity` | `quantity` | A quantity- or range-valued use context assigned to the activity definition |
| `context-type` | `token` | A type of use context assigned to the activity definition |
| `context-type-quantity` | `composite` | A use context type and quantity- or range-based value assigned to the activity definition |
| `context-type-value` | `composite` | A use context type and value assigned to the activity definition |
| `date` | `date` | The activity definition publication date |
| `derived-from` | `reference` | What resource is being referenced |
| `description` | `string` | The description of the activity definition |
| `effective` | `date` | The time during which the activity definition is intended to be in use |
| `identifier` | `token` | External identifier for the activity definition |
| `jurisdiction` | `token` | Intended jurisdiction for the activity definition |
| `language` | `token` | A language in which a designation is provided |
| `name` | `string` | Computationally friendly name of the activity definition |
| `predecessor` | `reference` | What resource is being referenced |
| `publisher` | `string` | Name of the publisher of the activity definition |
| `status` | `token` | The current status of the activity definition |
| `supplements` | `reference` | Find code system supplements for the referenced code system |
| `system` | `uri` | The system for any codes defined by this code system (same as 'url') |
| `title` | `string` | The human-friendly name of the activity definition |
| `topic` | `token` | Topics associated with the module |
| `url` | `uri` | The uri that identifies the activity definition |
| `version` | `token` | The business version of the activity definition |

## Reference

- Official FHIR R5 spec: [`CodeSystem`](https://hl7.org/fhir/R5/codesystem.html)
- Maturity: **Normative** (FMM 5).
