"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Sparkles,
  Award,
  Crown,
  ChevronRight,
  Shield,
  Layers,
} from "lucide-react";

export default function Design16Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#f2e6cb] font-serif antialiased selection:bg-[#e5b842] selection:text-black">
      {/* Deco Top Bar */}
      <div className="border-b border-[#e5b842]/30 bg-[#07080b] py-2 px-6 text-center text-[10px] tracking-[0.25em] uppercase text-[#e5b842] font-sans">
        &diams; THE GUILD OF MASTER BOVINE BREEDERS &bull; ESTABLISHED 1926 &bull; GILDED HERD REGISTRY &diams;
      </div>

      {/* Art Deco Header */}
      <header className="border-b border-[#e5b842]/30 bg-[#0c0e14]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-[#e5b842] bg-[#141720] flex items-center justify-center text-[#e5b842] rotate-45 shadow-[0_0_15px_rgba(229,184,66,0.25)]">
              <span className="-rotate-45 font-bold font-serif text-lg">H</span>
            </div>
            <div>
              <span className="font-bold text-lg text-white block tracking-wider font-serif">
                HIRA GILDED GUILD
              </span>
              <span className="text-[10px] text-[#e5b842] uppercase tracking-[0.15em] font-sans">
                Art Deco Bovine Estate // 16
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6 font-sans text-xs">
            <Link href="/" className="text-[#a19680] hover:text-[#e5b842] transition hidden sm:inline-block">
              All 20 Themes
            </Link>
            <a
              href="#deco-horizon"
              className="px-5 py-2 border border-[#e5b842] bg-gradient-to-r from-[#e5b842] to-[#b38827] text-black font-bold uppercase tracking-wider hover:brightness-110 transition shadow-lg"
            >
              Allocate ₹2,00,000 Unit
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 border border-[#e5b842]/40 bg-[#141720] text-[#e5b842] text-[11px] font-sans tracking-[0.2em] uppercase">
            &diams; THE GILDED DECADE &diams;
          </div>
          <h1 className="text-4xl sm:text-6xl text-[#f2e6cb] tracking-tight leading-tight font-serif">
            The Aristocracy of Bovine Wealth. <br />
            <span className="italic text-[#e5b842]">One Unit Blossoms Into 88 Head.</span>
          </h1>
          <p className="text-[#a19680] text-base leading-relaxed font-sans">
            Recalling the opulent era of grand agricultural guilds, a singular ₹2,00,000 commitment inaugurates an enduring lineage. 1 Prime Murrah Buffalo and her heifer calf, blessed with scientific artificial insemination, multiply across ten years into an 88-animal estate generating ₹82.32 Lacs annual milk turnover.
          </p>

          <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#e5b842]/30 pt-6 font-sans text-xs">
            <div className="p-4 border border-[#e5b842]/30 bg-[#11141c]">
              <span className="text-[#a19680] uppercase text-[10px] block">Imperial Unit</span>
              <span className="text-xl font-bold text-[#e5b842] mt-1 block">₹2,00,000</span>
              <span className="text-[#a19680]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-4 border border-[#e5b842]/30 bg-[#11141c]">
              <span className="text-[#a19680] uppercase text-[10px] block">Ten-Year Estate</span>
              <span className="text-xl font-bold text-white mt-1 block">88 Animals</span>
              <span className="text-[#a19680]">Gilded Pedigree</span>
            </div>
            <div className="p-4 border border-[#e5b842]/30 bg-[#11141c]">
              <span className="text-[#a19680] uppercase text-[10px] block">Yr 10 Milk Gold</span>
              <span className="text-xl font-bold text-[#e5b842] mt-1 block">₹82.32 Lacs</span>
              <span className="text-[#a19680]">Annual Run-Rate</span>
            </div>
          </div>
        </div>

        {/* 10-Year Deco Vault Section */}
        <section id="deco-horizon" className="border-2 border-[#e5b842]/40 bg-[#0f121a] p-8 space-y-8 rounded-lg shadow-2xl relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e5b842]/30 pb-4">
            <div>
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#e5b842]">
                Chronicles of Compounding (1926 - 1936 Horizon)
              </span>
              <h2 className="text-2xl sm:text-3xl text-white font-serif mt-0.5">
                Inspect Ten Years of Gilded Herd Expansion
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 font-sans text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 border transition ${
                    p.year === selectedYear
                      ? "border-[#e5b842] bg-[#e5b842] text-black font-bold"
                      : "border-[#e5b842]/30 text-[#a19680] hover:text-[#e5b842]"
                  }`}
                >
                  Yr {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 font-sans text-xs">
            <div className="p-4 border border-[#e5b842]/20 bg-[#0c0e14]">
              <span className="text-[#a19680] uppercase text-[10px] block">Total Herd Size</span>
              <span className="text-3xl font-serif text-white block mt-1">{active.totalHerdSize} Buffaloes</span>
              <span className="text-[#e5b842] text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 border border-[#e5b842]/20 bg-[#0c0e14]">
              <span className="text-[#a19680] uppercase text-[10px] block">Daily Milk Yield</span>
              <span className="text-3xl font-serif text-[#e5b842] block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span suppressHydrationWarning className="text-[#a19680] text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString('en-IN')} L / yr
              </span>
            </div>

            <div className="p-4 border border-[#e5b842]/20 bg-[#0c0e14]">
              <span className="text-[#a19680] uppercase text-[10px] block">Annual Milk Revenue</span>
              <span className="text-3xl font-serif text-[#e5b842] block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-[#a19680] text-[11px] block mt-1">@ ₹70/L Realization</span>
            </div>

            <div className="p-4 border border-[#e5b842]/20 bg-[#0c0e14]">
              <span className="text-[#a19680] uppercase text-[10px] block">Accumulated Estate Wealth</span>
              <span className="text-3xl font-serif text-white block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-[#a19680] text-[11px] block mt-1">Livestock Equity + Milk</span>
            </div>
          </div>

          <div className="p-4 border-l-2 border-[#e5b842] bg-[#0c0e14] font-sans text-xs text-[#a19680]">
            <strong className="text-[#e5b842]">Guild Seal Note (Year {active.year}):</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-16" />
    </div>
  );
}
