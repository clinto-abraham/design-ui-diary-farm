"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Leaf,
  Sun,
  ShieldCheck,
  Heart,
  Droplet,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function Design11Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const current = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#2c332d] font-sans antialiased selection:bg-[#263628] selection:text-[#f8f7f4]">
      {/* Top Hygge Ribbon */}
      <div className="bg-[#263628] text-[#e8e4dc] py-2 px-6 text-center text-xs tracking-wider uppercase font-medium">
        Nordic Organic Stewardship &bull; Pasture-Reared Murrah Lineage &bull; Certified Pure A2
      </div>

      {/* Nordic Header */}
      <header className="border-b border-[#e5e0d8] bg-[#f8f7f4]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#e3ded4] flex items-center justify-center text-[#263628]">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <span className="font-semibold text-lg text-[#263628] block tracking-tight">
                Hira Nordic Farms
              </span>
              <span className="text-[10px] text-[#69756b] uppercase tracking-widest">
                Sustainable Dairy &bull; 11 Nordic
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs font-medium">
            <Link href="/" className="text-[#69756b] hover:text-[#263628] transition hidden sm:inline-block">
              All 20 Designs
            </Link>
            <a
              href="#nordic-compounding"
              className="px-5 py-2.5 rounded-full bg-[#263628] text-[#f8f7f4] hover:bg-[#1b261c] transition shadow-sm"
            >
              Allocate ₹2L Unit
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede8df] text-[#3e4a3f] text-xs font-medium">
            <Sun className="w-3.5 h-3.5 text-[#6c7d6e]" /> Organic Herd Multiplying Model
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#263628] tracking-tight leading-[1.15]">
            Quiet Compounding. <br />
            <span className="font-semibold italic">One Buffalo to 88 Animals.</span>
          </h1>
          <p className="text-[#556357] text-base sm:text-lg leading-relaxed font-light">
            In Scandinavian farming, true wealth stems from harmony and patience. A ₹2,00,000 commitment welcomes one mother buffalo and her daughter calf. Every 12 months, sex-sorted artificial insemination welcomes a new female calf. Every 3 years, daughters begin lactating—producing 88 animals and ₹82+ Lacs annual milk turnover.
          </p>

          <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#e2ddd5] pt-6">
            <div className="p-4 rounded-2xl bg-[#ede8df]/70 border border-[#ded8cd]">
              <span className="text-[11px] text-[#78857a] uppercase block">Starter Pack</span>
              <span className="text-lg font-semibold text-[#263628] mt-0.5 block">₹2,00,000</span>
              <span className="text-[11px] text-[#556357]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#ede8df]/70 border border-[#ded8cd]">
              <span className="text-[11px] text-[#78857a] uppercase block">Year 10 Herd</span>
              <span className="text-lg font-semibold text-[#263628] mt-0.5 block">88 Animals</span>
              <span className="text-[11px] text-[#556357]">28 Milking Mothers</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#ede8df]/70 border border-[#ded8cd]">
              <span className="text-[11px] text-[#78857a] uppercase block">Year 10 Milk</span>
              <span className="text-lg font-semibold text-[#263628] mt-0.5 block">₹82.32 Lacs</span>
              <span className="text-[11px] text-[#556357]">Annual Run-Rate</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="p-4 rounded-3xl bg-[#ede8df] border border-[#ded8cd] shadow-md space-y-3">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/Murrah_buffalo.JPG"
                alt="Murrah Buffalo"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3 text-center text-xs text-[#556357]">
              Ethical Pasture Management &bull; 14 Liters Pure A2 Milk Daily
            </div>
          </div>
        </div>
      </section>

      {/* 10-Year Nordic Compounding Section */}
      <section id="nordic-compounding" className="max-w-6xl mx-auto px-6 py-16 space-y-10 border-t border-[#e5e0d8]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#69756b] font-medium">
              Ten-Year Horizon Plan
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#263628] mt-1">
              Natural Herd Growth & Milk Progression
            </h2>
          </div>
          <div className="flex items-center gap-1.5 bg-[#ede8df] p-1.5 rounded-2xl border border-[#ded8cd]">
            {projections.map((p) => (
              <button
                key={p.year}
                onClick={() => setSelectedYear(p.year)}
                className={`px-3 py-1 text-xs rounded-xl transition ${
                  p.year === selectedYear
                    ? "bg-[#263628] text-[#f8f7f4] font-medium shadow-sm"
                    : "text-[#556357] hover:text-[#263628]"
                }`}
              >
                Y{p.year}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Horizon Card */}
        <div className="rounded-3xl bg-[#ede8df] border border-[#ded8cd] p-8 space-y-6">
          <div className="grid sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#f8f7f4] border border-[#ded8cd]">
              <span className="text-[11px] text-[#78857a] uppercase block">Total Herd Size</span>
              <span className="text-3xl font-light text-[#263628] mt-1 block">{current.totalHerdSize} Animals</span>
              <span className="text-xs text-[#556357] mt-1 block">
                {current.matureBuffaloes} Milking | {current.growingHeifers + current.calvesBornThisYear} Calves
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#f8f7f4] border border-[#ded8cd]">
              <span className="text-[11px] text-[#78857a] uppercase block">Daily Milk Yield</span>
              <span className="text-3xl font-light text-[#263628] mt-1 block">{current.dailyMilkProductionLiters} Liters</span>
              <span suppressHydrationWarning className="text-xs text-[#556357] mt-1 block">
                {(current.annualMilkProductionLiters).toLocaleString('en-IN')} L / year
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#f8f7f4] border border-[#ded8cd]">
              <span className="text-[11px] text-[#78857a] uppercase block">Annual Milk Revenue</span>
              <span className="text-3xl font-light text-[#263628] mt-1 block">{formatINR(current.grossMilkingRevenueINR)}</span>
              <span className="text-xs text-[#556357] mt-1 block">@ ₹70/L farm gate</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#f8f7f4] border border-[#ded8cd]">
              <span className="text-[11px] text-[#78857a] uppercase block">Total Cumulative Value</span>
              <span className="text-3xl font-light text-[#263628] mt-1 block">{formatINR(current.totalCumulativeWealthINR)}</span>
              <span className="text-xs text-[#556357] mt-1 block">Live Assets + Net Milk</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#f8f7f4] border border-[#ded8cd] text-xs text-[#3e4a3f]">
            <strong>Year {current.year} Milestone:</strong> {current.milestoneDescription}
          </div>
        </div>
      </section>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-11" />
    </div>
  );
}
