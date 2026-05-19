---
title: Data Dashboard
sidebar_position: 2
description: The Ovok Data Dashboard is the surface for working with the FHIR data your product produces — inspect records, curate cohorts, validate workflows.
keywords:
  - Ovok Data Dashboard
  - FHIR data explorer
  - clinical data inspection
---

# Data Dashboard

The Data Dashboard is the **data surface** for the platform. It's
where analysts, clinicians and product managers work with the records
your product is producing.

<ApiBase surface="dashboard" inline={false} />

## What the Data Dashboard is for

- **Inspect records** — patients, encounters, observations, care
  plans, diagnostic reports. Read the same FHIR your API serves, with
  a human-friendly UI on top.
- **Validate workflows** — confirm that a clinical pathway wrote the
  resources you expected, in the shape you expected.
- **Curate cohorts** — segment patients by condition, plan, or any
  searchable FHIR property.
- **Export & investigate** — pull a slice of data for analysis or
  share a snapshot with a partner.

## When to use it

- Triaging a support ticket: "this patient's record looks wrong."
- Running a clinical audit before a release goes to production.
- Building a cohort for a research export.
- Sanity-checking that an integration is writing the right resources.

## Console or Data Dashboard?

| You want to... | Surface |
| --- | --- |
| Add a teammate to your project | [Console](./console.md) |
| Look up a patient's last visit | **Data Dashboard** |
| Update billing details | [Console](./console.md) |
| Confirm an observation was recorded | **Data Dashboard** |
| Rotate an API key | [Console](./console.md) |
| Curate a cohort for analytics | **Data Dashboard** |

The two surfaces speak to the same API. Anything you can see in the
Data Dashboard, your code can read; anything you configure in the
Console, your code can manage.

## Where to find it

| Tier | Host |
| --- | --- |
| **alpha** | `dashboard.dev.ovok.com` |
| **beta**  | `dashboard.staging.ovok.com` |
| **final** | `dashboard.ovok.com` |

The link in the navbar above always goes to the *final* Data Dashboard.
Switch the release tier in the env switcher to use the matching
Dashboard for the same maturity tier.
