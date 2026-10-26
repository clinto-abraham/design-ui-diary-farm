"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Rocket,
  TrendingUp,
  Cpu,
  Layers,
  Zap,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export default function Design25Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#0d0b18] text-slate-100 font-sans antialiased selection:bg-violet-500 selection:text-white">
      {/* Top VC Banner */}
      <div className="bg-[#16122a] border-b border-violet-500/30 text-xs px-6 py-2 flex items-center justify-between text-violet-300 font-mono">
        <span>BENGALURU AGRITECH INCUBATOR // SEED DECK &bull; VALUATION MATRIX</span>
        <span className="hidden sm:inline-block text-emerald-400">BIOLOGICAL ARR: ₹82.32L AT YEAR 10</span>
      </div>

      {/* Header */}
      <header className="border-b border-violet-500/20 bg-[#0d0b18]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-violet-600/30">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-white text-base tracking-tight block">
                HIRA AGRITECH VENTURES
              </span>
              <span className="text-[10px] text-violet-400 font-mono">
                Bengaluru Series-A Deck // 25
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono">
            <Link href="/" className="text-slate-400 hover:text-white transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#deck-horizon"
              className="px-4 py-2 rounded-xl bg-violet-600 text-white font-bold hover:bg-violet-500 transition shadow-lg shadow-violet-600/30"
            >
              INVEST SEED ₹2L
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <div className="rounded-3xl border border-violet-500/30 bg-gradient-to-b from-[#171330] to-[#100d22] p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono">
            <Zap className="w-3.5 h-3.5" /> Disruption of India’s $140B Dairy Economy
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            The Biological SaaS: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-emerald-400">
              ₹2L CapEx &rarr; 44x Compounding Scale.
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Forget cloud servers that depreciate. Invest in living, self-replicating biological infrastructure. A single starter unit of 1 Murrah buffalo + 1 calf leverages sex-sorted AI genetics to build an 88-node dairy asset generating ₹82.32 Lacs annual recurring revenue (ARR).
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-violet-500/20 font-mono text-xs">
            <div className="p-3.5 bg-[#0e0a1c] border border-violet-500/20 rounded-xl">
              <span className="text-slate-400 text-[10px] uppercase block">Seed CapEx</span>
              <span className="text-xl font-bold text-white mt-1 block">₹2,00,000</span>
              <span className="text-slate-400 text-[10px]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-3.5 bg-[#0e0a1c] border border-violet-500/20 rounded-xl">
              <span className="text-slate-400 text-[10px] uppercase block">Year 10 Scale</span>
              <span className="text-xl font-bold text-violet-400 mt-1 block">88 Bio-Units</span>
              <span className="text-slate-400 text-[10px]">28 Core Milking Nodes</span>
            </div>
            <div className="p-3.5 bg-[#0e0a1c] border border-violet-500/20 rounded-xl">
              <span className="text-slate-400 text-[10px] uppercase block">Year 10 ARR</span>
              <span className="text-xl font-bold text-emerald-400 mt-1 block">₹82.32 Lacs</span>
              <span className="text-slate-400 text-[10px]">Annual Milk Revenue</span>
            </div>
          </div>
        </div>

        {/* 10-Year Startup Growth Stepper */}
        <section id="deck-horizon" className="rounded-3xl border border-violet-500/30 bg-[#120e26] p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-violet-500/20 pb-4">
            <div>
              <span className="text-xs font-mono uppercase text-violet-400 tracking-wider">
                10-YEAR EXPONENTIAL RUNWAY
              </span>
              <h2 className="text-2xl font-bold text-white mt-0.5">
                Cohort Growth & Milking ARR Progression
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 font-mono text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition ${
                    p.year === selectedYear
                      ? "bg-violet-600 text-white shadow-[0_0_12px_rgba(139,92,246,0.5)]"
                      : "bg-[#0b0818] text-slate-400 hover:text-white"
                  }`}
                >
                  Y{p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#0c091a] border border-violet-500/20">
              <span className="text-slate-400 uppercase text-[10px] block">TOTAL LIVE UNITS</span>
              <span className="text-2xl font-bold text-white block mt-1">{active.totalHerdSize} Nodes</span>
              <span className="text-violet-400 text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Calves
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#0c091a] border border-violet-500/20">
              <span className="text-slate-400 uppercase text-[10px] block">DAILY MILK VOLUME</span>
              <span className="text-2xl font-bold text-cyan-400 block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span className="text-slate-400 text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString()} L / yr
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#0c091a] border border-violet-500/20">
              <span className="text-slate-400 uppercase text-[10px] block">ANNUAL MILK ARR</span>
              <span className="text-2xl font-bold text-emerald-400 block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-slate-400 text-[11px] block mt-1">@ ₹70/L Realization</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0c091a] border border-violet-500/20">
              <span className="text-slate-400 uppercase text-[10px] block">NET PORTFOLIO VALUATION</span>
              <span className="text-2xl font-bold text-violet-300 block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-slate-400 text-[11px] block mt-1">Asset Value + Cash</span>
            </div>
          </div>

          <div className="p-3 bg-[#0c091a] border border-violet-500/20 rounded-xl font-mono text-xs text-slate-300">
            <strong className="text-violet-400">VC NOTE (YEAR {active.year}):</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-25" />
    </div>
  );
}
