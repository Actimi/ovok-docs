---
title: Citation
sidebar_label: Citation
description: "The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing refere"
---

# Citation

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Conformance</span>

The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.

## Endpoints

<ApiBase surface="fhir" path="/Citation" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Citation/[id]` |
| Vread        | `GET`    | `/fhir/R5/Citation/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Citation/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Citation/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Citation/[id]` |
| Create       | `POST`   | `/fhir/R5/Citation` |
| Search       | `GET`    | `/fhir/R5/Citation?...` |
| History      | `GET`    | `/fhir/R5/Citation/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Citation/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this citation record, represented as a globally unique URI |
| `identifier` | `Identifier` | `0..*` | Identifier for the citation record itself |
| `version` | `string` | `0..1` | Business version of the citation record |
| `versionAlgorithm[x]` | `string` / `Coding` | `0..1` | How to compare versions |
| `name` | `string` | `0..1` | Name for this citation record (computer friendly) |
| `title` | `string` | `0..1` | Name for this citation record (human friendly) |
| `status` | `code` | `1..1` | draft | active | retired | unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | The publisher of the citation record, not the publisher of the article or artifact being cited |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher of the citation record |
| `description` | `markdown` | `0..1` | Natural language description of the citation |
| `useContext` | `UsageContext` | `0..*` | The context that the citation record content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for citation record (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this citation is defined |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions for the citation record, not for the cited artifact |
| `copyrightLabel` | `string` | `0..1` | Copyright holder and year(s) for the ciation record, not for the cited artifact |
| `approvalDate` | `date` | `0..1` | When the citation record was approved by publisher |
| `lastReviewDate` | `date` | `0..1` | When the citation record was last reviewed by the publisher |
| `effectivePeriod` | `Period` | `0..1` | When the citation record is expected to be used |
| `author` | `ContactDetail` | `0..*` | Who authored the citation record |
| `editor` | `ContactDetail` | `0..*` | Who edited the citation record |
| `reviewer` | `ContactDetail` | `0..*` | Who reviewed the citation record |
| `endorser` | `ContactDetail` | `0..*` | Who endorsed the citation record |
| `summary` | `BackboneElement` | `0..*` | A human-readable display of key concepts to represent the citation |
| `classification` | `BackboneElement` | `0..*` | The assignment to an organizing scheme |
| `note` | `Annotation` | `0..*` | Used for general notes and annotations not coded elsewhere |
| `currentState` | `CodeableConcept` | `0..*` | The status of the citation record |
| `statusDate` | `BackboneElement` | `0..*` | An effective date or period for a status of the citation record |
| `relatedArtifact` | `RelatedArtifact` | `0..*` | Artifact related to the citation record |
| `citedArtifact` | `BackboneElement` | `0..1` | The article or artifact being described |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`Citation` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `classification` | `composite` | A classification type and value assigned to the citation |
| `classification-type` | `token` | A type of classification assigned to the citation |
| `classifier` | `token` | A classifier assigned to the citation |
| `context` | `token` | A use context assigned to the activity definition |
| `context-quantity` | `quantity` | A quantity- or range-valued use context assigned to the activity definition |
| `context-type` | `token` | A type of use context assigned to the activity definition |
| `context-type-quantity` | `composite` | A use context type and quantity- or range-based value assigned to the activity definition |
| `context-type-value` | `composite` | A use context type and value assigned to the activity definition |
| `date` | `date` | The activity definition publication date |
| `description` | `string` | The description of the activity definition |
| `effective` | `date` | The time during which the activity definition is intended to be in use |
| `identifier` | `token` | External identifier for the activity definition |
| `jurisdiction` | `token` | Intended jurisdiction for the activity definition |
| `name` | `string` | Computationally friendly name of the activity definition |
| `publisher` | `string` | Name of the publisher of the activity definition |
| `status` | `token` | The current status of the activity definition |
| `title` | `string` | The human-friendly name of the activity definition |
| `url` | `uri` | The uri that identifies the activity definition |
| `version` | `token` | The business version of the activity definition |

## Reference

- Official FHIR R5 spec: [`Citation`](https://hl7.org/fhir/R5/citation.html)
- Element bindings & profiles: [`Citation` profile](https://hl7.org/fhir/R5/citation-definitions.html)
- Maturity: **Trial Use 1** (FMM 1).
