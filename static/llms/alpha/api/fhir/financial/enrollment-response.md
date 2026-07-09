---
title: EnrollmentResponse
sidebar_label: EnrollmentResponse
description: "This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource."
---

# EnrollmentResponse

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Financial</span>

This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.

## Endpoints

<ApiBase surface="fhir" path="/EnrollmentResponse" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/EnrollmentResponse/[id]` |
| Vread        | `GET`    | `/fhir/R5/EnrollmentResponse/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/EnrollmentResponse/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/EnrollmentResponse/[id]` |
| Delete       | `DELETE` | `/fhir/R5/EnrollmentResponse/[id]` |
| Create       | `POST`   | `/fhir/R5/EnrollmentResponse` |
| Search       | `GET`    | `/fhir/R5/EnrollmentResponse?...` |
| History      | `GET`    | `/fhir/R5/EnrollmentResponse/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/EnrollmentResponse/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business Identifier |
| `status` | `code` | `0..1` | active | cancelled | draft | entered-in-error _modifier_ |
| `request` | `Reference` | `0..1` | Claim reference |
| `outcome` | `code` | `0..1` | queued | complete | error | partial |
| `disposition` | `string` | `0..1` | Disposition Message |
| `created` | `dateTime` | `0..1` | Creation date |
| `organization` | `Reference` | `0..1` | Insurer |
| `requestProvider` | `Reference` | `0..1` | Responsible practitioner |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `identifier` | `token` | The business identifier of the EnrollmentResponse |
| `request` | `reference` | The reference to the claim |
| `status` | `token` | The status of the enrollment response |

## Reference

- Official FHIR R5 spec: [`EnrollmentResponse`](https://hl7.org/fhir/R5/enrollmentresponse.html)
- Maturity: **Draft** (FMM 0).
