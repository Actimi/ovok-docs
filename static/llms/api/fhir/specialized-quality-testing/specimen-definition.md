---
title: SpecimenDefinition
sidebar_label: SpecimenDefinition
description: "A kind of specimen with associated set of requirements."
---

# SpecimenDefinition

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Specialized — Quality & Testing</span>

A kind of specimen with associated set of requirements.

## Endpoints

<ApiBase surface="fhir" path="/SpecimenDefinition" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/SpecimenDefinition/[id]` |
| Vread        | `GET`    | `/fhir/R5/SpecimenDefinition/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/SpecimenDefinition/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/SpecimenDefinition/[id]` |
| Delete       | `DELETE` | `/fhir/R5/SpecimenDefinition/[id]` |
| Create       | `POST`   | `/fhir/R5/SpecimenDefinition` |
| Search       | `GET`    | `/fhir/R5/SpecimenDefinition?...` |
| History      | `GET`    | `/fhir/R5/SpecimenDefinition/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/SpecimenDefinition/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Logical canonical URL to reference this SpecimenDefinition (globally unique) |
| `identifier` | `Identifier` | `0..1` | Business identifier |
| `version` | `string` | `0..1` | Business version of the SpecimenDefinition |
| `versionAlgorithm[x]` | `string` / `Coding` | `0..1` | How to compare versions |
| `name` | `string` | `0..1` | Name for this &#123;&#123;title&#125;&#125; (computer friendly) |
| `title` | `string` | `0..1` | Name for this SpecimenDefinition (Human friendly) |
| `derivedFromCanonical` | `canonical` | `0..*` | Based on FHIR definition of another SpecimenDefinition |
| `derivedFromUri` | `uri` | `0..*` | Based on external definition |
| `status` | `code` | `1..1` | draft | active | retired | unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | If this SpecimenDefinition is not for real usage |
| `subject[x]` | `CodeableConcept` / `Reference` | `0..1` | Type of subject for specimen collection |
| `date` | `dateTime` | `0..1` | Date status first applied |
| `publisher` | `string` | `0..1` | The name of the individual or organization that published the SpecimenDefinition |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the SpecimenDefinition |
| `useContext` | `UsageContext` | `0..*` | Content intends to support these contexts |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for this SpecimenDefinition (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this SpecimenDefinition is defined |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `copyrightLabel` | `string` | `0..1` | Copyright holder and year(s) |
| `approvalDate` | `date` | `0..1` | When SpecimenDefinition was approved by publisher |
| `lastReviewDate` | `date` | `0..1` | The date on which the asset content was last reviewed by the publisher |
| `effectivePeriod` | `Period` | `0..1` | The effective date range for the SpecimenDefinition |
| `typeCollected` | `CodeableConcept` | `0..1` | Kind of material to collect |
| `patientPreparation` | `CodeableConcept` | `0..*` | Patient preparation for collection |
| `timeAspect` | `string` | `0..1` | Time aspect for collection |
| `collection` | `CodeableConcept` | `0..*` | Specimen collection procedure |
| `typeTested` | `BackboneElement` | `0..*` | Specimen in container intended for testing by lab |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`SpecimenDefinition` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `container` | `token` | The type of specimen conditioned in container expected by the lab |
| `experimental` | `token` | Not for genuine usage (true) |
| `identifier` | `token` | External identifier for the activity definition |
| `is-derived` | `token` | Primary specimen (false) or derived specimen (true) |
| `status` | `token` | The current status of the activity definition |
| `title` | `string` | The human-friendly name of the activity definition |
| `type` | `token` | The type of collected specimen |
| `type-tested` | `token` | The type of specimen conditioned for testing |
| `url` | `uri` | The uri that identifies the activity definition |

## Reference

- Official FHIR R5 spec: [`SpecimenDefinition`](https://hl7.org/fhir/R5/specimendefinition.html)
- Element bindings & profiles: [`SpecimenDefinition` profile](https://hl7.org/fhir/R5/specimendefinition-definitions.html)
- Maturity: **Trial Use 1** (FMM 1).
