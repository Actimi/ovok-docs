---
title: EventDefinition
sidebar_label: EventDefinition
description: "The EventDefinition resource provides a reusable description of when a particular event can occur."
---

# EventDefinition

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Specialized — Quality & Testing</span>

The EventDefinition resource provides a reusable description of when a particular event can occur.

## Endpoints

<ApiBase surface="fhir" path="/EventDefinition" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/EventDefinition/[id]` |
| Vread        | `GET`    | `/fhir/R5/EventDefinition/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/EventDefinition/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/EventDefinition/[id]` |
| Delete       | `DELETE` | `/fhir/R5/EventDefinition/[id]` |
| Create       | `POST`   | `/fhir/R5/EventDefinition` |
| Search       | `GET`    | `/fhir/R5/EventDefinition?...` |
| History      | `GET`    | `/fhir/R5/EventDefinition/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/EventDefinition/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this event definition, represented as a URI (globally unique) |
| `identifier` | `Identifier` | `0..*` | Additional identifier for the event definition |
| `version` | `string` | `0..1` | Business version of the event definition |
| `versionAlgorithm[x]` | `string` / `Coding` | `0..1` | How to compare versions |
| `name` | `string` | `0..1` | Name for this event definition (computer friendly) |
| `title` | `string` | `0..1` | Name for this event definition (human friendly) |
| `subtitle` | `string` | `0..1` | Subordinate title of the event definition |
| `status` | `code` | `1..1` | draft | active | retired | unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `subject[x]` | `CodeableConcept` / `Reference` | `0..1` | Type of individual the event definition is focused on |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher/steward (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the event definition |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for event definition (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this event definition is defined |
| `usage` | `markdown` | `0..1` | Describes the clinical usage of the event definition |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `copyrightLabel` | `string` | `0..1` | Copyright holder and year(s) |
| `approvalDate` | `date` | `0..1` | When the event definition was approved by publisher |
| `lastReviewDate` | `date` | `0..1` | When the event definition was last reviewed by the publisher |
| `effectivePeriod` | `Period` | `0..1` | When the event definition is expected to be used |
| `topic` | `CodeableConcept` | `0..*` | E.g. Education, Treatment, Assessment, etc |
| `author` | `ContactDetail` | `0..*` | Who authored the content |
| `editor` | `ContactDetail` | `0..*` | Who edited the content |
| `reviewer` | `ContactDetail` | `0..*` | Who reviewed the content |
| `endorser` | `ContactDetail` | `0..*` | Who endorsed the content |
| `relatedArtifact` | `RelatedArtifact` | `0..*` | Additional documentation, citations, etc |
| `trigger` | `TriggerDefinition` | `1..*` | "when" the event occurs (multiple = 'or') |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `composed-of` | `reference` | What resource is being referenced |
| `context` | `token` | A use context assigned to the activity definition |
| `context-quantity` | `quantity` | A quantity- or range-valued use context assigned to the activity definition |
| `context-type` | `token` | A type of use context assigned to the activity definition |
| `context-type-quantity` | `composite` | A use context type and quantity- or range-based value assigned to the activity definition |
| `context-type-value` | `composite` | A use context type and value assigned to the activity definition |
| `date` | `date` | The activity definition publication date |
| `depends-on` | `reference` | What resource is being referenced |
| `derived-from` | `reference` | What resource is being referenced |
| `description` | `string` | The description of the activity definition |
| `effective` | `date` | The time during which the activity definition is intended to be in use |
| `identifier` | `token` | External identifier for the activity definition |
| `jurisdiction` | `token` | Intended jurisdiction for the activity definition |
| `name` | `string` | Computationally friendly name of the activity definition |
| `predecessor` | `reference` | What resource is being referenced |
| `publisher` | `string` | Name of the publisher of the activity definition |
| `status` | `token` | The current status of the activity definition |
| `successor` | `reference` | What resource is being referenced |
| `title` | `string` | The human-friendly name of the activity definition |
| `topic` | `token` | Topics associated with the module |
| `url` | `uri` | The uri that identifies the activity definition |
| `version` | `token` | The business version of the activity definition |

## Reference

- Official FHIR R5 spec: [`EventDefinition`](https://hl7.org/fhir/R5/eventdefinition.html)
- Maturity: **Draft** (FMM 0).
