"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Flower2,
  Wind,
  Sparkles,
  CheckCircle,
  Calendar,
  Layers,
} from "lucide-react";

export default function Design13Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#141413] text-[#e8e5df] font-sans antialiased selection:bg-[#a87845] selection:text-white">
      {/* Zen Top Header */}
      <header className="border-b border-[#282725] bg-[#141413]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between text-xs font-light">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-[#a87845]/50 flex items-center justify-center text-[#a87845] text-xs font-serif">
              和
            </div>
            <div>
              <span className="text-white font-medium tracking-widest block text-sm">HIRA ZEN BOVINE</span>
              <span className="text-[10px] text-[#8c887f] uppercase tracking-wider">Wabi-Sabi Dairy // 13</span>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-[#8c887f] hover:text-white transition">
              All 20 Themes
            </Link>
            <a
              href="#zen-cycles"
              className="px-4 py-2 border border-[#a87845] text-[#a87845] hover:bg-[#a87845] hover:text-black transition text-xs tracking-wider"
            >
              COMMIT ₹2.00L
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs text-[#a87845] tracking-widest uppercase">
            <Flower2 className="w-3.5 h-3.5" /> Mindful Bovine Compounding
          </div>
          <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight leading-[1.1]">
            Ten Springs of Growth. <br />
            <span className="text-[#a87845] italic">From One Mother to Eighty-Eight.</span>
          </h1>
          <p className="text-[#9e9a91] text-base leading-relaxed font-light">
            In the philosophy of Wabi-Sabi, nature compounds without haste, yet leaves nothing incomplete. An initial offering of ₹2,00,000 acquires one Murrah mother and her heifer calf. Nurtured with pure water and seasonal grasses, she yields 14 liters of sacred A2 milk daily while multiplying into an 88-animal herd in a single decade.
          </p>

          <div className="pt-4 grid grid-cols-3 gap-6 border-t border-[#282725] text-xs">
            <div>
              <span className="text-[#8c887f] block uppercase text-[10px]">Initial Vessel</span>
              <span className="text-xl text-white font-light mt-1 block">₹2,00,000</span>
              <span className="text-[#8c887f]">1 Mother + 1 Calf</span>
            </div>
            <div>
              <span className="text-[#8c887f] block uppercase text-[10px]">10th Spring Herd</span>
              <span className="text-xl text-[#a87845] font-light mt-1 block">88 Buffaloes</span>
              <span className="text-[#8c887f]">Natural AI Insemination</span>
            </div>
            <div>
              <span className="text-[#8c887f] block uppercase text-[10px]">Year 10 Milk Nectar</span>
              <span className="text-xl text-white font-light mt-1 block">₹82.32 Lacs</span>
              <span className="text-[#8c887f]">Annual Farm Turnover</span>
            </div>
          </div>
        </div>

        {/* 10 Seasonal Springs Accordion/Timeline */}
        <section id="zen-cycles" className="border border-[#282725] bg-[#191817] p-8 space-y-8 rounded-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#282725] pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#a87845]">
                Ten Seasonal Cycles
              </span>
              <h2 className="text-2xl text-white font-light mt-1">
                The Ten-Year Rhythm of Bovine Life
              </h2>
            </div>
            <div className="flex flex-wrap gap-1">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1 text-xs border transition ${
                    p.year === selectedYear
                      ? "border-[#a87845] bg-[#a87845] text-black font-semibold"
                      : "border-[#282725] text-[#8c887f] hover:text-white"
                  }`}
                >
                  Spring {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 border border-[#282725] bg-[#141413]">
              <span className="text-[#8c887f] block uppercase text-[10px]">Herd Presence</span>
              <span className="text-2xl font-light text-white block mt-1">{active.totalHerdSize} Animals</span>
              <span className="text-[#a87845] text-[11px] block mt-1">
                {active.matureBuffaloes} Milking Mothers
              </span>
            </div>

            <div className="p-4 border border-[#282725] bg-[#141413]">
              <span className="text-[#8c887f] block uppercase text-[10px]">Daily Milk Offering</span>
              <span className="text-2xl font-light text-white block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span className="text-[#8c887f] text-[11px] block mt-1">Pure A2 High Fat</span>
            </div>

            <div className="p-4 border border-[#282725] bg-[#141413]">
              <span className="text-[#8c887f] block uppercase text-[10px]">Annual Milk Revenue</span>
              <span className="text-2xl font-light text-[#a87845] block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-[#8c887f] text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 border border-[#282725] bg-[#141413]">
              <span className="text-[#8c887f] block uppercase text-[10px]">Enduring Wealth</span>
              <span className="text-2xl font-light text-white block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-[#8c887f] text-[11px] block mt-1">Herd Equity + Milk Net</span>
            </div>
          </div>

          <div className="p-4 border-l border-[#a87845] bg-[#141413] text-xs text-[#9e9a91]">
            <strong className="text-white">Spring {active.year} Contemplation:</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-13" />
    </div>
  );
}
