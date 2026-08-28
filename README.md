# CIT Tech

Marketing website for CIT Tech (cit-tech.co.za) — security technology integration,
VMS/PSIM (AN4), and related solutions.

## Stack

- **TanStack Start** (React 19 + TanStack Router/Query) on Vite 8
- **Tailwind CSS v4** with Radix UI primitives (shadcn-style components in `src/components/ui`)
- **better-auth** with Postgres (`pg` / `kysely`); PGlite for local development
- TypeScript, ESLint + Prettier

## Getting started

```bash
npm install
npm run dev        # dev server on http://localhost:8080
```

Other scripts:

```bash
npm run build      # production build + db migrations
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run test       # node test runner
npm run format     # prettier --write
```

## Layout

```
src/routes/        file-based routes (index, about, contact, support, solutions/)
src/components/    page sections and UI primitives
src/lib/           app data, auth helpers, utilities
server/            server middleware
migrations/        SQL migrations (auth schema)
scripts/           build/dev tooling (env, migrations, preview, checks)
public/            static assets and images
```

## Notes

Build output (`.vercel/`, `.output/`, `dist/`), local caches (`.grok/`, `.tanstack/`),
and workspace scratch (`screenshots/`, `artifacts/`, `attachments/`) are gitignored.
