---
title: ImplementationGuide
sidebar_label: ImplementationGuide
description: "A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gathe"
---

# ImplementationGuide

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Conformance</span>

A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.

## Endpoints

<ApiBase surface="fhir" path="/ImplementationGuide" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/ImplementationGuide/[id]` |
| Vread | `GET` | `/fhir/R4/ImplementationGuide/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/ImplementationGuide/[id]` |
| Patch | `PATCH` | `/fhir/R4/ImplementationGuide/[id]` |
| Delete | `DELETE` | `/fhir/R4/ImplementationGuide/[id]` |
| Create | `POST` | `/fhir/R4/ImplementationGuide` |
| Search | `GET` | `/fhir/R4/ImplementationGuide` |
| History | `GET` | `/fhir/R4/ImplementationGuide/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `1..1` | Canonical identifier for this implementation guide, represented as a URI (globally unique) |
| `version` | `string` | `0..1` | Business version of the implementation guide |
| `name` | `string` | `1..1` | Name for this implementation guide (computer friendly) |
| `title` | `string` | `0..1` | Name for this implementation guide (human friendly) |
| `status` | `code` | `1..1` | draft \| active \| retired \| unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the implementation guide |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for implementation guide (if applicable) |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `packageId` | `id` | `1..1` | NPM Package name for IG |
| `license` | `code` | `0..1` | SPDX license code for this IG (or not-open-source) |
| `fhirVersion` | `code` | `1..*` | FHIR Version(s) this Implementation Guide targets |
| `dependsOn` | `BackboneElement` | `0..*` | Another Implementation guide this depends on |
| `global` | `BackboneElement` | `0..*` | Profiles that apply globally |
| `definition` | `BackboneElement` | `0..1` | Information needed to build the IG |
| `manifest` | `BackboneElement` | `0..1` | Information about an assembled IG |

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
| `depends-on` | `string` | http://hl7.org/fhir/SearchParameter/ImplementationGuide-depends-on |
| `description` | `string` | http://hl7.org/fhir/SearchParameter/conformance-description |
| `experimental` | `string` | http://hl7.org/fhir/SearchParameter/ImplementationGuide-experimental |
| `global` | `string` | http://hl7.org/fhir/SearchParameter/ImplementationGuide-global |
| `jurisdiction` | `string` | http://hl7.org/fhir/SearchParameter/conformance-jurisdiction |
| `name` | `string` | http://hl7.org/fhir/SearchParameter/conformance-name |
| `publisher` | `string` | http://hl7.org/fhir/SearchParameter/conformance-publisher |
| `resource` | `string` | http://hl7.org/fhir/SearchParameter/ImplementationGuide-resource |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/conformance-status |
| `title` | `string` | http://hl7.org/fhir/SearchParameter/conformance-title |
| `url` | `string` | http://hl7.org/fhir/SearchParameter/conformance-url |
| `version` | `string` | http://hl7.org/fhir/SearchParameter/conformance-version |

## Reference

- Official FHIR R4 spec: [`ImplementationGuide`](https://hl7.org/fhir/R4/implementationguide.html)
- Maturity: **Trial Use 1** (FMM 1).
