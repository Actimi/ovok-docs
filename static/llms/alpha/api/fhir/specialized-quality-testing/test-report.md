---
title: TestReport
sidebar_label: TestReport
description: "A summary of information based on the results of executing a TestScript."
---

# TestReport

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Specialized — Quality & Testing</span>

A summary of information based on the results of executing a TestScript.

## Endpoints

<ApiBase surface="fhir" path="/TestReport" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/TestReport/[id]` |
| Vread        | `GET`    | `/fhir/R5/TestReport/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/TestReport/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/TestReport/[id]` |
| Delete       | `DELETE` | `/fhir/R5/TestReport/[id]` |
| Create       | `POST`   | `/fhir/R5/TestReport` |
| Search       | `GET`    | `/fhir/R5/TestReport?...` |
| History      | `GET`    | `/fhir/R5/TestReport/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/TestReport/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..1` | External identifier |
| `name` | `string` | `0..1` | Informal name of the executed TestReport |
| `status` | `code` | `1..1` | completed | in-progress | waiting | stopped | entered-in-error _modifier_ |
| `testScript` | `canonical` | `1..1` | Canonical URL to the  version-specific TestScript that was executed to produce this TestReport |
| `result` | `code` | `1..1` | pass | fail | pending |
| `score` | `decimal` | `0..1` | The final score (percentage of tests passed) resulting from the execution of the TestScript |
| `tester` | `string` | `0..1` | Name of the tester producing this report (Organization or individual) |
| `issued` | `dateTime` | `0..1` | When the TestScript was executed and this TestReport was generated |
| `participant` | `BackboneElement` | `0..*` | A participant in the test execution, either the execution engine, a client, or a server |
| `setup` | `BackboneElement` | `0..1` | The results of the series of required setup operations before the tests were executed |
| `test` | `BackboneElement` | `0..*` | A test executed from the test script |
| `teardown` | `BackboneElement` | `0..1` | The results of running the series of required clean up steps |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `identifier` | `token` | An external identifier for the test report |
| `issued` | `date` | The test report generation date |
| `participant` | `uri` | The reference to a participant in the test execution |
| `result` | `token` | The result disposition of the test execution |
| `status` | `token` | The current status of the test report |
| `tester` | `string` | The name of the testing organization |
| `testscript` | `reference` | The test script executed to produce this report |

## Reference

- Official FHIR R5 spec: [`TestReport`](https://hl7.org/fhir/R5/testreport.html)
- Maturity: **Trial Use 1** (FMM 1).
