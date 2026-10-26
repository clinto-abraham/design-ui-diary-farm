"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Terminal,
  TrendingUp,
  Cpu,
  Activity,
  Layers,
  Shield,
  Zap,
  ArrowUpRight,
  Maximize2,
  DollarSign,
  BarChart3,
} from "lucide-react";

export default function Design2Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const activeData = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#060a12] text-slate-100 font-mono antialiased selection:bg-emerald-500 selection:text-black">
      {/* Ticker Bar */}
      <div className="bg-[#0b1324] border-b border-slate-800 text-[11px] px-4 py-2 flex items-center justify-between overflow-x-auto text-slate-400">
        <div className="flex items-center gap-6 whitespace-nowrap">
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            HIRA-QUANT // BUFFALO INDEX
          </span>
          <span>INIT_CAP: <strong className="text-white">₹2,00,000</strong></span>
          <span>HERD_CAGR: <strong className="text-emerald-400">+53.4%</strong></span>
          <span>A2_MILK_PRICE: <strong className="text-cyan-400">₹70.00 / L</strong></span>
          <span>Y10_HERD: <strong className="text-emerald-400">88 UNITS</strong></span>
          <span>Y10_MILK_REV: <strong className="text-emerald-400">₹82.32L / YR</strong></span>
        </div>
        <div className="hidden lg:flex items-center gap-4 text-slate-500">
          <span>LATENCY: 12ms</span>
          <span className="text-emerald-400">STATUS: ACTIVE FEED</span>
        </div>
      </div>

      {/* Terminal Header */}
      <header className="border-b border-slate-800/80 bg-[#070d1a]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-wider">HIRA FARMS TERMINAL</div>
              <div className="text-[10px] text-slate-400">FINTECH COMPOUNDING ENGINE v2.6</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/"
              className="hidden sm:inline-block px-3 py-1.5 rounded border border-slate-700 bg-slate-800/60 text-slate-300 hover:text-white hover:border-slate-600 transition"
            >
              &larr; Switch Theme
            </Link>
            <button className="px-4 py-1.5 rounded bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              EXECUTE ₹2.00L ALLOCATION
            </button>
          </div>
        </div>
      </header>

      {/* Quant Hero */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main Terminal Overview */}
          <div className="lg:col-span-8 rounded-xl border border-slate-800 bg-[#0a1222]/90 p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  INSTRUMENT: 1 BUFFALO + 1 CALF
                </span>
                <span className="text-xs text-slate-400 font-sans">Compounding Horizon: 10 Years</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>AI REPRODUCTION: ANNUAL CYCLE</span>
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Biological Compounding: ₹2L Capital &rarr; <span className="text-emerald-400 font-mono">₹3.25 Cr+ Net Wealth</span>
              </h1>
              <p className="text-slate-400 text-sm font-sans leading-relaxed">
                Unlike static financial instruments, a Murrah buffalo generates high-yielding cashflow (daily A2 milk @ ₹70/L) while simultaneously generating self-multiplying biological equity via artificial insemination every 365 days.
              </p>
            </div>

            {/* Live KPI Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="rounded-lg border border-slate-800 bg-[#070d18] p-3.5">
                <div className="text-[10px] text-slate-400 uppercase">Year 10 Herd</div>
                <div className="text-2xl font-bold text-white mt-1">88 Units</div>
                <div className="text-[10px] text-emerald-400 mt-1">28 Milking | 60 Heifers</div>
              </div>

              <div className="rounded-lg border border-slate-800 bg-[#070d18] p-3.5">
                <div className="text-[10px] text-slate-400 uppercase">Y10 Milk Run-Rate</div>
                <div className="text-2xl font-bold text-emerald-400 mt-1">₹82.32L</div>
                <div className="text-[10px] text-slate-400 mt-1">1,17,600 L / Year</div>
              </div>

              <div className="rounded-lg border border-slate-800 bg-[#070d18] p-3.5">
                <div className="text-[10px] text-slate-400 uppercase">10Y Total Cashflow</div>
                <div className="text-2xl font-bold text-cyan-400 mt-1">₹2.53 Cr</div>
                <div className="text-[10px] text-slate-400 mt-1">Cumulative Milk Gross</div>
              </div>

              <div className="rounded-lg border border-slate-800 bg-[#070d18] p-3.5">
                <div className="text-[10px] text-slate-400 uppercase">Total Asset Valuation</div>
                <div className="text-2xl font-bold text-amber-400 mt-1">₹72.00L</div>
                <div className="text-[10px] text-slate-400 mt-1">Liquid Biological Equity</div>
              </div>
            </div>
          </div>

          {/* Right Live Spec Widget */}
          <div className="lg:col-span-4 rounded-xl border border-slate-800 bg-[#0a1222]/90 p-5 space-y-4">
            <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-3">
              <span className="text-slate-300 font-bold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" /> ASSET SPECIFICATION
              </span>
              <span className="text-emerald-400 text-[10px]">LIVE STATUS</span>
            </div>

            <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-800">
              <Image
                src="/side_buffalo_kid.webp"
                alt="Murrah Buffalo & Calf"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a12] via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[10px] bg-slate-900/80 backdrop-blur px-2 py-1 rounded border border-slate-700">
                <span>MURRAH GENETICS: GRADE A+</span>
                <span className="text-emerald-400">14L / DAY</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-800/60 text-slate-400">
                <span>Entry Unit:</span>
                <span className="text-white font-bold">1 Buffalo (Age 3.5) + 1 Calf</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/60 text-slate-400">
                <span>AI Semen Protocol:</span>
                <span className="text-cyan-400 font-bold">Sex-Sorted (95%+ Female)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/60 text-slate-400">
                <span>Reproduction Lag:</span>
                <span className="text-white font-bold">36 Months to Full Lactation</span>
              </div>
              <div className="flex justify-between py-1.5 text-slate-400">
                <span>Risk Hedging:</span>
                <span className="text-emerald-400 font-bold">Full Livestock Insurance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quant Graph Section */}
        <div className="rounded-xl border border-slate-800 bg-[#0a1222]/90 p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                YIELD CURVE // HERD EXPANSION SIMULATOR
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                10-Year Compounding Step-Function (Inspect by Year)
              </h3>
            </div>
            <div className="flex items-center gap-1.5 bg-[#060a12] p-1 rounded-lg border border-slate-800">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-2.5 py-1 text-xs rounded transition ${
                    p.year === selectedYear
                      ? "bg-emerald-500 text-slate-950 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Y{p.year}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Visual Graph */}
          <div className="h-64 sm:h-72 w-full relative flex items-end justify-between gap-2 pt-8 pb-4 border-b border-slate-800/80">
            {projections.map((p) => {
              const heightPercent = (p.totalHerdSize / 88) * 100;
              const isSelected = p.year === selectedYear;

              return (
                <div
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className="flex-1 h-full flex flex-col items-center justify-end group cursor-pointer"
                >
                  <div className={`text-[10px] mb-1 font-bold ${isSelected ? "text-emerald-400" : "text-slate-500 group-hover:text-slate-300"}`}>
                    {p.totalHerdSize}
                  </div>
                  <div className="w-full max-w-[48px] bg-slate-800/60 rounded-t overflow-hidden h-full flex items-end">
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className={`w-full transition-all duration-300 ${
                        isSelected
                          ? "bg-gradient-to-t from-emerald-600 to-cyan-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                          : "bg-slate-700 hover:bg-slate-600"
                      }`}
                    />
                  </div>
                  <div className={`mt-2 text-xs ${isSelected ? "text-emerald-400 font-bold" : "text-slate-400"}`}>
                    Y{p.year}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quant Snapshot for Selected Year */}
          <div className="grid sm:grid-cols-4 gap-4 bg-[#070d18] p-4 rounded-lg border border-slate-800 text-xs">
            <div>
              <span className="text-slate-500 block uppercase">Inspected Window</span>
              <span className="text-white font-bold text-sm">Year {activeData.year} Compounding</span>
              <p className="text-[10px] text-slate-400 mt-1">{activeData.milestoneDescription}</p>
            </div>
            <div>
              <span className="text-slate-500 block uppercase">Milk Yield Output</span>
              <span className="text-emerald-400 font-bold text-sm">
                {activeData.dailyMilkProductionLiters} Liters/day
              </span>
              <p className="text-[10px] text-slate-400 mt-1">{activeData.matureBuffaloes} Milking Mothers</p>
            </div>
            <div>
              <span className="text-slate-500 block uppercase">Gross Milking Run-Rate</span>
              <span className="text-cyan-400 font-bold text-sm">
                {formatINR(activeData.grossMilkingRevenueINR)}
              </span>
              <p className="text-[10px] text-slate-400 mt-1">@ ₹70/L Farm-Gate Rate</p>
            </div>
            <div>
              <span className="text-slate-500 block uppercase">Cumulative Net Created</span>
              <span className="text-amber-400 font-bold text-sm">
                {formatINR(activeData.totalCumulativeWealthINR)}
              </span>
              <p className="text-[10px] text-slate-400 mt-1">Cashflow + Herd Asset</p>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-2" />
    </div>
  );
}
