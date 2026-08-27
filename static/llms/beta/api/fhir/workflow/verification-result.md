---
title: VerificationResult
sidebar_label: VerificationResult
description: "Describes validation requirements, source(s), status and dates for one or more elements."
---

# VerificationResult

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Workflow</span>

Describes validation requirements, source(s), status and dates for one or more elements.

## Endpoints

<ApiBase surface="fhir" path="/VerificationResult" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/VerificationResult/[id]` |
| Vread | `GET` | `/fhir/R4/VerificationResult/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/VerificationResult/[id]` |
| Patch | `PATCH` | `/fhir/R4/VerificationResult/[id]` |
| Delete | `DELETE` | `/fhir/R4/VerificationResult/[id]` |
| Create | `POST` | `/fhir/R4/VerificationResult` |
| Search | `GET` | `/fhir/R4/VerificationResult` |
| History | `GET` | `/fhir/R4/VerificationResult/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `target` | `Reference` | `0..*` | A resource that was validated |
| `targetLocation` | `string` | `0..*` | The fhirpath location(s) within the resource that was validated |
| `need` | `CodeableConcept` | `0..1` | none \| initial \| periodic |
| `status` | `code` | `1..1` | attested \| validated \| in-process \| req-revalid \| val-fail \| reval-fail |
| `statusDate` | `dateTime` | `0..1` | When the validation status was updated |
| `validationType` | `CodeableConcept` | `0..1` | nothing \| primary \| multiple |
| `validationProcess` | `CodeableConcept` | `0..*` | The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context) |
| `frequency` | `Timing` | `0..1` | Frequency of revalidation |
| `lastPerformed` | `dateTime` | `0..1` | The date/time validation was last completed (including failed validations) |
| `nextScheduled` | `date` | `0..1` | The date when target is next validated, if appropriate |
| `failureAction` | `CodeableConcept` | `0..1` | fatal \| warn \| rec-only \| none |
| `primarySource` | `BackboneElement` | `0..*` | Information about the primary source(s) involved in validation |
| `attestation` | `BackboneElement` | `0..1` | Information about the entity attesting to information |
| `validator` | `BackboneElement` | `0..*` | Information about the entity validating information |

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
| `target` | `string` | http://hl7.org/fhir/SearchParameter/VerificationResult-target |

## Reference

- Official FHIR R4 spec: [`VerificationResult`](https://hl7.org/fhir/R4/verificationresult.html)
- Maturity: **Draft** (FMM 0).
