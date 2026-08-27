---
title: Email delivery
sidebar_position: 5
description: Ovok's email pipeline — Brevo templates by default, per-project SMTP override when a tenant supplies its own transport. Encrypted credential storage, SSRF-guarded transport, backward-compatible routing.
keywords:
  - email
  - SMTP
  - Brevo
  - nodemailer
  - Project.secret
  - transactional email
  - INVITE_TO_PROJECT
  - RESET_PASSWORD
  - per-project mail
---

# Email delivery

Ovok sends transactional email — invites, password resets, appointment
notifications, support tickets — through a Brevo template pipeline by
default. A project can opt into its own SMTP transport (SES, Postmark,
Mailgun, corporate relay — anything that speaks SMTP) and have every
mail it dispatches leave through its own sender identity instead.

The default path is unchanged for every project that does not opt in;
carehub's flows are byte-identical to their prior behavior.

## Overview

| Concept | Where it lives | ovok-core surface |
|---------|----------------|-------------------|
| **Default delivery** — Brevo template → Brevo send | `src/email/email.service.ts::send()` + Brevo templates registered in the tenant's Brevo dashboard | existing Brevo strategy, no config |
| **Per-project SMTP** — encrypted creds + nodemailer transport | `Project.secret[]` entries: `EMAIL_PROVIDER`, `EMAIL_SMTP_{HOST,PORT,SECURE,USERNAME,PASSWORD,FROM,FROM_NAME,REPLY_TO}` | `/projects/email-config` (GET/PUT/DELETE) + `/projects/email-config/test` |
| **Local template mirrors** — Handlebars bodies rendered in-process | `src/email/templates/local/*.hbs` (per-template) | render happens inside `send()` when SMTP config resolves |
| **Fallback for non-mirrored templates** | template without an `.hbs` mirror → warn + Brevo, preserving the resolved project + parentProject + defaultLanguage | routing branch in `send()` |

## Routing rules

Every `emailService.send(mail)` call now runs through a small routing
gate before the existing Brevo strategy loop:

1. **No SMTP config on the project** → identical to the previous
   behavior. The Brevo strategy loop runs exactly as it did.
2. **SMTP config + local template mirror exists** → render the
   Handlebars mirror with `mail.data`, dispatch through
   `NodemailerService` with the project's transport, log the result.
   Brevo is **not** called.
3. **SMTP config + no local mirror** → warn
   (`template T has no local mirror; falling back to Brevo for
   project P`) and enter the existing Brevo strategy loop **with the
   already-resolved project, parentProject, adminProject, and
   defaultLanguage**. The customer's project-scoped ConceptMap and
   default locale still apply — opting into SMTP does not silently
   degrade non-mirrored templates.
4. **SMTP config present but partial or undecryptable** →
   `send()` returns `false`. It does **not** fall through to Brevo.
   A customer opt-in never silently reverts to Ovok's global sender.

## Configuration reference

Per-project state lives in `Project.secret[]`, mirroring the signals
module's pattern for tenant-scoped credentials.

| Name | Type | Notes |
|------|------|-------|
| `EMAIL_PROVIDER` | `'smtp'` | Presence of this entry switches routing to SMTP. Absence keeps the default Brevo path. |
| `EMAIL_SMTP_HOST` | string | FQDN or IP. See SSRF guard below. |
| `EMAIL_SMTP_PORT` | int (1-65535) | 465 for implicit TLS, 587 for STARTTLS, 2525 for common relays. |
| `EMAIL_SMTP_SECURE` | boolean | `true` for implicit TLS. `false` is accepted only on 587 with `requireTLS`. |
| `EMAIL_SMTP_USERNAME` | string | Auth username. |
| `EMAIL_SMTP_PASSWORD` | string, encrypted | AES-encrypted via `EncryptionService.encrypt(pw, projectId)`. Never returned by GET. |
| `EMAIL_SMTP_FROM` | email | Envelope sender + `From:` header address. |
| `EMAIL_SMTP_FROM_NAME` | string (optional) | Display name for `From:`. |
| `EMAIL_SMTP_REPLY_TO` | email (optional) | `Reply-To:` header. |

`Project.secret[]` reads and writes go through `EncryptionService`; the
plaintext password is never persisted. `GET /projects/email-config`
returns the config with `password: "***"` — the plaintext is never
sent over the wire.

## Endpoints

Every route is project-scoped via `ContextService.MedplumProjectId`.
Callers cannot pass a `projectId` — the target project is the one the
bearer token belongs to.

| Method | Path | Guard | Behavior |
|--------|------|-------|----------|
| `GET` | `/projects/email-config` | `RoleAdminGuard` | Returns the current config with the password masked. Missing config returns `provider: 'ovok-default'`. |
| `PUT` | `/projects/email-config` | `RoleAdminGuard` | Replaces the config atomically. All required fields must be present. Password is encrypted before persistence. |
| `DELETE` | `/projects/email-config` | `RoleAdminGuard` | Removes every `EMAIL_SMTP_*` and `EMAIL_PROVIDER` entry, restoring the default Brevo path. |
| `POST` | `/projects/email-config/test` | `RoleAdminGuard` | Sends a small test message via the resolved config to the caller's own email. Rate-limited to one call per minute per user. |

Every mutation writes an `AuditEvent` (matching the signals module's
precedent for sensitive project-scoped credential mutations).

## SSRF and TLS posture

- **SSRF guard**: `NodemailerService.validateHost()` runs `dns.lookup`
  on the SMTP hostname and rejects if the resolved IP falls in
  loopback (`127/8`, `::1`), RFC1918 (`10/8`, `172.16/12`,
  `192.168/16`), RFC6598 (`100.64/10`), or link-local
  (`169.254/16`, `fe80::/10`). The check runs **before**
  `createTransport`, so a poisoned DNS answer can never reach the
  connection stage.
- **TLS**: `EMAIL_SMTP_SECURE = true` is the default and takes
  implicit TLS. `false` is accepted only on port 587, with
  `requireTLS: true` forcing STARTTLS. Any other combination is
  rejected before send.
- **Credentials in logs**: `NodemailerService` logs
  `{ host, port, secure, from }` on connect. The password is never
  logged, thrown in an error, or surfaced by any endpoint.
- **Project scoping**: neither `Project.secret[]` reads nor the
  transport cache expose one project's config to another. The
  transport cache is keyed by `(projectId, cfgHash)`.

## Local template mirrors

The templates that ship with local Handlebars mirrors are the ones a
typical SMTP-opting project cares about:

| Template | Mirror | Purpose |
|----------|--------|---------|
| `INVITE_TO_PROJECT` | `src/email/templates/local/invite_to_project.hbs` | New-user invite with a set-password link. |
| `RESET_PASSWORD` | `src/email/templates/local/reset_password.hbs` | Password reset with a one-time link. |

Every other template — `CUSTOMER_SUPPORT_EMAIL`, the
`VIDEO_CALL_APPOINTMENT_*` family, `ACCOUNT_DELETION*`,
`TRENDS_PDF_EXPORT`, and the marketing templates — has no local
mirror on purpose. Support tickets and marketing mail keep going
through Ovok's Brevo pipeline; a customer's SMTP transport is for
their own users' transactional mail.

Adding a mirror for a new template is a two-file change: drop
`<template_name>.hbs` under `src/email/templates/local/` and add
its entry to `LOCAL_TEMPLATES` in `src/email/templates/local/index.ts`.

## Backward compatibility

- **Zero writes under `src/carehub/**`.** Carehub's invite and support
  flows are unchanged.
- Three assertions in `src/email/email.service.spec.ts` pin the
  invariant: (i) no config → the existing Brevo mock is still called;
  (ii) config + local mirror → nodemailer is called, Brevo is not;
  (iii) config + template without local mirror → warn + Brevo called
  with the resolved routing bag preserved. A fourth asserts that an
  SMTP send failure returns `false` without a silent Brevo swap.

## Recipes

### Send Ovok's default mail from a SendGrid account

`PUT /projects/email-config` with

```json
{
  "host": "smtp.sendgrid.net",
  "port": 587,
  "secure": false,
  "username": "apikey",
  "password": "<SG.xxx>",
  "fromAddress": "care@yourclinic.com",
  "fromName": "Your Clinic",
  "replyTo": "reception@yourclinic.com"
}
```

Then `POST /projects/email-config/test` with your own address as
`to` and check the `Received:` header on the delivered mail —
`smtp.sendgrid.net` should appear in the trace, not Brevo.

### Route through Amazon SES via SMTP

Same shape, `host: "email-smtp.us-east-1.amazonaws.com"`,
`port: 465`, `secure: true`, `username` and `password` from your
IAM SMTP credentials. SES's HTTP API is not required.

### Roll back to the default

`DELETE /projects/email-config` clears every `EMAIL_SMTP_*` entry
from `Project.secret[]` and restores the default Brevo path. No
downtime for other projects.

## Cost note

Rough transactional-mail costs at the time of writing (2026-08):

- **Amazon SES (via SMTP)**: ~$0.10 per 1,000 mails. Cheapest at
  volume if you already have an AWS presence.
- **Postmark / Mailgun**: ~$15/mo for the first 10,000. Best
  deliverability + BAA options for regulated tenants.
- **Brevo (default)**: 300/day on the free tier, then €18/mo for
  20,000. Sensible default for sandbox and small clinics.

The routing patch is transport-agnostic — Ovok never negotiates the
price. A project picks its provider by supplying an SMTP endpoint.
