"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Activity,
  ArrowRight,
  Eye,
  Sliders,
  CheckCircle2,
  Calendar,
  Layers,
  Award,
  Zap,
  Info,
  Maximize2,
  Play,
  Pause,
  RotateCcw,
  Compass,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

interface FloatingLogo {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  label: string;
  badge: string;
  direction: "up" | "down" | "pulse";
}

export default function AeroFloatingCrestLandingPage() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [glowTheme, setGlowTheme] = useState<"emerald" | "gold" | "stealth">("emerald");
  const [logoDensity, setLogoDensity] = useState<"subtle" | "rich" | "constellation">("rich");
  const [packageCount, setPackageCount] = useState(1);
  const [hoveredLogo, setHoveredLogo] = useState<FloatingLogo | null>(null);

  // Dynamic values
  const currentInvestment = packageCount * 200000;
  const year10LivingHerd = packageCount * 41;
  const year10Milking = packageCount * 12;
  const year10Calves = packageCount * 29;
  const year10MilkSales = packageCount * 1261440;
  const year10HerdAsset = packageCount * 2140000;
  const totalTenYearMilk = packageCount * 3995000;
  const totalWealthTurnover = totalTenYearMilk + year10HerdAsset;

  // Curated floating logo nodes with individual physics
  const floatingLogos: FloatingLogo[] = [
    { id: 1, top: "12%", left: "6%", size: 68, duration: 7, delay: 0, opacity: 0.28, label: "Seed Allocation", badge: "HF-A Matriarch", direction: "up" },
    { id: 2, top: "22%", left: "88%", size: 84, duration: 9, delay: 1.5, opacity: 0.24, label: "IRR Multiplier", badge: "30.6% Net Payout", direction: "down" },
    { id: 3, top: "45%", left: "4%", size: 76, duration: 8, delay: 0.8, opacity: 0.22, label: "1:1 Female Protocol", badge: "Zero Bull Overhead", direction: "up" },
    { id: 4, top: "68%", left: "92%", size: 64, duration: 6.5, delay: 2, opacity: 0.26, label: "10-Yr Living Herd", badge: "41 Animals", direction: "down" },
    { id: 5, top: "82%", left: "14%", size: 92, duration: 11, delay: 3, opacity: 0.20, label: "8.0% Butterfat", badge: "₹80 / Liter", direction: "up" },
    { id: 6, top: "35%", left: "48%", size: 54, duration: 7.5, delay: 1, opacity: 0.18, label: "Pashu Bima", badge: "100% Insured", direction: "pulse" },
    { id: 7, top: "78%", left: "78%", size: 70, duration: 8.5, delay: 2.2, opacity: 0.25, label: "Year 10 Turnover", badge: "₹61.35 Lakhs", direction: "up" },
    { id: 8, top: "8%", left: "70%", size: 60, duration: 6, delay: 0.5, opacity: 0.22, label: "CIRB Murrah", badge: "Grade A Genetics", direction: "down" },
    { id: 9, top: "58%", left: "22%", size: 58, duration: 9.5, delay: 1.8, opacity: 0.16, label: "IoT Smart Stall", badge: "482m Rumination", direction: "up" },
    { id: 10, top: "90%", left: "45%", size: 80, duration: 10, delay: 2.7, opacity: 0.18, label: "Quarterly Dividends", badge: "Direct NEFT", direction: "down" },
    { id: 11, top: "18%", left: "32%", size: 48, duration: 7, delay: 1.2, opacity: 0.14, label: "Calving Interval", badge: "15 Months", direction: "pulse" },
    { id: 12, top: "62%", left: "64%", size: 52, duration: 8.2, delay: 0.3, opacity: 0.17, label: "Verified Tiers", badge: "14 Age Brackets", direction: "up" },
  ];

  const visibleLogos =
    logoDensity === "subtle"
      ? floatingLogos.slice(0, 4)
      : logoDensity === "rich"
      ? floatingLogos.slice(0, 8)
      : floatingLogos;

  const glowStyles = {
    emerald: "drop-shadow-[0_0_18px_rgba(16,185,129,0.6)]",
    gold: "drop-shadow-[0_0_20px_rgba(245,158,11,0.65)]",
    stealth: "drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]",
  };

  return (
    <div className="min-h-screen bg-[#021811] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* Switcher Navigation */}
      <MarketplaceSwitcher currentMarketplaceId="page-27" />

      {/* ----------------- FLOATING LOGO PARALLAX BACKGROUND LAYER ----------------- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* Giant Centered Ambient Watermark Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[450px] sm:h-[600px] opacity-[0.055] select-none">
          <Image
            src="/removebg-logo.png"
            alt="Hira Farm Sovereign Watermark"
            fill
            className={`object-contain transition-all duration-1000 ${
              glowTheme === "gold"
                ? "drop-shadow-[0_0_80px_rgba(245,158,11,0.35)]"
                : "drop-shadow-[0_0_80px_rgba(16,185,129,0.35)]"
            }`}
            priority
          />
        </div>

        {/* Dynamic Floating Logos Array */}
        {visibleLogos.map((logo) => (
          <div
            key={logo.id}
            style={{
              top: logo.top,
              left: logo.left,
              width: `${logo.size}px`,
              height: `${logo.size * 0.65}px`,
              animationDuration: `${logo.duration}s`,
              animationDelay: `${logo.delay}s`,
            }}
            className={`absolute pointer-events-auto transition-transform hover:scale-125 cursor-pointer group ${
              isAnimating
                ? logo.direction === "up"
                  ? "animate-float-slow"
                  : logo.direction === "down"
                  ? "animate-float-reverse"
                  : "animate-pulse-glow"
                : ""
            }`}
            onMouseEnter={() => setHoveredLogo(logo)}
            onMouseLeave={() => setHoveredLogo(null)}
          >
            <div
              style={{ opacity: logo.opacity }}
              className="relative w-full h-full transition-opacity group-hover:opacity-100"
            >
              <Image
                src="/removebg-logo.png"
                alt="Floating Hira Farm Logo"
                fill
                className={`object-contain transition-all ${glowStyles[glowTheme]}`}
              />
            </div>

            {/* Hover Tooltip Card */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center z-50 pointer-events-none">
              <div className="bg-[#03261a]/95 border border-emerald-400/50 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-2xl text-center whitespace-nowrap">
                <div className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider">{logo.label}</div>
                <div className="text-xs font-black text-amber-300">{logo.badge}</div>
              </div>
              <div className="w-2 h-2 bg-[#03261a] border-r border-b border-emerald-400/50 rotate-45 -mt-1" />
            </div>
          </div>
        ))}

        {/* Ambient Radial Lights */}
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-10 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px]" />
      </div>

      {/* ----------------- TOP ANNOUNCEMENT TICKER ----------------- */}
      <div className="relative z-20 bg-gradient-to-r from-[#021e15] via-[#043324] to-[#021e15] border-b border-emerald-800/40 py-2.5 px-4 text-xs font-medium text-emerald-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
              <Sparkles className="w-3 h-3 mr-1 text-amber-300 animate-spin-slow" />
              AERO-FLOATING PARALLAX ACTIVE
            </span>
            <span>Murrah Bovine Sovereign Compounding • Real-Time Dynamic Watermark Canvas</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 font-mono text-xs">
            <span className="text-amber-300 font-bold">1:1 Female Calf Replacement Protocol</span>
            <span className="hidden sm:inline text-emerald-600">|</span>
            <span className="text-emerald-400">100% Pashu Bima Protected</span>
          </div>
        </div>
      </div>

      {/* ----------------- PRIMARY FLOATING HEADER ----------------- */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#021811]/85 border-b border-emerald-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Corporate Crest (Transparent Background Version) */}
          <div className="flex items-center gap-3">
            <div className="relative h-14 sm:h-16 w-44 sm:w-56 flex items-center justify-start group">
              <Image
                src="/removebg-logo.png"
                alt="Hira Farm Management"
                fill
                className="object-contain filter drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="hidden xl:block pl-3 border-l border-emerald-800/60">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                Regd. CIN: U01211MH2021PTC368921
              </span>
              <span className="text-xs text-slate-300 font-semibold block">
                Hira Farm Management Pvt. Ltd.
              </span>
            </div>
          </div>

          {/* Interactive Floating Canvas Controls (Right in the Header) */}
          <div className="hidden md:flex items-center gap-2 bg-[#032419] border border-emerald-700/50 rounded-2xl p-1.5 text-xs">
            <button
              onClick={() => setIsAnimating(!isAnimating)}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                isAnimating
                  ? "bg-emerald-500 text-slate-950 shadow-md"
                  : "bg-emerald-950 text-emerald-300"
              }`}
            >
              {isAnimating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isAnimating ? "Float Active" : "Paused"}</span>
            </button>

            {/* Glow Mode */}
            <div className="flex items-center gap-1 px-1">
              <button
                onClick={() => setGlowTheme("emerald")}
                className={`w-5 h-5 rounded-full border transition-all ${
                  glowTheme === "emerald"
                    ? "bg-emerald-400 border-white ring-2 ring-emerald-500/50"
                    : "bg-emerald-900 border-emerald-700"
                }`}
                title="Emerald Radiance"
              />
              <button
                onClick={() => setGlowTheme("gold")}
                className={`w-5 h-5 rounded-full border transition-all ${
                  glowTheme === "gold"
                    ? "bg-amber-400 border-white ring-2 ring-amber-500/50"
                    : "bg-amber-900 border-amber-700"
                }`}
                title="Gold Aurora"
              />
              <button
                onClick={() => setGlowTheme("stealth")}
                className={`w-5 h-5 rounded-full border transition-all ${
                  glowTheme === "stealth"
                    ? "bg-slate-200 border-white ring-2 ring-slate-400/50"
                    : "bg-slate-800 border-slate-700"
                }`}
                title="Stealth White"
              />
            </div>

            {/* Density Selector */}
            <select
              value={logoDensity}
              onChange={(e) => setLogoDensity(e.target.value as any)}
              className="bg-emerald-950 border border-emerald-800 text-emerald-300 text-[11px] rounded-lg px-2 py-1 font-mono focus:outline-none"
            >
              <option value="subtle">4 Logos</option>
              <option value="rich">8 Logos</option>
              <option value="constellation">12 Logos</option>
            </select>
          </div>

          {/* Action CTA */}
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/30 transition-all flex items-center gap-1.5">
              <span>Reserve Seed Lot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* ----------------- HERO SECTION ----------------- */}
      <section className="relative z-10 pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Pitch & Metrics */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-400/40 text-emerald-300 text-xs font-semibold shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>BIOLOGICAL COMPOUNDING • AERO-FLOATING CREST ENGINE</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Turn <span className="text-emerald-400 underline decoration-amber-400 decoration-wavy underline-offset-8">1 Dairy Package</span> into a Sovereign Herd of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">41 Animals</span> in 10 Years.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Modern dairy farming powered by Artificial Insemination (AI) and 1:1 female calf replacement. Start with 1 adult Murrah buffalo and her calf, and watch biological compounding multiply your wealth and daily milk cash flow across 14 verified age tiers.
              </p>

              {/* 4 Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="rounded-2xl bg-emerald-950/80 border border-emerald-700/50 p-4 backdrop-blur-md shadow-lg">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Starting Herd
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                    2 Animals
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">1 Adult + 1 Calf</div>
                </div>

                <div className="rounded-2xl bg-emerald-950/80 border border-emerald-700/50 p-4 backdrop-blur-md shadow-lg">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Year 10 Herd
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-300 mt-1">
                    41 Animals
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">12 Milking + 29 Calves</div>
                </div>

                <div className="rounded-2xl bg-emerald-950/80 border border-emerald-700/50 p-4 backdrop-blur-md shadow-lg">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Calving Interval
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                    15 Months
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">10m Gest. + 5m Open</div>
                </div>

                <div className="rounded-2xl bg-emerald-950/80 border border-emerald-700/50 p-4 backdrop-blur-md shadow-lg">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
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
                <a
                  href="#interactive-crests"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-emerald-200 bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-700/60 transition-colors"
                >
                  <Eye className="w-4 h-4 text-emerald-400" />
                  <span>Inspect Floating Watermark Crests</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>ICAR-CIRB Compliant Murrah</span>
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

            {/* Right Column: Hero Card with Clean Transparent Emblem Header */}
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
                <button className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-700/30 transition-all flex items-center justify-center gap-2">
                  <span>Lock Seed Package #1 Allocation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- INTERACTIVE COMPACT CALCULATOR SLIDER ----------------- */}
      <section id="simulator" className="relative z-10 py-16 bg-[#032218]/90 border-t border-b border-emerald-800/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
              Interactive Capital Modeling
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Scale Your Compounding Herd Allocation
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Move the slider to calculate how scaling your initial Murrah Seed Packages expands your 10-year milk dividends and cumulative living herd wealth.
            </p>
          </div>

          <div className="bg-[#021811] rounded-3xl border border-emerald-600/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Background Crest Silhouette */}
            <div className="absolute right-0 bottom-0 w-96 h-64 opacity-5 pointer-events-none">
              <Image src="/removebg-logo.png" alt="Crest Silhouette" fill className="object-contain" />
            </div>

            {/* Slider Control */}
            <div className="max-w-3xl mx-auto mb-10 relative z-10">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              <div className="rounded-2xl bg-emerald-950/70 border border-emerald-800/60 p-5">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Year 10 Living Herd</span>
                  <span className="p-1 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">Headcount</span>
                </div>
                <div className="text-3xl font-black text-white">{year10LivingHerd} Head</div>
                <div className="text-xs text-emerald-400 mt-1 font-medium">
                  {year10Milking} Milking + {year10Calves} Young Stock
                </div>
              </div>

              <div className="rounded-2xl bg-emerald-950/70 border border-emerald-800/60 p-5">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Year 10 Annual Milk</span>
                  <span className="p-1 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px]">30% Dividend</span>
                </div>
                <div className="text-3xl font-black text-amber-300">
                  ₹{(year10MilkSales / 100000).toFixed(2)} Lacs
                </div>
                <div className="text-xs text-slate-400 mt-1">Per annum recurring</div>
              </div>

              <div className="rounded-2xl bg-emerald-950/70 border border-emerald-800/60 p-5">
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

          </div>

        </div>
      </section>

      {/* ----------------- FOOTER ----------------- */}
      <footer className="relative z-10 border-t border-emerald-800/40 bg-[#01110b] py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-44">
              <Image src="/removebg-logo.png" alt="Hira Farm" fill className="object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">HIRA FARM MANAGEMENT PRIVATE LIMITED</div>
              <div>Autonomous Murrah Compounding • CIN: U01211MH2021PTC368921</div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <a href="#" className="hover:text-emerald-400">ICAR-CIRB Standards</a>
            <a href="#" className="hover:text-emerald-400">Pashu Bima Policy</a>
            <a href="#" className="hover:text-emerald-400">1:1 Replacement Terms</a>
            <a href="#" className="hover:text-emerald-400">Farm Visits</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
