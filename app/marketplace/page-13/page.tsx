"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Milk,
  Scale,
  Award,
  Layers,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Tag,
  TrendingUp,
  DollarSign,
  Heart,
  Zap,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";
import { FamilyTreeNav } from "@/components/FamilyTreeNav";

interface TimelineAnimal {
  tagId: string;
  name: string;
  yearIntroduced: string;
  yearNum: number;
  age: string;
  category: "Starter Mother" | "Starter Calf" | "Gen-1 Progeny" | "Gen-2 Grandcalf" | "Gen-3 Progeny";
  status: "Milking" | "Pregnant" | "Growing Heifer" | "Suckling Calf";
  dailyYield: string;
  fatPercent: string;
  avatar: string;
  damTag: string;
  sireTag: string;
  assetValueINR: string;
  lineage: "Mother Line (Dam A)" | "Calf Line (Daughter B)";
}

interface YearMilestone {
  year: number;
  calendarYear: string;
  herdCount: number;
  milkingCount: number;
  annualMilkLiters: number;
  estimatedAssetValINR: string;
  animals: TimelineAnimal[];
}

const TIMELINE_DATA: YearMilestone[] = [
  {
    year: 1,
    calendarYear: "2026 - 2027",
    herdCount: 2,
    milkingCount: 1,
    annualMilkLiters: 5400,
    estimatedAssetValINR: "₹2,00,000",
    animals: [
      {
        tagId: "HIRA_A1_OCT26_BUFF_MUR_35",
        name: "Murrah Queen Ganga",
        yearIntroduced: "Year 1",
        yearNum: 1,
        age: "48 Months (4.0 Yrs)",
        category: "Starter Mother",
        status: "Milking",
        dailyYield: "17.5 L/day",
        fatPercent: "8.1%",
        avatar: "/Murrah_buffalo.JPG",
        damTag: "Hisar Elite Line #4",
        sireTag: "SAG Rohtak Bull #10",
        assetValueINR: "₹1,45,000",
        lineage: "Mother Line (Dam A)",
      },
      {
        tagId: "HIRA_B1_OCT26_CALF_MUR_35",
        name: "Calf Jamuna",
        yearIntroduced: "Year 1",
        yearNum: 1,
        age: "65 Days (2.2 Mo)",
        category: "Starter Calf",
        status: "Suckling Calf",
        dailyYield: "NA (Calf)",
        fatPercent: "NA",
        avatar: "/Kid_Buffalo.jpg",
        damTag: "HIRA_A1_OCT26_BUFF_MUR_35",
        sireTag: "SAG Rohtak Bull #10",
        assetValueINR: "₹55,000",
        lineage: "Calf Line (Daughter B)",
      },
    ],
  },
  {
    year: 2,
    calendarYear: "2027 - 2028",
    herdCount: 3,
    milkingCount: 1,
    annualMilkLiters: 5600,
    estimatedAssetValINR: "₹2,75,000",
    animals: [
      {
        tagId: "HIRA_A1_OCT26_BUFF_MUR_35",
        name: "Murrah Queen Ganga",
        yearIntroduced: "Year 1",
        yearNum: 1,
        age: "60 Months (5.0 Yrs)",
        category: "Starter Mother",
        status: "Milking",
        dailyYield: "18.0 L/day",
        fatPercent: "8.2%",
        avatar: "/Murrah_buffalo.JPG",
        damTag: "Hisar Elite Line #4",
        sireTag: "SAG Rohtak Bull #10",
        assetValueINR: "₹1,55,000",
        lineage: "Mother Line (Dam A)",
      },
      {
        tagId: "HIRA_B1_OCT26_CALF_MUR_35",
        name: "Calf Jamuna (Yearling)",
        yearIntroduced: "Year 1",
        yearNum: 1,
        age: "14 Months (1.2 Yrs)",
        category: "Starter Calf",
        status: "Growing Heifer",
        dailyYield: "NA (Heifer)",
        fatPercent: "NA",
        avatar: "/Kid_Buffalo.jpg",
        damTag: "HIRA_A1_OCT26_BUFF_MUR_35",
        sireTag: "SAG Rohtak Bull #10",
        assetValueINR: "₹75,000",
        lineage: "Calf Line (Daughter B)",
      },
      {
        tagId: "HIRA_C1_OCT27_CALF_MUR_12",
        name: "Calf Saraswati",
        yearIntroduced: "Year 2",
        yearNum: 2,
        age: "1 Month (30 Days)",
        category: "Gen-1 Progeny",
        status: "Suckling Calf",
        dailyYield: "NA (Calf)",
        fatPercent: "NA",
        avatar: "/side_buffalo_kid.webp",
        damTag: "HIRA_A1_OCT26_BUFF_MUR_35",
        sireTag: "SAG_AI_INDRA_95XX",
        assetValueINR: "₹45,000",
        lineage: "Mother Line (Dam A)",
      },
    ],
  },
  {
    year: 3,
    calendarYear: "2028 - 2029",
    herdCount: 5,
    milkingCount: 2,
    annualMilkLiters: 10400,
    estimatedAssetValINR: "₹4,60,000",
    animals: [
      {
        tagId: "HIRA_A1_OCT26_BUFF_MUR_35",
        name: "Murrah Queen Ganga",
        yearIntroduced: "Year 1",
        yearNum: 1,
        age: "72 Months (6.0 Yrs)",
        category: "Starter Mother",
        status: "Milking",
        dailyYield: "18.5 L/day",
        fatPercent: "8.3%",
        avatar: "/Murrah_buffalo.JPG",
        damTag: "Hisar Elite Line #4",
        sireTag: "SAG Rohtak Bull #10",
        assetValueINR: "₹1,60,000",
        lineage: "Mother Line (Dam A)",
      },
      {
        tagId: "HIRA_B1_OCT26_CALF_MUR_35",
        name: "Jamuna (1st Lactation)",
        yearIntroduced: "Year 1",
        yearNum: 1,
        age: "26 Months (2.2 Yrs)",
        category: "Starter Calf",
        status: "Milking",
        dailyYield: "16.0 L/day",
        fatPercent: "7.9%",
        avatar: "/Murrah_buffalo.JPG",
        damTag: "HIRA_A1_OCT26_BUFF_MUR_35",
        sireTag: "SAG Rohtak Bull #10",
        assetValueINR: "₹1,40,000",
        lineage: "Calf Line (Daughter B)",
      },
      {
        tagId: "HIRA_C1_OCT27_CALF_MUR_12",
        name: "Heifer Saraswati",
        yearIntroduced: "Year 2",
        yearNum: 2,
        age: "13 Months (1.1 Yrs)",
        category: "Gen-1 Progeny",
        status: "Growing Heifer",
        dailyYield: "NA",
        fatPercent: "NA",
        avatar: "/side_buffalo_kid.webp",
        damTag: "HIRA_A1_OCT26_BUFF_MUR_35",
        sireTag: "SAG_AI_INDRA_95XX",
        assetValueINR: "₹70,000",
        lineage: "Mother Line (Dam A)",
      },
      {
        tagId: "HIRA_D1_OCT28_CALF_MUR_18",
        name: "Calf Kaveri",
        yearIntroduced: "Year 3",
        yearNum: 3,
        age: "2 Months (60 Days)",
        category: "Gen-1 Progeny",
        status: "Suckling Calf",
        dailyYield: "NA",
        fatPercent: "NA",
        avatar: "/Kid_Buffalo.jpg",
        damTag: "HIRA_A1_OCT26_BUFF_MUR_35",
        sireTag: "SAG_AI_INDRA_95XX",
        assetValueINR: "₹45,000",
        lineage: "Mother Line (Dam A)",
      },
      {
        tagId: "HIRA_E1_DEC28_GCALF_MUR_01",
        name: "Calf Narmada (Gen-2)",
        yearIntroduced: "Year 3",
        yearNum: 3,
        age: "1 Month (30 Days)",
        category: "Gen-2 Grandcalf",
        status: "Suckling Calf",
        dailyYield: "NA",
        fatPercent: "NA",
        avatar: "/Kid_Buffalo.jpg",
        damTag: "HIRA_B1_OCT26_CALF_MUR_35",
        sireTag: "SAG_AI_VIKRAM_95XX",
        assetValueINR: "₹45,000",
        lineage: "Calf Line (Daughter B)",
      },
    ],
  },
  {
    year: 5,
    calendarYear: "2030 - 2031",
    herdCount: 10,
    milkingCount: 4,
    annualMilkLiters: 21800,
    estimatedAssetValINR: "₹9,80,000",
    animals: [
      {
        tagId: "HIRA_A1_OCT26_BUFF_MUR_35",
        name: "Murrah Queen Ganga",
        yearIntroduced: "Year 1",
        yearNum: 1,
        age: "96 Months (8.0 Yrs)",
        category: "Starter Mother",
        status: "Milking",
        dailyYield: "17.0 L/day",
        fatPercent: "8.3%",
        avatar: "/Murrah_buffalo.JPG",
        damTag: "Hisar Line",
        sireTag: "SAG Rohtak",
        assetValueINR: "₹1,50,000",
        lineage: "Mother Line (Dam A)",
      },
      {
        tagId: "HIRA_B1_OCT26_CALF_MUR_35",
        name: "Jamuna (3rd Lactation)",
        yearIntroduced: "Year 1",
        yearNum: 1,
        age: "50 Months (4.2 Yrs)",
        category: "Starter Calf",
        status: "Milking",
        dailyYield: "19.0 L/day",
        fatPercent: "8.2%",
        avatar: "/Murrah_buffalo.JPG",
        damTag: "HIRA_A1",
        sireTag: "SAG Rohtak",
        assetValueINR: "₹1,65,000",
        lineage: "Calf Line (Daughter B)",
      },
      {
        tagId: "HIRA_C1_OCT27_CALF_MUR_12",
        name: "Saraswati (2nd Lactation)",
        yearIntroduced: "Year 2",
        yearNum: 2,
        age: "37 Months (3.1 Yrs)",
        category: "Gen-1 Progeny",
        status: "Milking",
        dailyYield: "17.5 L/day",
        fatPercent: "8.0%",
        avatar: "/Murrah_buffalo.JPG",
        damTag: "HIRA_A1",
        sireTag: "SAG_INDRA",
        assetValueINR: "₹1,55,000",
        lineage: "Mother Line (Dam A)",
      },
      {
        tagId: "HIRA_E1_DEC28_GCALF_MUR_01",
        name: "Narmada (1st Lactation)",
        yearIntroduced: "Year 3",
        yearNum: 3,
        age: "25 Months (2.1 Yrs)",
        category: "Gen-2 Grandcalf",
        status: "Milking",
        dailyYield: "16.5 L/day",
        fatPercent: "8.1%",
        avatar: "/Murrah_buffalo.JPG",
        damTag: "HIRA_B1",
        sireTag: "SAG_VIKRAM",
        assetValueINR: "₹1,45,000",
        lineage: "Calf Line (Daughter B)",
      },
    ],
  },
  {
    year: 10,
    calendarYear: "2035 - 2036",
    herdCount: 41,
    milkingCount: 18,
    annualMilkLiters: 98000,
    estimatedAssetValINR: "₹38,50,000",
    animals: [
      {
        tagId: "HIRA_B1_OCT26_CALF_MUR_35",
        name: "Matriarch Jamuna (Foundation)",
        yearIntroduced: "Year 1",
        yearNum: 1,
        age: "110 Months (9.2 Yrs)",
        category: "Starter Calf",
        status: "Milking",
        dailyYield: "17.5 L/day",
        fatPercent: "8.1%",
        avatar: "/Murrah_buffalo.JPG",
        damTag: "HIRA_A1",
        sireTag: "SAG Rohtak",
        assetValueINR: "₹1,40,000",
        lineage: "Calf Line (Daughter B)",
      },
      {
        tagId: "HIRA_GEN4_35_ELITE_01",
        name: "Gen-4 Granddaughter Supreme",
        yearIntroduced: "Year 8",
        yearNum: 8,
        age: "24 Months (2.0 Yrs)",
        category: "Gen-3 Progeny",
        status: "Milking",
        dailyYield: "21.0 L/day",
        fatPercent: "8.5%",
        avatar: "/Murrah_buffalo.JPG",
        damTag: "HIRA_E1_DEC28",
        sireTag: "NDDB Genomic",
        assetValueINR: "₹1,85,000",
        lineage: "Calf Line (Daughter B)",
      },
      {
        tagId: "HIRA_GEN5_35_CALF_22",
        name: "Gen-5 Female Heifer Calf",
        yearIntroduced: "Year 10",
        yearNum: 10,
        age: "45 Days (1.5 Mo)",
        category: "Gen-3 Progeny",
        status: "Suckling Calf",
        dailyYield: "NA",
        fatPercent: "NA",
        avatar: "/Kid_Buffalo.jpg",
        damTag: "HIRA_GEN4_35",
        sireTag: "SAG_AI_INDRA_95XX",
        assetValueINR: "₹50,000",
        lineage: "Mother Line (Dam A)",
      },
    ],
  },
];

export default function MarketplacePage13() {
  const [activeYearIndex, setActiveYearIndex] = useState<number>(2); // Default to Year 3
  const [filterLineage, setFilterLineage] = useState<string>("All");

  const currentMilestone = TIMELINE_DATA[activeYearIndex];

  const filteredAnimals =
    filterLineage === "All"
      ? currentMilestone.animals
      : currentMilestone.animals.filter((a) => a.lineage === filterLineage);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <FamilyTreeNav currentId="page-13" />

      {/* Header */}
      <section className="bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
                Design 02 &bull; Horizontal Timeline Stream
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Chronological Calving Swimlanes &bull; Year 1 to Year 10
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              10-Year Bovine Lineage Timeline Stream
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Chronological progress tracking starting from <strong className="text-amber-700">2 animals in Year 1</strong>. Tracing how the foundation mother and calf expand into a 41-head compounding herd.
            </p>
          </div>

          {/* Herd Multiplier Summary */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-3 rounded-2xl shadow-sm text-center min-w-[120px]">
              <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">
                Year {currentMilestone.year} Herd
              </div>
              <div className="text-2xl font-black">{currentMilestone.herdCount} Buffaloes</div>
              <div className="text-[11px] opacity-90 mt-0.5">
                {currentMilestone.milkingCount} Active Milking
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-3 rounded-2xl shadow-sm text-center min-w-[130px]">
              <div className="text-[10px] uppercase font-bold text-slate-400">Asset Valuation</div>
              <div className="text-lg font-extrabold text-emerald-700">
                {currentMilestone.estimatedAssetValINR}
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                {currentMilestone.annualMilkLiters.toLocaleString()} L/yr
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Year Step Rail */}
        <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-none">
            {TIMELINE_DATA.map((milestone, idx) => {
              const isSelected = idx === activeYearIndex;
              return (
                <button
                  key={milestone.year}
                  onClick={() => setActiveYearIndex(idx)}
                  className={`flex-1 min-w-[140px] p-3 rounded-xl border text-left transition-all relative ${
                    isSelected
                      ? "bg-amber-500 text-white border-amber-600 shadow-md ring-2 ring-amber-500/20"
                      : "bg-white hover:bg-slate-100 text-slate-700 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-black uppercase tracking-wider ${
                        isSelected ? "text-amber-100" : "text-amber-700"
                      }`}
                    >
                      Year {milestone.year}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                    >
                      {milestone.herdCount} Head
                    </span>
                  </div>
                  <div
                    className={`text-[11px] font-medium mt-1 ${
                      isSelected ? "text-amber-50" : "text-slate-500"
                    }`}
                  >
                    {milestone.calendarYear}
                  </div>
                  <div
                    className={`text-xs font-bold mt-1 ${
                      isSelected ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {milestone.estimatedAssetValINR}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* Filter Lineage Pills */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Filter Lineage Branch:</span>
            {["All", "Mother Line (Dam A)", "Calf Line (Daughter B)"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterLineage(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filterLineage === cat
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-slate-900">{filteredAnimals.length}</strong> active buffaloes in{" "}
            <strong>Year {currentMilestone.year}</strong> cohort
          </div>
        </div>

        {/* Animals Grid for Selected Year */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnimals.map((animal) => (
            <div
              key={animal.tagId}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Photo & Identification */}
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-amber-500/80 shadow-sm shrink-0">
                    <Image
                      src={animal.avatar}
                      alt={animal.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block mb-1">
                      {animal.category}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm truncate">{animal.name}</h3>
                    <div className="text-xs font-mono text-slate-500 flex items-center gap-1 mt-0.5">
                      <Tag className="w-3 h-3 text-slate-400" />
                      <span>{animal.tagId}</span>
                    </div>
                  </div>
                </div>

                {/* Details Table: Year 1 / Age / Yield */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Timeline Year:</span>
                    <strong className="text-slate-900">{animal.yearIntroduced}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Age:</span>
                    <strong className="text-amber-800">{animal.age}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Status:</span>
                    <span
                      className={`font-semibold px-2 py-0.5 rounded text-[11px] ${
                        animal.status === "Milking"
                          ? "bg-emerald-100 text-emerald-800"
                          : animal.status === "Growing Heifer"
                          ? "bg-sky-100 text-sky-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {animal.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Daily Milk Yield:</span>
                    <span className="font-bold text-emerald-700">{animal.dailyYield}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Fat Percentage:</span>
                    <span className="font-semibold text-slate-800">{animal.fatPercent}</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-dashed border-slate-100">
                    <span className="text-slate-500">Lineage Branch:</span>
                    <span className="text-[11px] font-medium text-slate-700">{animal.lineage}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Asset Value */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">Est. Market Value</span>
                  <span className="text-sm font-extrabold text-emerald-700">
                    {animal.assetValueINR}
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100">
                  Dam: {animal.damTag.slice(0, 10)}...
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <MarketplaceSwitcher currentMarketplaceId="page-13" />
    </div>
  );
}
