---
title: Binary
sidebar_label: Binary
description: "A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whe"
---

# Binary

<span className="fhir-maturity" data-level="5">Normative</span>
<span className="fhir-category">Foundation</span>

A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.

## Endpoints

<ApiBase surface="fhir" path="/Binary" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Binary/[id]` |
| Vread        | `GET`    | `/fhir/R5/Binary/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Binary/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Binary/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Binary/[id]` |
| Create       | `POST`   | `/fhir/R5/Binary` |
| Search       | `GET`    | `/fhir/R5/Binary?...` |
| History      | `GET`    | `/fhir/R5/Binary/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Binary/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `contentType` | `code` | `1..1` | MimeType of the binary content |
| `securityContext` | `Reference` | `0..1` | Identifies another resource to use as proxy when enforcing access control |
| `data` | `base64Binary` | `0..1` | The actual content |

## Resource-specific search parameters

_No resource-specific search parameters defined._

## Reference

- Official FHIR R5 spec: [`Binary`](https://hl7.org/fhir/R5/binary.html)
- Maturity: **Normative** (FMM 5).
