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
  CheckCircle2,
  Calendar,
  Layers,
  Award,
  BarChart3,
  Sliders,
  Cpu,
  QrCode,
  FileText,
  Clock,
  DollarSign,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function CleanTechAgroSaasLandingPage() {
  const [animalType, setAnimalType] = useState<"buff" | "cow" | "goat">("buff");
  const [timeHorizon, setTimeHorizon] = useState<3 | 5 | 10>(10);

  const animalData = {
    buff: {
      name: "Murrah Buffalo",
      tagline: "High Butterfat (8.0%) • Peak Compounding Power",
      investment: "₹2,00,000",
      startingHerd: "2 Animals (1 Mother + 1 Calf)",
      year10Herd: "41 Animals (12 Milking + 29 Calves)",
      calvingInterval: "15 Months",
      dailyLiters: "12 L / Day",
      milkPrice: "₹80 / Liter",
      year10GrossMilk: "₹12.61 Lacs",
      year10AssetValue: "₹21.40 Lacs",
      turnover: "₹61.35 Lacs",
      roi: "30.6% Net Annualized IRR",
      image: "/Murrah_buffalo.JPG",
    },
    cow: {
      name: "Gir A2 Indigenous Cow",
      tagline: "Vedic A2 Beta-Casein • Rapid Calving Cadence",
      investment: "₹1,50,000",
      startingHerd: "2 Animals (1 Milking Gir + 1 Calf)",
      year10Herd: "48 Animals (16 Milking + 32 Calves)",
      calvingInterval: "13 Months",
      dailyLiters: "14 L / Day",
      milkPrice: "₹65 / Liter",
      year10GrossMilk: "₹11.20 Lacs",
      year10AssetValue: "₹18.50 Lacs",
      turnover: "₹52.80 Lacs",
      roi: "27.4% Net Annualized IRR",
      image: "/side_buffalo_kid.webp",
    },
    goat: {
      name: "Beetal / Sirohi Dairy Goat",
      tagline: "Micro-Livestock Cluster • Triplet/Twin Kid Births",
      investment: "₹75,000",
      startingHerd: "5 Does + 1 Buck Herd Lot",
      year10Herd: "120+ Goats (Continuous kidding)",
      calvingInterval: "8 Months",
      dailyLiters: "3 L / Doe",
      milkPrice: "₹120 / Liter",
      year10GrossMilk: "₹8.90 Lacs",
      year10AssetValue: "₹14.20 Lacs",
      turnover: "₹42.50 Lacs",
      roi: "33.2% Net Annualized IRR",
      image: "/Kid_Buffalo.jpg",
    },
  };

  const current = animalData[animalType];

  return (
    <div className="min-h-screen bg-[#fafaf9] text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Switcher Navigation */}
      <MarketplaceSwitcher currentMarketplaceId="page-18" />

      {/* Top Banner */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 text-center font-medium">
        <span className="inline-block bg-emerald-500 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px] mr-2">
          NEW
        </span>
        Hira Farm 2.0 Autonomous Dairy Platform: Fully Tokenized & Insured Livestock Assets.
        <a href="#matrix" className="underline ml-2 text-emerald-400 hover:text-emerald-300">
          View Asset Comparison →
        </a>
      </div>

      {/* Main Clean Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-14 sm:h-16 w-52 sm:w-64 bg-[#FAF9F6] border border-slate-200/90 rounded-2xl p-1.5 flex items-center justify-center shadow-sm overflow-hidden">
              <Image
                src="/logo.png"
                alt="Hira Farm Management Private Limited"
                width={280}
                height={210}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a href="#hero" className="hover:text-emerald-600 transition-colors">Platform</a>
            <a href="#breakdown" className="hover:text-emerald-600 transition-colors">Unit Economics</a>
            <a href="#matrix" className="hover:text-emerald-600 transition-colors">Yield Matrix</a>
            <a href="#pipeline" className="hover:text-emerald-600 transition-colors">10-Yr Compounding</a>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              ● Live Farm Telemetry
            </span>
            <button className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-md">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-12 pb-20 border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Tag */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-bold border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>THE MODERN LIVESTOCK ASSET ALLOCATION</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Turn 1 Seed Package into <br />
              <span className="text-emerald-600 underline decoration-emerald-300 underline-offset-8">
                41 Murrah Animals
              </span> in 10 Years.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Institutional-grade dairy husbandry with automated Artificial Insemination, 1:1 female calf replacement, and continuous quarterly milk cashflow.
            </p>

            {/* Animal Category Toggle Pills */}
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300 mt-2">
              <button
                onClick={() => setAnimalType("buff")}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  animalType === "buff"
                    ? "bg-white text-slate-950 shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                🐃 Murrah Buffalo (Recommended)
              </button>
              <button
                onClick={() => setAnimalType("cow")}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  animalType === "cow"
                    ? "bg-white text-slate-950 shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                🐄 Gir A2 Cow
              </button>
              <button
                onClick={() => setAnimalType("goat")}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  animalType === "goat"
                    ? "bg-white text-slate-950 shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                🐐 Beetal Dairy Goat
              </button>
            </div>
          </div>

          {/* Interactive Feature Card & Visual */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Visual Preview */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{current.name} Commercial Package</h3>
                    <p className="text-xs text-slate-500">{current.tagline}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    Fixed Price: {current.investment}
                  </span>
                </div>

                <div className="relative w-full h-72 rounded-2xl overflow-hidden my-6 bg-slate-100 group">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-mono">
                    ID: HIRA_1_MUR_BUFF_OCT26_A
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-slate-900 px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-md">
                    {current.dailyLiters} @ {current.milkPrice}
                  </div>
                </div>

                {/* 3 Metric Pills */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Starting Herd</span>
                    <div className="text-sm font-black text-slate-900 mt-0.5">{current.startingHerd}</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">10-Yr Living Herd</span>
                    <div className="text-sm font-black text-emerald-600 mt-0.5">{current.year10Herd}</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Calving Interval</span>
                    <div className="text-sm font-black text-slate-900 mt-0.5">{current.calvingInterval}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Verified by ICAR-CIRB National Dairy Standards</span>
                <span className="font-semibold text-emerald-700">100% Pashu Bima Protected</span>
              </div>
            </div>

            {/* Financial Unit Economics Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  <span>Institutional Capital Profile</span>
                </div>

                <div className="mt-4">
                  <div className="text-xs text-slate-400">Total 10-Year Turnaround Capital</div>
                  <div className="text-4xl font-black text-emerald-400 mt-1">{current.turnover}</div>
                  <div className="text-xs text-slate-300 mt-1 font-mono">{current.roi}</div>
                </div>

                <div className="mt-6 space-y-3.5 text-xs">
                  <div className="flex justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Initial Outlay:</span>
                    <span className="font-bold text-white">{current.investment}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Year 10 Annual Milk Sales:</span>
                    <span className="font-bold text-amber-300">{current.year10GrossMilk} / yr</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Year 10 Asset Value (Tier 1–14):</span>
                    <span className="font-bold text-emerald-300">{current.year10AssetValue}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Quarterly Milk Dividend Payout:</span>
                    <span className="font-bold text-white">Direct NEFT Bank Credit</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Biological Mortality Risk:</span>
                    <span className="font-bold text-emerald-400">0% (1:1 Farm Replacement)</span>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300">
                  <span className="font-bold text-white">Zero Overhead Promise:</span> Fodder, silage, veterinary care, IoT collar data, and labor costs are managed completely by Hira Farm.
                </div>
              </div>

              <div className="mt-8 space-y-2">
                <button className="w-full py-3.5 rounded-xl font-bold text-sm bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all flex items-center justify-center gap-2">
                  <span>Allocate {current.name} Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-[11px] text-center text-slate-400">
                  Instant ear-tag assignment within 24 hours of payment.
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Comparison Matrix: FD vs Mutual Fund vs Hira Farm */}
      <section id="matrix" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900">
              Why Dairy Compounding Beats Traditional Paper Assets
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Bovine livestock combines consumable biological cash flow (daily milk) with capital multiplication (annual calvings).
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider">
                  <th className="p-4">Asset Class (₹2,00,000 Initial)</th>
                  <th className="p-4">10-Year Final Capital</th>
                  <th className="p-4">Annual Cash Payout</th>
                  <th className="p-4">Inflation Hedge</th>
                  <th className="p-4">Underlying Security</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-semibold text-slate-900">Bank Fixed Deposit (7.1% Compounded)</td>
                  <td className="p-4 font-mono text-slate-700">₹3,97,000</td>
                  <td className="p-4 text-slate-500">₹0 (locked till maturity)</td>
                  <td className="p-4 text-rose-500 font-semibold">Negative (Below inflation)</td>
                  <td className="p-4 text-slate-600">DICGC Insured up to ₹5L</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-semibold text-slate-900">Nifty 50 Mutual Fund (12.5% CAGR)</td>
                  <td className="p-4 font-mono text-slate-700">₹6,49,000</td>
                  <td className="p-4 text-slate-500">Variable / Market Dependent</td>
                  <td className="p-4 text-amber-600 font-semibold">Moderate</td>
                  <td className="p-4 text-slate-600">Equity Market Risk</td>
                </tr>
                <tr className="bg-emerald-50/70 border-2 border-emerald-500">
                  <td className="p-4 font-bold text-emerald-950 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Hira Farm Murrah Package (Compounded)
                  </td>
                  <td className="p-4 font-black font-mono text-emerald-700 text-base">
                    ₹61,35,000 (Turnover)
                  </td>
                  <td className="p-4 font-bold text-emerald-900">
                    ₹1,05,120 to ₹12,61,440 / yr
                  </td>
                  <td className="p-4 text-emerald-700 font-bold">100% (Food & Milk Price Hedge)</td>
                  <td className="p-4 text-emerald-800 font-medium">Insured Livestock + RFID Herd</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-100 py-10 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-48 bg-[#FAF9F6] border border-slate-200 rounded-xl p-1.5 shadow-sm flex items-center justify-center">
              <Image src="/logo.png" alt="Hira Farm" width={200} height={60} className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Hira Farm Management Private Limited</div>
              <div className="text-[11px] text-slate-500">Autonomous Dairy Asset Infrastructure • All rights reserved.</div>
            </div>
          </div>
          <div className="text-slate-500">
            © {new Date().getFullYear()} Hira Farm Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
