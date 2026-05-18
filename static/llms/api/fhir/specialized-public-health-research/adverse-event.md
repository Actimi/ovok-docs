---
title: AdverseEvent
sidebar_label: AdverseEvent
description: "An event (i.e. any change to current patient status) that may be related to unintended effects on a patient or research participant. The unintended effects may "
---

# AdverseEvent

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Specialized — Public Health & Research</span>

An event (i.e. any change to current patient status) that may be related to unintended effects on a patient or research participant. The unintended effects may require additional monitoring, treatment, hospitalization, or may result in death. The AdverseEvent resource also extends to potential or avoided events that could have had such effects. There are two major domains where the AdverseEvent resource is expected to be used. One is in clinical care reported adverse events and the other is in reporting adverse events in clinical  research trial management.  Adverse events can be reported by healthcare providers, patients, caregivers or by medical products manufacturers.  Given the differences between these two concepts, we recommend consulting the domain specific implementation guides when implementing the AdverseEvent Resource. The implementation guides include specific extensions, value sets and constraints.

## Endpoints

<ApiBase surface="fhir" path="/AdverseEvent" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/AdverseEvent/[id]` |
| Vread        | `GET`    | `/fhir/R5/AdverseEvent/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/AdverseEvent/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/AdverseEvent/[id]` |
| Delete       | `DELETE` | `/fhir/R5/AdverseEvent/[id]` |
| Create       | `POST`   | `/fhir/R5/AdverseEvent` |
| Search       | `GET`    | `/fhir/R5/AdverseEvent?...` |
| History      | `GET`    | `/fhir/R5/AdverseEvent/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/AdverseEvent/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier for the event |
| `status` | `code` | `1..1` | in-progress | completed | entered-in-error | unknown _modifier_ |
| `actuality` | `code` | `1..1` | actual | potential _modifier_ |
| `category` | `CodeableConcept` | `0..*` | wrong-patient | procedure-mishap | medication-mishap | device | unsafe-physical-environment | hospital-aquired-infection | wrong-body-site |
| `code` | `CodeableConcept` | `0..1` | Event or incident that occurred or was averted |
| `subject` | `Reference` | `1..1` | Subject impacted by event |
| `encounter` | `Reference` | `0..1` | The Encounter associated with the start of the AdverseEvent |
| `occurrence[x]` | `dateTime` / `Period` / `Timing` | `0..1` | When the event occurred |
| `detected` | `dateTime` | `0..1` | When the event was detected |
| `recordedDate` | `dateTime` | `0..1` | When the event was recorded |
| `resultingEffect` | `Reference` | `0..*` | Effect on the subject due to this event |
| `location` | `Reference` | `0..1` | Location where adverse event occurred |
| `seriousness` | `CodeableConcept` | `0..1` | Seriousness or gravity of the event |
| `outcome` | `CodeableConcept` | `0..*` | Type of outcome from the adverse event |
| `recorder` | `Reference` | `0..1` | Who recorded the adverse event |
| `participant` | `BackboneElement` | `0..*` | Who was involved in the adverse event or the potential adverse event and what they did |
| `study` | `Reference` | `0..*` | Research study that the subject is enrolled in |
| `expectedInResearchStudy` | `boolean` | `0..1` | Considered likely or probable or anticipated in the research study |
| `suspectEntity` | `BackboneElement` | `0..*` | The suspected agent causing the adverse event |
| `contributingFactor` | `BackboneElement` | `0..*` | Contributing factors suspected to have increased the probability or severity of the adverse event |
| `preventiveAction` | `BackboneElement` | `0..*` | Preventive actions that contributed to avoiding the adverse event |
| `mitigatingAction` | `BackboneElement` | `0..*` | Ameliorating actions taken after the adverse event occured in order to reduce the extent of harm |
| `supportingInfo` | `BackboneElement` | `0..*` | Supporting information relevant to the event |
| `note` | `Annotation` | `0..*` | Comment on adverse event |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`AdverseEvent` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `actuality` | `token` | actual | potential |
| `category` | `token` | wrong-patient | procedure-mishap | medication-mishap | device | unsafe-physical-environment | hospital-aquired-infection | wrong-body-site |
| `code` | `token` | Event or incident that occurred or was averted |
| `date` | `date` | When the event occurred |
| `identifier` | `token` | Account number |
| `location` | `reference` | Location where adverse event occurred |
| `patient` | `reference` | The entity that caused the expenses |
| `recorder` | `reference` | Who recorded the adverse event |
| `resultingeffect` | `reference` | Effect on the subject due to this event |
| `seriousness` | `token` | Seriousness or gravity of the event |
| `status` | `token` | in-progress | completed | entered-in-error | unknown |
| `study` | `reference` | Research study that the subject is enrolled in |
| `subject` | `reference` | Subject impacted by event |
| `substance` | `reference` | Refers to the specific entity that caused the adverse event |

## Reference

- Official FHIR R5 spec: [`AdverseEvent`](https://hl7.org/fhir/R5/adverseevent.html)
- Element bindings & profiles: [`AdverseEvent` profile](https://hl7.org/fhir/R5/adverseevent-definitions.html)
- Maturity: **Trial Use 2** (FMM 2).
