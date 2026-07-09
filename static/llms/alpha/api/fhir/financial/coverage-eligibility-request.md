---
title: CoverageEligibilityRequest
sidebar_label: CoverageEligibilityRequest
description: "The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityRespo"
---

# CoverageEligibilityRequest

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Financial</span>

The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.

## Endpoints

<ApiBase surface="fhir" path="/CoverageEligibilityRequest" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/CoverageEligibilityRequest/[id]` |
| Vread        | `GET`    | `/fhir/R5/CoverageEligibilityRequest/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/CoverageEligibilityRequest/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/CoverageEligibilityRequest/[id]` |
| Delete       | `DELETE` | `/fhir/R5/CoverageEligibilityRequest/[id]` |
| Create       | `POST`   | `/fhir/R5/CoverageEligibilityRequest` |
| Search       | `GET`    | `/fhir/R5/CoverageEligibilityRequest?...` |
| History      | `GET`    | `/fhir/R5/CoverageEligibilityRequest/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/CoverageEligibilityRequest/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business Identifier for coverage eligiblity request |
| `status` | `code` | `1..1` | active | cancelled | draft | entered-in-error _modifier_ |
| `priority` | `CodeableConcept` | `0..1` | Desired processing priority |
| `purpose` | `code` | `1..*` | auth-requirements | benefits | discovery | validation |
| `patient` | `Reference` | `1..1` | Intended recipient of products and services |
| `event` | `BackboneElement` | `0..*` | Event information |
| `serviced[x]` | `date` / `Period` | `0..1` | Estimated date or dates of service |
| `created` | `dateTime` | `1..1` | Creation date |
| `enterer` | `Reference` | `0..1` | Author |
| `provider` | `Reference` | `0..1` | Party responsible for the request |
| `insurer` | `Reference` | `1..1` | Coverage issuer |
| `facility` | `Reference` | `0..1` | Servicing facility |
| `supportingInfo` | `BackboneElement` | `0..*` | Supporting information |
| `insurance` | `BackboneElement` | `0..*` | Patient insurance information |
| `item` | `BackboneElement` | `0..*` | Item to be evaluated for eligibiity |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `created` | `date` | The creation date for the EOB |
| `enterer` | `reference` | The party who is responsible for the request |
| `facility` | `reference` | Facility responsible for the goods and services |
| `identifier` | `token` | Account number |
| `patient` | `reference` | The entity that caused the expenses |
| `provider` | `reference` | The reference to the provider |
| `status` | `token` | The status of the EligibilityRequest |

## Reference

- Official FHIR R5 spec: [`CoverageEligibilityRequest`](https://hl7.org/fhir/R5/coverageeligibilityrequest.html)
- Maturity: **Trial Use 4** (FMM 4).
