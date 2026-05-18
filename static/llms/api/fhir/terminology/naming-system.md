---
title: NamingSystem
sidebar_label: NamingSystem
description: "A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a \"System\" used withi"
---

# NamingSystem

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Terminology</span>

A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.

## Endpoints

<ApiBase surface="fhir" path="/NamingSystem" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/NamingSystem/[id]` |
| Vread        | `GET`    | `/fhir/R5/NamingSystem/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/NamingSystem/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/NamingSystem/[id]` |
| Delete       | `DELETE` | `/fhir/R5/NamingSystem/[id]` |
| Create       | `POST`   | `/fhir/R5/NamingSystem` |
| Search       | `GET`    | `/fhir/R5/NamingSystem?...` |
| History      | `GET`    | `/fhir/R5/NamingSystem/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/NamingSystem/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this naming system, represented as a URI (globally unique) |
| `identifier` | `Identifier` | `0..*` | Additional identifier for the naming system (business identifier) |
| `version` | `string` | `0..1` | Business version of the naming system |
| `versionAlgorithm[x]` | `string` / `Coding` | `0..1` | How to compare versions |
| `name` | `string` | `1..1` | Name for this naming system (computer friendly) |
| `title` | `string` | `0..1` | Title for this naming system (human friendly) |
| `status` | `code` | `1..1` | draft | active | retired | unknown _modifier_ |
| `kind` | `code` | `1..1` | codesystem | identifier | root |
| `experimental` | `boolean` | `0..1` | For testing purposes, not real usage |
| `date` | `dateTime` | `1..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher/steward (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `responsible` | `string` | `0..1` | Who maintains system namespace? |
| `type` | `CodeableConcept` | `0..1` | e.g. driver,  provider,  patient, bank etc |
| `description` | `markdown` | `0..1` | Natural language description of the naming system |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for naming system (if applicable) |
| `purpose` | `markdown` | `0..1` | Why this naming system is defined |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `copyrightLabel` | `string` | `0..1` | Copyright holder and year(s) |
| `approvalDate` | `date` | `0..1` | When the NamingSystem was approved by publisher |
| `lastReviewDate` | `date` | `0..1` | When the NamingSystem was last reviewed by the publisher |
| `effectivePeriod` | `Period` | `0..1` | When the NamingSystem is expected to be used |
| `topic` | `CodeableConcept` | `0..*` | E.g. Education, Treatment, Assessment, etc |
| `author` | `ContactDetail` | `0..*` | Who authored the CodeSystem |
| `editor` | `ContactDetail` | `0..*` | Who edited the NamingSystem |
| `reviewer` | `ContactDetail` | `0..*` | Who reviewed the NamingSystem |
| `endorser` | `ContactDetail` | `0..*` | Who endorsed the NamingSystem |
| `relatedArtifact` | `RelatedArtifact` | `0..*` | Additional documentation, citations, etc |
| `usage` | `string` | `0..1` | How/where is it used |
| `uniqueId` | `BackboneElement` | `1..*` | Unique identifiers used for system |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`NamingSystem` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `contact` | `string` | Name of an individual to contact |
| `context` | `token` | A use context assigned to the activity definition |
| `context-quantity` | `quantity` | A quantity- or range-valued use context assigned to the activity definition |
| `context-type` | `token` | A type of use context assigned to the activity definition |
| `context-type-quantity` | `composite` | A use context type and quantity- or range-based value assigned to the activity definition |
| `context-type-value` | `composite` | A use context type and value assigned to the activity definition |
| `date` | `date` | The activity definition publication date |
| `derived-from` | `reference` | What resource is being referenced |
| `description` | `string` | The description of the activity definition |
| `effective` | `date` | The time during which the activity definition is intended to be in use |
| `id-type` | `token` | oid | uuid | uri | other |
| `identifier` | `token` | External identifier for the activity definition |
| `jurisdiction` | `token` | Intended jurisdiction for the activity definition |
| `kind` | `token` | codesystem | identifier | root |
| `name` | `string` | Computationally friendly name of the activity definition |
| `period` | `date` | When is identifier valid? |
| `predecessor` | `reference` | What resource is being referenced |
| `publisher` | `string` | Name of the publisher of the activity definition |
| `responsible` | `string` | Who maintains system namespace? |
| `status` | `token` | The current status of the activity definition |
| `telecom` | `token` | Contact details for individual or organization |
| `topic` | `token` | Topics associated with the module |
| `type` | `token` | e.g. driver,  provider,  patient, bank etc. |
| `url` | `uri` | The uri that identifies the activity definition |
| `value` | `string` | The unique identifier |
| `version` | `token` | The business version of the activity definition |

## Reference

- Official FHIR R5 spec: [`NamingSystem`](https://hl7.org/fhir/R5/namingsystem.html)
- Element bindings & profiles: [`NamingSystem` profile](https://hl7.org/fhir/R5/namingsystem-definitions.html)
- Maturity: **Trial Use 4** (FMM 4).
