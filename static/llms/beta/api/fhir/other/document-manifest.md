---
title: DocumentManifest
sidebar_label: DocumentManifest
description: "A collection of documents compiled for a purpose together with metadata that applies to the collection."
---

# DocumentManifest

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Other</span>

A collection of documents compiled for a purpose together with metadata that applies to the collection.

## Endpoints

<ApiBase surface="fhir" path="/DocumentManifest" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/DocumentManifest/[id]` |
| Vread | `GET` | `/fhir/R4/DocumentManifest/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/DocumentManifest/[id]` |
| Patch | `PATCH` | `/fhir/R4/DocumentManifest/[id]` |
| Delete | `DELETE` | `/fhir/R4/DocumentManifest/[id]` |
| Create | `POST` | `/fhir/R4/DocumentManifest` |
| Search | `GET` | `/fhir/R4/DocumentManifest` |
| History | `GET` | `/fhir/R4/DocumentManifest/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `masterIdentifier` | `Identifier` | `0..1` | Unique Identifier for the set of documents |
| `identifier` | `Identifier` | `0..*` | Other identifiers for the manifest |
| `status` | `code` | `1..1` | current \| superseded \| entered-in-error _modifier_ |
| `type` | `CodeableConcept` | `0..1` | Kind of document set |
| `subject` | `Reference` | `0..1` | The subject of the set of documents |
| `created` | `dateTime` | `0..1` | When this document manifest created |
| `author` | `Reference` | `0..*` | Who and/or what authored the DocumentManifest |
| `recipient` | `Reference` | `0..*` | Intended to get notified about this set of documents |
| `source` | `uri` | `0..1` | The source system/application/software |
| `description` | `string` | `0..1` | Human-readable description (title) |
| `content` | `Reference` | `1..*` | Items in manifest |
| `related` | `BackboneElement` | `0..*` | Related things |

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
| `author` | `string` | http://hl7.org/fhir/SearchParameter/DocumentManifest-author |
| `created` | `string` | http://hl7.org/fhir/SearchParameter/DocumentManifest-created |
| `description` | `string` | http://hl7.org/fhir/SearchParameter/DocumentManifest-description |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/clinical-identifier |
| `item` | `string` | http://hl7.org/fhir/SearchParameter/DocumentManifest-item |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/clinical-patient |
| `recipient` | `string` | http://hl7.org/fhir/SearchParameter/DocumentManifest-recipient |
| `related-id` | `string` | http://hl7.org/fhir/SearchParameter/DocumentManifest-related-id |
| `related-ref` | `string` | http://hl7.org/fhir/SearchParameter/DocumentManifest-related-ref |
| `source` | `string` | http://hl7.org/fhir/SearchParameter/DocumentManifest-source |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/DocumentManifest-status |
| `subject` | `string` | http://hl7.org/fhir/SearchParameter/DocumentManifest-subject |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/clinical-type |

## Reference

- Official FHIR R4 spec: [`DocumentManifest`](https://hl7.org/fhir/R4/documentmanifest.html)
- Maturity: **Trial Use 2** (FMM 2).
