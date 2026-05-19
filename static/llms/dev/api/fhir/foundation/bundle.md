---
title: Bundle
sidebar_label: Bundle
description: "A container for a collection of resources."
---

# Bundle

<span className="fhir-maturity" data-level="5">Normative</span>
<span className="fhir-category">Foundation</span>

A container for a collection of resources.

## Endpoints

<ApiBase surface="fhir" path="/Bundle" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Bundle/[id]` |
| Vread        | `GET`    | `/fhir/R5/Bundle/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Bundle/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Bundle/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Bundle/[id]` |
| Create       | `POST`   | `/fhir/R5/Bundle` |
| Search       | `GET`    | `/fhir/R5/Bundle?...` |
| History      | `GET`    | `/fhir/R5/Bundle/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Bundle/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..1` | Persistent identifier for the bundle |
| `type` | `code` | `1..1` | document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection | subscription-notification |
| `timestamp` | `instant` | `0..1` | When the bundle was assembled |
| `total` | `unsignedInt` | `0..1` | If search, the total number of matches |
| `link` | `BackboneElement` | `0..*` | Links related to this Bundle |
| `entry` | `BackboneElement` | `0..*` | Entry in the bundle - will have a resource or information |
| `signature` | `Signature` | `0..1` | Digital Signature |
| `issues` | `Resource` | `0..1` | Issues with the Bundle |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `composition` | `reference` | The first resource in the bundle, if the bundle type is "document" - this is a composition, and this parameter provides access to search its contents |
| `example-constraint` | `reference` | Search Composition Bundle |
| `identifier` | `token` | Persistent identifier for the bundle |
| `message` | `reference` | The first resource in the bundle, if the bundle type is "message" - this is a message header, and this parameter provides access to search its contents |
| `timestamp` | `date` | When the bundle was assembled |
| `type` | `token` | document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection | subscription-notification |

## Reference

- Official FHIR R5 spec: [`Bundle`](https://hl7.org/fhir/R5/bundle.html)
- Maturity: **Normative** (FMM 5).
