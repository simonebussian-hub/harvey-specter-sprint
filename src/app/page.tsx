import { Fragment } from "react";
import { MobileNav } from "./MobileNav";

const HERO_DESKTOP =
  "https://www.figma.com/api/mcp/asset/58fd0d5d-6f42-4248-a498-0cbd11254bad";
const HERO_MOBILE =
  "https://www.figma.com/api/mcp/asset/f32f638c-a1c5-4d5d-a5e9-0d8bf80991e8";
const ABOUT_PHOTO_DESKTOP =
  "https://www.figma.com/api/mcp/asset/a36a79b2-50f6-4f76-beb7-628c9edc358f";
const ABOUT_PHOTO_MOBILE =
  "https://www.figma.com/api/mcp/asset/8a40d83e-ae83-4952-bdfc-dfb9b95c96fc";
const PHOTO_BREAK_DESKTOP =
  "https://www.figma.com/api/mcp/asset/aa00ea41-00f5-4660-8fa7-4be411d633f8";
const PHOTO_BREAK_MOBILE =
  "https://www.figma.com/api/mcp/asset/1da2340f-bd78-46e4-80b9-2e9305294704";

const NEWS_ITEMS = [
  { img: "https://www.figma.com/api/mcp/asset/e8f5b051-d98a-4f63-8b2b-257596fa929d", offset: false },
  { img: "https://www.figma.com/api/mcp/asset/8abc6190-5ff3-4c34-9479-472c6231029d", offset: true },
  { img: "https://www.figma.com/api/mcp/asset/144da2b3-3ca6-4192-868f-477fd6c59e3c", offset: false },
] as const;

const NEWS_CAPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const TESTIMONIALS = [
  {
    name: "Lukas Weber",
    quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    logo: "https://www.figma.com/api/mcp/asset/14bc626e-7013-4ba2-999a-e3099d9356d6",
    logoH: 19,
    mobileRot: 2.9,
  },
  {
    name: "Marko Stojković",
    quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    logo: "https://www.figma.com/api/mcp/asset/0ad2e0d0-3163-404a-9da5-5f1f785525d7",
    logoH: 19,
    mobileRot: -3.5,
  },
  {
    name: "Sarah Jenkins",
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    logo: "https://www.figma.com/api/mcp/asset/e665dc8f-5cc1-40c3-8ed1-c53f9fb74ab9",
    logoH: 31,
    mobileRot: -1.5,
  },
  {
    name: "Sofia Martínez",
    quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    logo: "https://www.figma.com/api/mcp/asset/ed54ce16-3e6e-4f74-a3b0-c73a765f451f",
    logoH: 36,
    mobileRot: 2,
  },
] as const;

const PROJECTS = [
  {
    title: "Surfers Paradise",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/ba5791e6-03b9-412a-9592-98076719e6e2",
    desktopH: 744,
  },
  {
    title: "Cyberpunk Caffe",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/32db7223-2e60-4398-8a57-c89790a2ae75",
    desktopH: 699,
  },
  {
    title: "Agency 976",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/cf8bb7bf-afee-4097-b456-8aa8ff334b3a",
    desktopH: 699,
  },
  {
    title: "Minimal Playground",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/0055c368-5c7c-4ed5-804b-b161b279dfc2",
    desktopH: 744,
  },
] as const;

const SERVICES = [
  { num: "1", title: "Brand Discovery",   img: "https://www.figma.com/api/mcp/asset/ad6a31da-4cfa-4426-8b19-90b8d26c7ed1" },
  { num: "2", title: "Web Design & Dev",  img: "https://www.figma.com/api/mcp/asset/55c39810-137d-40be-b70d-4a4fcd6e0a41" },
  { num: "3", title: "Marketing",         img: "https://www.figma.com/api/mcp/asset/a0fd776e-e121-44bc-9363-02ed920435a1" },
  { num: "4", title: "Photography",       img: "https://www.figma.com/api/mcp/asset/e6b778d0-2fec-4716-b500-e10c239d2e9a" },
] as const;

const SERVICE_DESC =
  "We are a creative studio that loves making beautiful websites and premium products. We’ve won some awards for our work. We’re really good at creating brands, designing cool stuff, and making things work just right.";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

// Three non-breaking spaces preserve the visual gap between first and last name
const NAME_GAP = "   ";

function BracketCorner({ deg }: { deg: number }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ transform: `rotate(${deg}deg)`, display: "block", flexShrink: 0 }}
    >
      <path
        d="M14 2L2 2L2 14"
        stroke="#1f1f1f"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDiag() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ display: "block", flexShrink: 0 }}>
      <path d="M9 23L23 9M23 9H11M23 9V21" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Description() {
  return (
    <>
      H.Studio is a{" "}
      <span className="font-normal not-italic">full-service</span> creative
      studio creating beautiful digital experiences and products. We are an{" "}
      <span className="font-normal not-italic">award winning</span> design and
      art group specializing in branding, web design and engineering.
    </>
  );
}

export default function Home() {
  return (
    <main>
      <section className="relative h-[847px] overflow-hidden bg-[#fafafa]" style={{ isolation: "isolate" }}>

        {/* Desktop background: bleeds 34.79% beyond each edge.
            Fixed height (1434px = design height at 1440px) keeps Harvey's face
            at the same vertical position regardless of viewport width. */}
        <div
          className="hidden md:block absolute pointer-events-none"
          style={{
            left: "-34.79%",
            right: "-34.79%",
            height: "1434px",
            top: "calc(50% + 88.84px)",
            transform: "translateY(-50%)",
          }}
        >
          <img
            src={HERO_DESKTOP}
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
        </div>

        {/* Mobile background: bleeds 39.47% beyond the right edge, centered vertically */}
        <div
          className="md:hidden absolute h-full pointer-events-none"
          style={{
            left: 0,
            right: "-39.47%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <img
            src={HERO_MOBILE}
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
        </div>

        {/* Blur overlay — bottom 349px, fades in from top via mask */}
        <div
          className="absolute bottom-0 inset-x-0 h-[349px] backdrop-blur-[10px] pointer-events-none"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 45%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 45%)",
          }}
        />

        {/* ── Layout container ── */}
        <div className="relative h-full flex flex-col px-4 md:px-8">

          {/* ── NAVBAR ── */}
          <nav className="flex items-center justify-between py-6 shrink-0">
            <span className="font-semibold text-[16px] tracking-[-0.04em] capitalize text-black">
              H.Studio
            </span>

            {/* Desktop nav links — hidden on mobile */}
            <div className="hidden md:flex gap-14 font-semibold text-[16px] tracking-[-0.04em] capitalize text-black">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:opacity-60 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Desktop CTA — hidden on mobile */}
            <button className="hidden md:flex items-center justify-center bg-black text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-full cursor-pointer hover:opacity-80 transition-opacity">
              Let&apos;s talk
            </button>

            {/* Mobile hamburger + portal slide-out menu */}
            <MobileNav />
          </nav>

          {/* ── DESKTOP hero text ── */}
          <div className="hidden md:flex flex-col mt-[240px]">
            {/* "[ Hello i'm ]" label — overlaps into the name via negative margin */}
            <div className="px-[18px] mb-[-15px]">
              <p
                className="font-mono text-[14px] text-white uppercase leading-[1.1] whitespace-nowrap"
                style={{ mixBlendMode: "overlay" }}
              >
                [ Hello i&apos;m ]
              </p>
            </div>

            {/* Harvey + name — scales from 80px → 198px across viewport widths, never wraps */}
            <h1
              className="w-full text-center font-medium leading-[1.1] capitalize text-white tracking-[-0.07em] whitespace-nowrap mb-[-15px]"
              style={{ fontSize: "clamp(80px, 13.75vw, 198px)", mixBlendMode: "overlay" }}
            >
              {`Harvey${NAME_GAP}Specter`}
            </h1>

            {/* Description + CTA — right-aligned, sits inside the blur overlay */}
            <div className="flex justify-end pt-8">
              <div className="flex flex-col gap-[17px] items-start w-[294px]">
                <p className="font-bold italic text-[14px] text-[#1f1f1f] tracking-[-0.04em] uppercase leading-[1.1]">
                  <Description />
                </p>
                <button className="bg-black text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-full cursor-pointer hover:opacity-80 transition-opacity">
                  Let&apos;s talk
                </button>
              </div>
            </div>
          </div>

          {/* ── MOBILE hero — pushed to bottom with mt-auto ── */}
          <div className="md:hidden mt-auto h-[341px] flex flex-col justify-between pb-6">
            {/* Label + name — centered at the top of the 341px block */}
            <div className="flex flex-col items-center">
              <p
                className="font-mono text-[14px] text-white uppercase leading-[1.1] whitespace-nowrap"
                style={{ mixBlendMode: "overlay" }}
              >
                [ Hello i&apos;m ]
              </p>
              <h1
                className="w-full text-center font-medium leading-[0.8] capitalize text-white tracking-[-0.07em] whitespace-nowrap"
                style={{ fontSize: "clamp(56px, 25.6vw, 96px)", mixBlendMode: "overlay" }}
              >
                {`Harvey${NAME_GAP}Specter`}
              </h1>
            </div>

            {/* Description + CTA — pinned to the bottom of the block */}
            <div className="flex flex-col gap-[17px] items-start w-[293px]">
              <p className="font-bold italic text-[14px] text-[#1f1f1f] tracking-[-0.04em] uppercase leading-[1.1]">
                <Description />
              </p>
              <button className="bg-black text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-full cursor-pointer hover:opacity-80 transition-opacity">
                Let&apos;s talk
              </button>
            </div>
          </div>

        </div>
      </section>
      {/* ── SECTION 2: Editorial intro ── */}
      <section id="about" className="bg-[#fafafa] px-4 md:px-8 py-12 md:py-[120px]">

        {/* Header: [ 8+ years in industry ] + full-width rule */}
        <div className="flex flex-col items-end gap-3 mb-6">
          <span className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f] uppercase">
            [ 8+ years in industry ]
          </span>
          <div className="w-full h-px bg-[#1f1f1f]" />
        </div>

        {/* ── Desktop: staggered cascade layout ── */}
        {/*
          Indent percentages are relative to content area (viewport - 2×32px padding):
            Line 2:  214px / 1376px ≈ 15.55%
            Line 3:  610px / 1376px ≈ 44.33%
            Line 5:  606px / 1376px ≈ 44.04%
        */}
        <div className="hidden md:flex flex-col gap-2">

          {/* Line 1: "A creative director   /" + "001" annotation */}
          <div className="flex items-start gap-3">
            <h2
              className="font-light text-black uppercase tracking-[-0.08em] leading-[0.84] whitespace-pre"
              style={{ fontSize: "clamp(48px, 6.67vw, 96px)" }}
            >
              {`A creative director   /`}
            </h2>
            <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] mt-1 shrink-0">
              001
            </span>
          </div>

          {/* Line 2: "Photographer" */}
          <div style={{ paddingLeft: "15.55%" }}>
            <h2
              className="font-light text-black uppercase tracking-[-0.08em] leading-[0.84] whitespace-nowrap"
              style={{ fontSize: "clamp(48px, 6.67vw, 96px)" }}
            >
              Photographer
            </h2>
          </div>

          {/* Line 3: "Born & raised" — & in Playfair italic */}
          <div style={{ paddingLeft: "44.33%" }}>
            <h2
              className="font-light text-black uppercase tracking-[-0.08em] leading-[0.84] whitespace-nowrap"
              style={{ fontSize: "clamp(48px, 6.67vw, 96px)" }}
            >
              Born{" "}
              <span className="italic" style={{ fontFamily: "var(--font-playfair)" }}>
                &amp;
              </span>
              {" "}raised
            </h2>
          </div>

          {/* Line 4: "on the south side" — no indent */}
          <h2
            className="font-light text-black uppercase tracking-[-0.08em] leading-[0.84] whitespace-nowrap"
            style={{ fontSize: "clamp(48px, 6.67vw, 96px)" }}
          >
            on the south side
          </h2>

          {/* Line 5: "of chicago." + "[ creative freelancer ]" inline */}
          <div className="flex items-center gap-4" style={{ paddingLeft: "44.04%" }}>
            <h2
              className="font-light text-black uppercase tracking-[-0.08em] leading-[0.84] whitespace-nowrap"
              style={{ fontSize: "clamp(48px, 6.67vw, 96px)" }}
            >
              of chicago.
            </h2>
            <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] whitespace-nowrap">
              [ creative freelancer ]
            </span>
          </div>

        </div>

        {/* ── Mobile: centered stack layout ── */}
        <div className="md:hidden flex flex-col items-center gap-2">
          <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] mb-1">
            001
          </span>
          <h2 className="font-light text-[32px] text-black uppercase tracking-[-0.08em] leading-[0.84] whitespace-pre text-center">
            {`A creative director   /`}
          </h2>
          <h2 className="font-light text-[32px] text-black uppercase tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
            Photographer
          </h2>
          <h2 className="font-light text-[32px] text-black uppercase tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
            Born{" "}
            <span className="italic" style={{ fontFamily: "var(--font-playfair)" }}>
              &amp;
            </span>
            {" "}raised
          </h2>
          <h2 className="font-light text-[32px] text-black uppercase tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
            on the south side
          </h2>
          <h2 className="font-light text-[32px] text-black uppercase tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
            of chicago.
          </h2>
          <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] mt-1">
            [ creative freelancer ]
          </span>
        </div>

      </section>

      {/* ── SECTION 3: About ── */}
      <section className="bg-[#fafafa] px-4 md:px-8 py-12 md:py-[80px]">

        {/* ── Desktop ── */}
        <div className="hidden md:flex items-start justify-between">
          {/* [ About ] label — top-left */}
          <span className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f] uppercase whitespace-nowrap shrink-0">
            [ About ]
          </span>

          {/* Right cluster: bracket-text + 002 + photo, all bottom-aligned */}
          <div className="flex gap-8 items-end">
            {/* Bracket-framed text block */}
            <div className="flex items-stretch gap-3">
              {/* Left bracket column */}
              <div className="flex flex-col justify-between shrink-0">
                <BracketCorner deg={0} />
                <BracketCorner deg={-90} />
              </div>
              {/* Paragraph */}
              <p className="w-[294px] text-[14px] text-[#1f1f1f] tracking-[-0.04em] leading-[1.3] py-3">
                Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
              </p>
              {/* Right bracket column */}
              <div className="flex flex-col justify-between shrink-0">
                <BracketCorner deg={90} />
                <BracketCorner deg={180} />
              </div>
            </div>

            {/* 002 label + portrait photo */}
            <div className="flex gap-6 items-start shrink-0">
              <span className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f] uppercase">
                002
              </span>
              <div className="relative w-[436px] h-[614px] overflow-hidden">
                <img
                  src={ABOUT_PHOTO_DESKTOP}
                  alt="Harvey Specter portrait"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="md:hidden flex flex-col gap-5">
          <span className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f] uppercase">002</span>
          <span className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f] uppercase">[ About ]</span>

          {/* Bracket-framed text */}
          <div className="flex items-stretch gap-3">
            {/* Left bracket column */}
            <div className="flex flex-col justify-between shrink-0">
              <BracketCorner deg={0} />
              <BracketCorner deg={-90} />
            </div>
            {/* Paragraph */}
            <p className="flex-1 min-w-0 text-[14px] text-[#1f1f1f] tracking-[-0.04em] leading-[1.3] py-3">
              Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
            </p>
            {/* Right bracket column */}
            <div className="flex flex-col justify-between items-end shrink-0">
              <BracketCorner deg={90} />
              <BracketCorner deg={180} />
            </div>
          </div>

          {/* Full-width portrait photo */}
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "422/594" }}>
            <img
              src={ABOUT_PHOTO_MOBILE}
              alt="Harvey Specter portrait"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </div>

      </section>

      {/* ── SECTION 4: Full-bleed photo break ── */}
      <section className="relative overflow-hidden h-[500px] md:h-[620px]">
        {/* Desktop crop */}
        <img
          src={PHOTO_BREAK_DESKTOP}
          alt=""
          className="hidden md:block absolute inset-0 size-full object-cover"
        />
        {/* Mobile crop */}
        <img
          src={PHOTO_BREAK_MOBILE}
          alt=""
          className="md:hidden absolute inset-0 size-full object-cover"
        />
      </section>

      {/* ── SECTION 5: Services ── */}
      <section id="services" className="bg-black px-4 md:px-8 py-12 md:py-[80px] flex flex-col gap-8 md:gap-12">

        {/* [ services ] label */}
        <span className="font-mono text-[14px] leading-[1.1] text-white uppercase">
          [ services ]
        </span>

        {/* [4] ←→ DELIVERABLES */}
        <div
          className="flex items-center justify-between text-white font-light uppercase tracking-[-0.08em] whitespace-nowrap"
          style={{ fontSize: "clamp(32px, 6.67vw, 96px)" }}
        >
          <span>[4]</span>
          <span>Deliverables</span>
        </div>

        {/* Service rows */}
        <div className="flex flex-col gap-12">
          {SERVICES.map((s) => (
            <div key={s.num} className="flex flex-col gap-[9px]">
              {/* [ N ] + rule */}
              <span className="font-mono text-[14px] leading-[1.1] text-white uppercase">
                [ {s.num} ]
              </span>
              <div className="h-px bg-white w-full" />

              {/* Desktop: title left / desc+image right — Mobile: stacked */}
              <div className="mt-1 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <p className="font-bold italic text-[36px] text-white tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap">
                  {s.title}
                </p>
                <div className="flex flex-col gap-4 md:flex-row md:gap-6 items-start">
                  <p className="text-[14px] text-white tracking-[-0.04em] leading-[1.3] md:w-[393px]">
                    {SERVICE_DESC}
                  </p>
                  <div className="relative size-[151px] shrink-0 overflow-hidden">
                    <img
                      src={s.img}
                      alt=""
                      className="absolute inset-0 size-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ── SECTION 6: Selected Work / Portfolio ── */}
      <section id="projects" className="bg-[#fafafa] px-4 md:px-8 py-12 md:py-[80px]">

        {/* ── Mobile header ── */}
        <div className="md:hidden flex flex-col gap-4 mb-8 uppercase">
          <span className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f]">[ portfolio ]</span>
          <div className="flex items-start justify-between">
            <div className="font-light text-black tracking-[-0.08em]" style={{ fontSize: "32px", lineHeight: "0.86" }}>
              <p>Selected</p>
              <p>Work</p>
            </div>
            <span className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f]">004</span>
          </div>
        </div>

        {/* ── Desktop header ── */}
        <div className="hidden md:flex items-start justify-between mb-[61px] uppercase">
          <div className="flex gap-[10px] items-start">
            <div className="font-light text-black tracking-[-0.08em]"
                 style={{ fontSize: "clamp(48px, 6.67vw, 96px)", lineHeight: "0.86" }}>
              <p>Selected</p>
              <p>Work</p>
            </div>
            <span className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f] mt-1">004</span>
          </div>
          {/* Vertical [ portfolio ] label */}
          <div className="flex items-center justify-center" style={{ height: "110px", width: "15px" }}>
            <span
              className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f] uppercase whitespace-nowrap"
              style={{ transform: "rotate(-90deg)" }}
            >
              [ portfolio ]
            </span>
          </div>
        </div>

        {/* ── Desktop 2-column staggered grid ── */}
        <div className="hidden md:flex gap-6 items-end">

          {/* Left column: cards 1 & 2 + CTA bracket, justified to fill height */}
          <div className="flex-1 flex flex-col justify-between min-w-0">
            <div className="flex flex-col gap-8">
              {PROJECTS.slice(0, 2).map((p) => (
                <div key={p.title} className="flex flex-col gap-[10px]">
                  <div className="relative overflow-hidden" style={{ height: `${p.desktopH}px` }}>
                    <img src={p.img} alt={p.title} className="absolute inset-0 size-full object-cover" />
                    <div className="absolute bottom-4 left-4 flex gap-3">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[14px] font-medium text-[#111] tracking-[-0.04em] px-2 py-1 rounded-full backdrop-blur-[10px]"
                          style={{ background: "rgba(255,255,255,0.3)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-black text-[36px] text-black tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap">
                      {p.title}
                    </p>
                    <ArrowDiag />
                  </div>
                </div>
              ))}
            </div>

            {/* Bracket CTA */}
            <div className="flex gap-3 items-stretch mt-8" style={{ width: "465px" }}>
              <div className="flex flex-col justify-between shrink-0">
                <BracketCorner deg={0} />
                <BracketCorner deg={-90} />
              </div>
              <div className="flex-1 flex flex-col gap-[10px] py-3 min-w-0">
                <p className="text-[14px] italic text-[#1f1f1f] tracking-[-0.04em] leading-[1.3]">
                  Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
                </p>
                <button className="bg-black text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-full self-start cursor-pointer hover:opacity-80 transition-opacity">
                  Let&apos;s talk
                </button>
              </div>
              <div className="flex flex-col justify-between shrink-0">
                <BracketCorner deg={90} />
                <BracketCorner deg={180} />
              </div>
            </div>
          </div>

          {/* Right column: cards 3 & 4, offset 240px from top */}
          <div className="flex-1 flex flex-col gap-8 min-w-0 pt-[240px]">
            {PROJECTS.slice(2).map((p) => (
              <div key={p.title} className="flex flex-col gap-[10px]">
                <div className="relative overflow-hidden" style={{ height: `${p.desktopH}px` }}>
                  <img src={p.img} alt={p.title} className="absolute inset-0 size-full object-cover" />
                  <div className="absolute bottom-4 left-4 flex gap-3">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[14px] font-medium text-[#111] tracking-[-0.04em] px-2 py-1 rounded-full backdrop-blur-[10px]"
                        style={{ background: "rgba(255,255,255,0.3)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-black text-[36px] text-black tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap">
                    {p.title}
                  </p>
                  <ArrowDiag />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ── Mobile single column ── */}
        <div className="md:hidden flex flex-col gap-6">
          {PROJECTS.map((p) => (
            <div key={p.title} className="flex flex-col gap-[10px]">
              <div className="relative overflow-hidden h-[390px]">
                <img src={p.img} alt={p.title} className="absolute inset-0 size-full object-cover" />
                <div className="absolute bottom-4 left-4 flex gap-3">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[14px] font-medium text-[#111] tracking-[-0.04em] px-2 py-1 rounded-full backdrop-blur-[10px]"
                      style={{ background: "rgba(255,255,255,0.3)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-black text-[24px] text-black tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap">
                  {p.title}
                </p>
                <ArrowDiag />
              </div>
            </div>
          ))}

          {/* Mobile bracket CTA */}
          <div className="flex gap-3 items-stretch mt-2">
            <div className="flex flex-col justify-between shrink-0">
              <BracketCorner deg={0} />
              <BracketCorner deg={-90} />
            </div>
            <div className="flex-1 flex flex-col gap-[10px] py-3 min-w-0">
              <p className="text-[14px] italic text-[#1f1f1f] tracking-[-0.04em] leading-[1.3]">
                Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
              </p>
              <button className="bg-black text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-full self-start cursor-pointer hover:opacity-80 transition-opacity">
                Let&apos;s talk
              </button>
            </div>
            <div className="flex flex-col justify-between items-end shrink-0">
              <BracketCorner deg={90} />
              <BracketCorner deg={180} />
            </div>
          </div>
        </div>

      </section>

      {/* ── SECTION 7: Testimonials ── */}
      <section className="bg-[#fafafa]">

        {/* ── Desktop: scattered absolute cards around centered heading ── */}
        <div className="hidden md:block relative overflow-hidden" style={{ minHeight: "900px" }}>

          {/* Card 1 (Lukas) — behind the heading */}
          <div className="absolute w-[353px]" style={{ left: "46.9%", top: "272px", transform: "rotate(2.9deg)", zIndex: 1 }}>
            <div className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 p-6 rounded-[4px]">
              <img src={TESTIMONIALS[0].logo} alt="" style={{ height: `${TESTIMONIALS[0].logoH}px` }} className="w-auto object-contain" />
              <p className="text-[18px] text-[#1f1f1f] tracking-[-0.04em] leading-[1.3]">{TESTIMONIALS[0].quote}</p>
              <p className="font-black text-[16px] text-black tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap">{TESTIMONIALS[0].name}</p>
            </div>
          </div>

          {/* Heading — behind all cards */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 5 }}>
            <h2
              className="text-black font-medium capitalize text-center tracking-[-0.07em] leading-[1.1]"
              style={{ fontSize: "clamp(96px, 13.75vw, 198px)" }}
            >
              Testimonials
            </h2>
          </div>

          {/* Card 2 (Marko) */}
          <div className="absolute w-[353px]" style={{ left: "7.1%", top: "142px", transform: "rotate(-6.85deg)", zIndex: 20 }}>
            <div className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 p-6 rounded-[4px]">
              <img src={TESTIMONIALS[1].logo} alt="" style={{ height: `${TESTIMONIALS[1].logoH}px` }} className="w-auto object-contain" />
              <p className="text-[18px] text-[#1f1f1f] tracking-[-0.04em] leading-[1.3]">{TESTIMONIALS[1].quote}</p>
              <p className="font-black text-[16px] text-black tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap">{TESTIMONIALS[1].name}</p>
            </div>
          </div>

          {/* Card 3 (Sarah) */}
          <div className="absolute w-[353px]" style={{ left: "21.2%", top: "553px", transform: "rotate(2.23deg)", zIndex: 20 }}>
            <div className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 p-6 rounded-[4px]">
              <img src={TESTIMONIALS[2].logo} alt="" style={{ height: `${TESTIMONIALS[2].logoH}px` }} className="w-auto object-contain" />
              <p className="text-[18px] text-[#1f1f1f] tracking-[-0.04em] leading-[1.3]">{TESTIMONIALS[2].quote}</p>
              <p className="font-black text-[16px] text-black tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap">{TESTIMONIALS[2].name}</p>
            </div>
          </div>

          {/* Card 4 (Sofia) */}
          <div className="absolute w-[353px]" style={{ left: "68.5%", top: "546px", transform: "rotate(-4.15deg)", zIndex: 20 }}>
            <div className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 p-6 rounded-[4px]">
              <img src={TESTIMONIALS[3].logo} alt="" style={{ height: `${TESTIMONIALS[3].logoH}px` }} className="w-auto object-contain" />
              <p className="text-[18px] text-[#1f1f1f] tracking-[-0.04em] leading-[1.3]">{TESTIMONIALS[3].quote}</p>
              <p className="font-black text-[16px] text-black tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap">{TESTIMONIALS[3].name}</p>
            </div>
          </div>

        </div>

        {/* ── Mobile: heading + horizontal scroll of cards ── */}
        <div className="md:hidden px-4 py-[64px]">
          <h2
            className="text-black font-medium capitalize text-center tracking-[-0.07em] mb-8"
            style={{ fontSize: "64px", lineHeight: "0.8" }}
          >
            Testimonials
          </h2>
          <div className="flex gap-4 overflow-x-auto -mx-4 px-4 pb-4">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="shrink-0 w-[260px]"
                style={{ transform: `rotate(${t.mobileRot}deg)` }}
              >
                <div className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 p-6 rounded-[4px]">
                  <img src={t.logo} alt="" style={{ height: `${t.logoH}px` }} className="w-auto object-contain" />
                  <p className="text-[18px] text-[#1f1f1f] tracking-[-0.04em] leading-[1.3]">{t.quote}</p>
                  <p className="font-black text-[16px] text-black tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── SECTION 8: News ── */}
      <section id="news" className="bg-[#f3f3f3] px-4 md:px-8 py-[64px] md:py-[120px]">

        {/* ── Desktop ── */}
        <div className="hidden md:flex items-end justify-between gap-8">

          {/* Rotated vertical title */}
          <div className="flex items-center justify-center shrink-0" style={{ height: "706px", width: "110px" }}>
            <div
              className="font-light text-black uppercase tracking-[-0.08em] whitespace-nowrap text-center"
              style={{ transform: "rotate(-90deg)", fontSize: "clamp(40px, 4.44vw, 64px)", lineHeight: "0.86" }}
            >
              <p>Keep up with my latest</p>
              <p>news &amp; achievements</p>
            </div>
          </div>

          {/* Three news cards with vertical dividers */}
          <div className="flex-1 flex items-start min-w-0">
            {NEWS_ITEMS.map((item, i) => (
              <Fragment key={item.img}>
                {i > 0 && <div className="w-px bg-[#ddd] self-stretch mx-8 shrink-0" />}
                <div
                  className={`flex flex-col gap-4 flex-1 min-w-0${item.offset ? " pt-[120px]" : ""}`}
                >
                  <div className="relative overflow-hidden w-full" style={{ aspectRatio: "353/469" }}>
                    <img src={item.img} alt="" className="absolute inset-0 size-full object-cover" />
                  </div>
                  <p className="text-[14px] text-[#1f1f1f] tracking-[-0.04em] leading-[1.3]">
                    {NEWS_CAPTION}
                  </p>
                  <div className="flex items-center gap-[10px] border-b border-black py-1 self-start">
                    <span className="text-[14px] font-medium text-black tracking-[-0.04em] whitespace-nowrap">
                      Read more
                    </span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ display: "block", flexShrink: 0 }}>
                      <path d="M4.5 13.5L13.5 4.5M13.5 4.5H6M13.5 4.5V12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="md:hidden flex flex-col gap-8">
          <h2
            className="font-light text-black uppercase tracking-[-0.08em]"
            style={{ fontSize: "32px", lineHeight: "0.86" }}
          >
            Keep up with my latest news &amp; achievements
          </h2>
          <div className="flex gap-4 overflow-x-auto -mx-4 px-4 pb-4">
            {NEWS_ITEMS.map((item) => (
              <div key={item.img} className="flex flex-col gap-4 shrink-0 w-[300px]">
                <div className="relative overflow-hidden h-[398px]">
                  <img src={item.img} alt="" className="absolute inset-0 size-full object-cover" />
                </div>
                <p className="text-[14px] text-[#1f1f1f] tracking-[-0.04em] leading-[1.3]">
                  {NEWS_CAPTION}
                </p>
                <div className="flex items-center gap-[10px] border-b border-black py-1 self-start">
                  <span className="text-[14px] font-medium text-black tracking-[-0.04em] whitespace-nowrap">
                    Read more
                  </span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ display: "block", flexShrink: 0 }}>
                    <path d="M4.5 13.5L13.5 4.5M13.5 4.5H6M13.5 4.5V12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── SECTION 9: Footer / Contact ── */}
      <footer id="contact" className="bg-black px-4 md:px-8 pt-12 overflow-hidden">

        {/* ── Desktop ── */}
        <div className="hidden md:flex flex-col gap-[120px]">

          {/* Top block: CTA + social links + rule */}
          <div className="flex flex-col gap-12">
            <div className="flex items-start justify-between">

              {/* Left: headline + button */}
              <div className="flex flex-col gap-3 w-[298px]">
                <p className="text-[24px] text-white tracking-[-0.04em] leading-[1.1] uppercase italic font-light">
                  Have a <span className="font-black not-italic">project</span> in mind?
                </p>
                <button className="border border-white text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-full self-start cursor-pointer hover:bg-white hover:text-black transition-colors">
                  Let&apos;s talk
                </button>
              </div>

              {/* Center: Facebook / Instagram */}
              <div className="text-[18px] text-white tracking-[-0.04em] leading-[1.1] uppercase text-center w-[298px]">
                <p>Facebook</p>
                <p>Instagram</p>
              </div>

              {/* Right: X.com / LinkedIn */}
              <div className="text-[18px] text-white tracking-[-0.04em] leading-[1.1] uppercase text-right w-[298px]">
                <p>X.com</p>
                <p>LinkedIn</p>
              </div>
            </div>

            {/* Rule */}
            <div className="h-px bg-white w-full" />
          </div>

          {/* Bottom block: H.Studio + legal */}
          <div className="flex items-end justify-between">

            {/* H.Studio overflow text with vertical [ Coded By Claude ] label */}
            <div className="relative overflow-hidden flex-1" style={{ height: "219px" }}>
              {/* Vertical label */}
              <div
                className="absolute flex items-center justify-center"
                style={{ width: "15px", height: "160px", left: 0, top: "50%", transform: "translateY(-50%)" }}
              >
                <span
                  className="font-mono text-[14px] text-white uppercase whitespace-nowrap"
                  style={{ transform: "rotate(-90deg)" }}
                >
                  [ Coded By Claude ]
                </span>
              </div>
              {/* Massive H.Studio text, clipped at bottom */}
              <p
                className="absolute font-semibold text-white capitalize whitespace-nowrap"
                style={{
                  fontSize: "290px",
                  lineHeight: "0.8",
                  letterSpacing: "-0.06em",
                  top: "calc(50% + 6.5px)",
                  transform: "translateY(-50%)",
                  left: 0,
                }}
              >
                H.Studio
              </p>
            </div>

            {/* Legal links — bottom-aligned */}
            <div className="flex gap-[34px] items-center pb-8 shrink-0">
              <a href="#" className="text-[12px] text-white tracking-[-0.04em] uppercase underline">Licences</a>
              <a href="#" className="text-[12px] text-white tracking-[-0.04em] uppercase underline">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="md:hidden flex flex-col gap-12">

          {/* Top block: CTA + socials + rule */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-[24px] text-white tracking-[-0.04em] leading-[1.1] uppercase italic font-light">
                Have a <span className="font-black not-italic">project</span> in mind?
              </p>
              <button className="border border-white text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-full self-start cursor-pointer">
                Let&apos;s talk
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {["Facebook", "Instagram", "X.com", "LinkedIn"].map((s) => (
                <p key={s} className="text-[18px] text-white tracking-[-0.04em] leading-[1.1] uppercase">{s}</p>
              ))}
            </div>
            <div className="h-px bg-white w-full" />
          </div>

          {/* Bottom block: legal + coded by claude + H.Studio */}
          <div className="flex flex-col gap-3 overflow-hidden">
            <div className="flex gap-[34px] justify-center">
              <a href="#" className="text-[12px] text-white tracking-[-0.04em] uppercase underline">Licences</a>
              <a href="#" className="text-[12px] text-white tracking-[-0.04em] uppercase underline">Privacy Policy</a>
            </div>
            <span className="font-mono text-[10px] text-white uppercase">[ Coded By Claude ]</span>
            <p
              className="font-semibold text-white capitalize whitespace-nowrap"
              style={{ fontSize: "91px", lineHeight: "0.8", letterSpacing: "-0.06em" }}
            >
              H.Studio
            </p>
          </div>
        </div>

      </footer>

    </main>
  );
}
