---
title: SubstanceReferenceInformation
sidebar_label: SubstanceReferenceInformation
description: "Todo."
---

# SubstanceReferenceInformation

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Specialized — Medication Definition</span>

Todo.

## Endpoints

<ApiBase surface="fhir" path="/SubstanceReferenceInformation" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/SubstanceReferenceInformation/[id]` |
| Vread | `GET` | `/fhir/R4/SubstanceReferenceInformation/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/SubstanceReferenceInformation/[id]` |
| Patch | `PATCH` | `/fhir/R4/SubstanceReferenceInformation/[id]` |
| Delete | `DELETE` | `/fhir/R4/SubstanceReferenceInformation/[id]` |
| Create | `POST` | `/fhir/R4/SubstanceReferenceInformation` |
| Search | `GET` | `/fhir/R4/SubstanceReferenceInformation` |
| History | `GET` | `/fhir/R4/SubstanceReferenceInformation/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `comment` | `string` | `0..1` | Todo |
| `gene` | `BackboneElement` | `0..*` | Todo |
| `geneElement` | `BackboneElement` | `0..*` | Todo |
| `classification` | `BackboneElement` | `0..*` | Todo |
| `target` | `BackboneElement` | `0..*` | Todo |

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

- Official FHIR R4 spec: [`SubstanceReferenceInformation`](https://hl7.org/fhir/R4/substancereferenceinformation.html)
- Maturity: **Draft** (FMM 0).
