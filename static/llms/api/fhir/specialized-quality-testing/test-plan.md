---
title: TestPlan
sidebar_label: TestPlan
description: "A plan for executing testing on an artifact or specifications"
---

# TestPlan

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Specialized — Quality & Testing</span>

A plan for executing testing on an artifact or specifications

## Endpoints

<ApiBase surface="fhir" path="/TestPlan" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/TestPlan/[id]` |
| Vread        | `GET`    | `/fhir/R5/TestPlan/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/TestPlan/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/TestPlan/[id]` |
| Delete       | `DELETE` | `/fhir/R5/TestPlan/[id]` |
| Create       | `POST`   | `/fhir/R5/TestPlan` |
| Search       | `GET`    | `/fhir/R5/TestPlan?...` |
| History      | `GET`    | `/fhir/R5/TestPlan/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/TestPlan/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this test plan, represented as a URI (globally unique) |
| `identifier` | `Identifier` | `0..*` | Business identifier identifier for the test plan |
| `version` | `string` | `0..1` | Business version of the test plan |
| `versionAlgorithm[x]` | `string` / `Coding` | `0..1` | How to compare versions |
| `name` | `string` | `0..1` | Name for this test plan (computer friendly) |
| `title` | `string` | `0..1` | Name for this test plan (human friendly) |
| `status` | `code` | `1..1` | draft | active | retired | unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher/steward (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the test plan |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction where the test plan applies (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this test plan is defined |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `copyrightLabel` | `string` | `0..1` | Copyright holder and year(s) |
| `category` | `CodeableConcept` | `0..*` | The category of the Test Plan - can be acceptance, unit, performance |
| `scope` | `Reference` | `0..*` | What is being tested with this Test Plan - a conformance resource, or narrative criteria, or an external reference |
| `testTools` | `markdown` | `0..1` | A description of test tools to be used in the test plan - narrative for now |
| `dependency` | `BackboneElement` | `0..*` | The required criteria to execute the test plan - e.g. preconditions, previous tests |
| `exitCriteria` | `markdown` | `0..1` | The threshold or criteria for the test plan to be considered successfully executed - narrative |
| `testCase` | `BackboneElement` | `0..*` | The test cases that constitute this plan |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`TestPlan` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `identifier` | `token` | External identifier for the activity definition |
| `scope` | `reference` | The scope that is to be tested with this test plan |
| `status` | `token` | The current status of the activity definition |
| `url` | `uri` | The uri that identifies the activity definition |

## Reference

- Official FHIR R5 spec: [`TestPlan`](https://hl7.org/fhir/R5/testplan.html)
- Element bindings & profiles: [`TestPlan` profile](https://hl7.org/fhir/R5/testplan-definitions.html)
- Maturity: **Draft** (FMM 0).
