---
title: Group
sidebar_label: Group
description: "Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formall"
---

# Group

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Base</span>

Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.

## Endpoints

<ApiBase surface="fhir" path="/Group" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/Group/[id]` |
| Vread | `GET` | `/fhir/R4/Group/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Group/[id]` |
| Patch | `PATCH` | `/fhir/R4/Group/[id]` |
| Delete | `DELETE` | `/fhir/R4/Group/[id]` |
| Create | `POST` | `/fhir/R4/Group` |
| Search | `GET` | `/fhir/R4/Group` |
| History | `GET` | `/fhir/R4/Group/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Unique id |
| `active` | `boolean` | `0..1` | Whether this group's record is in active use |
| `type` | `code` | `1..1` | person \| animal \| practitioner \| device \| medication \| substance |
| `actual` | `boolean` | `1..1` | Descriptive or actual |
| `code` | `CodeableConcept` | `0..1` | Kind of Group members |
| `name` | `string` | `0..1` | Label for Group |
| `quantity` | `unsignedInt` | `0..1` | Number of members |
| `managingEntity` | `Reference` | `0..1` | Entity that is the custodian of the Group's definition |
| `characteristic` | `BackboneElement` | `0..*` | Include / Exclude group members by Trait |
| `member` | `BackboneElement` | `0..*` | Who or what is in group |

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
| `actual` | `string` | http://hl7.org/fhir/SearchParameter/Group-actual |
| `characteristic` | `string` | http://hl7.org/fhir/SearchParameter/Group-characteristic |
| `characteristic-range` | `string` | https://medplum.com/fhir/SearchParameter/Group-characteristic-range |
| `characteristic-reference` | `string` | http://hl7.org/fhir/SearchParameter/Group-characteristic-reference |
| `characteristic-value` | `string` | http://hl7.org/fhir/SearchParameter/Group-characteristic-value |
| `code` | `string` | http://hl7.org/fhir/SearchParameter/Group-code |
| `exclude` | `string` | http://hl7.org/fhir/SearchParameter/Group-exclude |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/Group-identifier |
| `managing-entity` | `string` | http://hl7.org/fhir/SearchParameter/Group-managing-entity |
| `member` | `string` | http://hl7.org/fhir/SearchParameter/Group-member |
| `name` | `string` | https://medplum.com/fhir/SearchParameter/Group-name |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/Group-type |
| `value` | `string` | http://hl7.org/fhir/SearchParameter/Group-value |

## Reference

- Official FHIR R4 spec: [`Group`](https://hl7.org/fhir/R4/group.html)
- Maturity: **Trial Use 1** (FMM 1).
