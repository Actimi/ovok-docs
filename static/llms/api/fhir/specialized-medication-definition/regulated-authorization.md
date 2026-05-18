---
title: RegulatedAuthorization
sidebar_label: RegulatedAuthorization
description: "Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or leg"
---

# RegulatedAuthorization

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Specialized — Medication Definition</span>

Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.

## Endpoints

<ApiBase surface="fhir" path="/RegulatedAuthorization" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/RegulatedAuthorization/[id]` |
| Vread        | `GET`    | `/fhir/R5/RegulatedAuthorization/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/RegulatedAuthorization/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/RegulatedAuthorization/[id]` |
| Delete       | `DELETE` | `/fhir/R5/RegulatedAuthorization/[id]` |
| Create       | `POST`   | `/fhir/R5/RegulatedAuthorization` |
| Search       | `GET`    | `/fhir/R5/RegulatedAuthorization?...` |
| History      | `GET`    | `/fhir/R5/RegulatedAuthorization/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/RegulatedAuthorization/_history` |

All calls expect FHIR-flavoured JSON
(`Content-Type: application/fhir+json`) and accept the standard
`Accept: application/fhir+json` header.

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Business identifier for the authorization, typically assigned by the authorizing body |
| `subject` | `Reference` | `0..*` | The product type, treatment, facility or activity that is being authorized |
| `type` | `CodeableConcept` | `0..1` | Overall type of this authorization, for example drug marketing approval, orphan drug designation |
| `description` | `markdown` | `0..1` | General textual supporting information |
| `region` | `CodeableConcept` | `0..*` | The territory in which the authorization has been granted |
| `status` | `CodeableConcept` | `0..1` | The status that is authorised e.g. approved. Intermediate states can be tracked with cases and applications |
| `statusDate` | `dateTime` | `0..1` | The date at which the current status was assigned |
| `validityPeriod` | `Period` | `0..1` | The time period in which the regulatory approval etc. is in effect, e.g. a Marketing Authorization includes the date of authorization and/or expiration date |
| `indication` | `CodeableReference` | `0..*` | Condition for which the use of the regulated product applies |
| `intendedUse` | `CodeableConcept` | `0..1` | The intended use of the product, e.g. prevention, treatment |
| `basis` | `CodeableConcept` | `0..*` | The legal/regulatory framework or reasons under which this authorization is granted |
| `holder` | `Reference` | `0..1` | The organization that has been granted this authorization, by the regulator |
| `regulator` | `Reference` | `0..1` | The regulatory authority or authorizing body granting the authorization |
| `attachedDocument` | `Reference` | `0..*` | Additional information or supporting documentation about the authorization |
| `case` | `BackboneElement` | `0..1` | The case or regulatory procedure for granting or amending a regulated authorization. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page) |

## Resource-specific search parameters

In addition to the
[universal FHIR search parameters](https://hl7.org/fhir/R5/search.html#all),
`RegulatedAuthorization` supports the parameters below.

| Parameter | Type | Description |
| --- | --- | --- |
| `case` | `token` | The case or procedure number |
| `case-type` | `token` | The defining type of case |
| `holder` | `reference` | The organization that holds the granted authorization |
| `identifier` | `token` | Business identifier for the authorization, typically assigned by the authorizing body |
| `region` | `token` | The territory (e.g., country, jurisdiction etc.) in which the authorization has been granted |
| `status` | `token` | The status that is authorised e.g. approved. Intermediate states can be tracked with cases and applications |
| `subject` | `reference` | The type of regulated product, treatment, facility or activity that is being authorized |

## Reference

- Official FHIR R5 spec: [`RegulatedAuthorization`](https://hl7.org/fhir/R5/regulatedauthorization.html)
- Element bindings & profiles: [`RegulatedAuthorization` profile](https://hl7.org/fhir/R5/regulatedauthorization-definitions.html)
- Maturity: **Trial Use 2** (FMM 2).
