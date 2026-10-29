"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, formatNumber, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Zap,
  Clock,
  Truck,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function Design40Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#110526] text-purple-100 font-sans antialiased selection:bg-[#facc15] selection:text-black">
      {/* Quick Commerce Top Banner */}
      <div className="bg-[#1f0a42] border-b border-purple-500/30 py-2.5 px-6 flex items-center justify-between text-xs text-yellow-300 font-bold">
        <span>⚡ 10-MINUTE QUICK-COMMERCE FARM-TO-DOORSTEP PIPELINE &bull; BENGALURU &bull; MUMBAI &bull; DELHI NCR</span>
        <span className="hidden sm:inline-block text-emerald-400">6:00 AM GUARANTEED MILK DISPATCH</span>
      </div>

      {/* Header */}
      <header className="border-b border-purple-500/20 bg-[#110526]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-yellow-400 text-purple-950 font-black flex items-center justify-center text-lg shadow-lg">
              ⚡
            </div>
            <div>
              <span className="font-black text-xl text-white block tracking-tight">
                HIRA QUICK-COMMERCE DAIRY
              </span>
              <span className="text-[10px] text-yellow-400 font-bold uppercase tracking-wider">
                10-Minute Dark Store Pipeline // 40
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs font-bold">
            <Link href="/" className="text-purple-300 hover:text-white transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#quick-schedule"
              className="px-5 py-2.5 rounded-2xl bg-yellow-400 text-purple-950 font-black uppercase tracking-wider hover:bg-yellow-300 transition shadow-lg shadow-yellow-400/20"
            >
              INVEST ₹2L DARK-STORE PACK
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-3xl border-2 border-purple-500/40 bg-gradient-to-b from-[#250d4f] to-[#160633] p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs font-bold">
            <Clock className="w-3.5 h-3.5" /> High-Margin Direct Consumer Subscriptions
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Direct Farm-to-Doorstep: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-200">
              ₹2L Capital Scales to 88 Compounding Cattle.
            </span>
          </h1>

          <p className="text-purple-200 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            In modern Indian metros, millions of families pay premium prices for unadulterated A2 morning milk delivered before 7:00 AM. 1 Murrah Buffalo + 1 Calf bypasses middlemen and directly feeds into urban quick-commerce dark stores. Supported by certified sex-sorted AI, your herd expands to 88 animals generating ₹82.32 Lacs annual turnover.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-purple-500/20 text-xs font-bold">
            <div className="p-4 rounded-2xl bg-[#0e0420] border border-purple-500/30">
              <span className="text-yellow-400 uppercase text-[10px] block">Dark-Store Unit</span>
              <span className="text-xl font-black text-white mt-1 block">₹2,00,000</span>
              <span className="text-purple-300 text-[10px]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#0e0420] border border-purple-500/30">
              <span className="text-yellow-400 uppercase text-[10px] block">Year 10 Network</span>
              <span className="text-xl font-black text-yellow-300 mt-1 block">88 Animals</span>
              <span className="text-purple-300 text-[10px]">28 Lactating Units</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#0e0420] border border-purple-500/30">
              <span className="text-yellow-400 uppercase text-[10px] block">Year 10 Milk Sales</span>
              <span className="text-xl font-black text-white mt-1 block">₹82.32 Lacs</span>
              <span className="text-purple-300 text-[10px]">Daily Doorstep Cashflow</span>
            </div>
          </div>
        </div>

        {/* 10-Year Horizon */}
        <section id="quick-schedule" className="rounded-3xl border border-purple-500/30 bg-[#190938] p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-500/20 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
                QUICK-COMMERCE 10-YEAR SUPPLY HORIZON
              </span>
              <h2 className="text-2xl font-black text-white mt-0.5">
                Inspect 10-Year Milk Production
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded-xl font-bold transition ${
                    p.year === selectedYear
                      ? "bg-yellow-400 text-purple-950 shadow-md"
                      : "bg-[#0f0422] text-purple-200 hover:bg-[#250d4f]"
                  }`}
                >
                  Yr {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 text-xs font-bold">
            <div className="p-4 rounded-2xl bg-[#0f0422] border border-purple-500/20">
              <span className="text-yellow-400 uppercase text-[10px] block">TOTAL HERD</span>
              <span className="text-3xl font-black text-white block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-yellow-300 text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0f0422] border border-purple-500/20">
              <span className="text-yellow-400 uppercase text-[10px] block">DAILY DOORSTEP LITERS</span>
              <span className="text-3xl font-black text-yellow-300 block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span className="text-purple-300 text-[11px] block mt-1" suppressHydrationWarning>
                {formatNumber(active.annualMilkProductionLiters)} L / yr
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0f0422] border border-purple-500/20">
              <span className="text-yellow-400 uppercase text-[10px] block">ANNUAL MILK SALES</span>
              <span className="text-3xl font-black text-white block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-purple-300 text-[11px] block mt-1">@ ₹70/L Doorstep Rate</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0f0422] border border-purple-500/20">
              <span className="text-yellow-400 uppercase text-[10px] block">TOTAL WEALTH MATRIX</span>
              <span className="text-3xl font-black text-yellow-300 block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-purple-300 text-[11px] block mt-1">Livestock Assets + Milk Net</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0f0422] border-l-2 border-yellow-400 text-xs text-purple-200">
            <strong className="text-yellow-300">Quick-Commerce Log (Year {active.year}):</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-40" />
    </div>
  );
}
