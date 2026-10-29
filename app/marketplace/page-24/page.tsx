"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  ShieldAlert,
  ShieldCheck,
  Zap,
  ArrowRight,
  Download,
  Terminal,
  Activity,
  Layers,
  ChevronRight,
  Sparkles,
  Award,
  CircleDollarSign,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function ObsidianFintechLandingPage() {
  const [allocationTier, setAllocationTier] = useState<"angel" | "family_office" | "fund">("angel");

  const tierDetails = {
    angel: {
      name: "Angel Seed Allocation",
      packages: 1,
      ticket: "₹2,00,000",
      year10Herd: "41 Animals",
      turnover: "₹61,35,000",
      irr: "30.6% IRR",
      payout: "Quarterly NEFT",
    },
    family_office: {
      name: "Family Office Cluster",
      packages: 5,
      ticket: "₹10,00,000",
      year10Herd: "205 Animals",
      turnover: "₹3,06,75,000",
      irr: "32.4% IRR",
      payout: "Monthly Wire + Audit Dossier",
    },
    fund: {
      name: "Institutional Ag-Fund Lot",
      packages: 20,
      ticket: "₹40,00,000",
      year10Herd: "820 Animals",
      turnover: "₹12,27,00,000",
      irr: "34.8% IRR",
      payout: "Dedicated Smart Stanchion Shed",
    },
  };

  const currentTier = tierDetails[allocationTier];

  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 font-sans selection:bg-[#00ff88] selection:text-black">
      <MarketplaceSwitcher currentMarketplaceId="page-24" />

      {/* Cyber Ticker */}
      <div className="bg-[#0c0d12] border-b border-zinc-800 text-[11px] font-mono py-2 px-4 text-zinc-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
            <span className="text-[#00ff88] font-bold">ALTERNATIVE ASSET CLASS // BOVINE COMPOUNDING</span>
          </div>
          <div>ANNUALIZED ASSET IRR: 30.6% NET • 0% MARKET BETA</div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#050507]/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-14 sm:h-16 w-52 sm:w-64 bg-[#FAF9F6] rounded-2xl p-1.5 shadow-lg shadow-[#00ff88]/10 border border-[#00ff88]/40 flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="Hira Farm Management Private Limited" width={280} height={210} className="w-full h-full object-contain" priority />
            </div>
            <div className="hidden lg:block">
              <span className="text-[10px] bg-zinc-900 text-[#00ff88] border border-[#00ff88]/30 px-2 py-0.5 rounded font-mono">
                VC DECK // SER-A
              </span>
              <div className="text-[11px] text-zinc-400 mt-0.5">30.6% Net Biological IRR</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-xl text-xs font-bold bg-[#00ff88] text-black hover:bg-[#00e077] transition-all shadow-lg shadow-[#00ff88]/20 flex items-center gap-1.5">
              <span>Request LP Term Sheet</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero: The Investor Pitch */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xs font-bold font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>UNMATCHED INFLATION-INDEXED CASHFLOW ENGINE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Turn 1 Seed Package into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-emerald-300 to-teal-200">
              41 Murrah Animals & ₹61.35L
            </span> in 10 Years.
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
            Equity markets face volatility. Fixed deposits yield sub-inflation returns. Biological herd compounding combines consumable daily milk cashflow with annual capital asset multiplication governed by 15-month calving cycles.
          </p>

          {/* Allocation Ticket Toggles */}
          <div className="pt-4 flex flex-wrap gap-3 font-mono text-xs">
            <button
              onClick={() => setAllocationTier("angel")}
              className={`px-4 py-2.5 rounded-xl font-bold border transition-all ${
                allocationTier === "angel"
                  ? "bg-[#00ff88] text-black border-[#00ff88] shadow-lg shadow-[#00ff88]/20"
                  : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"
              }`}
            >
              1 Package (₹2 Lakhs)
            </button>
            <button
              onClick={() => setAllocationTier("family_office")}
              className={`px-4 py-2.5 rounded-xl font-bold border transition-all ${
                allocationTier === "family_office"
                  ? "bg-[#00ff88] text-black border-[#00ff88] shadow-lg shadow-[#00ff88]/20"
                  : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"
              }`}
            >
              5 Packages (₹10 Lakhs)
            </button>
            <button
              onClick={() => setAllocationTier("fund")}
              className={`px-4 py-2.5 rounded-xl font-bold border transition-all ${
                allocationTier === "fund"
                  ? "bg-[#00ff88] text-black border-[#00ff88] shadow-lg shadow-[#00ff88]/20"
                  : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"
              }`}
            >
              20 Packages (₹40 Lakhs)
            </button>
          </div>
        </div>

        {/* Selected Tier Metrics Card */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0c0d12] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">{currentTier.name}</span>
              <span className="text-xs font-mono font-bold text-[#00ff88] bg-[#00ff88]/10 px-2 py-0.5 rounded">
                {currentTier.irr}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                <span className="text-[10px] text-zinc-500 uppercase font-mono">Total Capital Commitment</span>
                <div className="text-2xl font-black text-white mt-1">{currentTier.ticket}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                <span className="text-[10px] text-zinc-500 uppercase font-mono">10-Yr Living Herd</span>
                <div className="text-2xl font-black text-[#00ff88] mt-1">{currentTier.year10Herd}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                <span className="text-[10px] text-zinc-500 uppercase font-mono">Projected Total Turnover</span>
                <div className="text-2xl font-black text-amber-300 mt-1">{currentTier.turnover}</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-2 text-xs">
              <div className="font-bold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00ff88]" />
                Triple Downside Protection Architecture
              </div>
              <p className="text-zinc-400 leading-relaxed">
                1. <strong>1:1 Biological Nursery Guarantee:</strong> Male calves replaced with female calves within 7 days.
                <br />
                2. <strong>Pashu Bima Insurance:</strong> 100% government policy coverage for animal mortality.
                <br />
                3. <strong>Contractual Farm Buyback:</strong> Liquidity option at any time based on verified age tier valuations.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-zinc-800">
            <Image src="/Murrah_buffalo.JPG" alt="Murrah" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 border border-zinc-800 p-3 rounded-xl text-xs flex justify-between items-center">
              <div>
                <div className="font-bold text-white">Murrah Buffalo HF-A</div>
                <div className="text-[10px] text-zinc-400">RFID Tagged & Insured</div>
              </div>
              <button className="px-3 py-1.5 rounded-lg bg-[#00ff88] text-black font-bold text-xs">
                Inspect Dossier
              </button>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-[#07080a] py-8 text-xs text-zinc-500 text-center font-mono">
        Hira Capital Alternatives • Non-Correlation Biological Alpha
      </footer>
    </div>
  );
}
