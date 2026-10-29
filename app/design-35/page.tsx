"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Store,
  Sparkles,
  Award,
  Layers,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export default function Design35Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#112419] text-[#fef3c7] font-sans antialiased selection:bg-[#ea580c] selection:text-white">
      {/* Halwai Banner */}
      <div className="bg-[#0b1710] border-b border-[#ea580c]/30 py-2.5 px-6 flex items-center justify-between text-xs text-[#fed7aa] font-bold">
        <span>🍮 8% HIGH-FAT MAWA & KHOYA SUPPLY FOR INDIAN MITHAI &bull; YEAR-ROUND HALWAI OFF-TAKE GUARANTEE</span>
        <span className="hidden sm:inline-block text-[#facc15]">FESTIVE PREMIUM: DIWALI &bull; WEDDINGS</span>
      </div>

      {/* Header */}
      <header className="border-b border-[#ea580c]/20 bg-[#112419]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#ea580c] to-[#facc15] text-black font-black flex items-center justify-center text-lg shadow-lg">
              मि
            </div>
            <div>
              <span className="font-extrabold text-xl text-white block tracking-tight">
                HIRA MITHAI SYNDICATE
              </span>
              <span className="text-[10px] text-[#fed7aa] font-bold uppercase tracking-wider">
                B2B Commercial Halwai Dairy Supply // 35
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs font-bold">
            <Link href="/" className="text-[#fed7aa] hover:text-white transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#mithai-schedule"
              className="px-5 py-2.5 rounded-2xl bg-[#ea580c] text-white hover:bg-[#c2410c] transition shadow-lg shadow-orange-600/30"
            >
              CONTRACT ₹2L MITHAI PACK
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-3xl border-2 border-[#ea580c]/30 bg-gradient-to-b from-[#183625] to-[#0f2117] p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea580c]/20 border border-[#ea580c]/40 text-[#fed7aa] text-xs font-bold">
            <Store className="w-3.5 h-3.5" /> High-Fat Mawa & Khoya Milk Pipeline
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            The Halwai Sweet Gold: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] via-[#facc15] to-[#fed7aa]">
              ₹2L Capital Scales to 88 Fat-Rich Buffaloes.
            </span>
          </h1>

          <p className="text-[#fef3c7]/80 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Every Indian wedding and festive season consumes metric tons of pure Khoya, Paneer, and Mawa. Cow milk lacks the fat percentage required for premium sweets—only Murrah buffalo milk with 7.5% - 8.5% fat delivers authentic Halwai consistency. 1 Mother + 1 Calf scales to 88 animals and ₹82.32 Lacs annual turnover with guaranteed B2B off-take.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-[#ea580c]/20 text-xs font-bold">
            <div className="p-4 rounded-2xl bg-[#0b1710] border border-[#ea580c]/30">
              <span className="text-[#fed7aa] uppercase text-[10px] block">Commercial Unit</span>
              <span className="text-xl font-black text-white mt-1 block">₹2,00,000</span>
              <span className="text-[#fef3c7]/60 text-[10px]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#0b1710] border border-[#ea580c]/30">
              <span className="text-[#fed7aa] uppercase text-[10px] block">10-Year Herd</span>
              <span className="text-xl font-black text-[#facc15] mt-1 block">88 Animals</span>
              <span className="text-[#fef3c7]/60 text-[10px]">High Fat Lineage</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#0b1710] border border-[#ea580c]/30">
              <span className="text-[#fed7aa] uppercase text-[10px] block">Yr 10 Milk Sales</span>
              <span className="text-xl font-black text-white mt-1 block">₹82.32 Lacs</span>
              <span className="text-[#fef3c7]/60 text-[10px]">Commercial B2B Run-Rate</span>
            </div>
          </div>
        </div>

        {/* 10-Year Horizon */}
        <section id="mithai-schedule" className="rounded-3xl border border-[#ea580c]/30 bg-[#142b1e] p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#ea580c]/20 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#fed7aa]">
                B2B SWEETMAKER OFF-TAKE HORIZON
              </span>
              <h2 className="text-2xl font-black text-white mt-0.5">
                Inspect 10-Year Production Scaling
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded-xl font-bold transition ${
                    p.year === selectedYear
                      ? "bg-[#ea580c] text-white shadow-md"
                      : "bg-[#0c1a12] text-[#fef3c7] hover:bg-[#1a3827]"
                  }`}
                >
                  Yr {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 text-xs font-bold">
            <div className="p-4 rounded-2xl bg-[#0c1a12] border border-[#ea580c]/20">
              <span className="text-[#fed7aa] uppercase text-[10px] block">TOTAL BUFFALOES</span>
              <span className="text-3xl font-black text-white block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-[#facc15] text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0c1a12] border border-[#ea580c]/20">
              <span className="text-[#fed7aa] uppercase text-[10px] block">DAILY FAT-MILK SUPPLY</span>
              <span className="text-3xl font-black text-[#facc15] block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span suppressHydrationWarning className="text-[#fef3c7]/70 text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString('en-IN')} L / yr
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0c1a12] border border-[#ea580c]/20">
              <span className="text-[#fed7aa] uppercase text-[10px] block">ANNUAL MILK SALES</span>
              <span className="text-3xl font-black text-white block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-[#fef3c7]/70 text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0c1a12] border border-[#ea580c]/20">
              <span className="text-[#fed7aa] uppercase text-[10px] block">TOTAL CAPITAL ASSET</span>
              <span className="text-3xl font-black text-[#facc15] block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-[#fef3c7]/70 text-[11px] block mt-1">Livestock Value + Net Profit</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0c1a12] border-l-2 border-[#ea580c] text-xs text-[#fef3c7]">
            <strong className="text-[#ea580c]">Year {active.year} Mithai Off-take:</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-35" />
    </div>
  );
}
