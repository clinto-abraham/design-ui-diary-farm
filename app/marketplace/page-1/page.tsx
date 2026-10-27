"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Truck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ShoppingCart,
  MapPin,
  Phone,
  FileText,
  Activity,
  Clock,
  Navigation,
  Thermometer,
  Heart,
  Sparkles,
  RefreshCw,
  Eye,
  Download,
  Info,
  ChevronRight,
  Filter,
  Search,
  Award,
  Calendar,
  X,
  Building,
  Radio,
  SlidersHorizontal,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

// Rich Mock Orders reflecting user's screenshot & livestock operations
const MOCK_LIVESTOCK_ORDERS = [
  {
    id: "ord_5547",
    orderNumber: "ORD-2026-5547",
    unitTitle: "Murrah High-Yield Dairy Unit (1 Buffalo + 1 Female Calf)",
    unitCode: "PACK_A1_OCT26_BUFF_MUR_35",
    animalTag: "HIRA_A1_OCT26_BUFF_MUR_35",
    rfidCode: "982-000412891",
    breed: "Pure Murrah Buffalo (Lactation II)",
    milkCapacityLiters: "16.5 L/day",
    fatPercentage: "7.8% Fat",
    totalPrice: 175000,
    orderDate: "2026-10-24T10:30:00Z",
    status: "DISPATCHED_IN_TRANSIT",
    statusLabel: "In Specialized Transit",
    currentMilestone: "DISPATCHED_IN_TRANSIT",
    milestoneIndex: 4, // out of 5
    vehicleNumber: "MH-46-BM-7821",
    driverName: "Rameshwar Patil",
    driverPhone: "+91 98231 44102",
    origin: "Karnal Certified Mandi Hub, Haryana",
    destination: "Hira Farm Shed 2, Vashi, Navi Mumbai",
    currentLocation: "Igatpuri Ghats Toll Bypass (KM 118)",
    speedKmH: 48,
    eta: "Today, 08:30 PM (4h 15m remaining)",
    cabinTempC: "24.2°C",
    ventilationStatus: "Optimal Airflow On",
    waterFeedingCheck: "Completed at 15:45 (Sinnar Rest Bay)",
    heartRateBpm: 64,
    insuranceTag: "MH-LIV-INS-88219 (National Insurance)",
    vetFitnessCert: "MH-VET-CERT-2026-9921",
    vetOfficer: "Dr. A. K. Shinde (Govt Reg #MH-VET-4190)",
    bloodPanel: "Brucellosis (-ve), TB (-ve), JD (-ve)",
  },
  {
    id: "ord_9844",
    orderNumber: "ORD-2026-9844",
    unitTitle: "Elite Purebred Murrah Milch Pair (A1_OCT26_1_MUR_A1)",
    unitCode: "PACK_A1_OCT26_BUFF_MUR_36",
    animalTag: "HIRA_A1_OCT26_BUFF_MUR_36",
    rfidCode: "982-000412892",
    breed: "Elite Murrah Buffalo (Lactation I)",
    milkCapacityLiters: "17.2 L/day",
    fatPercentage: "8.1% Fat",
    totalPrice: 175000,
    orderDate: "2026-10-23T14:15:00Z",
    status: "DISPATCHED_IN_TRANSIT",
    statusLabel: "In Specialized Transit",
    currentMilestone: "DISPATCHED_IN_TRANSIT",
    milestoneIndex: 4,
    vehicleNumber: "MH-04-ER-9912",
    driverName: "Santosh Jadhav",
    driverPhone: "+91 94220 18833",
    origin: "Rohtak Breeding Hub, Haryana",
    destination: "Hira Farm Shed 3, Vashi, Navi Mumbai",
    currentLocation: "Nashik-Bhiwandi Expressway (KM 62)",
    speedKmH: 52,
    eta: "Today, 06:45 PM (2h 40m remaining)",
    cabinTempC: "23.8°C",
    ventilationStatus: "Active Climate Control",
    waterFeedingCheck: "Completed at 16:10 (Padgha Checkpoint)",
    heartRateBpm: 68,
    insuranceTag: "MH-LIV-INS-88220 (Oriental Insurance)",
    vetFitnessCert: "MH-VET-CERT-2026-9922",
    vetOfficer: "Dr. Snehal Kadam (Govt Reg #MH-VET-8832)",
    bloodPanel: "Brucellosis (-ve), HS-BQ Vaccinated",
  },
  {
    id: "ord_5979",
    orderNumber: "ORD-2026-5979",
    unitTitle: "Murrah First-Calver High-Yield Unit (A1_OCT26_1_MUR_B3)",
    unitCode: "PACK_A1_OCT26_BUFF_MUR_37",
    animalTag: "HIRA_A1_OCT26_BUFF_MUR_37",
    rfidCode: "982-000412893",
    breed: "Murrah First Lactation Cow",
    milkCapacityLiters: "15.8 L/day",
    fatPercentage: "7.6% Fat",
    totalPrice: 175000,
    orderDate: "2026-10-25T09:00:00Z",
    status: "VETERINARY_QUARANTINE",
    statusLabel: "Quarantine & Conditioning",
    currentMilestone: "QUARANTINE_BAY",
    milestoneIndex: 3,
    vehicleNumber: "MH-12-PQ-5541 (Assigned for tomorrow)",
    driverName: "Gajanan More",
    driverPhone: "+91 98810 55219",
    origin: "Pune Livestock Staging Bay",
    destination: "Hira Farm Central Barn, Navi Mumbai",
    currentLocation: "Hira Holding Bay 4 (Under Isolation & Mineral Balancing)",
    speedKmH: 0,
    eta: "Departs Tomorrow 06:00 AM • Arrival 11:30 AM",
    cabinTempC: "22.5°C (Stable)",
    ventilationStatus: "Exhaust Fan Banks Active",
    waterFeedingCheck: "Green Napier 25kg + 4kg Silage Completed",
    heartRateBpm: 62,
    insuranceTag: "MH-LIV-INS-88221 (New India Assurance)",
    vetFitnessCert: "MH-VET-CERT-2026-9923 (Pending 24h Clearance)",
    vetOfficer: "Dr. A. K. Shinde (Govt Reg #MH-VET-4190)",
    bloodPanel: "Antibody Titre Normal, Dewormed",
  },
  {
    id: "ord_9366",
    orderNumber: "ORD-2026-9366",
    unitTitle: "Champion Dairy Buffalo Unit (A1_OCT26_1_MUR_C4)",
    unitCode: "PACK_A1_OCT26_BUFF_MUR_38",
    animalTag: "HIRA_A1_OCT26_BUFF_MUR_38",
    rfidCode: "982-000412894",
    breed: "Murrah Pedigree Milch Buffalo",
    milkCapacityLiters: "17.5 L/day",
    fatPercentage: "8.2% Fat",
    totalPrice: 175000,
    orderDate: "2026-10-21T11:20:00Z",
    status: "DELIVERED_TO_BARN",
    statusLabel: "Delivered & Milking Active",
    currentMilestone: "DELIVERED_TO_BARN",
    milestoneIndex: 5,
    vehicleNumber: "MH-46-BM-7821 (Delivered Oct 24)",
    driverName: "Rameshwar Patil",
    driverPhone: "+91 98231 44102",
    origin: "Mehsana Breeding Mandi",
    destination: "Hira Farm Shed 1, Stanchion #14, Navi Mumbai",
    currentLocation: "Hira Farm Main Barn, Stanchion 14",
    speedKmH: 0,
    eta: "Completed • Milking Telemetry Live",
    cabinTempC: "Farm Climate 25.1°C",
    ventilationStatus: "High Volume Low Speed (HVLS) Fans",
    waterFeedingCheck: "Automated Waterer • TMR Ration Active",
    heartRateBpm: 60,
    insuranceTag: "MH-LIV-INS-88222 (United India Insurance)",
    vetFitnessCert: "MH-VET-CERT-2026-9924 (Certified Fit)",
    vetOfficer: "Dr. Snehal Kadam (Govt Reg #MH-VET-8832)",
    bloodPanel: "Full Fitness Pass • Active Lactation",
  },
];

export default function MarketplaceOrdersPage() {
  const [activeFilter, setActiveFilter] = useState<"ALL" | "TRANSIT" | "QUARANTINE" | "DELIVERED">("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  // Modals for live inspection
  const [selectedTransitOrder, setSelectedTransitOrder] = useState<any | null>(null);
  const [selectedVetOrder, setSelectedVetOrder] = useState<any | null>(null);

  // Filtered orders
  const filteredOrders = useMemo(() => {
    return MOCK_LIVESTOCK_ORDERS.filter((order) => {
      if (activeFilter === "TRANSIT" && order.status !== "DISPATCHED_IN_TRANSIT") return false;
      if (activeFilter === "QUARANTINE" && order.status !== "VETERINARY_QUARANTINE") return false;
      if (activeFilter === "DELIVERED" && order.status !== "DELIVERED_TO_BARN") return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchNumber = order.orderNumber?.toLowerCase().includes(query);
        const matchTitle = order.unitTitle?.toLowerCase().includes(query);
        const matchTag = order.animalTag?.toLowerCase().includes(query);
        const matchVehicle = order.vehicleNumber?.toLowerCase().includes(query);
        return matchNumber || matchTitle || matchTag || matchVehicle;
      }
      return true;
    });
  }, [activeFilter, searchQuery]);

  const totalValue = MOCK_LIVESTOCK_ORDERS.reduce((acc, curr) => acc + (Number(curr.totalPrice) || 0), 0);
  const transitCount = MOCK_LIVESTOCK_ORDERS.filter((o) => o.status === "DISPATCHED_IN_TRANSIT").length;
  const quarantineCount = MOCK_LIVESTOCK_ORDERS.filter((o) => o.status === "VETERINARY_QUARANTINE").length;
  const deliveredCount = MOCK_LIVESTOCK_ORDERS.filter((o) => o.status === "DELIVERED_TO_BARN").length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased relative">
      <MarketplaceSwitcher currentMarketplaceId="page-1" />

      {/* TOP NOTIFICATION BAR */}
      <div className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 text-white text-xs font-semibold py-2 px-4 text-center flex items-center justify-center gap-2">
        <Radio className="w-3.5 h-3.5 animate-pulse text-amber-300" />
        <span>Marketplace Reference UI: Live Livestock Transit Telemetry & Mandi Dispatch Console</span>
      </div>

      <main className="max-w-6xl mx-auto space-y-8 p-4 sm:p-6 lg:p-8">
        {/* HERO BANNER - VIBRANT COLORFUL GRADIENT */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-emerald-950/10 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute right-32 -top-10 w-48 h-48 bg-amber-400/15 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur text-xs font-bold text-emerald-100 border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Hira Farms Live Transit & Mandi Dispatch System</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white drop-shadow-sm">
                My Livestock Orders & Live Transit
              </h1>
              <p className="text-emerald-100 text-sm max-w-2xl font-medium leading-relaxed">
                Track certified Murrah buffaloes live from procurement mandis, specialized air-ventilated transit, and quarantine screening to barn delivery.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-col items-start sm:items-end justify-between sm:justify-center gap-2 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-200">
                Total Asset Allocation
              </span>
              <span className="text-2xl sm:text-3xl font-black text-white">
                ₹{totalValue.toLocaleString("en-IN")}
              </span>
              <span className="text-xs text-amber-200 font-semibold flex items-center gap-1">
                <Award className="w-3.5 h-3.5" /> {MOCK_LIVESTOCK_ORDERS.length} Murrah Units Under Care
              </span>
            </div>
          </div>
        </div>

        {/* QUICK STATUS METRICS BAR */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-white to-amber-50/70 border border-amber-200/80 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">Total Units</span>
              <div className="w-9 h-9 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/20">
                <ShoppingCart className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-amber-950 mt-2">{MOCK_LIVESTOCK_ORDERS.length}</div>
            <p className="text-xs text-amber-700 font-semibold mt-1">100% Certified Murrah</p>
          </div>

          <div className="bg-gradient-to-br from-white to-sky-50/70 border border-sky-200/80 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-sky-800 uppercase tracking-wide">In Transit</span>
              <div className="w-9 h-9 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-md shadow-sky-500/20">
                <Truck className="w-4 h-4 animate-bounce" />
              </div>
            </div>
            <div className="text-3xl font-black text-sky-950 mt-2">{transitCount} Units</div>
            <p className="text-xs text-sky-700 font-semibold mt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              Live GPS Telemetry Active
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-orange-50/70 border border-orange-200/80 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-orange-800 uppercase tracking-wide">Quarantine Bay</span>
              <div className="w-9 h-9 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-orange-950 mt-2">{quarantineCount} Unit</div>
            <p className="text-xs text-orange-700 font-semibold mt-1">Vet Health Gate Passed</p>
          </div>

          <div className="bg-gradient-to-br from-white to-emerald-50/70 border border-emerald-200/80 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">In Farm Barn</span>
              <div className="w-9 h-9 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-emerald-950 mt-2">{deliveredCount} Unit</div>
            <p className="text-xs text-emerald-700 font-semibold mt-1">30% Profit Sharing Live</p>
          </div>
        </div>

        {/* FILTER TABS & SEARCH CONTROLS */}
        <div className="bg-white rounded-3xl border border-slate-200 p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveFilter("ALL")}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                activeFilter === "ALL"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Orders ({MOCK_LIVESTOCK_ORDERS.length})
            </button>

            <button
              onClick={() => setActiveFilter("TRANSIT")}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                activeFilter === "TRANSIT"
                  ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                  : "bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200"
              }`}
            >
              <Truck className="w-3.5 h-3.5" />
              <span>In Transit ({transitCount})</span>
            </button>

            <button
              onClick={() => setActiveFilter("QUARANTINE")}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                activeFilter === "QUARANTINE"
                  ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                  : "bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Quarantine ({quarantineCount})</span>
            </button>

            <button
              onClick={() => setActiveFilter("DELIVERED")}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                activeFilter === "DELIVERED"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                  : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Delivered ({deliveredCount})</span>
            </button>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Order #, Tag or Truck..."
              className="w-full pl-10 pr-4 py-2 text-xs font-bold rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>
        </div>

        {/* ORDERS CARDS LIST */}
        <div className="space-y-6">
          {filteredOrders.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto text-amber-600">
                <Filter className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-slate-900">No Orders Found Matching Filter</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try switching your filter tab or clearing search keywords to view all active livestock units.
              </p>
              <button
                onClick={() => {
                  setActiveFilter("ALL");
                  setSearchQuery("");
                }}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-extrabold shadow-sm hover:bg-emerald-500 transition"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredOrders.map((order, idx) => {
              const isTransit = order.status === "DISPATCHED_IN_TRANSIT";
              const isQuarantine = order.status === "VETERINARY_QUARANTINE";
              const isDelivered = order.status === "DELIVERED_TO_BARN";

              return (
                <div
                  key={order.id || idx}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl ${
                    isTransit
                      ? "bg-gradient-to-br from-white via-sky-50/30 to-indigo-50/20 border-sky-300 ring-1 ring-sky-200"
                      : isQuarantine
                      ? "bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20 border-amber-300 ring-1 ring-amber-200"
                      : "bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 border-emerald-300 ring-1 ring-emerald-200"
                  }`}
                >
                  {/* TOP STATUS BAR WITH VIBRANT ACCENTS */}
                  <div
                    className={`px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b ${
                      isTransit
                        ? "bg-gradient-to-r from-sky-600 to-indigo-700 text-white border-sky-600"
                        : isQuarantine
                        ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white border-amber-600"
                        : "bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-emerald-600"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-black px-2.5 py-1 rounded-md bg-white/20 backdrop-blur border border-white/30 text-white">
                        {order.orderNumber}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-white text-slate-900 shadow-sm">
                        {isTransit && <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping inline-block" />}
                        {isQuarantine && <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />}
                        {isDelivered && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                        <span>{order.statusLabel}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-bold">
                      <span className="flex items-center gap-1 text-white/90">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(order.orderDate).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="bg-white/20 px-3 py-1 rounded-full border border-white/30 text-white">
                        ₹{order.totalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  {/* CARD BODY */}
                  <div className="p-6 space-y-6">
                    {/* MAIN UNIT DETAILS & ANIMAL METADATA */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      <div className="space-y-3 max-w-2xl">
                        <div>
                          <h3 className="text-xl font-black text-slate-900 tracking-tight">
                            {order.unitTitle}
                          </h3>
                          <p className="text-xs text-slate-500 font-semibold mt-0.5">
                            Package Reference: <span className="font-mono text-slate-700">{order.unitCode}</span>
                          </p>
                        </div>

                        {/* LIVESTOCK BIO BADGES */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-purple-100 text-purple-900 text-xs font-extrabold border border-purple-200">
                            <Award className="w-3.5 h-3.5 text-purple-700" />
                            Tag: {order.animalTag}
                          </span>

                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-sky-100 text-sky-900 text-xs font-bold border border-sky-200">
                            RFID: {order.rfidCode}
                          </span>

                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-200">
                            Capacity: {order.milkCapacityLiters} ({order.fatPercentage})
                          </span>

                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200">
                            {order.breed}
                          </span>
                        </div>
                      </div>

                      {/* ACTION BUTTONS */}
                      <div className="flex flex-wrap sm:flex-col gap-2 shrink-0">
                        {isTransit && (
                          <button
                            onClick={() => setSelectedTransitOrder(order)}
                            className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-md shadow-sky-600/20 flex items-center justify-center gap-2 transition-all hover:scale-102"
                          >
                            <Navigation className="w-4 h-4" />
                            <span>Live GPS & Transit Radar</span>
                          </button>
                        )}

                        <button
                          onClick={() => setSelectedVetOrder(order)}
                          className="px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-extrabold text-xs shadow-sm flex items-center justify-center gap-2 transition"
                        >
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span>Vet Fitness Dossier</span>
                        </button>
                      </div>
                    </div>

                    {/* 5-STEP COLORFUL MILESTONE PROGRESS TRACKER */}
                    <div className="bg-white/80 backdrop-blur rounded-2xl border border-slate-200 p-4 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-extrabold text-slate-800 flex items-center gap-1.5">
                          <Activity className="w-4 h-4 text-emerald-600" />
                          Procurement & Transit Milestones
                        </span>
                        <span className="font-mono text-[11px] text-slate-500 font-bold">
                          Phase {order.milestoneIndex} of 5 Completed
                        </span>
                      </div>

                      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${
                            isTransit
                              ? "bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-600 w-4/5"
                              : isQuarantine
                              ? "bg-gradient-to-r from-amber-500 to-orange-500 w-3/5"
                              : "bg-gradient-to-r from-emerald-500 to-teal-500 w-full"
                          }`}
                        />
                      </div>

                      <div className="grid grid-cols-5 text-center gap-1 pt-1">
                        <div className="space-y-1">
                          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] font-black mx-auto flex items-center justify-center shadow-xs">
                            ✓
                          </div>
                          <p className="text-[10px] font-bold text-slate-700 leading-tight">Payment Locked</p>
                        </div>

                        <div className="space-y-1">
                          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] font-black mx-auto flex items-center justify-center shadow-xs">
                            ✓
                          </div>
                          <p className="text-[10px] font-bold text-slate-700 leading-tight">Mandi Tagged</p>
                        </div>

                        <div className="space-y-1">
                          <div
                            className={`w-5 h-5 rounded-full text-white text-[10px] font-black mx-auto flex items-center justify-center shadow-xs ${
                              order.milestoneIndex >= 3 ? "bg-emerald-500" : "bg-slate-300"
                            }`}
                          >
                            {order.milestoneIndex >= 3 ? "✓" : "3"}
                          </div>
                          <p className="text-[10px] font-bold text-slate-700 leading-tight">Quarantine Pass</p>
                        </div>

                        <div className="space-y-1">
                          <div
                            className={`w-5 h-5 rounded-full text-white text-[10px] font-black mx-auto flex items-center justify-center shadow-xs ${
                              order.milestoneIndex >= 4
                                ? isTransit
                                  ? "bg-sky-500 animate-pulse ring-4 ring-sky-100"
                                  : "bg-emerald-500"
                                : "bg-slate-300"
                            }`}
                          >
                            {order.milestoneIndex >= 4 ? (isTransit ? "🚚" : "✓") : "4"}
                          </div>
                          <p className="text-[10px] font-bold text-slate-700 leading-tight">En Route</p>
                        </div>

                        <div className="space-y-1">
                          <div
                            className={`w-5 h-5 rounded-full text-white text-[10px] font-black mx-auto flex items-center justify-center shadow-xs ${
                              isDelivered ? "bg-emerald-500" : "bg-slate-300"
                            }`}
                          >
                            {isDelivered ? "✓" : "5"}
                          </div>
                          <p className="text-[10px] font-bold text-slate-700 leading-tight">Barn Stanchion</p>
                        </div>
                      </div>
                    </div>

                    {/* LIVE TRANSIT TELEMETRY STRIP */}
                    {isTransit && (
                      <div className="bg-gradient-to-r from-sky-50 via-indigo-50 to-white rounded-2xl border border-sky-200 p-4 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sky-100 pb-2">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                            <span className="text-xs font-black text-sky-950 flex items-center gap-1.5">
                              <Navigation className="w-4 h-4 text-sky-600" />
                              Live GPS Vehicle: {order.vehicleNumber}
                            </span>
                          </div>
                          <span className="text-xs font-extrabold text-sky-800 font-mono">
                            Speed: {order.speedKmH} km/h • ETA: {order.eta}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                          <div className="space-y-0.5">
                            <span className="text-[10px] uppercase font-bold text-slate-400">Current Locus</span>
                            <p className="font-extrabold text-slate-800 truncate flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                              {order.currentLocation}
                            </p>
                          </div>

                          <div className="space-y-0.5">
                            <span className="text-[10px] uppercase font-bold text-slate-400">Cabin Atmosphere</span>
                            <p className="font-extrabold text-slate-800 flex items-center gap-1">
                              <Thermometer className="w-3.5 h-3.5 text-sky-600" />
                              {order.cabinTempC} ({order.ventilationStatus})
                            </p>
                          </div>

                          <div className="space-y-0.5">
                            <span className="text-[10px] uppercase font-bold text-slate-400">Licensed Driver</span>
                            <p className="font-extrabold text-slate-800 flex items-center gap-1">
                              <Phone className="w-3.5 h-3.5 text-emerald-600" />
                              {order.driverName} ({order.driverPhone})
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* QUARANTINE PROTOCOL STRIP */}
                    {isQuarantine && (
                      <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-white rounded-2xl border border-amber-200 p-4 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-extrabold text-amber-950 flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-amber-600" />
                            Isolation & Conditioning Facility
                          </span>
                          <span className="font-bold text-amber-800 text-[11px]">{order.eta}</span>
                        </div>
                        <p className="text-xs text-amber-900 leading-relaxed font-medium">
                          Animal undergoing mandatory 48-hour acclimatization and mineral bolus replenishment. Blood panel: {order.bloodPanel}. Scheduled for specialized transport upon certificate sign-off.
                        </p>
                      </div>
                    )}

                    {/* BARN DELIVERED STRIP */}
                    {isDelivered && (
                      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-white rounded-2xl border border-emerald-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                        <div className="space-y-1">
                          <span className="font-extrabold text-emerald-950 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            Allocated to Hira Main Barn Stanchion #14
                          </span>
                          <p className="text-emerald-800 text-[11px] font-medium">
                            Ownership certificate issued. Animal has completed lactation acclimatization. Daily milk production logs and 30% profit share dividend ledger active.
                          </p>
                        </div>
                        <button
                          onClick={() => alert("Milking telemetry feed connected.")}
                          className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-extrabold text-xs shadow-sm hover:bg-emerald-500 transition shrink-0 text-center"
                        >
                          View Milking Feed
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* MODAL 1: LIVE GPS & TRANSIT TELEMETRY RADAR */}
        {selectedTransitOrder && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl border border-sky-200 shadow-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                    {selectedTransitOrder.orderNumber}
                  </span>
                  <h3 className="text-xl font-black text-slate-900">Live GPS Livestock Transit Telemetry</h3>
                </div>
                <button
                  onClick={() => setSelectedTransitOrder(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 text-white rounded-3xl p-6 relative overflow-hidden space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping inline-block" />
                    <span className="text-xs font-mono font-bold text-sky-300">GPS PING: REAL-TIME SECURE</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-300">
                    CARRIER: {selectedTransitOrder.vehicleNumber}
                  </span>
                </div>

                <div className="py-4 space-y-3">
                  <div className="flex items-center justify-between text-xs text-sky-200">
                    <span>{selectedTransitOrder.origin}</span>
                    <span className="text-amber-300 font-bold">{selectedTransitOrder.speedKmH} KM/H</span>
                    <span>{selectedTransitOrder.destination}</span>
                  </div>
                  <div className="w-full bg-sky-900/60 rounded-full h-3 p-0.5">
                    <div className="bg-gradient-to-r from-emerald-400 via-sky-300 to-amber-300 h-full rounded-full w-4/5 animate-pulse" />
                  </div>
                  <p className="text-center text-xs text-emerald-300 font-semibold">
                    Current Coordinate: {selectedTransitOrder.currentLocation}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-sky-800 text-center">
                  <div className="p-2 rounded-xl bg-white/10">
                    <span className="text-[10px] text-sky-300 uppercase block">Cabin Temp</span>
                    <span className="text-sm font-black text-white">{selectedTransitOrder.cabinTempC}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/10">
                    <span className="text-[10px] text-sky-300 uppercase block">Animal Pulse</span>
                    <span className="text-sm font-black text-white">{selectedTransitOrder.heartRateBpm} BPM</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/10">
                    <span className="text-[10px] text-sky-300 uppercase block">Hydration</span>
                    <span className="text-sm font-black text-emerald-300">Passed</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3">
                <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider">
                  Assigned Transporter & Driver Contact
                </h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-black text-sm text-slate-900">{selectedTransitOrder.driverName}</p>
                    <p className="text-xs text-slate-500">Certified Livestock Carrier Driver</p>
                  </div>
                  <a
                    href={`tel:${selectedTransitOrder.driverPhone}`}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center gap-2 shadow-sm transition"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Driver</span>
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider">
                  Transit Checkpoint Logs
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-slate-800">1. Mandi Exit Inspection & RFID Scan</span>
                    <span className="font-mono text-emerald-600 font-bold">10:45 AM • Cleared</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-slate-800">2. Sinnar Agro Feeding & Water Check</span>
                    <span className="font-mono text-emerald-600 font-bold">03:45 PM • Completed</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200">
                    <span className="font-bold text-slate-800">3. Igatpuri Mountain Pass Toll</span>
                    <span className="font-mono text-sky-600 font-bold">05:10 PM • En Route</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedTransitOrder(null)}
                className="w-full py-3 rounded-2xl bg-slate-900 text-white text-xs font-black shadow-md hover:bg-slate-800 transition"
              >
                Close Radar Window
              </button>
            </div>
          </div>
        )}

        {/* MODAL 2: VETERINARY FITNESS & BLOOD PANEL DOSSIER */}
        {selectedVetOrder && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl border border-emerald-200 shadow-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    {selectedVetOrder.vetFitnessCert}
                  </span>
                  <h3 className="text-xl font-black text-slate-900">Veterinary Fitness & Biosecurity Dossier</h3>
                </div>
                <button
                  onClick={() => setSelectedVetOrder(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-5 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-black text-base text-emerald-950">
                      Certified Murrah Bovine Health Pass
                    </h4>
                    <p className="text-xs text-emerald-800">
                      Issued by: {selectedVetOrder.vetOfficer}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-emerald-200/80">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Animal Tag</span>
                    <p className="font-extrabold text-slate-900">{selectedVetOrder.animalTag}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">RFID Ear-Tag Chip</span>
                    <p className="font-extrabold text-slate-900">{selectedVetOrder.rfidCode}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Statutory Insurance Cover</span>
                    <p className="font-extrabold text-emerald-900">{selectedVetOrder.insuranceTag}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Yield Estimation</span>
                    <p className="font-extrabold text-emerald-900">{selectedVetOrder.milkCapacityLiters}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider">
                  Laboratory Diagnostic Blood Panel
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase">Brucellosis Test</span>
                    <p className="text-xs font-black text-emerald-950">NEGATIVE (0.00)</p>
                    <span className="text-[9px] text-emerald-700">Antibody ELISA Passed</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase">Tuberculosis (TB)</span>
                    <p className="text-xs font-black text-emerald-950">NEGATIVE</p>
                    <span className="text-[9px] text-emerald-700">Tuberculin Skin Clear</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase">FMD & HS Vaccines</span>
                    <p className="text-xs font-black text-emerald-950">BOOSTED</p>
                    <span className="text-[9px] text-emerald-700">Batch #VACC-2026</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <p className="font-bold text-slate-900">Veterinary Officer Declarative Sign-off:</p>
                <p className="text-[11px] leading-relaxed">
                  &ldquo;I hereby certify that the Murrah buffalo bearing RFID ear tag {selectedVetOrder.rfidCode} is free from contagious or infectious disease, shows robust lactation conformation, and is certified physically fit for specialized motor transport to Hira Farms Vashi, Navi Mumbai.&rdquo;
                </p>
              </div>

              <button
                onClick={() => setSelectedVetOrder(null)}
                className="w-full py-3 rounded-2xl bg-emerald-600 text-white text-xs font-black shadow-md hover:bg-emerald-500 transition"
              >
                Close Health Dossier
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
