"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Utensils,
  Wine,
  Sparkles,
  TrendingUp,
  Milk,
  Award,
  ArrowRight,
  Sun,
  ShieldCheck,
  ChefHat,
} from "lucide-react";

export default function Design49Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const activeData = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffbf5] via-[#fef7ee] to-white text-stone-800 font-sans pb-28 selection:bg-orange-200 selection:text-orange-950">
      {/* Mediterranean Header */}
      <header className="border-b border-orange-200 bg-white/90 backdrop-blur-md sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center shadow-md shadow-orange-300/40 text-white">
              <ChefHat className="w-5 h-5" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-lg text-stone-900 flex items-center gap-2">
                RIVIERA BUFFALO FROMAGERIE <span className="text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 font-mono font-medium border border-orange-300">Design 49</span>
              </Link>
              <p className="text-[11px] text-orange-700 font-medium">Artisanal Buffalo Burrata, Bocconcini & Michelin-Grade Creamery</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs text-orange-900 font-bold">
              <Wine className="w-3.5 h-3.5 text-orange-600" />
              <span>Gourmet Mozzarella Yield: 8.5% Butterfat</span>
            </div>
            <Link
              href="#calculator"
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-400/30 transition"
            >
              Seed €/₹2 Lacs
            </Link>
          </div>
        </div>
      </header>

      {/* Riviera Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-orange-900 text-xs font-bold">
              <Utensils className="w-4 h-4 text-orange-600" /> High-Margin Gourmet Cheese & Fresh Cream Destination
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-stone-900 leading-tight">
              Artisanal Buffalo Burrata.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600">
                1 Seed Pair Compounding to 88 Animals.
              </span>
            </h1>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Italian mozzarella di bufala commands 4x the value of standard milk. By investing in our ₹2 Lacs pedigree Murrah breeding pair, our precision fromagerie converts rich 8.5% butterfat milk into luxury cheeses, compounding your single pair into <strong>88 high-yield champions</strong> with <strong>₹82.32 Lacs</strong> in annual revenue.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-white border border-orange-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-orange-700 font-bold block">Fromagerie Seed</span>
                <span className="text-2xl font-black text-stone-900">₹2,00,000</span>
                <span className="text-xs text-orange-600 font-medium block">1 Pair Seed Capital</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-amber-700 font-bold block">10-Yr Estate Herd</span>
                <span className="text-2xl font-black text-amber-700">88 Head</span>
                <span className="text-xs text-amber-600 font-medium block">48 Active Milkers</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-rose-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-rose-700 font-bold block">Yr 10 Milk Sales</span>
                <span className="text-2xl font-black text-rose-700">₹82.32 Lacs</span>
                <span className="text-xs text-rose-600 font-medium block">At Farmgate ₹70/L</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-5 rounded-3xl bg-white border border-orange-200 shadow-xl space-y-4">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-orange-100">
                <Image
                  src="/Murrah_buffalo.JPG"
                  alt="Riviera Buffalo"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-950/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-xs flex items-center justify-between border border-orange-200">
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Murrah Mozzarella Queen</span>
                    <span className="text-[10px] text-orange-700 font-medium">14L / Day &bull; 8.5% High Butterfat</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-orange-800 bg-orange-100 px-2 py-1 rounded-lg">₹70 / Liter</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200 text-xs text-orange-950">
                <strong>Value-Added Cheese Premium:</strong> 14 liters of Murrah milk yields 3.5 kg of fresh mozzarella burrata, sold to luxury hotels for up to ₹2,500/day per animal.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Fromagerie Compounding */}
      <section id="calculator" className="max-w-7xl mx-auto px-6 py-10">
        <div className="p-8 rounded-3xl bg-white border border-orange-200 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-orange-100 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-orange-700 font-bold">
                Fromagerie Compounding Horizon
              </span>
              <h2 className="text-3xl font-extrabold text-stone-900 mt-1">
                The 10-Year Mediterranean Dairy Ledger
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-stone-600">Vintage Year:</span>
              <div className="flex gap-1 bg-orange-50 p-1 rounded-xl border border-orange-200">
                {[1, 3, 5, 8, 10].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                      selectedYear === yr
                        ? "bg-orange-600 text-white shadow-xs"
                        : "text-orange-800 hover:bg-orange-200/50"
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
            <div className="flex justify-between text-xs font-mono font-bold text-orange-800">
              <span>Year 1 (Initial ₹2L Seed)</span>
              <span className="text-sm bg-orange-100 text-orange-900 px-3 py-0.5 rounded-full">
                Viewing Vintage Year {selectedYear} / 10
              </span>
              <span>Year 10 (88 Bovine Champions)</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
              className="w-full h-3 bg-orange-100 rounded-lg appearance-none cursor-pointer accent-orange-600"
            />
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-orange-50/70 border border-orange-200">
              <span className="text-xs font-bold uppercase text-orange-800 block mb-1">Estate Herd Size</span>
              <span className="text-3xl font-black text-stone-900">{activeData.totalHerdSize} Head</span>
              <span className="text-xs text-orange-700 block mt-1">
                {activeData.matureBuffaloes} milkers &bull; {activeData.growingHeifers + activeData.calvesBornThisYear} calves
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
              <span className="text-xs font-bold uppercase text-amber-800 block mb-1">Daily Pure Milk</span>
              <span className="text-3xl font-black text-amber-950">{activeData.dailyMilkProductionLiters} Liters</span>
              <span className="text-xs text-amber-700 block mt-1">
                {(activeData.dailyMilkProductionLiters * 70).toLocaleString()} INR daily cashflow
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200">
              <span className="text-xs font-bold uppercase text-rose-800 block mb-1">Annual Milk Revenue</span>
              <span className="text-3xl font-black text-rose-950">{formatINR(activeData.grossMilkingRevenueINR)}</span>
              <span className="text-xs text-rose-700 block mt-1">Over 300 annual lactation days</span>
            </div>
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <span className="text-xs font-bold uppercase text-emerald-800 block mb-1">Cumulative Wealth</span>
              <span className="text-3xl font-black text-emerald-950">{formatINR(activeData.totalCumulativeWealthINR)}</span>
              <span className="text-xs text-emerald-700 block mt-1">Net profit + asset equity</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-orange-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-orange-100 text-orange-950 uppercase font-mono font-bold">
                <tr>
                  <th className="py-3 px-4">Vintage</th>
                  <th className="py-3 px-4">Milkers</th>
                  <th className="py-3 px-4">Calves & Heifers</th>
                  <th className="py-3 px-4">Total Animals</th>
                  <th className="py-3 px-4">Daily Yield</th>
                  <th className="py-3 px-4">Gross Revenue</th>
                  <th className="py-3 px-4">Herd Equity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-100 text-stone-700">
                {projections.map((p) => (
                  <tr
                    key={p.year}
                    className={`hover:bg-orange-50/50 transition ${
                      p.year === selectedYear ? "bg-orange-100/60 font-bold text-stone-900" : ""
                    }`}
                  >
                    <td className="py-3 px-4 font-mono font-bold text-orange-800">Year {p.year}</td>
                    <td className="py-3 px-4">{p.matureBuffaloes} adults</td>
                    <td className="py-3 px-4">{p.growingHeifers + p.calvesBornThisYear} calves</td>
                    <td className="py-3 px-4 font-bold">{p.totalHerdSize} animals</td>
                    <td className="py-3 px-4 text-amber-800 font-bold">{p.dailyMilkProductionLiters} L/day</td>
                    <td className="py-3 px-4 text-emerald-700 font-bold">{formatINR(p.grossMilkingRevenueINR)}</td>
                    <td className="py-3 px-4 text-orange-900 font-bold">{formatINR(p.herdAssetValueINR)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <DesignSwitcher currentDesignId="design-49" />
    </div>
  );
}
