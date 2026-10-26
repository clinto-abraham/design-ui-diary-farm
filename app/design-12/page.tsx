"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Gamepad2,
  Sparkles,
  Zap,
  Radio,
  Flame,
  Activity,
  ArrowRight,
} from "lucide-react";

export default function Design12Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#0d071d] text-pink-50 font-mono antialiased selection:bg-pink-500 selection:text-white relative overflow-hidden">
      {/* Synthwave Horizon Grid Background */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-pink-900/30 via-purple-900/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-64 bg-[linear-gradient(to_right,#f43f5e15_1px,transparent_1px),linear-gradient(to_bottom,#f43f5e15_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_top,black,transparent)] pointer-events-none" />

      {/* Retro Header */}
      <header className="border-b border-pink-500/30 bg-[#120a27]/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-18 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(244,63,94,0.6)]">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 block text-sm tracking-wider">
                SYNTH-DAIRY // 1984
              </span>
              <span className="text-[10px] text-pink-400">
                10-YEAR COMPOUNDING ARCADE
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/" className="text-pink-400 hover:text-pink-200 transition">
              All 20 Themes
            </Link>
            <a
              href="#arcade-matrix"
              className="px-4 py-2 rounded bg-gradient-to-r from-pink-500 via-rose-500 to-yellow-500 text-black font-extrabold tracking-wider hover:brightness-125 transition shadow-[0_0_20px_rgba(244,63,94,0.5)]"
            >
              INSERT ₹2.00L COIN
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12 relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full border border-pink-500/50 bg-pink-950/40 text-pink-400 text-xs shadow-[0_0_10px_rgba(244,63,94,0.3)]">
            🕹️ BIO-COMPOUNDING ARCADE MODE
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-400 leading-none">
            START WITH 1 BUFFALO. <br />
            MAX SCORE: <span className="underline decoration-pink-500">88 HERD UNITS!</span>
          </h1>
          <p className="text-purple-300 text-sm sm:text-base leading-relaxed">
            Drop ₹2,00,000 into the biological compounding engine. 1 Mother Buffalo + 1 Calf. Every year: +1 new calf via sex-sorted AI. Every 3 years: calves reach maturity and spawn new calves!
          </p>

          <div className="flex justify-center gap-4 text-xs font-bold pt-2">
            <div className="p-3 rounded-lg border border-pink-500/30 bg-[#160c33] shadow-[0_0_15px_rgba(244,63,94,0.15)]">
              <span className="text-pink-400 block text-[10px]">ENTRY CREDIT</span>
              <span className="text-xl text-white">₹2,00,000</span>
            </div>
            <div className="p-3 rounded-lg border border-cyan-500/30 bg-[#160c33] shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="text-cyan-400 block text-[10px]">YEAR 10 HERD</span>
              <span className="text-xl text-white">88 Animals</span>
            </div>
            <div className="p-3 rounded-lg border border-yellow-500/30 bg-[#160c33] shadow-[0_0_15px_rgba(234,179,8,0.15)]">
              <span className="text-yellow-400 block text-[10px]">Y10 MILK REVENUE</span>
              <span className="text-xl text-white">₹82.32L / yr</span>
            </div>
          </div>
        </div>

        {/* Synthwave Interactive Horizon Graph */}
        <section id="arcade-matrix" className="rounded-2xl border border-pink-500/30 bg-[#140b2e]/90 p-6 sm:p-8 space-y-8 shadow-[0_0_40px_rgba(244,63,94,0.15)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-pink-500/20 pb-4">
            <div>
              <span className="text-xs text-pink-400 uppercase tracking-widest font-bold">
                LEVEL PROGRESSION // STAGE 1 TO 10
              </span>
              <h2 className="text-2xl font-black text-white mt-0.5">
                Inspect 10-Year Herd Level-Up
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 bg-[#0b051b] p-1.5 rounded-lg border border-pink-500/30">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1 text-xs font-bold rounded transition ${
                    p.year === selectedYear
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_12px_rgba(244,63,94,0.6)]"
                      : "text-purple-400 hover:text-white"
                  }`}
                >
                  Y{p.year}
                </button>
              ))}
            </div>
          </div>

          {/* Synthwave Neon Bar Visualization */}
          <div className="h-64 sm:h-72 w-full flex items-end justify-between gap-2 pt-8 pb-4 border-b border-pink-500/20">
            {projections.map((p) => {
              const heightPercent = Math.max(10, (p.totalHerdSize / 88) * 100);
              const isSelected = p.year === selectedYear;

              return (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className="flex-1 h-full flex flex-col items-center justify-end group cursor-pointer"
                >
                  <span className={`text-[10px] mb-1 font-bold ${isSelected ? "text-cyan-400" : "text-pink-400/50"}`}>
                    {p.totalHerdSize}
                  </span>
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className={`w-full max-w-[42px] rounded-t transition-all ${
                      isSelected
                        ? "bg-gradient-to-t from-pink-600 via-purple-500 to-cyan-400 shadow-[0_0_20px_rgba(244,63,94,0.8)]"
                        : "bg-purple-900/60 hover:bg-pink-700/60"
                    }`}
                  />
                  <span className={`mt-2 text-xs font-bold ${isSelected ? "text-pink-400" : "text-purple-400"}`}>
                    Y{p.year}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Neon Telemetry Output */}
          <div className="grid sm:grid-cols-4 gap-4 bg-[#0a0518] p-4 rounded-xl border border-pink-500/30 text-xs">
            <div>
              <span className="text-purple-400 uppercase text-[10px] block">ACTIVE STAGE</span>
              <span className="text-xl font-black text-white block mt-1">Year {active.year} Mode</span>
              <p className="text-[11px] text-pink-400 mt-1">{active.milestoneDescription}</p>
            </div>
            <div>
              <span className="text-purple-400 uppercase text-[10px] block">HERD TOTAL</span>
              <span className="text-xl font-black text-cyan-400 block mt-1">{active.totalHerdSize} Buffaloes</span>
              <p className="text-[11px] text-purple-300 mt-1">{active.matureBuffaloes} Milking Mothers</p>
            </div>
            <div>
              <span className="text-purple-400 uppercase text-[10px] block">ANNUAL MILK REV</span>
              <span className="text-xl font-black text-pink-400 block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <p className="text-[11px] text-purple-300 mt-1">{active.dailyMilkProductionLiters} L / day</p>
            </div>
            <div>
              <span className="text-purple-400 uppercase text-[10px] block">TOTAL WEALTH</span>
              <span className="text-xl font-black text-yellow-400 block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <p className="text-[11px] text-purple-300 mt-1">Live Asset + Net Cash</p>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-12" />
    </div>
  );
}
