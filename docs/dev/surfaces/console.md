---
title: Ovok Console
sidebar_position: 1
description: The Ovok Console is the operator surface — projects, members, billing, content, audit. The place your team runs the platform from.
keywords:
  - Ovok Console
  - healthcare developer console
  - project administration
---

# Ovok Console

The Ovok Console is the **operator surface** for the platform. It's
where your team configures the product behind your product.

<ApiBase surface="console" inline={false} />

## What the Console is for

- **Projects** — create, rename, archive. Every project is a tenant
  boundary; resources never cross projects.
- **Members & roles** — invite operators, assign roles, revoke access.
- **Billing** — connect Stripe customers, see invoices and line items,
  toggle billed surfaces on and off.
- **Content** — edit the copy and assets served inside your product.
- **Audit / change history** — read who changed what and when.
- **Devices & signals** — manage the device fleet attached to your
  project.

## When to use it

- Bringing a new operator onto the platform.
- Standing up a fresh project for a new pilot, partner, or product.
- Investigating a change after the fact (audit, billing, content).

If your engineers can do something from the Console, they can do it
from the API — the Console is a client of the same surface every
integration uses. There's no privileged operator endpoint.

## Where to find it

| Tier | Host |
| --- | --- |
| **alpha** | `console.dev.ovok.com` |
| **beta**  | `console.staging.ovok.com` |
| **final** | `console.ovok.com` |

The link in the navbar above always goes to the *final* Console. Switch
the tier in the env switcher to use the matching Console for the same
maturity tier.

## Looking for the data side?

If you need to inspect records, curate cohorts, or validate the data
your product produces, head to the [Data Dashboard](./data-dashboard.md)
instead. The two surfaces complement each other — Console runs the
platform, Data Dashboard reads the data.
