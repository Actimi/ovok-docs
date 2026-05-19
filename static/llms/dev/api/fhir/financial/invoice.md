---
title: Invoice
sidebar_label: Invoice
description: "Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose."
---

# Invoice

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Financial</span>

Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.

## Endpoints

<ApiBase surface="fhir" path="/Invoice" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Invoice/[id]` |
| Vread        | `GET`    | `/fhir/R5/Invoice/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Invoice/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Invoice/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Invoice/[id]` |
| Create       | `POST`   | `/fhir/R5/Invoice` |
| Search       | `GET`    | `/fhir/R5/Invoice?...` |
| History      | `GET`    | `/fhir/R5/Invoice/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Invoice/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business Identifier for item |
| `status` | `code` | `1..1` | draft | issued | balanced | cancelled | entered-in-error _modifier_ |
| `cancelledReason` | `string` | `0..1` | Reason for cancellation of this Invoice |
| `type` | `CodeableConcept` | `0..1` | Type of Invoice |
| `subject` | `Reference` | `0..1` | Recipient(s) of goods and services |
| `recipient` | `Reference` | `0..1` | Recipient of this invoice |
| `date` | `dateTime` | `0..1` | DEPRICATED |
| `creation` | `dateTime` | `0..1` | When posted |
| `period[x]` | `date` / `Period` | `0..1` | Billing date or period |
| `participant` | `BackboneElement` | `0..*` | Participant in creation of this Invoice |
| `issuer` | `Reference` | `0..1` | Issuing Organization of Invoice |
| `account` | `Reference` | `0..1` | Account that is being balanced |
| `lineItem` | `BackboneElement` | `0..*` | Line items of this Invoice |
| `totalPriceComponent` | `MonetaryComponent` | `0..*` | Components of Invoice total |
| `totalNet` | `Money` | `0..1` | Net total of this Invoice |
| `totalGross` | `Money` | `0..1` | Gross total of this Invoice |
| `paymentTerms` | `markdown` | `0..1` | Payment details |
| `note` | `Annotation` | `0..*` | Comments made about the invoice |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `account` | `reference` | Account that is being balanced |
| `date` | `date` | When the event occurred |
| `identifier` | `token` | Account number |
| `issuer` | `reference` | Issuing Organization of Invoice |
| `participant` | `reference` | Individual who was involved |
| `participant-role` | `token` | Type of involvement in creation of this Invoice |
| `patient` | `reference` | The entity that caused the expenses |
| `recipient` | `reference` | Recipient of this invoice |
| `status` | `token` | draft | issued | balanced | cancelled | entered-in-error |
| `subject` | `reference` | Recipient(s) of goods and services |
| `totalgross` | `quantity` | Gross total of this Invoice |
| `totalnet` | `quantity` | Net total of this Invoice |
| `type` | `token` | E.g. patient, expense, depreciation |

## Reference

- Official FHIR R5 spec: [`Invoice`](https://hl7.org/fhir/R5/invoice.html)
- Maturity: **Draft** (FMM 0).
