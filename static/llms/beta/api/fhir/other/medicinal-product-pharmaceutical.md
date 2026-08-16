---
title: MedicinalProductPharmaceutical
sidebar_label: MedicinalProductPharmaceutical
description: "A pharmaceutical product described in terms of its composition and dose form."
---

# MedicinalProductPharmaceutical

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Other</span>

A pharmaceutical product described in terms of its composition and dose form.

## Endpoints

<ApiBase surface="fhir" path="/MedicinalProductPharmaceutical" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/MedicinalProductPharmaceutical/[id]` |
| Vread | `GET` | `/fhir/R4/MedicinalProductPharmaceutical/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/MedicinalProductPharmaceutical/[id]` |
| Patch | `PATCH` | `/fhir/R4/MedicinalProductPharmaceutical/[id]` |
| Delete | `DELETE` | `/fhir/R4/MedicinalProductPharmaceutical/[id]` |
| Create | `POST` | `/fhir/R4/MedicinalProductPharmaceutical` |
| Search | `GET` | `/fhir/R4/MedicinalProductPharmaceutical` |
| History | `GET` | `/fhir/R4/MedicinalProductPharmaceutical/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | An identifier for the pharmaceutical medicinal product |
| `administrableDoseForm` | `CodeableConcept` | `1..1` | The administrable dose form, after necessary reconstitution |
| `unitOfPresentation` | `CodeableConcept` | `0..1` | Todo |
| `ingredient` | `Reference` | `0..*` | Ingredient |
| `device` | `Reference` | `0..*` | Accompanying device |
| `characteristics` | `BackboneElement` | `0..*` | Characteristics e.g. a products onset of action |
| `routeOfAdministration` | `BackboneElement` | `1..*` | The path by which the pharmaceutical product is taken into or makes contact with the body |

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
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/MedicinalProductPharmaceutical-identifier |
| `route` | `string` | http://hl7.org/fhir/SearchParameter/MedicinalProductPharmaceutical-route |
| `target-species` | `string` | http://hl7.org/fhir/SearchParameter/MedicinalProductPharmaceutical-target-species |

## Reference

- Official FHIR R4 spec: [`MedicinalProductPharmaceutical`](https://hl7.org/fhir/R4/medicinalproductpharmaceutical.html)
- Maturity: **Draft** (FMM 0).
