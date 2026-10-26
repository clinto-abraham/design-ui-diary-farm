"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Sun,
  Sprout,
  Zap,
  Leaf,
  Recycle,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function Design15Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#f3faf4] text-[#1c3321] font-sans antialiased selection:bg-[#16a34a] selection:text-white">
      {/* Top Solar Banner */}
      <div className="bg-[#15803d] text-white py-2 px-6 flex items-center justify-between text-xs font-medium">
        <span className="flex items-center gap-2">
          <Sun className="w-4 h-4 text-amber-300" />
          100% SOLAR POWERED MILKING &bull; ZERO-CARBON DAIRY &bull; CIRCULAR BIOGAS
        </span>
        <span className="hidden sm:inline-block">NET ZERO CERTIFIED 2026</span>
      </div>

      {/* Header */}
      <header className="border-b border-[#d8edd9] bg-[#f3faf4]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#15803d] flex items-center justify-center text-amber-300 font-bold shadow-md shadow-green-900/10">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg text-[#15803d] block tracking-tight">
                HIRA SOLARPUNK ECO-FARM
              </span>
              <span className="text-[10px] text-[#4d7054] uppercase tracking-wider">
                Regenerative Compounding // 15
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs">
            <Link href="/" className="text-[#4d7054] hover:text-[#15803d] transition font-medium hidden sm:inline-block">
              All 20 Themes
            </Link>
            <a
              href="#solar-cycles"
              className="px-5 py-2.5 rounded-full bg-[#15803d] text-white font-semibold hover:bg-[#126832] transition shadow-md shadow-green-800/20"
            >
              Adopt ₹2L Eco-Unit
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dcfce7] border border-[#bbf7d0] text-[#15803d] text-xs font-semibold">
              <Sprout className="w-3.5 h-3.5" /> 100% Solar-Powered Compounding
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#15803d] tracking-tight leading-tight">
              Grow A Green Empire. <br />
              <span className="text-[#ca8a04]">₹2L Seeds An 88-Animal Herd.</span>
            </h1>
            <p className="text-[#3b5940] text-base sm:text-lg leading-relaxed">
              Where high technology joins regenerative nature. 1 Murrah Buffalo + 1 Female Calf creates a closed-loop biological ecosystem. Powered by farm-roof solar panels and organic fodder, artificial insemination multiplies your herd each year, yielding ₹82+ Lacs annual revenue by Year 10.
            </p>

            <div className="pt-2 grid grid-cols-3 gap-4 border-t border-[#d8edd9] pt-6 text-xs">
              <div className="p-4 rounded-2xl bg-white border border-[#d8edd9] shadow-sm">
                <span className="text-[#64846a] uppercase text-[10px] block">Capital Seed</span>
                <span className="text-lg font-bold text-[#15803d] mt-1 block">₹2,00,000</span>
                <span className="text-[#64846a]">1 Mother + 1 Calf</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#d8edd9] shadow-sm">
                <span className="text-[#64846a] uppercase text-[10px] block">Decade Herd</span>
                <span className="text-lg font-bold text-[#ca8a04] mt-1 block">88 Animals</span>
                <span className="text-[#64846a]">Sex-Sorted AI</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#d8edd9] shadow-sm">
                <span className="text-[#64846a] uppercase text-[10px] block">Yr 10 Milk Sales</span>
                <span className="text-lg font-bold text-[#15803d] mt-1 block">₹82.32 Lacs</span>
                <span className="text-[#64846a]">Clean A2 Milk</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl bg-white border-2 border-[#bbf7d0] shadow-xl space-y-4">
              <div className="flex items-center gap-3 border-b border-[#d8edd9] pb-3 text-xs text-[#15803d] font-bold">
                <Recycle className="w-4 h-4 text-[#15803d]" /> CIRCULAR BIO-ECONOMY
              </div>
              <div className="space-y-3 text-xs text-[#3b5940]">
                <div className="p-3 rounded-xl bg-[#f0fdf4] border border-[#dcfce7] flex items-center justify-between">
                  <span>Daily Pure Milk:</span>
                  <strong className="text-[#15803d]">14L / Day per Milking Adult</strong>
                </div>
                <div className="p-3 rounded-xl bg-[#f0fdf4] border border-[#dcfce7] flex items-center justify-between">
                  <span>Biogas Electricity:</span>
                  <strong className="text-[#15803d]">Powering Farm Chillers</strong>
                </div>
                <div className="p-3 rounded-xl bg-[#f0fdf4] border border-[#dcfce7] flex items-center justify-between">
                  <span>Carbon Offset:</span>
                  <strong className="text-[#15803d]">Negative Footprint</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 10-Year Solar Compounding Horizon */}
        <section id="solar-cycles" className="rounded-3xl bg-white border-2 border-[#d8edd9] p-8 space-y-8 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#d8edd9] pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ca8a04]">
                Regenerative Compounding Horizon
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#15803d] mt-0.5">
                10-Year Eco-Growth Stepper
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 bg-[#f0fdf4] p-1.5 rounded-2xl border border-[#d8edd9]">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1 text-xs rounded-xl font-bold transition ${
                    p.year === selectedYear
                      ? "bg-[#15803d] text-white shadow"
                      : "text-[#3b5940] hover:text-[#15803d]"
                  }`}
                >
                  Y{p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-[#f0fdf4] border border-[#dcfce7]">
              <span className="text-[#64846a] uppercase text-[10px] block">TOTAL HERD</span>
              <span className="text-3xl font-extrabold text-[#15803d] block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-[#ca8a04] text-[11px] font-semibold mt-1 block">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Calves
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#f0fdf4] border border-[#dcfce7]">
              <span className="text-[#64846a] uppercase text-[10px] block">DAILY MILK RUN</span>
              <span className="text-3xl font-extrabold text-[#15803d] block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span className="text-[#64846a] text-[11px] mt-1 block">
                {(active.annualMilkProductionLiters).toLocaleString()} L / yr
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#f0fdf4] border border-[#dcfce7]">
              <span className="text-[#64846a] uppercase text-[10px] block">ANNUAL MILK TURNOVER</span>
              <span className="text-3xl font-extrabold text-[#ca8a04] block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-[#64846a] text-[11px] mt-1 block">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#f0fdf4] border border-[#dcfce7]">
              <span className="text-[#64846a] uppercase text-[10px] block">TOTAL CUMULATIVE WEALTH</span>
              <span className="text-3xl font-extrabold text-[#15803d] block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-[#64846a] text-[11px] mt-1 block">Herd Equity + Milk Net</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#f0fdf4] border border-[#dcfce7] text-xs text-[#2c4731]">
            <strong className="text-[#15803d]">Year {active.year} Eco-Milestone:</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-15" />
    </div>
  );
}
