"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Sparkles,
  Sun,
  Award,
  Crown,
  Heart,
} from "lucide-react";

export default function Design22Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#1c0707] text-[#fef3c7] font-serif antialiased selection:bg-[#facc15] selection:text-black">
      {/* Auspicious Ribbon */}
      <div className="bg-[#450a0a] border-b border-[#facc15]/30 py-2 px-6 text-center text-xs tracking-widest text-[#fde68a] uppercase font-sans">
        &diams; 卐 SHUBH AKSHAYA SAMRIDDHI &bull; SWARNA DHENUKALASH &bull; PURE A2 LIQUID GOLD 卐 &diams;
      </div>

      {/* Header */}
      <header className="border-b border-[#facc15]/30 bg-[#280a0a]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#facc15] bg-[#3b0d0d] flex items-center justify-center text-[#facc15] font-bold text-lg shadow-[0_0_15px_rgba(250,204,21,0.3)]">
              श्री
            </div>
            <div>
              <span className="font-bold text-lg text-white block tracking-wide font-serif">
                HIRA SWARNA LAKSHMI
              </span>
              <span className="text-[10px] text-[#facc15] uppercase tracking-widest font-sans">
                Temple Heritage & Dairy Wealth // 22
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6 font-sans text-xs">
            <Link href="/" className="text-[#fde68a] hover:text-white transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#lakshmi-horizon"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#facc15] to-[#d97706] text-black font-bold uppercase tracking-wider hover:brightness-110 transition shadow-lg"
            >
              Adopt ₹2,00,000 Shagun Pack
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 border border-[#facc15]/40 bg-[#3b0d0d] text-[#facc15] text-[11px] font-sans tracking-widest uppercase rounded-full">
            &diams; AKSHAYA TRITIYA COMPOUNDING &diams;
          </div>

          <h1 className="text-4xl sm:text-6xl text-white tracking-tight leading-tight font-serif">
            Living Swarna Dhan. <br />
            <span className="italic text-[#facc15]">One Buffalo Duo Becomes 88 Mothers.</span>
          </h1>

          <p className="text-[#fef3c7]/80 text-base leading-relaxed font-sans font-light">
            Gold in a vault sits idle, but Gau-Lakshmi multiplies every sunrise. A ₹2,00,000 Shagun investment brings home one divine lactating Murrah buffalo and her daughter calf. Every year, sex-sorted AI grants a new female calf. Every 3 years, daughters bear children, creating a ₹3.25 Crore golden dynasty.
          </p>

          <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#facc15]/30 pt-6 font-sans text-xs">
            <div className="p-4 border border-[#facc15]/30 bg-[#280a0a] rounded-2xl">
              <span className="text-[#fde68a] uppercase text-[10px] block">Shagun Outlay</span>
              <span className="text-xl font-bold text-[#facc15] mt-1 block">₹2,00,000</span>
              <span className="text-[#fef3c7]/70 text-[10px]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-4 border border-[#facc15]/30 bg-[#280a0a] rounded-2xl">
              <span className="text-[#fde68a] uppercase text-[10px] block">10-Year Lakshmi</span>
              <span className="text-xl font-bold text-white mt-1 block">88 Animals</span>
              <span className="text-[#fef3c7]/70 text-[10px]">Pure Murrah Lineage</span>
            </div>
            <div className="p-4 border border-[#facc15]/30 bg-[#280a0a] rounded-2xl">
              <span className="text-[#fde68a] uppercase text-[10px] block">Year 10 Milk Gold</span>
              <span className="text-xl font-bold text-[#facc15] mt-1 block">₹82.32 Lacs</span>
              <span className="text-[#fef3c7]/70 text-[10px]">Annual Milk Revenue</span>
            </div>
          </div>
        </div>

        {/* 10-Year Stepper */}
        <section id="lakshmi-horizon" className="border-2 border-[#facc15]/40 bg-[#2b0c0c] p-8 space-y-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#facc15]/20 pb-4 font-sans">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#facc15] font-semibold">
                Ten Years of Akshaya Prosperity
              </span>
              <h2 className="text-2xl font-serif text-white mt-0.5">
                Inspect 10-Year Herd Expansion
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded-full transition font-semibold ${
                    p.year === selectedYear
                      ? "bg-[#facc15] text-black shadow-md"
                      : "bg-[#1f0606] text-[#fde68a] hover:bg-[#3d0f0f]"
                  }`}
                >
                  Year {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 font-sans text-xs">
            <div className="p-4 rounded-2xl bg-[#1c0707] border border-[#facc15]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">HERD MULTIPLICATION</span>
              <span className="text-3xl font-serif text-white block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-[#facc15] text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1c0707] border border-[#facc15]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">DAILY MILK NECTAR</span>
              <span className="text-3xl font-serif text-[#facc15] block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span suppressHydrationWarning className="text-[#fef3c7]/70 text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString('en-IN')} L / yr
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1c0707] border border-[#facc15]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">ANNUAL MILK INCOME</span>
              <span className="text-3xl font-serif text-white block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-[#fef3c7]/70 text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1c0707] border border-[#facc15]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">CUMULATIVE SAMRIDDHI</span>
              <span className="text-3xl font-serif text-[#facc15] block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-[#fef3c7]/70 text-[11px] block mt-1">Gau-Dhan Asset + Milk</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1c0707] border-l-2 border-[#facc15] text-xs font-sans text-[#fde68a]">
            <strong>Year {active.year} Blessing:</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-22" />
    </div>
  );
}
