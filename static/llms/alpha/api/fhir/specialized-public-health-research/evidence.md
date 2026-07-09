---
title: Evidence
sidebar_label: Evidence
description: "The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures/intervent"
---

# Evidence

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Specialized — Public Health & Research</span>

The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence.

## Endpoints

<ApiBase surface="fhir" path="/Evidence" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Evidence/[id]` |
| Vread        | `GET`    | `/fhir/R5/Evidence/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Evidence/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Evidence/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Evidence/[id]` |
| Create       | `POST`   | `/fhir/R5/Evidence` |
| Search       | `GET`    | `/fhir/R5/Evidence?...` |
| History      | `GET`    | `/fhir/R5/Evidence/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Evidence/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this evidence, represented as a globally unique URI |
| `identifier` | `Identifier` | `0..*` | Additional identifier for the summary |
| `version` | `string` | `0..1` | Business version of this summary |
| `versionAlgorithm[x]` | `string` / `Coding` | `0..1` | How to compare versions |
| `name` | `string` | `0..1` | Name for this summary (machine friendly) |
| `title` | `string` | `0..1` | Name for this summary (human friendly) |
| `citeAs[x]` | `Reference` / `markdown` | `0..1` | Citation for this evidence |
| `status` | `code` | `1..1` | draft | active | retired | unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `0..1` | Date last changed |
| `approvalDate` | `date` | `0..1` | When the summary was approved by publisher |
| `lastReviewDate` | `date` | `0..1` | When the summary was last reviewed by the publisher |
| `publisher` | `string` | `0..1` | Name of the publisher/steward (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `author` | `ContactDetail` | `0..*` | Who authored the content |
| `editor` | `ContactDetail` | `0..*` | Who edited the content |
| `reviewer` | `ContactDetail` | `0..*` | Who reviewed the content |
| `endorser` | `ContactDetail` | `0..*` | Who endorsed the content |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `purpose` | `markdown` | `0..1` | Why this Evidence is defined |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `copyrightLabel` | `string` | `0..1` | Copyright holder and year(s) |
| `relatedArtifact` | `RelatedArtifact` | `0..*` | Link or citation to artifact associated with the summary |
| `description` | `markdown` | `0..1` | Description of the particular summary |
| `assertion` | `markdown` | `0..1` | Declarative description of the Evidence |
| `note` | `Annotation` | `0..*` | Footnotes and/or explanatory notes |
| `variableDefinition` | `BackboneElement` | `1..*` | Evidence variable such as population, exposure, or outcome |
| `synthesisType` | `CodeableConcept` | `0..1` | The method to combine studies |
| `studyDesign` | `CodeableConcept` | `0..*` | The design of the study that produced this evidence |
| `statistic` | `BackboneElement` | `0..*` | Values and parameters for a single statistic |
| `certainty` | `BackboneElement` | `0..*` | Certainty or quality of the evidence |

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
| `publisher` | `string` | Name of the publisher of the activity definition |
| `status` | `token` | The current status of the activity definition |
| `title` | `string` | The human-friendly name of the activity definition |
| `url` | `uri` | The uri that identifies the activity definition |
| `version` | `token` | The business version of the activity definition |

## Reference

- Official FHIR R5 spec: [`Evidence`](https://hl7.org/fhir/R5/evidence.html)
- Maturity: **Trial Use 1** (FMM 1).
