---
title: Custom operations
sidebar_label: Overview
description: Ovok-specific operations layered on top of the FHIR API on the dev tier.
---

# Custom FHIR operations

Ovok layers a handful of named operations on top of standard FHIR
resources. Each is mounted at `/fhir/`, `/fhir/R4/` and `/fhir/R5/`.

<ApiBase inline={false} />

## Operations
- [Get last observations](/alpha/api/fhir/custom-operations/fhir-controller-get-patient-last-observation)
- [Get device telemetry](/alpha/api/fhir/custom-operations/fhir-controller-get-device-telemetry)
- [Expand Observation SampledData to a &#123;t,v&#125; time-series](/alpha/api/fhir/custom-operations/fhir-controller-get-observation-or-timeseries)
- [Get device telemetry history](/alpha/api/fhir/custom-operations/fhir-controller-get-device-telemetry-history)
- [Create Patient with Signals linking](/alpha/api/fhir/custom-operations/fhir-controller-create-patient)
- [Update patient threshold](/alpha/api/fhir/custom-operations/fhir-controller-update-patient-threshold)
- [Populate questionnaire](/alpha/api/fhir/custom-operations/fhir-controller-populate-questionnaire)
- [Extract observations from questionnaire response](/alpha/api/fhir/custom-operations/fhir-controller-extract-observations-from-questionnaire-response)
