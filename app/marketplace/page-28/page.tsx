"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Search,
  ArrowRight,
  ShieldCheck,
  Building2,
  Tag,
  Check,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

interface BuffaloItem {
  id: string;
  tagId: string;
  name: string;
  breed: string;
  category: "SINGLE" | "DOUBLE";
  emoji: string;
  age: string;
  lactationCycle: string;
  expectedYield: string;
  butterfat: string;
  priceINR: number;
  packageType: string;
  status: "AVAILABLE" | "HOT_DEAL";
  shed: string;
  image: string;
}

const BUFFALO_CATALOG: BuffaloItem[] = [
  {
    id: "BUF-01",
    tagId: "HIRA_1_MUR_BUFF_OCT26_A",
    name: "Lakshmi (Pure Murrah Matriarch)",
    breed: "Pure Murrah Buffalo",
    category: "SINGLE",
    emoji: "🐃",
    age: "40 Months",
    lactationCycle: "2nd Lactation (Peak Milking)",
    expectedYield: "14 - 17.5 L / Day",
    butterfat: "8.15% A2 Fat",
    priceINR: 200000,
    packageType: "1 Milking Buffalo + 1 Calf (Seed Package)",
    status: "HOT_DEAL",
    shed: "Shed 2 - Stanchion 14",
    image: "/Murrah_buffalo.JPG",
  },
  {
    id: "BUF-02",
    tagId: "HIRA_2_MUR_BUFF_OCT26_B",
    name: "Gauri (High-Yield 1st Calving Heifer)",
    breed: "Murrah Elite",
    category: "SINGLE",
    emoji: "🐃",
    age: "38 Months",
    lactationCycle: "1st Calving Heifer",
    expectedYield: "15 - 18 L / Day",
    butterfat: "8.20% A2 Fat",
    priceINR: 200000,
    packageType: "1 Milking Buffalo + 1 Calf",
    status: "AVAILABLE",
    shed: "Shed 2 - Stanchion 16",
    image: "/side_buffalo_kid.webp",
  },
  {
    id: "BUF-03",
    tagId: "HIRA_3_MUR_BUFF_OCT26_C",
    name: "Kalyani (Prime Dual-Dam Lot)",
    breed: "Pure Murrah",
    category: "DOUBLE",
    emoji: "🐃",
    age: "42 Months",
    lactationCycle: "2nd Lactation",
    expectedYield: "16 - 19 L / Day",
    butterfat: "8.05% A2 Fat",
    priceINR: 400000,
    packageType: "2 Buffaloes + 2 Calves (Prime Commercial Lot)",
    status: "AVAILABLE",
    shed: "Shed 1 - Bay A",
    image: "/Kid_Buffalo.jpg",
  },
  {
    id: "BUF-04",
    tagId: "HIRA_4_MUR_BUFF_OCT26_D",
    name: "Saraswati (Super-Lactator Dam)",
    breed: "Pure Murrah High-Genetics",
    category: "SINGLE",
    emoji: "🐃",
    age: "44 Months",
    lactationCycle: "2nd Lactation (Peak)",
    expectedYield: "17 - 20 L / Day",
    butterfat: "8.35% A2 Fat",
    priceINR: 210000,
    packageType: "1 Milking Buffalo + 1 Calf",
    status: "HOT_DEAL",
    shed: "Shed 2 - Stanchion 22",
    image: "/Murrah_buffalo.JPG",
  },
  {
    id: "BUF-05",
    tagId: "HIRA_5_NIL_BUFF_OCT26_E",
    name: "Anandi (Nili-Ravi Pure Line)",
    breed: "Nili-Ravi High-Fat Buffalo",
    category: "SINGLE",
    emoji: "🐃",
    age: "39 Months",
    lactationCycle: "1st Lactation",
    expectedYield: "15 - 18.5 L / Day",
    butterfat: "8.10% A2 Fat",
    priceINR: 195000,
    packageType: "1 Milking Buffalo + 1 Calf",
    status: "AVAILABLE",
    shed: "Shed 1 - Bay B",
    image: "/side_buffalo_kid.webp",
  },
  {
    id: "BUF-06",
    tagId: "HIRA_6_MUR_BUFF_OCT26_F",
    name: "Bhavani (Commercial Twin-Pack)",
    breed: "Murrah Pure Elite Lot",
    category: "DOUBLE",
    emoji: "🐃",
    age: "41 Months",
    lactationCycle: "2nd Lactation",
    expectedYield: "16 - 19.5 L / Day",
    butterfat: "8.25% A2 Fat",
    priceINR: 400000,
    packageType: "2 Buffaloes + 2 Calves (Prime Commercial Lot)",
    status: "AVAILABLE",
    shed: "Shed 1 - Bay C",
    image: "/Kid_Buffalo.jpg",
  },
];

export default function CompactWavingHeaderMarketplacePage() {
  const [filterCategory, setFilterCategory] = useState<"ALL" | "SINGLE" | "DOUBLE">("ALL");
  const [headerStyle, setHeaderStyle] = useState<"aurora" | "sunlit" | "citron" | "glass">("aurora");
  const [selectedAnimal, setSelectedAnimal] = useState<BuffaloItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBuffaloes = BUFFALO_CATALOG.filter((item) => {
    const matchesCategory = filterCategory === "ALL" || item.category === filterCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f3f7f5] text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Marketplace Switcher Navigation */}
      <MarketplaceSwitcher currentMarketplaceId="page-28" />

      {/* Inline Keyframes for Colorful Waving Animations */}
      <style jsx global>{`
        @keyframes waveShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes waveGlow {
          0%, 100% {
            filter: drop-shadow(0 4px 12px rgba(16, 185, 129, 0.35));
          }
          50% {
            filter: drop-shadow(0 8px 24px rgba(20, 184, 166, 0.55));
          }
        }
        .anim-wave-shift {
          background-size: 240% 240%;
          animation: waveShift 6s ease-in-out infinite;
        }
        .anim-wave-fast {
          background-size: 260% 260%;
          animation: waveShift 4s ease-in-out infinite;
        }
        .anim-wave-glow {
          animation: waveGlow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Style Chooser Toolbar for User Preview (Clean & Bright, No Dark Black) */}
      <div className="bg-white text-slate-800 text-xs py-2.5 px-4 border-b border-emerald-100 shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-extrabold text-emerald-900 tracking-tight">
              VIBRANT WAVING HEADER PREVIEW
            </span>
            <span className="text-slate-500 hidden sm:inline text-[11px]">
              • Compact height, vivid saturated colors, zero dark boxes
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-medium flex-wrap">
            <span className="text-slate-600 mr-1 text-[11px] font-semibold">Choose Color Wave:</span>
            <button
              onClick={() => setHeaderStyle("aurora")}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                headerStyle === "aurora"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-500/25 scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              1. Vibrant Emerald Aurora
            </button>
            <button
              onClick={() => setHeaderStyle("sunlit")}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                headerStyle === "sunlit"
                  ? "bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-600 text-white shadow-md shadow-amber-500/25 scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              2. Sunlit Meadow Wave
            </button>
            <button
              onClick={() => setHeaderStyle("citron")}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                headerStyle === "citron"
                  ? "bg-gradient-to-r from-teal-600 via-cyan-500 to-emerald-500 text-white shadow-md shadow-teal-500/25 scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              3. Electric Cyan & Mint
            </button>
            <button
              onClick={() => setHeaderStyle("glass")}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                headerStyle === "glass"
                  ? "bg-white text-emerald-800 border-2 border-emerald-500 shadow-md font-extrabold scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              4. Luminous Glass Wave
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7 space-y-6">
        
        {/* ========================================================================= */}
        {/* VIBRANT COMPACT WAVING HEADER - NO BLACK BOX, ONLY VIVID COLORS */}
        {/* ========================================================================= */}

        {/* STYLE 1: VIBRANT EMERALD AURORA (Deeply saturated, alive, fresh) */}
        {headerStyle === "aurora" && (
          <div className="relative rounded-2xl overflow-hidden p-4 sm:p-5 shadow-xl shadow-emerald-600/20 anim-wave-shift bg-gradient-to-r from-emerald-600 via-teal-500 via-emerald-500 via-cyan-500 to-emerald-600 text-white">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Left: Heading & Badge */}
              <div className="flex items-center gap-3.5 text-center md:text-left">
                <div className="w-12 h-12 rounded-2xl bg-white/25 backdrop-blur-md p-1.5 border border-white/40 flex-shrink-0 hidden sm:flex items-center justify-center shadow-inner">
                  <Image src="/removebg-logo.png" alt="Hira Farm" width={38} height={28} className="object-contain drop-shadow" />
                </div>
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white text-emerald-900 shadow-sm font-sans">
                      Verified Livestock
                    </span>
                    <span className="text-xs font-semibold text-emerald-100 hidden sm:inline drop-shadow-sm">
                      100% Pashu Bima Protected • 8.0%+ Pure Butterfat
                    </span>
                  </div>

                  {/* Colorful Waving Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mt-1 text-white drop-shadow-md">
                    Choose Your High-Yield Dairy Buffalo Below
                  </h1>
                </div>
              </div>

              {/* Right: Quick Buffalo Pack Filters */}
              <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md p-1.5 rounded-2xl border border-white/30 text-xs font-bold shadow-lg">
                <button
                  onClick={() => setFilterCategory("ALL")}
                  className={`px-3 py-1.5 rounded-xl transition-all ${
                    filterCategory === "ALL"
                      ? "bg-white text-emerald-900 shadow-md font-black"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  All Buffaloes ({BUFFALO_CATALOG.length})
                </button>
                <button
                  onClick={() => setFilterCategory("SINGLE")}
                  className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 ${
                    filterCategory === "SINGLE"
                      ? "bg-white text-emerald-900 shadow-md font-black"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <span>1 Buffalo + 1 Calf (4)</span>
                </button>
                <button
                  onClick={() => setFilterCategory("DOUBLE")}
                  className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 ${
                    filterCategory === "DOUBLE"
                      ? "bg-white text-emerald-900 shadow-md font-black"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <span>2 Buffaloes + 2 Calves (2)</span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* STYLE 2: SUNLIT MEADOW WAVE (High-Energy Amber-Gold, Lime & Emerald) */}
        {headerStyle === "sunlit" && (
          <div className="relative rounded-2xl overflow-hidden p-4 sm:p-5 shadow-xl shadow-amber-500/20 anim-wave-fast bg-gradient-to-r from-amber-500 via-emerald-600 via-teal-500 via-lime-500 to-amber-500 text-white">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center text-2xl shadow-sm border border-white/40">
                  🐃
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-900 text-amber-300 shadow">
                      MANDI CERTIFIED
                    </span>
                    <span className="text-xs text-amber-100 font-semibold hidden md:inline">
                      1:1 Replacement Warranty & Quarterly Dividends
                    </span>
                  </div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight mt-0.5 drop-shadow">
                    Select Your High-Yield Murrah Buffalo
                  </h1>
                </div>
              </div>

              {/* Buffalo Filter Buttons */}
              <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 text-xs font-bold">
                <button
                  onClick={() => setFilterCategory("ALL")}
                  className={`px-3 py-1.5 rounded-xl transition-all ${
                    filterCategory === "ALL" ? "bg-amber-300 text-slate-950 font-black shadow" : "text-white hover:bg-white/10"
                  }`}
                >
                  All ({BUFFALO_CATALOG.length})
                </button>
                <button
                  onClick={() => setFilterCategory("SINGLE")}
                  className={`px-3 py-1.5 rounded-xl transition-all ${
                    filterCategory === "SINGLE" ? "bg-amber-300 text-slate-950 font-black shadow" : "text-white hover:bg-white/10"
                  }`}
                >
                  1 Buffalo Unit
                </button>
                <button
                  onClick={() => setFilterCategory("DOUBLE")}
                  className={`px-3 py-1.5 rounded-xl transition-all ${
                    filterCategory === "DOUBLE" ? "bg-amber-300 text-slate-950 font-black shadow" : "text-white hover:bg-white/10"
                  }`}
                >
                  Twin Lots
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STYLE 3: ELECTRIC CYAN & MINT (Vivid Coastal Meadow Waves) */}
        {headerStyle === "citron" && (
          <div className="relative rounded-2xl overflow-hidden p-4 sm:p-5 shadow-xl shadow-cyan-600/20 anim-wave-shift bg-gradient-to-r from-teal-600 via-cyan-500 via-emerald-500 via-teal-700 to-cyan-600 text-white">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/25 border border-white/40 text-[11px] font-black uppercase tracking-wider text-white">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  Live Buffalo Marketplace
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight mt-1 drop-shadow-sm">
                  Choose Your High-Yield Dairy Buffalo Below
                </h1>
              </div>

              <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md p-1.5 rounded-2xl border border-white/30 text-xs font-bold">
                <button
                  onClick={() => setFilterCategory("ALL")}
                  className={`px-3 py-1.5 rounded-xl transition-all ${
                    filterCategory === "ALL" ? "bg-white text-teal-900 font-black shadow" : "text-white hover:bg-white/10"
                  }`}
                >
                  All ({BUFFALO_CATALOG.length})
                </button>
                <button
                  onClick={() => setFilterCategory("SINGLE")}
                  className={`px-3 py-1.5 rounded-xl transition-all ${
                    filterCategory === "SINGLE" ? "bg-white text-teal-900 font-black shadow" : "text-white hover:bg-white/10"
                  }`}
                >
                  Single Cow + Calf
                </button>
                <button
                  onClick={() => setFilterCategory("DOUBLE")}
                  className={`px-3 py-1.5 rounded-xl transition-all ${
                    filterCategory === "DOUBLE" ? "bg-white text-teal-900 font-black shadow" : "text-white hover:bg-white/10"
                  }`}
                >
                  Twin Lots
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STYLE 4: LUMINOUS GLASS WAVE (Ultra Clean Light & Vibrant Holographic Border) */}
        {headerStyle === "glass" && (
          <div className="relative rounded-2xl p-1 shadow-lg shadow-emerald-500/10 anim-wave-shift bg-gradient-to-r from-emerald-500 via-teal-400 via-amber-400 via-emerald-500 to-cyan-500">
            <div className="bg-gradient-to-r from-white via-emerald-50/60 to-teal-50/60 rounded-[14px] p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
                  🐃
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                      ACTIVE SELECTION
                    </span>
                    <span className="text-xs text-slate-500 hidden sm:inline">
                      100% Pashu Bima Protected
                    </span>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                    Choose Your High-Yield Dairy Buffalo Below
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-emerald-200 text-xs font-bold shadow-sm">
                <button
                  onClick={() => setFilterCategory("ALL")}
                  className={`px-3.5 py-1.5 rounded-xl transition-all ${
                    filterCategory === "ALL"
                      ? "bg-emerald-600 text-white shadow font-black"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  All ({BUFFALO_CATALOG.length})
                </button>
                <button
                  onClick={() => setFilterCategory("SINGLE")}
                  className={`px-3.5 py-1.5 rounded-xl transition-all ${
                    filterCategory === "SINGLE"
                      ? "bg-emerald-600 text-white shadow font-black"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  1 Buffalo + 1 Calf
                </button>
                <button
                  onClick={() => setFilterCategory("DOUBLE")}
                  className={`px-3.5 py-1.5 rounded-xl transition-all ${
                    filterCategory === "DOUBLE"
                      ? "bg-emerald-600 text-white shadow font-black"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  Twin Lots
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* FAST SEARCH & QUICK STATS BAR */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="relative w-full sm:w-80">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search buffalo by ear tag, name, or breed..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 shadow-sm"
            />
          </div>

          <div className="text-slate-600 text-xs font-medium flex items-center gap-3 self-end sm:self-center">
            <span>Showing <strong className="text-slate-900">{filteredBuffaloes.length}</strong> Murrah & Nili-Ravi Buffaloes</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Pashu Bima Protected
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DIRECT BUFFALO CARDS GRID (Immediately visible to customers!) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredBuffaloes.map((buffalo) => (
            <div
              key={buffalo.id}
              onClick={() => setSelectedAnimal(buffalo)}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-400/80 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group"
            >
              {/* Photo & Header Badges */}
              <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={buffalo.image}
                  alt={buffalo.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  {buffalo.status === "HOT_DEAL" ? (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-amber-400 to-rose-500 text-slate-950 shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-slate-950" />
                      Popular Pick
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500 text-white shadow-md">
                      Available Now
                    </span>
                  )}
                </div>

                {/* Ear-Tag Chip */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg border border-slate-200 flex items-center gap-1.5 shadow">
                  <Tag className="w-3 h-3 text-emerald-600" />
                  <span className="truncate max-w-[170px]">{buffalo.tagId}</span>
                </div>

                {/* Animal Name & Breed Overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] text-emerald-300 font-semibold">{buffalo.breed}</div>
                  <h3 className="font-bold text-base leading-tight drop-shadow">{buffalo.name}</h3>
                </div>
              </div>

              {/* Card Body Specs */}
              <div className="p-4 space-y-3 flex-1">
                
                {/* Composition Pill */}
                <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-xs">
                  <div className="font-bold text-emerald-950 text-xs flex items-center justify-between">
                    <span>{buffalo.packageType}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-200/80 text-emerald-900 font-semibold">
                      {buffalo.age}
                    </span>
                  </div>
                  <div className="text-[11px] text-emerald-700 mt-0.5">{buffalo.lactationCycle}</div>
                </div>

                {/* 2 Metric Pills */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Daily Yield</span>
                    <span className="font-bold text-emerald-800">{buffalo.expectedYield}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Butterfat</span>
                    <span className="font-bold text-teal-700">{buffalo.butterfat}</span>
                  </div>
                </div>

                {/* Shed Allocation */}
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{buffalo.shed}</span>
                </div>

              </div>

              {/* Card Footer: Price & Select CTA */}
              <div className="p-4 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-base font-black text-slate-900">
                    ₹{buffalo.priceINR.toLocaleString("en-IN")}
                  </div>
                  <div className="text-[10px] text-slate-500">All-Inclusive (Infra + Calf)</div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedAnimal(buffalo);
                  }}
                  className="px-4 py-2 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all flex items-center gap-1.5 group-hover:bg-emerald-500"
                >
                  <span>Select Buffalo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </main>

      {/* ========================================================================= */}
      {/* SELECTION MODAL: Buffalo Dossier & Package Allocation */}
      {/* ========================================================================= */}
      {selectedAnimal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setSelectedAnimal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 text-2xl">
                {selectedAnimal.emoji}
              </div>
              <div>
                <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-wider">
                  CONFIRM BUFFALO SELECTION
                </span>
                <h3 className="text-xl font-bold text-slate-900">{selectedAnimal.name}</h3>
              </div>
            </div>

            <div className="mt-5 space-y-3.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Official Tag ID:</span>
                  <span className="font-mono text-slate-900 font-bold">{selectedAnimal.tagId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Breed & Age:</span>
                  <span className="font-semibold text-slate-800">{selectedAnimal.breed} ({selectedAnimal.age})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Expected Yield:</span>
                  <span className="font-bold text-emerald-700">{selectedAnimal.expectedYield}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Total Allotment:</span>
                  <span className="font-black text-slate-900 text-sm">₹{selectedAnimal.priceINR.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 text-xs space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Included in this Package
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-[11px] text-emerald-900">
                  <li>100% Pashu Bima Mortality Insurance policy</li>
                  <li>1:1 Female calf nursery replacement guarantee</li>
                  <li>IoT rumination collar + climate shed stall maintenance</li>
                  <li>Quarterly 30% milk dividend paid directly to your bank account</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedAnimal(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Back to Animals
              </button>
              <button
                onClick={() => {
                  alert(`Congratulations! You have selected ${selectedAnimal.name} (${selectedAnimal.tagId}). Your allocation dossier is ready.`);
                  setSelectedAnimal(null);
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 transition-all"
              >
                Proceed to Lock Buffalo
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
