"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Cpu,
  Radio,
  Zap,
  Activity,
  Disc,
  Layers,
  Sparkles,
  Terminal,
} from "lucide-react";

export default function Design10Page() {
  const [activeYear, setActiveYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const current = projections[activeYear - 1];

  return (
    <div className="min-h-screen bg-[#050508] text-slate-100 font-mono antialiased selection:bg-fuchsia-500 selection:text-black relative">
      {/* HUD Scanline Effect */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-30 opacity-40" />

      {/* Top HUD Telemetry Bar */}
      <header className="border-b border-fuchsia-500/30 bg-[#07070f]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-fuchsia-500/50 bg-fuchsia-950/40 flex items-center justify-center text-fuchsia-400">
              <Radio className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <span className="font-bold text-white tracking-widest block text-sm">
                BIO-MATRIX // HUD-10
              </span>
              <span className="text-[10px] text-fuchsia-400">
                MURRAH GENOME COMPILER 4.0
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 text-slate-400 text-[11px]">
              <span>SYSTEM: ONLINE</span>
              <span>AI ACCURACY: 95.8%</span>
              <span className="text-cyan-400">HERD: 88 MAX</span>
            </div>
            <Link
              href="/"
              className="px-3 py-1.5 rounded border border-slate-700 bg-slate-900 text-slate-300 hover:text-white"
            >
              All Designs
            </Link>
          </div>
        </div>
      </header>

      {/* Main HUD */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8 relative z-20">
        {/* HUD Hero */}
        <div className="rounded-2xl border border-fuchsia-500/30 bg-[#0a0a16] p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 text-[10px] text-fuchsia-400/60">
            LOC: HIRA_SANCTUARY // PROTOCOL: AI_INSEMINATION
          </div>

          <div className="space-y-4 max-w-3xl">
            <span className="px-2.5 py-1 rounded bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs">
              &gt; EXECUTE 10-YEAR COMPOUNDING ALGORITHM
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Biological Equity Matrix: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-cyan-400">
                ₹2L Capital &rarr; 88 Bio-Assets
              </span>
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed font-sans">
              Deploying robotic milking telemetry and cryo-preserved sex-sorted genetics. 1 Founder Buffalo + 1 Offspring Heifer generates a self-replicating biological herd yielding ₹82.32 Lacs annual milk turnover at maturity.
            </p>
          </div>
        </div>

        {/* HUD Interactive Controls */}
        <div className="rounded-2xl border border-cyan-500/30 bg-[#0a0a16] p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-cyan-400 text-xs">
              <Activity className="w-4 h-4" />
              <span className="uppercase tracking-widest font-bold">10-YEAR TIMELINE SCANNER</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setActiveYear(p.year)}
                  className={`px-3 py-1 text-xs border rounded transition ${
                    p.year === activeYear
                      ? "border-cyan-400 bg-cyan-950/60 text-cyan-300 font-bold shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                      : "border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  Y{p.year}
                </button>
              ))}
            </div>
          </div>

          {/* Dials & Telemetry */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-slate-800 bg-[#070712] relative">
              <span className="text-[10px] text-slate-500 uppercase block">ACTIVE HERD SIZE</span>
              <div className="text-3xl font-extrabold text-white mt-1">{current.totalHerdSize}</div>
              <div className="text-[10px] text-fuchsia-400 mt-1">
                {current.matureBuffaloes} MILKING / {current.growingHeifers + current.calvesBornThisYear} HEIFERS
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-[#070712] relative">
              <span className="text-[10px] text-slate-500 uppercase block">DAILY MILK YIELD</span>
              <div className="text-3xl font-extrabold text-cyan-400 mt-1">{current.dailyMilkProductionLiters}L</div>
              <div className="text-[10px] text-slate-400 mt-1">
                {(current.annualMilkProductionLiters).toLocaleString()} L / YR
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-[#070712] relative">
              <span className="text-[10px] text-slate-500 uppercase block">GROSS MILK RUN-RATE</span>
              <div className="text-3xl font-extrabold text-emerald-400 mt-1">
                {formatINR(current.grossMilkingRevenueINR)}
              </div>
              <div className="text-[10px] text-slate-400 mt-1">@ ₹70/L FARM GATE</div>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-[#070712] relative">
              <span className="text-[10px] text-slate-500 uppercase block">TOTAL WEALTH MATRIX</span>
              <div className="text-3xl font-extrabold text-fuchsia-400 mt-1">
                {formatINR(current.totalCumulativeWealthINR)}
              </div>
              <div className="text-[10px] text-slate-400 mt-1">CUMULATIVE NET + ASSET</div>
            </div>
          </div>

          {/* Milestone Telemetry */}
          <div className="p-3 rounded-lg border border-fuchsia-500/20 bg-fuchsia-950/20 text-xs text-slate-300">
            <span className="text-fuchsia-400 font-bold">&gt; YEAR {current.year} TELEMETRY LOG:</span> {current.milestoneDescription}
          </div>
        </div>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-10" />
    </div>
  );
}
