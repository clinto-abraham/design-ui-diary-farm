"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Filter,
  RefreshCw,
  Plus,
  Table as TableIcon,
  LayoutGrid,
  ChevronDown,
  MoreVertical,
  CheckCircle2,
  Clock,
  Sparkles,
  Tag,
  Copy,
  Check,
  Milk,
  Building2,
  DollarSign,
  Layers,
  ArrowRight,
  SlidersHorizontal,
  X,
  ExternalLink,
  ShieldCheck,
  QrCode,
  Eye,
  Edit3,
  Calendar,
} from "lucide-react";
import { AdminSwitcher } from "@/components/AdminSwitcher";

interface AnimalPackage {
  id: string;
  shortId: string;
  title: string;
  packageCode: string;
  breed: string;
  species: "BUFF" | "COW" | "GOAT";
  composition: string;
  compositionDetail: string;
  headCount: number;
  animalTags: string[];
  priceINR: number;
  paymentType: "Full Payment (100%)" | "Milestone Escrow (50/50)" | "Advance Booking (25%)";
  expectedYieldRange: string;
  shed: string;
  status: "AVAILABLE" | "RESERVED" | "IN_TRANSIT" | "SOLD";
  marketSync: boolean;
  image: string;
  createdDate: string;
}

const INITIAL_PACKAGES: AnimalPackage[] = [
  {
    id: "6adf2fb17219bd8f04c2d237",
    shortId: "MUR-01",
    title: "Pure Murrah Dairy Unit (MUR-01)",
    packageCode: "PACK_1_MUR_BUFF_OCT26_SUPER30",
    breed: "Pure Murrah",
    species: "BUFF",
    composition: "1 Buffalo + 1 Accompanying Calf",
    compositionDetail: "1 Milking Dam (40m, 2nd Lactation) + 1 Female Calf (2m)",
    headCount: 2,
    animalTags: ["6ad744b98eddc5f0d1abaa6d", "HIRA_A1_OCT26_BUFF_MUR_35"],
    priceINR: 200000,
    paymentType: "Full Payment (100%)",
    expectedYieldRange: "14 - 17.5 L/Day",
    shed: "Shed 2 - Stanchion 14",
    status: "AVAILABLE",
    marketSync: true,
    image: "/Murrah_buffalo.JPG",
    createdDate: "24 Oct 2026",
  },
  {
    id: "6adf2fa33f4e0552a00c8b31",
    shortId: "MUR-PRIME-1",
    title: "Murrah Prime #1 (Dual-Milker Lot)",
    packageCode: "PACK_2_MUR_BUFF_OCT26_SUPER35",
    breed: "Murrah",
    species: "BUFF",
    composition: "2 Buffaloes + 2 Calves",
    compositionDetail: "2 Milking Adult Dams (38m & 42m) + 2 Weaned Female Calves",
    headCount: 4,
    animalTags: ["A1_JAN26_1_MUR", "A1_JAN26_2_MUR"],
    priceINR: 400000,
    paymentType: "Full Payment (100%)",
    expectedYieldRange: "17 - 19 L/Day",
    shed: "Shed 1 - Heifer & Calf Nursery - Bay A",
    status: "AVAILABLE",
    marketSync: true,
    image: "/side_buffalo_kid.webp",
    createdDate: "25 Oct 2026",
  },
  {
    id: "6adf2fa33f4e0552a00c8b32",
    shortId: "MUR-PRIME-2",
    title: "Murrah Prime #2 (High-Lactation Unit)",
    packageCode: "PACK_3_MUR_BUFF_OCT26_SUPER30",
    breed: "Murrah",
    species: "BUFF",
    composition: "2 Buffaloes + 2 Calves",
    compositionDetail: "2 Elite High-Yield Dams + 2 Female Calves (Sex-Sorted)",
    headCount: 4,
    animalTags: ["A1_JAN26_2_MUR", "HIRA_B1_OCT26_BUFF_MUR_43"],
    priceINR: 400000,
    paymentType: "Full Payment (100%)",
    expectedYieldRange: "14 - 17.5 L/Day",
    shed: "Shed 1 - Heifer & Calf Nursery - Bay A",
    status: "AVAILABLE",
    marketSync: true,
    image: "/Murrah_buffalo.JPG",
    createdDate: "26 Oct 2026",
  },
  {
    id: "6adf2fa33f4e0552a00c8b33",
    shortId: "MUR-PRIME-3",
    title: "Murrah Prime #3 (Specialist Series)",
    packageCode: "PACK_4_MUR_BUFF_OCT26_SUPER30",
    breed: "Murrah",
    species: "BUFF",
    composition: "2 Buffaloes + 2 Calves",
    compositionDetail: "2 Grade-A Dams with Rumination IoT Collars + 2 Calves",
    headCount: 4,
    animalTags: ["A1_JAN26_35_MUR", "HIRA_A2_OCT26_BUFF_MUR_44"],
    priceINR: 400000,
    paymentType: "Full Payment (100%)",
    expectedYieldRange: "14 - 17.5 L/Day",
    shed: "Shed 1 - Heifer & Calf Nursery - Bay B",
    status: "AVAILABLE",
    marketSync: true,
    image: "/Kid_Buffalo.jpg",
    createdDate: "27 Oct 2026",
  },
  {
    id: "6adf2fb99812cc11f04e4491",
    shortId: "GIR-01",
    title: "Vedic Gir A2 Indigenous Milker",
    packageCode: "PACK_5_GIR_COW_OCT26_PREMIUM",
    breed: "Gir Indigenous Cow",
    species: "COW",
    composition: "1 Cow + 1 Female Calf",
    compositionDetail: "Certified A2 Beta-Casein DNA Tested + IoT Rumination Collar",
    headCount: 2,
    animalTags: ["HIRA_GIR_OCT26_01", "HIRA_GIR_OCT26_01_CALF"],
    priceINR: 150000,
    paymentType: "Full Payment (100%)",
    expectedYieldRange: "12 - 15 L/Day",
    shed: "Shed 3 - Indigenous Vedic Pavilion",
    status: "RESERVED",
    marketSync: true,
    image: "/side_buffalo_kid.webp",
    createdDate: "28 Oct 2026",
  },
  {
    id: "6adf2fbee334aa77b02c8819",
    shortId: "MUR-TRANSIT-4",
    title: "Murrah Mandi Direct Batch Lot #4",
    packageCode: "PACK_6_MUR_BUFF_OCT26_SUPER35",
    breed: "Pure Murrah",
    species: "BUFF",
    composition: "1 Buffalo + 1 Calf",
    compositionDetail: "Quarantine Pass Verified • Rohtak Direct Lineage",
    headCount: 2,
    animalTags: ["HIRA_MUR_TRANSIT_99", "HIRA_CALF_TRANSIT_99"],
    priceINR: 200000,
    paymentType: "Advance Booking (25%)",
    expectedYieldRange: "15 - 18 L/Day",
    shed: "Shed 2 - Stanchion 22",
    status: "IN_TRANSIT",
    marketSync: false,
    image: "/Murrah_buffalo.JPG",
    createdDate: "29 Oct 2026",
  },
];

export default function ListAllAnimalsPackagesAdminPage() {
  const [packages, setPackages] = useState<AnimalPackage[]>(INITIAL_PACKAGES);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("ALL");
  const [selectedStatus, setSelectedStatus] = useState("ALL");
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [copiedTag, setCopiedTag] = useState<string | null>(null);

  // Modal States
  const [selectedPackage, setSelectedPackage] = useState<AnimalPackage | null>(null);
  const [showOnboardModal, setShowOnboardModal] = useState(false);

  // New Package Form State
  const [newTitle, setNewTitle] = useState("");
  const [newBreed, setNewBreed] = useState("Pure Murrah");
  const [newPrice, setNewPrice] = useState(200000);
  const [newShed, setNewShed] = useState("Shed 2 - Stanchion 16");
  const [newYield, setNewYield] = useState("14 - 17.5 L/Day");

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTag(text);
    setTimeout(() => setCopiedTag(null), 2000);
  };

  // Filtered packages
  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      const matchesSearch =
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.packageCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.animalTags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        pkg.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.shed.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesBreed =
        selectedBreed === "ALL" ||
        (selectedBreed === "MURRAH" && pkg.species === "BUFF") ||
        (selectedBreed === "GIR" && pkg.species === "COW") ||
        (selectedBreed === "GOAT" && pkg.species === "GOAT");

      const matchesStatus = selectedStatus === "ALL" || pkg.status === selectedStatus;

      return matchesSearch && matchesBreed && matchesStatus;
    });
  }, [packages, searchQuery, selectedBreed, selectedStatus]);

  const handleAddPackage = (e: React.FormEvent) => {
    e.preventDefault();
    const created: AnimalPackage = {
      id: Math.random().toString(16).substring(2, 26),
      shortId: `MUR-0${packages.length + 1}`,
      title: newTitle || `Murrah Dairy Package #${packages.length + 1}`,
      packageCode: `PACK_${packages.length + 1}_MUR_BUFF_OCT26_SUPER30`,
      breed: newBreed,
      species: "BUFF",
      composition: "1 Buffalo + 1 Accompanying Calf",
      compositionDetail: "1 Milking Dam (~40m) + 1 Starter Female Calf (2m)",
      headCount: 2,
      animalTags: [`HIRA_A1_OCT26_BUFF_MUR_${packages.length + 10}`],
      priceINR: Number(newPrice),
      paymentType: "Full Payment (100%)",
      expectedYieldRange: newYield,
      shed: newShed,
      status: "AVAILABLE",
      marketSync: true,
      image: "/Murrah_buffalo.JPG",
      createdDate: "Today",
    };
    setPackages([created, ...packages]);
    setShowOnboardModal(false);
    setNewTitle("");
  };

  return (
    <div className="min-h-screen bg-[#f3f5f8] text-slate-800 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Top Admin Switcher Navigation */}
      <AdminSwitcher currentAdminId="page-2" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-5">
        
        {/* ========================================================================= */}
        {/* HERO DARK BANNER: Priority 2: Livestock Management & Packages */}
        {/* ========================================================================= */}
        <div className="relative rounded-3xl bg-[#09152e] text-white p-6 sm:p-8 shadow-2xl overflow-hidden border border-slate-800">
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            
            {/* Title & Badge */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Priority 2: Livestock Management & Packages</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative h-10 w-32 hidden sm:block">
                  <Image
                    src="/removebg-logo.png"
                    alt="Hira Farm"
                    fill
                    className="object-contain filter brightness-110 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]"
                  />
                </div>
                <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                  List All Animals Packages
                </h1>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Complete catalog of configured animal packages, multi-animal ear tag series, pricing, and live marketplace synchronization.
              </p>

              {/* Quick Telemetry Pills (Mobile Friendly) */}
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px]">
                <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-300">
                  Total Active Lots: <strong className="text-white">{packages.length}</strong>
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-emerald-300">
                  Marketplace Live: <strong>{packages.filter((p) => p.status === "AVAILABLE").length} Units</strong>
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-cyan-950/70 border border-cyan-500/40 text-cyan-300">
                  Ear-Tags Mapped: <strong>100% Verified</strong>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 self-start lg:self-center">
              <button
                onClick={handleRefresh}
                className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700/90 transition-all flex items-center gap-2 shadow-sm"
              >
                <RefreshCw className={`w-4 h-4 text-cyan-400 ${isRefreshing ? "animate-spin" : ""}`} />
                <span>Refresh</span>
              </button>

              <button
                onClick={() => setShowOnboardModal(true)}
                className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#0099ff] hover:bg-[#0088ee] text-white shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2 active:scale-95"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Onboard New Animals Package</span>
              </button>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* FILTER & SEARCH TOOLBAR (Mobile Responsive & Intuitive) */}
        {/* ========================================================================= */}
        <div className="rounded-2xl bg-white border border-slate-200/80 p-3 sm:p-4 shadow-sm space-y-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by package name, ear tag (e.g. A1_OCT26_10_MUR), breed..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Controls Row */}
            <div className="flex flex-wrap items-center gap-2">
              
              {/* Breed Selector */}
              <div className="relative inline-block">
                <select
                  value={selectedBreed}
                  onChange={(e) => setSelectedBreed(e.target.value)}
                  className="appearance-none pl-3.5 pr-8 py-2.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-bold text-slate-700 hover:border-slate-300 focus:outline-none cursor-pointer"
                >
                  <option value="ALL">All Breeds (ALL)</option>
                  <option value="MURRAH">🐃 Murrah Buffalo</option>
                  <option value="GIR">🐄 Gir A2 Cow</option>
                  <option value="GOAT">🐐 Beetal Goat</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Status Selector */}
              <div className="relative inline-block">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="appearance-none pl-3.5 pr-8 py-2.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-bold text-slate-700 hover:border-slate-300 focus:outline-none cursor-pointer"
                >
                  <option value="ALL">All Status (ALL)</option>
                  <option value="AVAILABLE">🟢 Available</option>
                  <option value="RESERVED">🟡 Reserved</option>
                  <option value="IN_TRANSIT">🔵 In Transit</option>
                  <option value="SOLD">⚪ Sold</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* View Switcher: Table vs Cards */}
              <div className="flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200">
                <button
                  onClick={() => setViewMode("table")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    viewMode === "table"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                  title="Table View (Full Specifications)"
                >
                  <TableIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Table</span>
                </button>

                <button
                  onClick={() => setViewMode("cards")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    viewMode === "cards"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                  title="Card View (Mobile Optimized)"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Cards (Carousel)</span>
                </button>
              </div>

            </div>

          </div>

          {/* Active Filter Badges */}
          {(selectedBreed !== "ALL" || selectedStatus !== "ALL" || searchQuery) && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
              <span className="text-slate-400 font-medium">Filtering by:</span>
              {searchQuery && (
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium flex items-center gap-1">
                  &ldquo;{searchQuery}&rdquo;
                  <button onClick={() => setSearchQuery("")} className="hover:text-red-500">✕</button>
                </span>
              )}
              {selectedBreed !== "ALL" && (
                <span className="px-2 py-0.5 rounded-md bg-cyan-50 text-cyan-800 font-medium flex items-center gap-1">
                  Breed: {selectedBreed}
                  <button onClick={() => setSelectedBreed("ALL")} className="hover:text-red-500">✕</button>
                </span>
              )}
              {selectedStatus !== "ALL" && (
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-medium flex items-center gap-1">
                  Status: {selectedStatus}
                  <button onClick={() => setSelectedStatus("ALL")} className="hover:text-red-500">✕</button>
                </span>
              )}
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedBreed("ALL");
                  setSelectedStatus("ALL");
                }}
                className="text-cyan-600 hover:underline text-[11px] font-bold ml-1"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* VIEW MODE 1: DATA TABLE VIEW (Styled to Exact Screenshot Spec) */}
        {/* ========================================================================= */}
        {viewMode === "table" && (
          <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                
                {/* Header Row */}
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                    <th className="py-3.5 px-4 min-w-[220px]">Package Selling Title</th>
                    <th className="py-3.5 px-4 min-w-[190px]">Breed & Composition</th>
                    <th className="py-3.5 px-4 min-w-[190px]">Generated Animal Tags</th>
                    <th className="py-3.5 px-4 min-w-[130px]">Price & Advance</th>
                    <th className="py-3.5 px-4 min-w-[110px]">Expected Yield</th>
                    <th className="py-3.5 px-4 min-w-[170px]">Shed</th>
                    <th className="py-3.5 px-4 min-w-[120px]">Status</th>
                    <th className="py-3.5 px-4 text-right min-w-[100px]">Actions</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-slate-100">
                  {filteredPackages.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="py-12 text-center text-slate-400">
                        No packages match your search or filter criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredPackages.map((pkg) => (
                      <tr
                        key={pkg.id}
                        className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                        onClick={() => setSelectedPackage(pkg)}
                      >
                        {/* 1. Package Title & ID */}
                        <td className="py-4 px-4 align-top">
                          <div className="font-bold text-slate-900 text-sm leading-snug group-hover:text-cyan-700 transition-colors">
                            {pkg.title}
                          </div>
                          <div className="font-mono text-[10px] text-slate-400 mt-1 flex items-center gap-1.5">
                            <span>ID:</span>
                            <span className="truncate max-w-[160px]">{pkg.id}</span>
                          </div>
                        </td>

                        {/* 2. Breed & Composition */}
                        <td className="py-4 px-4 align-top">
                          <div className="font-semibold text-slate-800 text-xs">
                            {pkg.breed}
                          </div>
                          <div className="mt-1.5">
                            <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-purple-50 text-purple-700 border border-purple-200/80">
                              {pkg.composition}
                            </span>
                          </div>
                        </td>

                        {/* 3. Generated Animal Tags */}
                        <td className="py-4 px-4 align-top">
                          <div className="space-y-1.5">
                            {pkg.animalTags.map((tag) => (
                              <button
                                key={tag}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  copyToClipboard(tag);
                                }}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-cyan-50/70 hover:bg-cyan-100 text-cyan-800 border border-cyan-200/70 transition-all"
                                title="Click to copy ear-tag"
                              >
                                <Tag className="w-3 h-3 text-cyan-600" />
                                <span className="truncate max-w-[140px]">{tag}</span>
                                {copiedTag === tag ? (
                                  <Check className="w-3 h-3 text-emerald-600 ml-0.5" />
                                ) : (
                                  <Copy className="w-3 h-3 text-cyan-500 opacity-60 hover:opacity-100 ml-0.5" />
                                )}
                              </button>
                            ))}
                          </div>
                        </td>

                        {/* 4. Price & Advance */}
                        <td className="py-4 px-4 align-top">
                          <div className="font-black text-slate-900 text-sm">
                            ₹{pkg.priceINR.toLocaleString("en-IN")}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">
                            {pkg.paymentType}
                          </div>
                        </td>

                        {/* 5. Expected Yield */}
                        <td className="py-4 px-4 align-top">
                          <div className="font-bold text-purple-700 text-xs">
                            {pkg.expectedYieldRange}
                          </div>
                        </td>

                        {/* 6. Shed Allocation */}
                        <td className="py-4 px-4 align-top">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                            <Building2 className="w-3 h-3 text-slate-500 flex-shrink-0" />
                            <span className="line-clamp-2">{pkg.shed}</span>
                          </span>
                        </td>

                        {/* 7. Status */}
                        <td className="py-4 px-4 align-top">
                          {pkg.status === "AVAILABLE" && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              AVAILABLE
                            </span>
                          )}
                          {pkg.status === "RESERVED" && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              RESERVED
                            </span>
                          )}
                          {pkg.status === "IN_TRANSIT" && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                              IN TRANSIT
                            </span>
                          )}
                          {pkg.status === "SOLD" && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                              SOLD OUT
                            </span>
                          )}
                        </td>

                        {/* 8. Actions */}
                        <td className="py-4 px-4 align-top text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedPackage(pkg);
                              }}
                              className="px-3 py-1.5 rounded-lg text-xs font-bold text-cyan-700 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 transition-colors"
                            >
                              Update
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedPackage(pkg);
                              }}
                              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
                              title="More options"
                            >
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>

              </table>
            </div>

            {/* Table Footer Summary */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
              <div>
                Showing <strong className="text-slate-700">{filteredPackages.length}</strong> of{" "}
                <strong className="text-slate-700">{packages.length}</strong> livestock packages
              </div>
              <div className="flex items-center gap-2">
                <span>Synchronized with Hira Farm Marketplace API</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 2: CARDS / CAROUSEL VIEW (Mobile Friendly Touch Interface) */}
        {/* ========================================================================= */}
        {viewMode === "cards" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between cursor-pointer group"
              >
                {/* Image & Status Top Header */}
                <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold shadow-md ${
                        pkg.status === "AVAILABLE"
                          ? "bg-emerald-500 text-slate-950"
                          : pkg.status === "RESERVED"
                          ? "bg-amber-400 text-slate-950"
                          : "bg-blue-500 text-white"
                      }`}
                    >
                      {pkg.status}
                    </span>
                  </div>

                  {/* Species & Headcount */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border border-slate-700">
                    {pkg.species === "BUFF" ? "🐃 MURRAH" : "🐄 COW"} • {pkg.headCount} HEAD
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-bold text-base leading-tight drop-shadow-sm">{pkg.title}</h3>
                    <div className="text-[10px] text-slate-300 font-mono mt-0.5 truncate">
                      ID: {pkg.id}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 space-y-3 flex-1">
                  
                  {/* Composition pill */}
                  <div className="p-2 rounded-xl bg-purple-50/80 border border-purple-200 text-xs">
                    <div className="font-bold text-purple-900">{pkg.composition}</div>
                    <div className="text-[11px] text-purple-700 mt-0.5">{pkg.compositionDetail}</div>
                  </div>

                  {/* Ear Tag Badges */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Assigned Ear-Tags
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {pkg.animalTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-cyan-50 border border-cyan-200 text-cyan-800 text-[11px] font-mono truncate max-w-[180px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Yield Range</span>
                      <div className="font-bold text-purple-700">{pkg.expectedYieldRange}</div>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Shed Bay</span>
                      <div className="font-semibold text-slate-700 truncate">{pkg.shed}</div>
                    </div>
                  </div>

                </div>

                {/* Card Footer Price & Action */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-base font-black text-slate-900">
                      ₹{pkg.priceINR.toLocaleString("en-IN")}
                    </div>
                    <div className="text-[10px] text-slate-500">{pkg.paymentType}</div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPackage(pkg);
                    }}
                    className="px-4 py-2 rounded-xl font-bold text-xs bg-cyan-600 hover:bg-cyan-500 text-white shadow-sm transition-all flex items-center gap-1.5"
                  >
                    <span>Update Lot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* MODAL 1: UPDATE & INSPECT PACKAGE DETAILS */}
      {/* ========================================================================= */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-cyan-600 font-bold uppercase tracking-wider">
                  PACKAGE SPECIFICATION & DISPATCH
                </span>
                <h3 className="text-xl font-bold text-slate-900">{selectedPackage.title}</h3>
              </div>
            </div>

            {/* Details List */}
            <div className="mt-5 space-y-4 text-xs">
              
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Commercial Package ID:</span>
                  <span className="font-mono text-slate-800 font-bold">{selectedPackage.packageCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Database UUID:</span>
                  <span className="font-mono text-slate-600">{selectedPackage.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Fixed Package Price:</span>
                  <span className="font-bold text-slate-900 text-sm">₹{selectedPackage.priceINR.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Composition */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">Composition & Animals:</label>
                <div className="p-3 rounded-xl bg-purple-50 text-purple-900 font-semibold border border-purple-200">
                  {selectedPackage.compositionDetail}
                </div>
              </div>

              {/* Animal Ear Tags */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">Assigned Animal Tags:</label>
                <div className="space-y-1.5">
                  {selectedPackage.animalTags.map((tag) => (
                    <div
                      key={tag}
                      className="p-2.5 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-900 flex items-center justify-between font-mono"
                    >
                      <span>{tag}</span>
                      <button
                        onClick={() => copyToClipboard(tag)}
                        className="text-[11px] text-cyan-700 hover:text-cyan-900 font-sans font-bold flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" /> Copy Tag
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status & Shed Location Toggle */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Current Shed Assignment</label>
                  <input
                    type="text"
                    defaultValue={selectedPackage.shed}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Expected Daily Yield</label>
                  <input
                    type="text"
                    defaultValue={selectedPackage.expectedYieldRange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 font-bold text-purple-700"
                  />
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedPackage(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Package ${selectedPackage.shortId} configurations saved & synced with live Marketplace!`);
                  setSelectedPackage(null);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow-md transition-all"
              >
                Save & Sync Live Marketplace
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: ONBOARD NEW ANIMALS PACKAGE */}
      {/* ========================================================================= */}
      {showOnboardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            
            <button
              onClick={() => setShowOnboardModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Plus className="w-6 h-6 stroke-[3]" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-wider">
                  NEW ASSET BATCH ENTRY
                </span>
                <h3 className="text-xl font-bold text-slate-900">Onboard New Animals Package</h3>
              </div>
            </div>

            <form onSubmit={handleAddPackage} className="mt-5 space-y-4 text-xs">
              
              <div>
                <label className="font-bold text-slate-700 block mb-1">Package Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pure Murrah Dairy Unit (MUR-02)"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Breed & Species</label>
                  <select
                    value={newBreed}
                    onChange={(e) => setNewBreed(e.target.value)}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-xl bg-white"
                  >
                    <option value="Pure Murrah">Pure Murrah (BUFF)</option>
                    <option value="Gir Indigenous Cow">Gir A2 Cow (COW)</option>
                    <option value="Beetal Dairy Goat">Beetal Goat (GOAT)</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Fixed Package Price (INR)</label>
                  <input
                    type="number"
                    value={newPrice}
                    onChange={(e) => setNewPrice(Number(e.target.value))}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-xl font-bold text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Target Shed & Stanchion</label>
                  <input
                    type="text"
                    value={newShed}
                    onChange={(e) => setNewShed(e.target.value)}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Expected Daily Yield</label>
                  <input
                    type="text"
                    value={newYield}
                    onChange={(e) => setNewYield(e.target.value)}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-xl font-bold text-purple-700"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px] flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  Automatic ear-tag generation with ICAR-CIRB format (`HIRA_A1_OCT26_BUFF_MUR_*`) will be assigned upon submission.
                </span>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowOnboardModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#0099ff] hover:bg-[#0088ee] text-white shadow-lg shadow-cyan-500/25"
                >
                  Publish Package to Catalog
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
