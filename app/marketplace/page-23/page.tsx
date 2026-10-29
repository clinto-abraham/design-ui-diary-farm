"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  TrendingUp,
  Shield,
  Activity,
  Layers,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  Cpu,
  Award,
  Zap,
  Sliders,
  DollarSign,
  Heart,
  QrCode,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function BentoGridExecutiveLandingPage() {
  const [bentoPackages, setBentoPackages] = useState(1);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-emerald-500 selection:text-black">
      <MarketplaceSwitcher currentMarketplaceId="page-23" />

      {/* Modern Header */}
      <header className="sticky top-0 z-40 bg-[#09090b]/85 backdrop-blur-xl border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-14 sm:h-16 w-52 sm:w-64 bg-[#FAF9F6] rounded-2xl p-1.5 shadow-lg border border-zinc-700/80 flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="Hira Farm Management Private Limited" width={280} height={210} className="w-full h-full object-contain" priority />
            </div>
            <div className="hidden lg:block">
              <span className="text-[10px] bg-zinc-800 text-emerald-400 border border-zinc-700 px-2 py-0.5 rounded font-mono">
                BENTO EXECUTIVE v4.0
              </span>
              <div className="text-[11px] text-zinc-400 mt-0.5">Autonomous Bovine Assets</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-zinc-950 hover:bg-zinc-200 transition-all">
              Reserve Seed Batch
            </button>
          </div>
        </div>
      </header>

      {/* Main Bento Grid Hub */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        
        {/* Section Heading */}
        <div className="mb-8">
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
            Modular Executive Architecture
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Everything in One High-Yield Bovine Package
          </h1>
          <p className="text-sm text-zinc-400 mt-2 max-w-xl">
            Explore the 7 foundational blocks of Hira Farm’s biological compounding platform.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          
          {/* Card 1: Master Hero Block (8 cols) */}
          <div className="lg:col-span-8 rounded-3xl bg-gradient-to-br from-[#121a16] via-[#10151a] to-[#0c0f12] border border-emerald-800/40 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>10-YEAR COMPOUNDING MULTIPLIER</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Turn 1 Dairy Package into <br />
                <span className="text-emerald-400">41 Murrah Animals</span> in 10 Years.
              </h2>

              <p className="text-sm text-zinc-300 max-w-lg leading-relaxed">
                Powered by Artificial Insemination and guaranteed 1:1 female calf replacement. Starting with 1 adult Murrah buffalo and 1 starter calf, generating ₹12.61 Lacs in Year 10 milk revenue and ₹21.40 Lacs in herd asset value.
              </p>

              {/* Quick Stat Bar */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">10-Yr Living Herd</div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-0.5">41 Head</div>
                </div>
                <div className="p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">Yr 10 Milk Sales</div>
                  <div className="text-xl sm:text-2xl font-black text-amber-300 mt-0.5">₹12.61L</div>
                </div>
                <div className="p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">Total Profit Turnover</div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-300 mt-0.5">₹61.35L</div>
                </div>
              </div>
            </div>

            <div className="relative h-44 rounded-2xl overflow-hidden mt-6 border border-zinc-800">
              <Image src="/Murrah_buffalo.JPG" alt="Murrah" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Murrah Pure-Breed Seed Package (₹2,00,000)</span>
                <span className="bg-emerald-500 text-slate-950 font-black px-2.5 py-1 rounded text-[10px]">
                  12 L/DAY @ ₹80/L
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Price & Allocation Bento (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-zinc-900 border border-zinc-800 p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-xs text-zinc-400 pb-3 border-b border-zinc-800">
                <span className="font-bold text-zinc-200">ITEMIZED SEED ALLOCATION</span>
                <span className="text-emerald-400 font-mono">BATCH #26</span>
              </div>

              <div className="mt-4">
                <div className="text-xs text-zinc-400">Total Fixed Investment</div>
                <div className="text-4xl font-black text-white mt-1">₹2,00,000</div>
                <div className="text-xs text-emerald-400 mt-0.5">Zero ongoing maintenance charges</div>
              </div>

              <div className="mt-6 space-y-3 text-xs">
                <div className="p-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/60 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-white">1 Milking Buffalo</div>
                    <div className="text-[10px] text-zinc-400">~40 months, in active lactation</div>
                  </div>
                  <span className="font-mono font-bold text-emerald-300">₹1,20,000</span>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/60 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-white">1 Starter Calf</div>
                    <div className="text-[10px] text-zinc-400">2 months old, weaned</div>
                  </div>
                  <span className="font-mono font-bold text-emerald-300">₹20,000</span>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/60 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-white">Wearables / Infra</div>
                    <div className="text-[10px] text-zinc-400">Collar, stall, fans, vaccines</div>
                  </div>
                  <span className="font-mono font-bold text-amber-300">₹60,000</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 py-3 rounded-xl font-bold text-xs bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all flex items-center justify-center gap-1.5">
              <span>Lock Allocation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: 1:1 Replacement Protocol (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-zinc-900 border border-zinc-800 p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">1:1 Female Calf Replacement</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Every male calf born on farm is exchanged 1-for-1 for a healthy female Murrah calf from certified partner nurseries, guaranteeing 100% productive herd compounding.
            </p>
            <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Zero Unproductive Bull Overhead
            </div>
          </div>

          {/* Card 4: IoT Smart Shed Telemetry (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-zinc-900 border border-zinc-800 p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">IoT Rumination Neck Collar</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Solar-powered IoT sensors track rumination chewing minutes (480m/day) and core temperature to predict estrus cycles and guarantee the exact 15-month calving interval.
            </p>
            <div className="text-xs text-amber-300 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 48-Hour Early Estrus Warning
            </div>
          </div>

          {/* Card 5: 8.0% Butterfat Milk Purity (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-zinc-900 border border-zinc-800 p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">8.0% Butterfat Premium Milk</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Murrah buffalo milk commands an elite market price of ₹80/Liter due to 8.0% butterfat and 9.2% SNF, supplying top artisan dairies and sweet makers across Delhi NCR & Mumbai.
            </p>
            <div className="text-xs text-cyan-300 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 30% Net Cashflow to Asset Owners
            </div>
          </div>

          {/* Card 6: Interactive Herd Scaler (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-zinc-900 border border-zinc-800 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-emerald-400" />
                Instant Scale Multiplier
              </h3>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                {bentoPackages} Pkg{bentoPackages > 1 ? "s" : ""} = ₹{bentoPackages * 2} Lakhs
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={bentoPackages}
              onChange={(e) => setBentoPackages(parseInt(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded appearance-none cursor-pointer accent-emerald-400"
            />
            <div className="grid grid-cols-2 gap-3 text-xs pt-1">
              <div className="p-3 rounded-xl bg-zinc-800/80">
                <span className="text-zinc-400">Yr 10 Living Herd:</span>
                <div className="text-lg font-bold text-white mt-0.5">{bentoPackages * 41} Animals</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-800/80">
                <span className="text-zinc-400">Yr 10 Milk Sales:</span>
                <div className="text-lg font-bold text-amber-300 mt-0.5">₹{(bentoPackages * 12.61).toFixed(2)} Lakhs</div>
              </div>
            </div>
          </div>

          {/* Card 7: Animal Ear-Tag Generator (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-zinc-900 border border-zinc-800 p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                <QrCode className="w-4 h-4 text-cyan-400" />
                Permanent Bovine Tag Nomenclature
              </h3>
              <span className="text-[10px] text-zinc-500 font-mono">ICAR-CIRB STANDARD</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black border border-zinc-800 text-xs font-mono text-emerald-400 flex items-center justify-between">
              <span>HIRA_1_MUR_BUFF_OCT26_A</span>
              <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">DAM TAG</span>
            </div>
            <div className="text-[11px] text-zinc-400 leading-relaxed">
              Every animal is tagged with Farm prefix (HIRA), series number (1), breed (MUR), species (BUFF), birth month (OCT26), and pedigree lineage (A).
            </div>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950 py-8 text-xs text-zinc-500 text-center">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3">
          <div className="relative h-12 w-44 bg-[#FAF9F6] rounded-xl p-1 flex items-center justify-center border border-zinc-800">
            <Image src="/logo.png" alt="Hira Farm" width={160} height={50} className="w-full h-full object-contain" />
          </div>
          <span>Hira Farm Bento Executive Platform</span>
        </div>
      </footer>
    </div>
  );
}
