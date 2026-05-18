---
title: ClinicalImpression
sidebar_label: ClinicalImpression
description: "A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that"
---

# ClinicalImpression

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Clinical — Summary</span>

A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.

## Endpoints

<ApiBase surface="fhir" path="/ClinicalImpression" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/ClinicalImpression/[id]` |
| Vread        | `GET`    | `/fhir/R5/ClinicalImpression/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/ClinicalImpression/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/ClinicalImpression/[id]` |
| Delete       | `DELETE` | `/fhir/R5/ClinicalImpression/[id]` |
| Create       | `POST`   | `/fhir/R5/ClinicalImpression` |
| Search       | `GET`    | `/fhir/R5/ClinicalImpression?...` |
| History      | `GET`    | `/fhir/R5/ClinicalImpression/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/ClinicalImpression/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier |
| `status` | `code` | `1..1` | preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown _modifier_ |
| `statusReason` | `CodeableConcept` | `0..1` | Reason for current status |
| `description` | `string` | `0..1` | Why/how the assessment was performed |
| `subject` | `Reference` | `1..1` | Patient or group assessed |
| `encounter` | `Reference` | `0..1` | The Encounter during which this ClinicalImpression was created |
| `effective[x]` | `dateTime` / `Period` | `0..1` | Time of assessment |
| `date` | `dateTime` | `0..1` | When the assessment was documented |
| `performer` | `Reference` | `0..1` | The clinician performing the assessment |
| `previous` | `Reference` | `0..1` | Reference to last assessment |
| `problem` | `Reference` | `0..*` | Relevant impressions of patient state |
| `changePattern` | `CodeableConcept` | `0..1` | Change in the status/pattern of a subject's condition since previously assessed, such as worsening, improving, or no change |
| `protocol` | `uri` | `0..*` | Clinical Protocol followed |
| `summary` | `string` | `0..1` | Summary of the assessment |
| `finding` | `BackboneElement` | `0..*` | Possible or likely findings and diagnoses |
| `prognosisCodeableConcept` | `CodeableConcept` | `0..*` | Estimate of likely outcome |
| `prognosisReference` | `Reference` | `0..*` | RiskAssessment expressing likely outcome |
| `supportingInfo` | `Reference` | `0..*` | Information supporting the clinical impression |
| `note` | `Annotation` | `0..*` | Comments made about the ClinicalImpression |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`ClinicalImpression` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `date` | `date` | When the event occurred |
| `encounter` | `reference` | Encounter related to the activity recorded in the AuditEvent |
| `finding-code` | `token` | Reference to a concept (by class) |
| `finding-ref` | `reference` | Reference to a resource (by instance) |
| `identifier` | `token` | Account number |
| `patient` | `reference` | The entity that caused the expenses |
| `performer` | `reference` | The clinician performing the assessment |
| `previous` | `reference` | Reference to last assessment |
| `problem` | `reference` | Relevant impressions of patient state |
| `status` | `token` | preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown |
| `subject` | `reference` | Patient or group assessed |
| `supporting-info` | `reference` | Information supporting the clinical impression |

## Reference

- Official FHIR R5 spec: [`ClinicalImpression`](https://hl7.org/fhir/R5/clinicalimpression.html)
- Element bindings & profiles: [`ClinicalImpression` profile](https://hl7.org/fhir/R5/clinicalimpression-definitions.html)
- Maturity: **Trial Use 1** (FMM 1).
