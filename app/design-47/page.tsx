"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Scissors,
  Bookmark,
  Sparkles,
  TrendingUp,
  Milk,
  Award,
  ArrowRight,
  Stamp,
  Layers,
} from "lucide-react";

export default function Design47Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const activeData = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-800 font-sans pb-28 selection:bg-amber-100 selection:text-amber-900">
      {/* Papercraft Header with Washi Tape Effect */}
      <header className="border-b-2 border-dashed border-stone-300 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border-2 border-stone-700 shadow-[2px_2px_0px_#292524] flex items-center justify-center">
              <Scissors className="w-5 h-5 text-stone-800" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-lg text-stone-900 flex items-center gap-2">
                ORIGAMI DAIRY ATELIER <span className="text-xs px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 font-mono font-bold border border-stone-300">Design 47</span>
              </Link>
              <p className="text-[11px] text-stone-500 font-medium">Folded Papercraft Storybook & 3D Pop-Up Herd Math</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-dashed border-emerald-300 text-xs text-emerald-800 font-bold">
              <Bookmark className="w-3.5 h-3.5 text-emerald-600" />
              <span>Pop-Up Chapter: 10 Years &bull; 88 Bovines</span>
            </div>
            <Link
              href="#calculator"
              className="px-4 py-2 rounded-xl bg-amber-300 border-2 border-stone-800 font-bold text-xs text-stone-900 shadow-[2px_2px_0px_#292524] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition"
            >
              Fold ₹2L Seed
            </Link>
          </div>
        </div>
      </header>

      {/* Pop-Up Paper Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-stone-300 text-stone-800 text-xs font-bold shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-600" /> An Unfolding Storybook of Living Compounding
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-stone-900 leading-tight">
              Unfold 1 Folded Murrah Buffalo into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-amber-600 to-rose-600">
                88 Pop-Up Champions.
              </span>
            </h1>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Every fold represents a year of gentle care and artificial insemination. Your ₹2 Lacs seed package of 1 mother and calf unfolds page by page, maturing every 3 years into a grand pop-up diorama of <strong>88 animals</strong> and <strong>₹82.32 Lacs</strong> in yearly milk sales.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-white border-2 border-stone-300 shadow-[3px_3px_0px_#e7e5e4]">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">First Fold</span>
                <span className="text-2xl font-black text-stone-900">₹2,00,000</span>
                <span className="text-xs text-stone-600 font-medium block">1 Mother + 1 Calf</span>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 shadow-[3px_3px_0px_#a7f3d0]">
                <span className="text-[10px] font-mono uppercase text-emerald-700 font-bold block">10-Yr Pop-Up</span>
                <span className="text-2xl font-black text-emerald-800">88 Head</span>
                <span className="text-xs text-emerald-700 font-medium block">48 Active Milkers</span>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 shadow-[3px_3px_0px_#fde68a]">
                <span className="text-[10px] font-mono uppercase text-amber-800 font-bold block">Year 10 Milk</span>
                <span className="text-2xl font-black text-amber-900">₹82.32 L</span>
                <span className="text-xs text-amber-700 font-medium block">Annual Cash Flow</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-5 rounded-3xl bg-white border-2 border-stone-300 shadow-[5px_5px_0px_#d6d3d1] space-y-4">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border-2 border-stone-200">
                <Image
                  src="/Murrah_buffalo.JPG"
                  alt="Origami Buffalo Model"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-xs flex items-center justify-between border border-stone-200">
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Murrah Mother Fold #1</span>
                    <span className="text-[10px] text-stone-600 font-medium">14L / Day &bull; 8.2% Butterfat</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-900 bg-amber-200 px-2 py-1 rounded-md border border-stone-400">₹70 / Liter</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-100 border border-stone-200 text-xs text-stone-700">
                <strong>Papercraft Rule of Three:</strong> At 36 months, folded calves reach maturity, yielding their first calf and giving 14 liters of fresh milk daily.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Paper Ledger */}
      <section id="calculator" className="max-w-7xl mx-auto px-6 py-10">
        <div className="p-8 rounded-3xl bg-white border-2 border-stone-300 shadow-[6px_6px_0px_#e7e5e4] space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-bold">
                Chapter Compounding Ledger
              </span>
              <h2 className="text-3xl font-black text-stone-900 mt-1">
                The 10-Year Folded Pop-Up Matrix
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-stone-600">Chapter Year:</span>
              <div className="flex gap-1 bg-stone-100 p-1 rounded-xl border border-stone-300">
                {[1, 3, 5, 8, 10].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                      selectedYear === yr
                        ? "bg-stone-900 text-white shadow-xs"
                        : "text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    Yr {yr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono font-bold text-stone-600">
              <span>Year 1 (Page 1: ₹2L Seed)</span>
              <span className="text-sm bg-stone-200 text-stone-800 px-3 py-0.5 rounded-md font-mono font-bold">
                Reading Year {selectedYear} / 10
              </span>
              <span>Year 10 (Page 10: 88 Animals)</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
              className="w-full h-3 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-800"
            />
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200">
              <span className="text-xs font-bold uppercase text-amber-800 block mb-1">Pop-Up Herd Size</span>
              <span className="text-3xl font-black text-stone-900">{activeData.totalHerdSize} Head</span>
              <span className="text-xs text-stone-600 block mt-1">
                {activeData.matureBuffaloes} milkers &bull; {activeData.growingHeifers + activeData.calvesBornThisYear} calves
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200">
              <span className="text-xs font-bold uppercase text-sky-800 block mb-1">Daily Pure Milk</span>
              <span className="text-3xl font-black text-sky-900">{activeData.dailyMilkProductionLiters} L/day</span>
              <span suppressHydrationWarning className="text-xs text-sky-700 block mt-1">
                {(activeData.dailyMilkProductionLiters * 70).toLocaleString('en-IN')} INR daily turnover
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
              <span className="text-xs font-bold uppercase text-emerald-800 block mb-1">Annual Milk Sales</span>
              <span className="text-3xl font-black text-emerald-900">{formatINR(activeData.grossMilkingRevenueINR)}</span>
              <span className="text-xs text-emerald-700 block mt-1">300 lactation days per adult</span>
            </div>
            <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200">
              <span className="text-xs font-bold uppercase text-rose-800 block mb-1">Cumulative Paper Wealth</span>
              <span className="text-3xl font-black text-rose-900">{formatINR(activeData.totalCumulativeWealthINR)}</span>
              <span className="text-xs text-rose-700 block mt-1">Accumulated milk cash + herd value</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-100 text-stone-900 uppercase font-mono font-bold">
                <tr>
                  <th className="py-3 px-4">Page Year</th>
                  <th className="py-3 px-4">Milkers</th>
                  <th className="py-3 px-4">Calves & Heifers</th>
                  <th className="py-3 px-4">Total Head</th>
                  <th className="py-3 px-4">Daily Output</th>
                  <th className="py-3 px-4">Annual Revenue</th>
                  <th className="py-3 px-4">Herd Equity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700 font-medium">
                {projections.map((p) => (
                  <tr
                    key={p.year}
                    className={`hover:bg-stone-50 transition ${
                      p.year === selectedYear ? "bg-amber-100/70 font-bold text-stone-900" : ""
                    }`}
                  >
                    <td className="py-3 px-4 font-mono font-bold text-stone-800">Year {p.year}</td>
                    <td className="py-3 px-4">{p.matureBuffaloes} adults</td>
                    <td className="py-3 px-4">{p.growingHeifers + p.calvesBornThisYear} calves</td>
                    <td className="py-3 px-4 font-bold">{p.totalHerdSize} animals</td>
                    <td className="py-3 px-4 text-sky-800 font-bold">{p.dailyMilkProductionLiters} L/day</td>
                    <td className="py-3 px-4 text-emerald-700 font-bold">{formatINR(p.grossMilkingRevenueINR)}</td>
                    <td className="py-3 px-4 text-amber-800 font-bold">{formatINR(p.herdAssetValueINR)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <DesignSwitcher currentDesignId="design-47" />
    </div>
  );
}
