"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Sun,
  Flame,
  Award,
  Sparkles,
  Heart,
  Droplet,
} from "lucide-react";

export default function Design27Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#07192e] text-[#fef3c7] font-serif antialiased selection:bg-[#f59e0b] selection:text-black">
      {/* Dravidian Temple Ribbon */}
      <div className="bg-[#0b2442] border-b border-[#f59e0b]/30 py-2 px-6 text-center text-xs tracking-widest text-[#fde68a] uppercase font-sans">
        &diams; ANNAPURNA BOVINE HERITAGE &bull; PURE FILTER-COFFEE A2 FAT &bull; TRADITIONAL BILONA GHEE &diams;
      </div>

      {/* Header */}
      <header className="border-b border-[#f59e0b]/20 bg-[#07192e]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl border-2 border-[#f59e0b] bg-[#0e3860] flex items-center justify-center text-[#f59e0b] font-bold text-lg shadow-lg">
              अ
            </div>
            <div>
              <span className="font-bold text-lg text-white block tracking-wide font-serif">
                HIRA ANNAPURNA FARMS
              </span>
              <span className="text-[10px] text-[#f59e0b] uppercase tracking-wider font-sans">
                South Indian Dairy Heritage // 27
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6 font-sans text-xs">
            <Link href="/" className="text-[#fde68a] hover:text-white transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#annapurna-horizon"
              className="px-5 py-2.5 rounded-full bg-[#f59e0b] text-black font-bold uppercase tracking-wider hover:bg-[#d97706] transition shadow-lg"
            >
              Dedicate ₹2L Unit
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-3xl border border-[#f59e0b]/30 bg-gradient-to-b from-[#0c2c4d] to-[#07192e] p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="inline-block px-4 py-1 rounded-full border border-[#f59e0b]/40 bg-[#0e3860] text-[#f59e0b] text-xs font-sans tracking-widest uppercase">
            &diams; PONGAL & SANKRANTI SAMRIDDHI &diams;
          </div>

          <h1 className="text-4xl sm:text-6xl text-white tracking-tight leading-tight font-serif">
            The Living Temple Cow: <br />
            <span className="italic text-[#f59e0b]">From One Mother To 88 Sacred Cattle.</span>
          </h1>

          <p className="text-[#fef3c7]/80 text-base leading-relaxed font-sans font-light max-w-2xl">
            In South Indian culinary and temple culture, high-fat buffalo milk is essential for traditional filter coffee, pure Bilona ghee, and festive payasam. An initial allocation of ₹2,00,000 acquires 1 prime Murrah buffalo and 1 female calf, multiplying each year through certified AI to create an 88-animal herd in a single decade.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-[#f59e0b]/20 font-sans text-xs">
            <div className="p-4 rounded-2xl bg-[#081e36] border border-[#f59e0b]/30">
              <span className="text-[#fde68a] uppercase text-[10px] block">Auspicious Outlay</span>
              <span className="text-xl font-bold text-[#f59e0b] mt-1 block">₹2,00,000</span>
              <span className="text-[#fef3c7]/60 text-[10px]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#081e36] border border-[#f59e0b]/30">
              <span className="text-[#fde68a] uppercase text-[10px] block">10-Year Annapurna</span>
              <span className="text-xl font-bold text-white mt-1 block">88 Animals</span>
              <span className="text-[#fef3c7]/60 text-[10px]">Pure Murrah Lineage</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#081e36] border border-[#f59e0b]/30">
              <span className="text-[#fde68a] uppercase text-[10px] block">Year 10 Milk Gold</span>
              <span className="text-xl font-bold text-[#f59e0b] mt-1 block">₹82.32 Lacs</span>
              <span className="text-[#fef3c7]/60 text-[10px]">Annual Milk Revenue</span>
            </div>
          </div>
        </div>

        {/* 10-Year Horizon */}
        <section id="annapurna-horizon" className="rounded-3xl border border-[#f59e0b]/30 bg-[#09223d] p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#f59e0b]/20 pb-4 font-sans">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#f59e0b] font-semibold">
                Ten Years of Dravidian Bounty
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
                      ? "bg-[#f59e0b] text-black shadow-md"
                      : "bg-[#061525] text-[#fde68a] hover:bg-[#0c2a4c]"
                  }`}
                >
                  Year {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 font-sans text-xs">
            <div className="p-4 rounded-2xl bg-[#061525] border border-[#f59e0b]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">TOTAL HERD</span>
              <span className="text-3xl font-serif text-white block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-[#f59e0b] text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#061525] border border-[#f59e0b]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">DAILY MILK YIELD</span>
              <span className="text-3xl font-serif text-[#f59e0b] block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span className="text-[#fef3c7]/70 text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString()} L / yr
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#061525] border border-[#f59e0b]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">ANNUAL MILK SALES</span>
              <span className="text-3xl font-serif text-white block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-[#fef3c7]/70 text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#061525] border border-[#f59e0b]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">TOTAL WEALTH MATRIX</span>
              <span className="text-3xl font-serif text-[#f59e0b] block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-[#fef3c7]/70 text-[11px] block mt-1">Livestock Value + Milk Net</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#061525] border-l-2 border-[#f59e0b] text-xs font-sans text-[#fde68a]">
            <strong>Year {active.year} Blessing:</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-27" />
    </div>
  );
}
