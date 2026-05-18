---
title: Platform overview
sidebar_position: 1
description: The one-page mental model — what Ovok is and what it isn't.
---

# Platform overview

Ovok is digital health infrastructure: a hosted FHIR data plane (Medplum),
a domain-aware API in front of it, a developer console, and the tooling that
ties them together.

The platform is built and operated by [Actimi](https://actimi.com) and powers
clinical and consumer-facing products across the Actimi portfolio.

## What Ovok gives you

- **A FHIR-native data plane.** Patients, Observations, Encounters,
  CarePlans, DiagnosticReports — modelled in standards-compliant FHIR R4
  and R5, accessible through the FHIR API.
- **An opinionated platform API.** Higher-level resources (projects,
  members, billing, content, devices, signals) that aren't part of FHIR
  but every digital-health product needs.
- **A developer console.** [Ovok Console](../surfaces/console.md) for
  project setup, member invites, content management, billing, and audit.
- **Three release surfaces.** *alpha*, *beta*, *final* — read
  [Environments](./environments.md) for the contract on each.

## What Ovok is not

- Not a billing system in itself — it federates billing into Stripe.
- Not a custom EHR — clinical state lives in FHIR. Ovok wraps it.
- Not single-tenant — every customer is a project on shared infrastructure.

## Where the pieces live

The platform is split across a handful of repos. See
[Architecture](./architecture.md) for the full topology; the short version:

- `ovok-internal` — the Ovok Platform API (this surface's source of truth).
- `ovok-console` — the operator console at `console.ovok.com`.
- `ovok-payload` — content/CMS back-end powering marketing and in-product copy.
- `medplum` — the FHIR data plane Ovok runs on.

Documentation (this site) is generated from these repos and republished
per-surface whenever READMEs or the OpenAPI specs change.
