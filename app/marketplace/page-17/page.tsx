"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  ShieldCheck,
  Activity,
  ArrowRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Layers,
  Award,
  BadgePercent,
  Calculator,
  Compass,
  PhoneCall,
  Download,
  Info,
  Maximize2,
  Flame,
  Zap,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function EmeraldSovereignLandingPage() {
  const [activeTab, setActiveTab] = useState<"math" | "tiers" | "iot" | "security">("math");
  const [packageCount, setPackageCount] = useState(1);
  const [showModal, setShowModal] = useState(false);

  // Multipliers based on 1 Package
  const currentInvestment = packageCount * 200000;
  const year10LivingHerd = packageCount * 41;
  const year10Milking = packageCount * 12;
  const year10Calves = packageCount * 29;
  const year10MilkSales = packageCount * 1261440;
  const year10HerdAsset = packageCount * 2140000;
  const totalTenYearMilk = packageCount * 3995000;
  const totalWealthTurnover = totalTenYearMilk + year10HerdAsset;

  return (
    <div className="min-h-screen bg-[#031d15] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Marketplace Switcher Navigation */}
      <MarketplaceSwitcher currentMarketplaceId="page-17" />

      {/* Main Announcement Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 border-b border-emerald-800/40 py-2.5 px-4 text-xs font-medium text-emerald-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              <Sparkles className="w-3 h-3 mr-1 text-emerald-300" />
              BATCH #26 ENROLLMENT ACTIVE
            </span>
            <span>Murrah Buffalo Biological Asset Allocation • Verified 1:1 Replacement Protocol</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% Pashu Bima Insured
            </span>
            <span className="hidden sm:inline text-emerald-500/40">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-emerald-300">
              <TrendingUp className="w-3.5 h-3.5" />
              Yearly 30% Dividend Model
            </span>
          </div>
        </div>
      </div>

      {/* Primary Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#031d15]/85 border-b border-emerald-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="relative h-14 sm:h-16 w-48 sm:w-60 bg-[#FAF9F6] rounded-2xl p-1.5 shadow-xl shadow-emerald-950/80 border border-emerald-400/40 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="Hira Farm Management Private Limited"
                width={280}
                height={210}
                className="w-full h-full object-contain drop-shadow-sm"
                priority
              />
            </div>
            <div className="hidden xl:block">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Regd. CIN: U01211MH2021PTC368921
              </span>
              <p className="text-[11px] text-emerald-300/70 font-medium mt-0.5">
                Autonomous Biological Compounding
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#math" className="hover:text-emerald-400 transition-colors">
              10-Yr Compounding Math
            </a>
            <a href="#package" className="hover:text-emerald-400 transition-colors">
              Seed Package Spec
            </a>
            <a href="#simulator" className="hover:text-emerald-400 transition-colors">
              Live Wealth Simulator
            </a>
            <a href="#iot" className="hover:text-emerald-400 transition-colors">
              IoT Rumination Shed
            </a>
            <a href="#pedigree" className="hover:text-emerald-400 transition-colors">
              Pedigree Dossier
            </a>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-700/60 hover:bg-emerald-900/60 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              Whitepaper (PDF)
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Reserve Seed Package</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section (Matching Uploaded Design Language) */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -top-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Giant Watermark Background Logo with Removed Background */}
        <div className="absolute -top-6 right-8 lg:right-1/4 w-[500px] lg:w-[680px] h-[350px] lg:h-[480px] opacity-[0.08] pointer-events-none select-none">
          <Image
            src="/removebg-logo.png"
            alt="Hira Farm Ambient Watermark"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Floating Ambient Mini Crests */}
        <div className="absolute top-24 left-8 w-16 h-12 opacity-25 pointer-events-none animate-float-slow hidden md:block">
          <Image src="/removebg-logo.png" alt="Floating Crest" fill className="object-contain filter drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
        </div>
        <div className="absolute bottom-20 right-16 w-20 h-14 opacity-20 pointer-events-none animate-float-reverse hidden md:block">
          <Image src="/removebg-logo.png" alt="Floating Crest" fill className="object-contain filter drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>HIGH RETURN • LOW INVESTMENT • HERD COMPOUNDING</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                Turn <span className="text-emerald-400 underline decoration-emerald-500/60 decoration-wavy underline-offset-8">1 Dairy Package</span> into a Herd of <span className="text-emerald-300 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400">41 Animals</span> in 10 Years.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Modern dairy farming powered by Artificial Insemination (AI) and 1:1 female calf replacement. Start with 1 adult Murrah buffalo and her calf, and watch biological compounding multiply your wealth and daily milk cash flow across 14 verified age tiers.
              </p>

              {/* 4 Metric Badges (Exact Reproduction of User Screenshot) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="rounded-2xl bg-emerald-950/70 border border-emerald-800/50 p-4 backdrop-blur-md">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400/90">
                    Starting Herd
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                    2 Animals
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">1 Adult + 1 Calf</div>
                </div>

                <div className="rounded-2xl bg-emerald-950/70 border border-emerald-800/50 p-4 backdrop-blur-md">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400/90">
                    Year 10 Herd
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-300 mt-1">
                    41 Animals
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">12 Milking + 29 Calves</div>
                </div>

                <div className="rounded-2xl bg-emerald-950/70 border border-emerald-800/50 p-4 backdrop-blur-md">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400/90">
                    Calving Interval
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                    15 Months
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">10m Gest. + 5m Open</div>
                </div>

                <div className="rounded-2xl bg-emerald-950/70 border border-emerald-800/50 p-4 backdrop-blur-md">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400/90">
                    YR 10 Milk Sales
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-300 mt-1">
                    ₹12.61 Lacs
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">Yearly Gross Cashflow</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#simulator"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 shadow-xl shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5"
                >
                  <TrendingUp className="w-4 h-4 text-slate-950" />
                  <span>Explore 10-Year Compounding Math</span>
                </a>
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-emerald-200 bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-700/60 transition-colors"
                >
                  <Info className="w-4 h-4 text-emerald-400" />
                  <span>View Animal Lineage & Tagging</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>CIRB Standard Pure Murrah</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Automated Milking & Rumination</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Zero Farm Maintenance Burden</span>
                </div>
              </div>
            </div>

            {/* Right Hero Card (Exact Spec from Screenshot) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white text-slate-900 shadow-2xl shadow-emerald-950/80 p-5 sm:p-6 border border-emerald-300/40">
                
                {/* Floating Top Pill */}
                <div className="absolute -top-3.5 left-6 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-emerald-950 text-white border border-emerald-400/40 text-xs font-bold shadow-md">
                  <span className="text-emerald-400">🥛</span>
                  <span>12 L / Day Pure Murrah Milk @ ₹80/L</span>
                </div>

                {/* Main Animal Visual */}
                <div className="relative w-full h-56 rounded-2xl overflow-hidden mt-2 mb-4 bg-slate-900 group">
                  <Image
                    src="/Murrah_buffalo.JPG"
                    alt="Murrah Milking Buffalo & Calf"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Floating Overlay Badge on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-md">
                      <div className="text-[11px] font-bold text-slate-900 leading-tight">
                        Murrah Pure-Breed Seed Package
                      </div>
                      <div className="text-[10px] text-emerald-700 font-semibold">
                        1 Milking Buffalo + 1 Calf + Smart Setup (₹2,00,000)
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                      8.0% Butterfat
                    </span>
                  </div>
                </div>

                {/* 3 Cost Pillars Breakdown */}
                <div className="grid grid-cols-3 gap-2 text-center mb-4">
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-2.5">
                    <div className="text-[10px] font-semibold text-slate-500 uppercase">
                      1 Milking Buffalo
                    </div>
                    <div className="text-sm font-black text-slate-900 mt-0.5">
                      ₹1,20,000
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-2.5">
                    <div className="text-[10px] font-semibold text-slate-500 uppercase">
                      1 Starter Calf
                    </div>
                    <div className="text-sm font-black text-slate-900 mt-0.5">
                      ₹20,000
                    </div>
                  </div>
                  <div className="rounded-xl bg-amber-50/80 border border-amber-200 p-2.5">
                    <div className="text-[10px] font-semibold text-amber-800 uppercase">
                      Wearables/Infra
                    </div>
                    <div className="text-sm font-black text-amber-900 mt-0.5">
                      ₹60,000
                    </div>
                  </div>
                </div>

                {/* The Core Math Callout */}
                <div className="rounded-2xl bg-amber-50/60 border border-amber-200/90 p-4 mb-4">
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong className="text-amber-950 font-bold">The Core Math:</strong> Mother buffalo calvings every ~15 months paired with guaranteed 1:1 female calf replacement. Calves mature at ~44 months into active milk lines. By Year 10, 1 seed package compounds into <strong className="text-slate-950 font-bold">41 living animals</strong> (12 milking + 29 young stock), generating <strong className="text-emerald-700 font-bold">₹12.61 Lacs</strong> in Year 10 annual milk dividend and <strong className="text-emerald-700 font-bold">₹21.40 Lacs</strong> in herd asset value.
                  </p>
                </div>

                {/* Summary Totals Box */}
                <div className="rounded-xl bg-emerald-950 text-white p-3.5 mb-4 space-y-1.5 border border-emerald-800">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300">10-Yr Milk (30% Net Dividend):</span>
                    <span className="font-bold text-emerald-300">₹39.95 Lacs</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300">+ Year 10 Herd Asset Value:</span>
                    <span className="font-bold text-emerald-300">₹21.40 Lacs</span>
                  </div>
                  <div className="pt-1.5 border-t border-emerald-800/80 flex justify-between items-center text-sm">
                    <span className="font-bold text-white">= Total Profit Turnover:</span>
                    <span className="font-black text-amber-300 text-base">₹61.35 Lacs</span>
                  </div>
                </div>

                {/* Action CTA */}
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-700/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Lock Seed Package #1 Allocation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Interactive Dynamic Herd Calculator Slider */}
      <section id="simulator" className="py-16 bg-[#04261c] border-t border-b border-emerald-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              Interactive Capital Modeling
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Scale Your Biological Herd Compounding
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Move the slider to calculate how scaling your initial Murrah Seed Packages expands your 10-year milk dividends and cumulative living herd wealth.
            </p>
          </div>

          <div className="bg-[#031d15] rounded-3xl border border-emerald-700/40 p-6 sm:p-10 shadow-2xl">
            {/* Slider Control */}
            <div className="max-w-3xl mx-auto mb-10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-slate-300">
                  Select Seed Packages to Deploy:
                </span>
                <span className="text-2xl font-black text-emerald-400 bg-emerald-950 px-4 py-1 rounded-xl border border-emerald-600/40">
                  {packageCount} Package{packageCount > 1 ? "s" : ""} (₹{(currentInvestment / 100000).toFixed(1)} Lacs)
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={packageCount}
                onChange={(e) => setPackageCount(parseInt(e.target.value))}
                className="w-full h-3 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2 font-mono">
                <span>1 Pkg (₹2L)</span>
                <span>3 Pkgs (₹6L)</span>
                <span>5 Pkgs (₹10L)</span>
                <span>8 Pkgs (₹16L)</span>
                <span>10 Pkgs (₹20L)</span>
              </div>
            </div>

            {/* Output Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-2xl bg-emerald-950/60 border border-emerald-800/60 p-5">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Year 10 Living Herd</span>
                  <span className="p-1 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">Headcount</span>
                </div>
                <div className="text-3xl font-black text-white">{year10LivingHerd} Head</div>
                <div className="text-xs text-emerald-400 mt-1 font-medium">
                  {year10Milking} Milking + {year10Calves} Young Stock
                </div>
              </div>

              <div className="rounded-2xl bg-emerald-950/60 border border-emerald-800/60 p-5">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Year 10 Annual Milk</span>
                  <span className="p-1 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px]">30% Dividend</span>
                </div>
                <div className="text-3xl font-black text-amber-300">
                  ₹{(year10MilkSales / 100000).toFixed(2)} Lacs
                </div>
                <div className="text-xs text-slate-400 mt-1">Per annum recurring</div>
              </div>

              <div className="rounded-2xl bg-emerald-950/60 border border-emerald-800/60 p-5">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Herd Asset Equity</span>
                  <span className="p-1 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">Tier Valuation</span>
                </div>
                <div className="text-3xl font-black text-emerald-300">
                  ₹{(year10HerdAsset / 100000).toFixed(2)} Lacs
                </div>
                <div className="text-xs text-slate-400 mt-1">14 verified age categories</div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-emerald-900 to-teal-950 border border-emerald-600/50 p-5">
                <div className="flex items-center justify-between text-emerald-200 text-xs mb-1">
                  <span>Total 10-Yr Wealth</span>
                  <span className="p-1 rounded bg-emerald-400 text-slate-950 font-bold text-[10px]">Turnover</span>
                </div>
                <div className="text-3xl font-black text-white">
                  ₹{(totalWealthTurnover / 100000).toFixed(2)} Lacs
                </div>
                <div className="text-xs text-emerald-300 mt-1 font-medium">
                  {(totalWealthTurnover / currentInvestment).toFixed(1)}x Capital Multiplier
                </div>
              </div>
            </div>

            {/* Note & CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-emerald-800/50 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  All calculations model ICAR-CIRB standard 15-month calving cycles and guaranteed 1:1 replacement of male calves for female stock.
                </span>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="px-5 py-2.5 rounded-xl font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors flex-shrink-0"
              >
                Apply for {packageCount} Package Allocation
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Section 3: Deep Dive Tabs (14 Age Tiers, IoT Shed, Security) */}
      <section id="math" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8">
          <button
            onClick={() => setActiveTab("math")}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "math"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                : "bg-emerald-950/60 text-emerald-300 hover:bg-emerald-900/60 border border-emerald-800/60"
            }`}
          >
            10-Year Milestones
          </button>
          <button
            onClick={() => setActiveTab("tiers")}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "tiers"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                : "bg-emerald-950/60 text-emerald-300 hover:bg-emerald-900/60 border border-emerald-800/60"
            }`}
          >
            14 Age Valuation Tiers
          </button>
          <button
            onClick={() => setActiveTab("iot")}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "iot"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                : "bg-emerald-950/60 text-emerald-300 hover:bg-emerald-900/60 border border-emerald-800/60"
            }`}
          >
            IoT Rumination Shed
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "security"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                : "bg-emerald-950/60 text-emerald-300 hover:bg-emerald-900/60 border border-emerald-800/60"
            }`}
          >
            Pashu Bima Insurance
          </button>
        </div>

        {/* Tab 1: 10-Year Timeline Summary Table */}
        {activeTab === "math" && (
          <div className="bg-[#04261c] rounded-3xl border border-emerald-700/40 p-6 shadow-2xl overflow-x-auto">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-400" />
              Year-by-Year Headcount & Cashflow Progression (Per 1 Seed Package)
            </h3>
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-emerald-800 text-slate-400 font-semibold uppercase tracking-wider">
                  <th className="py-3 px-3">Milestone Year</th>
                  <th className="py-3 px-3">Months</th>
                  <th className="py-3 px-3 text-emerald-400">Milking Adults (≥44m)</th>
                  <th className="py-3 px-3">Young Stock (&lt;44m)</th>
                  <th className="py-3 px-3 font-bold text-white">Total Living Herd</th>
                  <th className="py-3 px-3">Births</th>
                  <th className="py-3 px-3">Asset Value (₹)</th>
                  <th className="py-3 px-3 text-amber-300">Yearly Milk 30% (₹)</th>
                  <th className="py-3 px-3 font-bold text-white">Total Wealth (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-900/60 text-slate-300 font-mono">
                <tr>
                  <td className="py-3 px-3 font-sans font-bold text-white">Year 1 (Oct 2027)</td>
                  <td className="py-3 px-3 text-slate-400">12m</td>
                  <td className="py-3 px-3 text-emerald-300">1</td>
                  <td className="py-3 px-3">1</td>
                  <td className="py-3 px-3 font-sans font-bold text-white">2</td>
                  <td className="py-3 px-3">0</td>
                  <td className="py-3 px-3">₹2,10,000</td>
                  <td className="py-3 px-3 text-amber-300">₹1,05,120</td>
                  <td className="py-3 px-3 font-sans font-bold text-white">₹3,15,120</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-sans font-bold text-white">Year 2 (Oct 2028)</td>
                  <td className="py-3 px-3 text-slate-400">24m</td>
                  <td className="py-3 px-3 text-emerald-300">1</td>
                  <td className="py-3 px-3">2</td>
                  <td className="py-3 px-3 font-sans font-bold text-white">3</td>
                  <td className="py-3 px-3">1</td>
                  <td className="py-3 px-3">₹2,50,000</td>
                  <td className="py-3 px-3 text-amber-300">₹1,05,120</td>
                  <td className="py-3 px-3 font-sans font-bold text-white">₹3,55,120</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-sans font-bold text-white">Year 3 (Oct 2029)</td>
                  <td className="py-3 px-3 text-slate-400">36m</td>
                  <td className="py-3 px-3 text-emerald-300">1</td>
                  <td className="py-3 px-3">3</td>
                  <td className="py-3 px-3 font-sans font-bold text-white">4</td>
                  <td className="py-3 px-3">1</td>
                  <td className="py-3 px-3">₹3,10,000</td>
                  <td className="py-3 px-3 text-amber-300">₹1,05,120</td>
                  <td className="py-3 px-3 font-sans font-bold text-white">₹4,15,120</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-sans font-bold text-white">Year 4 (Oct 2030)</td>
                  <td className="py-3 px-3 text-slate-400">48m</td>
                  <td className="py-3 px-3 text-emerald-300">2</td>
                  <td className="py-3 px-3">4</td>
                  <td className="py-3 px-3 font-sans font-bold text-emerald-400">6</td>
                  <td className="py-3 px-3">2</td>
                  <td className="py-3 px-3">₹4,10,000</td>
                  <td className="py-3 px-3 text-amber-300">₹2,10,240</td>
                  <td className="py-3 px-3 font-sans font-bold text-white">₹6,20,240</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-sans font-bold text-white">Year 5 (Oct 2031)</td>
                  <td className="py-3 px-3 text-slate-400">60m</td>
                  <td className="py-3 px-3 text-emerald-300">3</td>
                  <td className="py-3 px-3">6</td>
                  <td className="py-3 px-3 font-sans font-bold text-emerald-400">9</td>
                  <td className="py-3 px-3">3</td>
                  <td className="py-3 px-3">₹5,70,000</td>
                  <td className="py-3 px-3 text-amber-300">₹3,15,360</td>
                  <td className="py-3 px-3 font-sans font-bold text-white">₹8,85,360</td>
                </tr>
                <tr className="bg-emerald-950/40">
                  <td className="py-3 px-3 font-sans font-bold text-white">Year 7 (Oct 2033)</td>
                  <td className="py-3 px-3 text-slate-400">84m</td>
                  <td className="py-3 px-3 text-emerald-300">4</td>
                  <td className="py-3 px-3">8</td>
                  <td className="py-3 px-3 font-sans font-bold text-emerald-400">12</td>
                  <td className="py-3 px-3">1</td>
                  <td className="py-3 px-3">₹9,70,000</td>
                  <td className="py-3 px-3 text-amber-300">₹4,20,480</td>
                  <td className="py-3 px-3 font-sans font-bold text-white">₹13,90,480</td>
                </tr>
                <tr className="bg-emerald-900/40 font-semibold">
                  <td className="py-3 px-3 font-sans font-black text-amber-400">Year 10 (Oct 2036)</td>
                  <td className="py-3 px-3 text-slate-300">120m</td>
                  <td className="py-3 px-3 text-emerald-300 font-bold">12 Adults</td>
                  <td className="py-3 px-3 text-slate-200">8 Young Stock</td>
                  <td className="py-3 px-3 font-sans font-black text-amber-300 text-sm">20 to 41 Head</td>
                  <td className="py-3 px-3 text-emerald-300">2</td>
                  <td className="py-3 px-3 font-bold text-white">₹18,20,000 to ₹21,40,000</td>
                  <td className="py-3 px-3 font-bold text-amber-300">₹12,61,440/yr</td>
                  <td className="py-3 px-3 font-sans font-black text-amber-400 text-sm">₹61,35,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Age Tiers */}
        {activeTab === "tiers" && (
          <div className="bg-[#04261c] rounded-3xl border border-emerald-700/40 p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">14 Verified Biological Age Valuation Tiers</h3>
            <p className="text-slate-300 text-xs mb-6">
              Every calf born carries an ear-tag that automatically climbs age valuation brackets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-800">
                <span className="text-xs font-mono text-emerald-400">Tier 1 • 0 to 12 Months</span>
                <div className="text-lg font-bold text-white mt-1">Newborn / Weaning Starter</div>
                <div className="text-sm font-semibold text-amber-300 mt-2">Valuation: ₹10,000 – ₹20,000</div>
                <p className="text-xs text-slate-400 mt-1">Colostrum feeding, deworming & primary vaccination</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-800">
                <span className="text-xs font-mono text-emerald-400">Tier 2 • 12 to 24 Months</span>
                <div className="text-lg font-bold text-white mt-1">Murrah Yearling Heifer</div>
                <div className="text-sm font-semibold text-amber-300 mt-2">Valuation: ₹30,000 – ₹45,000</div>
                <p className="text-xs text-slate-400 mt-1">High-protein silage diet, rumination collar active</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-800">
                <span className="text-xs font-mono text-emerald-400">Tier 3 • 24 to 36 Months</span>
                <div className="text-lg font-bold text-white mt-1">Pubescent Heifer</div>
                <div className="text-sm font-semibold text-amber-300 mt-2">Valuation: ₹60,000 – ₹75,000</div>
                <p className="text-xs text-slate-400 mt-1">First estrus monitoring & AI readiness testing</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-800">
                <span className="text-xs font-mono text-emerald-400">Tier 4 • 36 to 44 Months</span>
                <div className="text-lg font-bold text-white mt-1">Confirmed Pregnant Heifer</div>
                <div className="text-sm font-semibold text-amber-300 mt-2">Valuation: ₹90,000 – ₹1,05,000</div>
                <p className="text-xs text-slate-400 mt-1">Gestation month 1–10; ultrasound verified</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-900/60 border border-emerald-600/70">
                <span className="text-xs font-mono text-amber-400">Tier 5 • ≥44 Months</span>
                <div className="text-lg font-bold text-white mt-1">Milking Adult Buffalo</div>
                <div className="text-sm font-semibold text-amber-300 mt-2">Valuation: ₹1,20,000 – ₹1,35,000</div>
                <p className="text-xs text-slate-300 mt-1">12L/day production, 8% butterfat payout engine</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-800 flex items-center justify-center text-center p-6">
                <div>
                  <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <div className="text-xs font-bold text-white">Full Buyback Guarantee</div>
                  <p className="text-[11px] text-slate-400 mt-1">Hira Farm guarantees liquidation at tier value</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: IoT Rumination Shed */}
        {activeTab === "iot" && (
          <div className="bg-[#04261c] rounded-3xl border border-emerald-700/40 p-6 sm:p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  Real-Time Biometric Stream
                </span>
                <h3 className="text-2xl font-black text-white mt-3">
                  IoT Smart Shed & Rumination Collar (₹60,000 Included)
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Every animal in your seed package is equipped with an IoT rumination neck collar. Live telemetry measures chewing minutes, body core temperature, and milk ejection curves to detect estrus and health flags 48 hours before physical symptoms appear.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">480+ Mins Daily Rumination Tracking</div>
                      <div className="text-xs text-slate-400">Indicates optimal digestion of TMR (Total Mixed Ration) silage.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Automated Estrus & Calving Predictor</div>
                      <div className="text-xs text-slate-400">Maintains the exact 15-month calving interval without missing an estrus cycle.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-slate-950 border border-emerald-700/60 p-5 font-mono text-xs text-slate-300 shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-emerald-400 font-bold">
                  <span>LIVE SENSOR TELEMETRY</span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    CONNECTED (ONLINE)
                  </span>
                </div>
                <div className="mt-4 space-y-2.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Ear-Tag ID:</span>
                    <span className="text-white font-bold">HIRA_1_MUR_BUFF_OCT26_A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Collar S/N:</span>
                    <span>IOT-RUM-9941</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Rumination Rate:</span>
                    <span className="text-emerald-400 font-bold">482 mins / 24h (Optimal)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Core Temp:</span>
                    <span>38.6 °C (Normal)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Daily Milk Production:</span>
                    <span className="text-amber-300 font-bold">12.4 Liters / Day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Butterfat Content:</span>
                    <span className="text-emerald-400 font-bold">8.12% SNF 9.20</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Pashu Bima Insurance */}
        {activeTab === "security" && (
          <div className="bg-[#04261c] rounded-3xl border border-emerald-700/40 p-6 sm:p-8 shadow-2xl">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white">100% Capital & Biological Replacement Shield</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Animal mortality risks are eliminated for investors through our dual-guarantee framework:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mt-6">
                <div className="p-4 rounded-xl bg-emerald-950 border border-emerald-800">
                  <div className="text-sm font-bold text-white">Government Pashu Bima Policy</div>
                  <p className="text-xs text-slate-400 mt-1">
                    Every Murrah Buffalo is insured with an RFID ear-tag through New India Assurance / United India Insurance at full valuation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-950 border border-emerald-800">
                  <div className="text-sm font-bold text-white">Hira Farm 1-for-1 Nursery Reserve</div>
                  <p className="text-xs text-slate-400 mt-1">
                    In any event of illness or delay, Hira Farm replaces the animal with a verified same-tier female Murrah heifer within 7 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-800/40 bg-[#02150f] py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-48 bg-[#FAF9F6] rounded-xl p-1.5 shadow-md flex items-center justify-center">
              <Image src="/logo.png" alt="Hira Farm" width={200} height={60} className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">HIRA FARM MANAGEMENT PRIVATE LIMITED</div>
              <div>Autonomous Murrah Compounding • CIN: U01211MH2021PTC368921</div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <a href="#" className="hover:text-emerald-400">ICAR-CIRB Guidelines</a>
            <a href="#" className="hover:text-emerald-400">Audit Reports</a>
            <a href="#" className="hover:text-emerald-400">Terms of Allocation</a>
            <a href="#" className="hover:text-emerald-400">Farm Visits</a>
          </div>
        </div>
      </footer>

      {/* Modal for Reservation */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#031d15] border border-emerald-600 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              ✕
            </button>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Reserve Murrah Seed Package</h3>
            <p className="text-xs text-slate-300 mt-1">
              Seed Package #1 (1 Milking Murrah Buffalo + 1 Calf + Wearables) • ₹2,00,000 All-Inclusive.
            </p>
            <div className="mt-4 space-y-3">
              <div>
                <label className="text-[11px] font-semibold text-slate-300">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Vikram Sharma"
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-emerald-950 border border-emerald-800 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-slate-300">WhatsApp / Phone</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-emerald-950 border border-emerald-800 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
            <button
              onClick={() => {
                alert("Thank you! A Hira Farm Agricultural Asset Manager will connect with your allocation dossier.");
                setShowModal(false);
              }}
              className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 font-bold text-sm shadow-lg hover:from-emerald-300 hover:to-teal-200 transition-all"
            >
              Confirm Interest & Download Dossier
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
