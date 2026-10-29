"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Flame,
  Sun,
  ShieldCheck,
  Heart,
  Droplet,
} from "lucide-react";

export default function Design32Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#071526] text-[#ffedd5] font-serif antialiased selection:bg-[#ea580c] selection:text-white">
      {/* Top Ribbon */}
      <div className="bg-[#0b2038] border-b border-[#ea580c]/30 py-2 px-6 text-center text-xs tracking-widest uppercase font-sans text-[#fdba74]">
        &diams; HOLY SANGAM BOVINE SANCTUARY &bull; AHIMSA LIFETIME CARE &bull; DHARMA & WEALTH &diams;
      </div>

      {/* Header */}
      <header className="border-b border-[#ea580c]/20 bg-[#071526]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl border-2 border-[#ea580c] bg-[#0c2340] flex items-center justify-center text-[#ea580c] font-bold text-lg shadow-lg">
              संग
            </div>
            <div>
              <span className="font-bold text-lg text-white block tracking-wide font-serif">
                HIRA SANGAM SANCTUARY
              </span>
              <span className="text-[10px] text-[#ea580c] uppercase tracking-wider font-sans">
                Holy River Sanctuary & Dairy // 32
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6 font-sans text-xs">
            <Link href="/" className="text-[#fdba74] hover:text-white transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#sangam-horizon"
              className="px-5 py-2.5 rounded-full bg-[#ea580c] text-white font-bold uppercase tracking-wider hover:bg-[#c2410c] transition shadow-lg"
            >
              Consecrate ₹2L Unit
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-3xl border border-[#ea580c]/30 bg-gradient-to-b from-[#0e2c4d] to-[#08192e] p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="inline-block px-4 py-1 rounded-full border border-[#ea580c]/40 bg-[#0c2340] text-[#ea580c] text-xs font-sans tracking-widest uppercase">
            &diams; DHARMA MEETS COMPOUNDING &diams;
          </div>

          <h1 className="text-4xl sm:text-6xl text-white tracking-tight leading-tight font-serif">
            Spiritual Merit & Wealth: <br />
            <span className="italic text-[#ea580c]">1 Protected Buffalo &rarr; 88 Sacred Cattle.</span>
          </h1>

          <p className="text-[#ffedd5]/80 text-base leading-relaxed font-sans font-light max-w-2xl">
            At Hira Sangam Sanctuary, animals are revered as sacred living souls, provided humane lifetime shelter on peaceful riverbanks. A ₹2,00,000 adoption provides 1 lactating mother and 1 female calf, generating sacred daily A2 milk while multiplying ethically into an 88-animal herd in a single decade.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-[#ea580c]/20 font-sans text-xs">
            <div className="p-4 rounded-2xl bg-[#061220] border border-[#ea580c]/30">
              <span className="text-[#fdba74] uppercase text-[10px] block">Auspicious Outlay</span>
              <span className="text-xl font-bold text-[#ea580c] mt-1 block">₹2,00,000</span>
              <span className="text-[#ffedd5]/60 text-[10px]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#061220] border border-[#ea580c]/30">
              <span className="text-[#fdba74] uppercase text-[10px] block">10-Year Sanctuary</span>
              <span className="text-xl font-bold text-white mt-1 block">88 Animals</span>
              <span className="text-[#ffedd5]/60 text-[10px]">Ahimsa Care</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#061220] border border-[#ea580c]/30">
              <span className="text-[#fdba74] uppercase text-[10px] block">Year 10 Milk Gold</span>
              <span className="text-xl font-bold text-[#ea580c] mt-1 block">₹82.32 Lacs</span>
              <span className="text-[#ffedd5]/60 text-[10px]">Annual Milk Revenue</span>
            </div>
          </div>
        </div>

        {/* 10-Year Horizon */}
        <section id="sangam-horizon" className="rounded-3xl border border-[#ea580c]/30 bg-[#0a1e36] p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#ea580c]/20 pb-4 font-sans">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#ea580c] font-semibold">
                Ten Years of Dharma & Accretion
              </span>
              <h2 className="text-2xl font-serif text-white mt-0.5">
                Inspect 10-Year Sanctuary Expansion
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded-full transition font-semibold ${
                    p.year === selectedYear
                      ? "bg-[#ea580c] text-white shadow-md"
                      : "bg-[#050f1a] text-[#fdba74] hover:bg-[#0f2c4e]"
                  }`}
                >
                  Year {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 font-sans text-xs">
            <div className="p-4 rounded-2xl bg-[#050f1a] border border-[#ea580c]/20">
              <span className="text-[#fdba74] uppercase text-[10px] block">TOTAL HERD</span>
              <span className="text-3xl font-serif text-white block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-[#ea580c] text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#050f1a] border border-[#ea580c]/20">
              <span className="text-[#fdba74] uppercase text-[10px] block">DAILY MILK YIELD</span>
              <span className="text-3xl font-serif text-[#ea580c] block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span suppressHydrationWarning className="text-[#ffedd5]/70 text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString('en-IN')} L / yr
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#050f1a] border border-[#ea580c]/20">
              <span className="text-[#fdba74] uppercase text-[10px] block">ANNUAL MILK SALES</span>
              <span className="text-3xl font-serif text-white block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-[#ffedd5]/70 text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#050f1a] border border-[#ea580c]/20">
              <span className="text-[#fdba74] uppercase text-[10px] block">TOTAL WEALTH MATRIX</span>
              <span className="text-3xl font-serif text-[#ea580c] block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-[#ffedd5]/70 text-[11px] block mt-1">Livestock Value + Milk Net</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#050f1a] border-l-2 border-[#ea580c] text-xs font-sans text-[#fdba74]">
            <strong>Year {active.year} Blessing:</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-32" />
    </div>
  );
}
