"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  FileText,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  Calendar,
  Layers,
} from "lucide-react";

export default function Design24Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#fffbf2] text-[#422006] font-serif antialiased selection:bg-[#ea580c] selection:text-white">
      {/* Shubh Labh Ribbon */}
      <div className="bg-[#991b1b] text-[#fef3c7] py-2 px-6 text-center text-xs tracking-widest uppercase font-sans">
        卐 ॥ શ્રી ગણેશાય નમઃ ॥ &bull; શુભ લાભ &bull; HIRA VYAPAR LEDGER &bull; SHUBH LABH 卐
      </div>

      {/* Header */}
      <header className="border-b border-[#fed7aa] bg-[#fffbf2]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ea580c] text-white flex items-center justify-center font-bold text-lg shadow-md">
              શુભ
            </div>
            <div>
              <span className="font-bold text-xl text-[#7c2d12] block tracking-tight">
                HIRA SHUBH LABH LEDGER
              </span>
              <span className="text-[10px] text-[#ea580c] uppercase tracking-wider font-sans">
                Gujarati Vyapar Bahi-Khata // 24
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6 font-sans text-xs">
            <Link href="/" className="text-[#9a3412] hover:text-black transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#vyapar-ledger"
              className="px-5 py-2.5 rounded-full bg-[#991b1b] text-white font-bold hover:bg-[#7f1d1d] transition shadow-md"
            >
              Start ₹2,00,000 Vyapar
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-3xl border-2 border-[#fed7aa] bg-[#fff7ed] p-8 sm:p-12 space-y-6 shadow-xl">
          <div className="inline-block px-3 py-1 rounded-full bg-[#ffedd5] border border-[#fed7aa] text-[#c2410c] text-xs font-sans font-bold">
            ॥ પાકો હિસાબ - ચોખ્ખો નફો ॥ Debt-Free Cashflow Machine
          </div>

          <h1 className="text-4xl sm:text-6xl text-[#7c2d12] tracking-tight leading-tight">
            Paisa-to-Paisa Compounding: <br />
            <span className="text-[#ea580c] italic">₹2 Lacs Capital &rarr; ₹3.25 Cr+ Net Vyapar.</span>
          </h1>

          <p className="text-[#78350f] text-base leading-relaxed font-sans">
            In Gujarati business tradition, real wealth is built on daily cash recovery and multiplying inventory. An investment of ₹2,00,000 in 1 Murrah buffalo and 1 female calf generates daily liquid income (14L milk @ ₹70/L) while multiplying into an 88-animal herd in 10 years without taking a single rupee of bank debt.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-[#fed7aa] font-sans text-xs">
            <div className="p-4 rounded-2xl bg-white border border-[#fed7aa]">
              <span className="text-[#9a3412] uppercase text-[10px] font-bold block">Starter Vyapar</span>
              <span className="text-xl font-bold text-[#7c2d12] mt-1 block">₹2,00,000</span>
              <span className="text-[#78350f] text-[10px]">1 Buffalo + 1 Calf</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#fed7aa]">
              <span className="text-[#9a3412] uppercase text-[10px] font-bold block">10-Year Inventory</span>
              <span className="text-xl font-bold text-[#ea580c] mt-1 block">88 Animals</span>
              <span className="text-[#78350f] text-[10px]">28 Lactating Units</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#fed7aa]">
              <span className="text-[#9a3412] uppercase text-[10px] font-bold block">Year 10 Milk Sales</span>
              <span className="text-xl font-bold text-[#7c2d12] mt-1 block">₹82.32 Lacs</span>
              <span className="text-[#78350f] text-[10px]">Annual Cash Turnover</span>
            </div>
          </div>
        </div>

        {/* 10-Year Bahi Khata Ledger */}
        <section id="vyapar-ledger" className="rounded-3xl border-2 border-[#fed7aa] bg-white p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#fed7aa] pb-4 font-sans">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#ea580c] font-bold">
                દસ વર્ષનું ચોપડા ખાતું // 10-YEAR MASTER LEDGER
              </span>
              <h2 className="text-2xl text-[#7c2d12] font-serif font-bold mt-0.5">
                Inspect Vyapar Progression By Year
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded-full font-bold transition ${
                    p.year === selectedYear
                      ? "bg-[#991b1b] text-white shadow-md"
                      : "bg-[#fff7ed] text-[#78350f] hover:bg-[#ffedd5]"
                  }`}
                >
                  Year {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 font-sans text-xs">
            <div className="p-4 rounded-2xl bg-[#fff7ed] border border-[#fed7aa]">
              <span className="text-[#9a3412] uppercase text-[10px] font-bold block">HERD INVENTORY</span>
              <span className="text-3xl font-serif font-bold text-[#7c2d12] block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-[#ea580c] text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#fff7ed] border border-[#fed7aa]">
              <span className="text-[#9a3412] uppercase text-[10px] font-bold block">DAILY MILK RUN</span>
              <span className="text-3xl font-serif font-bold text-[#ea580c] block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span className="text-[#78350f] text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString()} L / yr
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#fff7ed] border border-[#fed7aa]">
              <span className="text-[#9a3412] uppercase text-[10px] font-bold block">ANNUAL GROSS SALES</span>
              <span className="text-3xl font-serif font-bold text-[#7c2d12] block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-[#78350f] text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#fff7ed] border border-[#fed7aa]">
              <span className="text-[#9a3412] uppercase text-[10px] font-bold block">CUMULATIVE CAPITAL</span>
              <span className="text-3xl font-serif font-bold text-[#ea580c] block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-[#78350f] text-[11px] block mt-1">Livestock Value + Net Profit</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#fff7ed] border-l-4 border-[#991b1b] text-xs font-sans text-[#78350f]">
            <strong>Year {active.year} Shubh Milestone:</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-24" />
    </div>
  );
}
