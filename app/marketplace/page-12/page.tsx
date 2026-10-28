"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GitBranch,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Milk,
  Scale,
  Award,
  Heart,
  Calendar,
  Layers,
  ChevronDown,
  Info,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Check,
  Tag,
  Dna,
  X,
  Sliders,
  DollarSign,
  TrendingUp,
  Table as TableIcon,
  Search,
  Users,
  Eye,
  ChevronRight,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";
import { FamilyTreeNav } from "@/components/FamilyTreeNav";

// -------------------------------------------------------------------------
// DATA MODEL: Strict Parent-to-Child Pedigree
// -------------------------------------------------------------------------
interface PedigreeAnimal {
  id: string; // "HF-A", "HF-A.1", etc.
  seriesNumber: number; // Permanent 1 to 20
  name: string;
  tagId: string; // e.g. "HIRA_1_MUR_BUFF_JUN23_A"
  pedigreePath: string; // "A", "A.1", "A.1.1", "A.1.1.1"
  generation: "F0" | "F1" | "F2" | "F3";
  motherId: string | null;
  sireLabel: string;
  birthMonth: number; // Month 0 = Oct 2026. Negative = before Month 0.
  birthMonthYearStr: string;
  firstCalvingMonth?: number;
  avatar: string;
  baseRole: string;
  isSeedCalf?: boolean;
}

// -------------------------------------------------------------------------
// 20 LIVING ANIMALS: ALL DESCENDING DIRECTLY FROM FOUNDER MOTHER A (LAKSHMI)
// The seed starter calf that came with the package is A.1 (Kalyani)
// -------------------------------------------------------------------------
const HERD_DATASET: PedigreeAnimal[] = [
  // ROOT MATRIARCH (FOUNDER A)
  {
    id: "HF-A",
    seriesNumber: 1,
    name: "Lakshmi (Matriarch)",
    tagId: "HIRA_1_MUR_BUFF_JUN23_A",
    pedigreePath: "A",
    generation: "F0",
    motherId: null,
    sireLabel: "SAG Rohtak Stud #04",
    birthMonth: -40, // 40m old at Month 0 (Jun 2023)
    birthMonthYearStr: "Jun 2023",
    avatar: "/Murrah_buffalo.JPG",
    baseRole: "Seed Mother Buffalo (Founder A)",
  },

  // -----------------------------------------------------------------------
  // GENERATION F1: DIRECT DAUGHTERS OF MOTHER A
  // -----------------------------------------------------------------------
  {
    id: "HF-A.1",
    seriesNumber: 2,
    name: "Kalyani (Starter Calf)",
    tagId: "HIRA_2_MUR_BUFF_AUG26_A.1",
    pedigreePath: "A.1",
    generation: "F1",
    motherId: "HF-A",
    sireLabel: "SAG Rohtak Stud #04",
    birthMonth: -2, // 2m old in seed package at Month 0 (Aug 2026)
    birthMonthYearStr: "Aug 2026",
    firstCalvingMonth: 42,
    avatar: "/Kid_Buffalo.jpg",
    baseRole: "Seed Package Calf (First Daughter of A)",
    isSeedCalf: true,
  },
  {
    id: "HF-A.2",
    seriesNumber: 3,
    name: "Nandini",
    tagId: "HIRA_3_MUR_BUFF_NOV27_A.2",
    pedigreePath: "A.2",
    generation: "F1",
    motherId: "HF-A",
    sireLabel: "SAG_AI_INDRA_95XX",
    birthMonth: 13, // Nov 2027 (Month 13)
    birthMonthYearStr: "Nov 2027",
    firstCalvingMonth: 57,
    avatar: "/side_buffalo_kid.webp",
    baseRole: "Second Daughter of Lakshmi",
  },
  {
    id: "HF-A.3",
    seriesNumber: 4,
    name: "Gauri",
    tagId: "HIRA_4_MUR_BUFF_FEB29_A.3",
    pedigreePath: "A.3",
    generation: "F1",
    motherId: "HF-A",
    sireLabel: "SAG_AI_INDRA_95XX",
    birthMonth: 28, // Feb 2029 (Month 28)
    birthMonthYearStr: "Feb 2029",
    firstCalvingMonth: 72,
    avatar: "/Kid_Buffalo.jpg",
    baseRole: "Third Daughter of Lakshmi",
  },
  {
    id: "HF-A.4",
    seriesNumber: 6,
    name: "Saraswati",
    tagId: "HIRA_6_MUR_BUFF_MAY30_A.4",
    pedigreePath: "A.4",
    generation: "F1",
    motherId: "HF-A",
    sireLabel: "SAG_AI_INDRA_95XX",
    birthMonth: 43, // May 2030 (Month 43)
    birthMonthYearStr: "May 2030",
    firstCalvingMonth: 87,
    avatar: "/Kid_Buffalo.jpg",
    baseRole: "Fourth Daughter of Lakshmi",
  },
  {
    id: "HF-A.5",
    seriesNumber: 9,
    name: "Parvati",
    tagId: "HIRA_9_MUR_BUFF_AUG31_A.5",
    pedigreePath: "A.5",
    generation: "F1",
    motherId: "HF-A",
    sireLabel: "SAG_AI_INDRA_95XX",
    birthMonth: 58, // Aug 2031 (Month 58)
    birthMonthYearStr: "Aug 2031",
    firstCalvingMonth: 102,
    avatar: "/Kid_Buffalo.jpg",
    baseRole: "Fifth Daughter of Lakshmi",
  },
  {
    id: "HF-A.6",
    seriesNumber: 12,
    name: "Ananya",
    tagId: "HIRA_12_MUR_BUFF_NOV32_A.6",
    pedigreePath: "A.6",
    generation: "F1",
    motherId: "HF-A",
    sireLabel: "SAG_AI_INDRA_95XX",
    birthMonth: 73, // Nov 2032 (Month 73)
    birthMonthYearStr: "Nov 2032",
    firstCalvingMonth: 117,
    avatar: "/Kid_Buffalo.jpg",
    baseRole: "Sixth Daughter of Lakshmi",
  },
  {
    id: "HF-A.7",
    seriesNumber: 15,
    name: "Bhavani",
    tagId: "HIRA_15_MUR_BUFF_FEB34_A.7",
    pedigreePath: "A.7",
    generation: "F1",
    motherId: "HF-A",
    sireLabel: "SAG_AI_INDRA_95XX",
    birthMonth: 88, // Feb 2034 (Month 88)
    birthMonthYearStr: "Feb 2034",
    avatar: "/Kid_Buffalo.jpg",
    baseRole: "Seventh Daughter of Lakshmi",
  },

  // -----------------------------------------------------------------------
  // GENERATION F2: DAUGHTERS OF A.1 (KALYANI)
  // -----------------------------------------------------------------------
  {
    id: "HF-A.1.1",
    seriesNumber: 5,
    name: "Yamuna",
    tagId: "HIRA_5_MUR_BUFF_APR30_A.1.1",
    pedigreePath: "A.1.1",
    generation: "F2",
    motherId: "HF-A.1",
    sireLabel: "SAG_AI_VIKRAM_95XX",
    birthMonth: 42, // Apr 2030 (Month 42)
    birthMonthYearStr: "Apr 2030",
    firstCalvingMonth: 86,
    avatar: "/side_buffalo_kid.webp",
    baseRole: "First Daughter of Kalyani (Granddaughter)",
  },
  {
    id: "HF-A.1.2",
    seriesNumber: 7,
    name: "Radha",
    tagId: "HIRA_7_MUR_BUFF_JUL31_A.1.2",
    pedigreePath: "A.1.2",
    generation: "F2",
    motherId: "HF-A.1",
    sireLabel: "SAG_AI_VIKRAM_95XX",
    birthMonth: 57, // Jul 2031 (Month 57)
    birthMonthYearStr: "Jul 2031",
    firstCalvingMonth: 101,
    avatar: "/Kid_Buffalo.jpg",
    baseRole: "Second Daughter of Kalyani (Granddaughter)",
  },
  {
    id: "HF-A.1.3",
    seriesNumber: 10,
    name: "Kamadhenu",
    tagId: "HIRA_10_MUR_BUFF_OCT32_A.1.3",
    pedigreePath: "A.1.3",
    generation: "F2",
    motherId: "HF-A.1",
    sireLabel: "SAG_AI_VIKRAM_95XX",
    birthMonth: 72, // Oct 2032 (Month 72)
    birthMonthYearStr: "Oct 2032",
    firstCalvingMonth: 116,
    avatar: "/Kid_Buffalo.jpg",
    baseRole: "Third Daughter of Kalyani (Granddaughter)",
  },
  {
    id: "HF-A.1.4",
    seriesNumber: 13,
    name: "Shakti",
    tagId: "HIRA_13_MUR_BUFF_JAN34_A.1.4",
    pedigreePath: "A.1.4",
    generation: "F2",
    motherId: "HF-A.1",
    sireLabel: "SAG_AI_VIKRAM_95XX",
    birthMonth: 87, // Jan 2034 (Month 87)
    birthMonthYearStr: "Jan 2034",
    avatar: "/Kid_Buffalo.jpg",
    baseRole: "Fourth Daughter of Kalyani (Granddaughter)",
  },

  // -----------------------------------------------------------------------
  // GENERATION F2: DAUGHTERS OF A.2 (NANDINI)
  // -----------------------------------------------------------------------
  {
    id: "HF-A.2.1",
    seriesNumber: 8,
    name: "Tara",
    tagId: "HIRA_8_MUR_BUFF_JUL31_A.2.1",
    pedigreePath: "A.2.1",
    generation: "F2",
    motherId: "HF-A.2",
    sireLabel: "NDDB Stud Brahma",
    birthMonth: 57, // Jul 2031 (Month 57)
    birthMonthYearStr: "Jul 2031",
    firstCalvingMonth: 101,
    avatar: "/side_buffalo_kid.webp",
    baseRole: "First Daughter of Nandini (Granddaughter)",
  },
  {
    id: "HF-A.2.2",
    seriesNumber: 11,
    name: "Devi",
    tagId: "HIRA_11_MUR_BUFF_OCT32_A.2.2",
    pedigreePath: "A.2.2",
    generation: "F2",
    motherId: "HF-A.2",
    sireLabel: "NDDB Stud Brahma",
    birthMonth: 72, // Oct 2032 (Month 72)
    birthMonthYearStr: "Oct 2032",
    firstCalvingMonth: 116,
    avatar: "/side_buffalo_kid.webp",
    baseRole: "Second Daughter of Nandini (Granddaughter)",
  },
  {
    id: "HF-A.2.3",
    seriesNumber: 14,
    name: "Meera",
    tagId: "HIRA_14_MUR_BUFF_JAN34_A.2.3",
    pedigreePath: "A.2.3",
    generation: "F2",
    motherId: "HF-A.2",
    sireLabel: "NDDB Stud Brahma",
    birthMonth: 87, // Jan 2034 (Month 87)
    birthMonthYearStr: "Jan 2034",
    avatar: "/side_buffalo_kid.webp",
    baseRole: "Third Daughter of Nandini (Granddaughter)",
  },

  // -----------------------------------------------------------------------
  // GENERATION F3: GREAT-GRANDDAUGHTERS
  // -----------------------------------------------------------------------
  {
    id: "HF-A.1.1.1",
    seriesNumber: 16,
    name: "Mohini",
    tagId: "HIRA_16_MUR_BUFF_DEC33_A.1.1.1",
    pedigreePath: "A.1.1.1",
    generation: "F3",
    motherId: "HF-A.1.1",
    sireLabel: "NDDB Stud Arjun",
    birthMonth: 86, // Dec 2033 (Month 86)
    birthMonthYearStr: "Dec 2033",
    avatar: "/side_buffalo_kid.webp",
    baseRole: "Daughter of Yamuna (Great-Granddaughter)",
  },
  {
    id: "HF-A.1.2.1",
    seriesNumber: 17,
    name: "Gayatri",
    tagId: "HIRA_17_MUR_BUFF_JUL35_A.1.2.1",
    pedigreePath: "A.1.2.1",
    generation: "F3",
    motherId: "HF-A.1.2",
    sireLabel: "NDDB Stud Arjun",
    birthMonth: 101, // Jul 2035 (Month 101)
    birthMonthYearStr: "Jul 2035",
    avatar: "/Kid_Buffalo.jpg",
    baseRole: "Daughter of Radha (Great-Granddaughter)",
  },
  {
    id: "HF-A.2.1.1",
    seriesNumber: 18,
    name: "Sharda",
    tagId: "HIRA_18_MUR_BUFF_JUL35_A.2.1.1",
    pedigreePath: "A.2.1.1",
    generation: "F3",
    motherId: "HF-A.2.1",
    sireLabel: "SAG Progeny Champion",
    birthMonth: 101, // Jul 2035 (Month 101)
    birthMonthYearStr: "Jul 2035",
    avatar: "/Kid_Buffalo.jpg",
    baseRole: "Daughter of Tara (Great-Granddaughter)",
  },
  {
    id: "HF-A.1.3.1",
    seriesNumber: 19,
    name: "Pooja",
    tagId: "HIRA_19_MUR_BUFF_OCT36_A.1.3.1",
    pedigreePath: "A.1.3.1",
    generation: "F3",
    motherId: "HF-A.1.3",
    sireLabel: "NDDB Stud Arjun",
    birthMonth: 116, // Oct 2036 (Month 116)
    birthMonthYearStr: "Oct 2036",
    avatar: "/Kid_Buffalo.jpg",
    baseRole: "Daughter of Kamadhenu (Great-Granddaughter)",
  },
  {
    id: "HF-A.2.2.1",
    seriesNumber: 20,
    name: "Arundhati",
    tagId: "HIRA_20_MUR_BUFF_OCT36_A.2.2.1",
    pedigreePath: "A.2.2.1",
    generation: "F3",
    motherId: "HF-A.2.2",
    sireLabel: "SAG Progeny Champion",
    birthMonth: 116, // Oct 2036 (Month 116)
    birthMonthYearStr: "Oct 2036",
    avatar: "/side_buffalo_kid.webp",
    baseRole: "Daughter of Devi (Great-Granddaughter)",
  },
];

// -------------------------------------------------------------------------
// YEAR MILESTONE SUMMARY (ICAR-CIRB Standards)
// -------------------------------------------------------------------------
const YEAR_MILESTONES = [
  { year: 1, calendarYear: "Oct 2027", elapsedMonths: 12, milkingAdults: 1, growingStock: 1, totalLiving: 2, birthsInYear: 0, herdAssetValueINR: 210000, yearlyMilk30INR: 105120, totalWealthINR: 315120 },
  { year: 2, calendarYear: "Oct 2028", elapsedMonths: 24, milkingAdults: 1, growingStock: 2, totalLiving: 3, birthsInYear: 1, herdAssetValueINR: 250000, yearlyMilk30INR: 105120, totalWealthINR: 355120 },
  { year: 3, calendarYear: "Oct 2029", elapsedMonths: 36, milkingAdults: 1, growingStock: 3, totalLiving: 4, birthsInYear: 1, herdAssetValueINR: 310000, yearlyMilk30INR: 105120, totalWealthINR: 415120 },
  { year: 4, calendarYear: "Oct 2030", elapsedMonths: 48, milkingAdults: 2, growingStock: 4, totalLiving: 6, birthsInYear: 2, herdAssetValueINR: 410000, yearlyMilk30INR: 210240, totalWealthINR: 620240 },
  { year: 5, calendarYear: "Oct 2031", elapsedMonths: 60, milkingAdults: 3, growingStock: 6, totalLiving: 9, birthsInYear: 3, herdAssetValueINR: 570000, yearlyMilk30INR: 315360, totalWealthINR: 885360 },
  { year: 6, calendarYear: "Oct 2032", elapsedMonths: 72, milkingAdults: 4, growingStock: 7, totalLiving: 11, birthsInYear: 2, herdAssetValueINR: 752000, yearlyMilk30INR: 420480, totalWealthINR: 1172480 },
  { year: 7, calendarYear: "Oct 2033", elapsedMonths: 84, milkingAdults: 6, growingStock: 6, totalLiving: 12, birthsInYear: 1, herdAssetValueINR: 950000, yearlyMilk30INR: 630720, totalWealthINR: 1580720 },
  { year: 8, calendarYear: "Oct 2034", elapsedMonths: 96, milkingAdults: 9, growingStock: 7, totalLiving: 16, birthsInYear: 4, herdAssetValueINR: 1271000, yearlyMilk30INR: 946080, totalWealthINR: 2217080 },
  { year: 9, calendarYear: "Oct 2035", elapsedMonths: 108, milkingAdults: 11, growingStock: 7, totalLiving: 18, birthsInYear: 2, herdAssetValueINR: 1501000, yearlyMilk30INR: 1156320, totalWealthINR: 2657320 },
  { year: 10, calendarYear: "Oct 2036", elapsedMonths: 120, milkingAdults: 12, growingStock: 8, totalLiving: 20, birthsInYear: 2, herdAssetValueINR: 1669000, yearlyMilk30INR: 1261440, totalWealthINR: 2930440 },
];

export default function MarketplacePage12() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const [selectedAnimal, setSelectedAnimal] = useState<PedigreeAnimal | null>(null);
  const [highlightedParentId, setHighlightedParentId] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [showTableModal, setShowTableModal] = useState<boolean>(false);
  const [filterGen, setFilterGen] = useState<"ALL" | "F1" | "F2" | "F3">("ALL");

  const activeMilestone = YEAR_MILESTONES[selectedYear - 1];
  const elapsedMonths = activeMilestone.elapsedMonths;

  // Real-time lifecycle calculation
  const getAnimalStats = (animal: PedigreeAnimal) => {
    const isBorn = animal.birthMonth <= elapsedMonths;
    const ageMonths = isBorn ? elapsedMonths - animal.birthMonth : 0;
    const ageDays = Math.round(ageMonths * 30.416);
    const ageYears = (ageMonths / 12).toFixed(1);

    let lifecycleStatus = "Unborn";
    let statusColor = "bg-slate-300";
    let assetVal = 0;
    let dailyMilk = "NA";

    if (!isBorn) {
      lifecycleStatus = "Unborn";
      statusColor = "bg-slate-300";
    } else if (ageMonths >= 44) {
      lifecycleStatus = "Milking Adult";
      statusColor = "bg-emerald-500";
      assetVal = 120000;
      dailyMilk = "12.0 L/day";
    } else if (ageMonths >= 36) {
      lifecycleStatus = "Pregnant Heifer";
      statusColor = "bg-sky-500";
      assetVal = 90000;
      dailyMilk = "NA (Pregnant)";
    } else if (ageMonths >= 24) {
      lifecycleStatus = "2-Yr Heifer";
      statusColor = "bg-amber-500";
      assetVal = 60000;
      dailyMilk = "NA (Heifer)";
    } else if (ageMonths >= 12) {
      lifecycleStatus = "Yearling";
      statusColor = "bg-orange-500";
      assetVal = 30000;
      dailyMilk = "NA (Yearling)";
    } else {
      lifecycleStatus = "Suckling Calf";
      statusColor = "bg-pink-500";
      assetVal = animal.id === "HF-A.1" && selectedYear === 1 ? 20000 : 10000;
      dailyMilk = "NA (Calf)";
    }

    return { isBorn, ageMonths, ageDays, ageYears, lifecycleStatus, statusColor, assetVal, dailyMilk };
  };

  // Hierarchy Partitioning
  const motherA = HERD_DATASET[0];
  const f1Daughters = useMemo(() => HERD_DATASET.filter((a) => a.motherId === "HF-A"), []);
  const kalyaniOffspring = useMemo(() => HERD_DATASET.filter((a) => a.motherId === "HF-A.1"), []);
  const nandiniOffspring = useMemo(() => HERD_DATASET.filter((a) => a.motherId === "HF-A.2"), []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <FamilyTreeNav currentId="page-12" />

      {/* Header Bar */}
      <section className="bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                Direct Parent-to-Child Pedigree
              </span>
              <span className="text-xs font-semibold text-slate-500 font-mono">
                {activeMilestone.calendarYear} &bull; Month {activeMilestone.elapsedMonths}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
              Murrah 10-Year Lineage &bull; Starter Calf as A.1
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
              Lines strictly originate from the <strong>Parent</strong> directly down to her <strong>Child</strong>. The starter calf included in the package is recorded as <code className="px-1.5 py-0.5 bg-amber-50 text-amber-900 border border-amber-200 rounded font-mono font-bold">HIRA_2_MUR_BUFF_AUG26_A.1</code>.
            </p>
          </div>

          {/* Actuarial Metrics Box for Selected Year */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-2.5 sm:p-3 rounded-2xl text-center min-w-[110px] shadow-xs">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Total Living Herd</span>
              <span className="text-xl sm:text-2xl font-black text-amber-800">
                {activeMilestone.totalLiving} Head
              </span>
              <span className="text-[10px] text-slate-600 block mt-0.5">
                {activeMilestone.milkingAdults} Milking &bull; {activeMilestone.growingStock} Growing
              </span>
            </div>

            <div className="bg-white border border-slate-200 p-2.5 sm:p-3 rounded-2xl text-center min-w-[125px] shadow-xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Herd Asset Value</span>
              <span className="text-lg sm:text-xl font-black text-slate-900">
                ₹{activeMilestone.herdAssetValueINR.toLocaleString("en-IN")}
              </span>
              <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">
                +₹60k Smart Infra
              </span>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-2.5 sm:p-3 rounded-2xl text-center min-w-[125px] shadow-xs">
              <span className="text-[10px] uppercase font-bold text-emerald-700 block">Yearly Milk 30%</span>
              <span className="text-lg sm:text-xl font-black text-emerald-800">
                ₹{activeMilestone.yearlyMilk30INR.toLocaleString("en-IN")}
              </span>
              <span className="text-[10px] text-emerald-600 font-medium block mt-0.5">
                ₹1,05,120 / cow / yr
              </span>
            </div>

            <button
              onClick={() => setShowTableModal(true)}
              className="p-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
              title="Inspect 10-Year Actuarial Table"
            >
              <TableIcon className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">10-Yr Ledger</span>
            </button>
          </div>
        </div>

        {/* Milestone Stepper */}
        <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-slate-500 mr-2 shrink-0 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-amber-600" /> Timeline:
            </span>
            {YEAR_MILESTONES.map((m) => (
              <button
                key={m.year}
                onClick={() => setSelectedYear(m.year)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  selectedYear === m.year
                    ? "bg-amber-600 text-white shadow-md ring-2 ring-amber-600/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                Yr {m.year} <span className="text-[10px] opacity-80">({m.totalLiving}h)</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Zoom Controls */}
            <div className="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200">
              <button
                onClick={() => setZoomLevel((p) => Math.max(65, p - 10))}
                className="p-1 hover:bg-white rounded-lg text-slate-600"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-bold px-1.5 text-slate-700">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel((p) => Math.min(130, p + 10))}
                className="p-1 hover:bg-white rounded-lg text-slate-600"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pedigree Tree Canvas */}
      <main className="flex-1 overflow-x-auto p-6 sm:p-10 flex justify-center items-start bg-slate-50/70">
        <div
          className="transition-transform duration-200 origin-top flex flex-col items-center min-w-[1280px] pb-32"
          style={{ transform: `scale(${zoomLevel / 100})` }}
        >
          {/* ========================================================
              LEVEL 0: FOUNDER MOTHER A (LAKSHMI) + AI SIRE INDRA
             ======================================================== */}
          <div className="relative flex flex-col items-center">
            {/* Top Mating Pair */}
            <div className="relative flex items-center justify-center gap-8">
              {/* Mother A */}
              <ParentChildCard
                animal={motherA}
                stats={getAnimalStats(motherA)}
                onClick={() => setSelectedAnimal(motherA)}
                isSelected={selectedAnimal?.id === motherA.id}
                isMatriarch={true}
              />

              {/* Mating Pill (=) with AI Sire */}
              <div className="relative flex items-center justify-center">
                <div className="w-16 h-0.5 bg-slate-300 flex items-center justify-center relative">
                  <div className="px-2 py-0.5 bg-white border border-slate-300 rounded text-xs font-bold text-slate-700 shadow-xs z-10">
                    =
                  </div>
                </div>
              </div>

              {/* Sire Indra */}
              <SireDisplayCard
                name="Sire Indra (NDDB Bull)"
                tag="SAG_AI_INDRA_95XX"
                role="95% Female Sex-Sorted Semen"
                avatar="/Murrah_buffalo.JPG"
              />
            </div>

            {/* Direct Vertical Stem coming down from Mother A */}
            <div className="w-0.5 h-10 bg-amber-500 relative flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-amber-600 rounded-full border-2 border-white shadow-xs"></div>
            </div>

            {/* F1 Horizontal Distribution Bus for Mother A's 7 Daughters */}
            <div className="relative w-[1180px] h-0.5 bg-amber-400">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-black text-amber-800 uppercase tracking-wider bg-amber-100 px-3 py-0.5 rounded-full border border-amber-300 shadow-2xs">
                Direct Progeny of Mother A (Lakshmi) &bull; Generation F1
              </div>
            </div>

            {/* ======================================================
                LEVEL 1: 7 DAUGHTERS OF MOTHER A
                (A.1 Starter Calf, A.2, A.3, A.4, A.5, A.6, A.7)
               ====================================================== */}
            <div className="w-[1240px] pt-8 grid grid-cols-7 gap-4 items-start">
              {/* DAUGHTER 1: A.1 Kalyani (Starter Calf) */}
              <div className="flex flex-col items-center">
                {/* Downward drop pointer from bus */}
                <div className="w-0.5 h-6 bg-amber-400 -mt-8 mb-2 flex items-end justify-center">
                  <div className="w-1.5 h-1.5 border-b-2 border-r-2 border-amber-600 rotate-45 transform translate-y-0.5"></div>
                </div>

                <ParentChildCard
                  animal={HERD_DATASET[1]} // Kalyani A.1
                  stats={getAnimalStats(HERD_DATASET[1])}
                  onClick={() => setSelectedAnimal(HERD_DATASET[1])}
                  isSelected={selectedAnimal?.id === HERD_DATASET[1].id}
                  isSeedCalfBadge={true}
                />

                {/* Kalyani's children (A.1.1, A.1.2, A.1.3, A.1.4) */}
                {selectedYear >= 4 && (
                  <div className="mt-8 flex flex-col items-center w-full">
                    {/* Stem from A.1 to her child bus */}
                    <div className="w-0.5 h-8 bg-sky-400 relative flex items-center justify-center">
                      <div className="w-2 h-2 bg-sky-600 rounded-full border border-white"></div>
                    </div>
                    <div className="relative w-64 h-0.5 bg-sky-400">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-bold text-sky-800 bg-sky-50 px-1.5 rounded border border-sky-200">
                        Calves of A.1
                      </div>
                    </div>

                    {/* Kalyani's daughters */}
                    <div className="pt-4 flex flex-col gap-4 items-center">
                      {/* A.1.1 Yamuna */}
                      <div className="flex flex-col items-center">
                        <ParentChildCard
                          animal={HERD_DATASET[8]} // A.1.1
                          stats={getAnimalStats(HERD_DATASET[8])}
                          onClick={() => setSelectedAnimal(HERD_DATASET[8])}
                          isSelected={selectedAnimal?.id === HERD_DATASET[8].id}
                          isCompact={true}
                        />
                        {/* A.1.1.1 Mohini */}
                        {selectedYear >= 8 && (
                          <div className="mt-4 flex flex-col items-center">
                            <div className="w-0.5 h-6 bg-indigo-400"></div>
                            <ParentChildCard
                              animal={HERD_DATASET[15]} // A.1.1.1
                              stats={getAnimalStats(HERD_DATASET[15])}
                              onClick={() => setSelectedAnimal(HERD_DATASET[15])}
                              isSelected={selectedAnimal?.id === HERD_DATASET[15].id}
                              isCompact={true}
                            />
                          </div>
                        )}
                      </div>

                      {/* A.1.2 Radha */}
                      {selectedYear >= 5 && (
                        <div className="flex flex-col items-center">
                          <ParentChildCard
                            animal={HERD_DATASET[9]} // A.1.2
                            stats={getAnimalStats(HERD_DATASET[9])}
                            onClick={() => setSelectedAnimal(HERD_DATASET[9])}
                            isSelected={selectedAnimal?.id === HERD_DATASET[9].id}
                            isCompact={true}
                          />
                          {/* A.1.2.1 Gayatri */}
                          {selectedYear >= 9 && (
                            <div className="mt-4 flex flex-col items-center">
                              <div className="w-0.5 h-6 bg-indigo-400"></div>
                              <ParentChildCard
                                animal={HERD_DATASET[16]} // A.1.2.1
                                stats={getAnimalStats(HERD_DATASET[16])}
                                onClick={() => setSelectedAnimal(HERD_DATASET[16])}
                                isSelected={selectedAnimal?.id === HERD_DATASET[16].id}
                                isCompact={true}
                              />
                            </div>
                          )}
                        </div>
                      )}

                      {/* A.1.3 Kamadhenu */}
                      {selectedYear >= 6 && (
                        <div className="flex flex-col items-center">
                          <ParentChildCard
                            animal={HERD_DATASET[10]} // A.1.3
                            stats={getAnimalStats(HERD_DATASET[10])}
                            onClick={() => setSelectedAnimal(HERD_DATASET[10])}
                            isSelected={selectedAnimal?.id === HERD_DATASET[10].id}
                            isCompact={true}
                          />
                          {/* A.1.3.1 Pooja */}
                          {selectedYear >= 10 && (
                            <div className="mt-4 flex flex-col items-center">
                              <div className="w-0.5 h-6 bg-indigo-400"></div>
                              <ParentChildCard
                                animal={HERD_DATASET[18]} // A.1.3.1
                                stats={getAnimalStats(HERD_DATASET[18])}
                                onClick={() => setSelectedAnimal(HERD_DATASET[18])}
                                isSelected={selectedAnimal?.id === HERD_DATASET[18].id}
                                isCompact={true}
                              />
                            </div>
                          )}
                        </div>
                      )}

                      {/* A.1.4 Shakti */}
                      {selectedYear >= 8 && (
                        <ParentChildCard
                          animal={HERD_DATASET[11]} // A.1.4
                          stats={getAnimalStats(HERD_DATASET[11])}
                          onClick={() => setSelectedAnimal(HERD_DATASET[11])}
                          isSelected={selectedAnimal?.id === HERD_DATASET[11].id}
                          isCompact={true}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* DAUGHTER 2: A.2 Nandini */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-amber-400 -mt-8 mb-2 flex items-end justify-center">
                  <div className="w-1.5 h-1.5 border-b-2 border-r-2 border-amber-600 rotate-45 transform translate-y-0.5"></div>
                </div>

                <ParentChildCard
                  animal={HERD_DATASET[2]} // A.2
                  stats={getAnimalStats(HERD_DATASET[2])}
                  onClick={() => setSelectedAnimal(HERD_DATASET[2])}
                  isSelected={selectedAnimal?.id === HERD_DATASET[2].id}
                />

                {/* Nandini's children (A.2.1, A.2.2, A.2.3) */}
                {selectedYear >= 5 && (
                  <div className="mt-8 flex flex-col items-center w-full">
                    <div className="w-0.5 h-8 bg-emerald-400 relative flex items-center justify-center">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full border border-white"></div>
                    </div>
                    <div className="relative w-56 h-0.5 bg-emerald-400">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-bold text-emerald-800 bg-emerald-50 px-1.5 rounded border border-emerald-200">
                        Calves of A.2
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col gap-4 items-center">
                      {/* A.2.1 Tara */}
                      <div className="flex flex-col items-center">
                        <ParentChildCard
                          animal={HERD_DATASET[12]} // A.2.1
                          stats={getAnimalStats(HERD_DATASET[12])}
                          onClick={() => setSelectedAnimal(HERD_DATASET[12])}
                          isSelected={selectedAnimal?.id === HERD_DATASET[12].id}
                          isCompact={true}
                        />
                        {/* A.2.1.1 Sharda */}
                        {selectedYear >= 9 && (
                          <div className="mt-4 flex flex-col items-center">
                            <div className="w-0.5 h-6 bg-indigo-400"></div>
                            <ParentChildCard
                              animal={HERD_DATASET[17]} // A.2.1.1
                              stats={getAnimalStats(HERD_DATASET[17])}
                              onClick={() => setSelectedAnimal(HERD_DATASET[17])}
                              isSelected={selectedAnimal?.id === HERD_DATASET[17].id}
                              isCompact={true}
                            />
                          </div>
                        )}
                      </div>

                      {/* A.2.2 Devi */}
                      {selectedYear >= 6 && (
                        <div className="flex flex-col items-center">
                          <ParentChildCard
                            animal={HERD_DATASET[13]} // A.2.2
                            stats={getAnimalStats(HERD_DATASET[13])}
                            onClick={() => setSelectedAnimal(HERD_DATASET[13])}
                            isSelected={selectedAnimal?.id === HERD_DATASET[13].id}
                            isCompact={true}
                          />
                          {/* A.2.2.1 Arundhati */}
                          {selectedYear >= 10 && (
                            <div className="mt-4 flex flex-col items-center">
                              <div className="w-0.5 h-6 bg-indigo-400"></div>
                              <ParentChildCard
                                animal={HERD_DATASET[19]} // A.2.2.1
                                stats={getAnimalStats(HERD_DATASET[19])}
                                onClick={() => setSelectedAnimal(HERD_DATASET[19])}
                                isSelected={selectedAnimal?.id === HERD_DATASET[19].id}
                                isCompact={true}
                              />
                            </div>
                          )}
                        </div>
                      )}

                      {/* A.2.3 Meera */}
                      {selectedYear >= 8 && (
                        <ParentChildCard
                          animal={HERD_DATASET[14]} // A.2.3
                          stats={getAnimalStats(HERD_DATASET[14])}
                          onClick={() => setSelectedAnimal(HERD_DATASET[14])}
                          isSelected={selectedAnimal?.id === HERD_DATASET[14].id}
                          isCompact={true}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* DAUGHTER 3: A.3 Gauri */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-amber-400 -mt-8 mb-2 flex items-end justify-center">
                  <div className="w-1.5 h-1.5 border-b-2 border-r-2 border-amber-600 rotate-45 transform translate-y-0.5"></div>
                </div>
                <ParentChildCard
                  animal={HERD_DATASET[3]} // A.3
                  stats={getAnimalStats(HERD_DATASET[3])}
                  onClick={() => setSelectedAnimal(HERD_DATASET[3])}
                  isSelected={selectedAnimal?.id === HERD_DATASET[3].id}
                />
              </div>

              {/* DAUGHTER 4: A.4 Saraswati */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-amber-400 -mt-8 mb-2 flex items-end justify-center">
                  <div className="w-1.5 h-1.5 border-b-2 border-r-2 border-amber-600 rotate-45 transform translate-y-0.5"></div>
                </div>
                <ParentChildCard
                  animal={HERD_DATASET[4]} // A.4
                  stats={getAnimalStats(HERD_DATASET[4])}
                  onClick={() => setSelectedAnimal(HERD_DATASET[4])}
                  isSelected={selectedAnimal?.id === HERD_DATASET[4].id}
                />
              </div>

              {/* DAUGHTER 5: A.5 Parvati */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-amber-400 -mt-8 mb-2 flex items-end justify-center">
                  <div className="w-1.5 h-1.5 border-b-2 border-r-2 border-amber-600 rotate-45 transform translate-y-0.5"></div>
                </div>
                <ParentChildCard
                  animal={HERD_DATASET[5]} // A.5
                  stats={getAnimalStats(HERD_DATASET[5])}
                  onClick={() => setSelectedAnimal(HERD_DATASET[5])}
                  isSelected={selectedAnimal?.id === HERD_DATASET[5].id}
                />
              </div>

              {/* DAUGHTER 6: A.6 Ananya */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-amber-400 -mt-8 mb-2 flex items-end justify-center">
                  <div className="w-1.5 h-1.5 border-b-2 border-r-2 border-amber-600 rotate-45 transform translate-y-0.5"></div>
                </div>
                <ParentChildCard
                  animal={HERD_DATASET[6]} // A.6
                  stats={getAnimalStats(HERD_DATASET[6])}
                  onClick={() => setSelectedAnimal(HERD_DATASET[6])}
                  isSelected={selectedAnimal?.id === HERD_DATASET[6].id}
                />
              </div>

              {/* DAUGHTER 7: A.7 Bhavani */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-amber-400 -mt-8 mb-2 flex items-end justify-center">
                  <div className="w-1.5 h-1.5 border-b-2 border-r-2 border-amber-600 rotate-45 transform translate-y-0.5"></div>
                </div>
                <ParentChildCard
                  animal={HERD_DATASET[7]} // A.7
                  stats={getAnimalStats(HERD_DATASET[7])}
                  onClick={() => setSelectedAnimal(HERD_DATASET[7])}
                  isSelected={selectedAnimal?.id === HERD_DATASET[7].id}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Slide-Over Dossier Modal when any Node is Clicked */}
      {selectedAnimal && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Header */}
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                    Series #{selectedAnimal.seriesNumber} &bull; Gen {selectedAnimal.generation}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedAnimal(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Animal Body */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-500/80 shadow-md">
                    <Image
                      src={selectedAnimal.avatar}
                      alt={selectedAnimal.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{selectedAnimal.name}</h3>
                    <div className="text-xs font-mono font-bold text-amber-800 mt-0.5 break-all">
                      {selectedAnimal.tagId}
                    </div>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                      {getAnimalStats(selectedAnimal).lifecycleStatus}
                    </span>
                  </div>
                </div>

                {/* Details Breakdown */}
                <div className="space-y-2.5 bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Maternal Pedigree:</span>
                    <strong className="font-mono text-slate-900">{selectedAnimal.pedigreePath}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Birth Month/Year:</span>
                    <strong className="text-slate-900">{selectedAnimal.birthMonthYearStr}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Age at Year {selectedYear}:</span>
                    <strong className="text-amber-800">
                      {getAnimalStats(selectedAnimal).ageMonths} Months ({getAnimalStats(selectedAnimal).ageYears} Yrs)
                    </strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Daily Milk Capacity:</span>
                    <strong className="text-emerald-700">
                      {getAnimalStats(selectedAnimal).dailyMilk}
                    </strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Asset Valuation (Yr {selectedYear}):</span>
                    <strong className="text-slate-900">
                      ₹{getAnimalStats(selectedAnimal).assetVal.toLocaleString("en-IN")}
                    </strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Dam (Mother):</span>
                    <span className="font-mono text-slate-800 font-semibold">
                      {selectedAnimal.motherId || "Founder (Unknown ancestry)"}
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Sire (Artificial Insemination):</span>
                    <span className="font-mono text-indigo-700 font-semibold">
                      {selectedAnimal.sireLabel}
                    </span>
                  </div>
                </div>

                {/* Tag Breakdown Box */}
                <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200">
                  <h4 className="text-xs font-bold text-amber-900 flex items-center gap-1.5 mb-2">
                    <Tag className="w-3.5 h-3.5 text-amber-600" />
                    HIRA Standard Tag Breakdown
                  </h4>
                  <div className="space-y-1 font-mono text-[11px] text-amber-950">
                    <div><strong>HIRA</strong>: Farm Prefix</div>
                    <div><strong>{selectedAnimal.seriesNumber}</strong>: Permanent Global Animal ID</div>
                    <div><strong>MUR</strong>: Murrah Purebred</div>
                    <div><strong>BUFF</strong>: Buffalo Species</div>
                    <div><strong>{selectedAnimal.tagId.split("_")[4]}</strong>: Date of Birth</div>
                    <div><strong>{selectedAnimal.pedigreePath}</strong>: Maternal Generation Lineage</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-slate-200 bg-white">
              <button
                onClick={() => setSelectedAnimal(null)}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 10-Year Actuarial Table Modal */}
      {showTableModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <TableIcon className="w-5 h-5 text-amber-600" />
                  ICAR-CIRB 10-Year Herd Headcount &amp; Wealth Projection
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  1 Seed Package (₹2,00,000) &bull; 15-Month Calving Interval &bull; 44m First Calving Maturity
                </p>
              </div>
              <button
                onClick={() => setShowTableModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-x-auto flex-1">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-700 font-bold">
                    <th className="p-2.5">Year</th>
                    <th className="p-2.5">Elapsed Months</th>
                    <th className="p-2.5">Milking Adults (≥44m)</th>
                    <th className="p-2.5">Growing Stock (&lt;44m)</th>
                    <th className="p-2.5">Total Herd</th>
                    <th className="p-2.5">Births in Yr</th>
                    <th className="p-2.5">Herd Asset Value (₹)</th>
                    <th className="p-2.5">Yearly Milk 30% (₹)</th>
                    <th className="p-2.5">Total Wealth (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {YEAR_MILESTONES.map((row) => (
                    <tr
                      key={row.year}
                      className={`hover:bg-amber-50/50 transition cursor-pointer ${
                        selectedYear === row.year ? "bg-amber-100/50 font-bold" : ""
                      }`}
                      onClick={() => {
                        setSelectedYear(row.year);
                        setShowTableModal(false);
                      }}
                    >
                      <td className="p-2.5 text-amber-800 font-bold">Year {row.year} ({row.calendarYear})</td>
                      <td className="p-2.5 font-mono">{row.elapsedMonths}m</td>
                      <td className="p-2.5 text-emerald-700 font-bold">{row.milkingAdults}</td>
                      <td className="p-2.5 text-slate-600">{row.growingStock}</td>
                      <td className="p-2.5 text-slate-900 font-black">{row.totalLiving} Head</td>
                      <td className="p-2.5 text-slate-700">{row.birthsInYear}</td>
                      <td className="p-2.5 font-mono font-semibold">₹{row.herdAssetValueINR.toLocaleString("en-IN")}</td>
                      <td className="p-2.5 font-mono text-emerald-700 font-bold">₹{row.yearlyMilk30INR.toLocaleString("en-IN")}</td>
                      <td className="p-2.5 font-mono text-slate-900 font-black">₹{row.totalWealthINR.toLocaleString("en-IN")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
              <button
                onClick={() => setShowTableModal(false)}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition"
              >
                Close Table
              </button>
            </div>
          </div>
        </div>
      )}

      <MarketplaceSwitcher currentMarketplaceId="page-12" />
    </div>
  );
}

// -------------------------------------------------------------------------
// SUBCOMPONENT: Parent-to-Child Pedigree Card (Screenshot Style)
// -------------------------------------------------------------------------
function ParentChildCard({
  animal,
  stats,
  onClick,
  isSelected,
  isMatriarch = false,
  isSeedCalfBadge = false,
  isCompact = false,
}: {
  animal: PedigreeAnimal;
  stats: {
    isBorn: boolean;
    ageMonths: number;
    ageDays: number;
    ageYears: string;
    lifecycleStatus: string;
    statusColor: string;
    assetVal: number;
    dailyMilk: string;
  };
  onClick: () => void;
  isSelected?: boolean;
  isMatriarch?: boolean;
  isSeedCalfBadge?: boolean;
  isCompact?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer bg-white rounded-2xl border transition-all duration-200 flex flex-col items-center text-center relative select-none ${
        isCompact ? "w-40 p-2.5" : "w-48 p-3.5"
      } ${
        !stats.isBorn
          ? "opacity-35 grayscale border-dashed border-slate-300"
          : isSelected
          ? "border-amber-500 ring-2 ring-amber-500/20 shadow-xl -translate-y-1"
          : "border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:border-slate-300"
      }`}
    >
      {/* Top Left Status Indicator Dot */}
      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
        <span
          className={`w-2 h-2 rounded-full ${stats.statusColor} ring-2 ring-white shadow-xs`}
        ></span>
        {isMatriarch && (
          <span className="text-[8px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-1 py-0.2 rounded border border-amber-200">
            Matriarch A
          </span>
        )}
        {isSeedCalfBadge && (
          <span className="text-[8px] font-black uppercase tracking-wider text-rose-700 bg-rose-50 px-1 py-0.2 rounded border border-rose-200">
            Seed Calf A.1
          </span>
        )}
      </div>

      {/* Top Right Series Badge */}
      <div className="absolute top-2.5 right-2.5 text-[8px] font-mono font-bold text-slate-400 bg-slate-100 px-1 py-0.2 rounded">
        #{animal.seriesNumber}
      </div>

      {/* Circular Profile Avatar */}
      <div className="relative mt-2 mb-2">
        <div
          className={`relative rounded-full overflow-hidden border-2 border-amber-500/90 shadow-inner ${
            isCompact ? "w-11 h-11" : "w-14 h-14"
          }`}
        >
          <Image src={animal.avatar} alt={animal.name} fill className="object-cover" />
        </div>
      </div>

      {/* Animal Name in Orange/Amber Bold */}
      <h3
        className={`font-black text-orange-600 group-hover:text-orange-700 transition-colors line-clamp-1 ${
          isCompact ? "text-[11px]" : "text-xs"
        }`}
      >
        {animal.name}
      </h3>

      {/* Approved HIRA Tag ID */}
      <div className="text-[8px] font-mono font-semibold text-slate-500 mt-0.5 line-clamp-1 max-w-full px-1">
        {animal.tagId}
      </div>

      {/* Lineage & Age */}
      <div className="mt-2 pt-2 border-t border-slate-100 w-full flex flex-col gap-0.5 text-[10px]">
        <div className="flex items-center justify-between text-slate-600">
          <span className="text-[9px] text-slate-400">Path:</span>
          <span className="font-mono font-black text-slate-800">{animal.pedigreePath}</span>
        </div>
        <div className="flex items-center justify-between text-slate-600">
          <span className="text-[9px] text-slate-400">Age:</span>
          <span className="font-bold text-amber-800">
            {stats.isBorn ? `${stats.ageMonths}m (${stats.ageYears}y)` : "Not Born"}
          </span>
        </div>
        <div className="flex items-center justify-between text-slate-600">
          <span className="text-[9px] text-slate-400">Role:</span>
          <span
            className={`text-[9px] font-bold truncate ${
              stats.lifecycleStatus === "Milking Adult"
                ? "text-emerald-700"
                : stats.lifecycleStatus === "Pregnant Heifer"
                ? "text-sky-700"
                : "text-slate-600"
            }`}
          >
            {stats.lifecycleStatus}
          </span>
        </div>
      </div>

      {/* Maternal Parent Info */}
      <div className="mt-1.5 w-full pt-1 border-t border-dashed border-slate-200 text-[9px] text-slate-400 truncate">
        {animal.motherId ? `Daughter of ${animal.motherId}` : "Founder Root"}
      </div>
    </div>
  );
}

// -------------------------------------------------------------------------
// SUBCOMPONENT: Sire Display Card
// -------------------------------------------------------------------------
function SireDisplayCard({
  name,
  tag,
  role,
  avatar,
}: {
  name: string;
  tag: string;
  role: string;
  avatar: string;
}) {
  return (
    <div className="w-48 p-3.5 bg-white rounded-2xl border border-indigo-200/90 shadow-md flex flex-col items-center text-center relative select-none">
      <div className="absolute top-2.5 left-2.5">
        <span className="w-2 h-2 rounded-full bg-indigo-500 ring-2 ring-white shadow-xs block"></span>
      </div>
      <div className="absolute top-2.5 right-2.5 text-[8px] font-bold text-indigo-700 bg-indigo-50 px-1 py-0.2 rounded border border-indigo-200">
        AI Sire
      </div>

      <div className="relative mt-2 mb-2">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-500 shadow-inner">
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>
      </div>

      <h3 className="font-black text-indigo-900 text-xs line-clamp-1">{name}</h3>
      <div className="text-[8px] font-mono font-semibold text-slate-500 mt-0.5">{tag}</div>

      <div className="mt-2 pt-2 border-t border-slate-100 w-full text-[9px] font-bold text-indigo-700">
        {role}
      </div>
    </div>
  );
}
