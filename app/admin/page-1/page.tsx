"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Truck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  Activity,
  Clock,
  Navigation,
  Thermometer,
  Sparkles,
  AlertCircle,
  Eye,
  Download,
  Filter,
  Search,
  Award,
  Layers,
  Radio,
  SlidersHorizontal,
  Warehouse,
  Users,
  Compass,
} from "lucide-react";
import { AdminSwitcher } from "@/components/AdminSwitcher";

const FLEET_DISPATCH_DATA = [
  {
    truckId: "TRK-01",
    vehicleNumber: "MH-46-BM-7821",
    driverName: "Rameshwar Patil",
    driverPhone: "+91 98231 44102",
    capacity: "4 Lactating Buffaloes + Calves",
    currentAnimals: [
      { tag: "HIRA_A1_OCT26_BUFF_MUR_35", rfid: "982-000412891", investor: "Anita Sharma (INV-1092)" },
    ],
    route: "Karnal Breeding Mandi ➔ Hira Central Barn, Vashi",
    currentLocus: "Igatpuri Mountain Pass (KM 118)",
    speed: 48,
    cabinTemp: "24.2°C",
    healthState: "Stable • Optimal Ventilation",
    eta: "08:30 PM (4h 15m remaining)",
    status: "EN_ROUTE",
    statusBadge: "Active GPS Transit",
    allocatedShed: "Shed 2, Stanchion 18",
  },
  {
    truckId: "TRK-02",
    vehicleNumber: "MH-04-ER-9912",
    driverName: "Santosh Jadhav",
    driverPhone: "+91 94220 18833",
    capacity: "4 Lactating Buffaloes",
    currentAnimals: [
      { tag: "HIRA_A1_OCT26_BUFF_MUR_36", rfid: "982-000412892", investor: "Vikram Deshmukh (INV-1104)" },
    ],
    route: "Rohtak Breeding Hub ➔ Hira Central Barn, Vashi",
    currentLocus: "Nashik-Bhiwandi Expressway (KM 62)",
    speed: 52,
    cabinTemp: "23.8°C",
    healthState: "Feed Stoppage Completed at 16:10",
    eta: "06:45 PM (2h 40m remaining)",
    status: "EN_ROUTE",
    statusBadge: "Active GPS Transit",
    allocatedShed: "Shed 3, Stanchion 07",
  },
  {
    truckId: "TRK-03",
    vehicleNumber: "MH-12-PQ-5541",
    driverName: "Gajanan More",
    driverPhone: "+91 98810 55219",
    capacity: "6 Calves / 3 Buffaloes",
    currentAnimals: [
      { tag: "HIRA_A1_OCT26_BUFF_MUR_37", rfid: "982-000412893", investor: "Rajesh Kulkarni (INV-1088)" },
    ],
    route: "Pune Agro Staging Bay ➔ Hira Central Barn",
    currentLocus: "Pune Staging Bay 4 (Under Triage)",
    speed: 0,
    cabinTemp: "22.5°C",
    healthState: "Quarantine Bay Cleared • Departure Scheduled 06:00 AM",
    eta: "Departs Tomorrow 06:00 AM",
    status: "QUARANTINE_STAGED",
    statusBadge: "Quarantine Staged",
    allocatedShed: "Shed 1, Stanchion 22",
  },
];

export default function AdminFleetDispatchPage() {
  const [filter, setFilter] = useState<"ALL" | "EN_ROUTE" | "STAGED">("ALL");
  const [selectedTruck, setSelectedTruck] = useState<any | null>(FLEET_DISPATCH_DATA[0]);

  const filteredFleet = FLEET_DISPATCH_DATA.filter((item) => {
    if (filter === "EN_ROUTE" && item.status !== "EN_ROUTE") return false;
    if (filter === "STAGED" && item.status !== "QUARANTINE_STAGED") return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased relative">
      <AdminSwitcher currentAdminId="page-1" />

      {/* TOP NOTIFICATION BAR */}
      <div className="bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-700 text-white text-xs font-semibold py-2 px-4 text-center flex items-center justify-center gap-2">
        <Radio className="w-3.5 h-3.5 animate-pulse text-amber-200" />
        <span>Hira Farm Internal Operations: Live Fleet Inbound Telemetry & Stanchion Allocation Command</span>
      </div>

      <main className="max-w-7xl mx-auto space-y-8 p-4 sm:p-6 lg:p-8">
        {/* HERO BANNER */}
        <div className="bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-rose-950/10 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute right-36 -top-10 w-48 h-48 bg-amber-300/20 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur text-xs font-bold text-rose-100 border border-white/20">
                <Shield className="w-3.5 h-3.5 text-amber-300" />
                <span>Hira Farm Management Private Limited • Internal Operations Desk</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white drop-shadow-sm">
                Inbound Fleet Dispatch & Livestock Transit Console
              </h1>
              <p className="text-rose-100 text-sm max-w-2xl font-medium leading-relaxed">
                Supervise specialized livestock transport carriers, biometric temperature sensors, vehicle route waypoints, and automate barn stanchion allocations upon arrival.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-col items-start sm:items-end justify-between sm:justify-center gap-2 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-200">
                Active Fleet Inbound
              </span>
              <span className="text-2xl sm:text-3xl font-black text-white">
                3 Carriers Active
              </span>
              <span className="text-xs text-amber-200 font-semibold flex items-center gap-1">
                <Warehouse className="w-3.5 h-3.5" /> 8 Stanchions Reserved in Vashi Sheds
              </span>
            </div>
          </div>
        </div>

        {/* METRICS ROW */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-white to-amber-50/70 border border-amber-200/80 rounded-3xl p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">Inbound Fleet</span>
              <div className="w-9 h-9 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md">
                <Truck className="w-4 h-4 animate-bounce" />
              </div>
            </div>
            <div className="text-3xl font-black text-amber-950 mt-2">2 Vehicles</div>
            <p className="text-xs text-amber-700 font-semibold mt-1">Live Highway Radar</p>
          </div>

          <div className="bg-gradient-to-br from-white to-rose-50/70 border border-rose-200/80 rounded-3xl p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-800 uppercase tracking-wide">Quarantine Hold</span>
              <div className="w-9 h-9 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-md">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-rose-950 mt-2">1 Carrier</div>
            <p className="text-xs text-rose-700 font-semibold mt-1">Pune Agro Hub Triage</p>
          </div>

          <div className="bg-gradient-to-br from-white to-emerald-50/70 border border-emerald-200/80 rounded-3xl p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">RFID Tags Cleared</span>
              <div className="w-9 h-9 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-emerald-950 mt-2">100% Verified</div>
            <p className="text-xs text-emerald-700 font-semibold mt-1">National Insurance Linked</p>
          </div>

          <div className="bg-gradient-to-br from-white to-indigo-50/70 border border-indigo-200/80 rounded-3xl p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-wide">Average Cabin Temp</span>
              <div className="w-9 h-9 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
                <Thermometer className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-indigo-950 mt-2">24.0°C</div>
            <p className="text-xs text-indigo-700 font-semibold mt-1">Comfort Zone Protected</p>
          </div>
        </div>

        {/* MAIN OPERATIONS INTERFACE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT 2 COLUMNS: FLEET LIST */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFilter("ALL")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition ${
                    filter === "ALL" ? "bg-slate-900 text-white" : "bg-white border text-slate-700"
                  }`}
                >
                  All Carriers (3)
                </button>
                <button
                  onClick={() => setFilter("EN_ROUTE")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition ${
                    filter === "EN_ROUTE" ? "bg-sky-600 text-white" : "bg-sky-50 text-sky-700 border border-sky-200"
                  }`}
                >
                  En Route (2)
                </button>
                <button
                  onClick={() => setFilter("STAGED")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition ${
                    filter === "STAGED" ? "bg-amber-600 text-white" : "bg-amber-50 text-amber-800 border border-amber-200"
                  }`}
                >
                  Staged (1)
                </button>
              </div>

              <span className="text-xs text-slate-500 font-mono">Auto-refreshed: 10s ago</span>
            </div>

            <div className="space-y-4">
              {filteredFleet.map((truck) => {
                const isSelected = selectedTruck?.truckId === truck.truckId;
                const isEnRoute = truck.status === "EN_ROUTE";

                return (
                  <div
                    key={truck.truckId}
                    onClick={() => setSelectedTruck(truck)}
                    className={`cursor-pointer rounded-3xl border p-5 transition-all duration-200 ${
                      isSelected
                        ? "bg-white border-rose-400 ring-2 ring-rose-300 shadow-lg"
                        : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-black px-2.5 py-1 rounded bg-slate-900 text-white">
                          {truck.vehicleNumber}
                        </span>
                        <span
                          className={`text-xs font-extrabold px-3 py-0.5 rounded-full ${
                            isEnRoute
                              ? "bg-sky-100 text-sky-900 border border-sky-200"
                              : "bg-amber-100 text-amber-900 border border-amber-200"
                          }`}
                        >
                          {truck.statusBadge}
                        </span>
                      </div>

                      <div className="text-xs font-bold text-slate-600 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>ETA: {truck.eta}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold">Driver</span>
                        <p className="font-bold text-slate-900">{truck.driverName}</p>
                        <p className="text-[11px] text-slate-500">{truck.driverPhone}</p>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold">Current Locus</span>
                        <p className="font-bold text-slate-900 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-rose-500" />
                          {truck.currentLocus}
                        </p>
                        <p className="text-[11px] text-sky-700 font-mono font-bold">Speed: {truck.speed} km/h</p>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold">Allocated Barn</span>
                        <p className="font-bold text-emerald-800 flex items-center gap-1">
                          <Warehouse className="w-3.5 h-3.5 text-emerald-600" />
                          {truck.allocatedShed}
                        </p>
                        <p className="text-[11px] text-slate-500">Temp: {truck.cabinTemp}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: DETAIL TELEMETRY PANEL */}
          {selectedTruck && (
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600">
                  Telemetry Inspector
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-1">
                  {selectedTruck.vehicleNumber}
                </h3>
                <p className="text-xs text-slate-500 font-medium">Route: {selectedTruck.route}</p>
              </div>

              {/* TELEMETRY RADAR */}
              <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-sky-300 font-mono font-bold">Cabin Climate Sensor</span>
                  <span className="text-emerald-400 font-bold">Normal</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-black">{selectedTruck.cabinTemp}</span>
                  <span className="text-xs text-slate-300 font-mono">HVLS Active</span>
                </div>
                <p className="text-[11px] text-sky-200 pt-2 border-t border-sky-800/80">
                  {selectedTruck.healthState}
                </p>
              </div>

              {/* ANIMAL PASSENGERS */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Passenger Animal Tags
                </h4>
                {selectedTruck.currentAnimals.map((animal: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-slate-900">{animal.tag}</span>
                      <span className="text-[10px] font-mono bg-sky-100 text-sky-800 px-2 py-0.5 rounded">
                        RFID: {animal.rfid}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500">Allocated to: {animal.investor}</p>
                  </div>
                ))}
              </div>

              {/* DISPATCH ACTION BUTTONS */}
              <div className="space-y-2 pt-2">
                <a
                  href={`tel:${selectedTruck.driverPhone}`}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Driver ({selectedTruck.driverName})</span>
                </a>

                <button
                  onClick={() => alert(`Stanchion entry pass generated for ${selectedTruck.vehicleNumber}`)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Print Inbound Gate Waybill</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
