"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  HeartHandshake,
  Sprout,
  Sun,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Design3Page() {
  const [activeYear, setActiveYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const current = projections[activeYear - 1];

  return (
    <div className="min-h-screen bg-[#faf7f0] text-[#332a21] font-serif antialiased selection:bg-[#963e18] selection:text-white">
      {/* Top Traditional Bar */}
      <div className="bg-[#2d4a22] text-[#f7f3e8] py-2 px-6 text-center text-xs tracking-widest font-sans uppercase">
        <span>Gau & Mahishi Samriddhi &bull; Pure A2 Murrah Lineage &bull; 100% Hormone-Free</span>
      </div>

      {/* Vedic Header */}
      <header className="border-b border-[#e5dcce] bg-[#faf7f0]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#963e18] bg-[#f2eade] flex items-center justify-center text-[#963e18] font-bold text-lg font-serif">
              हि
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#2d4a22] block font-serif">
                Hira Vedic Farms
              </span>
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#963e18]">
                Murrah Buffalo Heritage & Wealth
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6 font-sans text-xs">
            <Link
              href="/"
              className="hidden sm:inline-block text-[#695d4f] hover:text-[#2d4a22] transition"
            >
              Browse All Designs
            </Link>
            <a
              href="#heritage-plan"
              className="px-5 py-2.5 rounded-full bg-[#963e18] text-[#faf7f0] font-semibold hover:bg-[#7d3212] transition shadow-md"
            >
              Adopt ₹2 Lacs Unit
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-[#e5dcce] bg-gradient-to-b from-[#faf7f0] via-[#f5ede0] to-[#faf7f0]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8ded0] border border-[#d6c7b3] text-[#704214] text-xs font-sans tracking-wide">
              <Sun className="w-3.5 h-3.5 text-[#963e18]" /> Vedic Dairy Compounding Model
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#2d4a22] leading-tight font-serif">
              Begin with One Mother & Her Calf. <br />
              <span className="italic text-[#963e18]">Harvest 88 Descendants in a Decade.</span>
            </h1>
            <p className="text-[#594d40] text-base md:text-lg font-sans leading-relaxed">
              In traditional dairy wisdom, a pure-bred Murrah buffalo is not merely livestock—she is living, multiplying wealth (Gau-Dhan). Investing ₹2,00,000 provides one lactating mother and one female calf, generating rich daily A2 milk while bearing new calves every year.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 font-sans text-xs">
              <div className="bg-[#f0e6d6] border border-[#dfd2be] px-4 py-3 rounded-xl">
                <span className="text-[#8c765c] block text-[11px] uppercase">Initial Holy Investment</span>
                <span className="text-lg font-bold text-[#2d4a22]">₹2,00,000 INR</span>
              </div>
              <div className="bg-[#f0e6d6] border border-[#dfd2be] px-4 py-3 rounded-xl">
                <span className="text-[#8c765c] block text-[11px] uppercase">10-Year Herd Growth</span>
                <span className="text-lg font-bold text-[#963e18]">88 Sacred Animals</span>
              </div>
              <div className="bg-[#f0e6d6] border border-[#dfd2be] px-4 py-3 rounded-xl">
                <span className="text-[#8c765c] block text-[11px] uppercase">Year 10 Milk Revenue</span>
                <span className="text-lg font-bold text-[#2d4a22]">₹82.32 Lacs / Year</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="p-4 bg-[#f2eade] border-2 border-[#dfd2be] rounded-3xl shadow-xl space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#d4c3ab]">
                <Image
                  src="/Murrah_buffalo.JPG"
                  alt="Vedic Murrah Buffalo"
                  fill
                  className="object-cover sepia-[0.25]"
                />
              </div>
              <div className="text-center font-serif text-sm text-[#4a3f33] italic">
                “A single nurtured mother feeds generations with nectar-like milk and continuous offspring.”
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vedic 10-Year Generational Timeline */}
      <section id="heritage-plan" className="py-16 max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#963e18] font-sans font-semibold">
            The 10-Year Compounding Journey
          </span>
          <h2 className="text-3xl md:text-4xl text-[#2d4a22] font-serif">
            Generational Lineage & Milking Prosperity
          </h2>
          <p className="text-[#665747] font-sans max-w-2xl mx-auto text-sm">
            Every 3 years, growing female calves reach motherhood and begin yielding sacred A2 milk and bearing new calves, multiplying your family estate exponentially.
          </p>
        </div>

        {/* Year Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-sans text-xs">
          {projections.map((p) => (
            <button
              key={p.year}
              onClick={() => setActiveYear(p.year)}
              className={`px-4 py-2 rounded-full border transition ${
                p.year === activeYear
                  ? "bg-[#2d4a22] text-[#f7f3e8] border-[#2d4a22] font-bold shadow-md"
                  : "bg-[#f5ede0] text-[#594d40] border-[#d8c8b2] hover:bg-[#ebdcc8]"
              }`}
            >
              Year {p.year}
            </button>
          ))}
        </div>

        {/* Card for Active Year */}
        <div className="bg-[#f5ede0] border-2 border-[#dfd2be] rounded-3xl p-8 shadow-md grid md:grid-cols-3 gap-8 items-center">
          <div className="space-y-4 md:col-span-1 border-r border-[#d8c8b2] pr-6">
            <span className="px-3 py-1 rounded-full bg-[#963e18] text-[#f7f3e8] text-xs font-sans font-bold">
              Year {current.year} of Prosperity
            </span>
            <h3 className="text-2xl font-serif text-[#2d4a22]">
              {current.totalHerdSize} Total Buffaloes
            </h3>
            <p className="text-[#695d4f] font-sans text-xs leading-relaxed">
              {current.milestoneDescription}
            </p>
            <div className="pt-2 font-sans text-xs space-y-1">
              <div className="text-[#4a3f33]">
                <strong>{current.matureBuffaloes}</strong> Milking Mothers
              </div>
              <div className="text-[#4a3f33]">
                <strong>{current.growingHeifers}</strong> Maturing Calves (Heifers)
              </div>
              <div className="text-[#4a3f33]">
                <strong>+{current.calvesBornThisYear}</strong> Newly Born Female Calves
              </div>
            </div>
          </div>

          <div className="space-y-6 md:col-span-2 font-sans">
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="bg-[#faf7f0] p-4 rounded-2xl border border-[#d8c8b2]">
                <span className="text-[11px] text-[#786653] uppercase block">Daily Milk Yield</span>
                <span className="text-xl font-bold text-[#2d4a22] font-serif">
                  {current.dailyMilkProductionLiters} Liters
                </span>
                <span className="text-[10px] text-[#8c765c] block mt-1">~14L per milking cow</span>
              </div>

              <div className="bg-[#faf7f0] p-4 rounded-2xl border border-[#d8c8b2]">
                <span className="text-[11px] text-[#786653] uppercase block">Annual Milk Revenue</span>
                <span className="text-xl font-bold text-[#963e18] font-serif">
                  {formatINR(current.grossMilkingRevenueINR)}
                </span>
                <span className="text-[10px] text-[#8c765c] block mt-1">@ ₹70/L farm gate</span>
              </div>

              <div className="bg-[#faf7f0] p-4 rounded-2xl border border-[#d8c8b2]">
                <span className="text-[11px] text-[#786653] uppercase block">Cumulative Wealth</span>
                <span className="text-xl font-bold text-[#2d4a22] font-serif">
                  {formatINR(current.totalCumulativeWealthINR)}
                </span>
                <span className="text-[10px] text-[#8c765c] block mt-1">Milk Net + Herd Capital</span>
              </div>
            </div>

            <div className="p-4 bg-[#faf7f0] rounded-xl border border-[#d8c8b2] text-xs text-[#594d40] flex items-center gap-3">
              <HeartHandshake className="w-5 h-5 text-[#963e18] shrink-0" />
              <span>
                All buffaloes receive ayurvedic preventative nutrition, fresh green Napier grass, and 24/7 clean borewell water at Hira Farm sanctuaries.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-3" />
    </div>
  );
}
