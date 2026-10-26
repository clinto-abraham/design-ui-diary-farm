"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Milk,
  Layers,
  Award,
  CheckCircle2,
  Calendar,
  DollarSign,
  Compass,
  Layout,
  ExternalLink,
} from "lucide-react";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";

const DESIGN_CARDS = [
  {
    id: "design-1",
    num: "01",
    title: "Swiss Minimalist",
    subtitle: "Precision Agritech & Architectural Grids",
    palette: ["#121212", "#ffffff", "#10b981", "#737373"],
    badge: "Minimalist & Clean",
    badgeColor: "bg-neutral-800 text-neutral-200 border-neutral-700",
    persona: "Corporate Agritech & European Investors",
    highlights: ["Monochrome typography", "Clean SVG bar graph", "Actuarial cohort ledger"],
  },
  {
    id: "design-2",
    num: "02",
    title: "Dark FinTech Terminal",
    subtitle: "Wall-Street Quant & Real-Time Telemetry",
    palette: ["#060a12", "#0b1324", "#10b981", "#06b6d4"],
    badge: "Quant & Bloomberg",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    persona: "Hedge Funds & High-Yield Investors",
    highlights: ["Live ticker tape", "Glowing yield curve", "CAGR / APY indicators"],
  },
  {
    id: "design-3",
    num: "03",
    title: "Vedic Organic Heritage",
    subtitle: "Earthy Terracotta, Sand & Desi Lineage",
    palette: ["#2d4a22", "#963e18", "#faf7f0", "#c98a2c"],
    badge: "Artisanal & Desi",
    badgeColor: "bg-amber-600/20 text-amber-300 border-amber-600/30",
    persona: "Organic Milk Consumers & Heritage Families",
    highlights: ["Parchment card styling", "Sacred Gau-Dhan thesis", "Warm Ayurvedic tones"],
  },
  {
    id: "design-4",
    num: "04",
    title: "Cyber Emerald Glass",
    subtitle: "Frosted Glassmorphism & Neon Mint Glow",
    palette: ["#031013", "#072127", "#2dd4bf", "#10b981"],
    badge: "Modern Glassmorphic",
    badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/30",
    persona: "Tech Founders & Web3 Agri-Investors",
    highlights: ["Aero glass backdrops", "Neon radial halos", "Cyber biological telemetry"],
  },
  {
    id: "design-5",
    num: "05",
    title: "Simulator & Dashboard",
    subtitle: "Live Range Sliders & Cashflow Engine",
    palette: ["#0b0f19", "#12192c", "#6366f1", "#10b981"],
    badge: "Interactive SaaS",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    persona: "CFOs, Analysts & Strategic Planners",
    highlights: ["Interactive capital sliders", "Live recalculations", "Multi-tab ledger"],
  },
  {
    id: "design-6",
    num: "06",
    title: "Neo-Brutalist Venture",
    subtitle: "Heavy Black Borders, High Contrast & Pop Shadows",
    palette: ["#fef08a", "#000000", "#4ade80", "#fb923c"],
    badge: "High-Energy Startup",
    badgeColor: "bg-yellow-400/20 text-yellow-300 border-yellow-400/40",
    persona: "Gen-Z Agri-Preneurs & Direct Investors",
    highlights: ["Chunky offset shadows", "Aggressive typography", "Sticker-style badges"],
  },
  {
    id: "design-7",
    num: "07",
    title: "Pastoral Luxury Club",
    subtitle: "British Racing Green & Regal Gold Crest",
    palette: ["#081710", "#0c2317", "#d4af37", "#f4f2ea"],
    badge: "Private Estate Club",
    badgeColor: "bg-yellow-600/10 text-yellow-300 border-yellow-600/30",
    persona: "Ultra-HNWIs & Family Offices",
    highlights: ["Serif typography", "Gold seal accents", "Private placement memorandum"],
  },
  {
    id: "design-8",
    num: "08",
    title: "Mobile-First SaaS Stack",
    subtitle: "App Viewport Mockup & Push Alert Banners",
    palette: ["#020617", "#0f172a", "#3b82f6", "#10b981"],
    badge: "Mobile App Frame",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    persona: "Mobile-Only Investors & Smartphone Users",
    highlights: ["Simulated phone viewport", "Sticky bottom sheet", "Thumb-friendly pills"],
  },
  {
    id: "design-9",
    num: "09",
    title: "Generational Storyline",
    subtitle: "Chronicles of Gauri & Her 88 Descendants",
    palette: ["#11141b", "#1a1f2c", "#f97316", "#10b981"],
    badge: "Narrative & Editorial",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    persona: "Impact Investors & Family Legacies",
    highlights: ["Generational family tree", "Story chapter timeline", "Emotional hook"],
  },
  {
    id: "design-10",
    num: "10",
    title: "Futuristic Bio-Matrix",
    subtitle: "AI Robotic Milking HUD & Genome Telemetry",
    palette: ["#050508", "#0a0a16", "#d946ef", "#06b6d4"],
    badge: "Sci-Fi HUD Agritech",
    badgeColor: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30",
    persona: "Biotech & DeepTech Enthusiasts",
    highlights: ["Scanline CRT overlay", "Robotic milking telemetry", "DNA sequence indicators"],
  },
  {
    id: "design-11",
    num: "11",
    title: "Nordic Minimalist & Hygge",
    subtitle: "Sage Green, Birch Ivory & Tranquil Calm",
    palette: ["#263628", "#f8f7f4", "#ede8df", "#6c7d6e"],
    badge: "Scandinavian Calm",
    badgeColor: "bg-emerald-900/20 text-emerald-300 border-emerald-800/40",
    persona: "Sustainable Living & Ethical Dairy Seekers",
    highlights: ["Soft organic curves", "Humane livestock protocol", "Subtle pastel sage tone"],
  },
  {
    id: "design-12",
    num: "12",
    title: "Retro 80s Synthwave",
    subtitle: "Neon Sunset, Laser Horizon & Arcade Counters",
    palette: ["#0d071d", "#f43f5e", "#8b5cf6", "#06b6d4"],
    badge: "Synthwave Arcade",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    persona: "Retro Gamers & Creative Technologists",
    highlights: ["Cyber sunset grid", "Arcade high-score board", "Neon gradient typography"],
  },
  {
    id: "design-13",
    num: "13",
    title: "Japanese Wabi-Sabi",
    subtitle: "Zen Harmony, Earth Charcoal & Stone Flow",
    palette: ["#141413", "#a87845", "#e8e5df", "#282725"],
    badge: "Zen Minimalist",
    badgeColor: "bg-stone-500/10 text-stone-300 border-stone-500/30",
    persona: "Philosophical Long-Term Investors",
    highlights: ["Seasonal harvest cycles", "Asymmetric calm layout", "Mindful animal reverence"],
  },
  {
    id: "design-14",
    num: "14",
    title: "Wall St. PE Pitchbook",
    subtitle: "Institutional Equity Deck & Balance Sheet",
    palette: ["#071326", "#0a1e3b", "#c5a059", "#ffffff"],
    badge: "Private Equity",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    persona: "Institutional LPs & Accredited Angels",
    highlights: ["Formal SEC-style memorandum", "Balance sheet ledger", "16.25x MOIC metrics"],
  },
  {
    id: "design-15",
    num: "15",
    title: "Solarpunk Eco-Farm",
    subtitle: "Solar Gold, Biogas Power & Zero-Carbon",
    palette: ["#f3faf4", "#15803d", "#ca8a04", "#dcfce7"],
    badge: "Zero-Carbon Eco",
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/30",
    persona: "ESG Funds & Regenerative Farm Advocates",
    highlights: ["Solar power telemetry", "Biogas circular flows", "Net-zero footprint badges"],
  },
  {
    id: "design-16",
    num: "16",
    title: "Art Deco Gilded Guild",
    subtitle: "1920s Gatsby Filigree, Gilded Gold & Onyx",
    palette: ["#0a0c10", "#e5b842", "#141720", "#f2e6cb"],
    badge: "Roaring 20s Luxury",
    badgeColor: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
    persona: "Luxury Connoisseurs & Heritage Estates",
    highlights: ["Geometric art deco borders", "Gilded step charts", "Master Breeder Guild Seal"],
  },
  {
    id: "design-17",
    num: "17",
    title: "RPG Herd Tycoon",
    subtitle: "Gamified Farm Quest, XP Levels & Boss Loot",
    palette: ["#110724", "#a855f7", "#ec4899", "#facc15"],
    badge: "Gamified Quest",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    persona: "Next-Gen Mobile Tycoon Gamers",
    highlights: ["Level 1 to 10 progression", "Loot drop calculation", "Gold coin counters"],
  },
  {
    id: "design-18",
    num: "18",
    title: "High-Craft Magazine",
    subtitle: "Kinfolk & Cereal Coffee Table Typography",
    palette: ["#f9f8f6", "#1f1e1d", "#787571", "#e8e6e1"],
    badge: "Editorial Anthology",
    badgeColor: "bg-neutral-800 text-neutral-200 border-neutral-700",
    persona: "Design Aficionados & Discerning Collectors",
    highlights: ["Drop-cap editorial essays", "Generous whitespace", "Quiet geometry of growth"],
  },
  {
    id: "design-19",
    num: "19",
    title: "Blueprint & CAD Spec",
    subtitle: "Architectural Drafting, Callouts & Schematics",
    palette: ["#07162c", "#091f3d", "#00d2ff", "#ffffff"],
    badge: "Industrial CAD",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    persona: "Engineers, Architects & Technical Operators",
    highlights: ["Engineering CAD linework", "Bill of materials (BOM)", "Hydraulic milk flow spec"],
  },
  {
    id: "design-20",
    num: "20",
    title: "Neumorphic Soft UI",
    subtitle: "Soft Embossed Clay, Inset Displays & 3D Tactile",
    palette: ["#e8edf2", "#4f46e5", "#10b981", "#1a202c"],
    badge: "Soft 3D Clay",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    persona: "Product Designers & Contemporary SaaS Users",
    highlights: ["Extruded dual-shadow cards", "Inset sunken LCD displays", "Tactile push buttons"],
  },
];

export default function Home() {
  const projections = calculate10YearProjection(DEFAULT_CONFIG);

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 font-sans selection:bg-emerald-500 selection:text-black">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 border-b border-slate-800 py-2.5 px-6 text-center text-xs text-slate-300">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <strong>HIRA DIARY FARM MANAGEMENT SYSTEM:</strong> 20 Unique UI/UX Designs Ready for Client Review
        </span>
      </div>

      {/* Main Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-black font-extrabold text-lg shadow-lg shadow-emerald-500/20">
              H
            </div>
            <div>
              <span className="font-extrabold text-white text-base tracking-tight block">
                HIRA DIARY FARM SOFTWARE
              </span>
              <span className="text-[11px] text-emerald-400 font-mono tracking-wider">
                DESIGN SUITE // 20 THEMES
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#thesis"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-800 bg-slate-900 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-700 transition"
            >
              10-Year Compounding Model
            </a>
            <a
              href="#catalog"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/30"
            >
              Browse 20 Designs &darr;
            </a>
          </div>
        </div>
      </header>

      {/* Hero Showcase */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <Award className="w-3.5 h-3.5" /> Client Presentation Suite &bull; 20 UI Archetypes
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              20 Distinct UI Themes for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Hira Dairy Farm Software.
              </span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              Each design delivers a completely different visual identity, typography, mood, and conversion funnel for the <strong>₹2 Lacs Buffalo + Calf</strong> 10-year compounding business plan.
            </p>

            <div className="pt-2 grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-6">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-mono block">Entry Pack</span>
                <span className="text-lg font-bold text-white">₹2,00,000</span>
                <span className="text-[10px] text-emerald-400 block">1 Buffalo + 1 Calf</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-mono block">Yr 10 Herd</span>
                <span className="text-lg font-bold text-emerald-400">88 Animals</span>
                <span className="text-[10px] text-slate-400 block">via AI Insemination</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-mono block">Yr 10 Milk Sales</span>
                <span className="text-lg font-bold text-cyan-400">₹82.32 Lacs</span>
                <span className="text-[10px] text-slate-400 block">per year turnover</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-4 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800">
                <Image
                  src="/Murrah_buffalo.JPG"
                  alt="Murrah Buffalo & Calf"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs bg-slate-900/90 backdrop-blur px-3 py-1.5 rounded-xl border border-slate-700">
                  <span className="font-semibold text-white">Murrah Pure-Breed Pair</span>
                  <span className="text-emerald-400 font-mono font-bold">14 L / Day Avg</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300">
                <strong className="text-emerald-400">Biological Compounding:</strong> Mothers bear 1 calf every year. Calves mature at age 3 and bear children. In 10 years, 1 mother & calf expands to <strong>88 animals</strong> generating <strong>&gt; ₹3.25 Crore</strong> in cumulative wealth.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 20-Design Cards Showcase */}
      <section id="catalog" className="max-w-7xl mx-auto px-6 py-16 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Interactive Design Gallery
            </span>
            <h2 className="text-3xl font-bold text-white mt-1">
              Select Any of the 20 Complete Design Experiences
            </h2>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            20 of 20 Unique Themes Live
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DESIGN_CARDS.map((item) => (
            <Link
              key={item.id}
              href={`/${item.id}`}
              className="group rounded-3xl border border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-slate-950 p-5 flex flex-col justify-between hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                    DESIGN {item.num}
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>

                {/* Color Palette Indicators */}
                <div className="flex items-center gap-1.5 pt-1">
                  <span className="text-[10px] text-slate-500 font-mono mr-1">Palette:</span>
                  {item.palette.map((color, cIdx) => (
                    <span
                      key={cIdx}
                      style={{ backgroundColor: color }}
                      className="w-3.5 h-3.5 rounded-full border border-slate-700 shadow-sm inline-block"
                      title={color}
                    />
                  ))}
                </div>

                {/* Key Highlights */}
                <div className="pt-2 border-t border-slate-800/80 space-y-1">
                  <span className="text-[10px] uppercase font-mono text-slate-500 block">
                    Ideal: {item.persona}
                  </span>
                  <div className="space-y-1 text-xs text-slate-300">
                    {item.highlights.slice(0, 2).map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                <span>View Design {item.num}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 10-Year Compounding Model Explainer */}
      <section id="thesis" className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-800 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            The Mathematical Thesis
          </span>
          <h2 className="text-3xl font-bold text-white">
            How ₹2 Lacs Compounds Into 88 Animals in 10 Years
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every mature adult buffalo (age &ge; 3) gives birth to a female calf every year via sex-sorted AI. Every born calf matures after exactly 3 years, begins yielding milk, and starts bearing children herself.
          </p>
        </div>

        {/* 10-Year Progression Table */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-2xl">
          <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>OFFICIAL 10-YEAR COMPOUNDING TIMELINE (₹2,00,000 STARTER ALLOCATION)</span>
            <span className="text-emerald-400">A2 MILK @ ₹70/LITER</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400">
                <tr>
                  <th className="p-3">YEAR</th>
                  <th className="p-3">MILKING ADULTS (AGE &ge; 3)</th>
                  <th className="p-3">HEIFERS (AGE 1-2)</th>
                  <th className="p-3">NEW CALVES (AGE 0)</th>
                  <th className="p-3">TOTAL HERD</th>
                  <th className="p-3">ANNUAL MILK</th>
                  <th className="p-3">ANNUAL REVENUE</th>
                  <th className="p-3">CUMULATIVE MILK</th>
                  <th className="p-3">HERD ASSET VALUE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {projections.map((p) => (
                  <tr key={p.year} className="hover:bg-slate-800/40 transition">
                    <td className="p-3 font-bold text-white">Year {p.year}</td>
                    <td className="p-3 text-emerald-400 font-bold">{p.matureBuffaloes}</td>
                    <td className="p-3">{p.growingHeifers}</td>
                    <td className="p-3">+{p.calvesBornThisYear}</td>
                    <td className="p-3 font-bold text-white">{p.totalHerdSize}</td>
                    <td className="p-3">{p.annualMilkProductionLiters.toLocaleString()} L</td>
                    <td className="p-3 text-emerald-400 font-bold">{formatINR(p.grossMilkingRevenueINR)}</td>
                    <td className="p-3 text-cyan-300">{formatINR(p.cumulativeMilkRevenueINR)}</td>
                    <td className="p-3 text-indigo-300">{formatINR(p.herdAssetValueINR)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 text-xs text-slate-500 font-mono text-center">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <p>HIRA DIARY FARM MANAGEMENT SYSTEM &bull; 20 DESIGNS FOR CLIENT EVALUATION</p>
          <p className="text-slate-600">Built with Next.js & Tailwind CSS. All 20 designs fully responsive and interactive.</p>
        </div>
      </footer>
    </div>
  );
}
