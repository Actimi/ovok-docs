---
title: Media
sidebar_label: Media
description: "A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference."
---

# Media

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Other</span>

A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.

## Endpoints

<ApiBase surface="fhir" path="/Media" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/Media/[id]` |
| Vread | `GET` | `/fhir/R4/Media/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Media/[id]` |
| Patch | `PATCH` | `/fhir/R4/Media/[id]` |
| Delete | `DELETE` | `/fhir/R4/Media/[id]` |
| Create | `POST` | `/fhir/R4/Media` |
| Search | `GET` | `/fhir/R4/Media` |
| History | `GET` | `/fhir/R4/Media/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Identifier(s) for the image |
| `basedOn` | `Reference` | `0..*` | Procedure that caused this media to be created |
| `partOf` | `Reference` | `0..*` | Part of referenced event |
| `status` | `code` | `1..1` | preparation \| in-progress \| not-done \| on-hold \| stopped \| completed \| entered-in-error \| unknown _modifier_ |
| `type` | `CodeableConcept` | `0..1` | Classification of media as image, video, or audio |
| `modality` | `CodeableConcept` | `0..1` | The type of acquisition equipment/process |
| `view` | `CodeableConcept` | `0..1` | Imaging view, e.g. Lateral or Antero-posterior |
| `subject` | `Reference` | `0..1` | Who/What this Media is a record of |
| `encounter` | `Reference` | `0..1` | Encounter associated with media |
| `created[x]` | `dateTime` / `Period` | `0..1` | When Media was collected |
| `issued` | `instant` | `0..1` | Date/Time this version was made available |
| `operator` | `Reference` | `0..1` | The person who generated the image |
| `reasonCode` | `CodeableConcept` | `0..*` | Why was event performed? |
| `bodySite` | `CodeableConcept` | `0..1` | Observed body part |
| `deviceName` | `string` | `0..1` | Name of the device/manufacturer |
| `device` | `Reference` | `0..1` | Observing Device |
| `height` | `positiveInt` | `0..1` | Height of the image in pixels (photo/video) |
| `width` | `positiveInt` | `0..1` | Width of the image in pixels (photo/video) |
| `frames` | `positiveInt` | `0..1` | Number of frames if > 1 (photo) |
| `duration` | `decimal` | `0..1` | Length in seconds (audio / video) |
| `content` | `Attachment` | `1..1` | Actual Media - reference or data |
| `note` | `Annotation` | `0..*` | Comments made about the media |

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
| `based-on` | `string` | http://hl7.org/fhir/SearchParameter/Media-based-on |
| `created` | `string` | http://hl7.org/fhir/SearchParameter/Media-created |
| `device` | `string` | http://hl7.org/fhir/SearchParameter/Media-device |
| `encounter` | `string` | http://hl7.org/fhir/SearchParameter/Media-encounter |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/Media-identifier |
| `modality` | `string` | http://hl7.org/fhir/SearchParameter/Media-modality |
| `operator` | `string` | http://hl7.org/fhir/SearchParameter/Media-operator |
| `patient` | `string` | http://hl7.org/fhir/SearchParameter/Media-patient |
| `site` | `string` | http://hl7.org/fhir/SearchParameter/Media-site |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/Media-status |
| `subject` | `string` | http://hl7.org/fhir/SearchParameter/Media-subject |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/Media-type |
| `view` | `string` | http://hl7.org/fhir/SearchParameter/Media-view |

## Reference

- Official FHIR R4 spec: [`Media`](https://hl7.org/fhir/R4/media.html)
- Maturity: **Trial Use 1** (FMM 1).
