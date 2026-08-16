---
title: SupplyDelivery
sidebar_label: SupplyDelivery
description: "Record of delivery of what is supplied."
---

# SupplyDelivery

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Clinical — Care Provision</span>

Record of delivery of what is supplied.

## Endpoints

<ApiBase surface="fhir" path="/SupplyDelivery" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/SupplyDelivery/[id]` |
| Vread | `GET` | `/fhir/R4/SupplyDelivery/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/SupplyDelivery/[id]` |
| Patch | `PATCH` | `/fhir/R4/SupplyDelivery/[id]` |
| Delete | `DELETE` | `/fhir/R4/SupplyDelivery/[id]` |
| Create | `POST` | `/fhir/R4/SupplyDelivery` |
| Search | `GET` | `/fhir/R4/SupplyDelivery` |
| History | `GET` | `/fhir/R4/SupplyDelivery/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | External identifier |
| `basedOn` | `Reference` | `0..*` | Fulfills plan, proposal or order |
| `partOf` | `Reference` | `0..*` | Part of referenced event |
| `status` | `code` | `0..1` | in-progress \| completed \| abandoned \| entered-in-error _modifier_ |
| `patient` | `Reference` | `0..1` | Patient for whom the item is supplied |
| `type` | `CodeableConcept` | `0..1` | Category of dispense event |
| `suppliedItem` | `BackboneElement` | `0..1` | The item that is delivered or supplied |
| `occurrence[x]` | `dateTime` / `Period` / `Timing` | `0..1` | When event occurred |
| `supplier` | `Reference` | `0..1` | Dispenser |
| `destination` | `Reference` | `0..1` | Where the Supply was sent |
| `receiver` | `Reference` | `0..*` | Who collected the Supply |

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
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/clinical-identifier |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/clinical-patient |
| `receiver` | `string` | http://hl7.org/fhir/SearchParameter/SupplyDelivery-receiver |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/SupplyDelivery-status |
| `supplier` | `string` | http://hl7.org/fhir/SearchParameter/SupplyDelivery-supplier |

## Reference

- Official FHIR R4 spec: [`SupplyDelivery`](https://hl7.org/fhir/R4/supplydelivery.html)
- Maturity: **Trial Use 1** (FMM 1).
