---
title: RequestOrchestration
sidebar_label: RequestOrchestration
description: "A set of related requests that can be used to capture intended activities that have inter-dependencies such as \"give this medication after that one\"."
---

# RequestOrchestration

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Clinical — Care Provision</span>

A set of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".

## Endpoints

<ApiBase surface="fhir" path="/RequestOrchestration" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/RequestOrchestration/[id]` |
| Vread        | `GET`    | `/fhir/R5/RequestOrchestration/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/RequestOrchestration/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/RequestOrchestration/[id]` |
| Delete       | `DELETE` | `/fhir/R5/RequestOrchestration/[id]` |
| Create       | `POST`   | `/fhir/R5/RequestOrchestration` |
| Search       | `GET`    | `/fhir/R5/RequestOrchestration?...` |
| History      | `GET`    | `/fhir/R5/RequestOrchestration/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/RequestOrchestration/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier |
| `instantiatesCanonical` | `canonical` | `0..*` | Instantiates FHIR protocol or definition |
| `instantiatesUri` | `uri` | `0..*` | Instantiates external protocol or definition |
| `basedOn` | `Reference` | `0..*` | Fulfills plan, proposal, or order |
| `replaces` | `Reference` | `0..*` | Request(s) replaced by this request |
| `groupIdentifier` | `Identifier` | `0..1` | Composite request this is part of |
| `status` | `code` | `1..1` | draft | active | on-hold | revoked | completed | entered-in-error | unknown _modifier_ |
| `intent` | `code` | `1..1` | proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option _modifier_ |
| `priority` | `code` | `0..1` | routine | urgent | asap | stat |
| `code` | `CodeableConcept` | `0..1` | What's being requested/ordered |
| `subject` | `Reference` | `0..1` | Who the request orchestration is about |
| `encounter` | `Reference` | `0..1` | Created as part of |
| `authoredOn` | `dateTime` | `0..1` | When the request orchestration was authored |
| `author` | `Reference` | `0..1` | Device or practitioner that authored the request orchestration |
| `reason` | `CodeableReference` | `0..*` | Why the request orchestration is needed |
| `goal` | `Reference` | `0..*` | What goals |
| `note` | `Annotation` | `0..*` | Additional notes about the response |
| `action` | `BackboneElement` | `0..*` | Proposed actions, if any |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `author` | `reference` | The author of the request orchestration |
| `authored` | `date` | The date the request orchestration was authored |
| `based-on` | `reference` | What this request fullfills. |
| `code` | `token` | Event or incident that occurred or was averted |
| `encounter` | `reference` | Encounter related to the activity recorded in the AuditEvent |
| `group-identifier` | `token` | The group identifier for the request orchestration |
| `identifier` | `token` | Account number |
| `instantiates-canonical` | `reference` | The FHIR-based definition from which the request orchestration is realized |
| `instantiates-uri` | `uri` | The external definition from which the request orchestration is realized |
| `intent` | `token` | The intent of the request orchestration |
| `participant` | `reference` | The participant in the requests in the orchestration |
| `patient` | `reference` | The entity that caused the expenses |
| `priority` | `token` | The priority of the request orchestration |
| `status` | `token` | The status of the request orchestration |
| `subject` | `reference` | The subject that the request orchestration is about |

## Reference

- Official FHIR R5 spec: [`RequestOrchestration`](https://hl7.org/fhir/R5/requestorchestration.html)
- Maturity: **Trial Use 4** (FMM 4).
