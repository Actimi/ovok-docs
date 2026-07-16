---
title: Task
sidebar_label: Task
description: "A task to be performed."
---

# Task

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Workflow</span>

A task to be performed.

## Endpoints

<ApiBase surface="fhir" path="/Task" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Task/[id]` |
| Vread        | `GET`    | `/fhir/R5/Task/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Task/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Task/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Task/[id]` |
| Create       | `POST`   | `/fhir/R5/Task` |
| Search       | `GET`    | `/fhir/R5/Task?...` |
| History      | `GET`    | `/fhir/R5/Task/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Task/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Task Instance Identifier |
| `instantiatesCanonical` | `canonical` | `0..1` | Formal definition of task |
| `instantiatesUri` | `uri` | `0..1` | Formal definition of task |
| `basedOn` | `Reference` | `0..*` | Request fulfilled by this task |
| `groupIdentifier` | `Identifier` | `0..1` | Requisition or grouper id |
| `partOf` | `Reference` | `0..*` | Composite task |
| `status` | `code` | `1..1` | draft | requested | received | accepted | + _modifier_ |
| `statusReason` | `CodeableReference` | `0..1` | Reason for current status |
| `businessStatus` | `CodeableConcept` | `0..1` | E.g. "Specimen collected", "IV prepped" |
| `intent` | `code` | `1..1` | unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option |
| `priority` | `code` | `0..1` | routine | urgent | asap | stat |
| `doNotPerform` | `boolean` | `0..1` | True if Task is prohibiting action _modifier_ |
| `code` | `CodeableConcept` | `0..1` | Task Type |
| `description` | `string` | `0..1` | Human-readable explanation of task |
| `focus` | `Reference` | `0..1` | What task is acting on |
| `for` | `Reference` | `0..1` | Beneficiary of the Task |
| `encounter` | `Reference` | `0..1` | Healthcare event during which this task originated |
| `requestedPeriod` | `Period` | `0..1` | When the task should be performed |
| `executionPeriod` | `Period` | `0..1` | Start and end time of execution |
| `authoredOn` | `dateTime` | `0..1` | Task Creation Date |
| `lastModified` | `dateTime` | `0..1` | Task Last Modified Date |
| `requester` | `Reference` | `0..1` | Who is asking for task to be done |
| `requestedPerformer` | `CodeableReference` | `0..*` | Who should perform Task |
| `owner` | `Reference` | `0..1` | Responsible individual |
| `performer` | `BackboneElement` | `0..*` | Who or what performed the task |
| `location` | `Reference` | `0..1` | Where task occurs |
| `reason` | `CodeableReference` | `0..*` | Why task is needed |
| `insurance` | `Reference` | `0..*` | Associated insurance coverage |
| `note` | `Annotation` | `0..*` | Comments made about the task |
| `relevantHistory` | `Reference` | `0..*` | Key events in history of the Task |
| `restriction` | `BackboneElement` | `0..1` | Constraints on fulfillment tasks |
| `input` | `BackboneElement` | `0..*` | Information used to perform task |
| `output` | `BackboneElement` | `0..*` | Information produced as part of task |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `actor` | `reference` | Search by specific performer. |
| `authored-on` | `date` | Search by creation date |
| `based-on` | `reference` | Search by requests this task is based on |
| `business-status` | `token` | Search by business status |
| `code` | `token` | Event or incident that occurred or was averted |
| `encounter` | `reference` | Encounter related to the activity recorded in the AuditEvent |
| `focus` | `reference` | Search by task focus |
| `group-identifier` | `token` | Search by group identifier |
| `identifier` | `token` | Account number |
| `intent` | `token` | Search by task intent |
| `modified` | `date` | Search by last modification date |
| `output` | `reference` | Search by task output |
| `owner` | `reference` | Search by task owner |
| `part-of` | `reference` | Search by task this task is part of |
| `patient` | `reference` | The entity that caused the expenses |
| `performer` | `token` | Search by recommended type of performer (e.g., Requester, Performer, Scheduler). |
| `period` | `date` | Search by period Task is/was underway |
| `priority` | `token` | Search by task priority |
| `requestedperformer-reference` | `reference` | Search by specific requested performer. |
| `requester` | `reference` | Search by task requester |
| `status` | `token` | Search by task status |
| `subject` | `reference` | Search by subject |

## Reference

- Official FHIR R5 spec: [`Task`](https://hl7.org/fhir/R5/task.html)
- Maturity: **Trial Use 3** (FMM 3).
