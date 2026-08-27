---
title: ClinicalImpression
sidebar_label: ClinicalImpression
description: "A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that"
---

# ClinicalImpression

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Clinical — Summary</span>

A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.

## Endpoints

<ApiBase surface="fhir" path="/ClinicalImpression" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/ClinicalImpression/[id]` |
| Vread | `GET` | `/fhir/R4/ClinicalImpression/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/ClinicalImpression/[id]` |
| Patch | `PATCH` | `/fhir/R4/ClinicalImpression/[id]` |
| Delete | `DELETE` | `/fhir/R4/ClinicalImpression/[id]` |
| Create | `POST` | `/fhir/R4/ClinicalImpression` |
| Search | `GET` | `/fhir/R4/ClinicalImpression` |
| History | `GET` | `/fhir/R4/ClinicalImpression/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier |
| `status` | `code` | `1..1` | in-progress \| completed \| entered-in-error _modifier_ |
| `statusReason` | `CodeableConcept` | `0..1` | Reason for current status |
| `code` | `CodeableConcept` | `0..1` | Kind of assessment performed |
| `description` | `string` | `0..1` | Why/how the assessment was performed |
| `subject` | `Reference` | `1..1` | Patient or group assessed |
| `encounter` | `Reference` | `0..1` | Encounter created as part of |
| `effective[x]` | `dateTime` / `Period` | `0..1` | Time of assessment |
| `date` | `dateTime` | `0..1` | When the assessment was documented |
| `assessor` | `Reference` | `0..1` | The clinician performing the assessment |
| `previous` | `Reference` | `0..1` | Reference to last assessment |
| `problem` | `Reference` | `0..*` | Relevant impressions of patient state |
| `investigation` | `BackboneElement` | `0..*` | One or more sets of investigations (signs, symptoms, etc.) |
| `protocol` | `uri` | `0..*` | Clinical Protocol followed |
| `summary` | `string` | `0..1` | Summary of the assessment |
| `finding` | `BackboneElement` | `0..*` | Possible or likely findings and diagnoses |
| `prognosisCodeableConcept` | `CodeableConcept` | `0..*` | Estimate of likely outcome |
| `prognosisReference` | `Reference` | `0..*` | RiskAssessment expressing likely outcome |
| `supportingInfo` | `Reference` | `0..*` | Information supporting the clinical impression |
| `note` | `Annotation` | `0..*` | Comments made about the ClinicalImpression |

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
| `assessor` | `string` | http://hl7.org/fhir/SearchParameter/ClinicalImpression-assessor |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/clinical-date |
| `encounter` | `string` | http://hl7.org/fhir/SearchParameter/ClinicalImpression-encounter |
| `finding-code` | `string` | http://hl7.org/fhir/SearchParameter/ClinicalImpression-finding-code |
| `finding-ref` | `string` | http://hl7.org/fhir/SearchParameter/ClinicalImpression-finding-ref |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/ClinicalImpression-identifier |
| `investigation` | `string` | http://hl7.org/fhir/SearchParameter/ClinicalImpression-investigation |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/clinical-patient |
| `previous` | `string` | http://hl7.org/fhir/SearchParameter/ClinicalImpression-previous |
| `problem` | `string` | http://hl7.org/fhir/SearchParameter/ClinicalImpression-problem |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/ClinicalImpression-status |
| `subject` | `string` | http://hl7.org/fhir/SearchParameter/ClinicalImpression-subject |
| `supporting-info` | `string` | http://hl7.org/fhir/SearchParameter/ClinicalImpression-supporting-info |

## Reference

- Official FHIR R4 spec: [`ClinicalImpression`](https://hl7.org/fhir/R4/clinicalimpression.html)
- Maturity: **Draft** (FMM 0).
