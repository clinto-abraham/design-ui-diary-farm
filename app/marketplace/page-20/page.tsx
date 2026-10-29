"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Bookmark,
  Share2,
  Printer,
  ChevronRight,
  Shield,
  Award,
  Check,
  TrendingUp,
  Download,
  Calendar,
  Layers,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function EditorialJournalLandingPage() {
  const [fontSize, setFontSize] = useState<"normal" | "large">("normal");

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#1c1917] font-serif selection:bg-[#d97706]/20">
      <MarketplaceSwitcher currentMarketplaceId="page-20" />

      {/* Broadsheet Top Wire */}
      <div className="border-b border-[#e7e5e4] bg-[#f5f4ef] text-center py-1.5 text-[11px] font-sans tracking-widest uppercase text-stone-600">
        Special Investment Report • Volume IV • National Murrah Breeding Commission Standard
      </div>

      {/* Editorial Masthead */}
      <header className="border-b-2 border-stone-900 max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div className="relative h-20 sm:h-24 w-64 sm:w-72 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Hira Farm Management Private Limited"
                width={320}
                height={240}
                className="w-full h-full object-contain filter contrast-105"
                priority
              />
            </div>
            <div className="border-t sm:border-t-0 sm:border-l-2 border-stone-800 pt-3 sm:pt-0 sm:pl-5 text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-serif font-black tracking-tight uppercase text-stone-900">
                The Dairy Gazette & Markets
              </div>
              <div className="text-xs font-sans text-stone-600 uppercase tracking-wider mt-1">
                Official Financial Broadsheet of Hira Farm Management Pvt. Ltd. • Est. 2018
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 font-sans text-xs">
            <button
              onClick={() => setFontSize(fontSize === "normal" ? "large" : "normal")}
              className="px-2.5 py-1 border border-stone-300 rounded hover:bg-stone-200"
            >
              Text Size {fontSize === "large" ? "A+" : "A"}
            </button>
            <button
              onClick={() => window.print()}
              className="px-3 py-1 bg-stone-900 text-stone-100 rounded hover:bg-stone-800 flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" /> Print Report
            </button>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        
        {/* Article Headline & Meta */}
        <div className="max-w-4xl mx-auto text-center space-y-4 pb-8 border-b border-stone-300">
          <span className="font-sans text-xs font-bold text-amber-800 tracking-wider uppercase bg-amber-100/70 px-3 py-1 rounded">
            Macro Agrarian Asset Analysis
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-stone-950">
            The Murrah Compounding Standard: Turning One Seed Buffalo into a 41-Head Living Estate
          </h1>
          <p className="text-lg sm:text-xl text-stone-600 italic font-serif max-w-2xl mx-auto">
            How autonomous veterinary care, 1:1 female calf replacement, and 8.0% butterfat milk yield produce ₹61.35 Lakhs in wealth over a ten-year cycle.
          </p>
          <div className="font-sans text-xs text-stone-500 flex items-center justify-center gap-4 pt-2">
            <span>By Agrarian Research Desk</span>
            <span>•</span>
            <span>Audited against ICAR-CIRB Standards</span>
            <span>•</span>
            <span>October 2026 Batch Entry</span>
          </div>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          
          {/* Main Article Stream */}
          <div className={`lg:col-span-8 space-y-6 ${fontSize === "large" ? "text-lg" : "text-base"} leading-relaxed text-stone-800`}>
            
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900">
              For centuries in Haryana, the indigenous Murrah buffalo has been regarded as liquid gold—a biological machine capable of converting low-cost roughage and sorghum into nutrient-dense, high-butterfat milk. Yet until recently, urban investors had no institutional gateway to participate in the lucrative yields of this bovine asset class.
            </p>

            <p>
              Under the newly introduced <strong>Hira Farm Seed Package Protocol</strong>, an initial allocation of ₹2,00,000 unlocks a fully managed commercial livestock lot: one adult milking Murrah buffalo (yielding 12 liters per day), one two-month-old female starter calf, and a complete suite of IoT wearables and stall infrastructure.
            </p>

            {/* Editorial Feature Image */}
            <div className="my-8 border border-stone-300 p-2 bg-white rounded-lg shadow-sm">
              <div className="relative w-full h-80 rounded overflow-hidden">
                <Image
                  src="/Murrah_buffalo.JPG"
                  alt="Murrah Buffalo Herd"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="font-sans text-xs text-stone-500 pt-2 px-1 flex justify-between">
                <span>Fig 1.1: Purebred Murrah Dam with newborn female calf at Hira Farm Facility.</span>
                <span className="font-semibold text-stone-700">ICAR-CIRB Herd Registry</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold font-serif text-stone-950 pt-4 border-t border-stone-200">
              The 15-Month Calving Cadence & Replacement Protocol
            </h2>

            <p>
              Unlike equity securities that depend entirely on macroeconomic market sentiments, biological compounding is governed by biological gestation. A Murrah buffalo carries a pregnancy for 310 days (~10 months) and averages a 15-month calving interval.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-6 border-l-4 border-amber-700 pl-6 py-2 italic text-xl font-medium text-stone-900 bg-amber-50/50">
              “Every single newborn calf is tagged under strict 1:1 female replacement protocols. By year 10, one package compounds into 41 living animals with ₹12.61 Lakhs in annual milk sales.”
            </blockquote>

            <p>
              Under Hira Farm’s verified protocol, any male calf born is immediately exchanged one-for-one for a healthy, genetically profiled female calf from certified partner nurseries. As a result, 100% of the retained herd on the investor’s pedigree tree is female, directly accelerating milk production lines.
            </p>

            {/* Verified Pro-Forma Table */}
            <div className="my-8 font-sans">
              <h3 className="text-base font-bold uppercase tracking-wider text-stone-900 mb-2">
                Table 1: 10-Year Audited Capital & Production Schedule
              </h3>
              <div className="overflow-x-auto border border-stone-300 rounded-lg">
                <table className="w-full text-xs text-left">
                  <thead className="bg-stone-200 text-stone-800 font-bold">
                    <tr>
                      <th className="p-3">Period</th>
                      <th className="p-3">Milking Adults</th>
                      <th className="p-3">Total Living Herd</th>
                      <th className="p-3">Asset Value</th>
                      <th className="p-3">Milk Dividend (30%)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold">Year 1 (Month 12)</td>
                      <td className="p-3">1</td>
                      <td className="p-3">2 Animals</td>
                      <td className="p-3">₹2,10,000</td>
                      <td className="p-3 font-semibold text-amber-800">₹1,05,120</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Year 3 (Month 36)</td>
                      <td className="p-3">1</td>
                      <td className="p-3">4 Animals</td>
                      <td className="p-3">₹3,10,000</td>
                      <td className="p-3 font-semibold text-amber-800">₹1,05,120</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Year 5 (Month 60)</td>
                      <td className="p-3">3</td>
                      <td className="p-3">9 Animals</td>
                      <td className="p-3">₹5,70,000</td>
                      <td className="p-3 font-semibold text-amber-800">₹3,15,360</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Year 7 (Month 84)</td>
                      <td className="p-3">4</td>
                      <td className="p-3">12 Animals</td>
                      <td className="p-3">₹9,70,000</td>
                      <td className="p-3 font-semibold text-amber-800">₹4,20,480</td>
                    </tr>
                    <tr className="bg-amber-50/80 font-bold text-stone-950">
                      <td className="p-3">Year 10 (Month 120)</td>
                      <td className="p-3">12 Milking</td>
                      <td className="p-3">41 Head</td>
                      <td className="p-3">₹21,40,000</td>
                      <td className="p-3 text-emerald-800 text-sm">₹12,61,440 / yr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              In aggregate, cumulative 10-year milk sales net ₹39.95 Lakhs in dividends to the asset owner, while the remaining herd equity is valued at ₹21.40 Lakhs across 14 biological age tiers. The combined turnover of ₹61.35 Lakhs represents a 30.6x multiple over the original capital outlay.
            </p>

          </div>

          {/* Right Column: Investor Dossier & Subscription Card */}
          <div className="lg:col-span-4 space-y-6 font-sans">
            
            {/* Executive Summary Card */}
            <div className="bg-white border-2 border-stone-900 rounded-2xl p-6 shadow-md space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Offering Memorandum
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  OPEN FOR SUBSCRIPTION
                </span>
              </div>

              <h3 className="text-xl font-bold font-serif text-stone-900">
                Seed Package #1: Murrah Commercial Lot
              </h3>

              <div className="text-3xl font-black text-stone-950 font-sans">
                ₹2,00,000
                <span className="text-xs font-normal text-stone-500 block">Single payment, zero ongoing dues</span>
              </div>

              <div className="space-y-2.5 text-xs text-stone-700 pt-2 border-t border-stone-200">
                <div className="flex justify-between">
                  <span className="text-stone-500">Species & Breed:</span>
                  <span className="font-semibold text-stone-900">Bubalus bubalis (Murrah)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Daily Milk Production:</span>
                  <span className="font-semibold text-stone-900">12 Liters @ 8.0% Fat</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Contract Tenure:</span>
                  <span className="font-semibold text-stone-900">10 Years (120 Months)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Insurance Policy:</span>
                  <span className="font-semibold text-emerald-700">100% Pashu Bima Protected</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Payout Mechanism:</span>
                  <span className="font-semibold text-stone-900">Quarterly NEFT Bank Credit</span>
                </div>
              </div>

              <button className="w-full py-3.5 bg-stone-950 hover:bg-stone-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all">
                Download Investor Offering (PDF)
              </button>
            </div>

            {/* Author / Assurance Note */}
            <div className="bg-[#f5f4ef] border border-stone-300 rounded-2xl p-5 text-xs space-y-2">
              <div className="font-bold text-stone-900 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-700" />
                ICAR-CIRB Standards Assurance
              </div>
              <p className="text-stone-600 leading-relaxed">
                All breeding cycles, sire semen straws, and nutritional dry matter calculations are monitored by certified veterinary officers in accordance with the Central Institute for Research on Buffaloes (CIRB).
              </p>
            </div>

          </div>

        </div>

      </main>

      {/* Broadsheet Footer */}
      <footer className="border-t-2 border-stone-900 bg-[#f5f4ef] py-10 mt-16 font-sans text-xs text-stone-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-40 flex-shrink-0">
              <Image src="/logo.png" alt="Hira Farm" fill className="object-contain filter contrast-105" />
            </div>
            <span className="font-serif font-bold text-stone-900">The Hira Farm Dairy Gazette</span>
          </div>
          <div className="text-stone-500">
            Official Agricultural Whitepaper & Circular. Registered Under Indian Companies Act.
          </div>
        </div>
      </footer>
    </div>
  );
}
