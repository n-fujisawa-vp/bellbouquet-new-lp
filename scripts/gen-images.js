#!/usr/bin/env node
/**
 * bellbouquet LP — atmospheric image generator
 * Renders SVG artworks to JPEG via sharp (bundled with Next.js).
 * Run: node scripts/gen-images.js
 */

"use strict";
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const OUT = path.resolve(__dirname, "../public/images");
fs.mkdirSync(OUT, { recursive: true });

async function render(filename, svgString) {
  const buf = Buffer.from(svgString);
  const outPath = path.join(OUT, filename);
  await sharp(buf).jpeg({ quality: 93, mozjpeg: false }).toFile(outPath);
  const kb = Math.round(fs.statSync(outPath).size / 1024);
  console.log(`✓ ${filename}  (${kb} KB)`);
}

// ═══════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════

const defs = (id, extra = "") => `<defs id="${id}">${extra}</defs>`;

// Radial gradient helper
function rg(id, cx, cy, r, stops) {
  return `<radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r}" gradientUnits="objectBoundingBox">
    ${stops.map(([o, c, a = 1]) => `<stop offset="${o}%" stop-color="${c}" stop-opacity="${a}"/>`).join("")}
  </radialGradient>`;
}

// Linear gradient helper
function lg(id, x1, y1, x2, y2, stops) {
  return `<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">
    ${stops.map(([o, c, a = 1]) => `<stop offset="${o}%" stop-color="${c}" stop-opacity="${a}"/>`).join("")}
  </linearGradient>`;
}

// Gaussian blur filter
const blurFilter = (id, std) =>
  `<filter id="${id}" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur stdDeviation="${std}"/>
  </filter>`;

// Glow filter (blur + merge with source)
const glowFilter = (id, std) =>
  `<filter id="${id}" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur stdDeviation="${std}" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>`;

// ═══════════════════════════════════════════════════════════
// CRAFT-01: 花びらがロウに沈む瞬間 (1200×900, dark amber)
// ═══════════════════════════════════════════════════════════
async function genCraft01() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
<defs>
  ${lg("bg01", "0", "0", "1", "1", [[0, "#1e1508"], [60, "#120e06"], [100, "#060402"]])}
  ${rg("gw01", "0.50", "0.60", "0.52", [[0, "#C87808", 0.70], [45, "#7A4A06", 0.32], [100, "#060402", 0]])}
  ${rg("gc01", "0.51", "0.50", "0.22", [[0, "#F0D050", 0.85], [50, "#C87808", 0.30], [100, "#060402", 0]])}
  ${lg("pt01", "0", "0", "1", "1", [[0, "#F5C0C0"], [55, "#E8A0A0"], [100, "#D08888"]])}
  ${lg("pt02", "0", "0", "1", "1", [[0, "#F0D8B0"], [100, "#D8B888"]])}
  ${lg("vt01", "0", "0", "0", "1", [[0, "#060402", 0.85], [30, "#060402", 0], [72, "#060402", 0], [100, "#060402", 0.60]])}
  ${blurFilter("bl6", 6)}
  ${blurFilter("bl12", 12)}
  ${glowFilter("gl8", 8)}
  <linearGradient id="lv01" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#060402" stop-opacity="0.55"/>
    <stop offset="18%" stop-color="#060402" stop-opacity="0"/>
    <stop offset="82%" stop-color="#060402" stop-opacity="0"/>
    <stop offset="100%" stop-color="#060402" stop-opacity="0.55"/>
  </linearGradient>
</defs>
<!-- BG -->
<rect width="1200" height="900" fill="url(#bg01)"/>
<!-- Wide amber glow from below -->
<ellipse cx="600" cy="540" rx="460" ry="330" fill="url(#gw01)"/>
<!-- Bright inner core -->
<ellipse cx="598" cy="472" rx="165" ry="138" fill="url(#gc01)"/>
<!-- Wax surface sheen -->
<ellipse cx="600" cy="545" rx="270" ry="24" fill="#B87820" fill-opacity="0.22" filter="url(#bl6)"/>
<ellipse cx="600" cy="558" rx="225" ry="16" fill="#C89030" fill-opacity="0.14" filter="url(#bl6)"/>
<ellipse cx="600" cy="568" rx="185" ry="10" fill="#D0A040" fill-opacity="0.10" filter="url(#bl6)"/>
<!-- Submerged petal 1 (deeper, blurred) -->
<g transform="translate(488,510) rotate(32)" filter="url(#bl12)" opacity="0.55">
  <ellipse rx="38" ry="64" fill="url(#pt02)"/>
  <path d="M0,-56 C3,0 3,0 0,56" stroke="#B89050" stroke-width="0.8" fill="none" opacity="0.5"/>
</g>
<!-- Submerged petal 2 -->
<g transform="translate(718,508) rotate(-38)" filter="url(#bl12)" opacity="0.42">
  <ellipse rx="30" ry="52" fill="#F0D8B0"/>
  <path d="M0,-44 C2,0 2,0 0,44" stroke="#B89050" stroke-width="0.7" fill="none" opacity="0.4"/>
</g>
<!-- Main petal (descending, in focus) -->
<g transform="translate(606,398) rotate(-13)" filter="url(#gl8)">
  <ellipse rx="50" ry="87" fill="url(#pt01)" opacity="0.94"/>
  <path d="M0,-78 C5,-26 5,26 0,78" stroke="#B89090" stroke-width="1.2" fill="none" opacity="0.45"/>
  <path d="M0,-52 C26,-6 38,28 30,58" stroke="#B89090" stroke-width="0.8" fill="none" opacity="0.30"/>
  <path d="M0,-52 C-26,-6 -38,28 -30,58" stroke="#B89090" stroke-width="0.8" fill="none" opacity="0.30"/>
  <!-- sheen -->
  <ellipse cx="-13" cy="-25" rx="14" ry="24" fill="white" opacity="0.13" transform="rotate(-14)"/>
</g>
<!-- Left artisan hand (silhouette) -->
<path d="M0,230 C55,268 110,325 138,412 C150,456 152,502 138,532 C122,564 90,570 68,548 C46,526 52,494 64,472 C70,458 82,448 87,432 C68,402 42,362 20,328 C0,295 -5,255 0,230Z"
  transform="translate(62,70)" fill="#C09070" opacity="0.48"/>
<!-- Right artisan hand -->
<path d="M0,230 C-55,268 -110,325 -138,412 C-150,456 -152,502 -138,532 C-122,564 -90,570 -68,548 C-46,526 -52,494 -64,472 C-70,458 -82,448 -87,432 C-68,402 -42,362 -20,328 C0,295 5,255 0,230Z"
  transform="translate(1138,70)" fill="#C09070" opacity="0.48"/>
<!-- Wax droplet from petal tip -->
<ellipse cx="606" cy="490" rx="4" ry="6" fill="#F0D878" fill-opacity="0.65" filter="url(#bl6)"/>
<!-- Air bubbles in wax -->
<circle cx="556" cy="482" r="3.2" fill="#E8C870" opacity="0.52"/>
<circle cx="651" cy="470" r="2.2" fill="#F0D880" opacity="0.60"/>
<circle cx="524" cy="514" r="1.8" fill="#C8A060" opacity="0.45"/>
<circle cx="678" cy="498" r="2.6" fill="#E8C060" opacity="0.42"/>
<circle cx="582" cy="458" r="1.5" fill="#F0D870" opacity="0.55"/>
<circle cx="638" cy="462" r="1.2" fill="#C8A876" opacity="0.50"/>
<circle cx="570" cy="535" r="1.5" fill="#D4A840" opacity="0.38"/>
<circle cx="632" cy="528" r="2" fill="#E0B850" opacity="0.35"/>
<!-- Gold dust motes -->
<circle cx="432" cy="372" r="1.5" fill="#C8A876" opacity="0.42"/>
<circle cx="784" cy="358" r="1.3" fill="#C8A876" opacity="0.46"/>
<circle cx="345" cy="446" r="1" fill="#E8C060" opacity="0.36"/>
<circle cx="866" cy="438" r="1.5" fill="#C8A876" opacity="0.42"/>
<circle cx="490" cy="338" r="1.2" fill="#D4A840" opacity="0.38"/>
<circle cx="720" cy="326" r="1" fill="#C8A876" opacity="0.40"/>
<!-- Vignette: top/bottom -->
<rect width="1200" height="900" fill="url(#vt01)"/>
<!-- Vignette: sides -->
<rect width="1200" height="900" fill="url(#lv01)"/>
<!-- Brand label -->
<text x="64" y="856" font-family="Georgia,Times,serif" font-size="11" fill="#C8A876"
  letter-spacing="4" opacity="0.65" font-style="italic">想いを込めて</text>
</svg>`;
  await render("craft-01.jpg", svg);
}

// ═══════════════════════════════════════════════════════════
// CRAFT-02: 花を型の中でアレンジ (1200×900, warm ivory studio)
// ═══════════════════════════════════════════════════════════
async function genCraft02() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
<defs>
  ${lg("bg02", "0", "0", "1", "1", [[0, "#f4ede0"], [50, "#ece0ce"], [100, "#e0d2be"]])}
  ${rg("gl02", "0.50", "0.45", "0.55", [[0, "#ffffff", 0.70], [60, "#f4e8d0", 0.30], [100, "#e0d2be", 0]])}
  ${rg("mold02", "0.50", "0.50", "0.48", [[0, "#f8f4ee", 0.80], [70, "#e8ddc8", 0.30], [100, "#d8c8a8", 0]])}
  ${blurFilter("bl4", 4)}
  ${blurFilter("bl10", 10)}
  ${lg("vt02", "0", "0", "0", "1", [[0, "#e0d2be", 0.35], [30, "#e0d2be", 0], [75, "#e0d2be", 0], [100, "#e0d2be", 0.45]])}
  <linearGradient id="lv02" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#e0d2be" stop-opacity="0.40"/>
    <stop offset="15%" stop-color="#e0d2be" stop-opacity="0"/>
    <stop offset="85%" stop-color="#e0d2be" stop-opacity="0"/>
    <stop offset="100%" stop-color="#e0d2be" stop-opacity="0.40"/>
  </linearGradient>
  ${lg("hand02", "0", "0", "1", "1", [[0, "#E8C8A8"], [100, "#C8A888"]])}
</defs>
<!-- BG -->
<rect width="1200" height="900" fill="url(#bg02)"/>
<!-- Window light from top-left -->
<ellipse cx="260" cy="220" rx="380" ry="280" fill="url(#gl02)" opacity="0.7"/>
<!-- Glass mold outline (cylindrical) -->
<rect x="390" y="160" width="420" height="560" rx="12" ry="12"
  fill="none" stroke="#C8A876" stroke-width="1.5" opacity="0.35"/>
<!-- Mold inner fill (transparent wax feel) -->
<rect x="392" y="162" width="416" height="556" rx="10" ry="10"
  fill="url(#mold02)" opacity="0.40"/>
<!-- FLOWERS in mold -->
<!-- Flower 1: large rose, center-left -->
<g transform="translate(510,380)">
  <circle r="62" fill="#F0C8C0" opacity="0.88"/>
  <circle r="50" fill="#E8B8B0" opacity="0.60"/>
  <circle r="36" fill="#E0A8A0" opacity="0.45"/>
  <circle r="20" fill="#D89898" opacity="0.35"/>
  <circle r="8"  fill="#C07060" opacity="0.50"/>
  <!-- Petals suggestion -->
  <ellipse cx="0" cy="-52" rx="22" ry="16" fill="#F4C8C0" opacity="0.50" transform="rotate(0)"/>
  <ellipse cx="0" cy="-52" rx="22" ry="16" fill="#F4C8C0" opacity="0.50" transform="rotate(51)"/>
  <ellipse cx="0" cy="-52" rx="22" ry="16" fill="#F4C8C0" opacity="0.50" transform="rotate(102)"/>
  <ellipse cx="0" cy="-52" rx="22" ry="16" fill="#F4C8C0" opacity="0.50" transform="rotate(153)"/>
  <ellipse cx="0" cy="-52" rx="22" ry="16" fill="#F4C8C0" opacity="0.50" transform="rotate(204)"/>
  <ellipse cx="0" cy="-52" rx="22" ry="16" fill="#F4C8C0" opacity="0.50" transform="rotate(255)"/>
  <ellipse cx="0" cy="-52" rx="22" ry="16" fill="#F4C8C0" opacity="0.50" transform="rotate(306)"/>
</g>
<!-- Flower 2: small white, top-right of mold -->
<g transform="translate(665,255)">
  <circle r="34" fill="#F8F0E8" opacity="0.90"/>
  <circle r="24" fill="#F0E8DC" opacity="0.55"/>
  <circle r="12" fill="#E8D8C8" opacity="0.45"/>
  <circle r="5"  fill="#D8B870" opacity="0.60"/>
  <ellipse cx="0" cy="-30" rx="14" ry="10" fill="#FAF0E8" opacity="0.55" transform="rotate(0)"/>
  <ellipse cx="0" cy="-30" rx="14" ry="10" fill="#FAF0E8" opacity="0.55" transform="rotate(60)"/>
  <ellipse cx="0" cy="-30" rx="14" ry="10" fill="#FAF0E8" opacity="0.55" transform="rotate(120)"/>
  <ellipse cx="0" cy="-30" rx="14" ry="10" fill="#FAF0E8" opacity="0.55" transform="rotate(180)"/>
  <ellipse cx="0" cy="-30" rx="14" ry="10" fill="#FAF0E8" opacity="0.55" transform="rotate(240)"/>
  <ellipse cx="0" cy="-30" rx="14" ry="10" fill="#FAF0E8" opacity="0.55" transform="rotate(300)"/>
</g>
<!-- Flower 3: lavender sprig -->
<g transform="translate(660,470)">
  <circle r="12" fill="#C8B0D8" opacity="0.80"/>
  <circle cx="0" cy="-22" r="9" fill="#C0A8D0" opacity="0.75"/>
  <circle cx="0" cy="-40" r="7" fill="#B8A0C8" opacity="0.70"/>
  <circle cx="0" cy="-56" r="5" fill="#B098C0" opacity="0.65"/>
  <path d="M0,12 L0,90" stroke="#7A8A60" stroke-width="2" opacity="0.55"/>
</g>
<!-- Flower 4: baby's breath cluster -->
<g transform="translate(480,250)" opacity="0.75">
  <circle cx="0"   cy="0"   r="8" fill="#F8F4EE"/>
  <circle cx="20"  cy="-12" r="6" fill="#F4F0E8"/>
  <circle cx="-18" cy="-8"  r="7" fill="#F8F2E8"/>
  <circle cx="12"  cy="14"  r="5" fill="#F4EEE4"/>
  <circle cx="-10" cy="16"  r="6" fill="#F0EAE0"/>
  <circle cx="28"  cy="8"   r="5" fill="#F8F2EC"/>
</g>
<!-- Botanical leaves -->
<path d="M540,580 C560,530 580,510 620,490 C640,482 660,485 650,510 C640,530 610,545 580,560 C560,570 540,580 540,580Z"
  fill="#6A8050" opacity="0.50"/>
<path d="M680,570 C660,525 640,508 605,492 C590,486 578,492 590,515 C600,535 625,545 650,555 C668,562 680,570 680,570Z"
  fill="#5A7040" opacity="0.45"/>
<!-- Artisan hands -->
<!-- Left -->
<path d="M200,320 C240,355 265,410 270,472 C272,510 264,542 245,558 C225,575 198,565 188,544 C178,523 188,498 198,480 C205,466 215,456 215,440 C200,410 178,370 165,330 C152,290 158,265 175,258 C192,252 205,290 200,320Z"
  fill="url(#hand02)" opacity="0.55"/>
<!-- Right -->
<path d="M1000,320 C960,355 935,410 930,472 C928,510 936,542 955,558 C975,575 1002,565 1012,544 C1022,523 1012,498 1002,480 C995,466 985,456 985,440 C1000,410 1022,370 1035,330 C1048,290 1042,265 1025,258 C1008,252 995,290 1000,320Z"
  fill="url(#hand02)" opacity="0.55"/>
<!-- Gold accent rule -->
<line x1="550" y1="148" x2="650" y2="148" stroke="#C8A876" stroke-width="1" opacity="0.45"/>
<!-- Vignette -->
<rect width="1200" height="900" fill="url(#vt02)"/>
<rect width="1200" height="900" fill="url(#lv02)"/>
<text x="64" y="856" font-family="Georgia,Times,serif" font-size="11" fill="#9E7A3F"
  letter-spacing="4" opacity="0.60" font-style="italic">職人のこだわり</text>
</svg>`;
  await render("craft-02.jpg", svg);
}

// ═══════════════════════════════════════════════════════════
// CRAFT-03: ロウの中の花断面マクロ (1200×900, dark center glow)
// ═══════════════════════════════════════════════════════════
async function genCraft03() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
<defs>
  ${lg("bg03", "0", "0", "0.5", "1", [[0, "#0c0904"], [100, "#060402"]])}
  ${rg("wax03", "0.50", "0.50", "0.42", [[0, "#E8B840", 0.60], [35, "#C07808", 0.30], [70, "#6A3A04", 0.12], [100, "#060402", 0]])}
  ${rg("inn03", "0.50", "0.50", "0.22", [[0, "#FDEEA0", 0.82], [55, "#E0A030", 0.25], [100, "#060402", 0]])}
  ${blurFilter("bl8", 8)}
  ${blurFilter("bl16", 16)}
  ${glowFilter("gf4", 4)}
  ${lg("vt03", "0", "0", "0", "1", [[0, "#060402", 0.90], [25, "#060402", 0], [75, "#060402", 0], [100, "#060402", 0.75]])}
  <linearGradient id="lv03" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#060402" stop-opacity="0.65"/>
    <stop offset="20%" stop-color="#060402" stop-opacity="0"/>
    <stop offset="80%" stop-color="#060402" stop-opacity="0"/>
    <stop offset="100%" stop-color="#060402" stop-opacity="0.65"/>
  </linearGradient>
</defs>
<!-- BG -->
<rect width="1200" height="900" fill="url(#bg03)"/>
<!-- Candle cross-section circle (wax) -->
<circle cx="600" cy="450" r="295" fill="url(#wax03)"/>
<!-- Inner bright core -->
<circle cx="600" cy="450" r="145" fill="url(#inn03)"/>
<!-- Wax texture rings -->
<circle cx="600" cy="450" r="290" fill="none" stroke="#C8A030" stroke-width="1.5" opacity="0.18"/>
<circle cx="600" cy="450" r="250" fill="none" stroke="#C8A030" stroke-width="1" opacity="0.12"/>
<circle cx="600" cy="450" r="205" fill="none" stroke="#D4AA40" stroke-width="0.8" opacity="0.10"/>
<!-- Rose petals embedded in wax -->
<!-- Large rose, center-left offset -->
<g transform="translate(555,430)" filter="url(#gf4)">
  <circle r="55" fill="#F0B0A8" opacity="0.70"/>
  <circle r="44" fill="#E8A098" opacity="0.55"/>
  <circle r="30" fill="#E09088" opacity="0.45"/>
  <circle r="16" fill="#D87070" opacity="0.40"/>
  <circle r="6"  fill="#C85858" opacity="0.45"/>
</g>
<!-- Smaller flower top-right -->
<g transform="translate(665,328)" filter="url(#gf4)" opacity="0.80">
  <circle r="38" fill="#F4D8A0" opacity="0.65"/>
  <circle r="28" fill="#ECC888" opacity="0.50"/>
  <circle r="16" fill="#E0B870" opacity="0.40"/>
  <circle r="6"  fill="#C8A030" opacity="0.50"/>
</g>
<!-- Tiny flower bottom-right -->
<g transform="translate(668,565)" filter="url(#gf4)" opacity="0.70">
  <circle r="28" fill="#D0C8E0" opacity="0.65"/>
  <circle r="18" fill="#C0B8D0" opacity="0.50"/>
  <circle r="8"  fill="#A8A0B8" opacity="0.45"/>
</g>
<!-- Leaf shape upper-left -->
<path d="M490,320 C510,290 545,282 565,298 C580,310 568,335 545,348 C522,360 490,350 478,338 C468,328 475,320 490,320Z"
  fill="#5A8040" opacity="0.55" filter="url(#bl8)"/>
<!-- Leaf bottom -->
<path d="M520,570 C540,595 572,598 585,582 C596,568 583,545 562,535 C540,525 515,540 512,555 C510,562 512,566 520,570Z"
  fill="#4A6830" opacity="0.50" filter="url(#bl8)"/>
<!-- Champagne gold rim of candle cross-section -->
<circle cx="600" cy="450" r="295" fill="none" stroke="#C8A876"
  stroke-width="2.5" opacity="0.55" filter="url(#gf4)"/>
<!-- Outer ring (candle wall) -->
<circle cx="600" cy="450" r="310" fill="none" stroke="#9E7A3F"
  stroke-width="8" opacity="0.35"/>
<!-- Corner vignettes -->
<rect width="1200" height="900" fill="url(#vt03)"/>
<rect width="1200" height="900" fill="url(#lv03)"/>
<!-- Label -->
<text x="64" y="856" font-family="Georgia,Times,serif" font-size="11" fill="#C8A876"
  letter-spacing="4" opacity="0.65" font-style="italic">永遠に閉じ込めて</text>
</svg>`;
  await render("craft-03.jpg", svg);
}

// ═══════════════════════════════════════════════════════════
// PRODUCT-01: 2本のキャンドル、アンバーグロー (1200×900)
// ═══════════════════════════════════════════════════════════
async function genProduct01() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
<defs>
  ${lg("bg04", "0", "0", "0", "1", [[0, "#0a0806"], [100, "#040302"]])}
  ${rg("c1g", "0.38", "0.52", "0.30", [[0, "#D08010", 0.75], [45, "#8A4A08", 0.30], [100, "#040302", 0]])}
  ${rg("c2g", "0.62", "0.52", "0.28", [[0, "#C07808", 0.70], [45, "#804008", 0.28], [100, "#040302", 0]])}
  ${rg("c1t", "0.38", "0.25", "0.12", [[0, "#FDEEA0", 0.90], [60, "#E8B040", 0.30], [100, "#040302", 0]])}
  ${rg("c2t", "0.62", "0.25", "0.11", [[0, "#F8E888", 0.85], [60, "#D8A030", 0.28], [100, "#040302", 0]])}
  ${blurFilter("bl5", 5)}
  ${blurFilter("bl14", 14)}
  ${glowFilter("gf5", 5)}
  ${lg("vt04", "0", "0", "0", "1", [[0, "#040302", 0.92], [20, "#040302", 0.10], [75, "#040302", 0.05], [100, "#040302", 0.70]])}
  <linearGradient id="lv04" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#040302" stop-opacity="0.70"/>
    <stop offset="16%" stop-color="#040302" stop-opacity="0"/>
    <stop offset="84%" stop-color="#040302" stop-opacity="0"/>
    <stop offset="100%" stop-color="#040302" stop-opacity="0.70"/>
  </linearGradient>
  <!-- Candle wax gradient (translucent amber) -->
  ${lg("wx1", "0", "0", "1", "0", [[0, "#0a0806", 0], [25, "#C87808", 0.55], [50, "#E8A820", 0.40], [75, "#C87808", 0.55], [100, "#0a0806", 0]])}
  ${lg("wx2", "0", "0", "1", "0", [[0, "#0a0806", 0], [25, "#B07008", 0.50], [50, "#D89818", 0.38], [75, "#B07008", 0.50], [100, "#0a0806", 0]])}
</defs>
<!-- BG -->
<rect width="1200" height="900" fill="url(#bg04)"/>
<!-- Candle 1 aura glow -->
<ellipse cx="456" cy="468" rx="160" ry="340" fill="url(#c1g)"/>
<!-- Candle 2 aura glow -->
<ellipse cx="744" cy="468" rx="148" ry="320" fill="url(#c2g)"/>
<!-- Candle 1 body (left) -->
<rect x="398" y="148" width="116" height="580" rx="4" ry="4" fill="url(#wx1)"/>
<!-- Candle 1 wax wall highlight (left side) -->
<rect x="398" y="148" width="10" height="580" rx="4" ry="4" fill="#C8A876" fill-opacity="0.30"/>
<!-- Candle 1 wax wall highlight (right side) -->
<rect x="504" y="148" width="10" height="580" rx="4" ry="4" fill="#C8A876" fill-opacity="0.30"/>
<!-- Candle 1 top rim -->
<ellipse cx="456" cy="148" rx="58" ry="10" fill="#C8A030" fill-opacity="0.65"/>
<!-- Embedded flowers in candle 1 -->
<g transform="translate(456,380)" opacity="0.72" filter="url(#bl5)">
  <circle r="32" fill="#F0B0A8"/>
  <circle r="22" fill="#E8A098"/>
  <circle r="12" fill="#E09088"/>
  <circle r="5" fill="#D07868"/>
</g>
<g transform="translate(456,500)" opacity="0.55" filter="url(#bl5)">
  <circle r="20" fill="#F4D8A0"/>
  <circle r="12" fill="#ECC880"/>
  <circle r="5" fill="#C8A030"/>
</g>
<!-- Candle 1 flame glow (top) -->
<ellipse cx="456" cy="148" rx="30" ry="18" fill="url(#c1t)" filter="url(#bl14)"/>
<!-- Candle 1 flame -->
<ellipse cx="456" cy="128" rx="8" ry="22" fill="#FDEEA0" opacity="0.92" filter="url(#gf5)"/>
<ellipse cx="456" cy="122" rx="5" ry="15" fill="#FFE060" opacity="0.80"/>
<!-- Candle 2 body (right) -->
<rect x="686" y="178" width="116" height="550" rx="4" ry="4" fill="url(#wx2)"/>
<!-- Candle 2 highlights -->
<rect x="686" y="178" width="10" height="550" rx="4" ry="4" fill="#C8A876" fill-opacity="0.25"/>
<rect x="792" y="178" width="10" height="550" rx="4" ry="4" fill="#C8A876" fill-opacity="0.25"/>
<!-- Candle 2 top rim -->
<ellipse cx="744" cy="178" rx="58" ry="9" fill="#B89028" fill-opacity="0.60"/>
<!-- Embedded flowers in candle 2 -->
<g transform="translate(744,360)" opacity="0.68" filter="url(#bl5)">
  <circle r="28" fill="#D0C8E0"/>
  <circle r="18" fill="#C0B8D0"/>
  <circle r="8"  fill="#A8A0B8"/>
</g>
<g transform="translate(744,480)" opacity="0.52" filter="url(#bl5)">
  <circle r="22" fill="#F0B0A8"/>
  <circle r="14" fill="#E8A098"/>
  <circle r="6"  fill="#D07878"/>
</g>
<!-- Candle 2 flame glow -->
<ellipse cx="744" cy="178" rx="26" ry="16" fill="url(#c2t)" filter="url(#bl14)"/>
<!-- Candle 2 flame -->
<ellipse cx="744" cy="160" rx="7" ry="20" fill="#FDEEA0" opacity="0.88" filter="url(#gf5)"/>
<ellipse cx="744" cy="155" rx="4.5" ry="13" fill="#FFE060" opacity="0.75"/>
<!-- Floor reflection -->
<rect x="390" y="728" width="136" height="80" rx="2" fill="#C87808" fill-opacity="0.08" filter="url(#bl14)"/>
<rect x="678" y="748" width="136" height="70" rx="2" fill="#B07008" fill-opacity="0.07" filter="url(#bl14)"/>
<!-- Ground surface hint -->
<line x1="0" y1="730" x2="1200" y2="730" stroke="#C8A876" stroke-width="0.5" opacity="0.10"/>
<!-- Vignette -->
<rect width="1200" height="900" fill="url(#vt04)"/>
<rect width="1200" height="900" fill="url(#lv04)"/>
<!-- Brand text -->
<text x="64" y="856" font-family="Georgia,Times,serif" font-size="11" fill="#C8A876"
  letter-spacing="4" opacity="0.65" font-style="italic">宝石のような輝き</text>
</svg>`;
  await render("product-01.jpg", svg);
}

// ═══════════════════════════════════════════════════════════
// PRODUCT-02: ブラッシュピンク1本 (1200×900)
// ═══════════════════════════════════════════════════════════
async function genProduct02() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
<defs>
  ${lg("bg05", "0", "0", "0.3", "1", [[0, "#0c0809"], [100, "#040304"]])}
  ${rg("pg1", "0.50", "0.50", "0.32", [[0, "#C87898", 0.70], [50, "#804060", 0.28], [100, "#040304", 0]])}
  ${rg("pt1", "0.50", "0.22", "0.14", [[0, "#FDDAE0", 0.88], [60, "#D88098", 0.28], [100, "#040304", 0]])}
  ${blurFilter("bl5p", 5)}
  ${blurFilter("bl15p", 15)}
  ${glowFilter("gfp", 5)}
  ${lg("vt05", "0", "0", "0", "1", [[0, "#040304", 0.92], [22, "#040304", 0.08], [75, "#040304", 0.05], [100, "#040304", 0.72]])}
  <linearGradient id="lv05" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#040304" stop-opacity="0.72"/>
    <stop offset="18%" stop-color="#040304" stop-opacity="0"/>
    <stop offset="82%" stop-color="#040304" stop-opacity="0"/>
    <stop offset="100%" stop-color="#040304" stop-opacity="0.72"/>
  </linearGradient>
  ${lg("wxp", "0", "0", "1", "0", [[0, "#040304", 0], [28, "#B07090", 0.55], [50, "#D09098", 0.42], [72, "#B07090", 0.55], [100, "#040304", 0]])}
</defs>
<rect width="1200" height="900" fill="url(#bg05)"/>
<!-- Aura glow -->
<ellipse cx="600" cy="460" rx="190" ry="380" fill="url(#pg1)"/>
<!-- Candle body -->
<rect x="538" y="118" width="124" height="610" rx="5" ry="5" fill="url(#wxp)"/>
<!-- Side highlights -->
<rect x="538" y="118" width="11" height="610" rx="5" ry="5" fill="#C8A876" fill-opacity="0.28"/>
<rect x="651" y="118" width="11" height="610" rx="5" ry="5" fill="#C8A876" fill-opacity="0.28"/>
<!-- Top rim -->
<ellipse cx="600" cy="118" rx="62" ry="11" fill="#D088A8" fill-opacity="0.62"/>
<!-- Flowers in wax -->
<g transform="translate(600,300)" filter="url(#bl5p)" opacity="0.75">
  <circle r="40" fill="#F4C0D0"/>
  <circle r="30" fill="#EEB0C0"/>
  <circle r="20" fill="#E8A0B0"/>
  <circle r="10" fill="#D88898"/>
  <circle r="4"  fill="#C07080"/>
</g>
<g transform="translate(600,430)" filter="url(#bl5p)" opacity="0.62">
  <circle r="30" fill="#F0D0E0"/>
  <circle r="20" fill="#E8C0D0"/>
  <circle r="9" fill="#D4A8B8"/>
</g>
<g transform="translate(600,530)" filter="url(#bl5p)" opacity="0.50">
  <circle r="22" fill="#C8D0E8"/>
  <circle r="14" fill="#B8C0D8"/>
  <circle r="6" fill="#A0A8C0"/>
</g>
<!-- Flame glow -->
<ellipse cx="600" cy="118" rx="35" ry="20" fill="url(#pt1)" filter="url(#bl15p)"/>
<!-- Flame -->
<ellipse cx="600" cy="96"  rx="9"  ry="26" fill="#FDE0E8" opacity="0.90" filter="url(#gfp)"/>
<ellipse cx="600" cy="89"  rx="5.5" ry="17" fill="#FFB0C8" opacity="0.75"/>
<!-- Reflection -->
<rect x="530" y="728" width="140" height="72" rx="2" fill="#C87898" fill-opacity="0.07" filter="url(#bl15p)"/>
<line x1="0" y1="730" x2="1200" y2="730" stroke="#C8A876" stroke-width="0.4" opacity="0.08"/>
<!-- Vignette -->
<rect width="1200" height="900" fill="url(#vt05)"/>
<rect width="1200" height="900" fill="url(#lv05)"/>
<text x="64" y="856" font-family="Georgia,Times,serif" font-size="11" fill="#C8A876"
  letter-spacing="4" opacity="0.62" font-style="italic">花びらの煌めき</text>
</svg>`;
  await render("product-02.jpg", svg);
}

// ═══════════════════════════════════════════════════════════
// PRODUCT-03: 刻印入り2本 (1200×900, dark marble)
// ═══════════════════════════════════════════════════════════
async function genProduct03() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
<defs>
  ${lg("bg06", "0", "0", "1", "1", [[0, "#0e0c0a"], [50, "#0a0806"], [100, "#060402"]])}
  <!-- Marble texture via subtle gradient overlay -->
  ${rg("mb1", "0.30", "0.40", "0.65", [[0, "#1a1612", 0.30], [100, "#060402", 0]])}
  ${rg("mb2", "0.72", "0.60", "0.55", [[0, "#181410", 0.25], [100, "#060402", 0]])}
  ${rg("cg3a", "0.38", "0.52", "0.26", [[0, "#C8A020", 0.65], [50, "#7A5808", 0.25], [100, "#060402", 0]])}
  ${rg("cg3b", "0.62", "0.52", "0.24", [[0, "#B89018", 0.60], [50, "#6A4808", 0.22], [100, "#060402", 0]])}
  ${blurFilter("bl5m", 5)}
  ${blurFilter("bl13m", 13)}
  ${glowFilter("gf5m", 5)}
  ${lg("vt06", "0", "0", "0", "1", [[0, "#060402", 0.90], [20, "#060402", 0.08], [75, "#060402", 0.05], [100, "#060402", 0.68]])}
  <linearGradient id="lv06" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#060402" stop-opacity="0.68"/>
    <stop offset="18%" stop-color="#060402" stop-opacity="0"/>
    <stop offset="82%" stop-color="#060402" stop-opacity="0"/>
    <stop offset="100%" stop-color="#060402" stop-opacity="0.68"/>
  </linearGradient>
  ${lg("wx3a", "0", "0", "1", "0", [[0, "#060402", 0], [28, "#C8A020", 0.52], [50, "#E0C030", 0.38], [72, "#C8A020", 0.52], [100, "#060402", 0]])}
  ${lg("wx3b", "0", "0", "1", "0", [[0, "#060402", 0], [28, "#B89018", 0.48], [50, "#D0B028", 0.35], [72, "#B89018", 0.48], [100, "#060402", 0]])}
</defs>
<rect width="1200" height="900" fill="url(#bg06)"/>
<!-- Marble texture overlays -->
<rect width="1200" height="900" fill="url(#mb1)"/>
<rect width="1200" height="900" fill="url(#mb2)"/>
<!-- Candle glows -->
<ellipse cx="450" cy="460" rx="150" ry="320" fill="url(#cg3a)"/>
<ellipse cx="750" cy="460" rx="138" ry="300" fill="url(#cg3b)"/>
<!-- Candle 1 (left) -->
<rect x="394" y="158" width="112" height="570" rx="4" fill="url(#wx3a)"/>
<rect x="394" y="158" width="10"  height="570" rx="4" fill="#C8A876" fill-opacity="0.28"/>
<rect x="496" y="158" width="10"  height="570" rx="4" fill="#C8A876" fill-opacity="0.28"/>
<ellipse cx="450" cy="158" rx="56" ry="10" fill="#C8A020" fill-opacity="0.60"/>
<!-- Inscription text on candle 1 -->
<text x="450" y="360" font-family="Georgia,serif" font-size="13" fill="#C8A876"
  text-anchor="middle" letter-spacing="2" opacity="0.70" font-style="italic">wedding day</text>
<text x="450" y="382" font-family="Georgia,serif" font-size="10" fill="#C8A876"
  text-anchor="middle" letter-spacing="1" opacity="0.50" font-style="italic">2025.10.18</text>
<!-- Flowers in candle 1 -->
<g transform="translate(450,280)" filter="url(#bl5m)" opacity="0.65">
  <circle r="28" fill="#F0B0A8"/>
  <circle r="18" fill="#E8A098"/>
  <circle r="8"  fill="#D07868"/>
</g>
<g transform="translate(450,460)" filter="url(#bl5m)" opacity="0.52">
  <circle r="20" fill="#6A8050"/>
  <circle r="12" fill="#5A7040"/>
</g>
<!-- Candle 1 flame -->
<ellipse cx="450" cy="158" rx="28" ry="16" fill="#F8E070" fill-opacity="0.30" filter="url(#bl13m)"/>
<ellipse cx="450" cy="140" rx="7" ry="20" fill="#FDEEA0" opacity="0.88" filter="url(#gf5m)"/>
<!-- Candle 2 (right) -->
<rect x="694" y="188" width="112" height="540" rx="4" fill="url(#wx3b)"/>
<rect x="694" y="188" width="10"  height="540" rx="4" fill="#C8A876" fill-opacity="0.24"/>
<rect x="796" y="188" width="10"  height="540" rx="4" fill="#C8A876" fill-opacity="0.24"/>
<ellipse cx="750" cy="188" rx="56" ry="10" fill="#B89018" fill-opacity="0.55"/>
<!-- Inscription text on candle 2 -->
<text x="750" y="380" font-family="Georgia,serif" font-size="13" fill="#C8A876"
  text-anchor="middle" letter-spacing="2" opacity="0.68" font-style="italic">proposal</text>
<text x="750" y="402" font-family="Georgia,serif" font-size="10" fill="#C8A876"
  text-anchor="middle" letter-spacing="1" opacity="0.48" font-style="italic">anniversary</text>
<!-- Flowers in candle 2 -->
<g transform="translate(750,295)" filter="url(#bl5m)" opacity="0.62">
  <circle r="24" fill="#D0C8E0"/>
  <circle r="15" fill="#C0B8D0"/>
  <circle r="6"  fill="#A8A0B8"/>
</g>
<g transform="translate(750,468)" filter="url(#bl5m)" opacity="0.48">
  <circle r="18" fill="#F0B0A8"/>
  <circle r="10" fill="#E0A098"/>
</g>
<!-- Candle 2 flame -->
<ellipse cx="750" cy="188" rx="25" ry="14" fill="#F0D860" fill-opacity="0.28" filter="url(#bl13m)"/>
<ellipse cx="750" cy="171" rx="6.5" ry="19" fill="#FDEEA0" opacity="0.84" filter="url(#gf5m)"/>
<!-- Scattered botanicals at base -->
<ellipse cx="360" cy="740" rx="25" ry="8" fill="#5A7040" fill-opacity="0.35" transform="rotate(-18,360,740)"/>
<ellipse cx="840" cy="748" rx="22" ry="7" fill="#6A8050" fill-opacity="0.30" transform="rotate(14,840,748)"/>
<!-- Floor reflection -->
<rect x="386" y="728" width="128" height="65" rx="2" fill="#C8A020" fill-opacity="0.07" filter="url(#bl13m)"/>
<rect x="686" y="728" width="128" height="58" rx="2" fill="#B89018" fill-opacity="0.06" filter="url(#bl13m)"/>
<line x1="0" y1="730" x2="1200" y2="730" stroke="#C8A876" stroke-width="0.5" opacity="0.09"/>
<!-- Vignette -->
<rect width="1200" height="900" fill="url(#vt06)"/>
<rect width="1200" height="900" fill="url(#lv06)"/>
<text x="64" y="856" font-family="Georgia,Times,serif" font-size="11" fill="#C8A876"
  letter-spacing="4" opacity="0.60" font-style="italic">世界にひとつだけ</text>
</svg>`;
  await render("product-03.jpg", svg);
}

// ═══════════════════════════════════════════════════════════
// TESTIMONIAL-01: 花嫁、キャンドルを抱える (900×900)
// ═══════════════════════════════════════════════════════════
async function genTestimonial01() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">
<defs>
  ${lg("bg07", "0", "0", "0.6", "1", [[0, "#f0e6d4"], [55, "#e4d4be"], [100, "#d8c4a8"]])}
  ${rg("gl07", "0.50", "0.62", "0.50", [[0, "#F8E8D0", 0.85], [50, "#E8CCA0", 0.40], [100, "#d8c4a8", 0]])}
  ${rg("cg07", "0.50", "0.58", "0.18", [[0, "#F0D060", 0.90], [50, "#C8A020", 0.50], [100, "#C8780A", 0]])}
  ${blurFilter("bl7t", 7)}
  ${blurFilter("bl18t", 18)}
  ${glowFilter("gf7t", 7)}
  ${lg("vt07", "0", "0", "0", "1", [[0, "#d8c4a8", 0.25], [30, "#d8c4a8", 0], [70, "#d8c4a8", 0], [100, "#d8c4a8", 0.40]])}
  <!-- Bokeh circles gradient -->
  ${rg("bk1", "0.5", "0.5", "0.5", [[0, "#F8E8D0", 0.60], [100, "#F8E8D0", 0]])}
</defs>
<rect width="900" height="900" fill="url(#bg07)"/>
<!-- Soft background light source (window) -->
<ellipse cx="450" cy="350" rx="420" ry="360" fill="url(#gl07)"/>
<!-- Bokeh circles (background) -->
<circle cx="120" cy="180" r="55" fill="url(#bk1)" filter="url(#bl18t)" opacity="0.65"/>
<circle cx="800" cy="220" r="42" fill="url(#bk1)" filter="url(#bl18t)" opacity="0.55"/>
<circle cx="760" cy="660" r="48" fill="url(#bk1)" filter="url(#bl18t)" opacity="0.50"/>
<circle cx="140" cy="700" r="38" fill="url(#bk1)" filter="url(#bl18t)" opacity="0.45"/>
<circle cx="820" cy="480" r="30" fill="url(#bk1)" filter="url(#bl18t)" opacity="0.42"/>
<circle cx="80"  cy="480" r="25" fill="url(#bk1)" filter="url(#bl18t)" opacity="0.40"/>
<!-- Candle glow -->
<ellipse cx="450" cy="520" rx="90" ry="120" fill="url(#cg07)" filter="url(#bl18t)"/>
<!-- Bride silhouette — body (very abstract) -->
<!-- Dress skirt — full, billowing -->
<path d="M200,900 C240,750 290,660 340,590 C380,530 410,510 450,505 C490,510 520,530 560,590 C610,660 660,750 700,900Z"
  fill="#F0EAE0" opacity="0.62"/>
<!-- Dress bodice -->
<path d="M340,590 C360,530 395,488 430,468 C440,462 448,460 450,460 C452,460 460,462 470,468 C505,488 540,530 560,590Z"
  fill="#ECDDD0" opacity="0.70"/>
<!-- Neck and head area (very abstract circle) -->
<circle cx="450" cy="355" r="58" fill="#E8D0B8" opacity="0.70"/>
<!-- Hair suggestion -->
<ellipse cx="450" cy="338" rx="55" ry="42" fill="#5A3820" opacity="0.45"/>
<!-- Arms cupping candle -->
<!-- Left arm -->
<path d="M390,465 C370,490 355,520 358,550 C360,568 372,578 388,570 C404,562 410,545 416,520 C420,505 425,490 430,475Z"
  fill="#E8C8A8" opacity="0.65"/>
<!-- Right arm -->
<path d="M510,465 C530,490 545,520 542,550 C540,568 528,578 512,570 C496,562 490,545 484,520 C480,505 475,490 470,475Z"
  fill="#E8C8A8" opacity="0.65"/>
<!-- Hands (cupped) -->
<path d="M358,548 C355,562 362,575 378,578 C394,581 415,570 435,560 L450,556 L465,560 C485,570 506,581 522,578 C538,575 545,562 542,548"
  fill="#E8C0A0" opacity="0.70"/>
<!-- Candle (glowing, held in hands) -->
<rect x="432" y="465" width="36" height="98" rx="3" fill="#E8C840" fill-opacity="0.55"/>
<rect x="432" y="465" width="36" height="98" rx="3" fill="none" stroke="#C8A876" stroke-width="1.2" opacity="0.45"/>
<!-- Candle flame -->
<ellipse cx="450" cy="465" rx="10" ry="16" fill="#FDEEA0" opacity="0.92" filter="url(#gf7t)"/>
<ellipse cx="450" cy="458" rx="6" ry="10" fill="#FFE060" opacity="0.80"/>
<!-- Candle warm glow on face/hands -->
<ellipse cx="450" cy="410" rx="55" ry="65" fill="#F0D060" fill-opacity="0.15" filter="url(#bl7t)"/>
<!-- Veil suggestion (light diagonal lines) -->
<path d="M390,290 C420,320 460,350 480,400 L490,390 C470,340 432,308 400,278Z"
  fill="white" opacity="0.22"/>
<!-- Happy expression hint: subtle smile -->
<path d="M436,385 C442,392 458,392 464,385" stroke="#9A7060" stroke-width="1.5" fill="none" opacity="0.45" stroke-linecap="round"/>
<!-- Vignette -->
<rect width="900" height="900" fill="url(#vt07)"/>
<text x="52" y="862" font-family="Georgia,Times,serif" font-size="11" fill="#9E7A3F"
  letter-spacing="4" opacity="0.60" font-style="italic">M.K 様 · 30代 · 埼玉</text>
</svg>`;
  await render("testimonial-01.jpg", svg);
}

// ═══════════════════════════════════════════════════════════
// TESTIMONIAL-02: ふたり、キャンドルを共に (900×900)
// ═══════════════════════════════════════════════════════════
async function genTestimonial02() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">
<defs>
  ${lg("bg08", "0", "0", "0.8", "1", [[0, "#14100c"], [55, "#0e0c08"], [100, "#080604"]])}
  ${rg("gl08", "0.50", "0.55", "0.45", [[0, "#D09020", 0.65], [45, "#8A5808", 0.28], [100, "#080604", 0]])}
  ${rg("cg08", "0.50", "0.56", "0.16", [[0, "#FDEEA0", 0.90], [55, "#D09020", 0.35], [100, "#080604", 0]])}
  ${blurFilter("bl8t2", 8)}
  ${blurFilter("bl20t2", 20)}
  ${glowFilter("gf8t2", 8)}
  ${lg("vt08", "0", "0", "0", "1", [[0, "#080604", 0.85], [25, "#080604", 0.05], [72, "#080604", 0.05], [100, "#080604", 0.65]])}
  <linearGradient id="lv08" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#080604" stop-opacity="0.60"/>
    <stop offset="18%" stop-color="#080604" stop-opacity="0"/>
    <stop offset="82%" stop-color="#080604" stop-opacity="0"/>
    <stop offset="100%" stop-color="#080604" stop-opacity="0.60"/>
  </linearGradient>
</defs>
<rect width="900" height="900" fill="url(#bg08)"/>
<!-- Warm background glow -->
<ellipse cx="450" cy="480" rx="380" ry="320" fill="url(#gl08)"/>
<!-- Bokeh (warm circles, out of focus) -->
<circle cx="140" cy="220" r="48" fill="#D09020" fill-opacity="0.22" filter="url(#bl20t2)"/>
<circle cx="760" cy="200" r="40" fill="#C07818" fill-opacity="0.20" filter="url(#bl20t2)"/>
<circle cx="800" cy="680" r="52" fill="#D09020" fill-opacity="0.18" filter="url(#bl20t2)"/>
<circle cx="100" cy="650" r="36" fill="#C07818" fill-opacity="0.17" filter="url(#bl20t2)"/>
<circle cx="820" cy="430" r="28" fill="#D09020" fill-opacity="0.15" filter="url(#bl20t2)"/>
<!-- Candle glow center -->
<ellipse cx="450" cy="490" rx="80" ry="105" fill="url(#cg08)" filter="url(#bl20t2)"/>
<!-- Figure 2: Groom (right, slightly darker) -->
<!-- Body -->
<path d="M560,900 C585,780 600,680 598,590 C596,540 580,510 562,498 C550,492 540,490 534,492 L510,510 L510,620 C515,700 530,790 560,900Z"
  fill="#3A2E28" opacity="0.60"/>
<!-- Torso/suit -->
<path d="M534,492 C528,488 520,486 514,492 C505,500 505,520 510,545 L510,600 L540,595 L560,590 C575,580 582,558 578,530 C574,508 562,496 534,492Z"
  fill="#2A2018" opacity="0.65"/>
<!-- Head -->
<circle cx="548" cy="352" r="52" fill="#C09878" opacity="0.72"/>
<!-- Hair -->
<ellipse cx="548" cy="332" rx="50" ry="36" fill="#2A1808" opacity="0.55"/>
<!-- Figure 1: Bride (left) -->
<!-- Dress skirt -->
<path d="M340,900 C315,780 300,680 302,590 C304,540 320,510 338,498 C350,492 360,490 366,492 L390,510 L390,620 C385,700 368,790 340,900Z"
  fill="#F0EAE0" opacity="0.58"/>
<!-- Dress bodice -->
<path d="M366,492 C372,488 380,486 386,492 C395,500 395,520 390,545 L390,600 L360,595 L340,590 C325,580 318,558 322,530 C326,508 338,496 366,492Z"
  fill="#ECDDD0" opacity="0.65"/>
<!-- Head -->
<circle cx="352" cy="352" r="52" fill="#C89878" opacity="0.72"/>
<!-- Hair -->
<ellipse cx="352" cy="330" rx="50" ry="38" fill="#3A2010" opacity="0.50"/>
<!-- Veil -->
<path d="M312,295 L345,500 L365,495 L338,290Z" fill="white" opacity="0.18"/>
<!-- Joined hands (center, holding candle) -->
<path d="M386,510 C400,520 420,528 440,530 L450,530 L460,530 C480,528 500,520 514,510"
  fill="none" stroke="#D0A878" stroke-width="12" stroke-linecap="round" opacity="0.55"/>
<!-- Candle between hands -->
<rect x="434" y="460" width="32" height="82" rx="3" fill="#E8C840" fill-opacity="0.52"/>
<rect x="434" y="460" width="32" height="82" rx="3" fill="none" stroke="#C8A876" stroke-width="1.2" opacity="0.42"/>
<!-- Flame -->
<ellipse cx="450" cy="460" rx="9" ry="14" fill="#FDEEA0" opacity="0.92" filter="url(#gf8t2)"/>
<ellipse cx="450" cy="454" rx="5.5" ry="9" fill="#FFE060" opacity="0.78"/>
<!-- Candle light on faces -->
<ellipse cx="370" cy="380" rx="38" ry="45" fill="#F0C840" fill-opacity="0.18" filter="url(#bl8t2)"/>
<ellipse cx="530" cy="378" rx="36" ry="42" fill="#F0C840" fill-opacity="0.16" filter="url(#bl8t2)"/>
<!-- Vignette -->
<rect width="900" height="900" fill="url(#vt08)"/>
<rect width="900" height="900" fill="url(#lv08)"/>
<text x="52" y="862" font-family="Georgia,Times,serif" font-size="11" fill="#C8A876"
  letter-spacing="4" opacity="0.62" font-style="italic">Y.S 様 · 20代 · 神奈川</text>
</svg>`;
  await render("testimonial-02.jpg", svg);
}

// ═══════════════════════════════════════════════════════════
// TESTIMONIAL-03: 自宅の朝、静かな幸福 (900×900)
// ═══════════════════════════════════════════════════════════
async function genTestimonial03() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">
<defs>
  ${lg("bg09", "0.3", "0", "1", "1", [[0, "#f5f0e8"], [50, "#ede6da"], [100, "#e0d8ca"]])}
  ${rg("wl09", "0.15", "0.18", "0.65", [[0, "#FFFFFF", 0.70], [50, "#F8F0E0", 0.30], [100, "#e0d8ca", 0]])}
  ${rg("cg09", "0.50", "0.65", "0.20", [[0, "#F0D050", 0.80], [55, "#C89020", 0.30], [100, "#e0d8ca", 0]])}
  ${blurFilter("bl6t3", 6)}
  ${blurFilter("bl16t3", 16)}
  ${glowFilter("gf6t3", 6)}
  ${lg("vt09", "0", "0", "0", "1", [[0, "#e0d8ca", 0.22], [30, "#e0d8ca", 0], [72, "#e0d8ca", 0], [100, "#e0d8ca", 0.38]])}
  <linearGradient id="lv09" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#e0d8ca" stop-opacity="0.35"/>
    <stop offset="16%" stop-color="#e0d8ca" stop-opacity="0"/>
    <stop offset="84%" stop-color="#e0d8ca" stop-opacity="0"/>
    <stop offset="100%" stop-color="#e0d8ca" stop-opacity="0.35"/>
  </linearGradient>
</defs>
<rect width="900" height="900" fill="url(#bg09)"/>
<!-- Window light (morning sun from left) -->
<ellipse cx="180" cy="320" rx="420" ry="360" fill="url(#wl09)"/>
<!-- Window frame suggestion -->
<rect x="48" y="80" width="180" height="280" rx="3" fill="none" stroke="#B8A888" stroke-width="2" opacity="0.22"/>
<line x1="138" y1="80" x2="138" y2="360" stroke="#B8A888" stroke-width="1.5" opacity="0.18"/>
<line x1="48"  y1="220" x2="228" y2="220" stroke="#B8A888" stroke-width="1.5" opacity="0.18"/>
<!-- Light streaming through window -->
<path d="M48,80 L0,0 L180,0 L228,80Z" fill="white" opacity="0.08"/>
<path d="M48,360 L0,700 L350,700 L228,360Z" fill="white" opacity="0.05"/>
<!-- Coffee table surface -->
<rect x="160" y="640" width="580" height="16" rx="3" fill="#C8B898" opacity="0.45"/>
<rect x="180" y="656" width="540" height="180" rx="2" fill="#C0B090" opacity="0.15"/>
<!-- Table surface sheen -->
<line x1="160" y1="640" x2="740" y2="640" stroke="#D8C8A8" stroke-width="1.5" opacity="0.35"/>
<!-- Candle on table -->
<rect x="418" y="530" width="64" height="112" rx="4" fill="#E8D878" fill-opacity="0.60"/>
<rect x="418" y="530" width="64" height="112" rx="4" fill="none" stroke="#C8A876" stroke-width="1.5" opacity="0.50"/>
<!-- Embedded flower in candle -->
<g transform="translate(450,590)" filter="url(#bl6t3)" opacity="0.65">
  <circle r="18" fill="#F0B0A8"/>
  <circle r="11" fill="#E8A098"/>
  <circle r="5"  fill="#D07868"/>
</g>
<!-- Candle table glow -->
<ellipse cx="450" cy="535" rx="70" ry="60" fill="url(#cg09)" filter="url(#bl16t3)"/>
<!-- Candle flame -->
<ellipse cx="450" cy="530" rx="10" ry="16" fill="#FDEEA0" opacity="0.90" filter="url(#gf6t3)"/>
<ellipse cx="450" cy="523" rx="6"  ry="10" fill="#FFE060" opacity="0.75"/>
<!-- Candle reflection on table -->
<ellipse cx="450" cy="648" rx="30" ry="8" fill="#F0D040" fill-opacity="0.18" filter="url(#bl6t3)"/>
<!-- Woman figure (seated, right of candle, gazing) -->
<!-- Body/lap area -->
<path d="M540,900 C570,820 592,740 598,660 C602,620 596,595 580,578 C566,565 550,560 538,562 L525,570 L525,660 C528,740 540,820 540,900Z"
  fill="#F0E8D8" opacity="0.50"/>
<!-- Torso in off-white linen dress -->
<path d="M525,562 C520,558 512,556 506,562 C498,572 497,596 500,624 L500,680 L528,675 L545,665 C558,654 562,634 558,610 C554,588 543,568 525,562Z"
  fill="#EEDDD0" opacity="0.60"/>
<!-- Head (looking downward at candle) -->
<circle cx="520" cy="420" r="55" fill="#D4A888" opacity="0.70"/>
<!-- Hair -->
<ellipse cx="520" cy="398" rx="54" ry="42" fill="#2E1C0A" opacity="0.48"/>
<!-- Head tilted slightly down/forward -->
<path d="M480,428 C495,455 545,458 560,430" fill="#D4A888" opacity="0.50"/>
<!-- Gazing direction: looking toward candle (left and down) -->
<!-- Small botanical next to candle on table -->
<path d="M360,635 C375,610 395,600 410,610 C420,618 415,632 400,638 C385,644 368,640 360,635Z"
  fill="#6A8050" opacity="0.40" transform="rotate(-8,380,618)"/>
<path d="M485,632 C476,614 462,608 455,618 C450,625 455,636 466,640 C477,644 487,638 485,632Z"
  fill="#5A7040" opacity="0.38" transform="rotate(5,468,624)"/>
<!-- Vignette -->
<rect width="900" height="900" fill="url(#vt09)"/>
<rect width="900" height="900" fill="url(#lv09)"/>
<text x="52" y="862" font-family="Georgia,Times,serif" font-size="11" fill="#9E7A3F"
  letter-spacing="4" opacity="0.58" font-style="italic">A.T 様 · 30代 · 東京</text>
</svg>`;
  await render("testimonial-03.jpg", svg);
}

// ═══════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════
(async () => {
  console.log("🕯  bellbouquet image generator\n");
  await genCraft01();
  await genCraft02();
  await genCraft03();
  await genProduct01();
  await genProduct02();
  await genProduct03();
  await genTestimonial01();
  await genTestimonial02();
  await genTestimonial03();
  console.log("\n✅ All 9 images saved to public/images/");
})();
