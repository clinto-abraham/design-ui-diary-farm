"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  BookOpen,
  Feather,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Design18Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#f9f8f6] text-[#1f1e1d] font-serif antialiased selection:bg-[#1f1e1d] selection:text-[#f9f8f6]">
      {/* Editorial Top Bar */}
      <div className="border-b border-[#e8e6e1] py-3 px-8 flex items-center justify-between text-[11px] font-sans uppercase tracking-[0.2em] text-[#787571]">
        <span>HIRA FARMS ANTHOLOGY &bull; ISSUE NO. 18 &bull; AUTUMN 2026</span>
        <span className="hidden sm:inline-block">PRICE: ₹2,00,000 PER PROVENANCE UNIT</span>
      </div>

      {/* Masthead */}
      <header className="border-b border-[#e8e6e1] bg-[#f9f8f6]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-8 h-24 flex items-center justify-between">
          <Link href="/" className="text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-light tracking-tight text-[#1f1e1d] block font-serif">
              HIRA &bull; BOVINE
            </span>
            <span className="text-[10px] text-[#787571] font-sans tracking-[0.25em] uppercase">
              High-Craft Editorial // 18
            </span>
          </Link>

          <div className="flex items-center gap-6 font-sans text-xs">
            <Link href="/" className="text-[#787571] hover:text-black transition hidden sm:inline-block">
              All 20 Themes
            </Link>
            <a
              href="#essay-horizon"
              className="px-6 py-2.5 bg-[#1f1e1d] text-[#f9f8f6] hover:bg-[#383633] transition"
            >
              Acquire Unit (₹2L)
            </a>
          </div>
        </div>
      </header>

      {/* Main Editorial Essay */}
      <main className="max-w-5xl mx-auto px-8 py-16 space-y-16">
        <article className="space-y-8 max-w-3xl">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#787571] block">
            Essays on Modern Pastoral Wealth
          </span>
          <h1 className="text-4xl sm:text-6xl font-light text-[#1f1e1d] tracking-tight leading-[1.12]">
            The Quiet Geometry of <br />
            <span className="italic font-normal">Biological Accretion.</span>
          </h1>

          <div className="pt-2 text-[#4a4744] text-lg sm:text-xl font-light leading-relaxed space-y-4">
            <p>
              <span className="float-left text-5xl leading-none font-normal pr-3 pt-1 text-[#1f1e1d]">T</span>
              here exists a rare dignity in assets that breathe, graze, and regenerate. A singular allocation of ₹2,00,000 secures one prime Murrah mother and her heifer offspring. She offers fourteen liters of unhurried, rich A2 milk each day, while science and nature conspire through artificial insemination to yield a daughter each spring.
            </p>
            <p className="text-base text-[#615e5a] leading-relaxed">
              Every thirty-six months, each newborn daughter enters maturity—becoming herself a mother and a dairy provider. Over ten quiet years, this single partnership multiplies into eighty-eight animals, yielding an annual revenue exceeding ₹82 Lacs and a cumulative legacy of more than ₹3.25 Crore.
            </p>
          </div>

          <div className="pt-6 grid grid-cols-3 gap-6 border-t border-[#e8e6e1] font-sans text-xs">
            <div>
              <span className="text-[#787571] uppercase text-[10px] block">Provenance Unit</span>
              <span className="text-xl font-serif text-[#1f1e1d] mt-1 block">₹2,00,000</span>
              <span className="text-[#787571]">1 Mother + 1 Calf</span>
            </div>
            <div>
              <span className="text-[#787571] uppercase text-[10px] block">Decade Herd</span>
              <span className="text-xl font-serif text-[#1f1e1d] mt-1 block">88 Animals</span>
              <span className="text-[#787571]">Pure Murrah Lineage</span>
            </div>
            <div>
              <span className="text-[#787571] uppercase text-[10px] block">10th Year Milk</span>
              <span className="text-xl font-serif text-[#1f1e1d] mt-1 block">₹82.32 Lacs</span>
              <span className="text-[#787571]">Annual Sustenance</span>
            </div>
          </div>
        </article>

        {/* 10-Year Editorial Timeline */}
        <section id="essay-horizon" className="border-t border-b border-[#e8e6e1] py-12 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans text-xs">
            <div>
              <span className="uppercase tracking-[0.2em] text-[#787571]">
                Actuarial Register
              </span>
              <h2 className="text-2xl font-serif text-[#1f1e1d] mt-1">
                Ten Years of Living Accretion
              </h2>
            </div>
            <div className="flex flex-wrap gap-1">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 transition ${
                    p.year === selectedYear
                      ? "bg-[#1f1e1d] text-[#f9f8f6] font-medium"
                      : "text-[#787571] hover:text-black border border-transparent hover:border-[#e8e6e1]"
                  }`}
                >
                  Yr {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-6 font-sans text-xs">
            <div className="p-5 border border-[#e8e6e1] bg-white">
              <span className="text-[#787571] uppercase text-[10px] block">Total Herd Count</span>
              <span className="text-3xl font-serif text-[#1f1e1d] block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-[#787571] text-[11px] block mt-1">
                {active.matureBuffaloes} Milking Mothers
              </span>
            </div>

            <div className="p-5 border border-[#e8e6e1] bg-white">
              <span className="text-[#787571] uppercase text-[10px] block">Daily Milk Yield</span>
              <span className="text-3xl font-serif text-[#1f1e1d] block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span className="text-[#787571] text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString()} L / yr
              </span>
            </div>

            <div className="p-5 border border-[#e8e6e1] bg-white">
              <span className="text-[#787571] uppercase text-[10px] block">Annual Turnover</span>
              <span className="text-3xl font-serif text-[#1f1e1d] block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-[#787571] text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-5 border border-[#e8e6e1] bg-white">
              <span className="text-[#787571] uppercase text-[10px] block">Cumulative Wealth</span>
              <span className="text-3xl font-serif text-[#1f1e1d] block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-[#787571] text-[11px] block mt-1">Livestock Equity + Milk</span>
            </div>
          </div>

          <div className="p-4 bg-white border border-[#e8e6e1] text-xs font-serif italic text-[#615e5a]">
            “In Year {active.year}: {active.milestoneDescription}”
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-18" />
    </div>
  );
}
