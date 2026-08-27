---
title: Provenance
sidebar_label: Provenance
description: "Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenan"
---

# Provenance

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Foundation</span>

Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.

## Endpoints

<ApiBase surface="fhir" path="/Provenance" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/Provenance/[id]` |
| Vread | `GET` | `/fhir/R4/Provenance/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Provenance/[id]` |
| Patch | `PATCH` | `/fhir/R4/Provenance/[id]` |
| Delete | `DELETE` | `/fhir/R4/Provenance/[id]` |
| Create | `POST` | `/fhir/R4/Provenance` |
| Search | `GET` | `/fhir/R4/Provenance` |
| History | `GET` | `/fhir/R4/Provenance/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `target` | `Reference` | `1..*` | Target Reference(s) (usually version specific) |
| `occurred[x]` | `Period` / `dateTime` | `0..1` | When the activity occurred |
| `recorded` | `instant` | `1..1` | When the activity was recorded / updated |
| `policy` | `uri` | `0..*` | Policy or plan the activity was defined by |
| `location` | `Reference` | `0..1` | Where the activity occurred, if relevant |
| `reason` | `CodeableConcept` | `0..*` | Reason the activity is occurring |
| `activity` | `CodeableConcept` | `0..1` | Activity that occurred |
| `agent` | `BackboneElement` | `1..*` | Actor involved |
| `entity` | `BackboneElement` | `0..*` | An entity used in this activity |
| `signature` | `Signature` | `0..*` | Signature on target |

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
| `agent` | `string` | http://hl7.org/fhir/SearchParameter/Provenance-agent |
| `agent-role` | `string` | http://hl7.org/fhir/SearchParameter/Provenance-agent-role |
| `agent-type` | `string` | http://hl7.org/fhir/SearchParameter/Provenance-agent-type |
| `entity` | `string` | http://hl7.org/fhir/SearchParameter/Provenance-entity |
| `location` | `string` | http://hl7.org/fhir/SearchParameter/Provenance-location |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/Provenance-patient |
| `recorded` | `string` | http://hl7.org/fhir/SearchParameter/Provenance-recorded |
| `signature-type` | `string` | http://hl7.org/fhir/SearchParameter/Provenance-signature-type |
| `target` | `string` | http://hl7.org/fhir/SearchParameter/Provenance-target |
| `when` | `string` | http://hl7.org/fhir/SearchParameter/Provenance-when |

## Reference

- Official FHIR R4 spec: [`Provenance`](https://hl7.org/fhir/R4/provenance.html)
- Maturity: **Trial Use 3** (FMM 3).
