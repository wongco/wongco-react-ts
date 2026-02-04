import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const repoRoot = process.cwd();
const sourcePath = path.join(
  repoRoot,
  "node_modules",
  "@stylexjs",
  "eslint-plugin",
  "lib",
  "stylex-valid-styles.js"
);
const outputDir = path.join(repoRoot, "tools", "biome");

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

const buildChunks = (items, maxLen) => {
  const chunks = [];
  let current = [];
  let currentLen = 0;
  for (const item of items) {
    const escaped = escapeRegex(item);
    const nextLen = currentLen + (current.length ? 1 : 0) + escaped.length;
    if (nextLen > maxLen && current.length) {
      chunks.push(current);
      current = [escaped];
      currentLen = escaped.length;
      continue;
    }
    current.push(escaped);
    currentLen = nextLen;
  }
  if (current.length) {
    chunks.push(current);
  }
  return chunks;
};

const getSourceFiles = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getSourceFiles(entryPath));
    } else if (entry.isFile() && (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx"))) {
      files.push(entryPath);
    }
  }
  return files;
};

const collectStylexKeys = () => {
  const used = new Set();
  const srcRoot = path.join(repoRoot, "src");
  if (!fs.existsSync(srcRoot)) {
    return used;
  }
  const files = getSourceFiles(srcRoot);
  for (const filePath of files) {
    const text = fs.readFileSync(filePath, "utf8");
    const sourceFile = ts.createSourceFile(
      filePath,
      text,
      ts.ScriptTarget.Latest,
      true,
      filePath.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS
    );

    const collectFromObject = (obj) => {
      obj.properties.forEach((prop) => {
        if (ts.isPropertyAssignment(prop)) {
          const name = prop.name;
          let key = null;
          if (ts.isIdentifier(name)) key = name.text;
          if (ts.isStringLiteral(name) || ts.isNoSubstitutionTemplateLiteral(name)) key = name.text;
          if (key && !key.startsWith(":") && !key.startsWith("@")) {
            used.add(key);
          }
          if (ts.isObjectLiteralExpression(prop.initializer)) {
            collectFromObject(prop.initializer);
          }
        }
      });
    };

    const visit = (node) => {
      if (ts.isCallExpression(node)) {
        const expr = node.expression;
        if (
          ts.isPropertyAccessExpression(expr) &&
          ts.isIdentifier(expr.expression) &&
          expr.expression.text === "stylex" &&
          expr.name.text === "create"
        ) {
          const arg = node.arguments[0];
          if (arg && ts.isObjectLiteralExpression(arg)) {
            collectFromObject(arg);
          }
        }
      }
      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
  }
  return used;
};

const usedKeys = collectStylexKeys();
const allowedKeysForProject = usedKeys.size
  ? allowedKeys.filter((key) => usedKeys.has(key))
  : allowedKeys;

const allowedChunks = buildChunks(allowedKeysForProject, 200).map(
  (chunk) => `^(?:${chunk.join("|")})$`
);

const createRule = `// Auto-generated from @stylexjs/eslint-plugin stylex-valid-styles.js
// Regenerate with: node scripts/build-stylex-grit.mjs

\`stylex.create($arg)\` where {
    not $arg <: \`{ $props }\`,
    register_diagnostic(
      span = $arg,
      message = "stylex.create expects a single object literal argument"
    )
  }
`;

const invalidKeyRule = `// Auto-generated from @stylexjs/eslint-plugin stylex-valid-styles.js
// Regenerate with: node scripts/build-stylex-grit.mjs

\`stylex.create({ $namespace: { $key: $value } })\` where {
    not $key <: r"^[:@]",
${allowedChunks
  .map((chunk) => `    not $key <: r"${chunk.replace(/"/g, "\\\"")}",`)
  .join("\n")}
    register_diagnostic(
      span = $key,
      message = "This is not a key that is allowed by stylex"
    )
  }
`;

const invalidKeyNestedRule = `// Auto-generated from @stylexjs/eslint-plugin stylex-valid-styles.js
// Regenerate with: node scripts/build-stylex-grit.mjs

\`stylex.create({ $namespace: { $pseudo: { $key: $value } } })\` where {
    $pseudo <: r"^[:@]",
    not $key <: r"^[:@]",
${allowedChunks
  .map((chunk) => `    not $key <: r"${chunk.replace(/"/g, "\\\"")}",`)
  .join("\n")}
    register_diagnostic(
      span = $key,
      message = "This is not a key that is allowed by stylex"
    )
  }
`;

const outputs = [
  { name: "stylex-create.grit", content: createRule },
  { name: "stylex-invalid-key.grit", content: invalidKeyRule },
  { name: "stylex-invalid-key-nested.grit", content: invalidKeyNestedRule }
];

for (const output of outputs) {
  const outputPath = path.join(outputDir, output.name);
  fs.writeFileSync(outputPath, output.content, "utf8");
  console.log(`Wrote ${outputPath}`);
}

console.log(`Allowed properties: ${allowedKeysForProject.length}`);
