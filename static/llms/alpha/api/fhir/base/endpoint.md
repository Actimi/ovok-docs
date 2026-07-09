---
title: Endpoint
sidebar_label: Endpoint
description: "The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b, a REST endpoint for another FHIR server"
---

# Endpoint

<span className="fhir-maturity" data-level="2">Trial Use 2</span>
<span className="fhir-category">Base</span>

The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b, a REST endpoint for another FHIR server, or a s/Mime email address. This may include any security context information.

## Endpoints

<ApiBase surface="fhir" path="/Endpoint" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read         | `GET`    | `/fhir/R5/Endpoint/[id]` |
| Vread        | `GET`    | `/fhir/R5/Endpoint/[id]/_history/[vid]` |
| Update       | `PUT`    | `/fhir/R5/Endpoint/[id]` |
| Patch        | `PATCH`  | `/fhir/R5/Endpoint/[id]` |
| Delete       | `DELETE` | `/fhir/R5/Endpoint/[id]` |
| Create       | `POST`   | `/fhir/R5/Endpoint` |
| Search       | `GET`    | `/fhir/R5/Endpoint?...` |
| History      | `GET`    | `/fhir/R5/Endpoint/[id]/_history` |
| Type-history | `GET`    | `/fhir/R5/Endpoint/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `identifier` | `Identifier` | `0..*` | Identifies this endpoint across multiple systems |
| `status` | `code` | `1..1` | active | suspended | error | off | entered-in-error | test _modifier_ |
| `connectionType` | `CodeableConcept` | `1..*` | Protocol/Profile/Standard to be used with this endpoint connection |
| `name` | `string` | `0..1` | A name that this endpoint can be identified by |
| `description` | `string` | `0..1` | Additional details about the endpoint that could be displayed as further information to identify the description beyond its name |
| `environmentType` | `CodeableConcept` | `0..*` | The type of environment(s) exposed at this endpoint |
| `managingOrganization` | `Reference` | `0..1` | Organization that manages this endpoint (might not be the organization that exposes the endpoint) |
| `contact` | `ContactPoint` | `0..*` | Contact details for source (e.g. troubleshooting) |
| `period` | `Period` | `0..1` | Interval the endpoint is expected to be operational |
| `payload` | `BackboneElement` | `0..*` | Set of payloads that are provided by this endpoint |
| `address` | `url` | `1..1` | The technical base address for connecting to this endpoint |
| `header` | `string` | `0..*` | Usage depends on the channel type |

## Resource-specific search parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `connection-type` | `token` | Protocol/Profile/Standard to be used with this endpoint connection |
| `identifier` | `token` | Identifies this endpoint across multiple systems |
| `name` | `string` | A name that this endpoint can be identified by |
| `organization` | `reference` | The organization that is managing the endpoint |
| `payload-type` | `token` | The type of content that may be used at this endpoint (e.g. XDS Discharge summaries) |
| `status` | `token` | The current status of the Endpoint (usually expected to be active) |

## Reference

- Official FHIR R5 spec: [`Endpoint`](https://hl7.org/fhir/R5/endpoint.html)
- Maturity: **Trial Use 2** (FMM 2).
