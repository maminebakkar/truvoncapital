// Generates brand assets from the master logo PNG:
//  - public/logo-dark.png   (green + gold wordmark on transparent bg)
//  - public/logo-light.png  (offwhite + gold wordmark on transparent bg, for dark surfaces)
//  - favicon set + apple/android icons + app/icon.svg + og-image.png
// Run: npm run assets
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const pub = path.join(root, "public");
const appDir = path.join(root, "src", "app");
const libDir = path.join(root, "src", "lib");

const MASTER = path.join(root, "Truvon Capital Logo (White Background - High Res).PNG");

const GREEN = { r: 0x04, g: 0x40, b: 0x29 };
const GOLD = { r: 0xb2, g: 0x8f, b: 0x53 };
const OFFWHITE = { r: 0xf8, g: 0xf7, b: 0xf3 };

// Turn near-white background into transparency; classify ink into green vs gold.
// For the "light" variant, remap green ink -> offwhite while preserving gold.
async function buildWordmark(light) {
  const img = sharp(MASTER).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.alloc(data.length);

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;

    // Background: near-white -> transparent.
    if (lum > 232) {
      out[i] = out[i + 1] = out[i + 2] = 0;
      out[i + 3] = 0;
      continue;
    }

    // Alpha ramp across the anti-aliased edge (232 -> 150 luminance).
    let alpha = 255;
    if (lum > 150) alpha = Math.round(255 * (1 - (lum - 150) / (232 - 150)));

    // Gold detection: warm, red >= blue and meaningfully warm.
    const isGold = r > b + 18 && r >= g - 10 && g > b;

    let target;
    if (isGold) {
      target = GOLD;
    } else {
      target = light ? OFFWHITE : GREEN;
    }
    out[i] = target.r;
    out[i + 1] = target.g;
    out[i + 2] = target.b;
    out[i + 3] = alpha;
  }

  return sharp(out, { raw: { width, height, channels } })
    .png()
    .trim({ threshold: 1 });
}

async function main() {
  await fs.mkdir(pub, { recursive: true });
  await fs.mkdir(libDir, { recursive: true });

  // --- Wordmarks -----------------------------------------------------------
  const TARGET_W = 1100;

  const darkTrim = await buildWordmark(false);
  const darkMeta = await darkTrim.metadata();
  const ratio = darkMeta.height / darkMeta.width;
  const TARGET_H = Math.round(TARGET_W * ratio);

  await darkTrim
    .clone()
    .resize({ width: TARGET_W })
    .png({ compressionLevel: 9 })
    .toFile(path.join(pub, "logo-dark.png"));

  const lightTrim = await buildWordmark(true);
  await lightTrim
    .resize({ width: TARGET_W })
    .png({ compressionLevel: 9 })
    .toFile(path.join(pub, "logo-light.png"));

  await fs.writeFile(
    path.join(libDir, "logo-meta.json"),
    JSON.stringify({ width: TARGET_W, height: TARGET_H }, null, 2) + "\n"
  );

  // --- Favicon / app icons -------------------------------------------------
  // Brand mark: gold upward arrow (the logo's peak) on dark-green field.
  const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="Truvon Capital">
  <rect width="512" height="512" rx="96" fill="#044029"/>
  <path d="M256 118 L372 300 H322 L256 196 L190 300 H140 Z" fill="#B28F53"/>
  <rect x="150" y="356" width="212" height="10" rx="5" fill="#B28F53"/>
</svg>`;
  await fs.writeFile(path.join(appDir, "icon.svg"), iconSvg);

  const iconPng = (size) =>
    sharp(Buffer.from(iconSvg)).resize(size, size).png({ compressionLevel: 9 });

  const sizes = {
    "favicon-16x16.png": 16,
    "favicon-32x32.png": 32,
    "favicon-48x48.png": 48,
    "apple-touch-icon.png": 180,
    "android-chrome-192x192.png": 192,
    "android-chrome-512x512.png": 512,
  };
  for (const [name, size] of Object.entries(sizes)) {
    await iconPng(size).toFile(path.join(pub, name));
  }
  // App-router convention files.
  await iconPng(180).toFile(path.join(appDir, "apple-icon.png"));

  // favicon.ico (16 + 32 + 48 packed).
  const icoSizes = [16, 32, 48];
  const pngs = await Promise.all(
    icoSizes.map((s) => iconPng(s).toBuffer())
  );
  await fs.writeFile(path.join(pub, "favicon.ico"), buildIco(icoSizes, pngs));

  // --- OG image (1200x630) -------------------------------------------------
  const ogBg = await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 0x04, g: 0x40, b: 0x29, alpha: 1 },
    },
  })
    .png()
    .toBuffer();

  const ogLogo = await (await lightTrimFresh()).toBuffer();
  const ogLogoResized = await sharp(ogLogo).resize({ width: 720 }).toBuffer();
  const ogLogoMeta = await sharp(ogLogoResized).metadata();

  // thin gold hairline under the wordmark
  const hairline = await sharp({
    create: {
      width: 220,
      height: 2,
      channels: 4,
      background: { r: 0xb2, g: 0x8f, b: 0x53, alpha: 1 },
    },
  })
    .png()
    .toBuffer();

  await sharp(ogBg)
    .composite([
      {
        input: ogLogoResized,
        top: Math.round((630 - (ogLogoMeta.height || 250)) / 2) - 24,
        left: Math.round((1200 - 720) / 2),
      },
      {
        input: hairline,
        top: 470,
        left: Math.round((1200 - 220) / 2),
      },
    ])
    .png({ compressionLevel: 9 })
    .toFile(path.join(pub, "og-image.png"));

  // --- web manifest --------------------------------------------------------
  const manifest = {
    name: "Truvon Capital",
    short_name: "Truvon",
    description:
      "A global private markets platform for private equity and M&A opportunity sourcing, capital relationships and transaction coordination.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F7F3",
    theme_color: "#044029",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
  await fs.writeFile(
    path.join(pub, "site.webmanifest"),
    JSON.stringify(manifest, null, 2) + "\n"
  );

  console.log(`Assets generated. Wordmark ${TARGET_W}x${TARGET_H}.`);
}

// helper to rebuild the light wordmark trimmed (fresh pipeline for compositing)
function lightTrimFresh() {
  return buildWordmark(true);
}

// Minimal ICO container writer (packs PNG-encoded images).
function buildIco(sizes, pngBuffers) {
  const count = sizes.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(count, 4);

  const dirEntries = [];
  let offset = 6 + count * 16;
  const bodies = [];
  for (let i = 0; i < count; i++) {
    const size = sizes[i];
    const png = pngBuffers[i];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // colors
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(png.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    bodies.push(png);
    offset += png.length;
  }
  return Buffer.concat([header, ...dirEntries, ...bodies]);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
