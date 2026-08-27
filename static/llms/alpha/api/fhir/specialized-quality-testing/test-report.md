---
title: TestReport
sidebar_label: TestReport
description: "A summary of information based on the results of executing a TestScript."
---

# TestReport

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Specialized — Quality & Testing</span>

A summary of information based on the results of executing a TestScript.

## Endpoints

<ApiBase surface="fhir" path="/TestReport" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/TestReport/[id]` |
| Vread | `GET` | `/fhir/R4/TestReport/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/TestReport/[id]` |
| Patch | `PATCH` | `/fhir/R4/TestReport/[id]` |
| Delete | `DELETE` | `/fhir/R4/TestReport/[id]` |
| Create | `POST` | `/fhir/R4/TestReport` |
| Search | `GET` | `/fhir/R4/TestReport` |
| History | `GET` | `/fhir/R4/TestReport/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..1` | External identifier |
| `name` | `string` | `0..1` | Informal name of the executed TestScript |
| `status` | `code` | `1..1` | completed \| in-progress \| waiting \| stopped \| entered-in-error _modifier_ |
| `testScript` | `Reference` | `1..1` | Reference to the  version-specific TestScript that was executed to produce this TestReport |
| `result` | `code` | `1..1` | pass \| fail \| pending |
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
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/TestReport-identifier |
| `issued` | `string` | http://hl7.org/fhir/SearchParameter/TestReport-issued |
| `participant` | `string` | http://hl7.org/fhir/SearchParameter/TestReport-participant |
| `result` | `string` | http://hl7.org/fhir/SearchParameter/TestReport-result |
| `tester` | `string` | http://hl7.org/fhir/SearchParameter/TestReport-tester |
| `testscript` | `string` | http://hl7.org/fhir/SearchParameter/TestReport-testscript |

## Reference

- Official FHIR R4 spec: [`TestReport`](https://hl7.org/fhir/R4/testreport.html)
- Maturity: **Draft** (FMM 0).
