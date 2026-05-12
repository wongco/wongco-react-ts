# GH Pages Action Update Design

## Changes

1. **Pin actions to SHA** with version comments (matching existing CI format)
   - `actions/checkout@de0fac2e4500dabe0009e67214ff5f5447ce83dd` — `# actions/checkout@v6.0.2`
   - `actions/setup-node@48b55a011bda9f5d6aeb4c2d9c7362e8dae4041e` — `# actions/setup-node@v6.4.0`
   - `peaceiris/actions-gh-pages@47f197a2200bb9de68ba5f48fad1c088eb1c4a32` — `# peaceiris/actions-gh-pages@v4.0.0`

2. **Use existing node-setup action** instead of duplicating setup, matching CI workflow pattern

3. **Add CI dependency** — deploy job depends on all CI jobs (`tsc-check`, `test`, `build-test`) passing before running

## Rationale

Ensures only verified code gets deployed and maintains consistency with the CI workflow format.
