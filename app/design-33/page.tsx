"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  QrCode,
  Smartphone,
  CheckCircle2,
  Bell,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Design33Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#0d0722] text-slate-100 font-sans antialiased selection:bg-[#673ab7] selection:text-white py-8 px-4 flex flex-col items-center justify-center">
      {/* Top Banner */}
      <div className="max-w-md w-full mb-4 flex items-center justify-between text-xs text-purple-300 font-mono">
        <Link href="/" className="hover:text-white flex items-center gap-1">
          &larr; Return to Design Hub
        </Link>
        <div className="flex items-center gap-1.5 text-purple-400 font-bold">
          <Smartphone className="w-3.5 h-3.5" /> UPI SuperApp Interface // 33
        </div>
      </div>

      {/* Mobile Device Frame */}
      <div className="w-full max-w-md bg-[#130b2e] border-2 border-purple-500/40 rounded-[40px] shadow-2xl overflow-hidden flex flex-col relative pb-8">
        {/* Top Status */}
        <div className="bg-[#0b051b] px-6 pt-3 pb-2 flex items-center justify-between text-[11px] text-purple-300 font-mono">
          <span>10:30 AM</span>
          <div className="w-20 h-4 bg-purple-950 rounded-full border border-purple-800" />
          <span>JIO 5G &bull; 99%</span>
        </div>

        {/* UPI Header */}
        <div className="p-4 border-b border-purple-500/20 flex items-center justify-between bg-[#190e3d]/80 backdrop-blur">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white text-sm shadow">
              ₹
            </div>
            <div>
              <div className="text-xs font-bold text-white">Hira UPI Agro-Pay</div>
              <div className="text-[10px] text-emerald-400">● Live Auto-Milk Payouts</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-purple-900/60 border border-purple-500/30 text-purple-300 text-xs flex items-center gap-1">
              <QrCode className="w-4 h-4" /> Scan
            </span>
          </div>
        </div>

        {/* Scratch Card Alert */}
        <div className="mx-4 mt-3 p-3 rounded-2xl bg-gradient-to-r from-purple-900/70 via-indigo-900/70 to-purple-900/70 border border-purple-400/30 flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-purple-600/40 border border-purple-400/50 flex items-center justify-center text-yellow-300 shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-xs">
            <div className="font-bold text-white">₹2,00,000 Dairy SIP Activated</div>
            <div className="text-[10px] text-purple-200">1 Buffalo + 1 Calf compounds to 88 cattle!</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 overflow-y-auto max-h-[640px]">
          {/* Main Balance Card */}
          <div className="rounded-2xl border border-purple-500/30 bg-[#1b0f42] p-4 space-y-3 shadow-lg">
            <div className="flex items-center justify-between text-xs text-purple-300">
              <span>Selected Simulation Horizon</span>
              <span className="text-purple-400 font-bold">Year {selectedYear} of 10</span>
            </div>

            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-3xl font-black text-white">{active.totalHerdSize}</span>
                <span className="text-xs text-purple-300 ml-1">Total Cattle</span>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-emerald-400">
                  {formatINR(active.grossMilkingRevenueINR)}
                </span>
                <div className="text-[10px] text-purple-300">Annual Milk UPI Credits</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono">
              <div className="p-2 rounded-xl bg-[#110729] border border-purple-500/20">
                <span className="text-[9px] text-purple-400 block uppercase">Mothers</span>
                <span className="text-sm font-bold text-white">{active.matureBuffaloes}</span>
              </div>
              <div className="p-2 rounded-xl bg-[#110729] border border-purple-500/20">
                <span className="text-[9px] text-purple-400 block uppercase">Heifers</span>
                <span className="text-sm font-bold text-white">{active.growingHeifers}</span>
              </div>
              <div className="p-2 rounded-xl bg-[#110729] border border-purple-500/20">
                <span className="text-[9px] text-purple-400 block uppercase">Calves</span>
                <span className="text-sm font-bold text-emerald-400">+{active.calvesBornThisYear}</span>
              </div>
            </div>
          </div>

          {/* Stepper */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-purple-300">
              <span className="font-bold text-white">Select Year Horizon</span>
              <span className="text-[11px] text-purple-400">Tap year button</span>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none font-mono">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition ${
                    p.year === selectedYear
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-600/50"
                      : "bg-[#190d3d] text-purple-300 hover:text-white"
                  }`}
                >
                  Y{p.year}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="rounded-2xl border border-purple-500/20 bg-[#170c38] p-4 space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-purple-500/20 text-purple-200">
              <span>Daily Milk Volume:</span>
              <strong className="text-white font-mono">{active.dailyMilkProductionLiters} L / day</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-purple-500/20 text-purple-200">
              <span>Farm Gate Rate:</span>
              <strong className="text-emerald-400 font-mono">₹70.00 / Liter</strong>
            </div>
            <div className="flex justify-between py-1 text-purple-200">
              <span>Total Capital Wealth:</span>
              <strong className="text-yellow-300 font-mono">{formatINR(active.totalCumulativeWealthINR)}</strong>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#110729] border border-purple-500/20 text-xs text-purple-300">
            <strong className="text-purple-400">Year {active.year} UPI Update:</strong> {active.milestoneDescription}
          </div>
        </div>

        {/* UPI AutoPay Button */}
        <div className="p-4 bg-[#0b051b] border-t border-purple-500/20">
          <button className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-purple-600/40 hover:brightness-110 transition">
            Auto-Pay ₹2,00,000 via UPI &rarr;
          </button>
        </div>
      </div>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-33" />
    </div>
  );
}
