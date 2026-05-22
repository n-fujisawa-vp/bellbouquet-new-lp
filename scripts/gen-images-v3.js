#!/usr/bin/env node
/**
 * bellbouquet LP — image processor v3
 * Editorial illustrations with human elements for Features section:
 *   craft-01: artisan hands placing petal into wax mold (macro close-up)
 *   craft-02: designer's desk top-down — hand + pen + papers + bouquet
 *   craft-03: hands holding smartphone (LINE) + gift box beside
 * Run: node scripts/gen-images-v3.js
 */
"use strict";
const sharp = require("sharp");
const path  = require("path");
const fs    = require("fs");

const OUT = path.resolve(__dirname, "../public/images");
fs.mkdirSync(OUT, { recursive: true });

async function renderSVG(svg, dest) {
  const destPath = path.join(OUT, dest);
  await sharp(Buffer.from(svg))
    .resize(1200, 900)
    .jpeg({ quality: 93 })
    .toFile(destPath);
  const kb = Math.round(fs.statSync(destPath).size / 1024);
  console.log(`✓ ${dest.padEnd(22)} (${kb} KB)`);
}

// ─────────────────────────────────────────────────────────────
// craft-01: Artisan hands + tweezers placing petal into wax
// ─────────────────────────────────────────────────────────────
const svg01 = `<svg width="2400" height="1800" viewBox="0 0 2400 1800" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="bg01" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
    <stop offset="0%" stop-color="#F6ECD8"/>
    <stop offset="60%" stop-color="#EEE0C4"/>
    <stop offset="100%" stop-color="#E4D0A8"/>
  </linearGradient>
  <radialGradient id="amber01" cx="50%" cy="68%" r="40%">
    <stop offset="0%" stop-color="#C87820" stop-opacity="0.48"/>
    <stop offset="50%" stop-color="#C8A060" stop-opacity="0.22"/>
    <stop offset="100%" stop-color="#C8A876" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="vig01" cx="50%" cy="50%" r="72%">
    <stop offset="42%" stop-color="transparent"/>
    <stop offset="100%" stop-color="rgba(18,10,2,0.32)"/>
  </radialGradient>
  <filter id="blur01"><feGaussianBlur stdDeviation="8"/></filter>
  <filter id="drop01" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="0" dy="10" stdDeviation="20" flood-color="rgba(60,30,10,0.18)"/>
  </filter>
</defs>
<rect width="2400" height="1800" fill="url(#bg01)"/>
<ellipse cx="1200" cy="1230" rx="700" ry="460" fill="url(#amber01)"/>

<!-- wax mold -->
<ellipse cx="1200" cy="1500" rx="230" ry="44" fill="rgba(60,30,10,0.12)" filter="url(#blur01)"/>
<rect x="985" y="1020" width="430" height="468" rx="10" fill="rgba(235,222,200,0.28)" stroke="rgba(200,175,130,0.48)" stroke-width="4"/>
<rect x="985" y="1020" width="18" height="468" rx="9" fill="rgba(255,248,232,0.48)"/>
<rect x="1397" y="1020" width="18" height="468" rx="9" fill="rgba(140,110,70,0.2)"/>
<ellipse cx="1200" cy="1020" rx="215" ry="65" fill="#C8901E" fill-opacity="0.7"/>
<ellipse cx="1200" cy="1020" rx="192" ry="55" fill="#D8A835" fill-opacity="0.5"/>
<ellipse cx="1135" cy="1008" rx="65" ry="18" fill="rgba(255,242,200,0.55)"/>
<ellipse cx="1200" cy="1260" rx="195" ry="195" fill="#C07818" fill-opacity="0.2"/>
<ellipse cx="1140" cy="1200" rx="70" ry="40" fill="#E8A0B0" fill-opacity="0.68" transform="rotate(-18,1140,1200)"/>
<ellipse cx="1240" cy="1240" rx="58" ry="35" fill="#D08898" fill-opacity="0.64" transform="rotate(14,1240,1240)"/>
<ellipse cx="1298" cy="1168" rx="42" ry="27" fill="#8090C8" fill-opacity="0.54" transform="rotate(-32,1298,1168)"/>
<path d="M1175,1295 Q1190,1340 1205,1400" stroke="#5A7040" stroke-width="5" fill="none" opacity="0.5"/>

<!-- LEFT hand holding tweezers -->
<path d="M640,620 C660,680 690,760 720,840 C740,895 762,930 790,952 L855,938 C838,912 820,878 804,828 C782,760 762,678 748,608 C710,588 664,598 640,620Z" fill="#D6AA84"/>
<path d="M820,898 C845,920 888,940 938,950 C978,958 1014,950 1034,930 C1052,910 1054,882 1042,856 C1028,826 996,806 960,798 C922,790 882,798 856,818 C835,835 822,868 820,898Z" fill="#D6AA84"/>
<path d="M832,888 C810,864 800,838 802,814 C804,792 820,778 840,780 C858,782 870,798 872,820 C874,842 866,866 852,878Z" fill="#D6AA84"/>
<ellipse cx="823" cy="796" rx="14" ry="10" fill="#C49A70" opacity="0.65" transform="rotate(-15,823,796)"/>
<!-- index finger -->
<path d="M992,768 C996,706 998,642 996,582 C994,540 990,508 978,490 C966,472 950,470 938,482 C926,494 922,516 924,558 C926,608 930,666 935,726 C940,780 950,820 962,840 L1002,832Z" fill="#D6AA84"/>
<path d="M930,740 C950,732 975,730 998,736" stroke="rgba(150,90,50,0.22)" stroke-width="3" fill="none"/>
<path d="M928,678 C948,671 972,669 995,675" stroke="rgba(150,90,50,0.18)" stroke-width="3" fill="none"/>
<ellipse cx="966" cy="487" rx="28" ry="22" fill="#C49A70"/>
<ellipse cx="966" cy="482" rx="20" ry="14" fill="#B48A60" opacity="0.7"/>
<!-- middle finger -->
<path d="M1048,778 C1054,718 1058,658 1056,600 C1054,558 1050,526 1038,510 C1026,494 1010,492 1000,504 C990,516 988,540 990,582 C992,632 996,690 999,748 C1002,800 1010,838 1020,856 L1055,850Z" fill="#D6AA84"/>
<path d="M992,728 C1014,720 1038,718 1060,724" stroke="rgba(150,90,50,0.2)" stroke-width="3" fill="none"/>
<ellipse cx="1026" cy="508" rx="26" ry="20" fill="#C49A70"/>
<ellipse cx="1026" cy="503" rx="18" ry="13" fill="#B48A60" opacity="0.7"/>
<!-- ring finger -->
<path d="M1080,838 C1090,792 1100,748 1106,708 C1110,678 1108,656 1098,644 C1088,634 1074,636 1066,648 C1058,660 1057,684 1059,712 C1062,744 1068,782 1074,820Z" fill="#D6AA84"/>
<ellipse cx="1082" cy="644" rx="22" ry="16" fill="#C49A70"/>
<!-- pinky -->
<path d="M1080,854 C1092,828 1102,802 1106,778 C1108,760 1104,746 1094,742 C1084,738 1074,746 1069,762 C1064,780 1065,806 1070,830Z" fill="#D6AA84"/>

<!-- tweezers -->
<line x1="968" y1="484" x2="1060" y2="1108" stroke="#CCBA90" stroke-width="10" stroke-linecap="round" opacity="0.9"/>
<line x1="1000" y1="496" x2="1082" y2="1118" stroke="#DCCAA0" stroke-width="7" stroke-linecap="round" opacity="0.85"/>
<path d="M960,470 Q978,454 998,458 Q1008,464 1002,482" stroke="#B8A080" stroke-width="6" fill="none"/>
<path d="M1058,1110 C1062,1122 1064,1132 1060,1140" stroke="#C8B088" stroke-width="8" fill="none" stroke-linecap="round"/>
<path d="M1082,1120 C1082,1130 1078,1138 1072,1142" stroke="#D8C098" stroke-width="6" fill="none" stroke-linecap="round"/>
<!-- petal at tip -->
<path d="M1040,1108 C1055,1094 1078,1096 1088,1112 C1078,1130 1060,1138 1044,1126 C1038,1120 1038,1114 1040,1108Z" fill="#F2B2C2" opacity="0.94"/>
<path d="M1044,1110 C1058,1098 1074,1100 1082,1114" stroke="#E8A0B2" stroke-width="2" fill="none" opacity="0.7"/>

<!-- RIGHT hand steadying mold -->
<path d="M1648,578 C1632,648 1606,730 1578,808 C1558,868 1540,910 1522,940 L1460,930 C1476,900 1492,862 1508,804 C1530,724 1552,640 1565,568 C1608,546 1648,560 1648,578Z" fill="#D6AA84"/>
<path d="M1342,812 C1322,848 1318,884 1328,912 C1338,938 1364,956 1398,960 C1432,964 1466,950 1488,928 C1508,906 1512,876 1502,850 C1490,820 1462,802 1428,800 C1394,798 1362,802 1342,812Z" fill="#D6AA84"/>
<path d="M1345,828 C1324,806 1316,782 1320,756 C1324,732 1340,718 1358,722 C1376,726 1386,744 1385,766 C1384,788 1374,812 1358,824Z" fill="#D6AA84"/>
<path d="M1356,788 C1354,730 1358,672 1362,622 C1366,584 1374,556 1388,548 C1402,540 1418,548 1426,568 C1434,588 1432,624 1428,672 C1424,724 1420,778 1416,822Z" fill="#D6AA84"/>
<ellipse cx="1390" cy="546" rx="25" ry="18" fill="#C49A70"/>
<path d="M1402,802 C1402,744 1406,686 1411,638 C1416,600 1425,574 1440,568 C1456,562 1472,572 1479,592 C1486,612 1483,648 1478,696 C1472,750 1467,806 1462,844Z" fill="#D6AA84"/>
<ellipse cx="1443" cy="566" rx="24" ry="17" fill="#C49A70"/>
<path d="M1452,826 C1454,772 1460,718 1466,672 C1472,634 1480,610 1494,606 C1508,602 1522,614 1527,636 C1532,658 1527,694 1520,740 C1513,790 1505,838 1496,868Z" fill="#D6AA84"/>
<ellipse cx="1496" cy="604" rx="22" ry="16" fill="#C49A70"/>
<path d="M1500,852 C1504,808 1510,762 1516,720 C1521,684 1528,660 1540,656 C1552,652 1562,664 1565,686 C1568,708 1562,742 1554,782 C1546,824 1536,858 1526,878Z" fill="#D6AA84"/>

<!-- scattered botanicals -->
<ellipse cx="385" cy="1310" rx="58" ry="28" fill="#7A9A66" opacity="0.52" transform="rotate(-38,385,1310)"/>
<ellipse cx="445" cy="1274" rx="50" ry="25" fill="#6A8A56" opacity="0.48" transform="rotate(-22,445,1274)"/>
<ellipse cx="332" cy="1362" rx="52" ry="26" fill="#7A9A66" opacity="0.44" transform="rotate(18,332,1362)"/>
<path d="M340,1358 C400,1320 460,1282 510,1256" stroke="#5A7848" stroke-width="3" fill="none" opacity="0.4"/>
<path d="M510,1430 C535,1408 562,1415 572,1434 C560,1458 534,1460 516,1446Z" fill="#D49090" opacity="0.5"/>
<path d="M1820,1388 C1846,1368 1872,1374 1880,1392 C1868,1416 1842,1418 1825,1404Z" fill="#D09898" opacity="0.46"/>
<circle cx="642" cy="1250" r="10" fill="#F4EED6" opacity="0.76"/>
<circle cx="665" cy="1236" r="8" fill="#F0E8CE" opacity="0.70"/>
<circle cx="688" cy="1258" r="9" fill="#F4EED6" opacity="0.72"/>
<circle cx="655" cy="1272" r="7" fill="#EEE4CA" opacity="0.62"/>
<circle cx="1748" cy="1448" r="9" fill="#F4EED6" opacity="0.66"/>
<circle cx="1772" cy="1434" r="7" fill="#F0E8CE" opacity="0.60"/>
<!-- apron hint -->
<path d="M580,1800 C650,1420 760,1080 866,920" stroke="rgba(230,218,196,0.14)" stroke-width="200" fill="none" stroke-linecap="round"/>

<rect width="2400" height="1800" fill="url(#vig01)"/>
</svg>`;

// ─────────────────────────────────────────────────────────────
// craft-02: Designer desk (top-down) — hand + pen + papers + bouquet
// ─────────────────────────────────────────────────────────────
const svg02 = `<svg width="2400" height="1800" viewBox="0 0 2400 1800" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="bg02" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
    <stop offset="0%" stop-color="#F8F4EC"/>
    <stop offset="100%" stop-color="#EEE6D8"/>
  </linearGradient>
  <linearGradient id="paper02" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
    <stop offset="0%" stop-color="#FFFDF8"/>
    <stop offset="100%" stop-color="#F5EFE4"/>
  </linearGradient>
  <radialGradient id="winLight02" cx="8%" cy="10%" r="55%">
    <stop offset="0%" stop-color="rgba(255,250,235,0.55)"/>
    <stop offset="100%" stop-color="rgba(238,226,208,0)"/>
  </radialGradient>
  <radialGradient id="vig02" cx="50%" cy="50%" r="72%">
    <stop offset="40%" stop-color="transparent"/>
    <stop offset="100%" stop-color="rgba(15,8,2,0.26)"/>
  </radialGradient>
  <filter id="pShadow" x="-10%" y="-10%" width="120%" height="120%">
    <feDropShadow dx="4" dy="6" stdDeviation="14" flood-color="rgba(60,40,20,0.14)"/>
  </filter>
</defs>
<rect width="2400" height="1800" fill="url(#bg02)"/>
<rect width="2400" height="1800" fill="url(#winLight02)"/>

<!-- main working paper (center, slight rotation) -->
<rect x="460" y="340" width="1400" height="1000" rx="8" fill="url(#paper02)" filter="url(#pShadow)" transform="rotate(-2,1160,840)"/>
<!-- grid lines on paper -->
<line x1="520" y1="440" x2="1820" y2="440" stroke="rgba(180,160,120,0.18)" stroke-width="2"/>
<line x1="520" y1="520" x2="1820" y2="520" stroke="rgba(180,160,120,0.13)" stroke-width="1"/>
<line x1="520" y1="600" x2="1820" y2="600" stroke="rgba(180,160,120,0.11)" stroke-width="1"/>
<line x1="520" y1="680" x2="1820" y2="680" stroke="rgba(180,160,120,0.09)" stroke-width="1"/>
<!-- title block -->
<rect x="560" y="410" width="380" height="14" rx="7" fill="rgba(40,30,20,0.55)"/>
<rect x="560" y="445" width="280" height="9" rx="4" fill="rgba(40,30,20,0.3)"/>
<!-- candle sketch outline -->
<rect x="1050" y="490" width="200" height="340" rx="14" fill="none" stroke="rgba(80,60,40,0.35)" stroke-width="4"/>
<ellipse cx="1150" cy="490" rx="100" ry="28" fill="none" stroke="rgba(80,60,40,0.3)" stroke-width="3"/>
<!-- dimension lines -->
<line x1="1020" y1="490" x2="1020" y2="830" stroke="rgba(80,60,40,0.22)" stroke-width="2"/>
<line x1="1005" y1="490" x2="1035" y2="490" stroke="rgba(80,60,40,0.22)" stroke-width="2"/>
<line x1="1005" y1="830" x2="1035" y2="830" stroke="rgba(80,60,40,0.22)" stroke-width="2"/>
<!-- annotation lines -->
<line x1="1260" y1="590" x2="1420" y2="570" stroke="rgba(80,60,40,0.2)" stroke-width="2"/>
<rect x="1424" y="558" width="220" height="10" rx="5" fill="rgba(80,60,40,0.28)"/>
<rect x="1424" y="578" width="160" height="8" rx="4" fill="rgba(80,60,40,0.18)"/>
<line x1="1260" y1="720" x2="1420" y2="740" stroke="rgba(80,60,40,0.18)" stroke-width="2"/>
<rect x="1424" y="730" width="180" height="10" rx="5" fill="rgba(80,60,40,0.25)"/>
<!-- gold annotation circles -->
<circle cx="1150" cy="590" r="14" fill="none" stroke="#C8A876" stroke-width="3" opacity="0.7"/>
<circle cx="1150" cy="720" r="12" fill="none" stroke="#C8A876" stroke-width="2.5" opacity="0.65"/>
<!-- written lines near hand -->
<path d="M600,950 C640,930 700,920 760,930 C820,940 880,960 930,970" stroke="rgba(40,30,20,0.35)" stroke-width="3" fill="none"/>
<path d="M600,980 C660,968 730,960 800,968 C870,976 940,988 1000,990" stroke="rgba(40,30,20,0.28)" stroke-width="2" fill="none"/>
<path d="M600,1006 C680,998 760,992 840,998" stroke="rgba(40,30,20,0.22)" stroke-width="2" fill="none"/>

<!-- secondary paper (left, rotated) -->
<rect x="220" y="560" width="900" height="680" rx="8" fill="#F8F4EE" filter="url(#pShadow)" transform="rotate(6,670,900)"/>
<rect x="260" y="610" width="280" height="12" rx="6" fill="rgba(40,30,20,0.45)"/>
<rect x="260" y="636" width="200" height="8" rx="4" fill="rgba(40,30,20,0.25)"/>
<!-- colour swatches -->
<rect x="268" y="665" width="60" height="60" rx="4" fill="#C8A876" opacity="0.75"/>
<rect x="340" y="665" width="60" height="60" rx="4" fill="#E8B8A0" opacity="0.7"/>
<rect x="412" y="665" width="60" height="60" rx="4" fill="#A0B890" opacity="0.7"/>
<rect x="484" y="665" width="60" height="60" rx="4" fill="#B090B8" opacity="0.65"/>
<rect x="272" y="734" width="52" height="7" rx="3" fill="rgba(40,30,20,0.2)"/>
<rect x="344" y="734" width="52" height="7" rx="3" fill="rgba(40,30,20,0.2)"/>
<rect x="416" y="734" width="52" height="7" rx="3" fill="rgba(40,30,20,0.2)"/>
<path d="M280,790 Q330,776 380,790 Q430,804 480,790" stroke="rgba(60,40,20,0.3)" stroke-width="3" fill="none"/>
<path d="M280,820 Q350,810 420,820 Q490,830 540,820" stroke="rgba(60,40,20,0.22)" stroke-width="2" fill="none"/>

<!-- third paper (upper right) -->
<rect x="1560" y="220" width="720" height="520" rx="8" fill="#FAF7F0" filter="url(#pShadow)" transform="rotate(-5,1920,480)"/>
<rect x="1590" y="268" width="220" height="14" rx="7" fill="rgba(40,30,20,0.5)"/>
<rect x="1590" y="298" width="160" height="8" rx="4" fill="rgba(40,30,20,0.28)"/>
<line x1="1585" y1="330" x2="2250" y2="330" stroke="rgba(180,160,120,0.25)" stroke-width="1"/>
<line x1="1585" y1="360" x2="2250" y2="360" stroke="rgba(180,160,120,0.18)" stroke-width="1"/>
<line x1="1585" y1="390" x2="2250" y2="390" stroke="rgba(180,160,120,0.15)" stroke-width="1"/>
<rect x="1590" y="420" width="80" height="9" rx="4" fill="rgba(40,30,20,0.22)"/>
<rect x="1700" y="420" width="140" height="9" rx="4" fill="rgba(40,30,20,0.18)"/>
<rect x="1590" y="450" width="100" height="9" rx="4" fill="rgba(40,30,20,0.2)"/>
<rect x="1586" y="270" width="4" height="160" rx="2" fill="#C8A876" opacity="0.65"/>

<!-- wedding bouquet (upper right, top-down view) -->
<path d="M1680,50 C1740,-20 1840,-20 1900,40 C1970,110 1990,220 1970,330 C1950,420 1900,480 1840,500 C1780,520 1720,500 1680,460 C1630,410 1610,320 1620,230 C1630,150 1660,80 1680,50Z" fill="rgba(232,222,200,0.68)"/>
<circle cx="1820" cy="180" r="85" fill="#F0D0D8" opacity="0.85"/>
<circle cx="1820" cy="180" r="65" fill="#E8B8C4" opacity="0.7"/>
<circle cx="1820" cy="180" r="42" fill="#D8A0B4" opacity="0.65"/>
<circle cx="1820" cy="180" r="22" fill="#C88090" opacity="0.8"/>
<circle cx="1720" cy="240" r="68" fill="#ECD0E0" opacity="0.78"/>
<circle cx="1720" cy="240" r="50" fill="#E0B8CE" opacity="0.68"/>
<circle cx="1720" cy="240" r="32" fill="#D0A0BC" opacity="0.72"/>
<circle cx="1720" cy="240" r="16" fill="#C090AC" opacity="0.8"/>
<circle cx="1900" cy="280" r="58" fill="#E8C8D8" opacity="0.72"/>
<circle cx="1900" cy="280" r="40" fill="#D8B0C8" opacity="0.65"/>
<ellipse cx="1660" cy="160" rx="48" ry="24" fill="#7A9A6A" opacity="0.65" transform="rotate(-28,1660,160)"/>
<ellipse cx="1680" cy="320" rx="44" ry="22" fill="#6A8A58" opacity="0.6" transform="rotate(15,1680,320)"/>
<ellipse cx="1940" cy="220" rx="46" ry="23" fill="#7A9A6A" opacity="0.62" transform="rotate(-40,1940,220)"/>
<circle cx="1750" cy="120" r="8" fill="rgba(240,230,210,0.85)"/>
<circle cx="1770" cy="112" r="6" fill="rgba(238,228,208,0.8)"/>
<circle cx="1780" cy="128" r="7" fill="rgba(240,230,210,0.82)"/>
<path d="M1760,440 C1780,460 1800,472 1820,468 C1840,464 1858,448 1870,428" stroke="rgba(245,235,215,0.8)" stroke-width="14" fill="none" stroke-linecap="round"/>

<!-- HAND with pen (top-down view, lower-left area) -->
<!-- forearm -->
<path d="M200,1380 C240,1320 290,1260 345,1200 C380,1160 412,1130 440,1110 L510,1150 C482,1172 452,1202 420,1240 C368,1302 322,1364 294,1422Z" fill="#D6AA84"/>
<!-- palm (elliptical from top) -->
<path d="M440,1070 C480,1044 524,1032 568,1035 C608,1038 640,1056 655,1082 C668,1106 662,1136 642,1156 C620,1176 586,1184 548,1180 C508,1175 472,1158 452,1134 C435,1112 432,1090 440,1070Z" fill="#D6AA84"/>
<!-- thumb -->
<path d="M442,1080 C424,1064 418,1044 426,1024 C434,1006 452,998 468,1004 C484,1010 492,1026 490,1046 C488,1066 478,1080 462,1085Z" fill="#D6AA84"/>
<!-- index finger holding pen -->
<path d="M545,1005 C548,960 550,914 550,868 C550,836 548,812 538,800 C528,788 514,788 504,800 C495,812 493,836 494,868 C496,910 499,952 503,996 C507,1034 515,1058 530,1070Z" fill="#D6AA84"/>
<ellipse cx="522" cy="800" rx="24" ry="18" fill="#C49A70"/>
<ellipse cx="522" cy="795" rx="17" ry="12" fill="#B48A60" opacity="0.72"/>
<!-- middle finger -->
<path d="M590,1018 C594,972 596,928 596,886 C596,854 594,830 584,818 C574,806 560,806 550,818 C542,830 540,856 542,888 C544,930 548,972 553,1012 C558,1048 567,1072 582,1083Z" fill="#D6AA84"/>
<ellipse cx="568" cy="818" rx="23" ry="17" fill="#C49A70"/>
<ellipse cx="568" cy="813" rx="16" ry="11" fill="#B48A60" opacity="0.7"/>
<!-- ring + pinky curled -->
<path d="M628,1062 C636,1034 640,1004 638,978 C636,958 630,944 620,940 C610,936 600,944 596,960 C593,978 596,1004 602,1030Z" fill="#D6AA84"/>
<path d="M656,1080 C662,1058 664,1034 660,1014 C658,998 652,988 644,988 C636,988 630,998 628,1014 C627,1030 630,1054 636,1074Z" fill="#D6AA84"/>
<!-- gold pen -->
<rect x="510" y="720" width="24" height="280" rx="12" fill="#D4B87A" transform="rotate(-2,522,860)"/>
<rect x="530" y="724" width="6" height="200" rx="3" fill="#C8A860" opacity="0.7" transform="rotate(-2,533,824)"/>
<rect x="510" y="958" width="24" height="50" rx="8" fill="#B89850" transform="rotate(-2,522,983)"/>
<path d="M519,1010 L533,1010 L526,1028Z" fill="#9A7A30" transform="rotate(-2,526,1019)"/>
<rect x="510" y="724" width="24" height="14" rx="7" fill="#C8A860" opacity="0.85" transform="rotate(-2,522,731)"/>
<ellipse cx="522" cy="722" rx="12" ry="8" fill="#BFA050" transform="rotate(-2,522,722)"/>

<!-- gold ruler -->
<rect x="430" y="1250" width="900" height="28" rx="4" fill="rgba(200,168,118,0.4)" stroke="rgba(180,148,98,0.5)" stroke-width="2" transform="rotate(-3,880,1264)"/>
<line x1="460" y1="1252" x2="460" y2="1265" stroke="rgba(100,80,40,0.4)" stroke-width="1.5" transform="rotate(-3,880,1264)"/>
<line x1="510" y1="1252" x2="510" y2="1265" stroke="rgba(100,80,40,0.4)" stroke-width="1.5" transform="rotate(-3,880,1264)"/>
<line x1="560" y1="1252" x2="560" y2="1265" stroke="rgba(100,80,40,0.4)" stroke-width="1.5" transform="rotate(-3,880,1264)"/>
<!-- eraser -->
<rect x="1280" y="1100" width="100" height="45" rx="6" fill="#EEE8D8" stroke="rgba(180,160,120,0.4)" stroke-width="2"/>

<rect width="2400" height="1800" fill="url(#vig02)"/>
</svg>`;

// ─────────────────────────────────────────────────────────────
// craft-03: Hands holding smartphone (LINE) + gift box
// ─────────────────────────────────────────────────────────────
const svg03 = `<svg width="2400" height="1800" viewBox="0 0 2400 1800" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="bg03" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
    <stop offset="0%" stop-color="#F8F4EE"/>
    <stop offset="100%" stop-color="#EEE6D8"/>
  </linearGradient>
  <radialGradient id="vig03" cx="50%" cy="50%" r="72%">
    <stop offset="40%" stop-color="transparent"/>
    <stop offset="100%" stop-color="rgba(15,8,2,0.26)"/>
  </radialGradient>
  <filter id="blur03"><feGaussianBlur stdDeviation="6"/></filter>
  <filter id="pShadow03" x="-15%" y="-10%" width="130%" height="120%">
    <feDropShadow dx="8" dy="16" stdDeviation="24" flood-color="rgba(30,20,10,0.22)"/>
  </filter>
  <filter id="bShadow03" x="-10%" y="-8%" width="120%" height="116%">
    <feDropShadow dx="6" dy="12" stdDeviation="20" flood-color="rgba(30,20,10,0.18)"/>
  </filter>
</defs>
<rect width="2400" height="1800" fill="url(#bg03)"/>
<rect x="0" y="0" width="2400" height="600" fill="rgba(255,252,246,0.4)"/>

<!-- ─── SMARTPHONE ─── -->
<ellipse cx="900" cy="1640" rx="280" ry="46" fill="rgba(40,20,10,0.15)" filter="url(#blur03)"/>
<rect x="650" y="360" width="500" height="1060" rx="44" fill="#1A1A1A" filter="url(#pShadow03)"/>
<rect x="650" y="360" width="12" height="1060" rx="6" fill="rgba(255,255,255,0.12)"/>
<rect x="640" y="580" width="10" height="80" rx="5" fill="#252525"/>
<rect x="640" y="700" width="10" height="120" rx="5" fill="#252525"/>
<rect x="1150" y="630" width="10" height="140" rx="5" fill="#252525"/>
<rect x="666" y="376" width="468" height="1028" rx="36" fill="#0A0A0A"/>
<rect x="790" y="386" width="220" height="36" rx="18" fill="#0A0A0A"/>
<!-- screen -->
<rect x="670" y="415" width="460" height="986" rx="28" fill="#FFFFFF"/>
<!-- LINE header -->
<rect x="670" y="415" width="460" height="90" rx="0" fill="#06C755"/>
<rect x="670" y="415" width="460" height="28" rx="28" fill="#06C755"/>
<rect x="710" y="434" width="60" height="52" rx="10" fill="rgba(255,255,255,0.22)"/>
<rect x="780" y="440" width="120" height="18" rx="9" fill="rgba(255,255,255,0.88)"/>
<rect x="780" y="466" width="80" height="12" rx="6" fill="rgba(255,255,255,0.6)"/>
<path d="M694,458 L712,442 L712,474Z" fill="white" opacity="0.8"/>
<circle cx="1068" cy="459" r="18" fill="rgba(255,255,255,0.22)"/>
<circle cx="1106" cy="459" r="18" fill="rgba(255,255,255,0.22)"/>
<!-- chat area -->
<rect x="670" y="505" width="460" height="896" rx="0" fill="#EAE2E0"/>
<!-- received bubble 1 -->
<rect x="695" y="534" width="280" height="64" rx="16" fill="white"/>
<path d="M694,564 L676,556 L694,576Z" fill="white"/>
<rect x="710" y="547" width="180" height="10" rx="5" fill="rgba(40,30,20,0.35)"/>
<rect x="710" y="567" width="130" height="10" rx="5" fill="rgba(40,30,20,0.25)"/>
<rect x="710" y="607" width="60" height="8" rx="4" fill="rgba(100,80,60,0.28)"/>
<!-- sent bubble 1 (green) -->
<rect x="870" y="645" width="260" height="74" rx="16" fill="#06C755"/>
<path d="M1131,677 L1149,669 L1131,689Z" fill="#06C755"/>
<rect x="886" y="658" width="200" height="10" rx="5" fill="rgba(255,255,255,0.85)"/>
<rect x="886" y="678" width="150" height="10" rx="5" fill="rgba(255,255,255,0.7)"/>
<rect x="886" y="698" width="100" height="10" rx="5" fill="rgba(255,255,255,0.6)"/>
<rect x="1010" y="728" width="60" height="8" rx="4" fill="rgba(255,255,255,0.5)"/>
<!-- photo message (bouquet sent) -->
<rect x="840" y="770" width="288" height="208" rx="16" fill="#D8C8B8"/>
<path d="M1129,826 L1147,818 L1129,838Z" fill="#D8C8B8"/>
<circle cx="984" cy="862" r="52" fill="#E8B8C4" opacity="0.82"/>
<circle cx="984" cy="862" r="36" fill="#D8A0B4" opacity="0.72"/>
<circle cx="984" cy="862" r="20" fill="#C88898" opacity="0.82"/>
<ellipse cx="942" cy="878" rx="32" ry="18" fill="#8A9A70" opacity="0.65" transform="rotate(-20,942,878)"/>
<ellipse cx="1030" cy="848" rx="30" ry="16" fill="#8A9A70" opacity="0.62" transform="rotate(25,1030,848)"/>
<rect x="1040" y="978" width="60" height="8" rx="4" fill="rgba(255,255,255,0.45)"/>
<!-- received bubble 2 -->
<rect x="695" y="1018" width="300" height="54" rx="16" fill="white"/>
<path d="M694,1038 L676,1030 L694,1050Z" fill="white"/>
<rect x="710" y="1030" width="220" height="10" rx="5" fill="rgba(40,30,20,0.3)"/>
<rect x="710" y="1050" width="160" height="10" rx="5" fill="rgba(40,30,20,0.22)"/>
<!-- input bar -->
<rect x="670" y="1388" width="460" height="74" rx="0" fill="white"/>
<rect x="690" y="1402" width="318" height="46" rx="23" fill="#F0EAE0"/>
<rect x="1020" y="1402" width="46" height="46" rx="23" fill="#06C755"/>
<path d="M1033,1424 L1055,1424 L1041,1416 L1041,1432Z" fill="white"/>

<!-- ─── TWO HANDS ─── -->
<!-- right hand thumb side -->
<path d="M1145,780 C1170,748 1182,714 1178,682 C1174,652 1156,634 1136,638 C1116,642 1104,664 1105,694 C1107,726 1118,760 1128,788Z" fill="#D6AA84"/>
<ellipse cx="1140" cy="636" rx="26" ry="20" fill="#C49A70"/>
<!-- right hand index wrap -->
<path d="M1158,940 C1182,922 1195,898 1192,872 C1189,846 1172,830 1153,835 C1135,840 1127,862 1130,888 C1133,916 1144,938 1158,940Z" fill="#D6AA84"/>
<!-- right hand middle wrap -->
<path d="M1160,1040 C1185,1022 1198,996 1194,970 C1190,944 1172,928 1152,933 C1132,938 1123,962 1127,988 C1131,1016 1143,1038 1160,1040Z" fill="#D6AA84"/>
<!-- right hand ring wrap -->
<path d="M1157,1140 C1180,1122 1192,1096 1188,1070 C1184,1044 1168,1030 1150,1034 C1132,1038 1124,1062 1127,1086 C1131,1112 1142,1134 1157,1140Z" fill="#D6AA84"/>
<!-- right wrist -->
<path d="M1145,1180 C1160,1220 1170,1280 1165,1340 C1160,1400 1145,1440 1125,1460 L1080,1448 C1098,1428 1112,1390 1116,1332 C1120,1272 1110,1210 1098,1168Z" fill="#D6AA84"/>
<!-- left hand wrist -->
<path d="M650,1640 C680,1578 712,1512 735,1460 C758,1410 772,1370 770,1336 L720,1322 C718,1358 705,1398 684,1448 C662,1500 632,1566 608,1628Z" fill="#D6AA84"/>
<!-- left palm supporting -->
<path d="M650,1302 C640,1278 642,1252 654,1230 C666,1208 688,1196 712,1200 C736,1204 754,1222 760,1246 C766,1272 758,1300 742,1316 C724,1332 698,1336 674,1330Z" fill="#D6AA84"/>
<!-- left fingers peeking under phone -->
<path d="M698,1190 C702,1148 704,1106 702,1068 C700,1038 695,1018 683,1010 C670,1002 656,1008 650,1024 C644,1040 645,1068 648,1098 C652,1132 660,1168 670,1192Z" fill="#D6AA84"/>
<ellipse cx="666" cy="1010" rx="24" ry="17" fill="#C49A70"/>
<path d="M745,1188 C750,1148 753,1108 751,1070 C749,1040 743,1020 730,1012 C717,1004 703,1010 698,1028 C693,1046 695,1076 698,1106 C703,1142 711,1176 722,1198Z" fill="#D6AA84"/>
<ellipse cx="715" cy="1012" rx="23" ry="16" fill="#C49A70"/>
<path d="M790,1202 C795,1164 797,1128 795,1092 C793,1064 787,1044 774,1038 C762,1032 750,1038 746,1056 C742,1074 745,1102 749,1132 C754,1168 762,1200 772,1220Z" fill="#D6AA84"/>
<ellipse cx="763" cy="1038" rx="21" ry="15" fill="#C49A70"/>

<!-- ─── GIFT BOX ─── -->
<ellipse cx="1740" cy="1660" rx="290" ry="52" fill="rgba(40,20,10,0.14)" filter="url(#blur03)"/>
<!-- box lid -->
<rect x="1470" y="550" width="540" height="168" rx="8" fill="#F8F4EE" stroke="rgba(200,180,140,0.5)" stroke-width="3" filter="url(#bShadow03)"/>
<rect x="1470" y="550" width="540" height="26" rx="8" fill="rgba(200,168,118,0.18)"/>
<!-- tissue paper -->
<path d="M1480,710 C1560,695 1650,702 1740,695 C1830,688 1920,698 2000,705" stroke="rgba(240,230,210,0.82)" stroke-width="26" fill="none" stroke-linecap="round"/>
<path d="M1480,728 C1570,720 1660,726 1750,720 C1840,714 1920,722 2010,728" stroke="rgba(235,225,205,0.7)" stroke-width="18" fill="none" stroke-linecap="round"/>
<!-- box body -->
<rect x="1470" y="716" width="540" height="868" rx="8" fill="#FAFAF5" stroke="rgba(200,180,140,0.44)" stroke-width="3" filter="url(#bShadow03)"/>
<!-- box side accents -->
<rect x="1470" y="716" width="6" height="868" rx="3" fill="rgba(200,168,118,0.3)"/>
<rect x="2004" y="716" width="6" height="868" rx="3" fill="rgba(200,168,118,0.25)"/>
<!-- vertical ribbon -->
<rect x="1706" y="550" width="68" height="1034" fill="rgba(200,168,118,0.55)"/>
<rect x="1710" y="550" width="18" height="1034" fill="rgba(255,240,200,0.35)"/>
<rect x="1764" y="550" width="10" height="1034" fill="rgba(150,110,60,0.2)"/>
<!-- horizontal ribbon -->
<rect x="1470" y="628" width="540" height="70" fill="rgba(200,168,118,0.5)"/>
<rect x="1470" y="632" width="540" height="16" fill="rgba(255,240,200,0.32)"/>
<rect x="1470" y="686" width="540" height="14" fill="rgba(150,110,60,0.18)"/>
<!-- bow left loop -->
<path d="M1672,568 C1642,530 1592,510 1572,528 C1552,546 1562,586 1592,604 C1622,622 1662,618 1672,598Z" fill="rgba(200,168,118,0.85)"/>
<path d="M1674,568 C1650,538 1606,522 1588,536" stroke="rgba(255,240,200,0.5)" stroke-width="6" fill="none"/>
<!-- bow right loop -->
<path d="M1808,568 C1838,530 1888,510 1908,528 C1928,546 1918,586 1888,604 C1858,622 1818,618 1808,598Z" fill="rgba(200,168,118,0.82)"/>
<path d="M1806,568 C1830,538 1872,524 1890,538" stroke="rgba(255,240,200,0.45)" stroke-width="5" fill="none"/>
<!-- bow center knot -->
<ellipse cx="1740" cy="580" rx="45" ry="35" fill="#C8A060"/>
<ellipse cx="1740" cy="578" rx="30" ry="22" fill="#D4B070"/>
<!-- ribbon tails -->
<path d="M1706,600 C1690,630 1678,670 1680,700" stroke="rgba(200,168,118,0.75)" stroke-width="28" fill="none" stroke-linecap="round"/>
<path d="M1774,600 C1790,630 1802,670 1800,700" stroke="rgba(200,168,118,0.72)" stroke-width="28" fill="none" stroke-linecap="round"/>
<!-- label -->
<rect x="1562" y="1130" width="356" height="120" rx="6" fill="rgba(250,246,238,0.92)" stroke="rgba(200,168,118,0.5)" stroke-width="2"/>
<rect x="1584" y="1152" width="200" height="12" rx="6" fill="rgba(26,26,26,0.55)"/>
<rect x="1584" y="1174" width="140" height="9" rx="4" fill="rgba(26,26,26,0.3)"/>
<rect x="1580" y="1210" width="316" height="2" fill="rgba(200,168,118,0.55)"/>
<rect x="1584" y="1218" width="160" height="8" rx="4" fill="rgba(200,168,118,0.5)"/>
<!-- flower decoration on lid -->
<ellipse cx="1590" cy="592" rx="28" ry="18" fill="#E8A0B0" opacity="0.6" transform="rotate(-25,1590,592)"/>
<ellipse cx="1560" cy="607" rx="22" ry="14" fill="#D48898" opacity="0.55" transform="rotate(10,1560,607)"/>
<ellipse cx="1538" cy="590" rx="28" ry="15" fill="#8A9A70" opacity="0.55" transform="rotate(-40,1538,590)"/>

<rect width="2400" height="1800" fill="url(#vig03)"/>
</svg>`;

(async () => {
  console.log("🕯  bellbouquet image processor v3 — human-element illustrations\n");
  await renderSVG(svg01, "craft-01.jpg");
  await renderSVG(svg02, "craft-02.jpg");
  await renderSVG(svg03, "craft-03.jpg");
  console.log("\n✅  3 illustrations written to public/images/");
})();
