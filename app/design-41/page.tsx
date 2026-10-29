"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Sun,
  Moon,
  Compass,
  Sparkles,
  TrendingUp,
  Milk,
  Award,
  Layers,
  ArrowRight,
  Orbit,
  Star,
  CheckCircle2,
} from "lucide-react";

export default function Design41Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const [lunarPhase, setLunarPhase] = useState<"shukla" | "krishna">("shukla");
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const activeData = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/80 via-sky-50/50 to-white text-slate-800 font-sans selection:bg-amber-200 selection:text-amber-900 pb-28">
      {/* Radiant Solar Observatory Header */}
      <header className="border-b border-amber-200/70 bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center shadow-md shadow-amber-300/40 animate-pulse">
              <Sun className="w-5 h-5 text-amber-950 animate-spin-slow" />
            </div>
            <div>
              <Link href="/" className="font-extrabold text-lg text-slate-900 flex items-center gap-2 tracking-tight">
                HIRA SURYA-MANDAL <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-mono font-medium border border-amber-300">Design 41</span>
              </Link>
              <p className="text-[11px] text-amber-700 font-medium">Cosmic Dairy Observatory & Nakshatra Bovine Rhythms</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs text-amber-800 font-mono">
              <Moon className="w-3.5 h-3.5 text-sky-600" />
              <span>Rohini Nakshatra Lactation: +18% Yield</span>
            </div>
            <Link
              href="#calculator"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs shadow-md shadow-amber-400/30 hover:scale-105 transition"
            >
              Seed ₹2 Lacs
            </Link>
          </div>
        </div>
      </header>

      {/* Hero: Solar Daylight Horizon */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-14">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-amber-600" /> Solar-Harmonized Biological Compounding
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight">
              Harness Cosmic Cycles to Grow{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600">
                1 Buffalo into 88 Champions.
              </span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Merging ancient Indian celestial cycles with modern sex-sorted artificial insemination. Your ₹2 Lacs starter package of 1 pure Murrah mother and female calf compounds under the sun, multiplying into <strong>88 animals</strong> and generating <strong>₹82.32 Lacs</strong> annual milk turnover.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-sm hover:shadow-md transition">
                <span className="text-[11px] font-mono font-bold uppercase text-amber-700 block">Solar Seed Pack</span>
                <span className="text-2xl font-black text-slate-900">₹2,00,000</span>
                <span className="text-xs text-amber-600 font-medium block">1 Mother + 1 Calf</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-sm hover:shadow-md transition">
                <span className="text-[11px] font-mono font-bold uppercase text-amber-700 block">10-Yr Solar Herd</span>
                <span className="text-2xl font-black text-amber-600">88 Head</span>
                <span className="text-xs text-slate-500 font-medium block">48 Active Milking</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-sm hover:shadow-md transition">
                <span className="text-[11px] font-mono font-bold uppercase text-amber-700 block">Yr 10 Milk Sales</span>
                <span className="text-2xl font-black text-emerald-600">₹82.32 Lacs</span>
                <span className="text-xs text-slate-500 font-medium block">₹70 / Liter Market</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-5 rounded-3xl bg-white/90 border border-amber-200 shadow-xl relative overflow-hidden backdrop-blur-md">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-amber-200">
                <Image
                  src="/Murrah_buffalo.JPG"
                  alt="Murrah Buffalo under Sun"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-amber-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Surya-Priya Murrah Herd</span>
                    <span className="text-[10px] text-amber-700 font-medium">Lactation: 14L/Day | 8.2% Fat</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center">
                    <Sun className="w-4 h-4 text-slate-900" />
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-amber-50/80 border border-amber-200 flex items-center justify-between text-xs">
                <span className="font-semibold text-amber-900">Nakshatra Yield Phase:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLunarPhase("shukla")}
                    className={`px-3 py-1 rounded-lg font-bold transition ${
                      lunarPhase === "shukla"
                        ? "bg-amber-500 text-white shadow-xs"
                        : "bg-white text-amber-800 border border-amber-200"
                    }`}
                  >
                    Shukla Paksha (+12%)
                  </button>
                  <button
                    onClick={() => setLunarPhase("krishna")}
                    className={`px-3 py-1 rounded-lg font-bold transition ${
                      lunarPhase === "krishna"
                        ? "bg-amber-500 text-white shadow-xs"
                        : "bg-white text-amber-800 border border-amber-200"
                    }`}
                  >
                    Krishna Paksha (Calm)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compounding Astronomical Orbit Matrix */}
      <section id="calculator" className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl border border-amber-200 shadow-xl p-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-amber-100 pb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600">
                Astronomical Compounding Orbit &bull; 10 Years
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                The 10-Year Solar Compounding Horizon
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">Selected Orbit Year:</span>
              <div className="flex gap-1 bg-amber-50 p-1 rounded-xl border border-amber-200">
                {[1, 3, 5, 7, 10].map((yr) => (
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

          {/* Interactive Year Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono font-bold text-amber-800">
              <span>Year 1 (Initial Pair)</span>
              <span className="text-base text-amber-600 font-extrabold">Year {selectedYear} / 10</span>
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

          {/* Orbit Telemetry Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50/50 border border-amber-200">
              <div className="flex items-center justify-between text-amber-800 mb-2">
                <span className="text-xs font-semibold uppercase">Total Herd Population</span>
                <Orbit className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-3xl font-black text-slate-900">{activeData.totalHerdSize} Animals</div>
              <p className="text-xs text-amber-700 mt-1">
                {activeData.matureBuffaloes} Milking &bull; {activeData.growingHeifers} Heifers &bull; {activeData.calvesBornThisYear} Calves
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50/50 border border-sky-200">
              <div className="flex items-center justify-between text-sky-800 mb-2">
                <span className="text-xs font-semibold uppercase">Daily Milk Harvest</span>
                <Milk className="w-4 h-4 text-sky-600" />
              </div>
              <div className="text-3xl font-black text-sky-900">{activeData.dailyMilkProductionLiters} Liters/day</div>
              <p className="text-xs text-sky-700 mt-1">
                {activeData.annualMilkProductionLiters.toLocaleString('en-IN')} L/year at peak
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50/50 border border-emerald-200">
              <div className="flex items-center justify-between text-emerald-800 mb-2">
                <span className="text-xs font-semibold uppercase">Annual Gross Sales</span>
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-3xl font-black text-emerald-800">{formatINR(activeData.grossMilkingRevenueINR)}</div>
              <p className="text-xs text-emerald-700 mt-1">At standard ₹70/L farmgate price</p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50/50 border border-orange-200">
              <div className="flex items-center justify-between text-orange-800 mb-2">
                <span className="text-xs font-semibold uppercase">Cumulative Total Wealth</span>
                <Award className="w-4 h-4 text-orange-600" />
              </div>
              <div className="text-3xl font-black text-orange-900">{formatINR(activeData.totalCumulativeWealthINR)}</div>
              <p className="text-xs text-orange-700 mt-1">Includes living herd asset value</p>
            </div>
          </div>

          {/* 10-Year Solar Ledger Table */}
          <div className="overflow-x-auto rounded-2xl border border-amber-200">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-amber-100/70 text-amber-900 uppercase font-mono font-bold border-b border-amber-200">
                <tr>
                  <th className="py-3 px-4">Solar Orbit</th>
                  <th className="py-3 px-4">Milking Mothers</th>
                  <th className="py-3 px-4">Calves & Heifers</th>
                  <th className="py-3 px-4">Total Herd</th>
                  <th className="py-3 px-4">Daily Milk</th>
                  <th className="py-3 px-4">Annual Revenue</th>
                  <th className="py-3 px-4">Herd Asset Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100 text-slate-700 font-medium">
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
                    <td className="py-3 px-4 font-bold">{p.totalHerdSize} animals</td>
                    <td className="py-3 px-4 text-sky-700">{p.dailyMilkProductionLiters} L/day</td>
                    <td className="py-3 px-4 text-emerald-700 font-bold">{formatINR(p.grossMilkingRevenueINR)}</td>
                    <td className="py-3 px-4 text-amber-800 font-bold">{formatINR(p.herdAssetValueINR)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Side and Catalog Navigation */}
      <DesignSwitcher currentDesignId="design-41" />
    </div>
  );
}
