---
title: CareTeam
sidebar_label: CareTeam
description: "The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care."
---

# CareTeam

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Clinical — Care Provision</span>

The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care.

## Endpoints

<ApiBase surface="fhir" path="/CareTeam" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/CareTeam/[id]` |
| Vread        | `GET`    | `/fhir/R5/CareTeam/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/CareTeam/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/CareTeam/[id]` |
| Delete       | `DELETE` | `/fhir/R5/CareTeam/[id]` |
| Create       | `POST`   | `/fhir/R5/CareTeam` |
| Search       | `GET`    | `/fhir/R5/CareTeam?...` |
| History      | `GET`    | `/fhir/R5/CareTeam/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/CareTeam/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External Ids for this team |
| `status` | `code` | `0..1` | proposed | active | suspended | inactive | entered-in-error _modifier_ |
| `category` | `CodeableConcept` | `0..*` | Type of team |
| `name` | `string` | `0..1` | Name of the team, such as crisis assessment team |
| `subject` | `Reference` | `0..1` | Who care team is for |
| `period` | `Period` | `0..1` | Time period team covers |
| `participant` | `BackboneElement` | `0..*` | Members of the team |
| `reason` | `CodeableReference` | `0..*` | Why the care team exists |
| `managingOrganization` | `Reference` | `0..*` | Organization responsible for the care team |
| `telecom` | `ContactPoint` | `0..*` | A contact detail for the care team (that applies to all members) |
| `note` | `Annotation` | `0..*` | Comments made about the CareTeam |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `category` | `token` | Type of team |
| `date` | `date` | When the event occurred |
| `identifier` | `token` | Account number |
| `name` | `string` | Name of the team, such as crisis assessment team |
| `participant` | `reference` | Who is involved |
| `patient` | `reference` | The entity that caused the expenses |
| `status` | `token` | proposed | active | suspended | inactive | entered-in-error |
| `subject` | `reference` | Who care team is for |

## Reference

- Official FHIR R5 spec: [`CareTeam`](https://hl7.org/fhir/R5/careteam.html)
- Maturity: **Trial Use 2** (FMM 2).
