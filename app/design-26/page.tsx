"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Globe,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Send,
  Building2,
} from "lucide-react";

export default function Design26Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#071714] text-[#ecfdf5] font-sans antialiased selection:bg-[#d4af37] selection:text-black">
      {/* NRI Banner */}
      <div className="bg-[#0c2420] border-b border-[#d4af37]/30 py-2 px-6 flex items-center justify-between text-xs text-[#d4af37] font-mono">
        <span>DUBAI &bull; ABU DHABI &bull; SINGAPORE &bull; LONDON &bull; NRE/NRO HIGH-YIELD HERD</span>
        <span className="hidden sm:inline-block text-emerald-400">TURNKEY MANAGED IN INDIA</span>
      </div>

      {/* Header */}
      <header className="border-b border-[#d4af37]/20 bg-[#081a17]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl border border-[#d4af37] bg-[#0c2420] flex items-center justify-center text-[#d4af37] shadow-lg">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-white text-base tracking-tight block">
                HIRA GULF & NRI HERD CLUB
              </span>
              <span className="text-[10px] text-[#d4af37] font-mono tracking-wider">
                Cross-Border Rupee Asset // 26
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono">
            <Link href="/" className="text-slate-400 hover:text-white transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#nri-schedule"
              className="px-5 py-2.5 rounded-xl border border-[#d4af37] bg-gradient-to-r from-[#d4af37] to-[#b39029] text-black font-bold uppercase tracking-wider hover:brightness-110 transition shadow-lg"
            >
              Allocate ₹2L Unit ($2,400)
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-3xl border border-[#d4af37]/30 bg-gradient-to-b from-[#0c2622] to-[#071916] p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono">
            <Building2 className="w-3.5 h-3.5" /> 100% Turnkey Farm Management for Expats
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Passive India Income: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-emerald-300 to-teal-200">
              ₹2 Lacs Remittance &rarr; 88 Head of Cattle.
            </span>
          </h1>

          <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Working in the Gulf or abroad? Build a tangible generational family estate back home in India without leaving your desk. 1 Murrah Buffalo + 1 Calf are fully managed by Hira Farms: 24/7 vet care, automated milking, sex-sorted AI, and monthly milk cashflow deposited directly into your NRE/NRO account.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-[#d4af37]/20 text-xs font-mono">
            <div className="p-3.5 bg-[#051411] border border-[#d4af37]/30 rounded-xl">
              <span className="text-[#d4af37] text-[10px] uppercase block">Remittance Pack</span>
              <span className="text-xl font-bold text-white mt-1 block">₹2,00,000</span>
              <span className="text-emerald-300/70 text-[10px]">~8,800 AED / $2,400</span>
            </div>
            <div className="p-3.5 bg-[#051411] border border-[#d4af37]/30 rounded-xl">
              <span className="text-[#d4af37] text-[10px] uppercase block">10-Year Estate</span>
              <span className="text-xl font-bold text-[#d4af37] mt-1 block">88 Animals</span>
              <span className="text-emerald-300/70 text-[10px]">Turnkey Managed</span>
            </div>
            <div className="p-3.5 bg-[#051411] border border-[#d4af37]/30 rounded-xl">
              <span className="text-[#d4af37] text-[10px] uppercase block">Year 10 Milk Sales</span>
              <span className="text-xl font-bold text-white mt-1 block">₹82.32 Lacs</span>
              <span className="text-emerald-300/70 text-[10px]">Annual NRE Payout</span>
            </div>
          </div>
        </div>

        {/* 10-Year Horizon */}
        <section id="nri-schedule" className="rounded-3xl border border-[#d4af37]/30 bg-[#091f1b] p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#d4af37]/20 pb-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#d4af37] tracking-wider">
                EXPAT ASSET PROGRESSION
              </span>
              <h2 className="text-2xl font-bold text-white mt-0.5">
                Inspect 10-Year Cross-Border Herd Growth
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 font-mono text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition ${
                    p.year === selectedYear
                      ? "border border-[#d4af37] bg-[#d4af37] text-black shadow-md"
                      : "bg-[#061411] text-emerald-200 hover:text-white"
                  }`}
                >
                  Yr {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#061411] border border-[#d4af37]/20">
              <span className="text-[#d4af37] uppercase text-[10px] block">TOTAL HERD IN INDIA</span>
              <span className="text-2xl font-bold text-white block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-[#d4af37] text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#061411] border border-[#d4af37]/20">
              <span className="text-[#d4af37] uppercase text-[10px] block">DAILY MILK RUN</span>
              <span className="text-2xl font-bold text-emerald-300 block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span className="text-slate-400 text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString()} L / yr
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#061411] border border-[#d4af37]/20">
              <span className="text-[#d4af37] uppercase text-[10px] block">ANNUAL MILK REVENUE</span>
              <span className="text-2xl font-bold text-white block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-slate-400 text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 rounded-xl bg-[#061411] border border-[#d4af37]/20">
              <span className="text-[#d4af37] uppercase text-[10px] block">TOTAL FAMILY WEALTH</span>
              <span className="text-2xl font-bold text-[#d4af37] block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-slate-400 text-[11px] block mt-1">Cattle Equity + Net Milk</span>
            </div>
          </div>

          <div className="p-3 bg-[#061411] border border-[#d4af37]/20 rounded-xl font-mono text-xs text-emerald-200">
            <strong className="text-[#d4af37]">NRE REPORT (YEAR {active.year}):</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-26" />
    </div>
  );
}
