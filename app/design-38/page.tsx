"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Palmtree,
  Droplet,
  Sun,
  Shield,
  Layers,
} from "lucide-react";

export default function Design38Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#07251e] text-[#ecfdf5] font-sans antialiased selection:bg-[#10b981] selection:text-black">
      {/* Kerala Backwaters Top Ribbon */}
      <div className="bg-[#051c17] border-b border-emerald-500/20 py-2.5 px-6 flex items-center justify-between text-xs text-emerald-300 font-medium">
        <span>🌴 GOD&apos;S OWN DAIRY &bull; TROPICAL BACKWATER GRAZING &bull; HIGH-FAT A2 MALABAR HERD</span>
        <span className="hidden sm:inline-block text-amber-300">AYURVEDIC RESORT SUPPLY</span>
      </div>

      {/* Header */}
      <header className="border-b border-emerald-500/20 bg-[#07251e]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
              <Palmtree className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <span className="font-extrabold text-white text-base tracking-tight block">
                HIRA KERALA GROVE
              </span>
              <span className="text-[10px] text-emerald-400 font-mono tracking-wider">
                God&apos;s Own Dairy Estate // 38
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono">
            <Link href="/" className="text-emerald-300 hover:text-white transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#kerala-schedule"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-bold uppercase tracking-wider hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/30"
            >
              Acquire ₹2L Grove Unit
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-[#0d3b30] to-[#07251e] p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
            <Droplet className="w-3.5 h-3.5" /> High-Rainfall Lush Green Fodder Ecosystem
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            God&apos;s Own Green Gold: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200">
              ₹2L Capital Scales to 88 Murrah Cattle.
            </span>
          </h1>

          <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            In the fertile coconut groves and river valleys of Kerala, dairy demand commands premium prices across coastal resorts, Ayurvedic retreats, and traditional households. 1 Mother Buffalo + 1 Calf multiplies through scientific AI into an 88-animal tropical herd generating ₹82.32 Lacs annual turnover.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-emerald-500/20 text-xs font-mono">
            <div className="p-3.5 bg-[#051c17] border border-emerald-500/30 rounded-xl">
              <span className="text-emerald-400 text-[10px] uppercase block">Grove Pack</span>
              <span className="text-xl font-bold text-white mt-1 block">₹2,00,000</span>
              <span className="text-emerald-300/70 text-[10px]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-3.5 bg-[#051c17] border border-emerald-500/30 rounded-xl">
              <span className="text-emerald-400 text-[10px] uppercase block">10-Year Herd</span>
              <span className="text-xl font-bold text-emerald-300 mt-1 block">88 Animals</span>
              <span className="text-emerald-300/70 text-[10px]">Tropical Grazed</span>
            </div>
            <div className="p-3.5 bg-[#051c17] border border-emerald-500/30 rounded-xl">
              <span className="text-emerald-400 text-[10px] uppercase block">Year 10 Milk Sales</span>
              <span className="text-xl font-bold text-amber-300 mt-1 block">₹82.32 Lacs</span>
              <span className="text-emerald-300/70 text-[10px]">Annual Milk Cashflow</span>
            </div>
          </div>
        </div>

        {/* 10-Year Horizon */}
        <section id="kerala-schedule" className="rounded-3xl border border-emerald-500/30 bg-[#0a3128] p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-500/20 pb-4">
            <div>
              <span className="text-xs font-mono uppercase text-emerald-300 tracking-wider">
                10-YEAR TROPICAL HERD HORIZON
              </span>
              <h2 className="text-2xl font-bold text-white mt-0.5">
                Inspect 10-Year Compounding Model
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 font-mono text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition ${
                    p.year === selectedYear
                      ? "bg-emerald-500 text-black shadow-md"
                      : "bg-[#061e18] text-emerald-200 hover:text-white"
                  }`}
                >
                  Yr {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#061e18] border border-emerald-500/20">
              <span className="text-emerald-400 uppercase text-[10px] block">TOTAL HERD</span>
              <span className="text-2xl font-bold text-white block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-emerald-300 text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#061e18] border border-emerald-500/20">
              <span className="text-emerald-400 uppercase text-[10px] block">DAILY MILK SUPPLY</span>
              <span className="text-2xl font-bold text-amber-300 block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span suppressHydrationWarning className="text-slate-400 text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString('en-IN')} L / yr
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#061e18] border border-emerald-500/20">
              <span className="text-emerald-400 uppercase text-[10px] block">ANNUAL MILK SALES</span>
              <span className="text-2xl font-bold text-white block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-slate-400 text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 rounded-xl bg-[#061e18] border border-emerald-500/20">
              <span className="text-emerald-400 uppercase text-[10px] block">TOTAL GROVE WEALTH</span>
              <span className="text-2xl font-bold text-emerald-300 block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-slate-400 text-[11px] block mt-1">Livestock Value + Net Milk</span>
            </div>
          </div>

          <div className="p-3 bg-[#061e18] border border-emerald-500/20 rounded-xl font-mono text-xs text-emerald-200">
            <strong className="text-emerald-400">MALABAR NOTE (YEAR {active.year}):</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-38" />
    </div>
  );
}
