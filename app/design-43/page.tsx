"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Sparkles,
  PartyPopper,
  Flame,
  Award,
  TrendingUp,
  Milk,
  Layers,
  ArrowRight,
  Heart,
} from "lucide-react";

export default function Design43Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const activeData = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100/60 via-pink-50/50 to-white text-slate-900 font-sans pb-28 selection:bg-pink-300 selection:text-pink-950">
      {/* Festive Rangoli Header */}
      <header className="border-b-4 border-amber-400 bg-white/90 backdrop-blur-md sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-pink-500 flex items-center justify-center shadow-lg shadow-orange-300/50 text-white">
              <PartyPopper className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <Link href="/" className="font-black text-xl text-slate-900 flex items-center gap-2 tracking-tight">
                PHULKARI MELA <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 font-mono font-bold border border-pink-300">Design 43</span>
              </Link>
              <p className="text-[11px] text-amber-700 font-bold uppercase tracking-wider">Festive Rangoli Carnival & Royal Bovine Utsav</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-xs text-amber-900 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-pink-600" />
              <span>Gau-Dhan Prosperity Festival &bull; 88 Herd Scale</span>
            </div>
            <Link
              href="#calculator"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-extrabold text-xs shadow-md shadow-pink-400/30 hover:scale-105 transition"
            >
              Start ₹2L Shagun
            </Link>
          </div>
        </div>
      </header>

      {/* Colorful Carnival Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-100 to-amber-100 border-2 border-pink-300 text-pink-900 text-xs font-black shadow-xs">
              <PartyPopper className="w-4 h-4 text-pink-600" /> The Indian Dairy Celebration of Life & Abundance
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight">
              A Festive Tapestry:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-amber-600 to-emerald-600">
                1 Mother & Calf Blossoms into 88 Royalty.
              </span>
            </h1>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
              Celebrate the joyful math of Indian rural wealth! By gifting or investing a ₹2 Lacs Murrah package, our veterinary AI protocols nurture every calf into motherhood every 3 years. By Year 10, your single gift has multiplied into <strong>88 magnificent buffaloes</strong>, yielding <strong>₹82.32 Lacs</strong> every single year.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-amber-50/80 border-2 border-amber-300 shadow-sm">
                <span className="text-[10px] font-mono font-black uppercase text-amber-800 block">Shagun Package</span>
                <span className="text-2xl font-black text-slate-900">₹2,00,000</span>
                <span className="text-xs text-amber-700 font-bold block">1 Mother + 1 Calf</span>
              </div>
              <div className="p-4 rounded-2xl bg-pink-50/80 border-2 border-pink-300 shadow-sm">
                <span className="text-[10px] font-mono font-black uppercase text-pink-800 block">10-Yr Mela Herd</span>
                <span className="text-2xl font-black text-pink-700">88 Animals</span>
                <span className="text-xs text-pink-600 font-bold block">48 Active Milkers</span>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/80 border-2 border-emerald-300 shadow-sm">
                <span className="text-[10px] font-mono font-black uppercase text-emerald-800 block">Yr 10 Milk Sales</span>
                <span className="text-2xl font-black text-emerald-700">₹82.32 L</span>
                <span className="text-xs text-emerald-600 font-bold block">Annual Cash Flow</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-5 rounded-3xl bg-white border-4 border-amber-300 shadow-2xl space-y-4">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border-2 border-pink-200">
                <Image
                  src="/Murrah_buffalo.JPG"
                  alt="Murrah Buffalo Festive"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-950/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-xs flex items-center justify-between border border-pink-200">
                  <div>
                    <span className="text-xs font-extrabold text-slate-900 block">Royal Rohtak Murrah Champion</span>
                    <span className="text-[10px] text-pink-700 font-bold">14 Liters / Day &bull; 8.4% Pure Fat</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-pink-600 text-white font-mono font-black text-xs">
                    ₹70/L
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-pink-50 border border-amber-200 text-xs text-slate-800">
                <strong className="text-pink-700">Shubh Compounding Principle:</strong> Like a family banyan tree, every daughter buffalo begins bearing calves in year 3. In 10 years, generational wealth surpasses <strong>₹3.25 Crore</strong>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10-Year Phulkari Ledger */}
      <section id="calculator" className="max-w-7xl mx-auto px-6 py-10">
        <div className="p-8 rounded-3xl bg-white border-2 border-pink-200 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-pink-100 pb-6">
            <div>
              <span className="text-xs font-mono font-black uppercase tracking-widest text-pink-600">
                Joyful 10-Year Utsav Matrix
              </span>
              <h2 className="text-3xl font-black text-slate-900 mt-1">
                Generational Wealth Flow &bull; Year 1 to 10
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700">Festival Year:</span>
              <div className="flex gap-1 bg-amber-50 p-1 rounded-xl border border-amber-200">
                {[1, 3, 5, 8, 10].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-3 py-1 rounded-lg text-xs font-black transition ${
                      selectedYear === yr
                        ? "bg-gradient-to-r from-pink-500 to-amber-500 text-white shadow-xs"
                        : "text-amber-800 hover:bg-amber-200/50"
                    }`}
                  >
                    Yr {yr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono font-black text-pink-700">
              <span>Year 1 (Initial ₹2L Seed)</span>
              <span className="text-sm bg-pink-100 text-pink-900 px-3 py-0.5 rounded-full">
                Celebrating Year {selectedYear} / 10
              </span>
              <span>Year 10 (88 Bovine Champions)</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
              className="w-full h-3 bg-pink-100 rounded-lg appearance-none cursor-pointer accent-pink-600"
            />
          </div>

          {/* Festive Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-300">
              <span className="text-xs font-bold uppercase text-amber-800 block mb-1">Mela Herd Population</span>
              <span className="text-3xl font-black text-slate-900">{activeData.totalHerdSize} Buffaloes</span>
              <span className="text-xs text-amber-700 block mt-1">
                {activeData.matureBuffaloes} milkers &bull; {activeData.growingHeifers + activeData.calvesBornThisYear} calves
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-cyan-50/80 border border-cyan-300">
              <span className="text-xs font-bold uppercase text-cyan-800 block mb-1">Daily Fresh Milk</span>
              <span className="text-3xl font-black text-cyan-950">{activeData.dailyMilkProductionLiters} L/day</span>
              <span suppressHydrationWarning className="text-xs text-cyan-700 block mt-1">
                {activeData.annualMilkProductionLiters.toLocaleString('en-IN')} Liters / year
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-pink-50/80 border border-pink-300">
              <span className="text-xs font-bold uppercase text-pink-800 block mb-1">Annual Milk Revenue</span>
              <span className="text-3xl font-black text-pink-950">{formatINR(activeData.grossMilkingRevenueINR)}</span>
              <span className="text-xs text-pink-700 block mt-1">Sold at ₹70/L local diary co-op</span>
            </div>
            <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-300">
              <span className="text-xs font-bold uppercase text-emerald-800 block mb-1">Cumulative Wealth</span>
              <span className="text-3xl font-black text-emerald-950">{formatINR(activeData.totalCumulativeWealthINR)}</span>
              <span className="text-xs text-emerald-700 block mt-1">Milking cashflow + living herd equity</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-pink-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-pink-100 text-pink-950 uppercase font-mono font-black">
                <tr>
                  <th className="py-3 px-4">Utsav Year</th>
                  <th className="py-3 px-4">Milking Mothers</th>
                  <th className="py-3 px-4">Calves & Heifers</th>
                  <th className="py-3 px-4">Total Herd</th>
                  <th className="py-3 px-4">Daily Yield</th>
                  <th className="py-3 px-4">Annual Revenue</th>
                  <th className="py-3 px-4">Herd Asset Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-100 text-slate-800 font-medium">
                {projections.map((p) => (
                  <tr
                    key={p.year}
                    className={`hover:bg-pink-50/60 transition ${
                      p.year === selectedYear ? "bg-pink-100/70 font-black text-pink-950" : ""
                    }`}
                  >
                    <td className="py-3 px-4 font-mono font-black text-pink-700">Year {p.year}</td>
                    <td className="py-3 px-4">{p.matureBuffaloes} adults</td>
                    <td className="py-3 px-4">{p.growingHeifers + p.calvesBornThisYear} calves</td>
                    <td className="py-3 px-4 font-bold">{p.totalHerdSize} animals</td>
                    <td className="py-3 px-4 text-cyan-800 font-bold">{p.dailyMilkProductionLiters} L/day</td>
                    <td className="py-3 px-4 text-emerald-700 font-black">{formatINR(p.grossMilkingRevenueINR)}</td>
                    <td className="py-3 px-4 text-amber-800 font-black">{formatINR(p.herdAssetValueINR)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <DesignSwitcher currentDesignId="design-43" />
    </div>
  );
}
