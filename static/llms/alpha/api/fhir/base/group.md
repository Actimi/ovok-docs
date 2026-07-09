---
title: Group
sidebar_label: Group
description: "Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formall"
---

# Group

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Base</span>

Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.

## Endpoints

<ApiBase surface="fhir" path="/Group" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Group/[id]` |
| Vread        | `GET`    | `/fhir/R5/Group/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Group/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Group/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Group/[id]` |
| Create       | `POST`   | `/fhir/R5/Group` |
| Search       | `GET`    | `/fhir/R5/Group?...` |
| History      | `GET`    | `/fhir/R5/Group/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Group/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business Identifier for this Group |
| `active` | `boolean` | `0..1` | Whether this group's record is in active use _modifier_ |
| `type` | `code` | `1..1` | person | animal | practitioner | device | careteam | healthcareservice | location | organization | relatedperson | specimen |
| `membership` | `code` | `1..1` | definitional | enumerated |
| `code` | `CodeableConcept` | `0..1` | Kind of Group members |
| `name` | `string` | `0..1` | Label for Group |
| `description` | `markdown` | `0..1` | Natural language description of the group |
| `quantity` | `unsignedInt` | `0..1` | Number of members |
| `managingEntity` | `Reference` | `0..1` | Entity that is the custodian of the Group's definition |
| `characteristic` | `BackboneElement` | `0..*` | Include / Exclude group members by Trait |
| `member` | `BackboneElement` | `0..*` | Who or what is in group |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `characteristic` | `token` | Kind of characteristic |
| `characteristic-reference` | `reference` | An entity referenced in a characteristic |
| `characteristic-value` | `composite` | A composite of both characteristic and value |
| `code` | `token` | The kind of resources contained |
| `exclude` | `token` | Group includes or excludes |
| `identifier` | `token` | Unique id |
| `managing-entity` | `reference` | Entity that is the custodian of the Group's definition |
| `member` | `reference` | Reference to the group member |
| `membership` | `token` | Definitional or enumerated group |
| `name` | `string` | A portion of the Group's name |
| `type` | `token` | The type of resources the group contains |
| `value` | `token` | Value held by characteristic |

## Reference

- Official FHIR R5 spec: [`Group`](https://hl7.org/fhir/R5/group.html)
- Maturity: **Trial Use 3** (FMM 3).
