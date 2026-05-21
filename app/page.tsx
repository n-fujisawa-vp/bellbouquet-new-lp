"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* ─── Placeholder SVGs ─────────────────────────────── */

function FlowerPlaceholder({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  const bg = dark
    ? "from-stone-900 via-neutral-800 to-stone-900"
    : "from-amber-50 via-stone-100 to-amber-100";
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${bg} flex items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-1/2 h-1/2 opacity-20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="100"
          cy="60"
          rx="22"
          ry="42"
          fill={dark ? "#C8A876" : "#9e7a3f"}
          transform="rotate(0 100 100)"
        />
        <ellipse
          cx="100"
          cy="60"
          rx="22"
          ry="42"
          fill={dark ? "#C8A876" : "#9e7a3f"}
          transform="rotate(60 100 100)"
        />
        <ellipse
          cx="100"
          cy="60"
          rx="22"
          ry="42"
          fill={dark ? "#C8A876" : "#9e7a3f"}
          transform="rotate(120 100 100)"
        />
        <ellipse
          cx="100"
          cy="60"
          rx="22"
          ry="42"
          fill={dark ? "#C8A876" : "#9e7a3f"}
          transform="rotate(180 100 100)"
        />
        <ellipse
          cx="100"
          cy="60"
          rx="22"
          ry="42"
          fill={dark ? "#C8A876" : "#9e7a3f"}
          transform="rotate(240 100 100)"
        />
        <ellipse
          cx="100"
          cy="60"
          rx="22"
          ry="42"
          fill={dark ? "#C8A876" : "#9e7a3f"}
          transform="rotate(300 100 100)"
        />
        <circle cx="100" cy="100" r="16" fill={dark ? "#C8A876" : "#9e7a3f"} />
      </svg>
      {/* decorative grain overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}


/* ─── Nav ──────────────────────────────────────────── */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "サービス", href: "#service" },
    { label: "商品", href: "#products" },
    { label: "制作の流れ", href: "#process" },
    { label: "口コミ", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "rgba(17,17,17,0.95)"
            : "#1a1a1a",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          height: "60px",
        }}
      >
        <div
          className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between"
        >
          {/* Logo */}
          <a
            href="#"
            className="font-display text-white font-light tracking-widest text-xl"
            style={{ letterSpacing: "0.15em" }}
          >
            bellbouquet
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white text-[13px] tracking-[0.1em] transition-opacity duration-200"
                style={{ opacity: 0.75 }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.opacity = "1")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.opacity = "0.75")
                }
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              className="text-white text-[13px] tracking-[0.1em] px-5 py-2 transition-all duration-200"
              style={{
                backgroundColor: "#C8A876",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.backgroundColor = "#9E7A3F")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.backgroundColor = "#C8A876")
              }
            >
              LINEで相談する
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
          >
            <span
              className="block w-6 h-px bg-white transition-all duration-300"
              style={{
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "",
              }}
            />
            <span
              className="block w-6 h-px bg-white transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-px bg-white transition-all duration-300"
              style={{
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: "rgba(17,17,17,0.97)" }}
          onClick={() => setMenuOpen(false)}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white text-xl tracking-[0.1em] font-light"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="text-white text-base tracking-[0.1em] px-8 py-3 mt-4"
            style={{ backgroundColor: "#C8A876", borderRadius: "2px" }}
            onClick={() => setMenuOpen(false)}
          >
            LINEで無料相談する
          </a>
        </div>
      )}
    </>
  );
}

/* ─── S1: Hero / FV ────────────────────────────────── */

function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "560px" }}
    >
      {/* Photo BG */}
      <div className="absolute inset-0 bg-[#0a0807]">
        <Image
          src="/materials/20260123_%E6%92%AE%E5%BD%B1%E7%B4%A0%E6%9D%90/beauty_1769145780455.jpeg"
          alt=""
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 65%" }}
        />
        {/* Layer 1: base film */}
        <div className="absolute inset-0" style={{ background: "rgba(8,6,4,0.35)" }} />
        {/* Layer 2: left panel — deep shadow for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(6,4,2,0.74) 0%, rgba(6,4,2,0.44) 36%, transparent 62%)",
          }}
        />
        {/* Layer 3: bottom vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.18) 22%, transparent 44%)",
          }}
        />
        {/* Layer 4: amber aura — echoes the candlelight */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 52% at 68% 62%, rgba(200,140,40,0.13) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content — left-anchored */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 w-full">
          <div className="max-w-[520px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-8 flex-shrink-0" style={{ backgroundColor: "#C8A876", opacity: 0.85 }} />
              <p
                className="font-display text-[11px] tracking-[0.28em] uppercase"
                style={{ color: "#C8A876", fontStyle: "italic" }}
              >
                For Your Memory
              </p>
            </div>

            {/* H1 */}
            <h1
              className="font-light leading-[1.65] mb-7"
              style={{
                fontSize: "clamp(34px, 5vw, 60px)",
                letterSpacing: "0.07em",
                color: "#F7F3EF",
              }}
            >
              あの日の花束を、
              <br />
              <span style={{ color: "#C8A876" }}>永遠</span>の記念に。
            </h1>

            {/* Thin gold rule */}
            <div className="mb-7" style={{ width: "40px", height: "1px", backgroundColor: "#C8A876", opacity: 0.55 }} />

            {/* Lead */}
            <p
              className="text-sm leading-[2.1] mb-10 max-w-[340px]"
              style={{ color: "rgba(247,243,239,0.76)", letterSpacing: "0.07em" }}
            >
              結婚式の花束をそのまま残せる
              <br />
              オーダーメイドフラワーキャンドル
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cta"
                className="text-white text-[13px] tracking-[0.14em] px-8 py-4 text-center transition-all duration-300"
                style={{ backgroundColor: "#C8A876", borderRadius: "2px" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "#9E7A3F")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "#C8A876")
                }
              >
                LINEで無料相談する
              </a>
              <a
                href="#products"
                className="text-[13px] tracking-[0.14em] px-8 py-4 text-center transition-all duration-300 border"
                style={{
                  borderColor: "rgba(200,168,118,0.55)",
                  color: "rgba(247,243,239,0.88)",
                  borderRadius: "2px",
                }}
                onMouseEnter={(e) => {
                  const el = e.target as HTMLElement;
                  el.style.backgroundColor = "rgba(200,168,118,0.12)";
                  el.style.borderColor = "rgba(200,168,118,0.9)";
                }}
                onMouseLeave={(e) => {
                  const el = e.target as HTMLElement;
                  el.style.backgroundColor = "transparent";
                  el.style.borderColor = "rgba(200,168,118,0.55)";
                }}
              >
                作品を見る
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35">
        <span className="text-white text-[10px] tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-8 bg-white animate-pulse" />
      </div>
    </section>
  );
}

/* ─── S2: Empathy ───────────────────────────────────── */

function EmpathySection() {
  return (
    <section
      id="empathy"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <h2
          className="text-white font-light text-center mb-16"
          style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            letterSpacing: "0.08em",
          }}
        >
          式が終わったあと、
          <br />
          花束をどうされましたか？
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image placeholder */}
          <div className="w-full lg:w-[40%] aspect-[3/2] lg:aspect-auto lg:h-[340px]">
            <FlowerPlaceholder className="w-full h-full" dark />
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="space-y-6">
              {[
                "ゴミ箱に捨てるには、あまりにも特別すぎた。",
                "生けようとしたけど、枯れるのを見るのがつらかった。",
                "あの日の記憶ごと、消えていった気がした。",
              ].map((text, i) => (
                <p
                  key={i}
                  className="text-white font-light border-l-2 pl-5"
                  style={{
                    fontSize: "clamp(14px, 1.5vw, 16px)",
                    letterSpacing: "0.06em",
                    lineHeight: "1.9",
                    borderColor: "rgba(200,168,118,0.4)",
                    opacity: 0.85,
                  }}
                >
                  「{text}」
                </p>
              ))}
            </div>

            <p
              className="text-white font-light mt-12"
              style={{
                fontSize: "clamp(15px, 1.8vw, 18px)",
                letterSpacing: "0.12em",
                opacity: 0.95,
              }}
            >
              それは、ずっと残しておくべき花束でした。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── S3: Features ──────────────────────────────────── */

function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
          <circle cx="24" cy="24" r="20" stroke="#C8A876" strokeWidth="1.5" />
          <path d="M16 24c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8" stroke="#C8A876" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="24" cy="24" r="3" fill="#C8A876" />
        </svg>
      ),
      title: "生花の質感をそのまま永久保存",
      desc: "花びら・茎・色を職人技で閉じ込める。あの日の美しさを損なわず、永遠に残します。",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
          <rect x="8" y="8" width="32" height="32" rx="2" stroke="#C8A876" strokeWidth="1.5" />
          <path d="M16 20h16M16 24h12M16 28h8" stroke="#C8A876" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="34" cy="14" r="4" fill="#C8A876" opacity="0.7" />
        </svg>
      ),
      title: "世界にひとつのオーダーメイドデザイン",
      desc: "お客様の想いをヒアリングして形にします。フレームサイズ・色・素材もご選択いただけます。",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
          <path d="M8 16h32v24a2 2 0 01-2 2H10a2 2 0 01-2-2V16z" stroke="#C8A876" strokeWidth="1.5" />
          <path d="M4 12h40v4H4z" stroke="#C8A876" strokeWidth="1.5" />
          <path d="M20 6h8l4 6H16l4-6z" stroke="#C8A876" strokeWidth="1.5" />
          <path d="M24 20v12M20 24h8" stroke="#C8A876" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "発送するだけで完成まで全おまかせ",
      desc: "LINEで相談、花束を発送すれば後はお任せ。梱包資材の案内もLINEでお届けします。",
    },
  ];

  return (
    <section id="service" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          className="text-center font-light mb-4"
          style={{
            color: "#1a1a1a",
            fontSize: "clamp(20px, 2.5vw, 28px)",
            letterSpacing: "0.08em",
          }}
        >
          bellbouquet が実現すること
        </h2>
        <div
          className="w-12 h-px mx-auto mb-16"
          style={{ backgroundColor: "#C8A876" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-6">{f.icon}</div>
              <h3
                className="font-light mb-4"
                style={{
                  color: "#1a1a1a",
                  fontSize: "16px",
                  letterSpacing: "0.06em",
                }}
              >
                {f.title}
              </h3>
              <p
                className="text-sm leading-loose"
                style={{ color: "#3a3a3a", letterSpacing: "0.04em" }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── S4: Products ───────────────────────────────────── */

function ProductsSection() {
  const products = [
    {
      name: "ブーケフレーム",
      desc: "式の花束をそのまま額装して残す定番プラン",
      price: "¥ 28,000 〜",
      gradient: "from-stone-100 via-amber-50 to-stone-200",
    },
    {
      name: "ウェディングリース",
      desc: "玄関・壁掛けになるリース型のアレンジメント",
      price: "¥ 22,000 〜",
      gradient: "from-amber-50 via-orange-50 to-stone-100",
    },
    {
      name: "テーブルアレンジメント",
      desc: "インテリアとして飾れるローフォルムタイプ",
      price: "¥ 18,000 〜",
      gradient: "from-stone-200 via-amber-50 to-amber-100",
    },
  ];

  return (
    <section
      id="products"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#f7f3ef" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          className="text-center font-light mb-4"
          style={{
            color: "#1a1a1a",
            fontSize: "clamp(20px, 2.5vw, 28px)",
            letterSpacing: "0.08em",
          }}
        >
          ご用途に合わせて選べる 3 つのプラン
        </h2>
        <div
          className="w-12 h-px mx-auto mb-16"
          style={{ backgroundColor: "#C8A876" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="group border overflow-hidden transition-shadow duration-300"
              style={{
                backgroundColor: "white",
                borderColor: "#E0DAD3",
                borderRadius: "4px",
              }}
            >
              {/* Product image placeholder */}
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${p.gradient} relative overflow-hidden`}
              >
                <FlowerPlaceholder className="w-full h-full" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(0,0,0,0.04)" }}
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3
                  className="font-light mb-2"
                  style={{
                    color: "#1a1a1a",
                    fontSize: "16px",
                    letterSpacing: "0.08em",
                  }}
                >
                  {p.name}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#8a8278", letterSpacing: "0.04em" }}
                >
                  {p.desc}
                </p>
                <p
                  className="text-sm font-light mb-5"
                  style={{
                    color: "#9E7A3F",
                    letterSpacing: "0.06em",
                    fontFamily: "DM Sans, Inter, sans-serif",
                  }}
                >
                  {p.price}
                </p>
                <a
                  href="#cta"
                  className="inline-block text-[12px] tracking-[0.1em] px-5 py-2 border transition-all duration-200"
                  style={{
                    color: "#1a1a1a",
                    borderColor: "#1a1a1a",
                    borderRadius: "2px",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.target as HTMLElement;
                    el.style.backgroundColor = "#1a1a1a";
                    el.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.target as HTMLElement;
                    el.style.backgroundColor = "transparent";
                    el.style.color = "#1a1a1a";
                  }}
                >
                  詳しく見る →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mid CTA */}
        <div className="text-center mt-14">
          <p
            className="text-sm mb-6"
            style={{ color: "#8a8278", letterSpacing: "0.06em" }}
          >
            どのプランが合うか迷ったら
          </p>
          <a
            href="#cta"
            className="inline-block text-white text-[13px] tracking-[0.12em] px-10 py-4 transition-all duration-200"
            style={{ backgroundColor: "#C8A876", borderRadius: "2px" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#9E7A3F")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#C8A876")
            }
          >
            LINEで何が合うか相談する →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── S5: Process ────────────────────────────────────── */

function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "LINEでご相談",
      sub: "無料相談 / 今すぐOK",
      desc: "お花の種類・ご希望のスタイルをLINEでお気軽にご相談ください。",
    },
    {
      num: "02",
      title: "花束をお送りいただく",
      sub: "お申込み後 / 発送手配",
      desc: "梱包資材のご案内もLINEで送付。式後すぐに発送いただけます。",
    },
    {
      num: "03",
      title: "職人が丁寧に制作",
      sub: "約 2〜3 週間",
      desc: "一点一点、職人が手作業で仕上げます。進捗もLINEでご報告します。",
    },
    {
      num: "04",
      title: "完成品をお届け",
      sub: "ご自宅に到着",
      desc: "丁寧に梱包してご自宅にお届け。大切な作品が永遠の記念になります。",
    },
  ];

  return (
    <section
      id="process"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          className="text-white text-center font-light mb-4"
          style={{
            fontSize: "clamp(20px, 2.5vw, 28px)",
            letterSpacing: "0.08em",
          }}
        >
          お届けまでの流れ
        </h2>
        <div
          className="w-12 h-px mx-auto mb-16"
          style={{ backgroundColor: "#C8A876" }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-[28px] left-[calc(100%_-_16px)] w-8 h-px"
                  style={{ backgroundColor: "rgba(200,168,118,0.3)" }}
                />
              )}

              {/* Image placeholder */}
              <div
                className="aspect-square mb-5 relative overflow-hidden"
                style={{ borderRadius: "4px" }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(200,168,118,0.1) 0%, rgba(17,17,17,0.8) 100%)",
                    border: "1px solid rgba(200,168,118,0.15)",
                  }}
                >
                  <FlowerPlaceholder className="w-full h-full" dark />
                </div>
                {/* Step number overlay */}
                <div
                  className="absolute top-3 left-3 font-display font-light text-[10px] tracking-[0.2em]"
                  style={{ color: "#C8A876", fontStyle: "italic" }}
                >
                  STEP {s.num}
                </div>
              </div>

              <h3
                className="text-white font-light mb-1"
                style={{ fontSize: "15px", letterSpacing: "0.06em" }}
              >
                {s.title}
              </h3>
              <p
                className="text-[11px] tracking-[0.1em] mb-3"
                style={{ color: "#C8A876" }}
              >
                {s.sub}
              </p>
              <p
                className="text-sm leading-loose"
                style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.04em" }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p
            className="text-sm mb-6 tracking-wider"
            style={{ color: "rgba(200,168,118,0.8)" }}
          >
            ── 発送から最短 3 週間でお手元に ──
          </p>
          <a
            href="#cta"
            className="inline-block text-white text-[13px] tracking-[0.12em] px-10 py-4 transition-all duration-200"
            style={{ backgroundColor: "#C8A876", borderRadius: "2px" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#9E7A3F")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#C8A876")
            }
          >
            LINEで今すぐ相談する →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── S6: Testimonials ───────────────────────────────── */

function TestimonialsSection() {
  const reviews = [
    {
      quote:
        "枯れてしまう前に送ってよかった。形になるとは思っていなかったので感動しました。",
      name: "M.K 様",
      meta: "30代・埼玉 2025.10",
      gradient: "from-stone-100 to-amber-50",
    },
    {
      quote:
        "玄関に飾るたびにあの日を思い出す。夫も気に入ってくれています。",
      name: "Y.S 様",
      meta: "20代・神奈川 2025.8",
      gradient: "from-amber-50 to-stone-100",
    },
    {
      quote:
        "LINEで気軽に相談できて、仕上がりも想像以上でした。またお願いしたい。",
      name: "A.T 様",
      meta: "30代・東京 2025.11",
      gradient: "from-stone-100 via-amber-50 to-stone-200",
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          className="text-center font-light mb-4"
          style={{
            color: "#1a1a1a",
            fontSize: "clamp(20px, 2.5vw, 28px)",
            letterSpacing: "0.08em",
          }}
        >
          花嫁さまからのお声
        </h2>
        <div
          className="w-12 h-px mx-auto mb-16"
          style={{ backgroundColor: "#C8A876" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="border overflow-hidden"
              style={{
                borderColor: "#E0DAD3",
                borderRadius: "4px",
                backgroundColor: "#f7f3ef",
              }}
            >
              {/* Image placeholder 1:1 */}
              <div className={`aspect-square bg-gradient-to-br ${r.gradient}`}>
                <FlowerPlaceholder className="w-full h-full" />
              </div>

              <div className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, j) => (
                      <svg key={j} className="w-3 h-3" viewBox="0 0 12 12" fill="#C8A876">
                        <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9-2.1-2 2.9-.4z" />
                      </svg>
                    ))}
                </div>

                <p
                  className="text-sm leading-loose mb-5"
                  style={{ color: "#3a3a3a", letterSpacing: "0.04em" }}
                >
                  「{r.quote}」
                </p>

                <div
                  className="pt-4 border-t"
                  style={{ borderColor: "#E0DAD3" }}
                >
                  <p
                    className="text-xs font-light"
                    style={{ color: "#1a1a1a", letterSpacing: "0.06em" }}
                  >
                    {r.name}
                  </p>
                  <p
                    className="text-[11px] mt-1"
                    style={{ color: "#8a8278", letterSpacing: "0.06em" }}
                  >
                    {r.meta}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── S7: FAQ ────────────────────────────────────────── */

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "式当日に花束を送ればいいですか？",
      a: "式終了後、お手元の花束を専用梱包材で発送いただくだけです。梱包資材のご案内もLINEにてお送りします。",
    },
    {
      q: "花束が枯れていても大丈夫ですか？",
      a: "式後2〜3日以内にお送りいただければ問題ありません。状態が心配な場合はLINEでご相談ください。",
    },
    {
      q: "仕上がりのデザインは選べますか？",
      a: "ご要望をヒアリングした上で、職人がご提案します。フレームのサイズ・色・素材もご選択いただけます。",
    },
    {
      q: "料金はどのくらいかかりますか？",
      a: "プランにより¥18,000〜となります。送料・梱包費込みの明朗会計です。追加費用は一切発生しません。",
    },
    {
      q: "制作期間はどのくらいですか？",
      a: "花束受取から約2〜3週間でお届けします。結婚記念日に合わせたご要望にも可能な限り対応します。",
    },
    {
      q: "LINEでの相談は無料ですか？",
      a: "完全無料です。申込み前に不安なことは何でもお聞きください。",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#f7f3ef" }}
    >
      <div className="max-w-[800px] mx-auto px-6">
        <h2
          className="text-center font-light mb-4"
          style={{
            color: "#1a1a1a",
            fontSize: "clamp(20px, 2.5vw, 28px)",
            letterSpacing: "0.08em",
          }}
        >
          よくあるご質問
        </h2>
        <div
          className="w-12 h-px mx-auto mb-14"
          style={{ backgroundColor: "#C8A876" }}
        />

        <div className="space-y-2">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border overflow-hidden"
              style={{ borderColor: "#E0DAD3", borderRadius: "2px" }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between bg-white transition-colors duration-200"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "#faf8f5")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "white")
                }
              >
                <span
                  className="text-sm font-light pr-8"
                  style={{ color: "#1a1a1a", letterSpacing: "0.06em" }}
                >
                  {item.q}
                </span>
                <span
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: "#C8A876",
                    transform: openIdx === i ? "rotate(45deg)" : "rotate(0)",
                    fontSize: "20px",
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>

              {openIdx === i && (
                <div
                  className="px-6 py-5 border-t"
                  style={{
                    backgroundColor: "#f7f3ef",
                    borderColor: "#E0DAD3",
                  }}
                >
                  <p
                    className="text-sm leading-loose"
                    style={{ color: "#3a3a3a", letterSpacing: "0.04em" }}
                  >
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#cta"
            className="inline-block text-[13px] tracking-[0.1em] px-8 py-3 border transition-all duration-200"
            style={{
              color: "#1a1a1a",
              borderColor: "#1a1a1a",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.backgroundColor = "#1a1a1a";
              el.style.color = "white";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.backgroundColor = "transparent";
              el.style.color = "#1a1a1a";
            }}
          >
            LINEで質問する →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── S8: Final CTA ──────────────────────────────────── */

function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0" style={{ backgroundColor: "#111111" }}>
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(200,168,118,0.3) 0%, transparent 70%)",
          }}
        />
        {/* Decorative SVG bouquet */}
        <svg
          viewBox="0 0 300 400"
          className="absolute opacity-[0.06]"
          style={{ right: "5%", bottom: 0, width: "35%", maxWidth: "260px" }}
          fill="none"
        >
          <ellipse cx="100" cy="120" rx="50" ry="50" fill="#C8A876" />
          <ellipse cx="180" cy="100" rx="42" ry="42" fill="#9E7A3F" />
          <ellipse cx="140" cy="170" rx="40" ry="40" fill="#B8966A" />
          <ellipse cx="70" cy="160" rx="34" ry="34" fill="#A08050" />
          <ellipse cx="210" cy="160" rx="36" ry="36" fill="#C8A876" />
          <line x1="150" y1="240" x2="150" y2="390" stroke="#6B7E52" strokeWidth="7" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[640px] mx-auto px-6 text-center">
        <p
          className="font-display font-light text-white mb-6 opacity-70 tracking-[0.2em] text-sm"
          style={{ fontStyle: "italic" }}
        >
          For Your Memory
        </p>
        <h2
          className="font-display font-light text-white leading-relaxed mb-4"
          style={{
            fontSize: "clamp(26px, 4vw, 44px)",
            letterSpacing: "0.06em",
          }}
        >
          あなたの花束には、
          <br />
          続きがある。
        </h2>
        <p
          className="text-sm leading-loose mb-12"
          style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "0.06em" }}
        >
          式が終わっても、あの日の美しさはかたちに残せます。
          <br />
          まずはLINEで気軽にご相談ください。
        </p>

        {/* Primary CTA */}
        <a
          href="#"
          className="block w-full max-w-[320px] mx-auto text-white text-[13px] tracking-[0.12em] py-5 mb-4 text-center transition-all duration-200"
          style={{ backgroundColor: "#C8A876", borderRadius: "2px" }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.backgroundColor = "#9E7A3F")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.backgroundColor = "#C8A876")
          }
        >
          LINE公式アカウントを友達追加する
        </a>

        <p className="text-white text-xs mb-4" style={{ opacity: 0.4 }}>
          または
        </p>

        {/* Secondary CTA */}
        <a
          href="mailto:info@bellbouquet.jp"
          className="inline-block text-white text-[13px] tracking-[0.1em] px-10 py-4 border transition-all duration-200"
          style={{
            borderColor: "rgba(255,255,255,0.4)",
            borderRadius: "2px",
          }}
          onMouseEnter={(e) => {
            const el = e.target as HTMLElement;
            el.style.borderColor = "rgba(255,255,255,0.8)";
            el.style.backgroundColor = "rgba(255,255,255,0.07)";
          }}
          onMouseLeave={(e) => {
            const el = e.target as HTMLElement;
            el.style.borderColor = "rgba(255,255,255,0.4)";
            el.style.backgroundColor = "transparent";
          }}
        >
          お問い合わせフォームはこちら →
        </a>

        {/* Trust badges */}
        <div
          className="flex flex-wrap justify-center gap-6 mt-10 text-[11px] tracking-[0.1em]"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          {["相談無料", "全国対応", "個人情報は厳重に管理"].map((t, i) => (
            <span key={i} className="flex items-center gap-2">
              <span style={{ color: "rgba(200,168,118,0.6)" }}>—</span>
              {t}
              <span style={{ color: "rgba(200,168,118,0.6)" }}>—</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────── */

function Footer() {
  const links = [
    "サービス",
    "商品",
    "制作の流れ",
    "口コミ",
    "FAQ",
    "お問い合わせ",
  ];

  return (
    <footer
      className="py-12 px-6"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          <a
            href="#"
            className="font-display text-white font-light tracking-widest text-xl"
            style={{ letterSpacing: "0.15em" }}
          >
            bellbouquet
          </a>

          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            {links.map((l) => (
              <a
                key={l}
                href="#"
                className="text-white text-[12px] tracking-[0.08em] transition-opacity duration-200"
                style={{ opacity: 0.5 }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.opacity = "0.9")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.opacity = "0.5")
                }
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div
          className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="flex gap-5">
            {["特定商取引法", "プライバシーポリシー", "利用規約"].map((t) => (
              <a
                key={t}
                href="#"
                className="text-[11px] transition-opacity duration-200"
                style={{ color: "rgba(255,255,255,0.3)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.opacity = "0.7")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.opacity = "1")
                }
              >
                {t}
              </a>
            ))}
          </div>
          <p
            className="text-[11px] tracking-wider"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            © 2025 bellbouquet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Sticky LINE button (SP) ────────────────────────── */

function StickyLineButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#cta"
      className="fixed right-4 bottom-6 z-50 lg:hidden flex items-center gap-2 text-white text-[12px] tracking-[0.08em] px-5 py-3 transition-all duration-300 shadow-lg"
      style={{
        backgroundColor: "#C8A876",
        borderRadius: "2px",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(8px)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
      }}
    >
      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="white">
        <path d="M10 2C5.6 2 2 5.1 2 9c0 2.4 1.4 4.6 3.6 5.9l-.6 2.6 2.9-1.4c.7.2 1.4.3 2.1.3 4.4 0 8-3.1 8-7S14.4 2 10 2z" />
      </svg>
      LINE相談
    </a>
  );
}

/* ─── Page ───────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <EmpathySection />
        <FeaturesSection />
        <ProductsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <StickyLineButton />
    </>
  );
}
