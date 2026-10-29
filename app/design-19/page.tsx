"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Compass,
  FileCode,
  Layers,
  Activity,
  Cpu,
  CheckCircle,
} from "lucide-react";

export default function Design19Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#07162c] text-cyan-50 font-mono antialiased selection:bg-cyan-500 selection:text-black relative">
      {/* CAD Gridlines Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#00d2ff0d_1px,transparent_1px),linear-gradient(to_bottom,#00d2ff0d_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Drawing Title Block Header */}
      <header className="border-b border-cyan-500/30 bg-[#091f3d]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-18 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-cyan-400 bg-cyan-950/60 flex items-center justify-center text-cyan-300 font-bold">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white block text-sm tracking-wider">
                HIRA CAD BLUEPRINT // DWG-19
              </span>
              <span className="text-[10px] text-cyan-400">
                SCALE: 1:10 YEARS &bull; REV 4.2
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/" className="text-cyan-400 hover:text-white transition">
              All 20 Themes
            </Link>
            <button className="px-4 py-1.5 rounded border border-cyan-400 bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              RELEASE PO: ₹2,00,000
            </button>
          </div>
        </div>
      </header>

      {/* Main Drafting Canvas */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10 relative z-10">
        {/* Specification Card */}
        <div className="border border-cyan-500/40 bg-[#081b36]/90 p-8 rounded-lg space-y-6 shadow-xl relative">
          <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3 text-xs text-cyan-400">
            <span>ASSEMBLY DRAWING // SUB-SYSTEM: MURRAH REPRODUCTIVE ENGINE</span>
            <span>TOLERANCE: +/- 0.05% AI ACCURACY</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Engineering Specification: <br />
              <span className="text-cyan-400">₹2L Base Unit &rarr; 88-Node Complex</span>
            </h1>
            <p className="text-cyan-200/80 text-sm leading-relaxed max-w-3xl">
              Technical schematic for a self-replicating bovine production system. Bill of Materials includes 1 primary Murrah lactating unit (14 L/day hydraulic flow rate) and 1 subordinate heifer calf. Annual sex-sorted AI protocol triggers generational branch assembly, compounding to 88 live biological assets with ₹82.32L annual volumetric cashflow.
            </p>
          </div>

          {/* Technical BOM Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-cyan-500/30 text-xs">
            <div className="p-3 bg-[#051327] border border-cyan-500/30 rounded">
              <span className="text-cyan-500 text-[10px] uppercase block">BOM Outlay</span>
              <span className="text-xl font-bold text-white mt-1 block">₹2,00,000</span>
              <span className="text-cyan-400 text-[10px]">1 Mother + 1 Calf</span>
            </div>

            <div className="p-3 bg-[#051327] border border-cyan-500/30 rounded">
              <span className="text-cyan-500 text-[10px] uppercase block">Year 10 Node Count</span>
              <span className="text-xl font-bold text-cyan-300 mt-1 block">88 Units</span>
              <span className="text-cyan-400 text-[10px]">28 Actuators (Milking)</span>
            </div>

            <div className="p-3 bg-[#051327] border border-cyan-500/30 rounded">
              <span className="text-cyan-500 text-[10px] uppercase block">Volumetric Flow</span>
              <span className="text-xl font-bold text-white mt-1 block">1,17,600 L / yr</span>
              <span className="text-cyan-400 text-[10px]">392 L / day Peak</span>
            </div>

            <div className="p-3 bg-[#051327] border border-cyan-500/30 rounded">
              <span className="text-cyan-500 text-[10px] uppercase block">Total Net Asset</span>
              <span className="text-xl font-bold text-cyan-300 mt-1 block">&gt; ₹3.25 Cr</span>
              <span className="text-cyan-400 text-[10px]">10-Year Accumulation</span>
            </div>
          </div>
        </div>

        {/* CAD Interactive Timeline */}
        <section className="border border-cyan-500/40 bg-[#081b36]/90 p-8 rounded-lg space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-cyan-500/30 pb-3">
            <div>
              <span className="text-xs uppercase tracking-widest text-cyan-400">
                CHRONOLOGICAL CAD TIMELINE
              </span>
              <h2 className="text-xl font-bold text-white mt-0.5">
                Inspect Year 1 to 10 Assembly Progression
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1 rounded transition border ${
                    p.year === selectedYear
                      ? "border-cyan-400 bg-cyan-500 text-slate-950 font-bold"
                      : "border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/60"
                  }`}
                >
                  Y{p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-[#051327] border border-cyan-500/30 rounded">
              <span className="text-cyan-500 block uppercase text-[10px]">TOTAL HERD NODES</span>
              <span className="text-2xl font-bold text-white block mt-1">{active.totalHerdSize} Units</span>
              <span className="text-cyan-300 text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Calves
              </span>
            </div>

            <div className="p-4 bg-[#051327] border border-cyan-500/30 rounded">
              <span className="text-cyan-500 block uppercase text-[10px]">DAILY FLOW RATE</span>
              <span className="text-2xl font-bold text-cyan-300 block mt-1">{active.dailyMilkProductionLiters} L / day</span>
              <span suppressHydrationWarning className="text-cyan-500 text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString('en-IN')} L / yr
              </span>
            </div>

            <div className="p-4 bg-[#051327] border border-cyan-500/30 rounded">
              <span className="text-cyan-500 block uppercase text-[10px]">ANNUAL GROSS VALUATION</span>
              <span className="text-2xl font-bold text-white block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-cyan-500 text-[11px] block mt-1">@ ₹70/L Tariff</span>
            </div>

            <div className="p-4 bg-[#051327] border border-cyan-500/30 rounded">
              <span className="text-cyan-500 block uppercase text-[10px]">CUMULATIVE CAPITAL VALUE</span>
              <span className="text-2xl font-bold text-cyan-300 block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-cyan-500 text-[11px] block mt-1">Assets + Net Sales</span>
            </div>
          </div>

          <div className="p-3 bg-[#051327] border border-cyan-500/20 rounded text-xs text-cyan-200">
            <strong className="text-cyan-400">ENGINEERING LOG (YEAR {active.year}):</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-19" />
    </div>
  );
}
