# bellbouquet New LP — Design System

> このドキュメントはデザイントークンの単一ソースです。実装・画像生成・コピーライティングすべてはここを参照する。

---

## 1. ブランドコンセプト要約

bellbouquetは「日常に花を、暮らしに豊かさを」届けるフラワーギフトブランドである。
生花が持つ自然の温度感（黄橙〜深紅の暖色域）を、余白の多いモノトーンの器で際立たせることで、贈り手と受け手の感情的な距離を縮める。
「高級だが手が届く、親密だが品がある」という二律のバランスが核心にある。

---

## 2. カラーパレット

| トークン名 | HEX | RGB | 用途 |
|---|---|---|---|
| `--color-primary` | `#1A1A1A` | 26, 26, 26 | 見出し・ナビ背景・強調ブロック背景 |
| `--color-primary-soft` | `#2D2D2D` | 45, 45, 45 | 本文テキスト・ボーダー |
| `--color-secondary` | `#F7F3EF` | 247, 243, 239 | カード背景・セクション背景（白より1段落ちた温かみ） |
| `--color-accent` | `#C8A876` | 200, 168, 118 | CTA ボタン・アンダーライン・アイコン強調 |
| `--color-accent-deep` | `#9E7A3F` | 158, 122, 63 | アクセントのホバー状態・バッジ |
| `--color-bg` | `#FFFFFF` | 255, 255, 255 | ページ基本背景 |
| `--color-bg-dark` | `#111111` | 17, 17, 17 | フルブリード黒帯セクション（商品訴求・フッター） |
| `--color-text-body` | `#3A3A3A` | 58, 58, 58 | 本文・説明文 |
| `--color-text-muted` | `#8A8278` | 138, 130, 120 | キャプション・注釈・プレースホルダー |
| `--color-border` | `#E0DAD3` | 224, 218, 211 | カードボーダー・セパレーター |

**配色比率（大まかな目安）：**
- 白 / クリーム系: 60%
- 黒 / ダーク系: 25%
- アクセント金: 10%
- ミュート: 5%

---

## 3. タイポグラフィ

### Font Stack

```css
/* 日本語優先 */
--font-ja: 'Noto Sans JP', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic UI', sans-serif;

/* 欧文見出し・ブランド名 */
--font-en-display: 'Cormorant Garamond', 'EB Garamond', Georgia, serif;

/* 欧文本文・数値 */
--font-en-body: 'DM Sans', 'Inter', system-ui, sans-serif;
```

### Type Scale

| トークン | rem | px | weight | 用途 |
|---|---|---|---|---|
| `--text-xs` | 0.625rem | 10px | 400 | ラベル・法的表記 |
| `--text-sm` | 0.75rem | 12px | 400 | キャプション・タグ |
| `--text-base` | 0.875rem | 14px | 400 | 本文（日本語） |
| `--text-md` | 1rem | 16px | 400 | 本文（強調行） |
| `--text-lg` | 1.25rem | 20px | 300 | サブ見出し・リード文 |
| `--text-xl` | 1.75rem | 28px | 300 | セクション見出し（H2） |
| `--text-2xl` | 2.5rem | 40px | 200 | メインキャッチ（H1・PC） |
| `--text-3xl` | 3.5rem | 56px | 200 | ヒーロー欧文ディスプレイ |

**ルール：**
- 日本語見出しは weight 300（Light）を基本とし、太字は使わない
- 欧文ブランドロゴ・キャッチはセリフ体 weight 300 で品格を演出
- 行間 `line-height` は日本語 1.9、欧文 1.5
- 字間 `letter-spacing` は日本語 0.08em、欧文キャプション 0.15em

---

## 4. 余白システム（8px ベース）

```css
--space-1:  4px;   /* 最小単位（アイコン内余白） */
--space-2:  8px;   /* インラインギャップ */
--space-3:  12px;  /* タグ・バッジ内padding */
--space-4:  16px;  /* カード内padding (mobile) */
--space-5:  24px;  /* カード内padding (PC) / セクション内要素間 */
--space-6:  32px;  /* コンポーネント間ギャップ */
--space-8:  48px;  /* セクション上下padding (mobile) */
--space-10: 64px;  /* セクション上下padding (PC) */
--space-12: 80px;  /* ヒーロー・フルブリードセクションのpadding */
--space-16: 128px; /* ページ間の大きな区切り */
```

**グリッド：**
- コンテンツ最大幅: `1200px`
- 左右ページ余白(PC): `48px`（ `--space-12` ÷ 2）
- 左右ページ余白(SP): `16px`
- カラム数: PC=12, Tablet=8, SP=4
- ガター: `24px`

---

## 5. コンポーネント別ルール

### ボタン

```
PRIMARY (CTA)
  背景:       --color-accent (#C8A876)
  文字:       #FFFFFF, weight 400, letter-spacing 0.12em
  padding:    14px 40px
  border:     none
  border-radius: 2px（ほぼ角丸なし—直線的な品格）
  hover:      背景 --color-accent-deep (#9E7A3F), transition 200ms ease

SECONDARY (ゴースト)
  背景:       transparent
  文字:       --color-primary (#1A1A1A)
  border:     1px solid --color-primary
  hover:      背景 #1A1A1A, 文字 #FFFFFF, transition 200ms ease

DISABLED
  背景:       --color-border (#E0DAD3)
  文字:       --color-text-muted (#8A8278)
  cursor:     not-allowed
```

### カード（商品・ギフトカード）

```
外枠:         border 1px solid --color-border
border-radius: 4px
背景:         --color-secondary (#F7F3EF)
padding:      --space-5 (24px)
shadow:       なし（フラットデザイン）
画像エリア:   アスペクト比 4:3 (PC) / 1:1 (SP)、object-fit: cover
画像hover:    transform scale(1.03)、overflow hidden、transition 400ms ease
テキスト:     商品名 --text-md weight 300 / 価格 --text-sm --color-accent-deep

DARK CARD (黒帯セクション内)
  外枠:       border 1px solid rgba(255,255,255,0.12)
  背景:       rgba(255,255,255,0.04)
  文字:       #FFFFFF
```

### フォーム

```
input / textarea / select
  border:       1px solid --color-border
  border-radius: 2px
  padding:      12px 16px
  font-size:    --text-base (14px)
  background:   #FFFFFF
  focus:        border-color --color-accent, outline none, box-shadow 0 0 0 2px rgba(200,168,118,0.25)
  placeholder:  --color-text-muted

label
  font-size:    --text-sm (12px)
  weight:       400
  letter-spacing: 0.08em
  color:        --color-text-body
  margin-bottom: --space-2 (8px)
```

### ナビゲーション

```
背景:         #1A1A1A（黒帯固定）
高さ:         60px (PC) / 56px (SP)
ロゴ:         欧文セリフ体 --font-en-display, 白, weight 300, font-size 22px
リンク:       白 opacity 0.75, font-size 13px, letter-spacing 0.1em
リンクhover:  白 opacity 1.0, underline なし（下線ではなくopacityで変化）
CTA in nav:   --color-accent 背景の小ボタン、padding 8px 20px
sticky:       スクロール時 position fixed, backdrop-filter blur(8px)
モバイルメニュー: ハンバーガーアイコン、全画面オーバーレイ（#111111 95%透明度）
```

---

## 6. ビジュアルトーン（画像生成プロンプトの基礎）

### 被写体

- 主役: 生花・花束（菊、バラ、ラナンキュラス、ドライフラワー）、季節の野菜・フルーツ（トマト・ザクロ等）
- 副役: フラワーアレンジ道具、麻紐・クラフト紙のラッピング、陶器の花器
- 人物: 登場するとしても手元・後ろ姿のみ。顔は映さない
- 禁止被写体: プラスチック容器・人工花・蛍光色の花

### ライティング

| パラメータ | 値 |
|---|---|
| 光源 | 自然光（北向き窓の拡散光） または ソフトボックス模倣 |
| 方向 | サイドライト 70% + 弱いフィルライト 30%（強い影を一方向に作る）|
| コントラスト比 | ハイライト:シャドウ = 3:1〜4:1（硬すぎず、フラットすぎず）|
| カラーグレード | Lrのトーンカーブでシャドウを暖色（+8R, +3G）にリフト |
| ホワイトバランス | 5000〜5500K（昼白色）|
| フレア | 無し（レンズフレアはNG）|

### 構図

| パラメータ | 値 |
|---|---|
| アングル | 俯瞰45°（フラットレイ）または水平アイレベル。見下ろし真上は避ける |
| フレーミング | 三分割法。被写体は中央または左1/3 |
| 余白 | 画面面積の 30〜40%をネガティブスペースに使う。白や木目のテーブル面 |
| 奥行き | 前景にぼかし要素（葉・ペタル1〜2枚）を置き、F2.8〜F4の浅い被写界深度 |
| トリミング | 花束の端を意図的にフレーム外に切る（余裕を演出）|

### 彩度・色温度

| パラメータ | 値 |
|---|---|
| 全体彩度(HSL Saturation) | 45〜60（くすみ感を維持。ビビッドにしない）|
| 赤オレンジ域 | Saturation +15、Luminance -5（花のメインカラーを活かす）|
| 緑域 | Saturation -10、Hue +5 → 黄緑を青緑に（くすんだオリーブ感）|
| 青域 | Saturation -20（青空・青花は排除か彩度落とし）|
| シャドウ色温度 | 暖色（Amber寄り）：Shadows Hue 30°, Saturation 20% |

### ムード・質感

- テクスチャ: 花びらの水滴・産毛・繊維感がわかる解像度（等倍で確認できる密度）
- ムード: 「静謐な午前」「贈る前の瞬間」—動きでなく静止の緊張感
- ビジュアル重力: 暖色の花 + 暗めの背景または黒テーブル（明暗コントラストで視線誘導）
- 加工禁止: 過度なレタッチによる肌のような「のっぺり感」。花びらのエッジは鮮明に保つ

**Stable Diffusion / Midjourney 基本プロンプト骨格（英語）：**
```
editorial flower photography, [subject], soft north-facing window light,
warm shadows amber tone, muted earthy palette, f/2.8 shallow depth of field,
45-degree overhead angle, negative space 35%, fine texture detail on petals,
5000K daylight, Japanese artisan aesthetic, no lens flare, no plastic,
–ar 4:3 –style raw –v 6
```

---

## 7. NG要素（このブランドでやってはいけない表現）

### ビジュアル NG

| NG | 理由 |
|---|---|
| 蛍光色・高彩度ピンク・電気ブルー | ブランドの暖色・くすみパレットを破壊する |
| レンズフレア・ゴースト | 安価な印象を与える |
| 正面真上フラットレイ（無影） | 奥行きゼロでスーパーの商品写真に見える |
| 顔出し人物（全身・表情） | 花が主役でなくなる。匿名性が品を作る |
| 人工花・プリザーブドのプラスチック光沢 | 生花ブランドとして致命的な矛盾 |
| 白背景ぬき（切り抜き商品写真のみ） | 文脈のない無菌な印象になる |
| 混在フォント（3種以上） | 統一感の崩壊 |
| 角丸が大きいUI（border-radius ≥ 12px） | かわいらしさが出てブランドトーンと乖離 |

### コピー・テキスト NG

| NG | 理由 |
|---|---|
| 「激安」「特価」「限定SALE」等の値引き訴求語 | 品格を毀損する |
| 感嘆符「！」の多用 | ブランドの静謐なトーンと不一致 |
| 横書きでの旧字体・変形文字の混在 | 読みにくく不統一 |
| 英語の大文字ALL CAPS（本文内） | 主張が強すぎてエレガントさを失う（ロゴ・ラベルは除く）|

### レイアウト NG

| NG | 理由 |
|---|---|
| 4カラム以上の商品グリッド（SP） | 小さすぎて質感が伝わらない |
| テキストオーバーレイで花写真を埋め尽くす | 花の美しさを隠す本末転倒 |
| アニメーションの多用（3つ以上同時動作） | ゴチャついた印象。静謐さを失う |
| ダークモードと明るいモードの混在配色 | セクションの黒はブランド指定のもの以外使わない |

---

## 8. レスポンシブブレークポイント

```css
/* Mobile First */
--bp-xs:  375px;   /* iPhone SE / 最小スマートフォン */
--bp-sm:  430px;   /* iPhone 14 Pro Max */
--bp-md:  768px;   /* iPad縦 / タブレット基準 */
--bp-lg:  1024px;  /* iPad横 / 小さなノートPC */
--bp-xl:  1280px;  /* 標準デスクトップ */
--bp-2xl: 1440px;  /* ワイドデスクトップ */
```

```css
/* Tailwind/SCSS ブレークポイント定義例 */
@custom-media --mobile    (max-width: 767px);
@custom-media --tablet    (min-width: 768px) and (max-width: 1023px);
@custom-media --desktop   (min-width: 1024px);
@custom-media --wide      (min-width: 1440px);
```

### レイアウト変化ルール

| 要素 | SP (〜767px) | Tablet (768〜1023px) | PC (1024px〜) |
|---|---|---|---|
| ヒーロー画像 | 縦長 9:16 クロップ | 16:9 | 16:7（横長パノラマ） |
| 商品グリッド | 2カラム | 3カラム | 4カラム |
| ナビゲーション | ハンバーガー + 全画面メニュー | ハンバーガー + ドロワー | 水平ナビバー |
| セクション padding | 48px 上下 | 64px 上下 | 80px 上下 |
| 見出しサイズ (H1) | 28px (--text-xl) | 36px | 40px (--text-2xl) |
| カード画像比率 | 1:1 | 4:3 | 4:3 |
| フォント (本文) | 14px | 14px | 15px |

---

## 付録：CSS カスタムプロパティ集約

```css
:root {
  /* Colors */
  --color-primary:      #1A1A1A;
  --color-primary-soft: #2D2D2D;
  --color-secondary:    #F7F3EF;
  --color-accent:       #C8A876;
  --color-accent-deep:  #9E7A3F;
  --color-bg:           #FFFFFF;
  --color-bg-dark:      #111111;
  --color-text-body:    #3A3A3A;
  --color-text-muted:   #8A8278;
  --color-border:       #E0DAD3;

  /* Typography */
  --font-ja:         'Noto Sans JP', 'Hiragino Sans', sans-serif;
  --font-en-display: 'Cormorant Garamond', Georgia, serif;
  --font-en-body:    'DM Sans', 'Inter', system-ui, sans-serif;

  /* Spacing */
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   24px;
  --space-6:   32px;
  --space-8:   48px;
  --space-10:  64px;
  --space-12:  80px;
  --space-16:  128px;

  /* Layout */
  --max-content: 1200px;
  --radius-sm:   2px;
  --radius-md:   4px;
  --radius-lg:   8px;

  /* Transition */
  --ease-default: 200ms ease;
  --ease-hover:   400ms ease;
}
```

---

*最終更新: 2026-05-21 — スクリーンショット解析版 (current_pc.png / current_sp.png)*
