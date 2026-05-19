---
title: PaymentNotice
sidebar_label: PaymentNotice
description: "This resource provides the status of the payment for goods and services rendered, and the request and response resource references."
---

# PaymentNotice

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Financial</span>

This resource provides the status of the payment for goods and services rendered, and the request and response resource references.

## Endpoints

<ApiBase surface="fhir" path="/PaymentNotice" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/PaymentNotice/[id]` |
| Vread        | `GET`    | `/fhir/R5/PaymentNotice/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/PaymentNotice/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/PaymentNotice/[id]` |
| Delete       | `DELETE` | `/fhir/R5/PaymentNotice/[id]` |
| Create       | `POST`   | `/fhir/R5/PaymentNotice` |
| Search       | `GET`    | `/fhir/R5/PaymentNotice?...` |
| History      | `GET`    | `/fhir/R5/PaymentNotice/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/PaymentNotice/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business Identifier for the payment notice |
| `status` | `code` | `1..1` | active | cancelled | draft | entered-in-error _modifier_ |
| `request` | `Reference` | `0..1` | Request reference |
| `response` | `Reference` | `0..1` | Response reference |
| `created` | `dateTime` | `1..1` | Creation date |
| `reporter` | `Reference` | `0..1` | Responsible practitioner |
| `payment` | `Reference` | `0..1` | Payment reference |
| `paymentDate` | `date` | `0..1` | Payment or clearing date |
| `payee` | `Reference` | `0..1` | Party being paid |
| `recipient` | `Reference` | `1..1` | Party being notified |
| `amount` | `Money` | `1..1` | Monetary amount of the payment |
| `paymentStatus` | `CodeableConcept` | `0..1` | Issued or cleared Status of the payment |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `created` | `date` | Creation date for the notice |
| `identifier` | `token` | The business identifier of the notice |
| `payment-status` | `token` | The type of payment notice |
| `reporter` | `reference` | The reference to the reporter |
| `request` | `reference` | The Claim |
| `response` | `reference` | The ClaimResponse |
| `status` | `token` | The status of the payment notice |

## Reference

- Official FHIR R5 spec: [`PaymentNotice`](https://hl7.org/fhir/R5/paymentnotice.html)
- Maturity: **Trial Use 4** (FMM 4).
