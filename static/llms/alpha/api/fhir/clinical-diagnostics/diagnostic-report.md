---
title: DiagnosticReport
sidebar_label: DiagnosticReport
description: "The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The"
---

# DiagnosticReport

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Clinical — Diagnostics</span>

The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.

## Endpoints

<ApiBase surface="fhir" path="/DiagnosticReport" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/DiagnosticReport/[id]` |
| Vread | `GET` | `/fhir/R4/DiagnosticReport/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/DiagnosticReport/[id]` |
| Patch | `PATCH` | `/fhir/R4/DiagnosticReport/[id]` |
| Delete | `DELETE` | `/fhir/R4/DiagnosticReport/[id]` |
| Create | `POST` | `/fhir/R4/DiagnosticReport` |
| Search | `GET` | `/fhir/R4/DiagnosticReport` |
| History | `GET` | `/fhir/R4/DiagnosticReport/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier for report |
| `basedOn` | `Reference` | `0..*` | What was requested |
| `status` | `code` | `1..1` | registered \| partial \| preliminary \| final + _modifier_ |
| `category` | `CodeableConcept` | `0..*` | Service category |
| `code` | `CodeableConcept` | `1..1` | Name/Code for this diagnostic report |
| `subject` | `Reference` | `0..1` | The subject of the report - usually, but not always, the patient |
| `encounter` | `Reference` | `0..1` | Health care event when test ordered |
| `effective[x]` | `dateTime` / `Period` | `0..1` | Clinically relevant time/time-period for report |
| `issued` | `instant` | `0..1` | DateTime this version was made |
| `performer` | `Reference` | `0..*` | Responsible Diagnostic Service |
| `resultsInterpreter` | `Reference` | `0..*` | Primary result interpreter |
| `specimen` | `Reference` | `0..*` | Specimens this report is based on |
| `result` | `Reference` | `0..*` | Observations |
| `imagingStudy` | `Reference` | `0..*` | Reference to full details of imaging associated with the diagnostic report |
| `media` | `BackboneElement` | `0..*` | Key images associated with this report |
| `conclusion` | `string` | `0..1` | Clinical conclusion (interpretation) of test results |
| `conclusionCode` | `CodeableConcept` | `0..*` | Codes for the clinical conclusion of test results |
| `presentedForm` | `Attachment` | `0..*` | Entire report as issued |

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
| `based-on` | `string` | http://hl7.org/fhir/SearchParameter/DiagnosticReport-based-on |
| `category` | `string` | http://hl7.org/fhir/SearchParameter/DiagnosticReport-category |
| `code` | `string` | http://hl7.org/fhir/SearchParameter/clinical-code |
| `conclusion` | `string` | http://hl7.org/fhir/SearchParameter/DiagnosticReport-conclusion |
| `date` | `string` | http://hl7.org/fhir/SearchParameter/clinical-date |
| `encounter` | `string` | http://hl7.org/fhir/SearchParameter/clinical-encounter |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/clinical-identifier |
| `issued` | `string` | http://hl7.org/fhir/SearchParameter/DiagnosticReport-issued |
| `media` | `string` | http://hl7.org/fhir/SearchParameter/DiagnosticReport-media |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/clinical-patient |
| `performer` | `string` | http://hl7.org/fhir/SearchParameter/DiagnosticReport-performer |
| `result` | `string` | http://hl7.org/fhir/SearchParameter/DiagnosticReport-result |
| `results-interpreter` | `string` | http://hl7.org/fhir/SearchParameter/DiagnosticReport-results-interpreter |
| `specimen` | `string` | http://hl7.org/fhir/SearchParameter/DiagnosticReport-specimen |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/DiagnosticReport-status |
| `study` | `string` | https://medplum.com/fhir/SearchParameter/DiagnosticReport-study |
| `subject` | `string` | http://hl7.org/fhir/SearchParameter/DiagnosticReport-subject |

## Reference

- Official FHIR R4 spec: [`DiagnosticReport`](https://hl7.org/fhir/R4/diagnosticreport.html)
- Maturity: **Trial Use 3** (FMM 3).
