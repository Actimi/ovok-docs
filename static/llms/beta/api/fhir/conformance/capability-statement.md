---
title: CapabilityStatement
sidebar_label: CapabilityStatement
description: "A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual s"
---

# CapabilityStatement

<span className="fhir-maturity" data-level="5">Normative</span>
<span className="fhir-category">Conformance</span>

A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.

## Endpoints

<ApiBase surface="fhir" path="/CapabilityStatement" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/CapabilityStatement/[id]` |
| Vread | `GET` | `/fhir/R4/CapabilityStatement/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/CapabilityStatement/[id]` |
| Patch | `PATCH` | `/fhir/R4/CapabilityStatement/[id]` |
| Delete | `DELETE` | `/fhir/R4/CapabilityStatement/[id]` |
| Create | `POST` | `/fhir/R4/CapabilityStatement` |
| Search | `GET` | `/fhir/R4/CapabilityStatement` |
| History | `GET` | `/fhir/R4/CapabilityStatement/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this capability statement, represented as a URI (globally unique) |
| `version` | `string` | `0..1` | Business version of the capability statement |
| `name` | `string` | `0..1` | Name for this capability statement (computer friendly) |
| `title` | `string` | `0..1` | Name for this capability statement (human friendly) |
| `status` | `code` | `1..1` | draft \| active \| retired \| unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `1..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the capability statement |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for capability statement (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this capability statement is defined |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `kind` | `code` | `1..1` | instance \| capability \| requirements |
| `instantiates` | `canonical` | `0..*` | Canonical URL of another capability statement this implements |
| `imports` | `canonical` | `0..*` | Canonical URL of another capability statement this adds to |
| `software` | `BackboneElement` | `0..1` | Software that is covered by this capability statement |
| `implementation` | `BackboneElement` | `0..1` | If this describes a specific instance |
| `fhirVersion` | `code` | `1..1` | FHIR Version the system supports |
| `format` | `code` | `1..*` | formats supported (xml \| json \| ttl \| mime type) |
| `patchFormat` | `code` | `0..*` | Patch formats supported |
| `implementationGuide` | `canonical` | `0..*` | Implementation guides supported |
| `rest` | `BackboneElement` | `0..*` | If the endpoint is a RESTful one |
| `messaging` | `BackboneElement` | `0..*` | If messaging is supported |
| `document` | `BackboneElement` | `0..*` | Document definition |

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
| `context` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context |
| `context-quantity` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-quantity |
| `context-type` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type |
| `context-type-quantity` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type-quantity |
| `context-type-value` | `string` | http://hl7.org/fhir/SearchParameter/conformance-context-type-value |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/conformance-date |
| `description` | `string` | http://hl7.org/fhir/SearchParameter/conformance-description |
| `fhirversion` | `string` | http://hl7.org/fhir/SearchParameter/CapabilityStatement-fhirversion |
| `format` | `string` | http://hl7.org/fhir/SearchParameter/CapabilityStatement-format |
| `guide` | `string` | http://hl7.org/fhir/SearchParameter/CapabilityStatement-guide |
| `jurisdiction` | `string` | http://hl7.org/fhir/SearchParameter/conformance-jurisdiction |
| `mode` | `string` | http://hl7.org/fhir/SearchParameter/CapabilityStatement-mode |
| `name` | `string` | http://hl7.org/fhir/SearchParameter/conformance-name |
| `publisher` | `string` | http://hl7.org/fhir/SearchParameter/conformance-publisher |
| `resource` | `string` | http://hl7.org/fhir/SearchParameter/CapabilityStatement-resource |
| `resource-profile` | `string` | http://hl7.org/fhir/SearchParameter/CapabilityStatement-resource-profile |
| `security-service` | `string` | http://hl7.org/fhir/SearchParameter/CapabilityStatement-security-service |
| `software` | `string` | http://hl7.org/fhir/SearchParameter/CapabilityStatement-software |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/conformance-status |
| `supported-profile` | `string` | http://hl7.org/fhir/SearchParameter/CapabilityStatement-supported-profile |
| `title` | `string` | http://hl7.org/fhir/SearchParameter/conformance-title |
| `url` | `string` | http://hl7.org/fhir/SearchParameter/conformance-url |
| `version` | `string` | http://hl7.org/fhir/SearchParameter/conformance-version |

## Reference

- Official FHIR R4 spec: [`CapabilityStatement`](https://hl7.org/fhir/R4/capabilitystatement.html)
- Maturity: **Normative** (FMM 5).
