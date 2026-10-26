"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Mountain,
  Flower2,
  Droplets,
  ShieldCheck,
  TrendingUp,
  Milk,
  Award,
  Sparkles,
  ArrowRight,
  Wind,
} from "lucide-react";

export default function Design42Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const activeData = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/70 via-emerald-50/40 to-white text-slate-800 font-sans pb-28 selection:bg-purple-200 selection:text-purple-900">
      {/* Alpine Header */}
      <header className="border-b border-purple-100 bg-white/85 backdrop-blur-md sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-500 via-pink-400 to-amber-300 flex items-center justify-center shadow-md shadow-purple-300/40">
              <Mountain className="w-5 h-5 text-white" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
                KASHMIR KESAR DAIRY <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 font-mono font-medium border border-purple-200">Design 42</span>
              </Link>
              <p className="text-[11px] text-purple-700 font-medium">Himalayan Saffron Pasture & Alpine Glacier Spring Sanctuary</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-semibold">
              <Droplets className="w-3.5 h-3.5 text-emerald-600" />
              <span>Glacier Melt Hydrated &bull; 8.6% Fat</span>
            </div>
            <Link
              href="#calculator"
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md shadow-purple-400/30 transition"
            >
              Seed ₹2 Lacs
            </Link>
          </div>
        </div>
      </header>

      {/* Alpine Meadow Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/90 border border-purple-300 text-purple-900 text-xs font-bold shadow-xs">
              <Flower2 className="w-4 h-4 text-purple-600" /> High-Altitude Pure Murrah Breeding &bull; Pampore Valley
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.12]">
              Glacier Waters. Wild Saffron Feed.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600">
                Compounding Wealth for 10 Years.
              </span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              In the crisp mountain air of the Kashmir valley, your ₹2 Lacs single-pair investment grazes on organic wild clover and saffron-enriched fodder. With sex-sorted genetics, 1 mother & calf expands into <strong>88 high-yield alpine champions</strong> yielding <strong>₹82.32 Lacs annually</strong>.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-white border border-purple-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-purple-600 font-bold block">Sanctuary Seed</span>
                <span className="text-2xl font-black text-slate-900">₹2,00,000</span>
                <span className="text-xs text-purple-700 font-medium block">1 Cow-Buffalo + 1 Calf</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-emerald-600 font-bold block">10-Year Valley Herd</span>
                <span className="text-2xl font-black text-emerald-700">88 Head</span>
                <span className="text-xs text-emerald-600 font-medium block">48 Active Milkers</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-pink-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-pink-600 font-bold block">Peak Annual Revenue</span>
                <span className="text-2xl font-black text-pink-700">₹82.32 Lacs</span>
                <span className="text-xs text-pink-600 font-medium block">Year 10 Milk Sales</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-5 rounded-3xl bg-white border border-purple-200 shadow-xl space-y-4">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-purple-100">
                <Image
                  src="/Murrah_buffalo.JPG"
                  alt="Alpine Murrah Buffalo"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-xs font-bold text-purple-900 shadow-sm flex items-center gap-1.5">
                  <Wind className="w-3.5 h-3.5 text-purple-600" /> Pure Alpine Climate (18°C)
                </div>
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur-xs flex items-center justify-between border border-purple-100">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Kesar Meadow Murrah</span>
                    <span className="text-[10px] text-purple-700 font-medium">14L / Day &bull; High Butterfat A2</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-lg">₹70 / Liter</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200 text-xs text-purple-950 leading-relaxed">
                <strong>Glacier Cold-Chain Advantage:</strong> Alpine chill preserves enzymes naturally. Mother reproduces each season via artificial insemination, growing the herd safely with zero chemical hormones.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Alpine Compounding */}
      <section id="calculator" className="max-w-7xl mx-auto px-6 py-10">
        <div className="p-8 rounded-3xl bg-white border border-purple-200 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-purple-100 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-purple-600 font-bold">
                Alpine Biological Growth Model
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                From 1 Mother & Calf to 88 Mountain Bovines
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">Milestone:</span>
              <div className="flex gap-1 bg-purple-50 p-1 rounded-xl border border-purple-200">
                {[1, 3, 5, 8, 10].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                      selectedYear === yr
                        ? "bg-purple-600 text-white shadow-xs"
                        : "text-purple-800 hover:bg-purple-200/50"
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
            <div className="flex justify-between text-xs font-mono font-bold text-purple-800">
              <span>Year 1 (Initial ₹2L Pair)</span>
              <span className="text-sm bg-purple-100 text-purple-900 px-3 py-0.5 rounded-full">
                Viewing Year {selectedYear} / 10
              </span>
              <span>Year 10 (Full Herd Scale)</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
              className="w-full h-3 bg-purple-100 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
          </div>

          {/* Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200">
              <span className="text-xs font-bold uppercase text-purple-700 block mb-1">Valley Herd Size</span>
              <span className="text-3xl font-black text-purple-950">{activeData.totalHerdSize} Head</span>
              <span className="text-xs text-purple-700 block mt-1">
                {activeData.matureBuffaloes} adults &bull; {activeData.growingHeifers + activeData.calvesBornThisYear} young
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <span className="text-xs font-bold uppercase text-emerald-700 block mb-1">Daily Pure Milk</span>
              <span className="text-3xl font-black text-emerald-950">{activeData.dailyMilkProductionLiters} Liters</span>
              <span className="text-xs text-emerald-700 block mt-1">
                {(activeData.dailyMilkProductionLiters * 70).toLocaleString()} INR daily cashflow
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-pink-50/70 border border-pink-200">
              <span className="text-xs font-bold uppercase text-pink-700 block mb-1">Annual Milk Revenue</span>
              <span className="text-3xl font-black text-pink-950">{formatINR(activeData.grossMilkingRevenueINR)}</span>
              <span className="text-xs text-pink-700 block mt-1">Over 300 annual lactation days</span>
            </div>
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
              <span className="text-xs font-bold uppercase text-amber-700 block mb-1">Cumulative Wealth</span>
              <span className="text-3xl font-black text-amber-950">{formatINR(activeData.totalCumulativeWealthINR)}</span>
              <span className="text-xs text-amber-700 block mt-1">Herd equity + milk revenue</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-purple-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-purple-100 text-purple-950 uppercase font-mono font-bold">
                <tr>
                  <th className="py-3 px-4">Season</th>
                  <th className="py-3 px-4">Milkers</th>
                  <th className="py-3 px-4">Young Stock</th>
                  <th className="py-3 px-4">Total Animals</th>
                  <th className="py-3 px-4">Daily Yield</th>
                  <th className="py-3 px-4">Gross Revenue</th>
                  <th className="py-3 px-4">Cumulative Wealth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100 text-slate-700">
                {projections.map((p) => (
                  <tr
                    key={p.year}
                    className={`hover:bg-purple-50/50 transition ${
                      p.year === selectedYear ? "bg-purple-100/60 font-bold text-purple-950" : ""
                    }`}
                  >
                    <td className="py-3 px-4 font-mono font-bold text-purple-800">Year {p.year}</td>
                    <td className="py-3 px-4">{p.matureBuffaloes} adults</td>
                    <td className="py-3 px-4">{p.growingHeifers + p.calvesBornThisYear} calves</td>
                    <td className="py-3 px-4 font-bold">{p.totalHerdSize} head</td>
                    <td className="py-3 px-4">{p.dailyMilkProductionLiters} L/day</td>
                    <td className="py-3 px-4 text-emerald-700 font-bold">{formatINR(p.grossMilkingRevenueINR)}</td>
                    <td className="py-3 px-4 text-purple-900 font-bold">{formatINR(p.totalCumulativeWealthINR)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <DesignSwitcher currentDesignId="design-42" />
    </div>
  );
}
