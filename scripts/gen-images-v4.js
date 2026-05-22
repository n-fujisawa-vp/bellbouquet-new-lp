#!/usr/bin/env node
/**
 * bellbouquet LP — Imagen 3 image generator (v4)
 *
 * Prerequisite (one-time):
 *   1. Visit https://aistudio.google.com/  → Get API key (free)
 *   2. In your terminal: $env:GOOGLE_API_KEY="YOUR_KEY_HERE"
 *   3. node scripts/gen-images-v4.js
 *
 * Generates 6 photorealistic images via Imagen 3, saves to public/images/,
 * then auto-commits and pushes to trigger Vercel deploy.
 */
"use strict";

const { GoogleGenerativeAI } = require("@google/generative-ai");
const path  = require("path");
const fs    = require("fs");
const { execSync } = require("child_process");

const API_KEY = process.env.GOOGLE_API_KEY;
if (!API_KEY) {
  console.error("❌  GOOGLE_API_KEY is not set.");
  console.error("    1. Get a free key at https://aistudio.google.com/");
  console.error('    2. Run: $env:GOOGLE_API_KEY="YOUR_KEY_HERE"');
  console.error("    3. Re-run this script.");
  process.exit(1);
}

const OUT = path.resolve(__dirname, "../public/images");
fs.mkdirSync(OUT, { recursive: true });

const genAI = new GoogleGenerativeAI(API_KEY);

// ─── Prompt definitions ───────────────────────────────────────────────────────
// Shared style DNA — extracted from bellbouquet brand palette
const DNA = [
  "photorealistic fine-art photography",
  "champagne gold and muted ivory color palette",
  "warm natural light with soft amber tones",
  "ultra-shallow depth of field with creamy bokeh",
  "8K resolution, hyperdetailed textures",
  "Japanese luxury wedding brand aesthetic",
  "no watermarks, no text overlays",
].join(", ");

const JOBS = [
  // ── Features ─────────────────────────────────────────────────────────────
  {
    dest: "craft-01.jpg",
    aspect: "16:9",
    prompt: `
      ${DNA}.
      Extreme close-up macro photograph of an artisan's elegant hands wearing a
      pristine cream linen apron, using slender silver tweezers to gently place
      a single translucent dried delphinium petal — deep cobalt blue with fine
      pale veins — into a cylindrical glass mold filled with clear warm liquid
      botanical wax. The petal is suspended mid-placement, catching warm window
      light from the upper left. On the atelier table: scattered dried pink roses,
      baby's breath, and eucalyptus leaves. The artisan's face is partially
      visible in soft focus on the right — serene concentration. Champagne gold
      light reflects off the wax surface. Shot on Canon 100mm f/2.8L macro.
    `.trim(),
  },
  {
    dest: "craft-02.jpg",
    aspect: "16:9",
    prompt: `
      ${DNA}.
      Elegant Japanese female designer in her late 20s, wearing a cream silk
      blouse, seated at a light marble atelier desk. In the foreground: a lush
      fresh wedding bouquet of ivory garden roses, eucalyptus, and white
      ranunculus. The designer leans slightly forward, pencil in hand, focused
      intently on a large open design carte — handwritten Japanese calligraphy
      notes, colour-pencil flower sketches, champagne gold accent lines.
      Warm directional window light from the left creates a gentle halo.
      Background softly blurred: wooden shelves with botanical specimens and
      amber glass jars. Shot on Leica 50mm f/1.4, 3/4 perspective.
    `.trim(),
  },
  {
    dest: "craft-03.jpg",
    aspect: "16:9",
    prompt: `
      ${DNA}.
      Close-up lifestyle photograph on a clean white oak table. On the left:
      two elegant female hands with soft blush nail polish holding a modern
      smartphone, the LINE messaging app open showing a chat with flower photos
      and a green reply bubble. On the right: a beautiful kraft-paper shipping
      box neatly folded flat, tied with a champagne satin ribbon, a small printed
      bellbouquet logo card tucked under the bow. Warm morning light from a
      sheer curtained window. The composition conveys effortless simplicity.
      Shot on Sony 85mm GM f/1.4.
    `.trim(),
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  {
    dest: "testimonial-01.jpg",
    aspect: "1:1",
    prompt: `
      ${DNA}.
      Authentic wedding documentary portrait. A young Japanese bride in an
      immaculate ivory A-line wedding dress, standing in soft golden-hour light,
      eyes closed, cheeks flushed with joy, tenderly cradling a large lush
      wedding bouquet — blush garden roses, white ranunculus, cascading
      eucalyptus — pressed to her chest. Tears of happiness on her lashes.
      Background: softly blurred champagne-draped reception venue. Warm rim
      light outlines her veil. Shot on Canon 85mm f/1.2, intimate and emotional.
    `.trim(),
  },
  {
    dest: "testimonial-02.jpg",
    aspect: "1:1",
    prompt: `
      ${DNA}.
      Interior lifestyle portrait. A stylish Japanese woman in her early 30s,
      wearing a soft cream cashmere sweater, seated on a light linen sofa in a
      bright minimalist Tokyo living room. She gazes warmly at a beautiful
      botanical memorial candle displayed in the centre of a white oak side
      table — translucent wax revealing pressed pink roses frozen in amber
      candlelight. Gentle morning sun through sheer curtains creates a luminous
      halo. Her expression: quiet contentment, a soft smile.
      Shot on Sony 85mm GM f/1.8.
    `.trim(),
  },
  {
    dest: "testimonial-03.jpg",
    aspect: "1:1",
    prompt: `
      ${DNA}.
      Intimate evening portrait. A young Japanese married couple in casual-chic
      home attire seated close together on a grey linen sofa. Between them on
      the coffee table: two glowing botanical memorial candles — amber-orange
      flames illuminating pressed names and dates through translucent wax.
      Both look at the candles with warm nostalgic smiles, the husband's hand
      gently covering the wife's. The room is softly dark except for candlelight
      and a warm floor lamp. Bokeh fairy lights in background.
      Shot on Canon 50mm f/1.2, cinematic and emotional.
    `.trim(),
  },
];

// ─── Image generation ─────────────────────────────────────────────────────────
async function generateImage(job) {
  const model = genAI.getGenerativeModel({ model: "imagen-3.0-generate-001" });

  const result = await model.generateImages({
    prompt: job.prompt,
    number_of_images: 1,
    aspect_ratio: job.aspect,
    safety_filter_level: "block_only_high",
    person_generation: "allow_all",
  });

  if (!result.images || result.images.length === 0) {
    throw new Error(`No images returned for ${job.dest}`);
  }

  const imgData = result.images[0];
  const buffer = Buffer.from(imgData.imageBytes, "base64");
  const destPath = path.join(OUT, job.dest);
  fs.writeFileSync(destPath, buffer);
  const kb = Math.round(fs.statSync(destPath).size / 1024);
  console.log(`✓ ${job.dest.padEnd(24)} (${kb} KB)`);
}

// ─── Main ─────────────────────────────────────────────────────────────────────
(async () => {
  console.log("🎨  bellbouquet Imagen 3 generator (v4)\n");

  for (const job of JOBS) {
    process.stdout.write(`  generating ${job.dest} …`);
    try {
      await generateImage(job);
    } catch (err) {
      console.error(`\n❌  ${job.dest}: ${err.message}`);
      // Continue with remaining jobs
    }
  }

  console.log("\n✅  All images written. Committing & pushing…\n");

  const root = path.resolve(__dirname, "..");
  execSync(
    "git add public/images/craft-01.jpg public/images/craft-02.jpg " +
    "public/images/craft-03.jpg public/images/testimonial-01.jpg " +
    "public/images/testimonial-02.jpg public/images/testimonial-03.jpg",
    { cwd: root, stdio: "inherit" }
  );
  execSync(
    `git commit -m "feat: replace illustrations with Imagen 3 photorealistic shots\\n\\nGenerated via gen-images-v4.js — 6 images covering Features and\\nTestimonials sections with brand-matched champagne gold world."`,
    { cwd: root, stdio: "inherit" }
  );
  execSync("git push origin main", { cwd: root, stdio: "inherit" });
  console.log("🚀  Pushed to GitHub — Vercel deploy triggered.");
})();
