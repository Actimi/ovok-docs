---
title: DocumentReference
sidebar_label: DocumentReference
description: "A reference to a document of any kind for any purpose. While the term “document” implies a more narrow focus, for this resource this “document” encompasses *any"
---

# DocumentReference

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Foundation</span>

A reference to a document of any kind for any purpose. While the term “document” implies a more narrow focus, for this resource this “document” encompasses *any* serialized object with a mime-type, it includes formal patient-centric documents (CDA), clinical notes, scanned paper, non-patient specific documents like policy text, as well as a photo, video, or audio recording acquired or used in healthcare.  The DocumentReference resource provides metadata about the document so that the document can be discovered and managed.  The actual content may be inline base64 encoded data or provided by direct reference.

## Endpoints

<ApiBase surface="fhir" path="/DocumentReference" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/DocumentReference/[id]` |
| Vread        | `GET`    | `/fhir/R5/DocumentReference/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/DocumentReference/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/DocumentReference/[id]` |
| Delete       | `DELETE` | `/fhir/R5/DocumentReference/[id]` |
| Create       | `POST`   | `/fhir/R5/DocumentReference` |
| Search       | `GET`    | `/fhir/R5/DocumentReference?...` |
| History      | `GET`    | `/fhir/R5/DocumentReference/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/DocumentReference/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifiers for the document |
| `version` | `string` | `0..1` | An explicitly assigned identifer of a variation of the content in the DocumentReference |
| `basedOn` | `Reference` | `0..*` | Procedure that caused this media to be created |
| `status` | `code` | `1..1` | current | superseded | entered-in-error _modifier_ |
| `docStatus` | `code` | `0..1` | registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | deprecated | unknown |
| `modality` | `CodeableConcept` | `0..*` | Imaging modality used |
| `type` | `CodeableConcept` | `0..1` | Kind of document (LOINC if possible) |
| `category` | `CodeableConcept` | `0..*` | Categorization of document |
| `subject` | `Reference` | `0..1` | Who/what is the subject of the document |
| `context` | `Reference` | `0..*` | Context of the document content |
| `event` | `CodeableReference` | `0..*` | Main clinical acts documented |
| `bodySite` | `CodeableReference` | `0..*` | Body part included |
| `facilityType` | `CodeableConcept` | `0..1` | Kind of facility where patient was seen |
| `practiceSetting` | `CodeableConcept` | `0..1` | Additional details about where the content was created (e.g. clinical specialty) |
| `period` | `Period` | `0..1` | Time of service that is being documented |
| `date` | `instant` | `0..1` | When this document reference was created |
| `author` | `Reference` | `0..*` | Who and/or what authored the document |
| `attester` | `BackboneElement` | `0..*` | Attests to accuracy of the document |
| `custodian` | `Reference` | `0..1` | Organization which maintains the document |
| `relatesTo` | `BackboneElement` | `0..*` | Relationships to other documents |
| `description` | `markdown` | `0..1` | Human-readable description |
| `securityLabel` | `CodeableConcept` | `0..*` | Document security-tags |
| `content` | `BackboneElement` | `1..*` | Document referenced |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `attester` | `reference` | Who attested the document |
| `author` | `reference` | Who and/or what authored the document |
| `based-on` | `reference` | Procedure that caused this media to be created |
| `bodysite` | `token` | The body site studied |
| `bodysite-reference` | `reference` | The body site studied |
| `category` | `token` | Categorization of document |
| `contenttype` | `token` | Mime type of the content, with charset etc. |
| `context` | `reference` | Context of the document content |
| `creation` | `date` | Date attachment was first created |
| `custodian` | `reference` | Organization which maintains the document |
| `date` | `date` | When the event occurred |
| `description` | `string` | Human-readable description |
| `doc-status` | `token` | preliminary | final | amended | entered-in-error |
| `event-code` | `token` | Main clinical acts documented |
| `event-reference` | `reference` | Main clinical acts documented |
| `facility` | `token` | Kind of facility where patient was seen |
| `format-canonical` | `reference` | Profile canonical content rules for the document |
| `format-code` | `token` | Format code content rules for the document |
| `format-uri` | `uri` | Profile URI content rules for the document |
| `identifier` | `token` | Account number |
| `language` | `token` | Human language of the content (BCP-47) |
| `location` | `uri` | Uri where the data can be found |
| `modality` | `token` | The modality used |
| `patient` | `reference` | The entity that caused the expenses |
| `period` | `date` | Time of service that is being documented |
| `relatesto` | `reference` | Target of the relationship |
| `relation` | `token` | replaces | transforms | signs | appends |
| `relationship` | `composite` | Combination of relation and relatesTo |
| `security-label` | `token` | Document security-tags |
| `setting` | `token` | Additional details about where the content was created (e.g. clinical specialty) |
| `status` | `token` | current | superseded | entered-in-error |
| `subject` | `reference` | Who/what is the subject of the document |
| `type` | `token` | E.g. patient, expense, depreciation |
| `version` | `string` | The business version identifier |

## Reference

- Official FHIR R5 spec: [`DocumentReference`](https://hl7.org/fhir/R5/documentreference.html)
- Maturity: **Trial Use 4** (FMM 4).
