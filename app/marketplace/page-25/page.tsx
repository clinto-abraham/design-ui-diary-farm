"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  TrendingUp,
  Shield,
  Layers,
  ArrowRight,
  FileSpreadsheet,
  CheckCircle2,
  BarChart4,
  ExternalLink,
  ChevronDown,
  Building2,
  DollarSign,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function InstitutionalDeckLandingPage() {
  const [activeTab, setActiveTab] = useState<"comparison" | "waterfall" | "governance">("comparison");

  return (
    <div className="min-h-screen bg-[#0a1120] text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      <MarketplaceSwitcher currentMarketplaceId="page-25" />

      {/* Corporate Ribbon */}
      <div className="bg-[#0f1d36] border-b border-blue-900/40 text-xs py-2 px-4 text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-semibold text-slate-200">INSTITUTIONAL INVESTOR MEMORANDUM</span>
            <span className="hidden sm:inline">• SERIES 2026 COMMERCIAL LIVESTOCK LOTS</span>
          </div>
          <div className="text-[11px] text-blue-300">Audited under ICAR-CIRB Norms</div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#0a1120]/90 backdrop-blur-md border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-14 sm:h-16 w-52 sm:w-64 bg-[#FAF9F6] border border-blue-500/40 rounded-2xl p-1.5 flex items-center justify-center shadow-lg overflow-hidden">
              <Image src="/logo.png" alt="Hira Farm Management Private Limited" width={280} height={210} className="w-full h-full object-contain" priority />
            </div>
            <div className="hidden lg:block">
              <span className="text-[10px] bg-blue-950 text-blue-300 border border-blue-800 px-2 py-0.5 rounded font-mono">
                INSTITUTIONAL DECK
              </span>
              <div className="text-[11px] text-slate-400 mt-0.5">Commercial Dairy Asset Management</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-500 hover:bg-blue-400 text-white transition-all shadow-md">
              Download Offering Circular
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Title */}
        <div className="max-w-3xl space-y-4 mb-10">
          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
            Commercial Dairy Capital Allocation
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Deploy ₹2,00,000 into a Compounding Herd of <span className="text-blue-400">41 Animals</span> & ₹61.35L Turnover.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            A high-efficiency dairy livestock lot comprising 1 milking Murrah buffalo, 1 starter calf, and complete smart shed infrastructure. Zero managerial burden with quarterly dividend payouts.
          </p>
        </div>

        {/* 3 Executive Tabs */}
        <div className="flex border-b border-blue-900/60 mb-8 space-x-6 text-sm font-semibold">
          <button
            onClick={() => setActiveTab("comparison")}
            className={`pb-3 border-b-2 transition-all ${
              activeTab === "comparison"
                ? "border-blue-400 text-blue-400"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            Asset Benchmark Matrix
          </button>
          <button
            onClick={() => setActiveTab("waterfall")}
            className={`pb-3 border-b-2 transition-all ${
              activeTab === "waterfall"
                ? "border-blue-400 text-blue-400"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            10-Year Cashflow Waterfall
          </button>
          <button
            onClick={() => setActiveTab("governance")}
            className={`pb-3 border-b-2 transition-all ${
              activeTab === "governance"
                ? "border-blue-400 text-blue-400"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            Regulatory & Pashu Bima Shield
          </button>
        </div>

        {/* Tab 1: Asset Benchmark Matrix */}
        {activeTab === "comparison" && (
          <div className="bg-[#0e192f] border border-blue-900/60 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2">Macro Asset Comparison: ₹2,00,000 Capital Allocation</h3>
            <p className="text-xs text-slate-400 mb-6">
              Comparing 10-year holding performance across traditional paper assets versus biological dairy compounding.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-blue-800 text-slate-400 uppercase font-mono">
                    <th className="p-3">Asset Category</th>
                    <th className="p-3">Annualized IRR</th>
                    <th className="p-3">Year 10 Capital Value</th>
                    <th className="p-3">Cashflow Distribution</th>
                    <th className="p-3">Tangible Collateral</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-900/60 text-slate-300">
                  <tr>
                    <td className="p-3 font-bold text-white">Commercial Real Estate (Fractional)</td>
                    <td className="p-3 text-slate-400">8.5%</td>
                    <td className="p-3 font-mono">₹4,52,000</td>
                    <td className="p-3">Quarterly Rental</td>
                    <td className="p-3">Commercial Property Share</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-white">Corporate Bonds / Debt Funds</td>
                    <td className="p-3 text-slate-400">9.0%</td>
                    <td className="p-3 font-mono">₹4,73,000</td>
                    <td className="p-3">Semi-Annual Coupon</td>
                    <td className="p-3">Unsecured Debentures</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-white">Equities (Nifty 50 Index Fund)</td>
                    <td className="p-3 text-slate-400">12.0%</td>
                    <td className="p-3 font-mono">₹6,21,000</td>
                    <td className="p-3">Nil (Capital Growth)</td>
                    <td className="p-3">Market Equity Shares</td>
                  </tr>
                  <tr className="bg-blue-950/70 border-2 border-blue-500 font-bold text-white">
                    <td className="p-3 text-blue-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      Hira Farm Murrah Package
                    </td>
                    <td className="p-3 text-emerald-400 font-black text-sm">30.6% IRR</td>
                    <td className="p-3 font-mono text-emerald-300 text-sm">₹61,35,000 (Turnover)</td>
                    <td className="p-3 text-amber-300">Quarterly (30% Milk Sales)</td>
                    <td className="p-3 text-blue-200">Insured Murrah Herd (100% Pashu Bima)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Cashflow Waterfall */}
        {activeTab === "waterfall" && (
          <div className="bg-[#0e192f] border border-blue-900/60 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">10-Year Production & Value Waterfall</h3>
            <p className="text-xs text-slate-400">
              Breakdown of how biological calvings expand daily milk ejection from 12L to 144L per day.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-800">
                <div className="text-xs text-slate-400">Phase I (Years 1–3)</div>
                <div className="text-xl font-bold text-white mt-1">Foundational Milk</div>
                <p className="text-xs text-slate-400 mt-2">1 Milking Dam + Heifer rearing. Consistent ₹1,05,120 annual milk dividend.</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-800">
                <div className="text-xs text-slate-400">Phase II (Years 4–7)</div>
                <div className="text-xl font-bold text-white mt-1">Lactation Multiplication</div>
                <p className="text-xs text-slate-400 mt-2">F1 generation calves mature. Milking herd expands to 4 mothers (48L/day).</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-800">
                <div className="text-xs text-slate-400">Phase III (Years 8–10)</div>
                <div className="text-xl font-bold text-emerald-400 mt-1">Sovereign Herd (12 Milking)</div>
                <p className="text-xs text-slate-400 mt-2">144L/day peak output generating ₹12.61 Lacs in Year 10 cashflow.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Governance */}
        {activeTab === "governance" && (
          <div className="bg-[#0e192f] border border-blue-900/60 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">Institutional Governance & Regulatory Framework</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-800">
                <div className="font-bold text-white text-sm">Pashu Bima Government Policy</div>
                <p className="text-xs text-slate-400 mt-1">Underwritten by national public sector general insurance companies with permanent RFID tag chips.</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-800">
                <div className="font-bold text-white text-sm">Escrow Allocation Protocol</div>
                <p className="text-xs text-slate-400 mt-1">All initial capital is deployed directly into physical livestock acquisition, veterinary admission, and climate shed stalls.</p>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-blue-900/40 bg-[#070d18] py-8 text-xs text-slate-500 text-center">
        Hira Institutional Bovine Platform • Mumbai • Gurugram • Rohtak
      </footer>
    </div>
  );
}
