---
title: NamingSystem
sidebar_label: NamingSystem
description: "A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a \"System\" used withi"
---

# NamingSystem

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Terminology</span>

A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.

## Endpoints

<ApiBase surface="fhir" path="/NamingSystem" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/NamingSystem/[id]` |
| Vread | `GET` | `/fhir/R4/NamingSystem/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/NamingSystem/[id]` |
| Patch | `PATCH` | `/fhir/R4/NamingSystem/[id]` |
| Delete | `DELETE` | `/fhir/R4/NamingSystem/[id]` |
| Create | `POST` | `/fhir/R4/NamingSystem` |
| Search | `GET` | `/fhir/R4/NamingSystem` |
| History | `GET` | `/fhir/R4/NamingSystem/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `name` | `string` | `1..1` | Name for this naming system (computer friendly) |
| `status` | `code` | `1..1` | draft \| active \| retired \| unknown _modifier_ |
| `kind` | `code` | `1..1` | codesystem \| identifier \| root |
| `date` | `dateTime` | `1..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `responsible` | `string` | `0..1` | Who maintains system namespace? |
| `type` | `CodeableConcept` | `0..1` | e.g. driver,  provider,  patient, bank etc. |
| `description` | `markdown` | `0..1` | Natural language description of the naming system |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for naming system (if applicable) |
| `usage` | `string` | `0..1` | How/where is it used |
| `uniqueId` | `BackboneElement` | `1..*` | Unique identifiers used for system |

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
| `contact` | `string` | http://hl7.org/fhir/SearchParameter/NamingSystem-contact |
| `context` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context |
| `context-quantity` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-quantity |
| `context-type` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type |
| `context-type-quantity` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity |
| `context-type-value` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type-value |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/conformance-date |
| `description` | `string` | http://hl7.org/fhir/SearchParameter/conformance-description |
| `id-type` | `string` | http://hl7.org/fhir/SearchParameter/NamingSystem-id-type |
| `jurisdiction` | `string` | http://hl7.org/fhir/SearchParameter/conformance-jurisdiction |
| `kind` | `string` | http://hl7.org/fhir/SearchParameter/NamingSystem-kind |
| `name` | `string` | http://hl7.org/fhir/SearchParameter/conformance-name |
| `period` | `string` | http://hl7.org/fhir/SearchParameter/NamingSystem-period |
| `publisher` | `string` | http://hl7.org/fhir/SearchParameter/conformance-publisher |
| `responsible` | `string` | http://hl7.org/fhir/SearchParameter/NamingSystem-responsible |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/conformance-status |
| `telecom` | `string` | http://hl7.org/fhir/SearchParameter/NamingSystem-telecom |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/NamingSystem-type |
| `value` | `string` | http://hl7.org/fhir/SearchParameter/NamingSystem-value |

## Reference

- Official FHIR R4 spec: [`NamingSystem`](https://hl7.org/fhir/R4/namingsystem.html)
- Maturity: **Trial Use 1** (FMM 1).
