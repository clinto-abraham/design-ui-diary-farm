"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Sparkles,
  Heart,
  Droplet,
  Flower2,
  Award,
} from "lucide-react";

export default function Design31Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#fbf8f2] text-[#3d2f21] font-serif antialiased selection:bg-[#b45309] selection:text-white">
      {/* Top Ribbon */}
      <div className="bg-[#451a03] text-[#fef3c7] py-2 px-6 text-center text-xs tracking-widest uppercase font-sans">
        &diams; RASAYANA VEDIC HERB-FED MURRAH &bull; BILONA GOLDEN GHEE &bull; PANCHAMRIT PURITY &diams;
      </div>

      {/* Header */}
      <header className="border-b border-[#eeddc8] bg-[#fbf8f2]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#b45309] bg-[#f5ede0] flex items-center justify-center text-[#b45309] font-bold text-lg">
              रस
            </div>
            <div>
              <span className="font-bold text-lg text-[#451a03] block tracking-wide">
                HIRA RASAYANA SANCTUARY
              </span>
              <span className="text-[10px] text-[#b45309] uppercase tracking-wider font-sans">
                Ayurvedic Wellness & Bovine Estate // 31
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6 font-sans text-xs">
            <Link href="/" className="text-[#78593c] hover:text-black transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#rasayana-horizon"
              className="px-5 py-2.5 rounded-full bg-[#b45309] text-white font-semibold hover:bg-[#92400e] transition shadow-md"
            >
              Reserve ₹2L Vedic Unit
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-3xl border-2 border-[#eeddc8] bg-[#f5ede0] p-8 sm:p-12 space-y-6 shadow-xl">
          <div className="inline-block px-4 py-1 rounded-full border border-[#b45309]/30 bg-white text-[#b45309] text-xs font-sans tracking-widest uppercase">
            &diams; SATTVIC LIQUID SUSTENANCE &diams;
          </div>

          <h1 className="text-4xl sm:text-6xl text-[#451a03] tracking-tight leading-tight">
            Ayurvedic Rasayana Dhan: <br />
            <span className="italic text-[#b45309]">One Nurtured Pair &rarr; 88 Sacred Mothers.</span>
          </h1>

          <p className="text-[#634832] text-base leading-relaxed font-sans max-w-2xl font-light">
            In classical Ayurveda, unadulterated high-fat buffalo milk is revered as Ojas—the essence of vitality and longevity. Invest ₹2,00,000 into 1 herb-fed Murrah buffalo and her daughter calf. Every year, sex-sorted AI expands your sacred herd, culminating in 88 animals yielding ₹82.32 Lacs annual milk turnover at Year 10.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-[#eeddc8] font-sans text-xs">
            <div className="p-4 rounded-2xl bg-white border border-[#eeddc8]">
              <span className="text-[#8c6b4f] uppercase text-[10px] block">Vedic Offering</span>
              <span className="text-xl font-serif text-[#451a03] mt-1 block">₹2,00,000</span>
              <span className="text-[#8c6b4f] text-[10px]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#eeddc8]">
              <span className="text-[#8c6b4f] uppercase text-[10px] block">10-Year Ojas Herd</span>
              <span className="text-xl font-serif text-[#b45309] mt-1 block">88 Animals</span>
              <span className="text-[#8c6b4f] text-[10px]">Herb-Nurtured Lineage</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#eeddc8]">
              <span className="text-[#8c6b4f] uppercase text-[10px] block">Yr 10 Milk Nectar</span>
              <span className="text-xl font-serif text-[#451a03] mt-1 block">₹82.32 Lacs</span>
              <span className="text-[#8c6b4f] text-[10px]">Annual Wellness Sales</span>
            </div>
          </div>
        </div>

        {/* 10-Year Horizon */}
        <section id="rasayana-horizon" className="rounded-3xl border-2 border-[#eeddc8] bg-white p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#eeddc8] pb-4 font-sans">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#b45309] font-semibold">
                Ten Cycles of Sattvic Growth
              </span>
              <h2 className="text-2xl font-serif text-[#451a03] mt-0.5">
                Inspect 10-Year Vedic Expansion
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded-full transition font-semibold ${
                    p.year === selectedYear
                      ? "bg-[#b45309] text-white shadow-md"
                      : "bg-[#f5ede0] text-[#634832] hover:bg-[#ebdcc7]"
                  }`}
                >
                  Year {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 font-sans text-xs">
            <div className="p-4 rounded-2xl bg-[#f5ede0] border border-[#eeddc8]">
              <span className="text-[#8c6b4f] uppercase text-[10px] block">TOTAL HERD</span>
              <span className="text-3xl font-serif text-[#451a03] block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-[#b45309] text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#f5ede0] border border-[#eeddc8]">
              <span className="text-[#8c6b4f] uppercase text-[10px] block">DAILY MILK RUN</span>
              <span className="text-3xl font-serif text-[#b45309] block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span suppressHydrationWarning className="text-[#8c6b4f] text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString('en-IN')} L / yr
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#f5ede0] border border-[#eeddc8]">
              <span className="text-[#8c6b4f] uppercase text-[10px] block">ANNUAL MILK SALES</span>
              <span className="text-3xl font-serif text-[#451a03] block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-[#8c6b4f] text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#f5ede0] border border-[#eeddc8]">
              <span className="text-[#8c6b4f] uppercase text-[10px] block">TOTAL RASAYANA CAPITAL</span>
              <span className="text-3xl font-serif text-[#b45309] block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-[#8c6b4f] text-[11px] block mt-1">Livestock Value + Net Profit</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#f5ede0] border-l-4 border-[#b45309] text-xs font-sans text-[#634832]">
            <strong>Year {active.year} Blessing:</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-31" />
    </div>
  );
}
