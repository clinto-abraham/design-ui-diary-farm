"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  Dna,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Milk,
  Scale,
  Award,
  Layers,
  Calendar,
  Tag,
  CircleDot,
  Compass,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";
import { FamilyTreeNav } from "@/components/FamilyTreeNav";

interface RadialNode {
  id: string;
  tagId: string;
  name: string;
  ring: "Core (Year 1 Starter)" | "Ring 1 (Years 2-4)" | "Ring 2 (Years 5-7)" | "Ring 3 (Years 8-10)";
  year: string;
  age: string;
  category: string;
  status: string;
  dailyYield: string;
  fatPercent: string;
  color: string;
  avatar: string;
  dam: string;
  sire: string;
}

const RADIAL_DATA: RadialNode[] = [
  // Core (Year 1 Starter) - Exactly 2 Starter Animals
  {
    id: "core-01",
    tagId: "HIRA_A1_OCT26_BUFF_MUR_35",
    name: "Foundation Dam Ganga",
    ring: "Core (Year 1 Starter)",
    year: "Year 1 (2026)",
    age: "48 Months (4.0 Yrs)",
    category: "Foundation Mother",
    status: "Active Milking",
    dailyYield: "17.5 L/day",
    fatPercent: "8.1%",
    color: "from-amber-500 to-amber-700",
    avatar: "/Murrah_buffalo.JPG",
    dam: "Hisar Elite Line #4",
    sire: "SAG Rohtak Stud",
  },
  {
    id: "core-02",
    tagId: "HIRA_B1_OCT26_CALF_MUR_35",
    name: "Foundation Calf Jamuna",
    ring: "Core (Year 1 Starter)",
    year: "Year 1 (2026)",
    age: "65 Days (2.2 Mo)",
    category: "Foundation Calf",
    status: "Growing Calf",
    dailyYield: "NA (Calf)",
    fatPercent: "NA",
    color: "from-orange-500 to-rose-600",
    avatar: "/Kid_Buffalo.jpg",
    dam: "HIRA_A1_OCT26_BUFF_MUR_35",
    sire: "SAG Rohtak Stud",
  },

  // Ring 1 (Years 2-4)
  {
    id: "ring1-01",
    tagId: "HIRA_C1_OCT27_CALF_MUR_12",
    name: "Gen-1 Saraswati",
    ring: "Ring 1 (Years 2-4)",
    year: "Year 2 (2027)",
    age: "12 Months (1.0 Yr)",
    category: "Gen-1 Heifer",
    status: "Pregnant Heifer",
    dailyYield: "NA",
    fatPercent: "NA",
    color: "from-emerald-500 to-teal-700",
    avatar: "/side_buffalo_kid.webp",
    dam: "HIRA_A1_OCT26_BUFF_MUR_35",
    sire: "SAG_AI_INDRA_95XX",
  },
  {
    id: "ring1-02",
    tagId: "HIRA_D1_OCT28_CALF_MUR_18",
    name: "Gen-1 Kaveri",
    ring: "Ring 1 (Years 2-4)",
    year: "Year 3 (2028)",
    age: "3 Months (90 Days)",
    category: "Gen-1 Calf",
    status: "Growing Calf",
    dailyYield: "NA",
    fatPercent: "NA",
    color: "from-teal-500 to-emerald-800",
    avatar: "/Kid_Buffalo.jpg",
    dam: "HIRA_A1_OCT26_BUFF_MUR_35",
    sire: "SAG_AI_INDRA_95XX",
  },
  {
    id: "ring1-03",
    tagId: "HIRA_E1_DEC28_GCALF_MUR_01",
    name: "Gen-2 Narmada",
    ring: "Ring 1 (Years 2-4)",
    year: "Year 3 (2028)",
    age: "1 Month (30 Days)",
    category: "Gen-2 Grandcalf",
    status: "Growing Calf",
    dailyYield: "NA",
    fatPercent: "NA",
    color: "from-cyan-500 to-blue-700",
    avatar: "/Kid_Buffalo.jpg",
    dam: "HIRA_B1_OCT26_CALF_MUR_35",
    sire: "SAG_AI_VIKRAM_95XX",
  },

  // Ring 2 (Years 5-7)
  {
    id: "ring2-01",
    tagId: "HIRA_G1_OCT30_BUFF_MUR_51",
    name: "Gen-2 Godavari (Milking)",
    ring: "Ring 2 (Years 5-7)",
    year: "Year 5 (2030)",
    age: "24 Months (2.0 Yrs)",
    category: "Gen-2 Milking Cow",
    status: "Active Milking",
    dailyYield: "18.0 L/day",
    fatPercent: "8.3%",
    color: "from-indigo-500 to-purple-700",
    avatar: "/Murrah_buffalo.JPG",
    dam: "HIRA_C1_OCT27_CALF_MUR_12",
    sire: "NDDB Bull Arjun",
  },
  {
    id: "ring2-02",
    tagId: "HIRA_H1_NOV31_GCALF_MUR_09",
    name: "Gen-3 Tapti",
    ring: "Ring 2 (Years 5-7)",
    year: "Year 6 (2031)",
    age: "6 Months (180 Days)",
    category: "Gen-3 Heifer",
    status: "Growing Heifer",
    dailyYield: "NA",
    fatPercent: "NA",
    color: "from-violet-500 to-fuchsia-700",
    avatar: "/Kid_Buffalo.jpg",
    dam: "HIRA_E1_DEC28_GCALF_MUR_01",
    sire: "SAG_AI_INDRA_95XX",
  },

  // Ring 3 (Years 8-10)
  {
    id: "ring3-01",
    tagId: "HIRA_K1_OCT33_BUFF_MUR_88",
    name: "Gen-3 Krishna Supreme",
    ring: "Ring 3 (Years 8-10)",
    year: "Year 8 (2033)",
    age: "28 Months (2.3 Yrs)",
    category: "Gen-3 Elite Cow",
    status: "Peak Milking",
    dailyYield: "20.5 L/day",
    fatPercent: "8.4%",
    color: "from-rose-500 to-pink-700",
    avatar: "/Murrah_buffalo.JPG",
    dam: "HIRA_G1_OCT30_BUFF_MUR_51",
    sire: "NDDB Stud Brahma",
  },
  {
    id: "ring3-02",
    tagId: "HIRA_L1_DEC35_BUFF_MUR_99",
    name: "Gen-4 Matriarch Heir",
    ring: "Ring 3 (Years 8-10)",
    year: "Year 10 (2035)",
    age: "20 Months (1.6 Yrs)",
    category: "Gen-4 Heifer",
    status: "Pregnant Heifer",
    dailyYield: "19.0 L (projected)",
    fatPercent: "8.2%",
    color: "from-amber-600 to-rose-700",
    avatar: "/Murrah_buffalo.JPG",
    dam: "HIRA_K1_OCT33_BUFF_MUR_88",
    sire: "SAG Progeny Stud",
  },
];

export default function MarketplacePage14() {
  const [selectedNode, setSelectedNode] = useState<RadialNode>(RADIAL_DATA[0]);
  const [selectedRingFilter, setSelectedRingFilter] = useState<string>("All");

  const filteredNodes =
    selectedRingFilter === "All"
      ? RADIAL_DATA
      : RADIAL_DATA.filter((n) => n.ring === selectedRingFilter);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <FamilyTreeNav currentId="page-14" />

      {/* Header */}
      <section className="bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-300">
                Design 03 &bull; Concentric Sunburst Wheel
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Radial Generational Orbits &bull; 10-Year Genetic Expansion
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Radial Sunburst Pedigree Wheel
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Visualizes exponential 10-year herd compounding radiating outward from the <strong className="text-indigo-700">2 Year 1 starter animals</strong> at the core to 41 descendants in the outer orbits.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-2xl border border-slate-200 text-xs">
            <div className="px-3 py-1 bg-white rounded-xl shadow-xs">
              <span className="text-slate-400 block text-[10px]">Starter Core</span>
              <span className="font-bold text-amber-800">2 Animals</span>
            </div>
            <div className="px-3 py-1 bg-white rounded-xl shadow-xs">
              <span className="text-slate-400 block text-[10px]">Orbits Traced</span>
              <span className="font-bold text-indigo-700">4 Generations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dual-Pane Layout: Interactive Sunburst Orbit & Dossier Card */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Radial Visual Orbits (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-4 h-4 text-indigo-600" /> Concentric Generational Orbits
            </h3>
            <span className="text-xs text-slate-500 font-medium">Click any node to inspect</span>
          </div>

          {/* Circular SVG / Canvas Container */}
          <div className="relative w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] flex items-center justify-center my-6">
            {/* Outer Orbit Ring 3 */}
            <div className="absolute inset-0 rounded-full border border-dashed border-rose-300 pointer-events-none animate-spin-slow opacity-60"></div>
            {/* Middle Orbit Ring 2 */}
            <div className="absolute inset-12 rounded-full border border-dashed border-indigo-300 pointer-events-none opacity-70"></div>
            {/* Inner Orbit Ring 1 */}
            <div className="absolute inset-24 rounded-full border border-slate-300 pointer-events-none"></div>

            {/* Orbit Label Tags */}
            <span className="absolute top-1 text-[9px] font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
              Years 8-10 Orbit
            </span>
            <span className="absolute top-12 text-[9px] font-bold text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
              Years 5-7 Orbit
            </span>
            <span className="absolute top-24 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              Years 2-4 Orbit
            </span>

            {/* CENTER CORE: 2 STARTER ANIMALS (YEAR 1) */}
            <div className="relative z-20 flex items-center gap-3 bg-gradient-to-br from-amber-100 to-amber-200 p-3 rounded-2xl border-2 border-amber-500 shadow-md">
              {RADIAL_DATA.slice(0, 2).map((starter) => (
                <button
                  key={starter.id}
                  onClick={() => setSelectedNode(starter)}
                  className={`relative p-1.5 rounded-xl transition-transform hover:scale-110 ${
                    selectedNode.id === starter.id
                      ? "ring-3 ring-amber-600 bg-white"
                      : "bg-white/80"
                  }`}
                  title={`${starter.name} (${starter.year})`}
                >
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-600">
                    <Image src={starter.avatar} alt={starter.name} fill className="object-cover" />
                  </div>
                  <span className="block text-[9px] font-bold text-slate-800 text-center mt-1 max-w-[60px] truncate">
                    {starter.name.split(" ")[1]}
                  </span>
                </button>
              ))}
            </div>

            {/* ORBIT NODES POSITIONED AROUND THE CIRCUMFERENCE */}
            {/* Ring 1 Nodes */}
            <RadialOrbitalButton
              node={RADIAL_DATA[2]} // Saraswati
              isSelected={selectedNode.id === RADIAL_DATA[2].id}
              onClick={() => setSelectedNode(RADIAL_DATA[2])}
              className="top-28 left-12"
            />
            <RadialOrbitalButton
              node={RADIAL_DATA[3]} // Kaveri
              isSelected={selectedNode.id === RADIAL_DATA[3].id}
              onClick={() => setSelectedNode(RADIAL_DATA[3])}
              className="bottom-28 left-16"
            />
            <RadialOrbitalButton
              node={RADIAL_DATA[4]} // Narmada
              isSelected={selectedNode.id === RADIAL_DATA[4].id}
              onClick={() => setSelectedNode(RADIAL_DATA[4])}
              className="top-28 right-12"
            />

            {/* Ring 2 Nodes */}
            <RadialOrbitalButton
              node={RADIAL_DATA[5]} // Godavari
              isSelected={selectedNode.id === RADIAL_DATA[5].id}
              onClick={() => setSelectedNode(RADIAL_DATA[5])}
              className="bottom-14 right-14"
            />
            <RadialOrbitalButton
              node={RADIAL_DATA[6]} // Tapti
              isSelected={selectedNode.id === RADIAL_DATA[6].id}
              onClick={() => setSelectedNode(RADIAL_DATA[6])}
              className="top-14 right-20"
            />

            {/* Ring 3 Nodes */}
            <RadialOrbitalButton
              node={RADIAL_DATA[7]} // Krishna Supreme
              isSelected={selectedNode.id === RADIAL_DATA[7].id}
              onClick={() => setSelectedNode(RADIAL_DATA[7])}
              className="top-4 left-24"
            />
            <RadialOrbitalButton
              node={RADIAL_DATA[8]} // Matriarch Heir
              isSelected={selectedNode.id === RADIAL_DATA[8].id}
              onClick={() => setSelectedNode(RADIAL_DATA[8])}
              className="bottom-4 right-24"
            />
          </div>

          {/* Quick Legend */}
          <div className="w-full flex items-center justify-around pt-4 border-t border-slate-100 text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-500"></span> Year 1 Starters (Core)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span> Years 2-4 Calves
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-indigo-500"></span> Years 5-7 Grandcalves
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span> Years 8-10 Multipliers
            </span>
          </div>
        </div>

        {/* Right: Selected Node Telemetry & Lineage Card (5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Selected Bovine Dossier
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              {selectedNode.ring}
            </span>
          </div>

          {/* Profile Header */}
          <div className="flex items-center gap-4 mt-5">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-500 shadow-md">
              <Image src={selectedNode.avatar} alt={selectedNode.name} fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">{selectedNode.name}</h2>
              <div className="text-xs font-mono font-bold text-amber-700 mt-0.5">
                Tag ID: {selectedNode.tagId}
              </div>
              <span className="inline-block mt-1 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                {selectedNode.status}
              </span>
            </div>
          </div>

          {/* Details Table: Year 1 / Age / Yield */}
          <div className="mt-6 space-y-3 bg-slate-50 rounded-2xl p-4 border border-slate-200/80 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-200/60">
              <span className="text-slate-500 font-medium">Timeline Inception:</span>
              <strong className="text-slate-900 font-bold">{selectedNode.year}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200/60">
              <span className="text-slate-500 font-medium">Recorded Age:</span>
              <strong className="text-amber-800 font-bold">{selectedNode.age}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200/60">
              <span className="text-slate-500 font-medium">Herd Category:</span>
              <span className="text-slate-800 font-semibold">{selectedNode.category}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200/60">
              <span className="text-slate-500 font-medium">Daily Milk Capacity:</span>
              <strong className="text-emerald-700 font-bold">{selectedNode.dailyYield}</strong>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200/60">
              <span className="text-slate-500 font-medium">Fat Content:</span>
              <span className="text-slate-900 font-semibold">{selectedNode.fatPercent}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200/60">
              <span className="text-slate-500 font-medium">Maternal Dam:</span>
              <span className="font-mono text-slate-700">{selectedNode.dam}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500 font-medium">Artificial Insemination Sire:</span>
              <span className="font-mono text-indigo-700">{selectedNode.sire}</span>
            </div>
          </div>

          {/* Lineage Compounding Milestone */}
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200">
            <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs mb-1">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              10-Year Sunburst Lineage Role
            </div>
            <p className="text-xs text-indigo-800 leading-relaxed">
              Descendant from the two Year-1 foundation animals. Under our 95% sex-sorted genetics program, female progeny yield compounded milk dividends and capital growth over the 10-year term.
            </p>
          </div>
        </div>
      </main>

      <MarketplaceSwitcher currentMarketplaceId="page-14" />
    </div>
  );
}

function RadialOrbitalButton({
  node,
  isSelected,
  onClick,
  className = "",
}: {
  node: RadialNode;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`absolute z-10 transition-transform duration-200 hover:scale-125 focus:outline-none ${className}`}
      title={`${node.name} (${node.year})`}
    >
      <div
        className={`relative w-11 h-11 rounded-full overflow-hidden border-2 shadow-md transition-all ${
          isSelected
            ? "border-amber-600 ring-4 ring-amber-400/40 scale-110"
            : "border-white hover:border-amber-400"
        }`}
      >
        <Image src={node.avatar} alt={node.name} fill className="object-cover" />
      </div>
      <span className="block text-[8px] font-bold text-slate-700 bg-white/90 px-1 py-0.2 rounded shadow-xs mt-0.5 max-w-[55px] truncate">
        {node.name.split(" ")[1]}
      </span>
    </button>
  );
}
