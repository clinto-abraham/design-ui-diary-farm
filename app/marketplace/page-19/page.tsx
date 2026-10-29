"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  Shield,
  Activity,
  ArrowRight,
  Sparkles,
  Calculator,
  Sliders,
  DollarSign,
  PieChart,
  BarChart2,
  Calendar,
  Layers,
  CheckCircle2,
  Download,
  Share2,
  RefreshCw,
  Zap,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function InteractiveCompoundingEngineLandingPage() {
  const [packages, setPackages] = useState(1);
  const [years, setYears] = useState(10);
  const [milkRate, setMilkRate] = useState(80);
  const [payoutOption, setPayoutOption] = useState<"monthly" | "quarterly" | "annual">("quarterly");

  // Compounding trajectory data points based on 1 package
  const trajectory = [
    { year: 1, milking: 1, young: 1, total: 2, asset: 210000, milkLiters: 12 * 365 },
    { year: 2, milking: 1, young: 2, total: 3, asset: 250000, milkLiters: 12 * 365 },
    { year: 3, milking: 1, young: 3, total: 4, asset: 310000, milkLiters: 12 * 365 },
    { year: 4, milking: 2, young: 4, total: 6, asset: 410000, milkLiters: 24 * 365 },
    { year: 5, milking: 3, young: 6, total: 9, asset: 570000, milkLiters: 36 * 365 },
    { year: 6, milking: 4, young: 7, total: 11, asset: 770000, milkLiters: 48 * 365 },
    { year: 7, milking: 4, young: 8, total: 12, asset: 970000, milkLiters: 48 * 365 },
    { year: 8, milking: 6, young: 10, total: 16, asset: 1240000, milkLiters: 72 * 365 },
    { year: 9, milking: 9, young: 9, total: 18, asset: 1520000, milkLiters: 108 * 365 },
    { year: 10, milking: 12, young: 29, total: 41, asset: 2140000, milkLiters: 144 * 365 },
  ];

  const currentYearData = trajectory[years - 1];

  // Dynamic calculations
  const totalInvestment = packages * 200000;
  const currentHerdCount = currentYearData.total * packages;
  const currentMilkingCount = currentYearData.milking * packages;
  const currentYoungCount = currentYearData.young * packages;
  const currentAssetValue = currentYearData.asset * packages;

  // Annual Milk Revenue & 30% dividend
  const annualMilkRevenue = currentMilkingCount * 12 * 365 * milkRate;
  const annualNetPayout = annualMilkRevenue * 0.3; // 30% payout policy

  // Cumulative milk payout over selected years
  const cumulativePayout = trajectory
    .slice(0, years)
    .reduce((sum, item) => sum + item.milking * packages * 12 * 365 * milkRate * 0.3, 0);

  const totalPortfolioValue = currentAssetValue + cumulativePayout;
  const roiMultiplier = (totalPortfolioValue / totalInvestment).toFixed(2);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      <MarketplaceSwitcher currentMarketplaceId="page-19" />

      {/* Top Ticker */}
      <div className="bg-[#0f172a] border-b border-slate-800 text-xs py-2 px-4 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-cyan-300">LIVE FINTECH SIMULATOR</span>
            <span className="hidden sm:inline">• ICAR-CIRB Compliant Murrah Multiplication Engine</span>
          </div>
          <div className="font-mono text-xs text-slate-300">
            Current Murrah Milk Benchmark: <span className="text-emerald-400 font-bold">₹80.00 / L</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-14 sm:h-16 w-52 sm:w-64 bg-[#FAF9F6] rounded-2xl p-1.5 shadow-lg shadow-cyan-950/60 border border-cyan-400/40 flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="Hira Farm Management Private Limited" width={280} height={210} className="w-full h-full object-contain" priority />
            </div>
            <div className="hidden xl:block">
              <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-800 px-2 py-0.5 rounded font-mono">
                FINTECH TERMINAL v3.8
              </span>
              <div className="text-[11px] text-slate-400 mt-0.5">Biological Capital Multiplier</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-xs font-mono bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300">
              <span>Capital Outlay:</span>
              <span className="text-cyan-400 font-bold">₹{(totalInvestment / 100000).toFixed(1)}L</span>
            </div>
            <button className="px-5 py-2.5 rounded-xl font-bold text-xs bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition-all">
              Execute Portfolio Allocation
            </button>
          </div>
        </div>
      </header>

      {/* Main Interactive Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Intro Banner */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            10-Year Murrah Herd <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Wealth Simulator</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Simulate the exact biological compounding trajectory of 1 to 20 Murrah Seed Packages across 10 years, factoring in 15-month calving cycles, sex-sorted semen replacement, and milk dividends.
          </p>
        </div>

        {/* Master Simulator Controls & KPI Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sliders & Parameter Controls */}
          <div className="lg:col-span-5 space-y-6 bg-[#0e1526] border border-slate-800 rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="font-bold text-white flex items-center gap-2 text-sm">
                <Sliders className="w-4 h-4 text-cyan-400" />
                Portfolio Parameters
              </h3>
              <button
                onClick={() => {
                  setPackages(1);
                  setYears(10);
                  setMilkRate(80);
                }}
                className="text-xs text-slate-400 hover:text-cyan-400 flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" /> Reset Defaults
              </button>
            </div>

            {/* Slider 1: Seed Packages */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">Seed Packages (₹2,00,000 each)</span>
                <span className="font-mono text-cyan-400 font-bold">
                  {packages} {packages === 1 ? "Package" : "Packages"} (₹{(totalInvestment / 100000).toFixed(1)} Lakhs)
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={packages}
                onChange={(e) => setPackages(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1 Pkg (2 Animals)</span>
                <span>5 Pkgs (10 Animals)</span>
                <span>10 Pkgs</span>
                <span>20 Pkgs</span>
              </div>
            </div>

            {/* Slider 2: Year Horizon */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">Investment Horizon</span>
                <span className="font-mono text-emerald-400 font-bold">
                  Year {years} ({years * 12} Months)
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={years}
                onChange={(e) => setYears(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>Year 1</span>
                <span>Year 3</span>
                <span>Year 5</span>
                <span>Year 7</span>
                <span>Year 10</span>
              </div>
            </div>

            {/* Slider 3: Milk Rate Benchmark */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">Farmgate Milk Rate Assumption</span>
                <span className="font-mono text-amber-300 font-bold">₹{milkRate} / Liter (8% Fat)</span>
              </div>
              <input
                type="range"
                min="70"
                max="110"
                step="5"
                value={milkRate}
                onChange={(e) => setMilkRate(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>₹70/L</span>
                <span>₹80/L (Base)</span>
                <span>₹95/L</span>
                <span>₹110/L</span>
              </div>
            </div>

            {/* Payout Frequency Toggle */}
            <div className="pt-2">
              <label className="text-xs text-slate-400 block mb-2 font-medium">
                Milk Cashflow Dividend Frequency
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  onClick={() => setPayoutOption("monthly")}
                  className={`py-2 rounded-xl font-semibold border ${
                    payoutOption === "monthly"
                      ? "bg-cyan-500/20 text-cyan-300 border-cyan-500"
                      : "bg-slate-900 text-slate-400 border-slate-800"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setPayoutOption("quarterly")}
                  className={`py-2 rounded-xl font-semibold border ${
                    payoutOption === "quarterly"
                      ? "bg-cyan-500/20 text-cyan-300 border-cyan-500"
                      : "bg-slate-900 text-slate-400 border-slate-800"
                  }`}
                >
                  Quarterly (30%)
                </button>
                <button
                  onClick={() => setPayoutOption("annual")}
                  className={`py-2 rounded-xl font-semibold border ${
                    payoutOption === "annual"
                      ? "bg-cyan-500/20 text-cyan-300 border-cyan-500"
                      : "bg-slate-900 text-slate-400 border-slate-800"
                  }`}
                >
                  Annual Reinvest
                </button>
              </div>
            </div>

            {/* Quick Spec Dossier Box */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs space-y-2">
              <div className="font-bold text-white flex items-center justify-between">
                <span>Seed Allocation Summary</span>
                <span className="text-[10px] text-cyan-400">BATCH 2026-OCT</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Total Adults Injected:</span>
                <span className="text-white font-mono">{packages} Milking Buffaloes</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Starting Calves:</span>
                <span className="text-white font-mono">{packages} Female Calves</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Wearables & IoT Units:</span>
                <span className="text-white font-mono">{packages} Stalls + Rumination Collars</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Output Analytics Dashboard */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary KPI Hero Banner */}
            <div className="bg-gradient-to-br from-[#0e1a32] via-[#0b1324] to-[#070b14] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-bold">
                    Projected Portfolio Value • Year {years}
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-white mt-1">
                    ₹{(totalPortfolioValue / 100000).toFixed(2)} Lakhs
                  </div>
                </div>
                <div className="bg-cyan-950/80 border border-cyan-400/40 rounded-2xl p-4 text-right">
                  <div className="text-xs text-slate-400">Capital Multiple</div>
                  <div className="text-2xl sm:text-3xl font-black text-cyan-300">{roiMultiplier}x</div>
                  <div className="text-[11px] text-emerald-400 font-semibold">Asset + Dividend</div>
                </div>
              </div>

              {/* 4 Interactive Gauges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Total Living Herd</div>
                  <div className="text-2xl font-black text-white mt-1">{currentHerdCount} Head</div>
                  <div className="text-[10px] text-cyan-400 mt-0.5">
                    {currentMilkingCount} Milking | {currentYoungCount} Calves
                  </div>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Herd Asset Value</div>
                  <div className="text-2xl font-black text-emerald-400 mt-1">
                    ₹{(currentAssetValue / 100000).toFixed(2)}L
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Tier 1–14 Valuation</div>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Annual Milk Sales</div>
                  <div className="text-2xl font-black text-amber-300 mt-1">
                    ₹{(annualMilkRevenue / 100000).toFixed(2)}L
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">At ₹{milkRate}/L rate</div>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Owner 30% Dividend</div>
                  <div className="text-2xl font-black text-cyan-300 mt-1">
                    ₹{(annualNetPayout / 100000).toFixed(2)}L
                  </div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">Direct Bank Payout</div>
                </div>
              </div>

            </div>

            {/* Visual Growth Timeline Bar Chart */}
            <div className="bg-[#0e1526] border border-slate-800 rounded-3xl p-6 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-cyan-400" />
                  10-Year Compounding Growth Progression
                </h4>
                <span className="text-xs text-slate-400 font-mono">Headcount & Payout Curve</span>
              </div>

              {/* Graphical Step Bars */}
              <div className="space-y-2">
                {trajectory.slice(0, years).map((item) => {
                  const barWidth = Math.min(100, (item.total / 41) * 100);
                  const isSelected = item.year === years;
                  return (
                    <div
                      key={item.year}
                      className={`p-2.5 rounded-xl transition-all flex items-center justify-between text-xs ${
                        isSelected
                          ? "bg-cyan-950/60 border border-cyan-500/50"
                          : "bg-slate-900/50 border border-slate-800/40"
                      }`}
                    >
                      <div className="w-20 font-bold text-slate-300 font-mono">
                        Year {item.year} ({item.year * 12}m)
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              isSelected
                                ? "bg-gradient-to-r from-cyan-400 to-emerald-400"
                                : "bg-gradient-to-r from-cyan-600 to-blue-600"
                            }`}
                            style={{ width: `${barWidth}%` }}
                          />
                        </div>
                      </div>
                      <div className="w-28 text-right font-mono font-bold text-white">
                        {item.total * packages} Animals
                      </div>
                      <div className="w-28 text-right font-mono text-cyan-300">
                        ₹{(((item.milking * packages * 12 * 365 * milkRate * 0.3) / 100000)).toFixed(2)}L / yr
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* CTA Execution Row */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-bold text-white text-sm">Ready to Deploy {packages} Seed Package{packages > 1 ? "s" : ""}?</div>
                <div className="text-xs text-slate-400">Lock your herd ear-tag series for Month 0 calving.</div>
              </div>
              <button className="px-6 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:from-cyan-300 hover:to-emerald-300 transition-all flex items-center gap-2">
                <span>Reserve Allocation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}
