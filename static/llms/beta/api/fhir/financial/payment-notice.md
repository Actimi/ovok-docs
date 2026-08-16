---
title: PaymentNotice
sidebar_label: PaymentNotice
description: "This resource provides the status of the payment for goods and services rendered, and the request and response resource references."
---

# PaymentNotice

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Financial</span>

This resource provides the status of the payment for goods and services rendered, and the request and response resource references.

## Endpoints

<ApiBase surface="fhir" path="/PaymentNotice" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/PaymentNotice/[id]` |
| Vread | `GET` | `/fhir/R4/PaymentNotice/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/PaymentNotice/[id]` |
| Patch | `PATCH` | `/fhir/R4/PaymentNotice/[id]` |
| Delete | `DELETE` | `/fhir/R4/PaymentNotice/[id]` |
| Create | `POST` | `/fhir/R4/PaymentNotice` |
| Search | `GET` | `/fhir/R4/PaymentNotice` |
| History | `GET` | `/fhir/R4/PaymentNotice/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business Identifier for the payment noctice |
| `status` | `code` | `1..1` | active \| cancelled \| draft \| entered-in-error _modifier_ |
| `request` | `Reference` | `0..1` | Request reference |
| `response` | `Reference` | `0..1` | Response reference |
| `created` | `dateTime` | `1..1` | Creation date |
| `provider` | `Reference` | `0..1` | Responsible practitioner |
| `payment` | `Reference` | `1..1` | Payment reference |
| `paymentDate` | `date` | `0..1` | Payment or clearing date |
| `payee` | `Reference` | `0..1` | Party being paid |
| `recipient` | `Reference` | `1..1` | Party being notified |
| `amount` | `Money` | `1..1` | Monetary amount of the payment |
| `paymentStatus` | `CodeableConcept` | `0..1` | Issued or cleared Status of the payment |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `_compartment` | `string` |  |
| `_count` | `string` | https://www.hl7.org/fhir/search.html#_count |
| `_elements` | `string` | https://www.hl7.org/fhir/search.html#_elements |
| `_id` | `string` |  |
| `_lastUpdated` | `string` |  |
| `_profile` | `string` |  |
| `_security` | `string` |  |
| `_sort` | `string` | https://www.hl7.org/fhir/search.html#_sort |
| `_source` | `string` |  |
| `_summary` | `string` | https://www.hl7.org/fhir/search.html#_summary |
| `_tag` | `string` |  |
| `_total` | `string` | https://www.hl7.org/fhir/search.html#_total |
| `created` | `string` | http://hl7.org/fhir/SearchParameter/PaymentNotice-created |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/PaymentNotice-identifier |
| `payment-status` | `string` | http://hl7.org/fhir/SearchParameter/PaymentNotice-payment-status |
| `provider` | `string` | http://hl7.org/fhir/SearchParameter/PaymentNotice-provider |
| `request` | `string` | http://hl7.org/fhir/SearchParameter/PaymentNotice-request |
| `response` | `string` | http://hl7.org/fhir/SearchParameter/PaymentNotice-response |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/PaymentNotice-status |

## Reference

- Official FHIR R4 spec: [`PaymentNotice`](https://hl7.org/fhir/R4/paymentnotice.html)
- Maturity: **Trial Use 2** (FMM 2).
