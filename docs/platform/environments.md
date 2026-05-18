---
title: Environments
sidebar_position: 3
description: The alpha / beta / final contract — what each surface promises.
---

# Environments

Ovok is delivered as three release surfaces. The names are deliberate:
they describe *maturity of the contract*, not the deployment topology.

| Surface | Promise | Internal branch | API host |
| --- | --- | --- | --- |
| **alpha** — preview     | Bleeding edge. Endpoints can change shape day-to-day. Use when you need access to a capability before it ships. | `development` | `api.dev.ovok.com` |
| **beta** — pre-release  | Release-candidate. Stable enough for integration tests and partner walkthroughs, but not bound by deprecation policy. | `staging` | `api.staging.ovok.com` |
| **final** — production  | The supported contract. Breaking changes follow the deprecation policy; client integrations target this. | `master` | `api.ovok.com` |

## Switching surfaces in these docs

The dropdown in the top-right navbar flips the active surface. Your
selection persists across pages and reloads. Every code sample and
`<ApiBase />` reference in the documentation updates immediately.

Currently selected:

<ApiBase inline={false} />

## Versioning rules

- **alpha → beta**: nothing automatic. A capability is promoted when
  the platform team signs off on its shape.
- **beta → final**: gated by an internal release checklist
  (contract review, load profile, on-call sign-off).
- **deprecation**: only `final` is bound by a deprecation policy.
  Endpoints there announce a sunset date in their OpenAPI metadata; the
  generated reference surfaces it in-line.

## Picking a surface

- **Building something new?** Start on **alpha**. Lock to **beta** before
  you ship to internal users.
- **Running in production?** **final**. Don't read from `dev` or `staging`
  hosts from production code — they are not capacity-managed for that.
- **Writing partner integration tests?** **beta**. It's the most
  representative stand-in for production short of the real thing.

## Operator notes

Each surface deploys from its own branch (`development` / `staging` /
`master`). The same is true of this documentation site: a push to
`development` in `ovok-internal` publishes to the `alpha` branch of
this repo; `staging` → `beta`; `master` → `final`.
