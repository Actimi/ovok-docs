---
title: Ovok Dashboard
sidebar_position: 1
description: The developer console for the Ovok platform.
---

# Ovok Dashboard

The Ovok Dashboard is the operator surface for the platform. It's where
projects are configured, members are invited, content is edited, billing
is connected, and audit trails are read.

<ApiBase surface="dashboard" inline={false} />

## What you can do from the dashboard

- **Projects** — create, rename, archive. Every project is a tenant boundary;
  resources never cross projects.
- **Members** — invite, assign roles, revoke. Roles map to
  `ProjectMembership` resources in FHIR; the dashboard hides that detail
  but the audit log does not.
- **Content** — edit the copy and assets served by the platform via the
  Payload CMS back-end.
- **Billing** — connect Stripe customers, see invoices and line items,
  toggle Stripe-billed product surfaces.
- **Audit / Change history** — view who changed what and when. Backed by
  Medplum's `vHistory` and surfaced through the platform API.
- **Devices & signals** — the operational view of the device fleet
  registered to a project.

## Stack

The dashboard is a Next.js 16 app (React 19, Tailwind 4). It's a
**thin client over the platform API** — there is no dashboard-only
endpoint. If you can do it in the dashboard, you can do it from your
own integration against the same API.

The visual language of this docs site is deliberately the same as the
dashboard: warm off-white canvas, deep purple accent, Geist + Instrument
Serif. If you're switching tabs between the two, that's intentional.

## Where to find it

- **alpha** — `dashboard.dev.ovok.com`
- **beta**  — `dashboard.staging.ovok.com`
- **final** — `dashboard.ovok.com`

The link in the navbar always goes to the *final* dashboard.
Switch the API surface in the env switcher to use the matching
dashboard for the same maturity tier.
