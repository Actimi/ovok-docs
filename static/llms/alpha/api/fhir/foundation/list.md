---
title: List
sidebar_label: List
description: "A list is a curated collection of resources."
---

# List

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Foundation</span>

A list is a curated collection of resources.

## Endpoints

<ApiBase surface="fhir" path="/List" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/List/[id]` |
| Vread | `GET` | `/fhir/R4/List/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/List/[id]` |
| Patch | `PATCH` | `/fhir/R4/List/[id]` |
| Delete | `DELETE` | `/fhir/R4/List/[id]` |
| Create | `POST` | `/fhir/R4/List` |
| Search | `GET` | `/fhir/R4/List` |
| History | `GET` | `/fhir/R4/List/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier |
| `status` | `code` | `1..1` | current \| retired \| entered-in-error _modifier_ |
| `mode` | `code` | `1..1` | working \| snapshot \| changes _modifier_ |
| `title` | `string` | `0..1` | Descriptive name for the list |
| `code` | `CodeableConcept` | `0..1` | What the purpose of this list is |
| `subject` | `Reference` | `0..1` | If all resources have the same subject |
| `encounter` | `Reference` | `0..1` | Context in which list created |
| `date` | `dateTime` | `0..1` | When the list was prepared |
| `source` | `Reference` | `0..1` | Who and/or what defined the list contents (aka Author) |
| `orderedBy` | `CodeableConcept` | `0..1` | What order the list has |
| `note` | `Annotation` | `0..*` | Comments about the list |
| `entry` | `BackboneElement` | `0..*` | Entries in the list |
| `emptyReason` | `CodeableConcept` | `0..1` | Why list is empty |

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
| `code` | `string` | http://hl7.org/fhir/SearchParameter/clinical-code |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/clinical-date |
| `empty-reason` | `string` | http://hl7.org/fhir/SearchParameter/List-empty-reason |
| `encounter` | `string` | http://hl7.org/fhir/SearchParameter/clinical-encounter |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/clinical-identifier |
| `item` | `string` | http://hl7.org/fhir/SearchParameter/List-item |
| `notes` | `string` | http://hl7.org/fhir/SearchParameter/List-notes |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/clinical-patient |
| `source` | `string` | http://hl7.org/fhir/SearchParameter/List-source |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/List-status |
| `subject` | `string` | http://hl7.org/fhir/SearchParameter/List-subject |
| `title` | `string` | http://hl7.org/fhir/SearchParameter/List-title |

## Reference

- Official FHIR R4 spec: [`List`](https://hl7.org/fhir/R4/list.html)
- Maturity: **Trial Use 1** (FMM 1).
