---
title: AuditEvent
sidebar_label: AuditEvent
description: "A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis."
---

# AuditEvent

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Foundation</span>

A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis.

## Endpoints

<ApiBase surface="fhir" path="/AuditEvent" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/AuditEvent/[id]` |
| Vread        | `GET`    | `/fhir/R5/AuditEvent/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/AuditEvent/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/AuditEvent/[id]` |
| Delete       | `DELETE` | `/fhir/R5/AuditEvent/[id]` |
| Create       | `POST`   | `/fhir/R5/AuditEvent` |
| Search       | `GET`    | `/fhir/R5/AuditEvent?...` |
| History      | `GET`    | `/fhir/R5/AuditEvent/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/AuditEvent/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `category` | `CodeableConcept` | `0..*` | Type/identifier of event |
| `code` | `CodeableConcept` | `1..1` | Specific type of event |
| `action` | `code` | `0..1` | Type of action performed during the event |
| `severity` | `code` | `0..1` | emergency | alert | critical | error | warning | notice | informational | debug |
| `occurred[x]` | `Period` / `dateTime` | `0..1` | When the activity occurred |
| `recorded` | `instant` | `1..1` | Time when the event was recorded |
| `outcome` | `BackboneElement` | `0..1` | Whether the event succeeded or failed |
| `authorization` | `CodeableConcept` | `0..*` | Authorization related to the event |
| `basedOn` | `Reference` | `0..*` | Workflow authorization within which this event occurred |
| `patient` | `Reference` | `0..1` | The patient is the subject of the data used/created/updated/deleted during the activity |
| `encounter` | `Reference` | `0..1` | Encounter within which this event occurred or which the event is tightly associated |
| `agent` | `BackboneElement` | `1..*` | Actor involved in the event |
| `source` | `BackboneElement` | `1..1` | Audit Event Reporter |
| `entity` | `BackboneElement` | `0..*` | Data or objects used |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `action` | `token` | Type of action performed during the event |
| `agent` | `reference` | Identifier of who |
| `agent-role` | `token` | Agent role in the event |
| `based-on` | `reference` | Reference to the service request. |
| `category` | `token` | Category of event |
| `code` | `token` | Event or incident that occurred or was averted |
| `date` | `date` | When the event occurred |
| `encounter` | `reference` | Encounter related to the activity recorded in the AuditEvent |
| `entity` | `reference` | Specific instance of resource |
| `entity-role` | `token` | What role the entity played |
| `outcome` | `token` | Whether the event succeeded or failed |
| `patient` | `reference` | The entity that caused the expenses |
| `policy` | `uri` | Policy that authorized event |
| `purpose` | `token` | The authorization (purposeOfUse) of the event |
| `source` | `reference` | The identity of source detecting the event |

## Reference

- Official FHIR R5 spec: [`AuditEvent`](https://hl7.org/fhir/R5/auditevent.html)
- Maturity: **Trial Use 4** (FMM 4).
