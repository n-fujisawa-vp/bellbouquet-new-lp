# bellbouquet New LP — 画像生成プロンプト集

> 参照: `docs/STYLE.md` / `docs/WIREFRAME.md`
> 生成ツール想定: **Midjourney v6.1** / **Stable Diffusion XL** / **Adobe Firefly 3**
> 最終更新: 2026-05-21

---

## ブランドトーンブロック（全プロンプト共通）

> **全プロンプトに必ずこのブロックを末尾に付加すること。**
> 個別プロンプトでは `[BRAND TONE]` と記載している箇所をそのまま下記に置き換えて使用する。

```
[BRAND TONE — bellbouquet]
editorial flower photography, Japanese artisan aesthetic, film-inspired warm color grading,
soft north-facing window light, side lighting 70% key + 30% fill, no harsh shadows,
highlight-to-shadow ratio 3:1 to 4:1,
warm amber shadow toning (shadows hue 30deg saturation 20%),
overall HSL saturation 45-60 (muted earthy palette),
red-orange channel saturation +15 luminance -5,
green channel hue +5 saturation -10 (muted olive green),
blue channel saturation -20,
white balance 5000-5500K daylight,
f/2.8 to f/4.0 shallow depth of field natural bokeh,
fine petal texture detail visible dewdrops and fiber,
sharp flower edges preserved no AI smoothing,
rule of thirds composition 30-40% negative space,
white cream or dark walnut wood background only,
no lens flare no chromatic aberration no lens ghost
```

**共通 Negative Prompt:**
```
lens flare, chromatic aberration, lens ghost, plastic containers, artificial flowers,
silk flowers, fluorescent colors, neon pink, electric blue, oversaturated, HDR,
face visible, eyes visible, full body portrait, stock photo look, watermark,
text overlay, logo, busy cluttered background, restaurant interior, modern office,
flat lay with zero shadow, smooth skin-like petal texture, heavy vignette,
depth of field fake blur, CGI render, 3D render, illustration style
```

---

## 生成ツール別パラメータ早見表

| ツール | 推奨設定 |
|---|---|
| **Midjourney v6.1** | `--style raw --v 6.1 --q 2 --s 100` + `--ar [比率]` |
| **SDXL 1.0** | Sampler: DPM++ 2M Karras / CFG: 7.5 / Steps: 35 / Clip skip: 2 |
| **Firefly 3** | Generative Fill: OFF / Style: Photography / Content Type: Photo |
| **DALL·E 3** | Style: natural / Quality: hd |

> アスペクト比変換表:
> `16:7` → `--ar 16:7` / `9:16` → `--ar 9:16` / `3:2` → `--ar 3:2` / `1:1` → `--ar 1:1` / `4:3` → `--ar 4:3` / `16:9` → `--ar 16:9`

---

## アセット一覧

| # | ファイル名 | 配置 | 比率 | 解像度 | 優先度 |
|---|---|---|---|---|---|
| 01 | `hero-fv-pc.jpg` | S1 FV 背景（PC） | 16:7 | 2400×1050px 以上 | ★★★ |
| 02 | `hero-fv-sp.jpg` | S1 FV 背景（SP） | 9:16 | 828×1472px 以上 | ★★★ |
| 03 | `empathy-bouquet.jpg` | S2 共感セクション | 3:2 | 1800×1200px 以上 | ★★★ |
| 04 | `feature-preservation.jpg` | S3 特長①アイコン画像 | 1:1 | 800×800px 以上 | ★★ |
| 05 | `feature-design.jpg` | S3 特長②アイコン画像 | 1:1 | 800×800px 以上 | ★★ |
| 06 | `feature-easy.jpg` | S3 特長③アイコン画像 | 1:1 | 800×800px 以上 | ★★ |
| 07 | `product-frame.jpg` | S4 商品カードA | 4:3 | 1200×900px 以上 | ★★★ |
| 08 | `product-wreath.jpg` | S4 商品カードB | 4:3 | 1200×900px 以上 | ★★★ |
| 09 | `product-table.jpg` | S4 商品カードC | 4:3 | 1200×900px 以上 | ★★★ |
| 10 | `process-line.png` | S5 STEP01 | 1:1 | 600×600px | ★★ |
| 11 | `process-ship.jpg` | S5 STEP02 | 1:1 | 800×800px 以上 | ★ |
| 12 | `process-craft.jpg` | S5 STEP03 | 1:1 | 800×800px 以上 | ★★ |
| 13 | `process-deliver.jpg` | S5 STEP04 | 1:1 | 800×800px 以上 | ★ |
| 14 | `testimonial-01.jpg` | S6 口コミカード1 | 1:1 | 800×800px 以上 | ★★★ |
| 15 | `testimonial-02.jpg` | S6 口コミカード2 | 1:1 | 800×800px 以上 | ★★★ |
| 16 | `testimonial-03.jpg` | S6 口コミカード3 | 1:1 | 800×800px 以上 | ★★ |
| 17 | `cta-bg.jpg` | S8 最終CTA 背景 | 16:9 | 1920×1080px 以上 | ★★ |
| 18 | `og-image.jpg` | OGP / SNSサムネイル | 1.91:1 | 1200×630px 固定 | ★★★ |
| 19 | `favicon.svg` | ブラウザタブ | 1:1 | SVG / 32px 基準 | ★ |

---

## 01. `hero-fv-pc.jpg`

**配置:** S1 FV（ヒーロー）/ PCブラウザ全幅背景
**アスペクト比:** 16:7 **解像度:** 2400×1050px 以上
**参照:** 現行LP PC版ヘッダー最上部の花束写真（黄橙色の花が画面左に寄った構図）

### 英語プロンプト

```
Subject: luxurious bridal bouquet composed of white garden roses, blush peonies,
ranunculus, dusty miller, and eucalyptus sprigs, resting on a dark walnut wood table,
petals fully open at peak freshness

Composition: 45-degree overhead angle, bouquet positioned on left-third of frame,
right 40% of frame is clean dark walnut wood negative space for text overlay,
one peony petal deliberately cut off by right frame edge, foreground eucalyptus leaf
slightly blurred at f/2.8

Light: single soft north-facing window light entering from upper-left,
creates gentle diagonal shadow toward lower-right, no fill reflector

Color: white petals with warm cream undertones, amber-toned shadows on wood grain,
olive-green foliage, overall warm 5200K tone, highlights not blown out

[BRAND TONE]

--ar 16:7 --style raw --v 6.1 --q 2 --s 100
```

**Negative Prompt:** `(standard negative prompt above), text, logo, tight crop, centered composition, outdoor setting, colored flowers, bright pink roses`

### 日本語プロンプト（参考訳）

```
被写体: 白いガーデンローズ、ブラッシュピオニー、ラナンキュラス、ダスティミラー、
ユーカリを組み合わせた豪華なウェディングブーケ。暗色のウォールナット木製テーブルに置かれ、
花びらは満開の状態。

構図: 45度俯瞰アングル、ブーケは画面左1/3に配置、右40%はテキスト用のネガティブスペース。
右端に意図的にピオニーの花びらを切らす。手前にぼかしたユーカリの葉を置く（f/2.8）。

光: 左上からの北向き窓の柔らかな自然光、右下へのなだらかな影、フィルライトなし。

色調: 温かみのあるクリームアンダートーンの白い花びら、木目に琥珀色の影、
オリーブグリーンの葉、全体的に5200Kの暖色トーン。
```

---

## 02. `hero-fv-sp.jpg`

**配置:** S1 FV（ヒーロー）/ スマートフォン縦長背景（画面上60vh部分）
**アスペクト比:** 9:16 **解像度:** 828×1472px 以上
**参照:** 現行LP SP版ヘッダー画像（縦クロップ版）

### 英語プロンプト

```
Subject: close crop of white bridal bouquet (garden roses, peonies, ranunculus)
held at waist height by both hands visible from wrists to lower forearms only,
dark background or clean light surface

Composition: portrait vertical frame, bouquet fills upper 65% of image,
lower 35% has gradient to dark or clean neutral background,
hands enter frame from bottom-center, tight crop showing bouquet texture

Light: soft window light from the left side, warm and gentle, one main shadow
creating dimension on petals, intimate mood

Color: white and blush petals, pale green stems, warm amber shadow tones,
background fades to near-black at bottom for text contrast

[BRAND TONE]

--ar 9:16 --style raw --v 6.1 --q 2 --s 80
```

**Negative Prompt:** `(standard negative), wide landscape framing, horizontal orientation, full body visible, face, shoulders, busy background`

### 日本語プロンプト

```
被写体: 白いガーデンローズ・ピオニー・ラナンキュラスのウェディングブーケを、
手首から前腕下部だけが見える両手で腰の高さに持った状態。暗背景か清潔な中間色の床面。

構図: 縦長フレーム、ブーケが上65%を占める、下35%はグラデーションで暗く落とし
文字可読性を確保。手はフレーム下中央から入る。花びらのテクスチャが伝わるタイトなクロップ。

光: 左からの柔らかな窓光、温かで親密な雰囲気。

色調: 白・ブラッシュの花びら、薄緑の茎、暖色アンバーの影。背景は下に向かってほぼ黒へ。
```

---

## 03. `empathy-bouquet.jpg`

**配置:** S2 共感セクション（黒帯内・左1/3レイアウト）
**アスペクト比:** 3:2 **解像度:** 1800×1200px 以上
**参照:** 現行LP SP版の暗背景セクションにある花のアップ写真

### 英語プロンプト

```
Subject: wedding bouquet placed alone on a near-black charcoal surface,
composed of white roses and blush peonies at the stage of beginning to wilt —
petals slightly curling at edges but still beautiful, carrying emotional weight,
a single fallen petal rests beside the bouquet

Composition: horizontal 3:2 frame, bouquet centered slightly left,
35% dark negative space to the right, slight 20-degree overhead angle,
one fallen petal placed intentionally at lower right,
background is charcoal slate or dark wood

Light: narrow single window light from the right, creating dramatic side shadow,
moody and cinematic, deep blacks in shadow areas,
small specular highlights on dewy petals

Color: desaturated whites leaning warm ivory, deep shadows with warm amber undertone,
overall very low saturation 35-45, somber but not cold,
high contrast between flower and background

[BRAND TONE]

--ar 3:2 --style raw --v 6.1 --q 2 --s 60
```

**Negative Prompt:** `(standard negative), bright colors, cheerful mood, bouquet in vase, fresh spring feeling, hands, outdoor, sunlight, happy`

### 日本語プロンプト

```
被写体: ほぼ黒いチャコール色の面の上に単独で置かれたウェディングブーケ。
白いバラとブラッシュピオニーで構成され、花びらの端がわずかにカールし始めた「枯れ始め」の段階。
それでもなお美しく、感情的な重みを持つ。横に1枚落ちた花びら。

構図: 横3:2フレーム、ブーケはやや左寄り中央に配置、右35%は暗いネガティブスペース。
20度ほどの俯瞰アングル。右下に意図的に落とした花びら。背景はチャコールスレートか暗い木材。

光: 右からの細い単一窓光、劇的なサイドシャドウ、映画的な雰囲気。露のついた花びらに小さなハイライト。

色調: 温かいアイボリーに寄った脱彩度の白、アンバーアンダートーンの深い影。全体彩度35〜45と低め。
重厚だが冷たくない。花と背景の高いコントラスト。
```

---

## 04. `feature-preservation.jpg`

**配置:** S3 解決策提示 / 特長① 「生花の質感をそのまま永久保存」の視覚イメージ
**アスペクト比:** 1:1 **解像度:** 800×800px 以上
**参照:** 現行LPに職人手元写真がある場合はそのトーンを参照

### 英語プロンプト

```
Subject: close-up of artisan female hands (30s, natural bare nails or clear coat),
gently holding a single dried rose with thin florist wire coiled around the stem,
small dried rose petals scattered on aged natural wood work surface,
miniature scissors visible at frame edge

Composition: 45-degree overhead square crop, hands centered,
tools and petals arranged naturally not staged,
1-2 petals deliberately outside the sharp focus zone

Light: soft even window light from upper-left, no harsh shadows,
hands are warmly lit, wood grain texture clearly visible

Color: warm skin tones, dried rose in muted blush-amber, wood in warm honey tone,
green patinated scissors as subtle accent, overall saturation 45-55

[BRAND TONE]

--ar 1:1 --style raw --v 6.1 --q 2 --s 80
```

**Negative Prompt:** `(standard negative), gloves, medical setting, jewelry on hands, rings, nail polish bright color, manufacturing plant, machine, glue gun visible`

### 日本語プロンプト

```
被写体: 30代女性の職人の手のクローズアップ（ナチュラルな素爪かクリアコート）。
細いフローリストワイヤーを茎に巻いた1本のドライローズを優しく持つ。
熟成した天然木の作業台に乾燥したバラの花びらが自然に散る。フレーム端に小さなはさみ。

構図: 45度俯瞰の正方形クロップ、手は中央。道具と花びらは演出過多でなく自然な配置。
1〜2枚の花びらは意図的にピントを外す。

光: 左上からの柔らかな均一な窓光。木目のテクスチャがしっかり見える暖かい照明。

色調: 温かいスキントーン、ミュートなブラッシュ・アンバーのドライローズ、温かいハニー色の木材。
```

---

## 05. `feature-design.jpg`

**配置:** S3 解決策提示 / 特長② 「世界にひとつのオーダーメイドデザイン」の完成品イメージ
**アスペクト比:** 1:1 **解像度:** 800×800px 以上
**参照:** 現行LP中段の完成品写真群（フレームに入った花束）

### 英語プロンプト

```
Subject: deep shadow box frame (30×40cm, dark walnut wood, approximately 8cm depth),
containing a preserved dried wedding bouquet arranged artfully —
white roses, blush ranunculus, baby's breath, eucalyptus,
mounted on cream linen mat board, hanging on a white plaster wall

Composition: straight-on frontal shot, frame centered in square crop,
slight natural shadow cast on wall by frame depth,
empty wall space visible at all four edges

Light: soft diffused ambient light from upper-left,
even illumination showing frame construction detail and flower texture,
no specular glare on glass

Color: dark walnut frame (almost black, #2A1F1A),
cream mat (#F7F3EF), dried white flowers with warm ivory tone,
white plaster wall provides clean backdrop

[BRAND TONE]

--ar 1:1 --style raw --v 6.1 --q 2 --s 70
```

**Negative Prompt:** `(standard negative), colorful bright flowers, gold ornate frame, cheap frame, glass glare, tilted frame, extreme close crop`

### 日本語プロンプト

```
被写体: 深いシャドーボックスフレーム（約30×40cm、ダークウォールナット材、奥行き約8cm）。
白いバラ、ブラッシュラナンキュラス、かすみ草、ユーカリを芸術的に配置した保存花束が収められ、
クリームリネンマットボードにマウントされ白い漆喰壁に掛けられている。

構図: 正面からの真っ直ぐなショット、フレームは正方形の中央。
フレームの奥行きによる自然な影。四辺に壁のスペースが見える。

光: 左上からの柔らかな拡散光、均一な照明、ガラスへの映り込みなし。

色調: ダークウォールナットのフレーム（ほぼ黒）、クリームマット（#F7F3EF）、
温かいアイボリートーンのドライホワイトフラワー、白い漆喰壁の清潔なバックドロップ。
```

---

## 06. `feature-easy.jpg`

**配置:** S3 解決策提示 / 特長③ 「LINEで相談、発送するだけ」の安心感イメージ
**アスペクト比:** 1:1 **解像度:** 800×800px 以上

### 英語プロンプト

```
Subject: wedding bouquet being carefully wrapped in natural kraft tissue paper,
both hands visible from wrists to lower forearms, wrapping action in progress,
natural linen twine placed beside it on a clean white surface,
small white corrugated shipping box partially visible at frame corner

Composition: overhead 45-degree angle, hands and wrapping occupy center-left,
twine and box corner frame the composition, clean white surface as background,
slight elevation perspective showing the care of the action

Light: soft overhead window light, even and clean, emphasizes white tones,
gentle shadow from hands and paper folds

Color: natural kraft paper warm brown, white tissue paper, white surface,
hands with natural skin tone, minimal warm tones overall,
saturation lower than other shots — 35-45 — to feel clean and orderly

[BRAND TONE]

--ar 1:1 --style raw --v 6.1 --q 2 --s 60
```

**Negative Prompt:** `(standard negative), plastic wrapping, tape visible, bubble wrap, messy table, torn paper, busy background`

### 日本語プロンプト

```
被写体: 天然クラフトティッシュペーパーに丁寧に包まれつつあるウェディングブーケ。
手首から前腕下部までの両手が見える、包む動作の途中。
天然リネンの麻紐が清潔な白い台面に置かれ、小さな白い段ボール発送箱の角がフレーム端に見える。

構図: 45度俯瞰アングル、手と包みが中央左を占める。麻紐と箱の角が構図を引き締める。
清潔な白い台面が背景。「丁寧さ」の行為を伝える軽い仰角。

光: 柔らかい頭上からの窓光、均一でクリーン。白いトーンを強調。手と紙の折り目から軽い影。

色調: クラフト紙の暖かいブラウン、白ティッシュ、白い台面。全体的な彩度は他の写真より低く35〜45。
```

---

## 07. `product-frame.jpg`

**配置:** S4 商品カード「ブーケフレーム」の商品写真
**アスペクト比:** 4:3 **解像度:** 1200×900px 以上
**参照:** 現行LPの商品グリッド内の額装写真

### 英語プロンプト

```
Subject: premium shadow box frame product shot — dark walnut frame (30×40cm),
white preserved wedding bouquet (roses, peonies, ranunculus) arranged in full bouquet shape,
cream linen mat board, UV-protective glass visible with slight texture,
frame presented on a warm-toned wooden console surface

Composition: 4:3 horizontal, frame positioned at 10-15 degrees off-center
(slight three-quarter angle showing frame depth),
right side shows dark console wood, small amount of background wall visible at top

Light: product photography natural light style — diffused from upper-left window,
even exposure on frame face, slight rim light on right edge showing frame depth

Color: dark walnut frame #2A1F1A, cream mat #F7F3EF, ivory dried flowers,
honey-toned console surface, warm off-white wall, overall muted warm palette

[BRAND TONE]

--ar 4:3 --style raw --v 6.1 --q 2 --s 70
```

**Negative Prompt:** `(standard negative), gold ornate frame, colorful flowers, isolated white cutout background, plastic frame, glass glare, multiple products in frame`

### 日本語プロンプト

```
被写体: プレミアムなシャドーボックスフレームのプロダクトショット。
ダークウォールナットのフレーム（30×40cm）、白い保存ウェディングブーケ（バラ・ピオニー・ラナンキュラス）が
フルブーケの形で配置。クリームリネンマットボード、UV保護ガラス。
暖かみのある木製コンソールの上に展示。

構図: 4:3横向き、フレームは10〜15度角度をつけた3/4アングル（フレームの奥行きを見せる）。
右側にコンソールの木材、上部に背景の壁が少し見える。

光: 左上窓からの自然光を模した拡散ライト、フレーム面への均一な露出、右端に軽いリムライト。

色調: ダークウォールナット #2A1F1A、クリームマット #F7F3EF、アイボリーのドライフラワー、
ハニー色のコンソール、暖かいオフホワイトの壁。
```

---

## 08. `product-wreath.jpg`

**配置:** S4 商品カード「ウェディングリース」の商品写真
**アスペクト比:** 4:3 **解像度:** 1200×900px 以上

### 英語プロンプト

```
Subject: preserved dried flower wreath (approximately 30cm diameter),
composed of white roses, blush dried peonies, chamomile, silver-green eucalyptus,
tied with a natural linen bow at bottom,
hanging on a smooth white plaster wall in a residential entry hall setting

Composition: 4:3 horizontal, wreath centered slightly left,
right 30% shows plain white wall for breathing room,
slight upward angle to show the wreath's roundness and the hanging context

Light: soft ambient room light from left, creating a gentle shadow arc on the wall,
shadow is soft-edged and warm-tinted, adds depth without drama

Color: cream-ivory dried roses, muted blush pink peonies, silver-green eucalyptus,
natural linen bow in warm beige, white wall, overall very muted 40-50 saturation

[BRAND TONE]

--ar 4:3 --style raw --v 6.1 --q 2 --s 80
```

**Negative Prompt:** `(standard negative), bright autumn leaves, Christmas wreath, front door exterior, colorful ribbons, plastic greenery, fresh vivid flowers`

### 日本語プロンプト

```
被写体: 保存ドライフラワーリース（直径約30cm）。
白いバラ、ブラッシュドライピオニー、カモミール、シルバーグリーンのユーカリで構成。
下部に天然リネンのリボン。住宅の玄関エントランスの滑らかな白い漆喰壁に掛けられている。

構図: 4:3横向き、リースはやや左寄りに中央配置、右30%は余白の白い壁。
リースの丸みと掛けた文脈を見せるわずかな仰角。

光: 左からの柔らかな環境光、壁にゆるやかな弧状の影、影は柔らかく暖色がかり奥行きを出す。

色調: クリームアイボリーのドライローズ、ミュートなブラッシュピンクのピオニー、
シルバーグリーンのユーカリ、暖かいベージュのリネンリボン、白い壁。全体彩度40〜50。
```

---

## 09. `product-table.jpg`

**配置:** S4 商品カード「テーブルアレンジメント」の商品写真
**アスペクト比:** 4:3 **解像度:** 1200×900px 以上

### 英語プロンプト

```
Subject: low-profile floral arrangement in a matte ceramic vessel (cream or warm gray glaze,
approximately 15cm tall), filled with dried white roses, chamomile clusters,
blush ranunculus, and olive-green preserved leaves,
placed on a warm natural oak wooden dining table

Composition: 4:3 horizontal, slight 15-degree overhead angle,
arrangement positioned left-of-center, right side reveals warm oak table grain,
blurred background shows simple interior (white wall or linen curtain)

Light: natural window light from the left at 45 degrees,
soft shadows fall to the right, highlights on ceramic glaze edge,
interior warmth conveyed without artificial warmth

Color: cream ceramic #F0EBE3, ivory and blush dried flowers,
warm oak table #C8A068 undertone, muted sage-olive leaves,
overall palette 5100K warm daylight, saturation 45-55

[BRAND TONE]

--ar 4:3 --style raw --v 6.1 --q 2 --s 80
```

**Negative Prompt:** `(standard negative), dark vase, shiny ceramic, restaurant table, formal table setting, silverware, candles, busy background`

### 日本語プロンプト

```
被写体: マットなセラミック花器（クリームか暖かいグレーの釉薬、高さ約15cm）に入った
ローフォルムのフラワーアレンジメント。ドライホワイトローズ、カモミールのクラスター、
ブラッシュラナンキュラス、オリーブグリーンの保存葉。暖かいナチュラルオーク材のダイニングテーブルに置かれている。

構図: 4:3横向き、15度ほどの俯瞰アングル、アレンジメントは中央やや左。
右側に暖かいオーク材の木目が見える。背景はぼかしてシンプルなインテリア（白壁かリネンカーテン）。

光: 左45度からの自然窓光、右への柔らかな影、セラミック釉薬のエッジにハイライト。

色調: クリームセラミック、アイボリー＆ブラッシュのドライフラワー、暖かいオーク材、
ミュートなセージオリーブの葉。5100K暖色昼光。彩度45〜55。
```

---

## 10. `process-line.png`

**配置:** S5 制作プロセス STEP01「LINEでご相談」の視覚イメージ
**アスペクト比:** 1:1 **解像度:** 600×600px
**生成手法:** ⚠️ AI画像生成ではなく **UIデザインツール（Figma / Canva）で作成すること**

### UIデザイン仕様

```
作成指針:
  ツール: Figma / Adobe XD / Canva
  サイズ: 600×600px

モックアップ内容:
  LINEチャット画面の2往復分のみを表示（スマートフォン画面の一部）

  お客様メッセージ (吹き出し・右):
    「式が終わったのですが、花束を残したくて…」
    背景: LINE標準グリーン #06C755

  bellbouquetメッセージ (吹き出し・左):
    「ありがとうございます。まずお写真を見せていただけますか？」
    背景: #F7F3EF (--color-secondary)

デザイン仕様:
  フォント: Noto Sans JP / DM Sans
  スマートフォンフレーム: iPhone 14 Pro モックアップ（淡いグレー）
  背景: --color-secondary (#F7F3EF) で60%ぼかし
  影: box-shadow 0 8px 32px rgba(0,0,0,0.12)

注意:
  - LINE公式の商標を侵害しないよう「chat app」として汎用化
  - 個人情報を含む実際のスクリーンショットは使用しない
```

---

## 11. `process-ship.jpg`

**配置:** S5 制作プロセス STEP02「花束をお送りいただく」
**アスペクト比:** 1:1 **解像度:** 800×800px 以上

### 英語プロンプト

```
Subject: female hands (wrists to mid-forearm, no jewelry) carefully lowering
a tissue-wrapped wedding bouquet into a white corrugated cardboard shipping box,
box interior lined with cream tissue paper and natural wood wool (excelsior),
clean white table surface

Composition: 45-degree overhead square crop, box centered,
hands entering from upper edges, box flaps open showing interior structure,
small piece of natural twine resting beside box

Light: clean even overhead window light, minimal shadows, clinical cleanliness
conveyed by the all-white palette, professional but warm

Color: white box and tissue, cream-ivory wrapped bouquet visible through gap,
natural wood wool in warm straw tone, neutral white surface,
low saturation 35-45 for clean professional feel

[BRAND TONE]

--ar 1:1 --style raw --v 6.1 --q 2 --s 50
```

**Negative Prompt:** `(standard negative), colorful packing tape, branded labels, plastic packing peanuts, messy table, crumpled paper, rush feeling`

### 日本語プロンプト

```
被写体: ジュエリーのない女性の手（手首〜前腕中部）が、
ティッシュペーパーで包んだウェディングブーケを白い段ボール発送箱に丁寧に入れている。
箱の内側はクリームティッシュペーパーと天然ウッドウール（エクセルシオール）でライニング。
清潔な白いテーブル。

構図: 45度俯瞰の正方形クロップ、箱が中央。手は上端から入る。
箱のフラップは開いてインテリアの構造を見せる。横に天然麻紐。

光: クリーンで均一な頭上窓光、影は最小限。プロフェッショナルだが温かみがある。

色調: 白い箱とティッシュ、クリームアイボリーのブーケ、天然わら色のウッドウール。彩度35〜45。
```

---

## 12. `process-craft.jpg`

**配置:** S5 制作プロセス STEP03「職人が丁寧に制作」
**アスペクト比:** 1:1 **解像度:** 800×800px 以上

### 英語プロンプト

```
Subject: artisan female hands (30s, clean bare nails) in the act of positioning
a dried white rose into a shadow box frame with tweezers or thin needle,
frame is partially assembled showing the mat board and backing,
dried flowers and small botanical tools (tweezers, florist scissors, thin wire)
scattered purposefully on aged wood work bench

Composition: slight 30-degree angle (not fully overhead), hands and frame occupy center,
tools arranged in lower-left third, blurred background shows more work bench,
one finished flower cluster at sharp focus as contrast to scattered elements

Light: strong directional side light from left (workshop window),
creates strong texture shadows on wood grain and dried petals,
warm golden afternoon light quality, atmospheric

Color: aged walnut work bench in deep warm brown, dried flowers in ivory-blush,
hands in warm skin tones, scissors with green-patinated handles as color note,
very warm 5000K light, saturation 50-60 for craft warmth

[BRAND TONE]

--ar 1:1 --style raw --v 6.1 --q 2 --s 100
```

**Negative Prompt:** `(standard negative), gloves, lab setting, sterile environment, machine tools, power tools, apron, uniform, bright studio lighting`

### 日本語プロンプト

```
被写体: 30代女性の職人の手（清潔な素爪）がピンセットか細い針を使い
ドライの白いバラをシャドーボックスフレームに配置している瞬間。
フレームはマットボードとバッキングが見える半組み立て状態。
ドライフラワーと小さな道具（ピンセット・フローリストはさみ・細いワイヤー）が
熟成した木材の作業台に意図的に散らばる。

構図: 30度ほどの斜め角度（完全俯瞰でない）、手とフレームが中央。
道具は左下1/3。背景はぼかして作業台を示す。完成した花クラスター1つがシャープフォーカス。

光: 左からの強い方向性のサイドライト（工房の窓）、木目と花びらにテクスチャ感の強い影。
温かいゴールデンアフタヌーン光質で情緒的。

色調: 深い暖かいブラウンの熟成ウォールナット作業台、アイボリー・ブラッシュのドライフラワー、
グリーン錆のはさみハンドルがカラーアクセント。5000K暖色光、彩度50〜60。
```

---

## 13. `process-deliver.jpg`

**配置:** S5 制作プロセス STEP04「完成品をお届け」
**アスペクト比:** 1:1 **解像度:** 800×800px 以上

### 英語プロンプト

```
Subject: elegant white gift box (approximately 40×30×15cm) partially opened,
revealing a completed preserved bouquet shadow box frame nestled inside,
wrapped in layers of cream tissue paper, natural linen ribbon tied in simple bow,
box resting on a warm oak wood surface

Composition: 45-degree overhead square crop, box and ribbon centered,
left lid propped open, frame partially revealed — mystery still maintained,
natural light falling into the open box creates interior highlights

Light: natural side window light from the right,
warm afternoon quality, highlights on box edge and ribbon,
soft shadow of lid on interior tissue

Color: pure white box (#FFFFFF), cream tissue (#F7F3EF),
natural linen ribbon (#C8A876 approximate), dark walnut frame visible inside,
warm oak surface as ground, feel of arrival and anticipation

[BRAND TONE]

--ar 1:1 --style raw --v 6.1 --q 2 --s 70
```

**Negative Prompt:** `(standard negative), kraft brown packaging, colorful ribbons, styrofoam, crumpled tissue, fully open (keep mystery), hands in frame`

### 日本語プロンプト

```
被写体: エレガントな白いギフトボックス（約40×30×15cm）が部分的に開かれ、
クリームティッシュペーパーに包まれた完成品のシャドーボックスフレームが見える。
天然リネンのリボンがシンプルな蝶結びに。暖かいオーク材の台面に置かれている。

構図: 45度俯瞰の正方形クロップ、箱とリボンが中央。
左の蓋が立てかけられ、フレームが半分見える「まだ謎めいた」演出。
開かれた箱に差し込む自然光が内部のハイライトを作る。

光: 右からの自然サイドウィンドウ光、暖かい午後の光質。
箱のエッジとリボンにハイライト、蓋の影が内部ティッシュに落ちる。

色調: 純白のボックス、クリームティッシュ、天然リネンリボン（#C8A876近似）、
中に見えるダークウォールナットフレーム、暖かいオーク材。到着の高揚感。
```

---

## 14. `testimonial-01.jpg`

**配置:** S6 お客様の声 / 口コミカード1「花嫁後ろ姿」
**アスペクト比:** 1:1 **解像度:** 800×800px 以上
**参照:** 現行LP SP版の花嫁的なイメージ写真

### 英語プロンプト

```
Subject: young woman (late 20s) from behind only — no face visible at all —
wearing an elegant off-the-shoulder white wedding dress, lace back detail visible,
holding a white and blush bridal bouquet (roses, peonies, eucalyptus) at waist level,
standing in a softly lit interior or garden space

Composition: square 1:1 crop, subject fills left 2/3 of frame from behind,
bouquet held at waist just visible below arms, right 1/3 is blurred background,
hair pinned up showing back of neck and lace neckline

Light: soft warm backlight from slightly above, creates gentle halo on dress and hair,
side fill from left window, romantic and intimate, slight overexposure on dress for ethereal quality

Color: pure white dress slightly warm-tinted (not pure digital white),
blush and ivory bouquet, skin tones warm, background blurred to soft cream-sage

[BRAND TONE]

--ar 1:1 --style raw --v 6.1 --q 2 --s 90
```

**Negative Prompt:** `(standard negative), face visible, side profile, smiling at camera, full body from front, groom visible, church interior (unless very blurred), other people in focus`

### 日本語プロンプト

```
被写体: 20代後半の女性・後ろ姿のみ（顔は一切見えない）。
肩を出したエレガントな白いウェディングドレス、レースの背中のディテールが見える。
白とブラッシュのウェディングブーケ（バラ・ピオニー・ユーカリ）を腰の高さに持つ。
柔らかく照らされた室内か庭のスペース。

構図: 1:1正方形クロップ。被写体は左2/3を占める後ろ姿。
ブーケは腕の下にわずかに見える。右1/3はぼかされた背景。
アップヘアで首の後ろとレースのネックラインが見える。

光: 上からのわずかに暖かいバックライト、ドレスと髪にハロー。
左の窓からのサイドフィル。ロマンティックで親密な雰囲気。ドレスはわずかに露出オーバーで幻想的に。

色調: わずかに暖色かかった純白のドレス、ブラッシュ＆アイボリーのブーケ、
暖かいスキントーン、背景はクリームセージにぼかし。
```

---

## 15. `testimonial-02.jpg`

**配置:** S6 お客様の声 / 口コミカード2「完成作品が部屋に飾られた写真」
**アスペクト比:** 1:1 **解像度:** 800×800px 以上

### 英語プロンプト

```
Subject: bellbouquet shadow box frame (dark walnut, 30×40cm, preserved white bouquet)
hung on a light gray-white wall in a serene Japanese-Scandinavian residential interior,
below the frame a simple natural wood console with a small ceramic vase of dried stems,
ambient interior quality

Composition: square crop, frame is center-left and dominates upper 2/3,
console table visible below, shot from slight low angle (85cm height) looking slightly up,
room context visible at sides — wall and partial window frame

Light: soft natural light from left window (not visible in frame),
even ambient fill throughout, warm interior temperature 4800K,
frame casts slight shadow arc on wall — adding authenticity

Color: light plaster wall (#F0EEE8 approximate), dark walnut frame,
cream console, simple ceramic in --color-secondary tone,
overall warm-neutral interior palette, saturation 45-55

[BRAND TONE]

--ar 1:1 --style raw --v 6.1 --q 2 --s 70
```

**Negative Prompt:** `(standard negative), modern minimalist tech interior, dark walls, colorful art nearby, frame tilted, cluttered shelving, TV visible`

### 日本語プロンプト

```
被写体: bellbouquetのシャドーボックスフレーム（ダークウォールナット30×40cm、
白い保存ブーケ）が穏やかな和北欧ミックスの住宅インテリアの明るいグレー白の壁に掛けられている。
フレームの下にはシンプルな天然木のコンソールテーブル、小さなセラミックの花器にドライの茎。

構図: 正方形クロップ、フレームは中央左で上部2/3を占める。
85cmの高さから見上げる軽い仰角で撮影、コンソールが下に見える。
部屋の文脈（壁と窓枠の一部）が両脇に見える。

光: 左窓からの柔らかな自然光（フレーム外）、均一な環境光、4800K暖色。
フレームが壁にゆるやかな影の弧を落とし真実味を加える。

色調: 明るい漆喰壁（#F0EEE8近似）、ダークウォールナットフレーム、
クリームのコンソール、セカンダリカラーのセラミック。暖色ニュートラルのインテリアパレット。
```

---

## 16. `testimonial-03.jpg`

**配置:** S6 お客様の声 / 口コミカード3「指輪・花・手元のクローズアップ」
**アスペクト比:** 1:1 **解像度:** 800×800px 以上

### 英語プロンプト

```
Subject: diamond solitaire engagement ring (platinum or white gold band)
resting on or half-submerged in dried rose petals (cream, blush, dusty rose),
macro photography with very shallow depth of field,
petals fill the frame in a soft organic pattern

Composition: square macro crop, ring positioned on left-third rule,
petals cascade from upper-right to lower-left naturally,
stone in sharp focus, petals in soft bokeh toward edges,
no hands in frame — still life

Light: ultra-soft diffused light from above-left (window with white diffuser),
specular sparkle on diamond facets — 3-5 small catchlights only,
petals lit evenly showing texture and vein detail

Color: platinum/silver ring, cream-blush-dusty rose petal palette,
petals in saturation 40-50 (slightly desaturated, vintage tone),
background petals fade softly, no harsh background visible

[BRAND TONE]

--ar 1:1 --style raw --v 6.1 --q 2 --s 90
```

**Negative Prompt:** `(standard negative), yellow gold ring, gemstone setting other than solitaire, hands, colorful flowers, red roses, isolated white background, product shot style`

### 日本語プロンプト

```
被写体: ダイヤモンドソリティアの婚約指輪（プラチナかホワイトゴールドのバンド）が
ドライローズの花びら（クリーム、ブラッシュ、ダスティローズ）の上に置かれるか半分埋もれている。
マクロ撮影で非常に浅い被写界深度。花びらがフレームを柔らかな有機的パターンで満たす。

構図: 正方形マクロクロップ、指輪は左1/3の三分割位置。
花びらは右上から左下へ自然にカスケード。石はシャープフォーカス、
縁に向かう花びらは柔らかなボケ。手はなし—スティルライフ。

光: 上左からの超柔らかな拡散光（白いディフューザー付き窓）。
ダイヤの面に輝くスペキュラー—3〜5点の小さなキャッチライトのみ。花びらは均一にテクスチャが見える。

色調: プラチナ/シルバーの指輪、クリーム・ブラッシュ・ダスティローズの花びらパレット。
彩度40〜50（やや脱彩度でヴィンテージトーン）。
```

---

## 17. `cta-bg.jpg`

**配置:** S8 最終CTAセクション / 背景画像（opacity 0.15 でオーバーレイ使用）
**アスペクト比:** 16:9 **解像度:** 1920×1080px 以上

### 英語プロンプト

```
Subject: dramatic low-key still life of white and blush roses, eucalyptus sprigs,
and baby's breath arranged in a loose natural style on a very dark charcoal-black surface,
low-key lighting exposing only the flower tops,
no vase or container — stems hidden in shadow

Composition: wide 16:9 landscape, flowers spread across 50% of frame in diagonal
from lower-left to upper-right, remaining 50% deep shadow (for text overlay),
no single focal point — overall texture is the point

Light: very narrow window light from upper-right, only tips and top petals lit,
everything below mid-stem is in near-black shadow,
high-contrast ratio 6:1 (intentionally more dramatic than other shots)

Color: flowers in deep muted ivory-cream against near-black background (#111111),
minimal color — almost monochromatic warm dark palette,
saturation 25-35 (lowest in the set — background role)

[BRAND TONE]

--ar 16:9 --style raw --v 6.1 --q 2 --s 60
```

**Negative Prompt:** `(standard negative), colorful flowers, bright background, candles, wine glasses, romantic cliche, center-focused composition, too bright (needs to work with white text overlay at 15%)`

### 日本語プロンプト

```
被写体: ほぼ黒いチャコール色の台の上に、白とブラッシュのバラ、ユーカリ、
かすみ草を緩くナチュラルに配置したドラマチックなローキーのスティルライフ。
低露光で花のトップのみが照らされる。花器なし—茎は影の中。

構図: 16:9横長、花は左下から右上への対角線上にフレームの50%に広がる。
残り50%は深い影（テキストオーバーレイ用）。単一の焦点なし—全体のテクスチャが目的。

光: 右上からの非常に狭い窓光、花びらのトップのみが照らされる。
茎の中間より下はほぼ黒の影。コントラスト比6:1（意図的に他より劇的）。

色調: ほぼ黒の背景（#111111）に映えるディープなミュートアイボリー・クリームの花。
最小限の色彩—ほぼモノクロマティックな暖色ダークパレット。彩度25〜35（セット内最低）。
```

---

## 18. `og-image.jpg`

**配置:** OGP タグ `og:image` / SNS・LINE / Googleリッチリザルト
**アスペクト比:** 1200×630px（1.91:1）固定
**生成手法:** Midjourney で素材生成後、**Figma で最終テキスト合成を行うこと**

### 素材生成プロンプト（テキスト合成前の背景）

```
Subject: horizontal split composition — left 35% deep charcoal background with space
for logo and text (clean, minimal, no flowers), right 65% shows a beautiful bridal bouquet
(white garden roses, blush peonies, eucalyptus) in warm afternoon natural light,
bouquet placed on dark walnut surface, slight 45-degree angle view

Composition: hard split between dark left zone and warm floral right zone,
bouquet positioned at vertical center of the right panel,
bouquet partially cut off at right edge of frame

Light: warm natural light on bouquet from right side, left zone kept very dark #111111,
the contrast of dark vs. illuminated creates visual drama

Color: left panel #111111 (for text overlay), right panel warm 5200K bouquet shot,
overall saturation 45-55

[BRAND TONE]

--ar 16:9 --style raw --v 6.1 --q 2 --s 80
```

### Figma 合成仕様

```
左パネル上のテキスト配置:
  - ブランド名: "bellbouquet" / Cormorant Garamond / weight 300 / 白 / 28px
  - タグライン:  "あの日の花束を、永遠の記念に。" / Noto Sans JP / weight 300 / 白 / 22px
  - サブテキスト: "ブーケ保存 | ウェディングフラワーアレンジ" / 白 opacity 0.7 / 14px
  - 余白: 左端から48px、上下中央揃え

右パネル: 素材画像そのまま（テキスト合成不要）
```

---

## 19. `favicon.svg`

**配置:** `<link rel="icon">` / ブラウザタブ / ブックマーク
**サイズ:** SVG (32×32 基準) / 追加で PNG 32px / 192px / 512px を export
**生成手法:** ⚠️ **Figma / Illustrator でベクター作成すること（AI生成NG）**

### SVGデザイン仕様

```
コンセプト: bellbouquetの "b" のイニシャルを花びらの形に昇華したモノグラム

Case A — レターマーク (推奨):
  文字: 小文字 "b"
  フォント: Cormorant Garamond / weight 300 / Italic
  色: #C8A876 (--color-accent) on #1A1A1A 背景
  背景: 正方形 #1A1A1A、border-radius: 4px

Case B — フラワーアイコン:
  形状: 4枚花びらのシンプルな花形（各花びら: 6×10px楕円）
  線幅: 1.5px stroke / color: #C8A876
  背景: #1A1A1A 正方形

実装:
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" sizes="32x32" href="/favicon-32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png">
```

---

## プロンプト活用チェックリスト

### 生成前の確認

- [ ] 全プロンプトに `[BRAND TONE]` ブロックを付加した
- [ ] `--ar` パラメータがアセットの推奨比率と一致している
- [ ] Negative Prompt を設定した

### 生成後の確認（STYLE.md S6 準拠）

- [ ] **顔** が映っていない（後ろ姿・手元のみ）
- [ ] **人工花・プラスチック** が映っていない
- [ ] **レンズフレア・ゴースト** が発生していない
- [ ] 全体彩度が 45〜60 の範囲に収まっている（くすみ感があるか）
- [ ] 影のトーンが暖色（アンバー方向）かどうか
- [ ] 花びらのエッジが鮮明で「のっぺり感」がないか
- [ ] テキストオーバーレイ用の画像（hero / cta-bg）はネガティブスペースが確保されているか

### 最終チェック（デザイン統一性）

- [ ] 全アセットを並べたとき白・黒・暖色ゴールドの3色に収まっているか
- [ ] カードサムネイル（128px表示）でも質感が伝わるか
- [ ] SP・PCの両解像度でアセットがピクセル割れしていないか

---

*参照: `docs/STYLE.md` (ビジュアルトーン S6 / NG要素 S7) / `docs/WIREFRAME.md` (アセット一覧)*
*最終更新: 2026-05-21 — 全19アセット対応版*
