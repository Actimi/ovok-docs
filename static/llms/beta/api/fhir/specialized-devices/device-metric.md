---
title: DeviceMetric
sidebar_label: DeviceMetric
description: "Describes a measurement, calculation or setting capability of a medical device."
---

# DeviceMetric

<span className="fhir-maturity" data-level="1">Trial Use 1</span>
<span className="fhir-category">Specialized — Devices</span>

Describes a measurement, calculation or setting capability of a medical device.

## Endpoints

<ApiBase surface="fhir" path="/DeviceMetric" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/DeviceMetric/[id]` |
| Vread | `GET` | `/fhir/R4/DeviceMetric/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/DeviceMetric/[id]` |
| Patch | `PATCH` | `/fhir/R4/DeviceMetric/[id]` |
| Delete | `DELETE` | `/fhir/R4/DeviceMetric/[id]` |
| Create | `POST` | `/fhir/R4/DeviceMetric` |
| Search | `GET` | `/fhir/R4/DeviceMetric` |
| History | `GET` | `/fhir/R4/DeviceMetric/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Instance identifier |
| `type` | `CodeableConcept` | `1..1` | Identity of metric, for example Heart Rate or PEEP Setting |
| `unit` | `CodeableConcept` | `0..1` | Unit of Measure for the Metric |
| `source` | `Reference` | `0..1` | Describes the link to the source Device |
| `parent` | `Reference` | `0..1` | Describes the link to the parent Device |
| `operationalStatus` | `code` | `0..1` | on \| off \| standby \| entered-in-error |
| `color` | `code` | `0..1` | black \| red \| green \| yellow \| blue \| magenta \| cyan \| white |
| `category` | `code` | `1..1` | measurement \| setting \| calculation \| unspecified |
| `measurementPeriod` | `Timing` | `0..1` | Describes the measurement repetition time |
| `calibration` | `BackboneElement` | `0..*` | Describes the calibrations that have been performed or that are required to be performed |

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
| `category` | `string` | http://hl7.org/fhir/SearchParameter/DeviceMetric-category |
| `identifier` | `string` | http://hl7.org/fhir/SearchParameter/DeviceMetric-identifier |
| `parent` | `string` | http://hl7.org/fhir/SearchParameter/DeviceMetric-parent |
| `source` | `string` | http://hl7.org/fhir/SearchParameter/DeviceMetric-source |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/DeviceMetric-type |

## Reference

- Official FHIR R4 spec: [`DeviceMetric`](https://hl7.org/fhir/R4/devicemetric.html)
- Maturity: **Trial Use 1** (FMM 1).
