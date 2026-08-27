---
title: Basic
sidebar_label: Basic
description: "Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropria"
---

# Basic

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Foundation</span>

Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.

## Endpoints

<ApiBase surface="fhir" path="/Basic" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/Basic/[id]` |
| Vread | `GET` | `/fhir/R4/Basic/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Basic/[id]` |
| Patch | `PATCH` | `/fhir/R4/Basic/[id]` |
| Delete | `DELETE` | `/fhir/R4/Basic/[id]` |
| Create | `POST` | `/fhir/R4/Basic` |
| Search | `GET` | `/fhir/R4/Basic` |
| History | `GET` | `/fhir/R4/Basic/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier |
| `code` | `CodeableConcept` | `1..1` | Kind of Resource _modifier_ |
| `subject` | `Reference` | `0..1` | Identifies the focus of this resource |
| `created` | `date` | `0..1` | When created |
| `author` | `Reference` | `0..1` | Who created |

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
| `author` | `string` | http://hl7.org/fhir/SearchParameter/Basic-author |
| `code` | `string` | http://hl7.org/fhir/SearchParameter/Basic-code |
| `created` | `string` | http://hl7.org/fhir/SearchParameter/Basic-created |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/Basic-identifier |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/Basic-patient |
| `subject` | `string` | http://hl7.org/fhir/SearchParameter/Basic-subject |

## Reference

- Official FHIR R4 spec: [`Basic`](https://hl7.org/fhir/R4/basic.html)
- Maturity: **Trial Use 1** (FMM 1).
