---
title: EpisodeOfCare
sidebar_label: EpisodeOfCare
description: "An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level "
---

# EpisodeOfCare

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Clinical — Care Provision</span>

An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.

## Endpoints

<ApiBase surface="fhir" path="/EpisodeOfCare" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/EpisodeOfCare/[id]` |
| Vread        | `GET`    | `/fhir/R5/EpisodeOfCare/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/EpisodeOfCare/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/EpisodeOfCare/[id]` |
| Delete       | `DELETE` | `/fhir/R5/EpisodeOfCare/[id]` |
| Create       | `POST`   | `/fhir/R5/EpisodeOfCare` |
| Search       | `GET`    | `/fhir/R5/EpisodeOfCare?...` |
| History      | `GET`    | `/fhir/R5/EpisodeOfCare/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/EpisodeOfCare/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business Identifier(s) relevant for this EpisodeOfCare |
| `status` | `code` | `1..1` | planned | waitlist | active | onhold | finished | cancelled | entered-in-error _modifier_ |
| `statusHistory` | `BackboneElement` | `0..*` | Past list of status codes (the current status may be included to cover the start date of the status) |
| `type` | `CodeableConcept` | `0..*` | Type/class  - e.g. specialist referral, disease management |
| `reason` | `BackboneElement` | `0..*` | The list of medical reasons that are expected to be addressed during the episode of care |
| `diagnosis` | `BackboneElement` | `0..*` | The list of medical conditions that were addressed during the episode of care |
| `patient` | `Reference` | `1..1` | The patient who is the focus of this episode of care |
| `managingOrganization` | `Reference` | `0..1` | Organization that assumes responsibility for care coordination |
| `period` | `Period` | `0..1` | Interval during responsibility is assumed |
| `referralRequest` | `Reference` | `0..*` | Originating Referral Request(s) |
| `careManager` | `Reference` | `0..1` | Care manager/care coordinator for the patient |
| `careTeam` | `Reference` | `0..*` | Other practitioners facilitating this episode of care |
| `account` | `Reference` | `0..*` | The set of accounts that may be used for billing for this EpisodeOfCare |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`EpisodeOfCare` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `care-manager` | `reference` | Care manager/care coordinator for the patient |
| `date` | `date` | When the event occurred |
| `diagnosis-code` | `token` | Conditions/problems/diagnoses this episode of care is for (coded) |
| `diagnosis-reference` | `reference` | Conditions/problems/diagnoses this episode of care is for (resource reference) |
| `identifier` | `token` | Account number |
| `incoming-referral` | `reference` | Incoming Referral Request |
| `organization` | `reference` | The organization that has assumed the specific responsibilities of this EpisodeOfCare |
| `patient` | `reference` | The entity that caused the expenses |
| `reason-code` | `token` | Reference to a concept (coded) |
| `reason-reference` | `reference` | Reference to a resource (resource reference) |
| `status` | `token` | The current status of the Episode of Care as provided (does not check the status history collection) |
| `type` | `token` | E.g. patient, expense, depreciation |

## Reference

- Official FHIR R5 spec: [`EpisodeOfCare`](https://hl7.org/fhir/R5/episodeofcare.html)
- Element bindings & profiles: [`EpisodeOfCare` profile](https://hl7.org/fhir/R5/episodeofcare-definitions.html)
- Maturity: **Trial Use 2** (FMM 2).
