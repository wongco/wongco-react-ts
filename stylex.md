# StyleX Linting Guide

This project uses a hybrid lint setup:

- **Biome** runs fast, on every `npm run lint`, and loads custom Grit rules for StyleX keys.
- **ESLint** is the source of truth for StyleX and is run manually with `npm run lint:stylex`.

## How The StyleX Grit Plugins Work

Biome loads three single‑rule Grit plugins (Biome requires one rule per file):

- `tools/biome/stylex-create.grit`
- `tools/biome/stylex-invalid-key.grit`
- `tools/biome/stylex-invalid-key-nested.grit`

These Grit rules **only validate StyleX property keys** against an allow‑list derived from the current codebase. This keeps the plugin lightweight and avoids Biome/Grit compilation limits while still catching typos and invalid properties in daily linting.

## Updating The Allow‑List (When You Add New StyleX Props)

When you introduce new StyleX properties, regenerate the allow‑list with:

```
npm run stylex:grit
```

This runs `scripts/build-stylex-grit.mjs`, which:

1. Reads the official StyleX property list from `@stylexjs/eslint-plugin`.
2. Scans `src/` to find which StyleX keys are actually used in this project.
3. Writes updated Grit plugins to `tools/biome/`.

After regenerating, re‑run:

```
npm run lint
npm run lint:stylex
```

Biome should stay clean and ESLint will still enforce the full StyleX rule set.

## Why ESLint Still Matters

The StyleX ESLint rule (`@stylexjs/valid-styles`) performs deep semantic validation
(e.g., value constraints and computed keys) that Grit cannot yet replicate.
If ESLint reports a StyleX error but Biome does not, treat ESLint as the source
of truth and update the Grit allow‑list as needed.

## Files You Should Know

- `scripts/build-stylex-grit.mjs` – allow‑list generator (reads StyleX rule + project usage).
- `tools/biome/stylex-create.grit` – checks `stylex.create` argument shape.
- `tools/biome/stylex-invalid-key.grit` – validates top‑level StyleX keys.
- `tools/biome/stylex-invalid-key-nested.grit` – validates nested StyleX keys.
- `biome.json` – loads the Grit plugins.
