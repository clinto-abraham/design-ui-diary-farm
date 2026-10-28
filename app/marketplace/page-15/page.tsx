"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Split,
  GitBranch,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Milk,
  Scale,
  Award,
  Layers,
  Calendar,
  Tag,
  CheckCircle2,
  TrendingUp,
  Percent,
  Plus,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";
import { FamilyTreeNav } from "@/components/FamilyTreeNav";

interface DualAnimalCard {
  tagId: string;
  name: string;
  yearIntroduced: string;
  yearIndex: number;
  age: string;
  stage: "Milking Dam" | "Pregnant Heifer" | "Growing Heifer" | "Female Calf";
  dailyYield: string;
  fatPercent: string;
  weightKg: number;
  avatar: string;
  damTag: string;
  sireTag: string;
  assetValueINR: string;
}

interface DualYearRow {
  yearNum: number;
  calendarYear: string;
  motherLineage: DualAnimalCard[];
  daughterLineage: DualAnimalCard[];
  cumulativeMilkLiters: number;
  cumulativeAssetVal: string;
}

const DUAL_PILLAR_DATA: DualYearRow[] = [
  {
    yearNum: 1,
    calendarYear: "2026 - 2027",
    cumulativeMilkLiters: 5400,
    cumulativeAssetVal: "₹2,00,000",
    motherLineage: [
      {
        tagId: "HIRA_A1_OCT26_BUFF_MUR_35",
        name: "Starter Dam Ganga",
        yearIntroduced: "Year 1 (Inception)",
        yearIndex: 1,
        age: "48 Months (4.0 Yrs)",
        stage: "Milking Dam",
        dailyYield: "17.5 L/day",
        fatPercent: "8.1%",
        weightKg: 580,
        avatar: "/Murrah_buffalo.JPG",
        damTag: "Hisar Elite Line #4",
        sireTag: "SAG Rohtak Champion",
        assetValueINR: "₹1,45,000",
      },
    ],
    daughterLineage: [
      {
        tagId: "HIRA_B1_OCT26_CALF_MUR_35",
        name: "Starter Calf Jamuna",
        yearIntroduced: "Year 1 (Inception)",
        yearIndex: 1,
        age: "65 Days (2.2 Months)",
        stage: "Female Calf",
        dailyYield: "NA (Calf)",
        fatPercent: "NA",
        weightKg: 85,
        avatar: "/Kid_Buffalo.jpg",
        damTag: "HIRA_A1_OCT26_BUFF_MUR_35",
        sireTag: "SAG Rohtak Champion",
        assetValueINR: "₹55,000",
      },
    ],
  },
  {
    yearNum: 2,
    calendarYear: "2027 - 2028",
    cumulativeMilkLiters: 11000,
    cumulativeAssetVal: "₹2,75,000",
    motherLineage: [
      {
        tagId: "HIRA_C1_OCT27_CALF_MUR_12",
        name: "Gen-1 Daughter Saraswati",
        yearIntroduced: "Year 2",
        yearIndex: 2,
        age: "1 Month (30 Days)",
        stage: "Female Calf",
        dailyYield: "NA",
        fatPercent: "NA",
        weightKg: 44,
        avatar: "/side_buffalo_kid.webp",
        damTag: "HIRA_A1_OCT26_BUFF_MUR_35",
        sireTag: "SAG_AI_INDRA_95XX",
        assetValueINR: "₹45,000",
      },
    ],
    daughterLineage: [
      {
        tagId: "HIRA_B1_OCT26_CALF_MUR_35",
        name: "Jamuna (Growing Heifer)",
        yearIntroduced: "Year 1",
        yearIndex: 1,
        age: "14 Months (1.2 Yrs)",
        stage: "Growing Heifer",
        dailyYield: "NA",
        fatPercent: "NA",
        weightKg: 240,
        avatar: "/Kid_Buffalo.jpg",
        damTag: "HIRA_A1_OCT26_BUFF_MUR_35",
        sireTag: "SAG Rohtak Champion",
        assetValueINR: "₹75,000",
      },
    ],
  },
  {
    yearNum: 3,
    calendarYear: "2028 - 2029",
    cumulativeMilkLiters: 21400,
    cumulativeAssetVal: "₹4,60,000",
    motherLineage: [
      {
        tagId: "HIRA_D1_OCT28_CALF_MUR_18",
        name: "Gen-1 Daughter Kaveri",
        yearIntroduced: "Year 3",
        yearIndex: 3,
        age: "2 Months (60 Days)",
        stage: "Female Calf",
        dailyYield: "NA",
        fatPercent: "NA",
        weightKg: 52,
        avatar: "/Kid_Buffalo.jpg",
        damTag: "HIRA_A1_OCT26_BUFF_MUR_35",
        sireTag: "SAG_AI_INDRA_95XX",
        assetValueINR: "₹48,000",
      },
    ],
    daughterLineage: [
      {
        tagId: "HIRA_B1_OCT26_CALF_MUR_35",
        name: "Jamuna (1st Lactation Matriarch)",
        yearIntroduced: "Year 1",
        yearIndex: 1,
        age: "26 Months (2.2 Yrs)",
        stage: "Milking Dam",
        dailyYield: "16.5 L/day",
        fatPercent: "8.0%",
        weightKg: 490,
        avatar: "/Murrah_buffalo.JPG",
        damTag: "HIRA_A1_OCT26_BUFF_MUR_35",
        sireTag: "SAG Rohtak Champion",
        assetValueINR: "₹1,40,000",
      },
      {
        tagId: "HIRA_E1_DEC28_GCALF_MUR_01",
        name: "Gen-2 Granddaughter Narmada",
        yearIntroduced: "Year 3",
        yearIndex: 3,
        age: "1 Month (30 Days)",
        stage: "Female Calf",
        dailyYield: "NA",
        fatPercent: "NA",
        weightKg: 42,
        avatar: "/Kid_Buffalo.jpg",
        damTag: "HIRA_B1_OCT26_CALF_MUR_35",
        sireTag: "SAG_AI_VIKRAM_95XX",
        assetValueINR: "₹45,000",
      },
    ],
  },
  {
    yearNum: 5,
    calendarYear: "2030 - 2031",
    cumulativeMilkLiters: 48000,
    cumulativeAssetVal: "₹9,80,000",
    motherLineage: [
      {
        tagId: "HIRA_G1_OCT30_CALF_MUR_44",
        name: "Gen-1 Daughter Yamuna",
        yearIntroduced: "Year 5",
        yearIndex: 5,
        age: "1 Month (30 Days)",
        stage: "Female Calf",
        dailyYield: "NA",
        fatPercent: "NA",
        weightKg: 40,
        avatar: "/side_buffalo_kid.webp",
        damTag: "HIRA_A1_OCT26_BUFF_MUR_35",
        sireTag: "SAG_AI_INDRA_95XX",
        assetValueINR: "₹46,000",
      },
    ],
    daughterLineage: [
      {
        tagId: "HIRA_E1_DEC28_GCALF_MUR_01",
        name: "Narmada (Milking Cow)",
        yearIntroduced: "Year 3",
        yearIndex: 3,
        age: "25 Months (2.1 Yrs)",
        stage: "Milking Dam",
        dailyYield: "18.0 L/day",
        fatPercent: "8.2%",
        weightKg: 510,
        avatar: "/Murrah_buffalo.JPG",
        damTag: "HIRA_B1_OCT26_CALF_MUR_35",
        sireTag: "SAG_AI_VIKRAM_95XX",
        assetValueINR: "₹1,50,000",
      },
    ],
  },
];

export default function MarketplacePage15() {
  const [selectedYearTab, setSelectedYearTab] = useState<number>(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <FamilyTreeNav currentId="page-15" />

      {/* Header */}
      <section className="bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">
                Design 04 &bull; Dual-Pillar Matrix
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Synchronized Dam Engine vs. Starter Calf Lineage Compounding
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Dual-Pillar Bovine Lineage Matrix
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              10-Year dual-engine projection separating the <strong className="text-rose-700">Mother Line</strong> (direct annual calves) and the <strong className="text-indigo-700">Daughter Line</strong> (maturing starter calf compounding).
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200 text-xs text-center">
              <span className="text-slate-500 block text-[10px]">Starter Allocation</span>
              <span className="font-bold text-amber-800">2 Animals at Year 1</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-center">
              <span className="text-slate-500 block text-[10px]">10-Yr Total Projected</span>
              <span className="font-bold text-emerald-800">41 Total Descendants</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Pillar Comparison Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pillar 1 Header */}
          <div className="bg-gradient-to-r from-rose-500 to-amber-600 text-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Lineage Engine A</span>
              <h2 className="text-base font-black">Foundation Dam #1 Line</h2>
              <p className="text-xs opacity-90">Tag: HIRA_A1_OCT26_BUFF_MUR_35 (Year 1)</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] block opacity-80">Direct Calves</span>
              <span className="text-lg font-black">7 Calves / 10 Yrs</span>
            </div>
          </div>

          {/* Pillar 2 Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Lineage Engine B</span>
              <h2 className="text-base font-black">Starter Calf #2 Matriarch Line</h2>
              <p className="text-xs opacity-90">Tag: HIRA_B1_OCT26_CALF_MUR_35 (Year 1)</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] block opacity-80">Compounded Herd</span>
              <span className="text-lg font-black">34 Descendants / 10 Yrs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Synchronized Year-by-Year Rows */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full space-y-6">
        {DUAL_PILLAR_DATA.map((row) => (
          <div
            key={row.yearNum}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 relative overflow-hidden"
          >
            {/* Year Row Banner */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-slate-900 text-white text-xs font-black rounded-xl">
                  YEAR {row.yearNum}
                </span>
                <span className="text-xs font-medium text-slate-500">{row.calendarYear}</span>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div>
                  <span className="text-slate-400">Cumul. Milk Yield: </span>
                  <strong className="text-emerald-700 font-bold">
                    {row.cumulativeMilkLiters.toLocaleString()} L
                  </strong>
                </div>
                <div className="h-4 w-[1px] bg-slate-200"></div>
                <div>
                  <span className="text-slate-400">Portfolio Value: </span>
                  <strong className="text-slate-900 font-extrabold">{row.cumulativeAssetVal}</strong>
                </div>
              </div>
            </div>

            {/* Side-by-Side Dual Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {/* Pillar A: Mother Lineage Animals */}
              <div className="space-y-4">
                <div className="text-xs font-bold text-rose-700 flex items-center gap-1.5 mb-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span> Mother Dam Offspring
                </div>
                {row.motherLineage.map((animal) => (
                  <DualAnimalCardItem key={animal.tagId} animal={animal} theme="rose" />
                ))}
              </div>

              {/* Pillar B: Daughter Lineage Animals */}
              <div className="space-y-4">
                <div className="text-xs font-bold text-indigo-700 flex items-center gap-1.5 mb-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Starter Calf &amp; Grandcalves
                </div>
                {row.daughterLineage.map((animal) => (
                  <DualAnimalCardItem key={animal.tagId} animal={animal} theme="indigo" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>

      <MarketplaceSwitcher currentMarketplaceId="page-15" />
    </div>
  );
}

function DualAnimalCardItem({
  animal,
  theme,
}: {
  animal: DualAnimalCard;
  theme: "rose" | "indigo";
}) {
  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 hover:border-slate-300 hover:shadow-sm transition-all flex items-start gap-4">
      <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-amber-500 shadow-xs shrink-0">
        <Image src={animal.avatar} alt={animal.name} fill className="object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span
            className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
              theme === "rose"
                ? "bg-rose-50 text-rose-700 border-rose-200"
                : "bg-indigo-50 text-indigo-700 border-indigo-200"
            }`}
          >
            {animal.stage}
          </span>
          <span className="text-xs font-extrabold text-emerald-700">{animal.assetValueINR}</span>
        </div>

        <h3 className="font-bold text-slate-900 text-xs mt-1 truncate">{animal.name}</h3>

        <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-slate-200/60 text-[11px]">
          <div>
            <span className="text-slate-400 block text-[10px]">Tag ID:</span>
            <span className="font-mono font-medium text-slate-800 text-[10px] truncate block">
              {animal.tagId}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">Age:</span>
            <span className="font-bold text-amber-800 text-[10px]">{animal.age}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">Daily Milk:</span>
            <span className="font-semibold text-emerald-700 text-[10px]">
              {animal.dailyYield} ({animal.fatPercent})
            </span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">Timeline:</span>
            <span className="font-medium text-slate-700 text-[10px]">{animal.yearIntroduced}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
