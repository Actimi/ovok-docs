---
title: Consent
sidebar_label: Consent
description: "A record of a healthcare consumer’s  choices  or choices made on their behalf by a third party, which permits or denies identified recipient(s) or recipient rol"
---

# Consent

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Foundation</span>

A record of a healthcare consumer’s  choices  or choices made on their behalf by a third party, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.

## Endpoints

<ApiBase surface="fhir" path="/Consent" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Consent/[id]` |
| Vread        | `GET`    | `/fhir/R5/Consent/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Consent/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Consent/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Consent/[id]` |
| Create       | `POST`   | `/fhir/R5/Consent` |
| Search       | `GET`    | `/fhir/R5/Consent?...` |
| History      | `GET`    | `/fhir/R5/Consent/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Consent/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Identifier for this record (external references) |
| `status` | `code` | `1..1` | draft | active | inactive | not-done | entered-in-error | unknown _modifier_ |
| `category` | `CodeableConcept` | `0..*` | Classification of the consent statement - for indexing/retrieval |
| `subject` | `Reference` | `0..1` | Who the consent applies to |
| `date` | `date` | `0..1` | Fully executed date of the consent |
| `period` | `Period` | `0..1` | Effective period for this Consent |
| `grantor` | `Reference` | `0..*` | Who is granting rights according to the policy and rules |
| `grantee` | `Reference` | `0..*` | Who is agreeing to the policy and rules |
| `manager` | `Reference` | `0..*` | Consent workflow management |
| `controller` | `Reference` | `0..*` | Consent Enforcer |
| `sourceAttachment` | `Attachment` | `0..*` | Source from which this consent is taken |
| `sourceReference` | `Reference` | `0..*` | Source from which this consent is taken |
| `regulatoryBasis` | `CodeableConcept` | `0..*` | Regulations establishing base Consent |
| `policyBasis` | `BackboneElement` | `0..1` | Computable version of the backing policy |
| `policyText` | `Reference` | `0..*` | Human Readable Policy |
| `verification` | `BackboneElement` | `0..*` | Consent Verified by patient or family |
| `decision` | `code` | `0..1` | deny | permit _modifier_ |
| `provision` | `BackboneElement` | `0..*` | Constraints to the base Consent.policyRule/Consent.policy |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`Consent` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `action` | `token` | Actions controlled by this rule |
| `actor` | `reference` | Resource for the actor (or group, by role) |
| `category` | `token` | Classification of the consent statement - for indexing/retrieval |
| `controller` | `reference` | Consent Enforcer |
| `data` | `reference` | The actual data reference |
| `date` | `date` | When the event occurred |
| `grantee` | `reference` | Who is agreeing to the policy and rules |
| `identifier` | `token` | Account number |
| `manager` | `reference` | Consent workflow management |
| `patient` | `reference` | The entity that caused the expenses |
| `period` | `date` | Timeframe for this rule |
| `purpose` | `token` | Context of activities covered by this rule |
| `security-label` | `token` | Security Labels that define affected resources |
| `source-reference` | `reference` | Search by reference to a Consent, DocumentReference, Contract  or QuestionnaireResponse |
| `status` | `token` | draft | active | inactive | entered-in-error | unknown |
| `subject` | `reference` | Who the consent applies to |
| `verified` | `token` | Has been verified |
| `verified-date` | `date` | When consent verified |

## Reference

- Official FHIR R5 spec: [`Consent`](https://hl7.org/fhir/R5/consent.html)
- Element bindings & profiles: [`Consent` profile](https://hl7.org/fhir/R5/consent-definitions.html)
- Maturity: **Trial Use 2** (FMM 2).
