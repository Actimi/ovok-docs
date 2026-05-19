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
- [Get last observations](/dev/api/fhir/custom-operations/fhir-controller-get-patient-last-observation)
- [Get device telemetry](/dev/api/fhir/custom-operations/fhir-controller-get-device-telemetry)
- [Populate questionnaire](/dev/api/fhir/custom-operations/fhir-controller-populate-questionnaire)
- [Extract observations from questionnaire r…](/dev/api/fhir/custom-operations/fhir-controller-extract-observations-from-questionnaire-response)
