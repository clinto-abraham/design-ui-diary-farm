"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Shield,
  Award,
  Medal,
  CheckCircle,
  Flag,
} from "lucide-react";

export default function Design37Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#1c2718] text-[#fefae0] font-sans antialiased selection:bg-[#606c38] selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#141d11] border-b border-[#606c38]/40 py-2 px-6 flex items-center justify-between text-xs text-[#dda15e] font-mono">
        <span>🇮🇳 INDIAN ARMED FORCES & VETERANS PENSION HERD &bull; HONOR, DUTY & SECURE YIELD</span>
        <span className="hidden sm:inline-block text-[#dda15e]">DEFENSE FAMILY ALLOCATION</span>
      </div>

      {/* Header */}
      <header className="border-b border-[#606c38]/30 bg-[#1c2718]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#283618] border border-[#dda15e] flex items-center justify-center text-[#dda15e] font-bold text-lg shadow-lg">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-white text-base tracking-tight block">
                HIRA VETERANS HERD
              </span>
              <span className="text-[10px] text-[#dda15e] font-mono uppercase tracking-wider">
                Defense Family Pension Fund // 37
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono">
            <Link href="/" className="text-[#dda15e] hover:text-white transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#veteran-schedule"
              className="px-5 py-2.5 rounded-xl bg-[#dda15e] text-black font-bold uppercase tracking-wider hover:bg-[#bc6c25] hover:text-white transition shadow-lg"
            >
              Enroll ₹2,00,000 Pension Unit
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-3xl border border-[#606c38]/50 bg-gradient-to-b from-[#253520] to-[#182315] p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#283618] border border-[#dda15e]/40 text-[#dda15e] text-xs font-mono">
            <Medal className="w-3.5 h-3.5" /> Guaranteed Asset Security for Defense Families
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Military Discipline & Growth: <br />
            <span className="text-[#dda15e]">₹2L CapEx &rarr; 88 Cattle in 10 Years.</span>
          </h1>

          <p className="text-[#fefae0]/80 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Designed for armed forces officers and defense veterans seeking zero-speculation tangible family security. 1 Murrah Buffalo + 1 Calf are managed under disciplined veterinary protocols. Compounding annually through certified artificial insemination, your herd reaches 88 animals generating ₹82.32 Lacs annual milk turnover by Year 10.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-[#606c38]/30 font-mono text-xs">
            <div className="p-3.5 bg-[#141d11] border border-[#606c38]/40 rounded-xl">
              <span className="text-[#dda15e] text-[10px] uppercase block">Pension Unit</span>
              <span className="text-xl font-bold text-white mt-1 block">₹2,00,000</span>
              <span className="text-[#fefae0]/60 text-[10px]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-3.5 bg-[#141d11] border border-[#606c38]/40 rounded-xl">
              <span className="text-[#dda15e] text-[10px] uppercase block">10-Year Strength</span>
              <span className="text-xl font-bold text-[#dda15e] mt-1 block">88 Animals</span>
              <span className="text-[#fefae0]/60 text-[10px]">28 Active Milking Units</span>
            </div>
            <div className="p-3.5 bg-[#141d11] border border-[#606c38]/40 rounded-xl">
              <span className="text-[#dda15e] text-[10px] uppercase block">Year 10 Cashflow</span>
              <span className="text-xl font-bold text-white mt-1 block">₹82.32 Lacs</span>
              <span className="text-[#fefae0]/60 text-[10px]">Annual Milk Revenue</span>
            </div>
          </div>
        </div>

        {/* 10-Year Horizon */}
        <section id="veteran-schedule" className="rounded-3xl border border-[#606c38]/50 bg-[#182315] p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#606c38]/30 pb-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#dda15e] tracking-wider">
                VETERANS 10-YEAR SCHEDULE
              </span>
              <h2 className="text-2xl font-bold text-white mt-0.5">
                Inspect 10-Year Herd Progression
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 font-mono text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition ${
                    p.year === selectedYear
                      ? "bg-[#dda15e] text-black shadow-md"
                      : "bg-[#11190f] text-[#fefae0] hover:bg-[#283618]"
                  }`}
                >
                  Yr {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#11190f] border border-[#606c38]/30">
              <span className="text-[#dda15e] uppercase text-[10px] block">TOTAL REGIMENT</span>
              <span className="text-2xl font-bold text-white block mt-1">{active.totalHerdSize} Cattle</span>
              <span className="text-[#dda15e] text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#11190f] border border-[#606c38]/30">
              <span className="text-[#dda15e] uppercase text-[10px] block">DAILY MILK SUPPLY</span>
              <span className="text-2xl font-bold text-[#dda15e] block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span suppressHydrationWarning className="text-slate-400 text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString('en-IN')} L / yr
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#11190f] border border-[#606c38]/30">
              <span className="text-[#dda15e] uppercase text-[10px] block">ANNUAL MILK SALES</span>
              <span className="text-2xl font-bold text-white block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-slate-400 text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 rounded-xl bg-[#11190f] border border-[#606c38]/30">
              <span className="text-[#dda15e] uppercase text-[10px] block">TOTAL CAPITAL WEALTH</span>
              <span className="text-2xl font-bold text-[#dda15e] block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-slate-400 text-[11px] block mt-1">Livestock Value + Net Profit</span>
            </div>
          </div>

          <div className="p-3 bg-[#11190f] border border-[#606c38]/30 rounded-xl font-mono text-xs text-[#fefae0]">
            <strong className="text-[#dda15e]">DEFENSE LOG (YEAR {active.year}):</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-37" />
    </div>
  );
}
