"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import {
  calculate10YearProjection,
  formatINR,
  BuffaloInvestmentConfig,
  DEFAULT_CONFIG,
} from "@/lib/dairy-compounding";
import {
  Sliders,
  BarChart4,
  Layers,
  FileSpreadsheet,
  Download,
  TrendingUp,
  DollarSign,
  Activity,
  Check,
  RefreshCw,
} from "lucide-react";

export default function Design5Page() {
  const [packageCount, setPackageCount] = useState<number>(1);
  const [milkPrice, setMilkPrice] = useState<number>(70);
  const [dailyYield, setDailyYield] = useState<number>(14);
  const [activeTab, setActiveTab] = useState<"overview" | "table" | "financials">("overview");
  const [selectedYear, setSelectedYear] = useState<number>(10);

  const customConfig: BuffaloInvestmentConfig = useMemo(() => {
    return {
      ...DEFAULT_CONFIG,
      packageCount,
      milkPricePerLiterINR: milkPrice,
      litersPerDayPerAdult: dailyYield,
    };
  }, [packageCount, milkPrice, dailyYield]);

  const projections = useMemo(() => {
    return calculate10YearProjection(customConfig);
  }, [customConfig]);

  const activeData = projections[selectedYear - 1];
  const finalYear = projections[9];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Top Dashboard Nav */}
      <header className="border-b border-slate-800 bg-[#0e1424] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white block text-sm tracking-tight">
                HIRA SIMULATOR STUDIO
              </span>
              <span className="text-[10px] text-indigo-400 font-mono">
                EXECUTIVE DASHBOARD // DESIGN 05
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <Link
              href="/"
              className="hidden sm:inline-block px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white transition"
            >
              All Designs
            </Link>
            <button
              onClick={() => {
                setPackageCount(1);
                setMilkPrice(70);
                setDailyYield(14);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white transition"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reset
            </button>
            <button className="px-4 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/30">
              Export Model PDF
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Simulator Controls Strip */}
        <div className="rounded-2xl border border-slate-800 bg-[#12192c] p-6 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div>
              <h1 className="text-xl font-bold text-white">Dynamic 10-Year Compounding Model</h1>
              <p className="text-slate-400 text-xs mt-0.5">
                Simulate herd expansion and milking revenues with real-time biological and market variables.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono">
              Initial Investment: <strong className="text-white">{formatINR(packageCount * 200000)}</strong>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Slider 1: Package Count */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Starter Packages (₹2L each)</span>
                <span className="text-indigo-400 font-bold font-mono">
                  {packageCount} Unit ({packageCount} Buffalo + {packageCount} Calf)
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                step={1}
                value={packageCount}
                onChange={(e) => setPackageCount(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1 Unit (₹2L)</span>
                <span>5 Units (₹10L)</span>
                <span>10 Units (₹20L)</span>
              </div>
            </div>

            {/* Slider 2: Milk Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Farm-Gate Milk Price (₹/Liter)</span>
                <span className="text-emerald-400 font-bold font-mono">₹{milkPrice} / Liter</span>
              </div>
              <input
                type="range"
                min={60}
                max={90}
                step={2}
                value={milkPrice}
                onChange={(e) => setMilkPrice(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>₹60 / L</span>
                <span>₹75 / L</span>
                <span>₹90 / L</span>
              </div>
            </div>

            {/* Slider 3: Daily Yield */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-medium">Avg Yield / Milking Buffalo</span>
                <span className="text-cyan-400 font-bold font-mono">{dailyYield} L / day</span>
              </div>
              <input
                type="range"
                min={12}
                max={18}
                step={1}
                value={dailyYield}
                onChange={(e) => setDailyYield(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>12 L (Conservative)</span>
                <span>14 L (Average)</span>
                <span>18 L (Peak Pedigree)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 10-Year Cumulative Summary Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl border border-slate-800 bg-[#12192c] p-4">
            <span className="text-[11px] text-slate-400 uppercase font-mono block">Year 10 Total Herd</span>
            <span className="text-2xl font-bold text-white mt-1 block">
              {finalYear.totalHerdSize} Animals
            </span>
            <span className="text-[11px] text-indigo-400 font-mono">
              {finalYear.matureBuffaloes} Milking Mothers
            </span>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#12192c] p-4">
            <span className="text-[11px] text-slate-400 uppercase font-mono block">Year 10 Annual Milk Revenue</span>
            <span className="text-2xl font-bold text-emerald-400 mt-1 block">
              {formatINR(finalYear.grossMilkingRevenueINR)}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              {(finalYear.annualMilkProductionLiters).toLocaleString()} Liters/yr
            </span>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#12192c] p-4">
            <span className="text-[11px] text-slate-400 uppercase font-mono block">10-Year Cumulative Milk</span>
            <span className="text-2xl font-bold text-cyan-400 mt-1 block">
              {formatINR(finalYear.cumulativeMilkRevenueINR)}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">Total Gross Sales</span>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#12192c] p-4">
            <span className="text-[11px] text-slate-400 uppercase font-mono block">Total Cumulative Wealth</span>
            <span className="text-2xl font-bold text-indigo-400 mt-1 block">
              {formatINR(finalYear.totalCumulativeWealthINR)}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              Asset Value + Net Cashflow
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 gap-6 text-sm font-medium">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-3 transition border-b-2 ${
              activeTab === "overview"
                ? "border-indigo-500 text-white"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Visual Compounding Bar Graph
          </button>
          <button
            onClick={() => setActiveTab("table")}
            className={`pb-3 transition border-b-2 ${
              activeTab === "table"
                ? "border-indigo-500 text-white"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Full 10-Year Master Ledger Table
          </button>
          <button
            onClick={() => setActiveTab("financials")}
            className={`pb-3 transition border-b-2 ${
              activeTab === "financials"
                ? "border-indigo-500 text-white"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Unit Economics & AI Reproduction
          </button>
        </div>

        {/* Tab 1: Overview Visual Graph */}
        {activeTab === "overview" && (
          <div className="rounded-2xl border border-slate-800 bg-[#12192c] p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-white text-lg">Herd Expansion & Milk Run-Rate</h3>
                <p className="text-xs text-slate-400">Click any year bar to inspect cohort details.</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-slate-400">Inspecting:</span>
                <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold">
                  Year {selectedYear}
                </span>
              </div>
            </div>

            <div className="h-64 sm:h-72 w-full flex items-end justify-between gap-2 pt-8 pb-2 border-b border-slate-800">
              {projections.map((p) => {
                const heightPercent = Math.max(8, (p.totalHerdSize / finalYear.totalHerdSize) * 100);
                const isSelected = p.year === selectedYear;

                return (
                  <button
                    key={p.year}
                    onClick={() => setSelectedYear(p.year)}
                    className="flex-1 h-full flex flex-col items-center justify-end group transition"
                  >
                    <div className={`text-[10px] mb-1 font-mono transition ${isSelected ? "text-indigo-400 font-bold" : "text-slate-500"}`}>
                      {p.totalHerdSize}
                    </div>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className={`w-full max-w-[42px] rounded-t transition-all ${
                        isSelected
                          ? "bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                          : "bg-slate-700 hover:bg-slate-600"
                      }`}
                    />
                    <div className={`mt-2 text-xs font-mono ${isSelected ? "text-white font-bold" : "text-slate-400"}`}>
                      Y{p.year}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-[#0e1424] border border-slate-800 text-xs grid sm:grid-cols-3 gap-4">
              <div>
                <span className="text-slate-400 block font-mono">YEAR {activeData.year} HERD COMPOSITION</span>
                <span className="font-bold text-white text-sm">
                  {activeData.totalHerdSize} Total Animals
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {activeData.matureBuffaloes} Milking | {activeData.growingHeifers} Heifers | {activeData.calvesBornThisYear} New Calves
                </p>
              </div>
              <div>
                <span className="text-slate-400 block font-mono">MILK RUN-RATE</span>
                <span className="font-bold text-emerald-400 text-sm">
                  {formatINR(activeData.grossMilkingRevenueINR)} / yr
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {activeData.dailyMilkProductionLiters} L / day @ ₹{milkPrice}/L
                </p>
              </div>
              <div>
                <span className="text-slate-400 block font-mono">ACCUMULATED NET VALUE</span>
                <span className="font-bold text-indigo-400 text-sm">
                  {formatINR(activeData.totalCumulativeWealthINR)}
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Herd Equity ({formatINR(activeData.herdAssetValueINR)}) + Milk Net
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Full Master Table */}
        {activeTab === "table" && (
          <div className="rounded-2xl border border-slate-800 bg-[#12192c] overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#0e1424] border-b border-slate-800 text-slate-400">
                  <tr>
                    <th className="p-3">YEAR</th>
                    <th className="p-3">MILKING ADULTS</th>
                    <th className="p-3">HEIFERS (1-2Y)</th>
                    <th className="p-3">NEW CALVES (0Y)</th>
                    <th className="p-3">TOTAL HERD</th>
                    <th className="p-3">ANNUAL MILK</th>
                    <th className="p-3">GROSS REVENUE</th>
                    <th className="p-3">CARE & FEED</th>
                    <th className="p-3">NET CASHFLOW</th>
                    <th className="p-3">HERD ASSET</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {projections.map((p) => (
                    <tr key={p.year} className="hover:bg-slate-800/30 transition">
                      <td className="p-3 font-bold text-white">Year {p.year}</td>
                      <td className="p-3 text-indigo-400 font-bold">{p.matureBuffaloes}</td>
                      <td className="p-3">{p.growingHeifers}</td>
                      <td className="p-3">+{p.calvesBornThisYear}</td>
                      <td className="p-3 font-bold text-white">{p.totalHerdSize}</td>
                      <td className="p-3">{p.annualMilkProductionLiters.toLocaleString()} L</td>
                      <td className="p-3 text-emerald-400 font-bold">{formatINR(p.grossMilkingRevenueINR)}</td>
                      <td className="p-3 text-rose-400">{formatINR(p.feedAndCareCostINR)}</td>
                      <td className="p-3 text-cyan-300 font-bold">{formatINR(p.netMilkingProfitINR)}</td>
                      <td className="p-3 text-indigo-300">{formatINR(p.herdAssetValueINR)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Financials & AI */}
        {activeTab === "financials" && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-800 bg-[#12192c] p-6 space-y-4">
              <h3 className="font-bold text-white text-base">Unit Economics per ₹2,00,000 Package</h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex justify-between py-2 border-b border-slate-800">
                  <span>1x Adult Murrah Buffalo (Age 3.5 - 4 yrs)</span>
                  <span className="font-bold text-white">₹1,50,000</span>
                </li>
                <li className="flex justify-between py-2 border-b border-slate-800">
                  <span>1x Superior Female Murrah Calf (Age 0 - 6 mo)</span>
                  <span className="font-bold text-white">₹50,000</span>
                </li>
                <li className="flex justify-between py-2 border-b border-slate-800">
                  <span>Lactation Yield Assumption</span>
                  <span className="font-bold text-emerald-400">{dailyYield} L/day x 300 days = {dailyYield * 300} L/yr</span>
                </li>
                <li className="flex justify-between py-2 text-slate-300">
                  <span>Gross Milk Turnover per Buffalo / Year</span>
                  <span className="font-bold text-cyan-300">{formatINR(dailyYield * 300 * milkPrice)}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#12192c] p-6 space-y-4">
              <h3 className="font-bold text-white text-base">Artificial Insemination (AI) Protocol</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hira Dairy Farm utilizes certified cryo-preserved semen from champion bulls with documented dam yield &gt;4,000 kg per lactation.
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span>Sex-Sorted Semen Accuracy:</span>
                  <span className="text-emerald-400 font-bold">95%+ Female Calves</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span>Calf to Adult Gestation & Maturation:</span>
                  <span className="text-indigo-400 font-bold">36 Months</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span>Annual Breeding Frequency:</span>
                  <span className="text-cyan-400 font-bold">1 Calf per Mature Buffalo / Year</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-5" />
    </div>
  );
}
