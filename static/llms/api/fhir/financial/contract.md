---
title: Contract
sidebar_label: Contract
description: "Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement."
---

# Contract

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Financial</span>

Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.

## Endpoints

<ApiBase surface="fhir" path="/Contract" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Contract/[id]` |
| Vread        | `GET`    | `/fhir/R5/Contract/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Contract/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Contract/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Contract/[id]` |
| Create       | `POST`   | `/fhir/R5/Contract` |
| Search       | `GET`    | `/fhir/R5/Contract?...` |
| History      | `GET`    | `/fhir/R5/Contract/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Contract/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Contract number |
| `url` | `uri` | `0..1` | Basal definition |
| `version` | `string` | `0..1` | Business edition |
| `status` | `code` | `0..1` | amended | appended | cancelled | disputed | entered-in-error | executable + _modifier_ |
| `legalState` | `CodeableConcept` | `0..1` | Negotiation status |
| `instantiatesCanonical` | `Reference` | `0..1` | Source Contract Definition |
| `instantiatesUri` | `uri` | `0..1` | External Contract Definition |
| `contentDerivative` | `CodeableConcept` | `0..1` | Content derived from the basal information |
| `issued` | `dateTime` | `0..1` | When this Contract was issued |
| `applies` | `Period` | `0..1` | Effective time |
| `expirationType` | `CodeableConcept` | `0..1` | Contract cessation cause |
| `subject` | `Reference` | `0..*` | Contract Target Entity |
| `authority` | `Reference` | `0..*` | Authority under which this Contract has standing |
| `domain` | `Reference` | `0..*` | A sphere of control governed by an authoritative jurisdiction, organization, or person |
| `site` | `Reference` | `0..*` | Specific Location |
| `name` | `string` | `0..1` | Computer friendly designation |
| `title` | `string` | `0..1` | Human Friendly name |
| `subtitle` | `string` | `0..1` | Subordinate Friendly name |
| `alias` | `string` | `0..*` | Acronym or short name |
| `author` | `Reference` | `0..1` | Source of Contract |
| `scope` | `CodeableConcept` | `0..1` | Range of Legal Concerns |
| `topic[x]` | `CodeableConcept` / `Reference` | `0..1` | Focus of contract interest |
| `type` | `CodeableConcept` | `0..1` | Legal instrument category |
| `subType` | `CodeableConcept` | `0..*` | Subtype within the context of type |
| `contentDefinition` | `BackboneElement` | `0..1` | Contract precursor content |
| `term` | `BackboneElement` | `0..*` | Contract Term List |
| `supportingInfo` | `Reference` | `0..*` | Extra Information |
| `relevantHistory` | `Reference` | `0..*` | Key event in Contract History |
| `signer` | `BackboneElement` | `0..*` | Contract Signatory |
| `friendly` | `BackboneElement` | `0..*` | Contract Friendly Language |
| `legal` | `BackboneElement` | `0..*` | Contract Legal Language |
| `rule` | `BackboneElement` | `0..*` | Computable Contract Language |
| `legallyBinding[x]` | `Attachment` / `Reference` | `0..1` | Binding Contract |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`Contract` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `authority` | `reference` | The authority of the contract |
| `domain` | `reference` | The domain of the contract |
| `identifier` | `token` | Account number |
| `instantiates` | `uri` | A source definition of the contract |
| `issued` | `date` | The date/time the contract was issued |
| `patient` | `reference` | The entity that caused the expenses |
| `signer` | `reference` | Contract Signatory Party |
| `status` | `token` | The status of the contract |
| `subject` | `reference` | The identity of the subject of the contract |
| `url` | `uri` | The basal contract definition |

## Reference

- Official FHIR R5 spec: [`Contract`](https://hl7.org/fhir/R5/contract.html)
- Element bindings & profiles: [`Contract` profile](https://hl7.org/fhir/R5/contract-definitions.html)
- Maturity: **Trial Use 1** (FMM 1).
