---
title: Medication
sidebar_label: Medication
description: "This resource is primarily used for the identification and definition of a medication, including ingredients, for the purposes of prescribing, dispensing, and a"
---

# Medication

<span className="fhir-maturity" data-level="4">Trial Use 4</span>
<span className="fhir-category">Clinical — Medications</span>

This resource is primarily used for the identification and definition of a medication, including ingredients, for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.

## Endpoints

<ApiBase surface="fhir" path="/Medication" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Medication/[id]` |
| Vread        | `GET`    | `/fhir/R5/Medication/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Medication/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Medication/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Medication/[id]` |
| Create       | `POST`   | `/fhir/R5/Medication` |
| Search       | `GET`    | `/fhir/R5/Medication?...` |
| History      | `GET`    | `/fhir/R5/Medication/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Medication/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier for this medication |
| `code` | `CodeableConcept` | `0..1` | Codes that identify this medication |
| `status` | `code` | `0..1` | active | inactive | entered-in-error _modifier_ |
| `marketingAuthorizationHolder` | `Reference` | `0..1` | Organization that has authorization to market medication |
| `doseForm` | `CodeableConcept` | `0..1` | powder | tablets | capsule + |
| `totalVolume` | `Quantity` | `0..1` | When the specified product code does not infer a package size, this is the specific amount of drug in the product |
| `ingredient` | `BackboneElement` | `0..*` | Active or inactive ingredient |
| `batch` | `BackboneElement` | `0..1` | Details about packaged medications |
| `definition` | `Reference` | `0..1` | Knowledge about this medication |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`Medication` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `code` | `token` | Event or incident that occurred or was averted |
| `expiration-date` | `date` | Returns medications in a batch with this expiration date |
| `form` | `token` | Returns medications for a specific dose form |
| `identifier` | `token` | Account number |
| `ingredient` | `reference` | Returns medications for this ingredient reference |
| `ingredient-code` | `token` | Returns medications for this ingredient code |
| `lot-number` | `token` | Returns medications in a batch with this lot number |
| `marketingauthorizationholder` | `reference` | Returns medications made or sold for this marketing authorization holder |
| `serial-number` | `token` | Returns medications in a batch with this lot number |
| `status` | `token` | Returns medications for this status |

## Reference

- Official FHIR R5 spec: [`Medication`](https://hl7.org/fhir/R5/medication.html)
- Element bindings & profiles: [`Medication` profile](https://hl7.org/fhir/R5/medication-definitions.html)
- Maturity: **Trial Use 4** (FMM 4).
