"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Coffee,
  Store,
  TrendingUp,
  DollarSign,
  Milk,
  CheckCircle2,
} from "lucide-react";

export default function Design29Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#2e180d] text-[#fed7aa] font-sans antialiased selection:bg-[#f97316] selection:text-black">
      {/* Tapri Banner */}
      <div className="bg-[#1f0e07] border-b border-[#f97316]/30 py-2.5 px-6 flex items-center justify-between text-xs text-[#fdba74] font-bold">
        <span>☕ 1.4 BILLION CUPS OF CHAI EVERY SINGLE DAY &bull; RECESSION-PROOF INDIAN DAIRY CONSUMPTION</span>
        <span className="hidden sm:inline-block">8% HIGH-FAT A2 MILK DEMAND</span>
      </div>

      {/* Header */}
      <header className="border-b border-[#f97316]/20 bg-[#281309]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#ea580c] text-white flex items-center justify-center font-black text-lg shadow-lg">
              ☕
            </div>
            <div>
              <span className="font-black text-xl text-white block tracking-tight">
                HIRA CHAI TO DAIRY KING
              </span>
              <span className="text-[10px] text-[#fb923c] font-bold uppercase tracking-wider">
                Mass Retail & FMCG Pipeline // 29
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs font-bold">
            <Link href="/" className="text-[#fdba74] hover:text-white transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#tapri-schedule"
              className="px-5 py-2.5 rounded-2xl bg-[#ea580c] text-white hover:bg-[#c2410c] transition shadow-lg shadow-orange-600/30"
            >
              INVEST ₹2L MILK EMPIRE
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-3xl border-2 border-[#ea580c]/40 bg-gradient-to-b from-[#3d1f11] to-[#261208] p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea580c]/20 border border-[#ea580c]/40 text-[#fb923c] text-xs font-bold">
            <Coffee className="w-3.5 h-3.5" /> India’s Unstoppable Daily Milk Appetite
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Every Morning, India Needs Milk: <br />
            <span className="text-[#fb923c]">₹2L Seeds An 88-Buffalo Supply Empire.</span>
          </h1>

          <p className="text-[#fed7aa]/80 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Every household, chai tapri, hotel, and sweetshop in India opens with fresh milk. Stock market rallies come and go, but milk demand has zero down days. 1 Murrah Buffalo + 1 Calf compounds into 88 animals producing 1,17,600 liters annually and generating ₹82.32 Lacs annual revenue.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-[#ea580c]/20 text-xs">
            <div className="p-4 rounded-2xl bg-[#1c0c05] border border-[#ea580c]/30">
              <span className="text-[#fdba74] uppercase text-[10px] font-bold block">Starter Retail Unit</span>
              <span className="text-xl font-black text-white mt-1 block">₹2,00,000</span>
              <span className="text-[#fed7aa]/60 text-[10px]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#1c0c05] border border-[#ea580c]/30">
              <span className="text-[#fdba74] uppercase text-[10px] font-bold block">10-Year Empire</span>
              <span className="text-xl font-black text-[#fb923c] mt-1 block">88 Animals</span>
              <span className="text-[#fed7aa]/60 text-[10px]">28 Milking Units</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#1c0c05] border border-[#ea580c]/30">
              <span className="text-[#fdba74] uppercase text-[10px] font-bold block">Year 10 Milk Sales</span>
              <span className="text-xl font-black text-white mt-1 block">₹82.32 Lacs</span>
              <span className="text-[#fed7aa]/60 text-[10px]">Daily Cash Realization</span>
            </div>
          </div>
        </div>

        {/* 10-Year Horizon */}
        <section id="tapri-schedule" className="rounded-3xl border border-[#ea580c]/30 bg-[#261208] p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#ea580c]/20 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#fb923c]">
                FMCG MILK CASHFLOW HORIZON
              </span>
              <h2 className="text-2xl font-black text-white mt-0.5">
                Inspect 10-Year Milk Compounding
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded-xl font-bold transition ${
                    p.year === selectedYear
                      ? "bg-[#ea580c] text-white shadow-md"
                      : "bg-[#170903] text-[#fed7aa] hover:bg-[#341609]"
                  }`}
                >
                  Yr {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-[#170903] border border-[#ea580c]/20">
              <span className="text-[#fdba74] uppercase text-[10px] font-bold block">HERD TOTAL</span>
              <span className="text-3xl font-black text-white block mt-1">{active.totalHerdSize} Buffaloes</span>
              <span className="text-[#fb923c] text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#170903] border border-[#ea580c]/20">
              <span className="text-[#fdba74] uppercase text-[10px] font-bold block">DAILY MILK SUPPLY</span>
              <span className="text-3xl font-black text-[#fb923c] block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span suppressHydrationWarning className="text-[#fed7aa]/70 text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString('en-IN')} L / yr
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#170903] border border-[#ea580c]/20">
              <span className="text-[#fdba74] uppercase text-[10px] font-bold block">ANNUAL MILK SALES</span>
              <span className="text-3xl font-black text-white block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-[#fed7aa]/70 text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#170903] border border-[#ea580c]/20">
              <span className="text-[#fdba74] uppercase text-[10px] font-bold block">TOTAL CAPITAL WEALTH</span>
              <span className="text-3xl font-black text-[#fb923c] block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-[#fed7aa]/70 text-[11px] block mt-1">Livestock Value + Net Profit</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#170903] border-l-2 border-[#ea580c] text-xs text-[#fed7aa]">
            <strong className="text-[#fb923c]">Year {active.year} Retail Milestone:</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-29" />
    </div>
  );
}
