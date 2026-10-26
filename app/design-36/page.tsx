"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Code,
  Terminal,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  ShieldCheck,
} from "lucide-react";

export default function Design36Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black">
      {/* Silicon Valley Header Bar */}
      <div className="bg-[#0f172a] border-b border-slate-800 text-xs px-6 py-2 flex items-center justify-between text-slate-400 font-mono">
        <span>PALO ALTO // SEATTLE DESI TECH ANGEL SYNDICATE</span>
        <span className="hidden sm:inline-block text-cyan-400">USD ENTRY: $2,400 &bull; MOIC: 16.25x IN INR</span>
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 bg-[#090d16]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-black font-extrabold text-lg shadow-lg shadow-cyan-500/20">
              <Code className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="font-extrabold text-white text-base tracking-tight block">
                SILICON VALLEY DESI SYNDICATE
              </span>
              <span className="text-[10px] text-cyan-400 font-mono">
                Bay Area Agri-Angel Platform // 36
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono">
            <Link href="/" className="text-slate-400 hover:text-white transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#sv-schedule"
              className="px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition shadow-lg shadow-cyan-400/20"
            >
              INVEST $2,400 (₹2L)
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-[#111827] to-[#0c121e] p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Zap className="w-3.5 h-3.5" /> High Alpha Biological Infrastructure
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Diversify Your Tech RSUs: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              $2,400 Seeds 88 Murrah Cattle in India.
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            You’ve made returns on tech equities, now anchor your family wealth in real Indian agricultural assets. 1 Mother Buffalo + 1 Calf deploys automated AI breeding, generating 14L of daily A2 milk cashflow and compounding to 88 animals generating ₹82.32 Lacs annual turnover by Year 10.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-slate-800 text-xs font-mono">
            <div className="p-3.5 bg-[#090e18] border border-slate-800 rounded-xl">
              <span className="text-slate-400 text-[10px] uppercase block">Check Size</span>
              <span className="text-xl font-bold text-white mt-1 block">₹2,00,000</span>
              <span className="text-cyan-400 text-[10px]">$2,400 USD</span>
            </div>
            <div className="p-3.5 bg-[#090e18] border border-slate-800 rounded-xl">
              <span className="text-slate-400 text-[10px] uppercase block">Year 10 Assets</span>
              <span className="text-xl font-bold text-cyan-400 mt-1 block">88 Animals</span>
              <span className="text-slate-400 text-[10px]">28 Milking Nodes</span>
            </div>
            <div className="p-3.5 bg-[#090e18] border border-slate-800 rounded-xl">
              <span className="text-slate-400 text-[10px] uppercase block">Year 10 Cashflow</span>
              <span className="text-xl font-bold text-emerald-400 mt-1 block">₹82.32L / yr</span>
              <span className="text-slate-400 text-[10px]">~$100K Annual Milk</span>
            </div>
          </div>
        </div>

        {/* 10-Year Horizon */}
        <section id="sv-schedule" className="rounded-3xl border border-slate-800 bg-[#0d1424] p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
                10-YEAR IRR & HERD PROJECTION
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
                      ? "bg-cyan-400 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.5)]"
                      : "bg-[#090e18] text-slate-400 hover:text-white"
                  }`}
                >
                  Y{p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#090e18] border border-slate-800">
              <span className="text-slate-400 uppercase text-[10px] block">HERD SCALE</span>
              <span className="text-2xl font-bold text-white block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-cyan-400 text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Calves
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#090e18] border border-slate-800">
              <span className="text-slate-400 uppercase text-[10px] block">DAILY MILK YIELD</span>
              <span className="text-2xl font-bold text-cyan-300 block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span className="text-slate-400 text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString()} L / yr
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#090e18] border border-slate-800">
              <span className="text-slate-400 uppercase text-[10px] block">ANNUAL MILK SALES</span>
              <span className="text-2xl font-bold text-emerald-400 block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-slate-400 text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 rounded-xl bg-[#090e18] border border-slate-800">
              <span className="text-slate-400 uppercase text-[10px] block">TOTAL WEALTH GENERATED</span>
              <span className="text-2xl font-bold text-cyan-300 block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-slate-400 text-[11px] block mt-1">Assets + Net Milk Cash</span>
            </div>
          </div>

          <div className="p-3 bg-[#090e18] border border-slate-800 rounded-xl font-mono text-xs text-slate-300">
            <strong className="text-cyan-400">TECH ANGEL NOTE (YEAR {active.year}):</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-36" />
    </div>
  );
}
