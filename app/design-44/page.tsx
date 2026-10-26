"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Hexagon,
  Sprout,
  Sun,
  ShieldCheck,
  TrendingUp,
  Milk,
  Award,
  Sparkles,
  ArrowRight,
  Leaf,
} from "lucide-react";

export default function Design44Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const activeData = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-lime-50/50 to-white text-slate-800 font-sans pb-28 selection:bg-amber-300 selection:text-amber-950">
      {/* Honeycomb Header */}
      <header className="border-b border-amber-200 bg-white/85 backdrop-blur-md sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center shadow-md shadow-amber-300/40 text-amber-950 font-black">
              <Hexagon className="w-6 h-6 fill-amber-400 stroke-amber-900" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
                HONEYCOMB BIO-FARM <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-mono font-medium border border-amber-300">Design 44</span>
              </Link>
              <p className="text-[11px] text-amber-700 font-medium">Hexagonal Permaculture & Sweet Clover Regenerative Dairy</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-100 border border-lime-300 text-xs text-lime-900 font-bold">
              <Leaf className="w-3.5 h-3.5 text-lime-600" />
              <span>100% Clover-Fed &bull; Zero Carbon Loop</span>
            </div>
            <Link
              href="#calculator"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-md shadow-amber-300 transition"
            >
              Seed ₹2 Lacs
            </Link>
          </div>
        </div>
      </header>

      {/* Honeycomb Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold">
              <Sprout className="w-4 h-4 text-lime-700" /> Nature-Mimicry Hexagonal Growth Model
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight">
              Regenerative Honeycomb:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-lime-600">
                1 Mother Compounding to 88 Living Assets.
              </span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Every buffalo resides in a biomimicry clover sanctuary where manure enriches organic soil and female offspring build the next honeycomb cell. From an initial ₹2 Lacs package, watch your biological herd mature into <strong>88 animals</strong> yielding <strong>₹82.32 Lacs</strong> in annual golden milk revenue.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-amber-700 font-bold block">Starter Cell</span>
                <span className="text-2xl font-black text-slate-900">₹2,00,000</span>
                <span className="text-xs text-amber-600 font-medium block">1 Pair Seed Asset</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-lime-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-lime-700 font-bold block">10-Yr Living Herd</span>
                <span className="text-2xl font-black text-lime-700">88 Head</span>
                <span className="text-xs text-lime-600 font-medium block">48 Active Milkers</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs">
                <span className="text-[10px] font-mono uppercase text-amber-700 font-bold block">Yr 10 Revenue</span>
                <span className="text-2xl font-black text-amber-600">₹82.32 Lacs</span>
                <span className="text-xs text-amber-600 font-medium block">Golden A2 Milk</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-5 rounded-3xl bg-white border border-amber-200 shadow-xl space-y-4">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-amber-200">
                <Image
                  src="/Murrah_buffalo.JPG"
                  alt="Permaculture Buffalo"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-xs flex items-center justify-between border border-amber-200">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Sweet-Clover Murrah Mother</span>
                    <span className="text-[10px] text-amber-700 font-medium">14L / Day &bull; 8.5% Butterfat</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-lime-800 bg-lime-100 px-2 py-1 rounded-lg">₹70 / Liter</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-lime-50/70 border border-lime-200 text-xs text-lime-950">
                <strong>Closed-Loop Permaculture:</strong> Manure creates organic biogas and nutrient-rich vermicompost, fertilizing multi-tier Napier grass and clover that feeds the compounding herd for free.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hexagonal Growth Matrix */}
      <section id="calculator" className="max-w-7xl mx-auto px-6 py-10">
        <div className="p-8 rounded-3xl bg-white border border-amber-200 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-amber-100 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">
                Permaculture Compounding Ledger
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                The 10-Year Honeycomb Matrix
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">Explore Stage:</span>
              <div className="flex gap-1 bg-amber-50 p-1 rounded-xl border border-amber-200">
                {[1, 3, 5, 8, 10].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                      selectedYear === yr
                        ? "bg-amber-500 text-slate-950 shadow-xs"
                        : "text-amber-800 hover:bg-amber-200/50"
                    }`}
                  >
                    Yr {yr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Range */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono font-bold text-amber-800">
              <span>Year 1 (Initial ₹2L Seed)</span>
              <span className="text-sm bg-amber-100 text-amber-900 px-3 py-0.5 rounded-full">
                Viewing Year {selectedYear} / 10
              </span>
              <span>Year 10 (88 Bovine Champions)</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
              className="w-full h-3 bg-amber-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200">
              <span className="text-xs font-bold uppercase text-amber-800 block mb-1">Living Herd Size</span>
              <span className="text-3xl font-black text-slate-900">{activeData.totalHerdSize} Buffaloes</span>
              <span className="text-xs text-amber-700 block mt-1">
                {activeData.matureBuffaloes} adults &bull; {activeData.growingHeifers + activeData.calvesBornThisYear} young
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-lime-50 border border-lime-200">
              <span className="text-xs font-bold uppercase text-lime-800 block mb-1">Daily Clover Milk</span>
              <span className="text-3xl font-black text-lime-950">{activeData.dailyMilkProductionLiters} L/day</span>
              <span className="text-xs text-lime-700 block mt-1">
                {(activeData.dailyMilkProductionLiters * 70).toLocaleString()} INR daily turnover
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-yellow-50 border border-yellow-200">
              <span className="text-xs font-bold uppercase text-yellow-800 block mb-1">Annual Milk Revenue</span>
              <span className="text-3xl font-black text-yellow-950">{formatINR(activeData.grossMilkingRevenueINR)}</span>
              <span className="text-xs text-yellow-700 block mt-1">300 days high lactation window</span>
            </div>
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
              <span className="text-xs font-bold uppercase text-emerald-800 block mb-1">Total Cumulative Wealth</span>
              <span className="text-3xl font-black text-emerald-950">{formatINR(activeData.totalCumulativeWealthINR)}</span>
              <span className="text-xs text-emerald-700 block mt-1">Accumulated cashflow + herd valuation</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-amber-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-amber-100 text-amber-950 uppercase font-mono font-bold">
                <tr>
                  <th className="py-3 px-4">Season</th>
                  <th className="py-3 px-4">Milkers</th>
                  <th className="py-3 px-4">Calves & Heifers</th>
                  <th className="py-3 px-4">Herd Total</th>
                  <th className="py-3 px-4">Daily Output</th>
                  <th className="py-3 px-4">Annual Revenue</th>
                  <th className="py-3 px-4">Asset Equity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100 text-slate-700">
                {projections.map((p) => (
                  <tr
                    key={p.year}
                    className={`hover:bg-amber-50/60 transition ${
                      p.year === selectedYear ? "bg-amber-100/60 font-bold text-slate-900" : ""
                    }`}
                  >
                    <td className="py-3 px-4 font-mono font-bold text-amber-800">Year {p.year}</td>
                    <td className="py-3 px-4">{p.matureBuffaloes} adults</td>
                    <td className="py-3 px-4">{p.growingHeifers + p.calvesBornThisYear} calves</td>
                    <td className="py-3 px-4 font-bold">{p.totalHerdSize} head</td>
                    <td className="py-3 px-4 text-lime-800 font-bold">{p.dailyMilkProductionLiters} L/day</td>
                    <td className="py-3 px-4 text-emerald-700 font-bold">{formatINR(p.grossMilkingRevenueINR)}</td>
                    <td className="py-3 px-4 text-amber-800 font-bold">{formatINR(p.herdAssetValueINR)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <DesignSwitcher currentDesignId="design-44" />
    </div>
  );
}
