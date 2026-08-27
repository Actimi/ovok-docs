---
title: Account
sidebar_label: Account
description: "A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc."
---

# Account

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Financial</span>

A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.

## Endpoints

<ApiBase surface="fhir" path="/Account" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/Account/[id]` |
| Vread | `GET` | `/fhir/R4/Account/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Account/[id]` |
| Patch | `PATCH` | `/fhir/R4/Account/[id]` |
| Delete | `DELETE` | `/fhir/R4/Account/[id]` |
| Create | `POST` | `/fhir/R4/Account` |
| Search | `GET` | `/fhir/R4/Account` |
| History | `GET` | `/fhir/R4/Account/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Account number |
| `status` | `code` | `1..1` | active \| inactive \| entered-in-error \| on-hold \| unknown _modifier_ |
| `type` | `CodeableConcept` | `0..1` | E.g. patient, expense, depreciation |
| `name` | `string` | `0..1` | Human-readable label |
| `subject` | `Reference` | `0..*` | The entity that caused the expenses |
| `servicePeriod` | `Period` | `0..1` | Transaction window |
| `coverage` | `BackboneElement` | `0..*` | The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account |
| `owner` | `Reference` | `0..1` | Entity managing the Account |
| `description` | `string` | `0..1` | Explanation of purpose/use |
| `guarantor` | `BackboneElement` | `0..*` | The parties ultimately responsible for balancing the Account |
| `partOf` | `Reference` | `0..1` | Reference to a parent Account |

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
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/Account-identifier |
| `name` | `string` | http://hl7.org/fhir/SearchParameter/Account-name |
| `owner` | `string` | http://hl7.org/fhir/SearchParameter/Account-owner |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/Account-patient |
| `period` | `string` | http://hl7.org/fhir/SearchParameter/Account-period |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/Account-status |
| `subject` | `string` | http://hl7.org/fhir/SearchParameter/Account-subject |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/Account-type |

## Reference

- Official FHIR R4 spec: [`Account`](https://hl7.org/fhir/R4/account.html)
- Maturity: **Trial Use 2** (FMM 2).
