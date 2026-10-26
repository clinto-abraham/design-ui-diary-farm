"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Shield,
  Award,
  Crown,
  Heart,
  Calendar,
  Layers,
} from "lucide-react";

export default function Design28Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#0f0e26] text-[#fef3c7] font-serif antialiased selection:bg-[#fbbf24] selection:text-black">
      {/* Top Bar */}
      <div className="bg-[#18163f] border-b border-[#fbbf24]/20 py-2 px-6 flex items-center justify-between text-xs text-[#fde68a] font-sans tracking-widest uppercase">
        <span>॥ પારિવારિક સંપત્તિ ॥ MARWARI PARIVAAR TRUST &bull; 10-YEAR GENERATIONAL HERD</span>
        <span className="hidden sm:inline-block">ZERO SPECULATION &bull; 100% REAL ASSET</span>
      </div>

      {/* Header */}
      <header className="border-b border-[#fbbf24]/20 bg-[#0f0e26]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl border border-[#fbbf24] bg-[#1e1b4b] flex items-center justify-center text-[#fbbf24] font-bold text-lg shadow-lg">
              न्या
            </div>
            <div>
              <span className="font-bold text-lg text-white block tracking-wide font-serif">
                HIRA MARWARI TRUST
              </span>
              <span className="text-[10px] text-[#fbbf24] uppercase tracking-wider font-sans">
                Generational Family Office // 28
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6 font-sans text-xs">
            <Link href="/" className="text-[#fde68a] hover:text-white transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#marwari-ledger"
              className="px-5 py-2.5 rounded-full bg-[#fbbf24] text-black font-bold uppercase tracking-wider hover:bg-[#f59e0b] transition shadow-lg"
            >
              Allocate ₹2,00,000 Trust Unit
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-3xl border border-[#fbbf24]/30 bg-gradient-to-b from-[#1b1747] to-[#120f30] p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="inline-block px-4 py-1 rounded-full border border-[#fbbf24]/40 bg-[#1e1b4b] text-[#fbbf24] text-xs font-sans tracking-widest uppercase">
            &diams; HUNDRED-YEAR WEALTH WISDOM &diams;
          </div>

          <h1 className="text-4xl sm:text-6xl text-white tracking-tight leading-tight font-serif">
            Generational Parivaar Trust: <br />
            <span className="italic text-[#fbbf24]">₹2 Lacs Capital &rarr; 88 Head of Cattle.</span>
          </h1>

          <p className="text-[#fef3c7]/80 text-base leading-relaxed font-sans font-light max-w-2xl">
            In Marwari business lineages, true wealth is never gambled on speculative bubbles. It is preserved in foundational, productive tangible assets. 1 Murrah buffalo and 1 female calf generate inflation-proof daily milk income while expanding into an 88-animal family estate worth over ₹3.25 Crore in 10 years.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-[#fbbf24]/20 font-sans text-xs">
            <div className="p-4 rounded-2xl bg-[#0c0b20] border border-[#fbbf24]/30">
              <span className="text-[#fde68a] uppercase text-[10px] block">Parivaar Capital</span>
              <span className="text-xl font-bold text-[#fbbf24] mt-1 block">₹2,00,000</span>
              <span className="text-[#fef3c7]/60 text-[10px]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#0c0b20] border border-[#fbbf24]/30">
              <span className="text-[#fde68a] uppercase text-[10px] block">10-Year Lineage</span>
              <span className="text-xl font-bold text-white mt-1 block">88 Animals</span>
              <span className="text-[#fef3c7]/60 text-[10px]">Pure Murrah Genetics</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#0c0b20] border border-[#fbbf24]/30">
              <span className="text-[#fde68a] uppercase text-[10px] block">Year 10 Milk Gold</span>
              <span className="text-xl font-bold text-[#fbbf24] mt-1 block">₹82.32 Lacs</span>
              <span className="text-[#fef3c7]/60 text-[10px]">Annual Cash Turnover</span>
            </div>
          </div>
        </div>

        {/* 10-Year Horizon */}
        <section id="marwari-ledger" className="rounded-3xl border border-[#fbbf24]/30 bg-[#151336] p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#fbbf24]/20 pb-4 font-sans">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#fbbf24] font-semibold">
                Ten-Year Lineage Ledger
              </span>
              <h2 className="text-2xl font-serif text-white mt-0.5">
                Inspect 10-Year Estate Growth
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded-full transition font-semibold ${
                    p.year === selectedYear
                      ? "bg-[#fbbf24] text-black shadow-md"
                      : "bg-[#0b0a1c] text-[#fde68a] hover:bg-[#1a1744]"
                  }`}
                >
                  Year {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 font-sans text-xs">
            <div className="p-4 rounded-2xl bg-[#0b0a1c] border border-[#fbbf24]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">TOTAL HERD</span>
              <span className="text-3xl font-serif text-white block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-[#fbbf24] text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0b0a1c] border border-[#fbbf24]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">DAILY MILK RUN</span>
              <span className="text-3xl font-serif text-[#fbbf24] block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span className="text-[#fef3c7]/70 text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString()} L / yr
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0b0a1c] border border-[#fbbf24]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">ANNUAL MILK SALES</span>
              <span className="text-3xl font-serif text-white block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-[#fef3c7]/70 text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0b0a1c] border border-[#fbbf24]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">TOTAL PARIVAAR CAPITAL</span>
              <span className="text-3xl font-serif text-[#fbbf24] block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-[#fef3c7]/70 text-[11px] block mt-1">Livestock Value + Net Profit</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0b0a1c] border-l-2 border-[#fbbf24] text-xs font-sans text-[#fde68a]">
            <strong>Year {active.year} Milestone:</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-28" />
    </div>
  );
}
