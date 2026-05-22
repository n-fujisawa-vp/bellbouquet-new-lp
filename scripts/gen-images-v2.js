#!/usr/bin/env node
/**
 * bellbouquet LP — image processor v2
 * Crops, colour-grades, and resizes real shoot photos.
 * - Removes ULIKE watermark (bottom-left) via safe crop zone
 * - Produces 4:3 landscape for Features / Products (1200×900)
 * - Produces 1:1 square for Testimonials (900×900)
 * Run: node scripts/gen-images-v2.js
 */

"use strict";
const sharp = require("sharp");
const path  = require("path");
const fs    = require("fs");

const MAT = path.resolve(__dirname, "../public/materials/20260123_撮影素材");
const OUT = path.resolve(__dirname, "../public/images");
fs.mkdirSync(OUT, { recursive: true });

async function process({ src, dest, crop, resize, grade }) {
  const srcPath  = path.join(MAT, src);
  const destPath = path.join(OUT, dest);

  let pipeline = sharp(srcPath).extract(crop).resize(resize.w, resize.h);

  // Colour grade
  if (grade.modulate)  pipeline = pipeline.modulate(grade.modulate);
  if (grade.linear)    pipeline = pipeline.linear(grade.linear[0], grade.linear[1]);
  if (grade.sharpen)   pipeline = pipeline.sharpen(grade.sharpen);
  if (grade.gamma)     pipeline = pipeline.gamma(grade.gamma);

  await pipeline.jpeg({ quality: 93 }).toFile(destPath);

  const kb = Math.round(fs.statSync(destPath).size / 1024);
  console.log(`✓ ${dest.padEnd(22)} ← ${src}  (${kb} KB)`);
}

// ─────────────────────────────────────────────
// Shared crop helpers
// ─────────────────────────────────────────────

// Portrait 2160×2880 → 4:3 landscape 2160×1620 (centre-ish, watermark-safe)
const l43 = (top = 580) => ({ left: 0, top, width: 2160, height: 1620 });

// Portrait 1170×1560 → 4:3 landscape 1170×878
const s43 = (top = 290) => ({ left: 0, top, width: 1170, height: 878  });

// Portrait 2160×2880 → 1:1 square 2160×2160 (watermark-safe: max Y = top+2160 < 2760)
const l11 = (top = 360) => ({ left: 0, top, width: 2160, height: 2160 });

const resize43 = { w: 1200, h: 900  };
const resize11 = { w: 900,  h: 900  };

// ─────────────────────────────────────────────
// FEATURES  craft-01 ~ 03
// Story: "生花の質感をそのまま永久保存"
// Mood : bright, airy, botanical clarity
// ─────────────────────────────────────────────
const featureGrade = {
  modulate: { brightness: 1.06, saturation: 1.12 },
  sharpen:  1.4,
};

// craft-01 : close-up single candle — pink rose + blue + yellow visible through wax
// Source   : beauty_1769145444417.jpeg (2160×2880)
// Crop     : centre-ish, top 560 → shows candle filling the landscape frame
const craft01 = {
  src:    "beauty_1769145444417.jpeg",
  dest:   "craft-01.jpg",
  crop:   l43(540),
  resize: resize43,
  grade:  featureGrade,
};

// craft-02 : green botanical single candle — "Wedding Day Yusuke & Yuna"
// Source   : beauty_1769144118147.JPG (1170×1560)
// Crop     : top 270 → full candle with breathing room above
const craft02 = {
  src:    "beauty_1769144118147.JPG",
  dest:   "craft-02.jpg",
  crop:   s43(270),
  resize: resize43,
  grade:  { ...featureGrade, modulate: { brightness: 1.04, saturation: 1.08 } },
};

// craft-03 : single candle with date inscription "2025.10.23"
// Source   : beauty_1769145338715.jpeg (2160×2880)
// Crop     : right-tilted composition; crop left-heavy to balance
const craft03 = {
  src:    "beauty_1769145338715.jpeg",
  dest:   "craft-03.jpg",
  crop:   { left: 0, top: 600, width: 2160, height: 1620 },
  resize: resize43,
  grade:  featureGrade,
};

// ─────────────────────────────────────────────
// PRODUCTS  product-01 ~ 03
// Story: "宝石のような輝き"
// Mood : dramatic contrast, warm amber glow boosted
// ─────────────────────────────────────────────

// product-01 : TWO LIT candles, orange/amber glow — "wedding day Akari & Moteki / Shusei & Mari"
// Source      : beauty_1769145761714.jpeg (2160×2880)
// Crop        : candles sit in lower-centre; top 420 captures both with glow
const product01 = {
  src:    "beauty_1769145761714.jpeg",
  dest:   "product-01.jpg",
  crop:   l43(420),
  resize: resize43,
  grade: {
    modulate: { brightness: 1.02, saturation: 1.35 },  // boost amber glow
    linear:   [1.08, -8],                              // slight contrast lift
    sharpen:  1.0,
  },
};

// product-02 : TWO candles "proposal anniversary + Wedding day", gold leaf, warm amber
// Source      : beauty_1769144778775.JPG (1170×1560)
// Crop        : top 270 → both candles centred
const product02 = {
  src:    "beauty_1769144778775.JPG",
  dest:   "product-02.jpg",
  crop:   s43(260),
  resize: resize43,
  grade: {
    modulate: { brightness: 0.98, saturation: 1.28 },
    linear:   [1.06, -6],
    sharpen:  0.8,
  },
};

// product-03 : TWO candles, UNLIT, pink/dahlia — "Akari & Moteki / Shusei & Mari" clean floral
// Source      : beauty_1769145710522.jpeg (2160×2880)
// Crop        : candles are in lower portion; top 480 grabs both + negative space above
const product03 = {
  src:    "beauty_1769145710522.jpeg",
  dest:   "product-03.jpg",
  crop:   l43(480),
  resize: resize43,
  grade: {
    modulate: { brightness: 1.05, saturation: 1.18 },
    sharpen:  1.1,
  },
};

// ─────────────────────────────────────────────
// TESTIMONIALS  testimonial-01 ~ 03
// Story: "感動を永遠に"
// Mood : warm, personal, square portrait
// ─────────────────────────────────────────────
const testimonialGrade = {
  modulate: { brightness: 1.08, saturation: 1.15 },
  sharpen:  1.0,
};

// testimonial-01 : single LIT candle, orange glow, centre composition
// Source          : beauty_1769145474478.jpeg (2160×2880)
// Square crop     : top 360 → 2160×2160 → watermark at ~Y:2760 safely excluded
const testimonial01 = {
  src:    "beauty_1769145474478.jpeg",
  dest:   "testimonial-01.jpg",
  crop:   l11(340),
  resize: resize11,
  grade: {
    modulate: { brightness: 1.05, saturation: 1.30 },  // amplify the warm glow
    sharpen:  0.8,
  },
};

// testimonial-02 : two UNLIT candles with names — "Akari & Moteki / Shusei & Mari"
// Source          : beauty_1769145681820.jpeg (2160×2880)
// Square crop     : top 360 → personal / both names visible
const testimonial02 = {
  src:    "beauty_1769145681820.jpeg",
  dest:   "testimonial-02.jpg",
  crop:   l11(360),
  resize: resize11,
  grade:  testimonialGrade,
};

// testimonial-03 : single candle, right-composition, pink rose
// Source          : beauty_1769145426007.jpeg (2160×2880)
// Square crop     : top 360 → candle in lower-right → pleasant negative space
const testimonial03 = {
  src:    "beauty_1769145426007.jpeg",
  dest:   "testimonial-03.jpg",
  crop:   l11(360),
  resize: resize11,
  grade:  testimonialGrade,
};

// ─────────────────────────────────────────────
// RUN
// ─────────────────────────────────────────────
(async () => {
  console.log("🕯  bellbouquet image processor v2\n");
  const jobs = [
    craft01, craft02, craft03,
    product01, product02, product03,
    testimonial01, testimonial02, testimonial03,
  ];
  for (const job of jobs) await process(job);
  console.log("\n✅  All 9 images written to public/images/");
})();
