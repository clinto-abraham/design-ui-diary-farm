"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Crown,
  Shield,
  Award,
  ChevronRight,
  TrendingUp,
  Landmark,
  Check,
} from "lucide-react";

export default function Design7Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#081710] text-[#f4f2ea] font-serif antialiased selection:bg-[#d4af37] selection:text-black">
      {/* Top Private Syndicate Bar */}
      <div className="border-b border-[#d4af37]/20 bg-[#06120c] py-2 px-6 text-center text-[11px] font-sans tracking-[0.2em] uppercase text-[#d4af37]">
        Hira Private Farm Syndicate &bull; Murrah Sovereign Estate Portfolio &bull; Strictly Confidential
      </div>

      {/* Luxury Nav */}
      <header className="border-b border-[#d4af37]/20 bg-[#081710]/95 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded border border-[#d4af37] bg-[#0c2317] flex items-center justify-center text-[#d4af37] shadow-lg">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-wider text-[#f4f2ea] block font-serif">
                HIRA SOVEREIGN HERD
              </span>
              <span className="text-[10px] font-sans tracking-widest text-[#d4af37] uppercase">
                Private Wealth & Dairy Estate // 07
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6 font-sans text-xs">
            <Link
              href="/"
              className="hidden md:inline-block text-[#a8b8ae] hover:text-[#d4af37] transition"
            >
              Portfolio Catalog
            </Link>
            <a
              href="#allocations"
              className="px-5 py-2 border border-[#d4af37] bg-gradient-to-r from-[#d4af37] to-[#b39029] text-black font-semibold tracking-wider uppercase hover:brightness-110 transition shadow-lg"
            >
              Allocate ₹2,00,000 Unit
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#d4af37]/30 bg-[#0c2317] text-[#d4af37] text-xs font-sans tracking-widest uppercase">
              <Landmark className="w-3.5 h-3.5" /> Institutional Biological Asset Class
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#f4f2ea] leading-[1.15] font-serif">
              An Enduring Dairy Legacy. <br />
              <span className="italic text-[#d4af37]">One Murrah Unit &rarr; 88 Head of Herd.</span>
            </h1>
            <p className="text-[#b3c4b9] text-base font-sans leading-relaxed">
              Designed for discerning investors seeking inflation-shielded real tangible assets. A capital commitment of ₹2,00,000 initiates a certified generational breeding cycle yielding substantial liquid cashflow and multi-crore herd valuation over a ten-year horizon.
            </p>

            <div className="pt-2 grid grid-cols-3 gap-4 font-sans border-t border-[#d4af37]/20 pt-6">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#a8b8ae] block">Unit Commitment</span>
                <span className="text-xl font-bold text-[#d4af37]">₹2,00,000</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#a8b8ae] block">Ten-Year Herd</span>
                <span className="text-xl font-bold text-white">88 Animals</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#a8b8ae] block">Yr 10 Revenue</span>
                <span className="text-xl font-bold text-[#d4af37]">₹82.32 Lacs</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-3 border border-[#d4af37]/40 bg-[#0c2317] rounded shadow-2xl relative">
              <div className="relative aspect-[4/3] overflow-hidden border border-[#d4af37]/20">
                <Image
                  src="/Murrah_buffalo.JPG"
                  alt="Murrah Buffalo"
                  fill
                  className="object-cover contrast-110"
                />
              </div>
              <div className="mt-3 p-3 text-center border-t border-[#d4af37]/20 font-sans text-xs text-[#d4af37]">
                PEDIGREE CERTIFICATE // 1ST LACTATION MURRAH & HEIFER
              </div>
            </div>
          </div>
        </div>

        {/* 10-Year Trajectory Section */}
        <section id="allocations" className="border border-[#d4af37]/30 bg-[#0c2317]/80 p-8 space-y-8 rounded">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#d4af37]/20 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-sans">
                Actuarial Projection
              </span>
              <h2 className="text-2xl sm:text-3xl text-white font-serif mt-1">
                Ten-Year Herd Growth & Revenue Accretion
              </h2>
            </div>
            <div className="flex items-center gap-1 font-sans text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 border transition ${
                    p.year === selectedYear
                      ? "border-[#d4af37] bg-[#d4af37] text-black font-bold"
                      : "border-[#d4af37]/30 text-[#a8b8ae] hover:border-[#d4af37]"
                  }`}
                >
                  Y{p.year}
                </button>
              ))}
            </div>
          </div>

          {/* Metric Spotlight */}
          <div className="grid sm:grid-cols-4 gap-4 font-sans text-xs">
            <div className="p-4 border border-[#d4af37]/20 bg-[#081710]">
              <span className="text-[#a8b8ae] block uppercase text-[10px]">Total Herd Count</span>
              <span className="text-2xl font-serif text-white block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-[#d4af37] text-[11px]">{active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers</span>
            </div>

            <div className="p-4 border border-[#d4af37]/20 bg-[#081710]">
              <span className="text-[#a8b8ae] block uppercase text-[10px]">Daily Milk Production</span>
              <span className="text-2xl font-serif text-[#d4af37] block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span className="text-[#a8b8ae] text-[11px]">14 L / adult / day</span>
            </div>

            <div className="p-4 border border-[#d4af37]/20 bg-[#081710]">
              <span className="text-[#a8b8ae] block uppercase text-[10px]">Annual Milk Revenue</span>
              <span className="text-2xl font-serif text-white block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-[#a8b8ae] text-[11px]">@ ₹70/L farm gate</span>
            </div>

            <div className="p-4 border border-[#d4af37]/20 bg-[#081710]">
              <span className="text-[#a8b8ae] block uppercase text-[10px]">Net Wealth Accretion</span>
              <span className="text-2xl font-serif text-[#d4af37] block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-[#a8b8ae] text-[11px]">Cumulative Net + Assets</span>
            </div>
          </div>

          <div className="p-4 border-l-2 border-[#d4af37] bg-[#081710] font-sans text-xs text-[#b3c4b9]">
            <strong className="text-[#d4af37]">Milestone Observation:</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-7" />
    </div>
  );
}
