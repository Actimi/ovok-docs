---
title: ImagingStudy
sidebar_label: ImagingStudy
description: "Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instance"
---

# ImagingStudy

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Clinical — Diagnostics</span>

Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.

## Endpoints

<ApiBase surface="fhir" path="/ImagingStudy" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/ImagingStudy/[id]` |
| Vread        | `GET`    | `/fhir/R5/ImagingStudy/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/ImagingStudy/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/ImagingStudy/[id]` |
| Delete       | `DELETE` | `/fhir/R5/ImagingStudy/[id]` |
| Create       | `POST`   | `/fhir/R5/ImagingStudy` |
| Search       | `GET`    | `/fhir/R5/ImagingStudy?...` |
| History      | `GET`    | `/fhir/R5/ImagingStudy/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/ImagingStudy/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Identifiers for the whole study |
| `status` | `code` | `1..1` | registered | available | cancelled | entered-in-error | unknown _modifier_ |
| `modality` | `CodeableConcept` | `0..*` | All of the distinct values for series' modalities |
| `subject` | `Reference` | `1..1` | Who or what is the subject of the study |
| `encounter` | `Reference` | `0..1` | Encounter with which this imaging study is associated |
| `started` | `dateTime` | `0..1` | When the study was started |
| `basedOn` | `Reference` | `0..*` | Request fulfilled |
| `partOf` | `Reference` | `0..*` | Part of referenced event |
| `referrer` | `Reference` | `0..1` | Referring physician |
| `endpoint` | `Reference` | `0..*` | Study access endpoint |
| `numberOfSeries` | `unsignedInt` | `0..1` | Number of Study Related Series |
| `numberOfInstances` | `unsignedInt` | `0..1` | Number of Study Related Instances |
| `procedure` | `CodeableReference` | `0..*` | The performed procedure or code |
| `location` | `Reference` | `0..1` | Where ImagingStudy occurred |
| `reason` | `CodeableReference` | `0..*` | Why the study was requested / performed |
| `note` | `Annotation` | `0..*` | User-defined comments |
| `description` | `string` | `0..1` | Institution-generated description |
| `series` | `BackboneElement` | `0..*` | Each study has one or more series of instances |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`ImagingStudy` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `based-on` | `reference` | The order for the image, such as Accession Number associated with a ServiceRequest |
| `body-site` | `token` | The body site code studied |
| `body-structure` | `reference` | The body structure resource associated with the ImagingStudy |
| `dicom-class` | `token` | The type of the instance |
| `encounter` | `reference` | Encounter related to the activity recorded in the AuditEvent |
| `endpoint` | `reference` | The endpoint for the study or series |
| `identifier` | `token` | Account number |
| `instance` | `token` | SOP Instance UID for an instance |
| `modality` | `token` | The modality of the series |
| `patient` | `reference` | The entity that caused the expenses |
| `performer` | `reference` | The person who performed the study |
| `reason` | `token` | The reason for the study |
| `referrer` | `reference` | The referring physician |
| `series` | `token` | DICOM Series Instance UID for a series |
| `started` | `date` | When the study was started |
| `status` | `token` | The status of the study |
| `subject` | `reference` | Who the study is about |

## Reference

- Official FHIR R5 spec: [`ImagingStudy`](https://hl7.org/fhir/R5/imagingstudy.html)
- Element bindings & profiles: [`ImagingStudy` profile](https://hl7.org/fhir/R5/imagingstudy-definitions.html)
- Maturity: **Trial Use 4** (FMM 4).
