#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const WEBP_CONVERSION_QUALITY = 80;

const srcDir = path.join(process.cwd(), "src", "pics");

async function getFiles(dir) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (err) {
    console.error(`Failed to read directory ${dir}:`, err.message);
    process.exit(1);
  }

  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFiles(full)));
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if ([".jpg", ".jpeg", ".png"].includes(ext)) {
        files.push(full);
      }
    }
  }
  return files;
}

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const files = await getFiles(srcDir);
  if (!files.length) {
    console.log("No JPG/PNG images found in src/pics");
    return;
  }

  for (const file of files) {
    const output = file.replace(/\.[^.]+$/, ".webp");
    if (await exists(output)) {
      console.log("Skipping existing:", path.relative(process.cwd(), output));
      continue;
    }

    try {
      await sharp(file)
        .webp({ quality: WEBP_CONVERSION_QUALITY })
        .toFile(output);

      const inStat = await fs.stat(file);
      const outStat = await fs.stat(output);
      console.log(
        `${path.relative(process.cwd(), file)} -> ${path.relative(
          process.cwd(),
          output,
        )} (${(inStat.size / 1024).toFixed(0)}KB -> ${(
          outStat.size / 1024
        ).toFixed(0)}KB)`,
      );
    } catch (err) {
      console.error("Failed to convert", file, err.message);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
