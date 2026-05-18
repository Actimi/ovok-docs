---
title: EvidenceReport
sidebar_label: EvidenceReport
description: "The EvidenceReport Resource is a specialized container for a collection of resources and codeable concepts, adapted to support compositions of Evidence, Evidenc"
---

# EvidenceReport

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Specialized — Public Health & Research</span>

The EvidenceReport Resource is a specialized container for a collection of resources and codeable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts.

## Endpoints

<ApiBase surface="fhir" path="/EvidenceReport" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/EvidenceReport/[id]` |
| Vread        | `GET`    | `/fhir/R5/EvidenceReport/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/EvidenceReport/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/EvidenceReport/[id]` |
| Delete       | `DELETE` | `/fhir/R5/EvidenceReport/[id]` |
| Create       | `POST`   | `/fhir/R5/EvidenceReport` |
| Search       | `GET`    | `/fhir/R5/EvidenceReport?...` |
| History      | `GET`    | `/fhir/R5/EvidenceReport/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/EvidenceReport/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this EvidenceReport, represented as a globally unique URI |
| `status` | `code` | `1..1` | draft | active | retired | unknown _modifier_ |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `identifier` | `Identifier` | `0..*` | Unique identifier for the evidence report |
| `relatedIdentifier` | `Identifier` | `0..*` | Identifiers for articles that may relate to more than one evidence report |
| `citeAs[x]` | `Reference` / `markdown` | `0..1` | Citation for this report |
| `type` | `CodeableConcept` | `0..1` | Kind of report |
| `note` | `Annotation` | `0..*` | Used for footnotes and annotations |
| `relatedArtifact` | `RelatedArtifact` | `0..*` | Link, description or reference to artifact associated with the report |
| `subject` | `BackboneElement` | `1..1` | Focus of the report |
| `publisher` | `string` | `0..1` | Name of the publisher/steward (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `author` | `ContactDetail` | `0..*` | Who authored the content |
| `editor` | `ContactDetail` | `0..*` | Who edited the content |
| `reviewer` | `ContactDetail` | `0..*` | Who reviewed the content |
| `endorser` | `ContactDetail` | `0..*` | Who endorsed the content |
| `relatesTo` | `BackboneElement` | `0..*` | Relationships to other compositions/documents |
| `section` | `BackboneElement` | `0..*` | Composition is broken into sections |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`EvidenceReport` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `context` | `token` | A use context assigned to the activity definition |
| `context-quantity` | `quantity` | A quantity- or range-valued use context assigned to the activity definition |
| `context-type` | `token` | A type of use context assigned to the activity definition |
| `context-type-quantity` | `composite` | A use context type and quantity- or range-based value assigned to the activity definition |
| `context-type-value` | `composite` | A use context type and value assigned to the activity definition |
| `identifier` | `token` | External identifier for the activity definition |
| `publisher` | `string` | Name of the publisher of the activity definition |
| `status` | `token` | The current status of the activity definition |
| `url` | `uri` | The uri that identifies the activity definition |

## Reference

- Official FHIR R5 spec: [`EvidenceReport`](https://hl7.org/fhir/R5/evidencereport.html)
- Element bindings & profiles: [`EvidenceReport` profile](https://hl7.org/fhir/R5/evidencereport-definitions.html)
- Maturity: **Draft** (FMM 0).
