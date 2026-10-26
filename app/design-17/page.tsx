"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Gamepad2,
  Sword,
  Sparkles,
  Trophy,
  Coins,
  Shield,
  Zap,
} from "lucide-react";

export default function Design17Page() {
  const [selectedLevel, setSelectedLevel] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const current = projections[selectedLevel - 1];

  return (
    <div className="min-h-screen bg-[#110724] text-purple-100 font-sans antialiased selection:bg-purple-500 selection:text-white">
      {/* RPG Top Bar */}
      <div className="bg-[#1a0a38] border-b border-purple-500/30 px-6 py-2.5 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-yellow-400 font-bold">
            <Coins className="w-4 h-4" /> ENTRY: ₹2,00,000 GOLD
          </span>
          <span className="text-purple-300 hidden sm:inline-block">
            HERD XP: +8,800 XP &bull; GUILD: HIRA FARMS
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 rounded bg-purple-900 border border-purple-400 text-purple-200 text-[10px] font-bold">
            LEVEL {selectedLevel} / 10
          </span>
        </div>
      </div>

      {/* Game Nav */}
      <header className="border-b border-purple-500/20 bg-[#160830]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-18 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <Trophy className="w-5 h-5 text-yellow-300" />
            </div>
            <div>
              <span className="font-extrabold text-white block text-sm tracking-wide">
                HERD TYCOON // RPG-17
              </span>
              <span className="text-[10px] text-pink-400 font-mono">
                GAMIFIED COMPOUNDING SIMULATOR
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono">
            <Link href="/" className="text-purple-300 hover:text-white transition">
              All 20 Themes
            </Link>
            <a
              href="#quest-log"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-extrabold hover:brightness-110 transition shadow-lg shadow-yellow-500/30"
            >
              SPAWN ₹2.00L STARTER PACK
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <div className="rounded-3xl border-2 border-purple-500/30 bg-gradient-to-b from-[#1e0c42] to-[#14082c] p-8 sm:p-12 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-pink-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" /> 10-Level Compounding Quest
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Level 1: 1 Buffalo Duo. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-300">
              Level 10 Boss: 88 Cattle!
            </span>
          </h1>

          <p className="text-purple-200 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Equip the ₹2,00,000 Starter Bundle: 1 Adult Mother (Lactation Aura +14L/day) and 1 Heifer Calf. Level up your barn every 365 days with Artificial Insemination. Calves evolve into Mother Buffaloes every 3 years, unleashing an exponential farm dynasty!
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-purple-500/20 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-[#110526] border border-purple-500/30">
              <span className="text-purple-400 text-[10px] uppercase block">Starter Gold</span>
              <span className="text-xl font-bold text-white mt-1 block">₹2,00,000</span>
              <span className="text-purple-400 text-[10px]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#110526] border border-purple-500/30">
              <span className="text-purple-400 text-[10px] uppercase block">Level 10 Herd</span>
              <span className="text-xl font-bold text-pink-400 mt-1 block">88 Animals</span>
              <span className="text-purple-400 text-[10px]">28 Boss Mothers</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#110526] border border-purple-500/30">
              <span className="text-purple-400 text-[10px] uppercase block">Level 10 Loot</span>
              <span className="text-xl font-bold text-yellow-300 mt-1 block">₹82.32L / yr</span>
              <span className="text-purple-400 text-[10px]">Annual Milk Gold</span>
            </div>
          </div>
        </div>

        {/* Quest Log Horizon */}
        <section id="quest-log" className="rounded-3xl border border-purple-500/30 bg-[#160830] p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-500/20 pb-4">
            <div>
              <span className="text-xs font-mono uppercase text-pink-400 tracking-wider">
                10-LEVEL QUEST TRACKER
              </span>
              <h2 className="text-2xl font-bold text-white mt-0.5">
                Select Level to Inspect Herd Stats
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 font-mono text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedLevel(p.year)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition ${
                    p.year === selectedLevel
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_12px_rgba(236,72,153,0.5)]"
                      : "bg-[#100524] text-purple-400 hover:text-white"
                  }`}
                >
                  LVL {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#0f0422] border border-purple-500/30">
              <span className="text-purple-400 uppercase text-[10px] block">TOTAL HERD SIZE</span>
              <span className="text-2xl font-black text-white block mt-1">{current.totalHerdSize} Cattle</span>
              <span className="text-pink-400 text-[11px] block mt-1">
                {current.matureBuffaloes} Milking | {current.growingHeifers + current.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#0f0422] border border-purple-500/30">
              <span className="text-purple-400 uppercase text-[10px] block">DAILY MILK YIELD</span>
              <span className="text-2xl font-black text-yellow-300 block mt-1">{current.dailyMilkProductionLiters} Liters</span>
              <span className="text-purple-400 text-[11px] block mt-1">
                {(current.annualMilkProductionLiters).toLocaleString()} L / yr
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#0f0422] border border-purple-500/30">
              <span className="text-purple-400 uppercase text-[10px] block">ANNUAL MILK REVENUE</span>
              <span className="text-2xl font-black text-pink-400 block mt-1">{formatINR(current.grossMilkingRevenueINR)}</span>
              <span className="text-purple-400 text-[11px] block mt-1">@ ₹70/L Loot Price</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0f0422] border border-purple-500/30">
              <span className="text-purple-400 uppercase text-[10px] block">TOTAL WEALTH LOOT</span>
              <span className="text-2xl font-black text-white block mt-1">{formatINR(current.totalCumulativeWealthINR)}</span>
              <span className="text-purple-400 text-[11px] block mt-1">Livestock + Gold Net</span>
            </div>
          </div>

          <div className="p-3 bg-[#0f0422] border border-purple-500/20 rounded-xl font-mono text-xs text-purple-200">
            <strong className="text-yellow-300">Level {current.year} Quest Milestone:</strong> {current.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-17" />
    </div>
  );
}
