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
| Read | `GET` | `/fhir/R4/EventDefinition/[id]` |
| Vread | `GET` | `/fhir/R4/EventDefinition/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/EventDefinition/[id]` |
| Patch | `PATCH` | `/fhir/R4/EventDefinition/[id]` |
| Delete | `DELETE` | `/fhir/R4/EventDefinition/[id]` |
| Create | `POST` | `/fhir/R4/EventDefinition` |
| Search | `GET` | `/fhir/R4/EventDefinition` |
| History | `GET` | `/fhir/R4/EventDefinition/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this event definition, represented as a URI (globally unique) |
| `identifier` | `Identifier` | `0..*` | Additional identifier for the event definition |
| `version` | `string` | `0..1` | Business version of the event definition |
| `name` | `string` | `0..1` | Name for this event definition (computer friendly) |
| `title` | `string` | `0..1` | Name for this event definition (human friendly) |
| `subtitle` | `string` | `0..1` | Subordinate title of the event definition |
| `status` | `code` | `1..1` | draft \| active \| retired \| unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `subject[x]` | `CodeableConcept` / `Reference` | `0..1` | Type of individual the event definition is focused on |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the event definition |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for event definition (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this event definition is defined |
| `usage` | `string` | `0..1` | Describes the clinical usage of the event definition |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `approvalDate` | `date` | `0..1` | When the event definition was approved by publisher |
| `lastReviewDate` | `date` | `0..1` | When the event definition was last reviewed |
| `effectivePeriod` | `Period` | `0..1` | When the event definition is expected to be used |
| `topic` | `CodeableConcept` | `0..*` | E.g. Education, Treatment, Assessment, etc. |
| `author` | `ContactDetail` | `0..*` | Who authored the content |
| `editor` | `ContactDetail` | `0..*` | Who edited the content |
| `reviewer` | `ContactDetail` | `0..*` | Who reviewed the content |
| `endorser` | `ContactDetail` | `0..*` | Who endorsed the content |
| `relatedArtifact` | `RelatedArtifact` | `0..*` | Additional documentation, citations, etc. |
| `trigger` | `TriggerDefinition` | `1..*` | "when" the event occurs (multiple = 'or') |

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
| `composed-of` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-composed-of |
| `context` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-context |
| `context-quantity` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-context-quantity |
| `context-type` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-context-type |
| `context-type-quantity` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-context-type-quantity |
| `context-type-value` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-context-type-value |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-date |
| `depends-on` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-depends-on |
| `derived-from` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-derived-from |
| `description` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-description |
| `effective` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-effective |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-identifier |
| `jurisdiction` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-jurisdiction |
| `name` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-name |
| `predecessor` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-predecessor |
| `publisher` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-publisher |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-status |
| `successor` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-successor |
| `title` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-title |
| `topic` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-topic |
| `url` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-url |
| `version` | `string` | http://hl7.org/fhir/SearchParameter/EventDefinition-version |

## Reference

- Official FHIR R4 spec: [`EventDefinition`](https://hl7.org/fhir/R4/eventdefinition.html)
- Maturity: **Draft** (FMM 0).
