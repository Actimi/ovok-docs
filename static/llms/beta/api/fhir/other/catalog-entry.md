---
title: CatalogEntry
sidebar_label: CatalogEntry
description: "Catalog entries are wrappers that contextualize items included in a catalog."
---

# CatalogEntry

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Other</span>

Catalog entries are wrappers that contextualize items included in a catalog.

## Endpoints

<ApiBase surface="fhir" path="/CatalogEntry" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/CatalogEntry/[id]` |
| Vread | `GET` | `/fhir/R4/CatalogEntry/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/CatalogEntry/[id]` |
| Patch | `PATCH` | `/fhir/R4/CatalogEntry/[id]` |
| Delete | `DELETE` | `/fhir/R4/CatalogEntry/[id]` |
| Create | `POST` | `/fhir/R4/CatalogEntry` |
| Search | `GET` | `/fhir/R4/CatalogEntry` |
| History | `GET` | `/fhir/R4/CatalogEntry/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Unique identifier of the catalog item |
| `type` | `CodeableConcept` | `0..1` | The type of item - medication, device, service, protocol or other |
| `orderable` | `boolean` | `1..1` | Whether the entry represents an orderable item |
| `referencedItem` | `Reference` | `1..1` | The item that is being defined |
| `additionalIdentifier` | `Identifier` | `0..*` | Any additional identifier(s) for the catalog item, in the same granularity or concept |
| `classification` | `CodeableConcept` | `0..*` | Classification (category or class) of the item entry |
| `status` | `code` | `0..1` | draft \| active \| retired \| unknown |
| `validityPeriod` | `Period` | `0..1` | The time period in which this catalog entry is expected to be active |
| `validTo` | `dateTime` | `0..1` | The date until which this catalog entry is expected to be active |
| `lastUpdated` | `dateTime` | `0..1` | When was this catalog last updated |
| `additionalCharacteristic` | `CodeableConcept` | `0..*` | Additional characteristics of the catalog entry |
| `additionalClassification` | `CodeableConcept` | `0..*` | Additional classification of the catalog entry |
| `relatedEntry` | `BackboneElement` | `0..*` | An item that this catalog entry is related to |

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

## Reference

- Official FHIR R4 spec: [`CatalogEntry`](https://hl7.org/fhir/R4/catalogentry.html)
- Maturity: **Draft** (FMM 0).
