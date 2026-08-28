#!/usr/bin/env node
/**
 * Builds the responsive derivatives for the photography in `public/images`.
 *
 * The masters are ~1792px wide, which is what every viewport used to download —
 * a phone was pulling the same 1.8MP JPEG as a desktop. This emits an AVIF and
 * WebP ladder plus a JPEG fallback so `<ResponsiveImage>` can hand each viewport
 * a file its own size.
 *
 * Masters stay untouched and are the input; run `npm run images` after changing
 * one. Output is committed, so sharp is only needed to regenerate.
 *
 * Quality is set higher than a typical photo pipeline and chroma is kept at
 * 4:4:4: these are night shots whose subject is thousands of small coloured
 * point lights, and subsampling smears exactly that.
 */
import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import sharp from "sharp";

const SRC = "public/images";
const OUT = "public/images/r";
// Rungs chosen so common devices land just above their need rather than a
// long way past it: 390x2 and 414x2 phones both want ~780-830 and would
// otherwise jump to 1200, and 1440x1 laptops want ~1440.
const WIDTHS = [440, 640, 900, 1280, 1536, 1792];
const FALLBACK_WIDTH = 1280;

// Verified against the masters by PSNR and by eye at 1:1 (35.6-39.0 dB).
const AVIF = { quality: 60, effort: 6, chromaSubsampling: "4:4:4" };
const WEBP = { quality: 80, effort: 6, smartSubsample: false };
const JPEG = { quality: 74, progressive: true, mozjpeg: true };

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

const files = (await readdir(SRC)).filter((f) => extname(f) === ".jpg");
if (files.length === 0) throw new Error(`no source JPEGs in ${SRC}`);
await mkdir(OUT, { recursive: true });

let before = 0;
let after = 0;
const manifest = {};

for (const file of files) {
  const name = basename(file, ".jpg");
  const src = join(SRC, file);
  const master = sharp(src);
  const { width: srcWidth } = await master.metadata();
  before += (await stat(src)).size;

  // Never upscale: a master narrower than a rung just stops the ladder there.
  const widths = WIDTHS.filter((w) => w <= srcWidth);
  if (widths.at(-1) !== srcWidth) widths.push(srcWidth);
  manifest[name] = widths;

  for (const width of widths) {
    const resized = () =>
      sharp(src).resize({ width, withoutEnlargement: true });
    for (const [ext, opts] of [
      ["avif", AVIF],
      ["webp", WEBP],
    ]) {
      const out = join(OUT, `${name}-${width}.${ext}`);
      const { size } = await resized()[ext](opts).toFile(out);
      after += size;
    }
  }

  const fallbackWidth = Math.min(FALLBACK_WIDTH, srcWidth);
  const { size } = await sharp(src)
    .resize({ width: fallbackWidth, withoutEnlargement: true })
    .jpeg(JPEG)
    .toFile(join(OUT, `${name}-${fallbackWidth}.jpg`));
  after += size;

  console.log(`${name.padEnd(14)} ${srcWidth}px master -> ${widths.join(", ")}`);
}

// The app imports this to build each srcset, so the ladder is never guessed.
await writeFile(
  "src/lib/image-manifest.json",
  `${JSON.stringify(manifest, null, 2)}\n`,
);

console.log(
  `\nmasters ${kb(before)} -> derivatives ${kb(after)} across ${files.length} images`,
);
