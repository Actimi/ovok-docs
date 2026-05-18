---
title: Permission
sidebar_label: Permission
description: "Permission resource holds access rules for a given data and context."
---

# Permission

<span className="fhir-maturity" data-level="0">Draft</span>
<span className="fhir-category">Foundation</span>

Permission resource holds access rules for a given data and context.

## Endpoints

<ApiBase surface="fhir" path="/Permission" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Permission/[id]` |
| Vread        | `GET`    | `/fhir/R5/Permission/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Permission/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Permission/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Permission/[id]` |
| Create       | `POST`   | `/fhir/R5/Permission` |
| Search       | `GET`    | `/fhir/R5/Permission?...` |
| History      | `GET`    | `/fhir/R5/Permission/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Permission/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `status` | `code` | `1..1` | active | entered-in-error | draft | rejected |
| `asserter` | `Reference` | `0..1` | The person or entity that asserts the permission |
| `date` | `dateTime` | `0..*` | The date that permission was asserted |
| `validity` | `Period` | `0..1` | The period in which the permission is active |
| `justification` | `BackboneElement` | `0..1` | The asserted justification for using the data |
| `combining` | `code` | `1..1` | deny-overrides | permit-overrides | ordered-deny-overrides | ordered-permit-overrides | deny-unless-permit | permit-unless-deny _modifier_ |
| `rule` | `BackboneElement` | `0..*` | Constraints to the Permission |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`Permission` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `status` | `token` | active | entered-in-error | draft | rejected |

## Reference

- Official FHIR R5 spec: [`Permission`](https://hl7.org/fhir/R5/permission.html)
- Element bindings & profiles: [`Permission` profile](https://hl7.org/fhir/R5/permission-definitions.html)
- Maturity: **Draft** (FMM 0).
