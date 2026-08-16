---
title: TestScript
sidebar_label: TestScript
description: "A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification."
---

# TestScript

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Specialized — Quality & Testing</span>

A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.

## Endpoints

<ApiBase surface="fhir" path="/TestScript" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/TestScript/[id]` |
| Vread | `GET` | `/fhir/R4/TestScript/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/TestScript/[id]` |
| Patch | `PATCH` | `/fhir/R4/TestScript/[id]` |
| Delete | `DELETE` | `/fhir/R4/TestScript/[id]` |
| Create | `POST` | `/fhir/R4/TestScript` |
| Search | `GET` | `/fhir/R4/TestScript` |
| History | `GET` | `/fhir/R4/TestScript/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `1..1` | Canonical identifier for this test script, represented as a URI (globally unique) |
| `identifier` | `Identifier` | `0..1` | Additional identifier for the test script |
| `version` | `string` | `0..1` | Business version of the test script |
| `name` | `string` | `1..1` | Name for this test script (computer friendly) |
| `title` | `string` | `0..1` | Name for this test script (human friendly) |
| `status` | `code` | `1..1` | draft \| active \| retired \| unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the test script |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for test script (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this test script is defined |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `origin` | `BackboneElement` | `0..*` | An abstract server representing a client or sender in a message exchange |
| `destination` | `BackboneElement` | `0..*` | An abstract server representing a destination or receiver in a message exchange |
| `metadata` | `BackboneElement` | `0..1` | Required capability that is assumed to function correctly on the FHIR server being tested |
| `fixture` | `BackboneElement` | `0..*` | Fixture in the test script - by reference (uri) |
| `profile` | `Reference` | `0..*` | Reference of the validation profile |
| `variable` | `BackboneElement` | `0..*` | Placeholder for evaluated elements |
| `setup` | `BackboneElement` | `0..1` | A series of required setup operations before tests are executed |
| `test` | `BackboneElement` | `0..*` | A test in this script |
| `teardown` | `BackboneElement` | `0..1` | A series of required clean up steps |

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
| `context` | `string` | http://hl7.org/fhir/SearchParameter/TestScript-context |
| `context-quantity` | `string` | http://hl7.org/fhir/SearchParameter/TestScript-context-quantity |
| `context-type` | `string` | http://hl7.org/fhir/SearchParameter/TestScript-context-type |
| `context-type-quantity` | `string` | http://hl7.org/fhir/SearchParameter/TestScript-context-type-quantity |
| `context-type-value` | `string` | http://hl7.org/fhir/SearchParameter/TestScript-context-type-value |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/TestScript-date |
| `description` | `string` | http://hl7.org/fhir/SearchParameter/TestScript-description |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/TestScript-identifier |
| `jurisdiction` | `string` | http://hl7.org/fhir/SearchParameter/TestScript-jurisdiction |
| `name` | `string` | http://hl7.org/fhir/SearchParameter/TestScript-name |
| `publisher` | `string` | http://hl7.org/fhir/SearchParameter/TestScript-publisher |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/TestScript-status |
| `testscript-capability` | `string` | http://hl7.org/fhir/SearchParameter/TestScript-testscript-capability |
| `title` | `string` | http://hl7.org/fhir/SearchParameter/TestScript-title |
| `url` | `string` | http://hl7.org/fhir/SearchParameter/TestScript-url |
| `version` | `string` | http://hl7.org/fhir/SearchParameter/TestScript-version |

## Reference

- Official FHIR R4 spec: [`TestScript`](https://hl7.org/fhir/R4/testscript.html)
- Maturity: **Trial Use 2** (FMM 2).
