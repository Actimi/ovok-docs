---
title: Questionnaire
sidebar_label: Questionnaire
description: "A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phra"
---

# Questionnaire

<span className="fhir-maturity" data-level="5">Normative</span>
<span className="fhir-category">Clinical — Diagnostics</span>

A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.

## Endpoints

<ApiBase surface="fhir" path="/Questionnaire" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Questionnaire/[id]` |
| Vread        | `GET`    | `/fhir/R5/Questionnaire/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Questionnaire/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Questionnaire/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Questionnaire/[id]` |
| Create       | `POST`   | `/fhir/R5/Questionnaire` |
| Search       | `GET`    | `/fhir/R5/Questionnaire?...` |
| History      | `GET`    | `/fhir/R5/Questionnaire/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Questionnaire/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this questionnaire, represented as an absolute URI (globally unique) |
| `identifier` | `Identifier` | `0..*` | Business identifier for questionnaire |
| `version` | `string` | `0..1` | Business version of the questionnaire |
| `versionAlgorithm[x]` | `string` / `Coding` | `0..1` | How to compare versions |
| `name` | `string` | `0..1` | Name for this questionnaire (computer friendly) |
| `title` | `string` | `0..1` | Name for this questionnaire (human friendly) |
| `derivedFrom` | `canonical` | `0..*` | Based on Questionnaire |
| `status` | `code` | `1..1` | draft | active | retired | unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `subjectType` | `code` | `0..*` | Resource that can be subject of QuestionnaireResponse |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher/steward (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the questionnaire |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for questionnaire (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this questionnaire is defined |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `copyrightLabel` | `string` | `0..1` | Copyright holder and year(s) |
| `approvalDate` | `date` | `0..1` | When the questionnaire was approved by publisher |
| `lastReviewDate` | `date` | `0..1` | When the questionnaire was last reviewed by the publisher |
| `effectivePeriod` | `Period` | `0..1` | When the questionnaire is expected to be used |
| `code` | `Coding` | `0..*` | Concept that represents the overall questionnaire |
| `item` | `BackboneElement` | `0..*` | Questions and sections within the Questionnaire |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`Questionnaire` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `combo-code` | `token` | A code that corresponds to one of its items in the questionnaire |
| `context` | `token` | A use context assigned to the activity definition |
| `context-quantity` | `quantity` | A quantity- or range-valued use context assigned to the activity definition |
| `context-type` | `token` | A type of use context assigned to the activity definition |
| `context-type-quantity` | `composite` | A use context type and quantity- or range-based value assigned to the activity definition |
| `context-type-value` | `composite` | A use context type and value assigned to the activity definition |
| `date` | `date` | The activity definition publication date |
| `definition` | `uri` | ElementDefinition - details for the item |
| `description` | `string` | The description of the activity definition |
| `effective` | `date` | The time during which the activity definition is intended to be in use |
| `identifier` | `token` | External identifier for the activity definition |
| `item-code` | `token` | A code that corresponds to one of the items in the questionnaire |
| `jurisdiction` | `token` | Intended jurisdiction for the activity definition |
| `name` | `string` | Computationally friendly name of the activity definition |
| `publisher` | `string` | Name of the publisher of the activity definition |
| `questionnaire-code` | `token` | A code that matches one of the Questionnaire.code codings |
| `status` | `token` | The current status of the activity definition |
| `subject-type` | `token` | Resource that can be subject of QuestionnaireResponse |
| `title` | `string` | The human-friendly name of the activity definition |
| `url` | `uri` | The uri that identifies the activity definition |
| `version` | `token` | The business version of the activity definition |

## Reference

- Official FHIR R5 spec: [`Questionnaire`](https://hl7.org/fhir/R5/questionnaire.html)
- Element bindings & profiles: [`Questionnaire` profile](https://hl7.org/fhir/R5/questionnaire-definitions.html)
- Maturity: **Normative** (FMM 5).
