---
title: Composition
sidebar_label: Composition
description: "A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establish"
---

# Composition

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Foundation</span>

A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).

## Endpoints

<ApiBase surface="fhir" path="/Composition" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/Composition/[id]` |
| Vread | `GET` | `/fhir/R4/Composition/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Composition/[id]` |
| Patch | `PATCH` | `/fhir/R4/Composition/[id]` |
| Delete | `DELETE` | `/fhir/R4/Composition/[id]` |
| Create | `POST` | `/fhir/R4/Composition` |
| Search | `GET` | `/fhir/R4/Composition` |
| History | `GET` | `/fhir/R4/Composition/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..1` | Version-independent identifier for the Composition |
| `status` | `code` | `1..1` | preliminary \| final \| amended \| entered-in-error _modifier_ |
| `type` | `CodeableConcept` | `1..1` | Kind of composition (LOINC if possible) |
| `category` | `CodeableConcept` | `0..*` | Categorization of Composition |
| `subject` | `Reference` | `0..1` | Who and/or what the composition is about |
| `encounter` | `Reference` | `0..1` | Context of the Composition |
| `date` | `dateTime` | `1..1` | Composition editing time |
| `author` | `Reference` | `1..*` | Who and/or what authored the composition |
| `title` | `string` | `1..1` | Human Readable name/title |
| `confidentiality` | `code` | `0..1` | As defined by affinity domain |
| `attester` | `BackboneElement` | `0..*` | Attests to accuracy of composition |
| `custodian` | `Reference` | `0..1` | Organization which maintains the composition |
| `relatesTo` | `BackboneElement` | `0..*` | Relationships to other compositions/documents |
| `event` | `BackboneElement` | `0..*` | The clinical service(s) being documented |
| `section` | `BackboneElement` | `0..*` | Composition is broken into sections |

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
| `attester` | `string` | http://hl7.org/fhir/SearchParameter/Composition-attester |
| `author` | `string` | http://hl7.org/fhir/SearchParameter/Composition-author |
| `category` | `string` | http://hl7.org/fhir/SearchParameter/Composition-category |
| `confidentiality` | `string` | http://hl7.org/fhir/SearchParameter/Composition-confidentiality |
| `context` | `string` | http://hl7.org/fhir/SearchParameter/Composition-context |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/clinical-date |
| `encounter` | `string` | http://hl7.org/fhir/SearchParameter/clinical-encounter |
| `entry` | `string` | http://hl7.org/fhir/SearchParameter/Composition-entry |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/clinical-identifier |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/clinical-patient |
| `period` | `string` | http://hl7.org/fhir/SearchParameter/Composition-period |
| `related-id` | `string` | http://hl7.org/fhir/SearchParameter/Composition-related-id |
| `related-ref` | `string` | http://hl7.org/fhir/SearchParameter/Composition-related-ref |
| `section` | `string` | http://hl7.org/fhir/SearchParameter/Composition-section |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/Composition-status |
| `subject` | `string` | http://hl7.org/fhir/SearchParameter/Composition-subject |
| `title` | `string` | http://hl7.org/fhir/SearchParameter/Composition-title |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/clinical-type |

## Reference

- Official FHIR R4 spec: [`Composition`](https://hl7.org/fhir/R4/composition.html)
- Maturity: **Trial Use 2** (FMM 2).
