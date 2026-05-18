---
title: ImplementationGuide
sidebar_label: ImplementationGuide
description: "A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gathe"
---

# ImplementationGuide

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Conformance</span>

A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.

## Endpoints

<ApiBase surface="fhir" path="/ImplementationGuide" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/ImplementationGuide/[id]` |
| Vread        | `GET`    | `/fhir/R5/ImplementationGuide/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/ImplementationGuide/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/ImplementationGuide/[id]` |
| Delete       | `DELETE` | `/fhir/R5/ImplementationGuide/[id]` |
| Create       | `POST`   | `/fhir/R5/ImplementationGuide` |
| Search       | `GET`    | `/fhir/R5/ImplementationGuide?...` |
| History      | `GET`    | `/fhir/R5/ImplementationGuide/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/ImplementationGuide/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `1..1` | Canonical identifier for this implementation guide, represented as a URI (globally unique) |
| `identifier` | `Identifier` | `0..*` | Additional identifier for the implementation guide (business identifier) |
| `version` | `string` | `0..1` | Business version of the implementation guide |
| `versionAlgorithm[x]` | `string` / `Coding` | `0..1` | How to compare versions |
| `name` | `string` | `1..1` | Name for this implementation guide (computer friendly) |
| `title` | `string` | `0..1` | Name for this implementation guide (human friendly) |
| `status` | `code` | `1..1` | draft | active | retired | unknown _modifier_ |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher/steward (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the implementation guide |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for implementation guide (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this implementation guide is defined |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `copyrightLabel` | `string` | `0..1` | Copyright holder and year(s) |
| `packageId` | `id` | `1..1` | NPM Package name for IG |
| `license` | `code` | `0..1` | SPDX license code for this IG (or not-open-source) |
| `fhirVersion` | `code` | `1..*` | FHIR Version(s) this Implementation Guide targets |
| `dependsOn` | `BackboneElement` | `0..*` | Another Implementation guide this depends on |
| `global` | `BackboneElement` | `0..*` | Profiles that apply globally |
| `definition` | `BackboneElement` | `0..1` | Information needed to build the IG |
| `manifest` | `BackboneElement` | `0..1` | Information about an assembled IG |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`ImplementationGuide` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `context` | `token` | A use context assigned to the activity definition |
| `context-quantity` | `quantity` | A quantity- or range-valued use context assigned to the activity definition |
| `context-type` | `token` | A type of use context assigned to the activity definition |
| `context-type-quantity` | `composite` | A use context type and quantity- or range-based value assigned to the activity definition |
| `context-type-value` | `composite` | A use context type and value assigned to the activity definition |
| `date` | `date` | The activity definition publication date |
| `depends-on` | `reference` | Identity of the IG that this depends on |
| `description` | `string` | The description of the activity definition |
| `experimental` | `token` | For testing purposes, not real usage |
| `global` | `reference` | Profile that all resources must conform to |
| `identifier` | `token` | External identifier for the activity definition |
| `jurisdiction` | `token` | Intended jurisdiction for the activity definition |
| `name` | `string` | Computationally friendly name of the activity definition |
| `publisher` | `string` | Name of the publisher of the activity definition |
| `resource` | `reference` | Location of the resource |
| `status` | `token` | The current status of the activity definition |
| `title` | `string` | The human-friendly name of the activity definition |
| `url` | `uri` | The uri that identifies the activity definition |
| `version` | `token` | The business version of the activity definition |

## Reference

- Official FHIR R5 spec: [`ImplementationGuide`](https://hl7.org/fhir/R5/implementationguide.html)
- Element bindings & profiles: [`ImplementationGuide` profile](https://hl7.org/fhir/R5/implementationguide-definitions.html)
- Maturity: **Trial Use 4** (FMM 4).
