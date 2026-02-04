import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const sourcePath = path.join(
  repoRoot,
  "node_modules",
  "@stylexjs",
  "eslint-plugin",
  "lib",
  "stylex-valid-styles.js"
);
const outputPath = path.join(repoRoot, "tools", "biome", "stylex-valid-styles.grit");

const source = fs.readFileSync(sourcePath, "utf8");
const startToken = "const CSSProperties = {";
const startIndex = source.indexOf(startToken);
if (startIndex === -1) {
  throw new Error("Could not locate CSSProperties block in stylex-valid-styles.js");
}
const endIndex = source.indexOf("};", startIndex);
if (endIndex === -1) {
  throw new Error("Could not locate end of CSSProperties block in stylex-valid-styles.js");
}
const block = source.slice(startIndex + startToken.length, endIndex);

const keys = new Set();
const identifierRegex = /^\s*([A-Za-z0-9_]+)\s*:/gm;
const quotedRegex = /^\s*["']([^"']+)["']\s*:/gm;

let match;
while ((match = identifierRegex.exec(block)) !== null) {
  keys.add(match[1]);
}
while ((match = quotedRegex.exec(block)) !== null) {
  keys.add(match[1]);
}

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const allowedKeys = Array.from(keys)
  .filter(Boolean)
  .sort((a, b) => a.localeCompare(b));

const allowedRegex = `^['"]?(?:${allowedKeys.map(escapeRegex).join("|")})['"]?$`;

const pseudoElements = [
  "::before",
  "::after",
  "::first-letter",
  "::first-line",
  "::selection",
  "::backdrop",
  "::marker",
  "::placeholder",
  "::spelling-error",
  "::grammar-error",
  "::cue",
  "::slotted",
  "::part",
  "::thumb",
  "::-webkit-inner-spin-button",
  "::-webkit-outer-spin-button",
  "::-webkit-search-decoration",
  "::-webkit-search-cancel-button",
  "::-webkit-search-results-button",
  "::-webkit-search-results-decoration"
];

const pseudoRegex = `^['"]?(?:${pseudoElements.map(escapeRegex).join("|")})['"]?$`;

const grit = `language js;

// Auto-generated from @stylexjs/eslint-plugin stylex-valid-styles.js
// Regenerate with: node scripts/build-stylex-grit.mjs

rule stylex_create_requires_object {
  
  	\`stylex.create($arg)\` where {
    not $arg <: \`{ $props }\`,
    register_diagnostic(
      span = $arg,
      message = "stylex.create expects a single object literal argument"
    )
  }
}

rule stylex_disallow_spread_objects {
  \`stylex.create($arg)\` where {
    $arg <: \`{ $props }\`,
    $props <: contains \`...$spread\` as $spread,
    register_diagnostic(
      span = $spread,
      message = "Styles cannot be spread objects"
    )
  }
}

rule stylex_disallow_computed_keys {
  \`stylex.create({ $namespace: { [$key]: $value } })\` where {
    register_diagnostic(
      span = $key,
      message = "All keys in a stylex object must be static literal values"
    )
  }
}

rule stylex_disallow_deep_nesting {
  \`stylex.create({ $namespace: { $prop: { $nestedKey: { $deep: $deepValue } } } })\` where {
    register_diagnostic(
      span = $nestedKey,
      message = "You cannot nest styles more than one level deep"
    )
  }
}

rule stylex_invalid_top_level_pseudo {
  \`stylex.create({ $namespace: { $key: $value } })\` where {
    $key <: r"^['\"]?[:@]",
    not $key <: r"${pseudoRegex.replace(/"/g, "\\\"")}",
    register_diagnostic(
      span = $key,
      message = "Pseudo classes, media queries, and at-rules must be nested within style values. Only pseudo elements are allowed at the top level."
    )
  }
}

rule stylex_invalid_property_key {
  \`stylex.create({ $namespace: { $key: $value } })\` where {
    not $key <: r"^['\"]?[:@]",
    not $key <: r"${allowedRegex.replace(/"/g, "\\\"")}",
    register_diagnostic(
      span = $key,
      message = "This is not a key that is allowed by stylex"
    )
  }
}

rule stylex_invalid_property_key_nested {
  \`stylex.create({ $namespace: { $pseudo: { $key: $value } } })\` where {
    $pseudo <: r"^['\"]?[:@]",
    not $key <: r"^['\"]?[:@]",
    not $key <: r"${allowedRegex.replace(/"/g, "\\\"")}",
    register_diagnostic(
      span = $key,
      message = "This is not a key that is allowed by stylex"
    )
  }
}
`;

fs.writeFileSync(outputPath, grit, "utf8");

console.log(`Wrote ${outputPath}`);
console.log(`Allowed properties: ${allowedKeys.length}`);
