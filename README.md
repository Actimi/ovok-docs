# ovok-docs

Documentation site for the [Ovok](https://ovok.com) platform, built on
[Docusaurus 3](https://docusaurus.io). One repo, three branches — each
branch is the docs for one release surface of the platform.

| Branch  | Surface              | Source branch in `ovok-internal` |
| ------- | -------------------- | -------------------------------- |
| `alpha` | preview              | `development` |
| `beta`  | pre-release          | `staging` |
| `final` | production (default) | `master` |

## How updates land here

A push to `ovok-internal` that touches `**/README.md` or `docs/**` on one
of the source branches triggers the `publish-ovok-docs` workflow there.
That workflow downloads the OpenAPI artifact from the matching
`ovok/backend` run, aggregates the platform READMEs, and pushes the
result to the corresponding branch on this repo.

So: nothing is hand-edited on `alpha` / `beta` / `final` long-term —
generators do the writing. Edit `ovok-internal` for content-from-code, or
add hand-written pages directly here on the right branch.

## Local dev

```bash
pnpm install
pnpm start         # http://localhost:3000
pnpm build         # static build into ./build
pnpm typecheck
```

Node 18+ required.

## Theming

The visual language deliberately matches
the Ovok Console — warm canvas,
deep purple, Geist + Instrument Serif. See `src/css/custom.css`.

## Env switcher

The navbar dropdown (top-right) flips the active surface between
`alpha` / `beta` / `final`. The selection persists across pages and is
honoured by `<ApiBase />` and any other env-aware MDX component on the
page. Implementation: `src/lib/useEnv.ts` + `src/theme/NavbarItem/EnvSwitcher.tsx`.

## Adding a hand-written doc

1. Drop a `.md` or `.mdx` file under `docs/` on the right surface branch.
2. Add it to `sidebars.ts`.
3. Reference `<ApiBase />` (the API), `<ApiBase surface="console" />`
   or `<ApiBase surface="dashboard" />` inline — they render the host
   for whichever release tier the visitor is on.
