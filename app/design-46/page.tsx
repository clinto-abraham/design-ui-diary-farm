"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Waves,
  Palmtree,
  Droplets,
  TrendingUp,
  Milk,
  Award,
  Sparkles,
  ArrowRight,
  Sun,
  ShieldCheck,
} from "lucide-react";

export default function Design46Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const activeData = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50/70 via-emerald-50/40 to-white text-slate-800 font-sans pb-28 selection:bg-cyan-200 selection:text-cyan-900">
      {/* Backwater Header */}
      <header className="border-b border-cyan-200 bg-white/85 backdrop-blur-md sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center shadow-md shadow-cyan-300/40 text-white">
              <Waves className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
                KUMARAKOM HYDRO-OASIS <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 font-mono font-medium border border-cyan-300">Design 46</span>
              </Link>
              <p className="text-[11px] text-cyan-700 font-medium">Floating Reed Islands, Wallowing Cooling Canals & 8.8% Fat Milk</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-bold">
              <Droplets className="w-3.5 h-3.5 text-cyan-600" />
              <span>Canal Cooling: +22% Comfort &bull; A2 Butterfat</span>
            </div>
            <Link
              href="#calculator"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-bold text-xs shadow-md shadow-cyan-400/30 hover:scale-105 transition"
            >
              Seed ₹2 Lacs
            </Link>
          </div>
        </div>
      </header>

      {/* Tropical Hydro Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-bold">
              <Palmtree className="w-4 h-4 text-emerald-600" /> Vembanad Lake Eco-Sanctuary &bull; Tropical Buffalo Paradise
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight">
              Canal-Cooled Buffalos. Azolla Feed.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600">
                88 Animals Compounding by Year 10.
              </span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Murrah buffaloes thrive in natural freshwater canals where constant thermoregulation keeps body stress at zero, boosting butterfat to 8.8%. With ₹2 Lacs starting package of 1 mother and calf, watch the biological lineage expand to <strong>88 magnificent animals</strong> yielding <strong>₹82.32 Lacs</strong> annually.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-white border border-cyan-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-cyan-700 font-bold block">Canal Seed Pack</span>
                <span className="text-2xl font-black text-slate-900">₹2,00,000</span>
                <span className="text-xs text-cyan-600 font-medium block">1 Pair Murrah Seed</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-emerald-700 font-bold block">10-Yr Lake Herd</span>
                <span className="text-2xl font-black text-emerald-700">88 Head</span>
                <span className="text-xs text-emerald-600 font-medium block">48 Active Milkers</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-cyan-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-cyan-700 font-bold block">Yr 10 Milk Sales</span>
                <span className="text-2xl font-black text-cyan-700">₹82.32 Lacs</span>
                <span className="text-xs text-cyan-600 font-medium block">Premium A2 Fat</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-5 rounded-3xl bg-white border border-cyan-200 shadow-xl space-y-4">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-cyan-100">
                <Image
                  src="/Murrah_buffalo.JPG"
                  alt="Backwater Buffalo"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-xs flex items-center justify-between border border-cyan-200">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Canal-Wallowing Murrah</span>
                    <span className="text-[10px] text-cyan-700 font-medium">14L / Day &bull; Record 8.8% Butterfat</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-lg">₹70 / Liter</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-cyan-50/80 border border-cyan-200 text-xs text-cyan-950">
                <strong>Floating Reed Bed Advantage:</strong> Free-floating aquatic Azolla provides 25% crude protein at zero commercial feed cost, maximizing net dairy profit margins.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Backwater Compounding */}
      <section id="calculator" className="max-w-7xl mx-auto px-6 py-10">
        <div className="p-8 rounded-3xl bg-white border border-cyan-200 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-100 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold">
                Tropical Hydro-Ecosystem Growth
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                The 10-Year Backwater Compounding Ledger
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">Lagoon Season:</span>
              <div className="flex gap-1 bg-cyan-50 p-1 rounded-xl border border-cyan-200">
                {[1, 3, 5, 8, 10].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                      selectedYear === yr
                        ? "bg-cyan-600 text-white shadow-xs"
                        : "text-cyan-800 hover:bg-cyan-200/50"
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
            <div className="flex justify-between text-xs font-mono font-bold text-cyan-800">
              <span>Year 1 (Initial Pair Seed)</span>
              <span className="text-sm bg-cyan-100 text-cyan-900 px-3 py-0.5 rounded-full">
                Viewing Year {selectedYear} / 10
              </span>
              <span>Year 10 (88 Canal Champions)</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
              className="w-full h-3 bg-cyan-100 rounded-lg appearance-none cursor-pointer accent-cyan-600"
            />
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-cyan-50/70 border border-cyan-200">
              <span className="text-xs font-bold uppercase text-cyan-800 block mb-1">Backwater Herd Size</span>
              <span className="text-3xl font-black text-cyan-950">{activeData.totalHerdSize} Head</span>
              <span className="text-xs text-cyan-700 block mt-1">
                {activeData.matureBuffaloes} adults &bull; {activeData.growingHeifers + activeData.calvesBornThisYear} calves
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <span className="text-xs font-bold uppercase text-emerald-800 block mb-1">Daily Canal Milk</span>
              <span className="text-3xl font-black text-emerald-950">{activeData.dailyMilkProductionLiters} Liters</span>
              <span suppressHydrationWarning className="text-xs text-emerald-700 block mt-1">
                {(activeData.dailyMilkProductionLiters * 70).toLocaleString('en-IN')} INR daily cashflow
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200">
              <span className="text-xs font-bold uppercase text-sky-800 block mb-1">Annual Milk Revenue</span>
              <span className="text-3xl font-black text-sky-950">{formatINR(activeData.grossMilkingRevenueINR)}</span>
              <span className="text-xs text-sky-700 block mt-1">Over 300 annual lactation days</span>
            </div>
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
              <span className="text-xs font-bold uppercase text-amber-800 block mb-1">Cumulative Wealth</span>
              <span className="text-3xl font-black text-amber-950">{formatINR(activeData.totalCumulativeWealthINR)}</span>
              <span className="text-xs text-amber-700 block mt-1">Net profit + asset equity</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-cyan-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-cyan-100 text-cyan-950 uppercase font-mono font-bold">
                <tr>
                  <th className="py-3 px-4">Season</th>
                  <th className="py-3 px-4">Milkers</th>
                  <th className="py-3 px-4">Calves & Heifers</th>
                  <th className="py-3 px-4">Total Animals</th>
                  <th className="py-3 px-4">Daily Yield</th>
                  <th className="py-3 px-4">Gross Revenue</th>
                  <th className="py-3 px-4">Cumulative Wealth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cyan-100 text-slate-700">
                {projections.map((p) => (
                  <tr
                    key={p.year}
                    className={`hover:bg-cyan-50/50 transition ${
                      p.year === selectedYear ? "bg-cyan-100/60 font-bold text-cyan-950" : ""
                    }`}
                  >
                    <td className="py-3 px-4 font-mono font-bold text-cyan-800">Year {p.year}</td>
                    <td className="py-3 px-4">{p.matureBuffaloes} adults</td>
                    <td className="py-3 px-4">{p.growingHeifers + p.calvesBornThisYear} calves</td>
                    <td className="py-3 px-4 font-bold">{p.totalHerdSize} animals</td>
                    <td className="py-3 px-4 text-cyan-800 font-bold">{p.dailyMilkProductionLiters} L/day</td>
                    <td className="py-3 px-4 text-emerald-700 font-bold">{formatINR(p.grossMilkingRevenueINR)}</td>
                    <td className="py-3 px-4 text-cyan-900 font-bold">{formatINR(p.totalCumulativeWealthINR)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <DesignSwitcher currentDesignId="design-46" />
    </div>
  );
}
