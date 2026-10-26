"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  TrendingUp,
  Activity,
  DollarSign,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle,
  BarChart3,
} from "lucide-react";

export default function Design21Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-black">
      {/* Dalal Street Live Ticker */}
      <div className="bg-[#0f172a] border-b border-slate-800 text-[11px] px-6 py-2 flex items-center justify-between text-slate-400 font-mono overflow-x-auto">
        <div className="flex items-center gap-6 whitespace-nowrap">
          <span className="text-emerald-400 font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            DALAL STREET // BUFFALO INDEX
          </span>
          <span>SENSEX: <strong className="text-white">82,450 ▲</strong></span>
          <span>NIFTY 50: <strong className="text-white">25,120 ▲</strong></span>
          <span>MURRAH-CAGR: <strong className="text-emerald-400">53.4% BIOLOGICAL YIELD</strong></span>
          <span>MILK FARM-GATE: <strong className="text-emerald-400">₹70.00 / L</strong></span>
          <span>10Y MULTIPLIER: <strong className="text-amber-400">16.25x CAPITAL</strong></span>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 bg-[#0d1424]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-18 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-emerald-400 flex items-center justify-center text-slate-950 font-black text-lg shadow-lg">
              ₹
            </div>
            <div>
              <span className="font-extrabold text-white text-base tracking-tight block">
                DALAL STREET BUFFALO FUND
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">
                BSE/NSE BIOLOGICAL WEALTH // 21
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono">
            <Link href="/" className="text-slate-400 hover:text-white transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#dalal-calculator"
              className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              INVEST ₹2,00,000 UNIT
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-[#11192e] to-[#0c1222] p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <TrendingUp className="w-3.5 h-3.5" /> High Alpha Tangible Asset Class
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Better Than Nifty SIP: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
              ₹2 Lacs Capital &rarr; ₹3.25 Cr+ Net Wealth.
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Indian stock markets are volatile, but India’s hunger for A2 Murrah milk never crashes. 1 Mother Buffalo + 1 Female Calf creates an unassailable biological dividend machine: daily cashflow plus annual offspring multiplying your herd to 88 animals by Year 10.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-slate-800 text-xs font-mono">
            <div className="p-3.5 bg-[#0a0f1d] border border-slate-800 rounded-xl">
              <span className="text-slate-400 text-[10px] uppercase block">Capital Deployed</span>
              <span className="text-xl font-bold text-white mt-1 block">₹2,00,000</span>
              <span className="text-slate-400 text-[10px]">1 Buffalo + 1 Calf</span>
            </div>
            <div className="p-3.5 bg-[#0a0f1d] border border-slate-800 rounded-xl">
              <span className="text-slate-400 text-[10px] uppercase block">Year 10 Equity</span>
              <span className="text-xl font-bold text-emerald-400 mt-1 block">88 Animals</span>
              <span className="text-slate-400 text-[10px]">Sex-Sorted AI</span>
            </div>
            <div className="p-3.5 bg-[#0a0f1d] border border-slate-800 rounded-xl">
              <span className="text-slate-400 text-[10px] uppercase block">Y10 Milk Dividend</span>
              <span className="text-xl font-bold text-amber-400 mt-1 block">₹82.32L / yr</span>
              <span className="text-slate-400 text-[10px]">Annual Cash Payout</span>
            </div>
          </div>
        </div>

        {/* 10-Year Dalal Street Horizon */}
        <section id="dalal-calculator" className="rounded-3xl border border-slate-800 bg-[#0d1424] p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
                10-YEAR ALPHA SCHEDULE
              </span>
              <h2 className="text-2xl font-bold text-white mt-0.5">
                Compounding Yield Trajectory
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 font-mono text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition ${
                    p.year === selectedYear
                      ? "bg-emerald-500 text-slate-950 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                      : "bg-[#080d18] text-slate-400 hover:text-white"
                  }`}
                >
                  Y{p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#080d18] border border-slate-800">
              <span className="text-slate-400 uppercase text-[10px] block">TOTAL HERD ASSETS</span>
              <span className="text-2xl font-bold text-white block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-emerald-400 text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#080d18] border border-slate-800">
              <span className="text-slate-400 uppercase text-[10px] block">DAILY MILK YIELD</span>
              <span className="text-2xl font-bold text-cyan-400 block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span className="text-slate-400 text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString()} L / yr
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#080d18] border border-slate-800">
              <span className="text-slate-400 uppercase text-[10px] block">ANNUAL MILK DIVIDEND</span>
              <span className="text-2xl font-bold text-emerald-400 block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-slate-400 text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 rounded-xl bg-[#080d18] border border-slate-800">
              <span className="text-slate-400 uppercase text-[10px] block">TOTAL WEALTH GENERATED</span>
              <span className="text-2xl font-bold text-amber-300 block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-slate-400 text-[11px] block mt-1">Livestock Value + Net Milk</span>
            </div>
          </div>

          <div className="p-3 bg-[#080d18] border border-slate-800 rounded-xl font-mono text-xs text-slate-300">
            <strong className="text-emerald-400">TRADING NOTE (YEAR {active.year}):</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-21" />
    </div>
  );
}
