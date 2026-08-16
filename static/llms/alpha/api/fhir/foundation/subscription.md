---
title: Subscription
sidebar_label: Subscription
description: "The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the se"
---

# Subscription

<span className="fhir-maturity" data-level="3">Trial Use 3</span>
<span className="fhir-category">Foundation</span>

The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.

## Endpoints

<ApiBase surface="fhir" path="/Subscription" inline={false} />

| Interaction | Method | Path |
| --- | --- | --- |
| Read | `GET` | `/fhir/R4/Subscription/[id]` |
| Vread | `GET` | `/fhir/R4/Subscription/[id]/_history/[vid]` |
| Update | `PUT` | `/fhir/R4/Subscription/[id]` |
| Patch | `PATCH` | `/fhir/R4/Subscription/[id]` |
| Delete | `DELETE` | `/fhir/R4/Subscription/[id]` |
| Create | `POST` | `/fhir/R4/Subscription` |
| Search | `GET` | `/fhir/R4/Subscription` |
| History | `GET` | `/fhir/R4/Subscription/[id]/_history` |

## Top-level elements

| Element | Type(s) | Cardinality | Description |
| --- | --- | --- | --- |
| `status` | `code` | `1..1` | requested \| active \| error \| off _modifier_ |
| `contact` | `ContactPoint` | `0..*` | Contact details for source (e.g. troubleshooting) |
| `end` | `instant` | `0..1` | When to automatically delete the subscription |
| `reason` | `string` | `1..1` | Description of why this subscription was created |
| `criteria` | `string` | `1..1` | Rule for server push |
| `error` | `string` | `0..1` | Latest error note |
| `channel` | `BackboneElement` | `1..1` | The channel on which to report matches to the criteria |

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
| `author` | `string` | https://medplum.com/fhir/SearchParameter/Subscription-author |
| `contact` | `string` | http://hl7.org/fhir/SearchParameter/Subscription-contact |
| `criteria` | `string` | http://hl7.org/fhir/SearchParameter/Subscription-criteria |
| `payload` | `string` | http://hl7.org/fhir/SearchParameter/Subscription-payload |
| `status` | `string` | http://hl7.org/fhir/SearchParameter/Subscription-status |
| `type` | `string` | http://hl7.org/fhir/SearchParameter/Subscription-type |
| `url` | `string` | http://hl7.org/fhir/SearchParameter/Subscription-url |

## Reference

- Official FHIR R4 spec: [`Subscription`](https://hl7.org/fhir/R4/subscription.html)
- Maturity: **Trial Use 3** (FMM 3).
