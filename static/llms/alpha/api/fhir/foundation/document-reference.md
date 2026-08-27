---
title: DocumentReference
sidebar_label: DocumentReference
description: "A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a d"
---

# DocumentReference

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Foundation</span>

A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.

## Endpoints

<ApiBase surface="fhir" path="/DocumentReference" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/DocumentReference/[id]` |
| Vread | `GET` | `/fhir/R4/DocumentReference/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/DocumentReference/[id]` |
| Patch | `PATCH` | `/fhir/R4/DocumentReference/[id]` |
| Delete | `DELETE` | `/fhir/R4/DocumentReference/[id]` |
| Create | `POST` | `/fhir/R4/DocumentReference` |
| Search | `GET` | `/fhir/R4/DocumentReference` |
| History | `GET` | `/fhir/R4/DocumentReference/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `masterIdentifier` | `Identifier` | `0..1` | Master Version Specific Identifier |
| `identifier` | `Identifier` | `0..*` | Other identifiers for the document |
| `status` | `code` | `1..1` | current \| superseded \| entered-in-error _modifier_ |
| `docStatus` | `code` | `0..1` | preliminary \| final \| amended \| entered-in-error |
| `type` | `CodeableConcept` | `0..1` | Kind of document (LOINC if possible) |
| `category` | `CodeableConcept` | `0..*` | Categorization of document |
| `subject` | `Reference` | `0..1` | Who/what is the subject of the document |
| `date` | `instant` | `0..1` | When this document reference was created |
| `author` | `Reference` | `0..*` | Who and/or what authored the document |
| `authenticator` | `Reference` | `0..1` | Who/what authenticated the document |
| `custodian` | `Reference` | `0..1` | Organization which maintains the document |
| `relatesTo` | `BackboneElement` | `0..*` | Relationships to other documents |
| `description` | `string` | `0..1` | Human-readable description |
| `securityLabel` | `CodeableConcept` | `0..*` | Document security-tags |
| `content` | `BackboneElement` | `1..*` | Document referenced |
| `context` | `BackboneElement` | `0..1` | Clinical context of document |

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
| `authenticator` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-authenticator |
| `author` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-author |
| `category` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-category |
| `contenttype` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-contenttype |
| `custodian` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-custodian |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-date |
| `description` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-description |
| `encounter` | `string` | http://hl7.org/fhir/SearchParameter/clinical-encounter |
| `event` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-event |
| `facility` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-facility |
| `format` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-format |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/clinical-identifier |
| `language` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-language |
| `location` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-location |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/clinical-patient |
| `period` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-period |
| `related` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-related |
| `relatesto` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-relatesto |
| `relation` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-relation |
| `relationship` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-relationship |
| `security-label` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-security-label |
| `setting` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-setting |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-status |
| `subject` | `string` | http://hl7.org/fhir/SearchParameter/DocumentReference-subject |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/clinical-type |

## Reference

- Official FHIR R4 spec: [`DocumentReference`](https://hl7.org/fhir/R4/documentreference.html)
- Maturity: **Trial Use 3** (FMM 3).
