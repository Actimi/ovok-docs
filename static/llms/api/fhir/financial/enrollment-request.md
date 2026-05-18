---
title: EnrollmentRequest
sidebar_label: EnrollmentRequest
description: "This resource provides the insurance enrollment details to the insurer regarding a specified coverage."
---

# EnrollmentRequest

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Financial</span>

This resource provides the insurance enrollment details to the insurer regarding a specified coverage.

## Endpoints

<ApiBase surface="fhir" path="/EnrollmentRequest" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/EnrollmentRequest/[id]` |
| Vread        | `GET`    | `/fhir/R5/EnrollmentRequest/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/EnrollmentRequest/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/EnrollmentRequest/[id]` |
| Delete       | `DELETE` | `/fhir/R5/EnrollmentRequest/[id]` |
| Create       | `POST`   | `/fhir/R5/EnrollmentRequest` |
| Search       | `GET`    | `/fhir/R5/EnrollmentRequest?...` |
| History      | `GET`    | `/fhir/R5/EnrollmentRequest/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/EnrollmentRequest/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business Identifier |
| `status` | `code` | `0..1` | active | cancelled | draft | entered-in-error _modifier_ |
| `created` | `dateTime` | `0..1` | Creation date |
| `insurer` | `Reference` | `0..1` | Target |
| `provider` | `Reference` | `0..1` | Responsible practitioner |
| `candidate` | `Reference` | `0..1` | The subject to be enrolled |
| `coverage` | `Reference` | `0..1` | Insurance information |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`EnrollmentRequest` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `identifier` | `token` | Account number |
| `patient` | `reference` | The entity that caused the expenses |
| `status` | `token` | The status of the enrollment |
| `subject` | `reference` | The party to be enrolled |

## Reference

- Official FHIR R5 spec: [`EnrollmentRequest`](https://hl7.org/fhir/R5/enrollmentrequest.html)
- Element bindings & profiles: [`EnrollmentRequest` profile](https://hl7.org/fhir/R5/enrollmentrequest-definitions.html)
- Maturity: **Draft** (FMM 0).
