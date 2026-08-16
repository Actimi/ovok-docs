---
title: RiskEvidenceSynthesis
sidebar_label: RiskEvidenceSynthesis
description: "The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combinat"
---

# RiskEvidenceSynthesis

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Other</span>

The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.

## Endpoints

<ApiBase surface="fhir" path="/RiskEvidenceSynthesis" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/RiskEvidenceSynthesis/[id]` |
| Vread | `GET` | `/fhir/R4/RiskEvidenceSynthesis/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/RiskEvidenceSynthesis/[id]` |
| Patch | `PATCH` | `/fhir/R4/RiskEvidenceSynthesis/[id]` |
| Delete | `DELETE` | `/fhir/R4/RiskEvidenceSynthesis/[id]` |
| Create | `POST` | `/fhir/R4/RiskEvidenceSynthesis` |
| Search | `GET` | `/fhir/R4/RiskEvidenceSynthesis` |
| History | `GET` | `/fhir/R4/RiskEvidenceSynthesis/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `url` | `uri` | `0..1` | Canonical identifier for this risk evidence synthesis, represented as a URI (globally unique) |
| `identifier` | `Identifier` | `0..*` | Additional identifier for the risk evidence synthesis |
| `version` | `string` | `0..1` | Business version of the risk evidence synthesis |
| `name` | `string` | `0..1` | Name for this risk evidence synthesis (computer friendly) |
| `title` | `string` | `0..1` | Name for this risk evidence synthesis (human friendly) |
| `status` | `code` | `1..1` | draft \| active \| retired \| unknown _modifier_ |
| `date` | `dateTime` | `0..1` | Date last changed |
| `publisher` | `string` | `0..1` | Name of the publisher (organization or individual) |
| `contact` | `ContactDetail` | `0..*` | Contact details for the publisher |
| `description` | `markdown` | `0..1` | Natural language description of the risk evidence synthesis |
| `note` | `Annotation` | `0..*` | Used for footnotes or explanatory notes |
| `useContext` | `UsageContext` | `0..*` | The context that the content is intended to support |
| `jurisdiction` | `CodeableConcept` | `0..*` | Intended jurisdiction for risk evidence synthesis (if applicable) |
| `copyright` | `markdown` | `0..1` | Use and/or publishing restrictions |
| `approvalDate` | `date` | `0..1` | When the risk evidence synthesis was approved by publisher |
| `lastReviewDate` | `date` | `0..1` | When the risk evidence synthesis was last reviewed |
| `effectivePeriod` | `Period` | `0..1` | When the risk evidence synthesis is expected to be used |
| `topic` | `CodeableConcept` | `0..*` | The category of the EffectEvidenceSynthesis, such as Education, Treatment, Assessment, etc. |
| `author` | `ContactDetail` | `0..*` | Who authored the content |
| `editor` | `ContactDetail` | `0..*` | Who edited the content |
| `reviewer` | `ContactDetail` | `0..*` | Who reviewed the content |
| `endorser` | `ContactDetail` | `0..*` | Who endorsed the content |
| `relatedArtifact` | `RelatedArtifact` | `0..*` | Additional documentation, citations, etc. |
| `synthesisType` | `CodeableConcept` | `0..1` | Type of synthesis |
| `studyType` | `CodeableConcept` | `0..1` | Type of study |
| `population` | `Reference` | `1..1` | What population? |
| `exposure` | `Reference` | `0..1` | What exposure? |
| `outcome` | `Reference` | `1..1` | What outcome? |
| `sampleSize` | `BackboneElement` | `0..1` | What sample size was involved? |
| `riskEstimate` | `BackboneElement` | `0..1` | What was the estimated risk |
| `certainty` | `BackboneElement` | `0..*` | How certain is the risk |

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
| `context` | `string` | http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context |
| `context-quantity` | `string` | http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context-quantity |
| `context-type` | `string` | http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context-type |
| `context-type-quantity` | `string` | http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context-type-quantity |
| `context-type-value` | `string` | http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-context-type-value |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-date |
| `description` | `string` | http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-description |
| `effective` | `string` | http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-effective |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-identifier |
| `jurisdiction` | `string` | http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-jurisdiction |
| `name` | `string` | http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-name |
| `publisher` | `string` | http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-publisher |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-status |
| `title` | `string` | http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-title |
| `url` | `string` | http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-url |
| `version` | `string` | http://hl7.org/fhir/SearchParameter/RiskEvidenceSynthesis-version |

## Reference

- Official FHIR R4 spec: [`RiskEvidenceSynthesis`](https://hl7.org/fhir/R4/riskevidencesynthesis.html)
- Maturity: **Draft** (FMM 0).
