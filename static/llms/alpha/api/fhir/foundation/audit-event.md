---
title: AuditEvent
sidebar_label: AuditEvent
description: "A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usag"
---

# AuditEvent

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Foundation</span>

A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.

## Endpoints

<ApiBase surface="fhir" path="/AuditEvent" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/AuditEvent/[id]` |
| Vread | `GET` | `/fhir/R4/AuditEvent/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/AuditEvent/[id]` |
| Patch | `PATCH` | `/fhir/R4/AuditEvent/[id]` |
| Delete | `DELETE` | `/fhir/R4/AuditEvent/[id]` |
| Create | `POST` | `/fhir/R4/AuditEvent` |
| Search | `GET` | `/fhir/R4/AuditEvent` |
| History | `GET` | `/fhir/R4/AuditEvent/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `type` | `Coding` | `1..1` | Type/identifier of event |
| `subtype` | `Coding` | `0..*` | More specific type/id for the event |
| `action` | `code` | `0..1` | Type of action performed during the event |
| `period` | `Period` | `0..1` | When the activity occurred |
| `recorded` | `instant` | `1..1` | Time when the event was recorded |
| `outcome` | `code` | `0..1` | Whether the event succeeded or failed |
| `outcomeDesc` | `string` | `0..1` | Description of the event outcome |
| `purposeOfEvent` | `CodeableConcept` | `0..*` | The purposeOfUse of the event |
| `agent` | `BackboneElement` | `1..*` | Actor involved in the event |
| `source` | `BackboneElement` | `1..1` | Audit Event Reporter |
| `entity` | `BackboneElement` | `0..*` | Data or objects used |

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
| `action` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-action |
| `address` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-address |
| `agent` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-agent |
| `agent-name` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-agent-name |
| `agent-role` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-agent-role |
| `altid` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-altid |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-date |
| `entity` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-entity |
| `entity-name` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-entity-name |
| `entity-role` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-entity-role |
| `entity-type` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-entity-type |
| `outcome` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-outcome |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-patient |
| `policy` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-policy |
| `site` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-site |
| `source` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-source |
| `subtype` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-subtype |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/AuditEvent-type |

## Reference

- Official FHIR R4 spec: [`AuditEvent`](https://hl7.org/fhir/R4/auditevent.html)
- Maturity: **Trial Use 3** (FMM 3).
