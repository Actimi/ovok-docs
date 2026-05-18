---
title: ServiceRequest
sidebar_label: ServiceRequest
description: "A record of a request for service such as diagnostic investigations, treatments, or operations to be performed."
---

# ServiceRequest

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Clinical — Care Provision</span>

A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.

## Endpoints

<ApiBase surface="fhir" path="/ServiceRequest" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/ServiceRequest/[id]` |
| Vread        | `GET`    | `/fhir/R5/ServiceRequest/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/ServiceRequest/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/ServiceRequest/[id]` |
| Delete       | `DELETE` | `/fhir/R5/ServiceRequest/[id]` |
| Create       | `POST`   | `/fhir/R5/ServiceRequest` |
| Search       | `GET`    | `/fhir/R5/ServiceRequest?...` |
| History      | `GET`    | `/fhir/R5/ServiceRequest/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/ServiceRequest/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Identifiers assigned to this order |
| `instantiatesCanonical` | `canonical` | `0..*` | Instantiates FHIR protocol or definition |
| `instantiatesUri` | `uri` | `0..*` | Instantiates external protocol or definition |
| `basedOn` | `Reference` | `0..*` | What request fulfills |
| `replaces` | `Reference` | `0..*` | What request replaces |
| `requisition` | `Identifier` | `0..1` | Composite Request ID |
| `status` | `code` | `1..1` | draft | active | on-hold | revoked | completed | entered-in-error | unknown _modifier_ |
| `intent` | `code` | `1..1` | proposal | plan | directive | order + _modifier_ |
| `category` | `CodeableConcept` | `0..*` | Classification of service |
| `priority` | `code` | `0..1` | routine | urgent | asap | stat |
| `doNotPerform` | `boolean` | `0..1` | True if service/procedure should not be performed _modifier_ |
| `code` | `CodeableReference` | `0..1` | What is being requested/ordered |
| `orderDetail` | `BackboneElement` | `0..*` | Additional order information |
| `quantity[x]` | `Quantity` / `Ratio` / `Range` | `0..1` | Service amount |
| `subject` | `Reference` | `1..1` | Individual or Entity the service is ordered for |
| `focus` | `Reference` | `0..*` | What the service request is about, when it is not about the subject of record |
| `encounter` | `Reference` | `0..1` | Encounter in which the request was created |
| `occurrence[x]` | `dateTime` / `Period` / `Timing` | `0..1` | When service should occur |
| `asNeeded[x]` | `boolean` / `CodeableConcept` | `0..1` | Preconditions for service |
| `authoredOn` | `dateTime` | `0..1` | Date request signed |
| `requester` | `Reference` | `0..1` | Who/what is requesting service |
| `performerType` | `CodeableConcept` | `0..1` | Performer role |
| `performer` | `Reference` | `0..*` | Requested performer |
| `location` | `CodeableReference` | `0..*` | Requested location |
| `reason` | `CodeableReference` | `0..*` | Explanation/Justification for procedure or service |
| `insurance` | `Reference` | `0..*` | Associated insurance coverage |
| `supportingInfo` | `CodeableReference` | `0..*` | Additional clinical information |
| `specimen` | `Reference` | `0..*` | Procedure Samples |
| `bodySite` | `CodeableConcept` | `0..*` | Coded location on Body |
| `bodyStructure` | `Reference` | `0..1` | BodyStructure-based location on the body |
| `note` | `Annotation` | `0..*` | Comments |
| `patientInstruction` | `BackboneElement` | `0..*` | Patient or consumer-oriented instructions |
| `relevantHistory` | `Reference` | `0..*` | Request provenance |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`ServiceRequest` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `authored` | `date` | Date request signed |
| `based-on` | `reference` | What request fulfills |
| `body-site` | `token` | Where procedure is going to be done |
| `body-structure` | `reference` | Body structure Where procedure is going to be done |
| `category` | `token` | Classification of service |
| `code-concept` | `token` | What is being requested/ordered |
| `code-reference` | `reference` | What is being requested/ordered |
| `encounter` | `reference` | Encounter related to the activity recorded in the AuditEvent |
| `identifier` | `token` | Account number |
| `instantiates-canonical` | `reference` | Instantiates FHIR protocol or definition |
| `instantiates-uri` | `uri` | Instantiates external protocol or definition |
| `intent` | `token` | proposal | plan | directive | order + |
| `occurrence` | `date` | When service should occur |
| `patient` | `reference` | The entity that caused the expenses |
| `performer` | `reference` | Requested performer |
| `performer-type` | `token` | Performer role |
| `priority` | `token` | routine | urgent | asap | stat |
| `replaces` | `reference` | What request replaces |
| `requester` | `reference` | Who/what is requesting service |
| `requisition` | `token` | Composite Request ID |
| `specimen` | `reference` | Specimen to be tested |
| `status` | `token` | draft | active | on-hold | revoked | completed | entered-in-error | unknown |
| `subject` | `reference` | Search by subject |

## Reference

- Official FHIR R5 spec: [`ServiceRequest`](https://hl7.org/fhir/R5/servicerequest.html)
- Element bindings & profiles: [`ServiceRequest` profile](https://hl7.org/fhir/R5/servicerequest-definitions.html)
- Maturity: **Trial Use 4** (FMM 4).
