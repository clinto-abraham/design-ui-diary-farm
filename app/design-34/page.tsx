"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Crown,
  Shield,
  Award,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function Design34Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#081326] text-[#fef3c7] font-serif antialiased selection:bg-[#fbbf24] selection:text-black">
      {/* Top Banner */}
      <div className="bg-[#0b1d3a] border-b border-[#fbbf24]/30 py-2.5 px-6 text-center text-xs tracking-widest text-[#fde68a] uppercase font-sans">
        &diams; ROYAL RAJPUTANA HAVELI ESTATE &bull; JODHPUR & JAISALMER NOBLE LINEAGE &bull; SOVEREIGN HERD &diams;
      </div>

      {/* Header */}
      <header className="border-b border-[#fbbf24]/20 bg-[#081326]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl border-2 border-[#fbbf24] bg-[#102a52] flex items-center justify-center text-[#fbbf24] font-bold text-lg shadow-lg">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg text-white block tracking-wide font-serif">
                HIRA HAVELI ESTATE
              </span>
              <span className="text-[10px] text-[#fbbf24] uppercase tracking-wider font-sans">
                Royal Rajasthani Heritage // 34
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6 font-sans text-xs">
            <Link href="/" className="text-[#fde68a] hover:text-white transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#haveli-horizon"
              className="px-5 py-2.5 rounded-full bg-[#fbbf24] text-black font-bold uppercase tracking-wider hover:bg-[#f59e0b] transition shadow-lg"
            >
              Acquire ₹2L Haveli Unit
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-3xl border-2 border-[#fbbf24]/30 bg-gradient-to-b from-[#102a52] to-[#0a1830] p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="inline-block px-4 py-1 rounded-full border border-[#fbbf24]/40 bg-[#16386d] text-[#fbbf24] text-xs font-sans tracking-widest uppercase">
            &diams; ARISTOCRATIC HERD HOLDING &diams;
          </div>

          <h1 className="text-4xl sm:text-6xl text-white tracking-tight leading-tight font-serif">
            A Royal Dairy Legacy: <br />
            <span className="italic text-[#fbbf24]">From One Noble Pair &rarr; 88 Head of Cattle.</span>
          </h1>

          <p className="text-[#fef3c7]/80 text-base leading-relaxed font-sans font-light max-w-2xl">
            In the desert fortresses of Rajasthan, noble families measured their resilience through fortified herds. An investment of ₹2,00,000 initiates an elite Murrah lineage: 1 prime lactating mother yielding 14L of pure A2 milk, and 1 pedigree female calf. In 10 years, generational compounding expands your herd to 88 head generating ₹82.32 Lacs annual revenue.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-[#fbbf24]/20 font-sans text-xs">
            <div className="p-4 rounded-2xl bg-[#071326] border border-[#fbbf24]/30">
              <span className="text-[#fde68a] uppercase text-[10px] block">Noble Unit</span>
              <span className="text-xl font-bold text-[#fbbf24] mt-1 block">₹2,00,000</span>
              <span className="text-[#fef3c7]/60 text-[10px]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#071326] border border-[#fbbf24]/30">
              <span className="text-[#fde68a] uppercase text-[10px] block">10-Year Estate</span>
              <span className="text-xl font-bold text-white mt-1 block">88 Animals</span>
              <span className="text-[#fef3c7]/60 text-[10px]">Royal Lineage</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#071326] border border-[#fbbf24]/30">
              <span className="text-[#fde68a] uppercase text-[10px] block">Year 10 Milk Gold</span>
              <span className="text-xl font-bold text-[#fbbf24] mt-1 block">₹82.32 Lacs</span>
              <span className="text-[#fef3c7]/60 text-[10px]">Annual Milk Revenue</span>
            </div>
          </div>
        </div>

        {/* 10-Year Horizon */}
        <section id="haveli-horizon" className="rounded-3xl border border-[#fbbf24]/30 bg-[#0c2242] p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#fbbf24]/20 pb-4 font-sans">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#fbbf24] font-semibold">
                Ten Years of Royal Compounding
              </span>
              <h2 className="text-2xl font-serif text-white mt-0.5">
                Inspect 10-Year Haveli Estate
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
                      : "bg-[#061326] text-[#fde68a] hover:bg-[#12315e]"
                  }`}
                >
                  Year {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 font-sans text-xs">
            <div className="p-4 rounded-2xl bg-[#061326] border border-[#fbbf24]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">TOTAL HERD</span>
              <span className="text-3xl font-serif text-white block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-[#fbbf24] text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#061326] border border-[#fbbf24]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">DAILY MILK YIELD</span>
              <span className="text-3xl font-serif text-[#fbbf24] block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span className="text-[#fef3c7]/70 text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString()} L / yr
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#061326] border border-[#fbbf24]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">ANNUAL MILK SALES</span>
              <span className="text-3xl font-serif text-white block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-[#fef3c7]/70 text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#061326] border border-[#fbbf24]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">TOTAL HAVELI CAPITAL</span>
              <span className="text-3xl font-serif text-[#fbbf24] block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-[#fef3c7]/70 text-[11px] block mt-1">Livestock Value + Milk Net</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#061326] border-l-2 border-[#fbbf24] text-xs font-sans text-[#fde68a]">
            <strong>Year {active.year} Haveli Chronicle:</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-34" />
    </div>
  );
}
