---
title: Introduction
slug: /
sidebar_position: 1
description: Ovok is the API platform for digital health teams. Start here.
---

# Ovok

Ovok is the API platform digital health teams build on. A single console,
one set of credentials, three surfaces of maturity — *alpha*, *beta*, and
*final*.

These docs cover everything outside the application code: how the platform
fits together, which surface to point an integration at, and how to operate
against it from the Ovok Dashboard.

## The shape of these docs

- **Platform** — what Ovok actually is, how the moving parts connect, and
  how the alpha/beta/final surfaces are versioned.
- **Surfaces** — the human-facing tools you'll use day to day, starting
  with the [Ovok Dashboard](./surfaces/dashboard.md).
- **API reference** — the generated OpenAPI references for the public,
  internal, deprecated and FHIR APIs. Regenerated from the source repo
  whenever the underlying spec changes.

## Pick a surface

Every endpoint in these docs honours your active surface selection.
Switch it from the navbar (top right) — the choice persists across pages
and reloads.

<ApiBase inline={false} />

That value above changes the moment you flip the switcher; the rest of
the page updates with it.

| Surface | Maturity | Internal branch | When to use it |
| --- | --- | --- | --- |
| `alpha` | Preview | `development` | Building against an unreleased capability. Expect breakage. |
| `beta`  | Pre-release | `staging` | Integration tests, partner walkthroughs, contract validation. |
| `final` | Production | `master` | Production traffic. The supported contract. |

## What's next

1. Read the [platform overview](./platform/overview.md) for the one-page
   mental model.
2. If you're operating the platform, jump to the
   [Ovok Dashboard guide](./surfaces/dashboard.md).
3. If you're integrating, head to the [API reference](./reference/index.md).
