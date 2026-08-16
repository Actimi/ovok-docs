---
title: Library
sidebar_label: Library
description: "The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as log"
---

# Library

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Specialized — Quality & Testing</span>

The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.

## Endpoints

<ApiBase surface="fhir" path="/Library" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/Library/[id]` |
| Vread | `GET` | `/fhir/R4/Library/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Library/[id]` |
| Patch | `PATCH` | `/fhir/R4/Library/[id]` |
| Delete | `DELETE` | `/fhir/R4/Library/[id]` |
| Create | `POST` | `/fhir/R4/Library` |
| Search | `GET` | `/fhir/R4/Library` |
| History | `GET` | `/fhir/R4/Library/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this library, represented as a URI (globally unique) |
| `identifier` | `Identifier` | `0..*` | Additional identifier for the library |
| `version` | `string` | `0..1` | Business version of the library |
| `name` | `string` | `0..1` | Name for this library (computer friendly) |
| `title` | `string` | `0..1` | Name for this library (human friendly) |
| `subtitle` | `string` | `0..1` | Subordinate title of the library |
| `status` | `code` | `1..1` | draft \| active \| retired \| unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `type` | `CodeableConcept` | `1..1` | logic-library \| model-definition \| asset-collection \| module-definition |
| `subject[x]` | `CodeableConcept` / `Reference` | `0..1` | Type of individual the library content is focused on |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the library |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for library (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this library is defined |
| `usage` | `string` | `0..1` | Describes the clinical usage of the library |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `approvalDate` | `date` | `0..1` | When the library was approved by publisher |
| `lastReviewDate` | `date` | `0..1` | When the library was last reviewed |
| `effectivePeriod` | `Period` | `0..1` | When the library is expected to be used |
| `topic` | `CodeableConcept` | `0..*` | E.g. Education, Treatment, Assessment, etc. |
| `author` | `ContactDetail` | `0..*` | Who authored the content |
| `editor` | `ContactDetail` | `0..*` | Who edited the content |
| `reviewer` | `ContactDetail` | `0..*` | Who reviewed the content |
| `endorser` | `ContactDetail` | `0..*` | Who endorsed the content |
| `relatedArtifact` | `RelatedArtifact` | `0..*` | Additional documentation, citations, etc. |
| `parameter` | `ParameterDefinition` | `0..*` | Parameters defined by the library |
| `dataRequirement` | `DataRequirement` | `0..*` | What data is referenced by this library |
| `content` | `Attachment` | `0..*` | Contents of the library, either embedded or referenced |

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
| `composed-of` | `string` | http://hl7.org/fhir/SearchParameter/Library-composed-of |
| `content-type` | `string` | http://hl7.org/fhir/SearchParameter/Library-content-type |
| `context` | `string` | http://hl7.org/fhir/SearchParameter/Library-context |
| `context-quantity` | `string` | http://hl7.org/fhir/SearchParameter/Library-context-quantity |
| `context-type` | `string` | http://hl7.org/fhir/SearchParameter/Library-context-type |
| `context-type-quantity` | `string` | http://hl7.org/fhir/SearchParameter/Library-context-type-quantity |
| `context-type-value` | `string` | http://hl7.org/fhir/SearchParameter/Library-context-type-value |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/Library-date |
| `depends-on` | `string` | http://hl7.org/fhir/SearchParameter/Library-depends-on |
| `derived-from` | `string` | http://hl7.org/fhir/SearchParameter/Library-derived-from |
| `description` | `string` | http://hl7.org/fhir/SearchParameter/Library-description |
| `effective` | `string` | http://hl7.org/fhir/SearchParameter/Library-effective |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/Library-identifier |
| `jurisdiction` | `string` | http://hl7.org/fhir/SearchParameter/Library-jurisdiction |
| `name` | `string` | http://hl7.org/fhir/SearchParameter/Library-name |
| `predecessor` | `string` | http://hl7.org/fhir/SearchParameter/Library-predecessor |
| `publisher` | `string` | http://hl7.org/fhir/SearchParameter/Library-publisher |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/Library-status |
| `successor` | `string` | http://hl7.org/fhir/SearchParameter/Library-successor |
| `title` | `string` | http://hl7.org/fhir/SearchParameter/Library-title |
| `topic` | `string` | http://hl7.org/fhir/SearchParameter/Library-topic |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/Library-type |
| `url` | `string` | http://hl7.org/fhir/SearchParameter/Library-url |
| `version` | `string` | http://hl7.org/fhir/SearchParameter/Library-version |

## Reference

- Official FHIR R4 spec: [`Library`](https://hl7.org/fhir/R4/library.html)
- Maturity: **Trial Use 2** (FMM 2).
