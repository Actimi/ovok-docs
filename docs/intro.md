---
title: Introduction
slug: /
sidebar_position: 1
description: Ovok is the API platform for digital health teams. Start here.
---

# Ovok

Ovok is the API platform digital health teams build on. A single Console,
one set of credentials, three surfaces of maturity — *alpha*, *beta*, and
*final*.

These docs cover everything outside the application code: how the platform
fits together, which surface to point an integration at, and how to operate
against it from the Ovok Console.

## The shape of these docs

- **Platform** — what Ovok actually is, how the moving parts connect, and
  how the alpha/beta/final surfaces are versioned.
- **Surfaces** — the human-facing tools you'll use day to day, starting
  with the [Ovok Console](./surfaces/console.md).

The API reference is regenerated from the source repo whenever the
underlying OpenAPI spec changes. It is not yet wired into the sidebar —
that surface is being rebuilt from generated Markdown and will land on
its own.

## Pick a surface

Every endpoint in these docs honours your active surface selection.
Switch it from the navbar (top right) — the choice persists across pages
and reloads. By default, new visitors land on **alpha** so you see the
preview-tier hosts unless you opt into a more stable one.

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
   [Ovok Console guide](./surfaces/console.md).
