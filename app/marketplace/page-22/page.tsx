"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Sparkles,
  Calendar,
  Layers,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Award,
  Milk,
  ShieldCheck,
  CheckCircle2,
  Users,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function PedigreeJourneyLandingPage() {
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  const milestones = [
    {
      month: 0,
      year: "Month 0 (Oct 2026)",
      title: "Seed Arrival: The Matriarch & First Calf",
      headline: "The Foundation of Your Biological Estate",
      description:
        "1 Adult Milking Murrah Buffalo (40m old, ~12L/day) arrives alongside her starter female calf (2m old). Fitted with IoT rumination neck tags and admitted into the dedicated Hira Farm climate stall.",
      livingHerd: 2,
      milkingAdults: 1,
      calves: 1,
      assetValue: "₹2,10,000",
      yearlyMilkSales: "₹1,05,120",
      image: "/Murrah_buffalo.JPG",
      badge: "Foundation Day",
    },
    {
      month: 15,
      year: "Month 15 (Jan 2028)",
      title: "First Generation F1 Calving",
      headline: "The First Biological Multiplication",
      description:
        "The Matriarch (HF-A) delivers her next female calf (HF-A.1 'Nandini'). Guaranteed 1:1 replacement protocol ensures female lineage. Your living herd now stands at 3 head.",
      livingHerd: 3,
      milkingAdults: 1,
      calves: 2,
      assetValue: "₹2,50,000",
      yearlyMilkSales: "₹1,05,120",
      image: "/Kid_Buffalo.jpg",
      badge: "F1 Birth",
    },
    {
      month: 42,
      year: "Month 42 (Apr 2030)",
      title: "Starter Calf Matures into Milking Mother",
      headline: "Doubling Daily Milk Cashflow to 24 Liters / Day",
      description:
        "The initial starter calf (HF-B 'Kalyani') reaches 44 months of age and delivers her first daughter (HF-B.1). She officially enters active lactation, doubling your annual milk payout to ₹2.10 Lacs/year.",
      livingHerd: 6,
      milkingAdults: 2,
      calves: 4,
      assetValue: "₹4,10,000",
      yearlyMilkSales: "₹2,10,240",
      image: "/side_buffalo_kid.webp",
      badge: "Milking Double",
    },
    {
      month: 60,
      year: "Month 60 (Oct 2031)",
      title: "Multigenerational Herd Acceleration (Year 5)",
      headline: "3 Active Milking Lines & 6 Growing Heifers",
      description:
        "F1 heifers begin calving. Your herd now consists of 9 living animals. Milk production generates ₹3.15 Lacs in annual cashflow, while herd equity reaches ₹5.70 Lacs.",
      livingHerd: 9,
      milkingAdults: 3,
      calves: 6,
      assetValue: "₹5,70,000",
      yearlyMilkSales: "₹3,15,360",
      image: "/Murrah_buffalo.JPG",
      badge: "Year 5 Milestone",
    },
    {
      month: 120,
      year: "Month 120 (Oct 2036)",
      title: "The Sovereign Herd of 41 Animals (Year 10)",
      headline: "12 Milking Mothers • ₹12.61 Lacs Annual Milk Dividend",
      description:
        "Your single ₹2,00,000 seed package has expanded into an agrarian empire. 12 active milking buffaloes generate 144 Liters of milk every single day. Herd asset equity is ₹21.40 Lacs, bringing total 10-year wealth to ₹61.35 Lacs.",
      livingHerd: 41,
      milkingAdults: 12,
      calves: 29,
      assetValue: "₹21,40,000",
      yearlyMilkSales: "₹12,61,440",
      image: "/Murrah_buffalo.JPG",
      badge: "Year 10 Climax",
    },
  ];

  const current = milestones[selectedMilestone];

  return (
    <div className="min-h-screen bg-[#07130f] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <MarketplaceSwitcher currentMarketplaceId="page-22" />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#07130f]/90 backdrop-blur-md border-b border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-14 sm:h-16 w-52 sm:w-64 bg-[#FAF9F6] border border-emerald-500/40 rounded-2xl p-1.5 flex items-center justify-center shadow-lg overflow-hidden">
              <Image src="/logo.png" alt="Hira Farm Management Private Limited" width={280} height={210} className="w-full h-full object-contain" priority />
            </div>
            <div className="hidden lg:block">
              <div className="text-xs font-bold text-emerald-400">PEDIGREE JOURNEY</div>
              <div className="text-[10px] text-emerald-300/70">10-Year Expansion Roadmap</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-xl font-bold text-xs bg-emerald-400 text-slate-950 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-1.5">
              <span>Reserve Seed Lot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Narrative Intro */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>CHRONOLOGICAL BIOLOGICAL REPRODUCTION</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Watch Your Herd Compound Month by Month
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-3">
          Click along the 10-year timeline below to experience how a single mother buffalo and calf expand across 120 months into 41 living animals.
        </p>

        {/* Horizontal Stepper */}
        <div className="mt-10 overflow-x-auto pb-4">
          <div className="flex items-center justify-between min-w-[700px] border border-emerald-800/60 rounded-2xl p-2 bg-[#0a1e18]">
            {milestones.map((item, idx) => {
              const isActive = selectedMilestone === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedMilestone(idx)}
                  className={`flex-1 py-3 px-3 rounded-xl text-center transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black shadow-lg"
                      : "text-slate-400 hover:text-white hover:bg-emerald-950/50"
                  }`}
                >
                  <div className="text-[10px] uppercase font-mono tracking-wider opacity-80">
                    {item.year.split(" ")[0]}
                  </div>
                  <div className="text-xs sm:text-sm font-bold mt-0.5 whitespace-nowrap">
                    {item.badge}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Selected Milestone Showcase Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-[#0b211a] border border-emerald-700/50 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-emerald-600/40 shadow-xl">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-slate-950/90 text-emerald-400 text-xs font-mono px-3 py-1.5 rounded-lg border border-emerald-500/30">
                  {current.year}
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 text-slate-900 p-3 rounded-xl shadow-lg">
                  <div className="text-xs font-bold">{current.title}</div>
                  <div className="text-[11px] text-emerald-700 font-semibold">{current.headline}</div>
                </div>
              </div>
            </div>

            {/* Description & Metrics Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase font-mono text-emerald-400 font-bold tracking-wider">
                  Milestone Focus • Month {current.month}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                  {current.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Dynamic 4-Stat Grid for this milestone */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-800">
                  <span className="text-[10px] text-slate-400 uppercase font-mono">Living Herd</span>
                  <div className="text-2xl font-black text-white mt-1">{current.livingHerd} Head</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">{current.milkingAdults} Milking + {current.calves} Young</div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-800">
                  <span className="text-[10px] text-slate-400 uppercase font-mono">Herd Valuation</span>
                  <div className="text-2xl font-black text-emerald-300 mt-1">{current.assetValue}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Asset Equity</div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-800">
                  <span className="text-[10px] text-slate-400 uppercase font-mono">Daily Production</span>
                  <div className="text-2xl font-black text-amber-300 mt-1">{current.milkingAdults * 12} L / Day</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">@ ₹80 / Liter</div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-800">
                  <span className="text-[10px] text-slate-400 uppercase font-mono">Yearly Milk 30%</span>
                  <div className="text-2xl font-black text-white mt-1">{current.yearlyMilkSales}</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">Owner Cashflow</div>
                </div>
              </div>

              {/* Navigation Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setSelectedMilestone((prev) => (prev < milestones.length - 1 ? prev + 1 : 0))}
                  className="px-6 py-3 rounded-xl font-bold text-xs bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all flex items-center gap-2"
                >
                  <span>Advance to Next Calving Milestone</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>All milestones backed by ICAR-CIRB guidelines</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-900/50 bg-[#040e0b] py-8 text-xs text-slate-500 text-center">
        <div className="max-w-7xl mx-auto px-4">
          Hira Farm Pedigree Lineage Engine • Fully Tokenized Herd Progression
        </div>
      </footer>
    </div>
  );
}
