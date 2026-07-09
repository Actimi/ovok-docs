---
title: MessageHeader
sidebar_label: MessageHeader
description: "The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other in"
---

# MessageHeader

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Foundation</span>

The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.

## Endpoints

<ApiBase surface="fhir" path="/MessageHeader" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/MessageHeader/[id]` |
| Vread        | `GET`    | `/fhir/R5/MessageHeader/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/MessageHeader/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/MessageHeader/[id]` |
| Delete       | `DELETE` | `/fhir/R5/MessageHeader/[id]` |
| Create       | `POST`   | `/fhir/R5/MessageHeader` |
| Search       | `GET`    | `/fhir/R5/MessageHeader?...` |
| History      | `GET`    | `/fhir/R5/MessageHeader/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/MessageHeader/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `event[x]` | `Coding` / `canonical` | `1..1` | Event code or link to EventDefinition |
| `destination` | `BackboneElement` | `0..*` | Message destination application(s) |
| `sender` | `Reference` | `0..1` | Real world sender of the message |
| `author` | `Reference` | `0..1` | The source of the decision |
| `source` | `BackboneElement` | `1..1` | Message source application |
| `responsible` | `Reference` | `0..1` | Final responsibility for event |
| `reason` | `CodeableConcept` | `0..1` | Cause of event |
| `response` | `BackboneElement` | `0..1` | If this is a reply to prior message |
| `focus` | `Reference` | `0..*` | The actual content of the message |
| `definition` | `canonical` | `0..1` | Link to the definition for this message |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `author` | `reference` | The source of the decision |
| `code` | `token` | ok | transient-error | fatal-error |
| `destination` | `string` | Name of system |
| `event` | `token` | Code for the event this message represents or link to event definition |
| `focus` | `reference` | The actual content of the message |
| `receiver` | `reference` | Intended "real-world" recipient for the data |
| `response-id` | `token` | Id of original message |
| `responsible` | `reference` | Final responsibility for event |
| `sender` | `reference` | Real world sender of the message |
| `source` | `string` | Name of system |
| `target` | `reference` | Particular delivery destination within the destination |

## Reference

- Official FHIR R5 spec: [`MessageHeader`](https://hl7.org/fhir/R5/messageheader.html)
- Maturity: **Trial Use 4** (FMM 4).
