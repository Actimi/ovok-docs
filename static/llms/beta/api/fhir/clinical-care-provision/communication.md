---
title: Communication
sidebar_label: Communication
description: "An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportab"
---

# Communication

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Clinical — Care Provision</span>

An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.

## Endpoints

<ApiBase surface="fhir" path="/Communication" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/Communication/[id]` |
| Vread | `GET` | `/fhir/R4/Communication/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Communication/[id]` |
| Patch | `PATCH` | `/fhir/R4/Communication/[id]` |
| Delete | `DELETE` | `/fhir/R4/Communication/[id]` |
| Create | `POST` | `/fhir/R4/Communication` |
| Search | `GET` | `/fhir/R4/Communication` |
| History | `GET` | `/fhir/R4/Communication/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Unique identifier |
| `instantiatesCanonical` | `canonical` | `0..*` | Instantiates FHIR protocol or definition |
| `instantiatesUri` | `uri` | `0..*` | Instantiates external protocol or definition |
| `basedOn` | `Reference` | `0..*` | Request fulfilled by this communication |
| `partOf` | `Reference` | `0..*` | Part of this action |
| `inResponseTo` | `Reference` | `0..*` | Reply to |
| `status` | `code` | `1..1` | preparation \| in-progress \| not-done \| on-hold \| stopped \| completed \| entered-in-error \| unknown _modifier_ |
| `statusReason` | `CodeableConcept` | `0..1` | Reason for current status |
| `category` | `CodeableConcept` | `0..*` | Message category |
| `priority` | `code` | `0..1` | routine \| urgent \| asap \| stat |
| `medium` | `CodeableConcept` | `0..*` | A channel of communication |
| `subject` | `Reference` | `0..1` | Focus of message |
| `topic` | `CodeableConcept` | `0..1` | Description of the purpose/content |
| `about` | `Reference` | `0..*` | Resources that pertain to this communication |
| `encounter` | `Reference` | `0..1` | Encounter created as part of |
| `sent` | `dateTime` | `0..1` | When sent |
| `received` | `dateTime` | `0..1` | When received |
| `recipient` | `Reference` | `0..*` | Message recipient |
| `sender` | `Reference` | `0..1` | Message sender |
| `reasonCode` | `CodeableConcept` | `0..*` | Indication for message |
| `reasonReference` | `Reference` | `0..*` | Why was communication done? |
| `payload` | `BackboneElement` | `0..*` | Message payload |
| `note` | `Annotation` | `0..*` | Comments made about the communication |

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
| `based-on` | `string` | http://hl7.org/fhir/SearchParameter/Communication-based-on |
| `category` | `string` | http://hl7.org/fhir/SearchParameter/Communication-category |
| `encounter` | `string` | http://hl7.org/fhir/SearchParameter/Communication-encounter |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/Communication-identifier |
| `instantiates-canonical` | `string` | http://hl7.org/fhir/SearchParameter/Communication-instantiates-canonical |
| `instantiates-uri` | `string` | http://hl7.org/fhir/SearchParameter/Communication-instantiates-uri |
| `medium` | `string` | http://hl7.org/fhir/SearchParameter/Communication-medium |
| `part-of` | `string` | http://hl7.org/fhir/SearchParameter/Communication-part-of |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/Communication-patient |
| `priority` | `string` | https://medplum.com/fhir/SearchParameter/Communication-priority |
| `priority-order` | `string` | https://medplum.com/fhir/SearchParameter/priority-order |
| `received` | `string` | http://hl7.org/fhir/SearchParameter/Communication-received |
| `recipient` | `string` | http://hl7.org/fhir/SearchParameter/Communication-recipient |
| `sender` | `string` | http://hl7.org/fhir/SearchParameter/Communication-sender |
| `sent` | `string` | http://hl7.org/fhir/SearchParameter/Communication-sent |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/Communication-status |
| `subject` | `string` | http://hl7.org/fhir/SearchParameter/Communication-subject |
| `topic` | `string` | https://medplum.com/fhir/SearchParameter/Communication-topic |

## Reference

- Official FHIR R4 spec: [`Communication`](https://hl7.org/fhir/R4/communication.html)
- Maturity: **Trial Use 2** (FMM 2).
