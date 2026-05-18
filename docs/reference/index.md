---
title: API reference
sidebar_position: 1
description: Generated OpenAPI references and how they get here.
---

# API reference

The Ovok platform exposes four OpenAPI surfaces, all generated from the
source in `ovok-internal`:

| Spec | Audience | Notes |
| --- | --- | --- |
| `ovok-api-public`     | External integrations | The supported public contract. |
| `ovok-api-internal`   | First-party clients (dashboard, internal services) | Not exposed on `final`. |
| `ovok-api-deprecated` | Legacy callers | Documented for migration only. New work should target `public`. |
| `fhir-api-r4 / r5`    | FHIR clients | Mediated through `ovok-internal` — no direct Medplum access. |

Pages below are placeholders. They are filled by the
[`publish-ovok-docs`](https://github.com/Actimi/ovok-internal/actions/workflows/publish-ovok-docs.yml)
workflow whenever the OpenAPI artifact or any `**/README.md` changes on
the source branch.

Currently selected host: <ApiBase inline={false} />

## How docs are published

1. A push to `development`, `staging` or `master` in `ovok-internal` that
   touches `**/README.md` or `docs/**` triggers `publish-ovok-docs`.
2. The workflow downloads the OpenAPI artifact emitted by the existing
   `ovok/backend` workflow on the same branch.
3. It clones this repo, switches to the matching surface branch
   (`alpha` / `beta` / `final`), aggregates the platform READMEs and the
   freshly-generated OpenAPI YAMLs into `docs/reference/`, commits and
   pushes.
4. The docs site rebuilds from the updated branch.

That means: every push that changes platform docs in `ovok-internal`
becomes an update on the matching docs surface here. Nothing else
crosses the boundary.

## Branches on this repo

- `alpha`  ← built from `development` in `ovok-internal`
- `beta`   ← built from `staging` in `ovok-internal`
- `final`  ← built from `master` in `ovok-internal`

Each branch carries the full site at its own surface's level of maturity.
The env switcher only flips API hostnames inside one branch — it does not
cross branches.
