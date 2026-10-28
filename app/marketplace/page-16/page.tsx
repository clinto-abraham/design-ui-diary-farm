"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  GitBranch,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Milk,
  Scale,
  Award,
  Layers,
  Calendar,
  Tag,
  Dna,
  Zap,
  Filter,
  DollarSign,
  TrendingUp,
  Cpu,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";
import { FamilyTreeNav } from "@/components/FamilyTreeNav";

interface NetworkAnimal {
  tagId: string;
  name: string;
  yearIntroduced: string;
  yearNum: number;
  ageYears: number;
  ageMonths: number;
  ageDays: number;
  status: "Milking" | "Pregnant Heifer" | "Growing Calf" | "Genomic AI Sire";
  generation: string;
  dailyYield: string;
  fatPercent: string;
  weightKg: number;
  avatar: string;
  semenStrawBatch: string;
  investorAssetValue: string;
  isStarter: boolean;
}

const NETWORK_HERD: NetworkAnimal[] = [
  // 2 STARTER ANIMALS AT YEAR 1
  {
    tagId: "HIRA_A1_OCT26_BUFF_MUR_35",
    name: "Murrah Matriarch Ganga",
    yearIntroduced: "Year 1 (2026)",
    yearNum: 1,
    ageYears: 4.0,
    ageMonths: 48,
    ageDays: 1440,
    status: "Milking",
    generation: "Starter Dam (Gen-0)",
    dailyYield: "17.5 L/day",
    fatPercent: "8.1%",
    weightKg: 580,
    avatar: "/Murrah_buffalo.JPG",
    semenStrawBatch: "SAG-MUR-ROHTAK-95XX",
    investorAssetValue: "₹1,45,000",
    isStarter: true,
  },
  {
    tagId: "HIRA_B1_OCT26_CALF_MUR_35",
    name: "Starter Heifer Jamuna",
    yearIntroduced: "Year 1 (2026)",
    yearNum: 1,
    ageYears: 0.18,
    ageMonths: 2.2,
    ageDays: 65,
    status: "Growing Calf",
    generation: "Starter Calf (Gen-1)",
    dailyYield: "NA (Calf)",
    fatPercent: "NA",
    weightKg: 85,
    avatar: "/Kid_Buffalo.jpg",
    semenStrawBatch: "SAG-MUR-ROHTAK-95XX",
    investorAssetValue: "₹55,000",
    isStarter: true,
  },

  // YEAR 2
  {
    tagId: "HIRA_C1_OCT27_CALF_MUR_12",
    name: "Gen-1 Saraswati",
    yearIntroduced: "Year 2 (2027)",
    yearNum: 2,
    ageYears: 1.0,
    ageMonths: 12,
    ageDays: 365,
    status: "Pregnant Heifer",
    generation: "Gen-1 Daughter",
    dailyYield: "NA",
    fatPercent: "NA",
    weightKg: 210,
    avatar: "/side_buffalo_kid.webp",
    semenStrawBatch: "SAG-INDRA-95XX-NDDB",
    investorAssetValue: "₹65,000",
    isStarter: false,
  },

  // YEAR 3
  {
    tagId: "HIRA_D1_OCT28_CALF_MUR_18",
    name: "Gen-1 Kaveri",
    yearIntroduced: "Year 3 (2028)",
    yearNum: 3,
    ageYears: 0.25,
    ageMonths: 3.0,
    ageDays: 90,
    status: "Growing Calf",
    generation: "Gen-1 Daughter",
    dailyYield: "NA",
    fatPercent: "NA",
    weightKg: 88,
    avatar: "/Kid_Buffalo.jpg",
    semenStrawBatch: "SAG-INDRA-95XX-NDDB",
    investorAssetValue: "₹48,000",
    isStarter: false,
  },
  {
    tagId: "HIRA_E1_DEC28_GCALF_MUR_01",
    name: "Gen-2 Grandcalf Narmada",
    yearIntroduced: "Year 3 (2028)",
    yearNum: 3,
    ageYears: 0.08,
    ageMonths: 1.0,
    ageDays: 30,
    status: "Growing Calf",
    generation: "Gen-2 Granddaughter",
    dailyYield: "NA",
    fatPercent: "NA",
    weightKg: 42,
    avatar: "/Kid_Buffalo.jpg",
    semenStrawBatch: "SAG-VIKRAM-95XX-GEN",
    investorAssetValue: "₹45,000",
    isStarter: false,
  },

  // YEAR 5
  {
    tagId: "HIRA_G1_OCT30_BUFF_MUR_51",
    name: "Gen-2 Godavari",
    yearIntroduced: "Year 5 (2030)",
    yearNum: 5,
    ageYears: 2.1,
    ageMonths: 25,
    ageDays: 750,
    status: "Milking",
    generation: "Gen-2 Milking Cow",
    dailyYield: "18.2 L/day",
    fatPercent: "8.3%",
    weightKg: 510,
    avatar: "/Murrah_buffalo.JPG",
    semenStrawBatch: "SAG-ARJUN-95XX",
    investorAssetValue: "₹1,55,000",
    isStarter: false,
  },
  {
    tagId: "HIRA_H1_NOV31_GCALF_MUR_09",
    name: "Gen-3 Tapti",
    yearIntroduced: "Year 6 (2031)",
    yearNum: 6,
    ageYears: 0.5,
    ageMonths: 6.0,
    ageDays: 180,
    status: "Growing Calf",
    generation: "Gen-3 Great-Granddaughter",
    dailyYield: "NA",
    fatPercent: "NA",
    weightKg: 135,
    avatar: "/side_buffalo_kid.webp",
    semenStrawBatch: "NDDB-BRAHMA-95XX",
    investorAssetValue: "₹52,000",
    isStarter: false,
  },

  // YEAR 10
  {
    tagId: "HIRA_K1_OCT35_BUFF_MUR_99",
    name: "Gen-4 Matriarch Supreme",
    yearIntroduced: "Year 10 (2035)",
    yearNum: 10,
    ageYears: 2.0,
    ageMonths: 24,
    ageDays: 720,
    status: "Milking",
    generation: "Gen-4 Elite Matriarch",
    dailyYield: "21.5 L/day",
    fatPercent: "8.5%",
    weightKg: 530,
    avatar: "/Murrah_buffalo.JPG",
    semenStrawBatch: "SAG-GENOMIC-PROGENY",
    investorAssetValue: "₹1,85,000",
    isStarter: false,
  },
];

export default function MarketplacePage16() {
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [ageUnit, setAgeUnit] = useState<"years" | "months" | "days">("months");

  const filteredAnimals =
    filterCategory === "All"
      ? NETWORK_HERD
      : filterCategory === "Starters"
      ? NETWORK_HERD.filter((a) => a.isStarter)
      : filterCategory === "Milking"
      ? NETWORK_HERD.filter((a) => a.status === "Milking")
      : NETWORK_HERD.filter((a) => a.status !== "Milking");

  const formatAge = (animal: NetworkAnimal) => {
    if (ageUnit === "years") return `${animal.ageYears} Yrs`;
    if (ageUnit === "months") return `${animal.ageMonths} Mo`;
    return `${animal.ageDays} Days`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <FamilyTreeNav currentId="page-16" />

      {/* Header */}
      <section className="bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-100 text-sky-800 border border-sky-300">
                Design 05 &bull; 3D Glassmorphic Network
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Spatial Node Architecture &bull; 95% Sex-Sorted Semen Telemetry
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Isometric Glassmorphic Bovine Network
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Next-generation spatial grid tracking the 10-year compounding journey from <strong className="text-sky-700">2 Year 1 starter animals</strong> with full RFID, genomic semen straw IDs, and real-time age unit toggles.
            </p>
          </div>

          {/* Age Unit Switcher */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            <span className="text-xs font-bold text-slate-500 pl-2">Age Unit:</span>
            {(["months", "years", "days"] as const).map((unit) => (
              <button
                key={unit}
                onClick={() => setAgeUnit(unit)}
                className={`px-3 py-1 rounded-xl text-xs font-bold capitalize transition-all ${
                  ageUnit === unit
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {unit}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="max-w-7xl mx-auto mt-4 pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Node Filter:</span>
            {["All", "Starters", "Milking", "Calves & Heifers"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  filterCategory === cat
                    ? "bg-sky-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500">
            Compounding Target: <strong className="text-slate-900">41 Head at Year 10</strong> (&asymp; ₹38,50,000 Portfolio)
          </div>
        </div>
      </section>

      {/* Main Glassmorphic Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAnimals.map((animal) => (
            <div
              key={animal.tagId}
              className={`rounded-3xl border p-5 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${
                animal.isStarter
                  ? "bg-gradient-to-b from-amber-50/90 to-white border-amber-300 shadow-md ring-2 ring-amber-500/10"
                  : "bg-white/90 border-slate-200 shadow-sm"
              }`}
            >
              <div>
                {/* Top Badge & Starter Indicator */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      animal.isStarter
                        ? "bg-amber-100 text-amber-800 border-amber-300"
                        : "bg-slate-100 text-slate-600 border-slate-200"
                    }`}
                  >
                    {animal.isStarter ? "Foundation Anchor" : animal.generation}
                  </span>
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      animal.status === "Milking"
                        ? "bg-emerald-500"
                        : animal.status === "Pregnant Heifer"
                        ? "bg-indigo-500"
                        : "bg-amber-500"
                    } shadow-xs`}
                  ></span>
                </div>

                {/* Avatar & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-amber-500 shadow-xs shrink-0">
                    <Image src={animal.avatar} alt={animal.name} fill className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-extrabold text-slate-900 text-sm truncate">{animal.name}</h3>
                    <div className="text-[10px] font-mono font-medium text-slate-500 truncate mt-0.5">
                      {animal.tagId}
                    </div>
                  </div>
                </div>

                {/* Details Table: Year 1, Tag ID, Age */}
                <div className="space-y-1.5 bg-slate-50/80 rounded-2xl p-3 border border-slate-100 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Timeline:</span>
                    <strong className="text-slate-800">{animal.yearIntroduced}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Age:</span>
                    <strong className="text-amber-800 font-bold">{formatAge(animal)}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Status:</span>
                    <span className="font-semibold text-slate-700">{animal.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Daily Milk:</span>
                    <span className="font-bold text-emerald-700">{animal.dailyYield}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Weight:</span>
                    <span className="text-slate-700 font-medium">{animal.weightKg} kg</span>
                  </div>
                </div>

                {/* Semen Straw Telemetry */}
                <div className="mt-3 px-3 py-2 rounded-xl bg-indigo-50/70 border border-indigo-100 text-[10px]">
                  <span className="text-slate-500 block">Semen Batch (95% XX):</span>
                  <span className="font-mono font-bold text-indigo-700 truncate block">
                    {animal.semenStrawBatch}
                  </span>
                </div>
              </div>

              {/* Card Footer Asset Value */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[9px] text-slate-400 block uppercase font-bold">
                    Asset Value
                  </span>
                  <span className="text-xs font-black text-emerald-700">
                    {animal.investorAssetValue}
                  </span>
                </div>
                <div className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                  Yr {animal.yearNum}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <MarketplaceSwitcher currentMarketplaceId="page-16" />
    </div>
  );
}
