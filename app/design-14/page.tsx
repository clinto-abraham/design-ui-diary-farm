"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Briefcase,
  TrendingUp,
  FileText,
  ShieldCheck,
  CheckSquare,
  BarChart2,
  DollarSign,
} from "lucide-react";

export default function Design14Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#071326] text-slate-100 font-sans antialiased selection:bg-[#c5a059] selection:text-black">
      {/* Confidential Memorandum Bar */}
      <div className="border-b border-slate-800 bg-[#040c19] py-2 px-6 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span>CONFIDENTIAL INFORMATION MEMORANDUM &bull; FOR ACCREDITED INVESTORS ONLY</span>
        <span className="text-[#c5a059] hidden sm:inline-block">OFFERING CODE: HIRA-PE-14</span>
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 bg-[#091a33]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-18 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#c5a059] text-black font-extrabold flex items-center justify-center text-sm shadow">
              PE
            </div>
            <div>
              <span className="font-bold text-white block text-sm tracking-wide">
                HIRA CAPITAL MANAGEMENT
              </span>
              <span className="text-[10px] text-[#c5a059] font-mono">
                INSTITUTIONAL PITCHBOOK // 14
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono">
            <Link href="/" className="text-slate-400 hover:text-white transition">
              All Themes
            </Link>
            <button className="px-4 py-2 rounded bg-[#c5a059] text-black font-bold hover:bg-[#b08d47] transition">
              EXECUTE SUBSCRIPTION (₹2L)
            </button>
          </div>
        </div>
      </header>

      {/* Pitchbook Main Deck */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Executive Summary */}
        <div className="border border-slate-800 bg-[#0a1e3b] p-8 rounded-xl space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
            <span className="text-xs font-mono uppercase text-[#c5a059] tracking-wider">
              SECTION 1.0 // EXECUTIVE SUMMARY & TARGET RETURNS
            </span>
            <span className="text-xs font-mono text-emerald-400">
              IRR ESTIMATE: 48.2%
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Biological Equity: ₹2,00,000 Allocation to <span className="text-[#c5a059]">₹3.25 Cr Net Creation.</span>
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              Hira Dairy Farm issues asset-backed participation units in high-merit Murrah buffaloes. Each unit of ₹2,00,000 provides immediate senior lien on 1 lactating mother and 1 female calf. Sex-sorted AI creates compounding herd growth, expanding to 88 head of cattle and ₹82.32 Lacs annual recurring milk revenue by Year 10.
            </p>
          </div>

          {/* Key Executive Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-700/80 font-mono text-xs">
            <div className="p-3.5 rounded bg-[#061427] border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase">Initial Unit Outlay</span>
              <span className="text-xl font-bold text-white mt-1 block">₹2,00,000</span>
              <span className="text-slate-400 text-[10px]">1 Mother + 1 Calf</span>
            </div>

            <div className="p-3.5 rounded bg-[#061427] border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase">10-Year MOIC</span>
              <span className="text-xl font-bold text-[#c5a059] mt-1 block">16.25x</span>
              <span className="text-slate-400 text-[10px]">Net Wealth Multiplier</span>
            </div>

            <div className="p-3.5 rounded bg-[#061427] border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase">Year 10 Run-Rate</span>
              <span className="text-xl font-bold text-emerald-400 mt-1 block">₹82.32L / yr</span>
              <span className="text-slate-400 text-[10px]">Annual Milk Revenue</span>
            </div>

            <div className="p-3.5 rounded bg-[#061427] border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase">Herd Collateral</span>
              <span className="text-xl font-bold text-white mt-1 block">₹72.00L</span>
              <span className="text-slate-400 text-[10px]">88 Insured Animals</span>
            </div>
          </div>
        </div>

        {/* 10-Year Balance Sheet Ledger */}
        <div className="border border-slate-800 bg-[#0a1e3b] p-8 rounded-xl space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700/80 pb-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#c5a059] tracking-wider">
                SECTION 2.0 // TEN-YEAR ACTUARIAL MODEL
              </span>
              <h2 className="text-2xl font-bold text-white mt-0.5">
                Cohort Compounding & Cashflow Progression
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 font-mono text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1 rounded transition ${
                    p.year === selectedYear
                      ? "bg-[#c5a059] text-black font-bold"
                      : "bg-[#061427] text-slate-400 hover:text-white"
                  }`}
                >
                  Y{p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded bg-[#061427] border border-slate-800">
              <span className="text-slate-400 block uppercase text-[10px]">ACTIVE HERD COUNT</span>
              <span className="text-2xl font-bold text-white block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-[#c5a059] text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded bg-[#061427] border border-slate-800">
              <span className="text-slate-400 block uppercase text-[10px]">ANNUAL PRODUCTION</span>
              <span className="text-2xl font-bold text-emerald-400 block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString()} L
              </span>
              <span className="text-slate-400 text-[11px] block mt-1">
                {active.dailyMilkProductionLiters} Liters/day
              </span>
            </div>

            <div className="p-4 rounded bg-[#061427] border border-slate-800">
              <span className="text-slate-400 block uppercase text-[10px]">ANNUAL GROSS TURNOVER</span>
              <span className="text-2xl font-bold text-[#c5a059] block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-slate-400 text-[11px] block mt-1">@ ₹70/L Realization</span>
            </div>

            <div className="p-4 rounded bg-[#061427] border border-slate-800">
              <span className="text-slate-400 block uppercase text-[10px]">CUMULATIVE WEALTH</span>
              <span className="text-2xl font-bold text-white block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-slate-400 text-[11px] block mt-1">Net Cashflow + Assets</span>
            </div>
          </div>

          <div className="p-3 bg-[#061427] border border-slate-800 rounded font-mono text-xs text-slate-300">
            <strong className="text-[#c5a059]">AUDIT NOTE (YEAR {active.year}):</strong> {active.milestoneDescription}
          </div>
        </div>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-14" />
    </div>
  );
}
