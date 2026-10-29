"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Terminal,
  Cpu,
  Radio,
  Sliders,
  CheckCircle2,
  Maximize2,
  ChevronRight,
  Database,
  ArrowUpRight,
  HardDrive,
  Copy,
  Check,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function NordicMinimalistTelemetryLandingPage() {
  const [copied, setCopied] = useState(false);
  const [selectedSensor, setSelectedSensor] = useState<"rumination" | "lactation" | "temp">("rumination");

  const copyEarTag = () => {
    navigator.clipboard.writeText("HIRA_1_MUR_BUFF_OCT26_A");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0e0e11] text-zinc-200 font-mono selection:bg-zinc-200 selection:text-zinc-950">
      <MarketplaceSwitcher currentMarketplaceId="page-21" />

      {/* Top Telemetry Bar */}
      <div className="border-b border-zinc-800 bg-[#141418] px-4 py-2 text-[11px] flex flex-wrap items-center justify-between text-zinc-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            STATION 04 // HARIANA FEEDLOT
          </span>
          <span className="text-zinc-600">|</span>
          <span>LAT: 28.6139° N, LONG: 77.2090° E</span>
        </div>
        <div className="flex items-center gap-4 text-zinc-400">
          <span>SHED TEMP: 24.1°C</span>
          <span>HUMIDITY: 58%</span>
          <span>FAN SPEED: 820 RPM</span>
        </div>
      </div>

      {/* Nordic Minimalist Header */}
      <header className="border-b border-zinc-800 bg-[#0e0e11] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-44 bg-[#FAF9F6] rounded-lg p-1 flex items-center justify-center border border-zinc-700">
              <Image src="/logo.png" alt="Hira Farm Management" width={220} height={160} className="w-full h-full object-contain" priority />
            </div>
            <div className="font-mono text-zinc-400 text-xs hidden sm:block">
              // TELEMETRY_CONSOLE_v4
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-zinc-500 hidden sm:inline">SEED_UNIT_2026.01</span>
            <button className="px-3.5 py-1.5 bg-zinc-100 hover:bg-white text-zinc-950 rounded font-sans font-bold text-xs transition-colors flex items-center gap-1">
              <span>INITIALIZE SEED LOT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero: Precision Grid Architecture */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        
        {/* Unit Header */}
        <div className="border border-zinc-800 rounded-xl p-6 bg-[#131317] mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="text-[11px] text-zinc-500 uppercase tracking-widest font-sans">
                Asset Architecture Document // HF-2026-X
              </div>
              <h1 className="text-2xl sm:text-4xl font-sans font-black text-white tracking-tight mt-1">
                MURRAH BIOLOGICAL COMPOUNDING LOT
              </h1>
              <p className="text-xs text-zinc-400 mt-2 font-mono max-w-2xl leading-relaxed">
                Initial allocation: 1 Adult Dam (40m) + 1 Starter Calf (2m) + Smart Infrastructure. Autonomous progression from 2 to 41 animals across 120 elapsed months.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="border border-zinc-800 rounded-lg p-3 bg-zinc-900/80 text-right font-mono">
                <div className="text-[10px] text-zinc-500">PACKAGE COST</div>
                <div className="text-xl font-bold text-white">₹2,00,000</div>
              </div>
              <div className="border border-emerald-900/60 rounded-lg p-3 bg-emerald-950/30 text-right font-mono">
                <div className="text-[10px] text-emerald-400">10-YR ESTIMATED TURNOVER</div>
                <div className="text-xl font-bold text-emerald-300">₹61,35,000</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Pillar Data Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Column 1: Active Tag & Biometrics */}
          <div className="lg:col-span-4 border border-zinc-800 rounded-xl p-5 bg-[#131317] space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="text-xs font-bold font-sans text-white">LIVE EAR-TAG SPECIFICATION</span>
              <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">RFID UHF</span>
            </div>

            <div className="relative h-44 rounded-lg overflow-hidden border border-zinc-800">
              <Image src="/Murrah_buffalo.JPG" alt="Murrah Buffalo" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end text-[10px]">
                <span className="text-white font-mono bg-zinc-900/90 px-2 py-0.5 rounded">HF-A (MATRIARCH)</span>
                <span className="text-emerald-400 font-bold bg-zinc-900/90 px-2 py-0.5 rounded">12.4 L / DAY</span>
              </div>
            </div>

            {/* Tag Breakdown */}
            <div className="border border-zinc-800 rounded p-3 bg-zinc-900/50 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">Full Ear-Tag ID:</span>
                <button
                  onClick={copyEarTag}
                  className="flex items-center gap-1 text-[11px] text-zinc-300 hover:text-white"
                >
                  <span className="font-bold text-emerald-400">HIRA_1_MUR_BUFF_OCT26_A</span>
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Species / Breed:</span>
                <span className="text-zinc-200">BUFF // MURRAH</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Calving Cadence:</span>
                <span className="text-zinc-200">15 Months (453d)</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Butterfat Test:</span>
                <span className="text-amber-400 font-bold">8.15% (A2 Verified)</span>
              </div>
            </div>

            {/* Replacement Guarantee */}
            <div className="border border-zinc-800/80 rounded p-3 bg-zinc-950/60 text-[11px] text-zinc-400 space-y-1">
              <div className="font-bold text-zinc-200">PROTOCOL: 1:1 FEMALE REPLACEMENT</div>
              <p>Male calves are transferred to nursery partners in exchange for female heifers. Living herd stays 100% productive.</p>
            </div>
          </div>

          {/* Column 2: Sensor Telemetry & Diagnostics */}
          <div className="lg:col-span-4 border border-zinc-800 rounded-xl p-5 bg-[#131317] space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="text-xs font-bold font-sans text-white">IOT COLLAR TELEMETRY</span>
              <span className="text-[10px] text-emerald-400 font-mono">POLLING: 1000ms</span>
            </div>

            {/* Telemetry Switcher Tabs */}
            <div className="grid grid-cols-3 gap-1 border border-zinc-800 rounded p-1 bg-zinc-900 text-[10px]">
              <button
                onClick={() => setSelectedSensor("rumination")}
                className={`py-1 rounded ${selectedSensor === "rumination" ? "bg-zinc-800 text-white font-bold" : "text-zinc-400"}`}
              >
                RUMINATION
              </button>
              <button
                onClick={() => setSelectedSensor("lactation")}
                className={`py-1 rounded ${selectedSensor === "lactation" ? "bg-zinc-800 text-white font-bold" : "text-zinc-400"}`}
              >
                LACTATION
              </button>
              <button
                onClick={() => setSelectedSensor("temp")}
                className={`py-1 rounded ${selectedSensor === "temp" ? "bg-zinc-800 text-white font-bold" : "text-zinc-400"}`}
              >
                CORE TEMP
              </button>
            </div>

            {/* Selected Metric Display */}
            <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-950 space-y-3">
              {selectedSensor === "rumination" && (
                <div>
                  <div className="text-[10px] text-zinc-500">24-HOUR RUMINATION DURATION</div>
                  <div className="text-3xl font-black text-white mt-1">482 <span className="text-xs text-zinc-400 font-normal">MINUTES</span></div>
                  <div className="text-xs text-emerald-400 mt-1 font-sans">Normal fermentation range (450–520m)</div>
                </div>
              )}
              {selectedSensor === "lactation" && (
                <div>
                  <div className="text-[10px] text-zinc-500">CURRENT DAILY EJECTION</div>
                  <div className="text-3xl font-black text-amber-300 mt-1">12.4 <span className="text-xs text-zinc-400 font-normal">LITERS / DAY</span></div>
                  <div className="text-xs text-zinc-400 mt-1 font-sans">Morning: 6.8L | Evening: 5.6L</div>
                </div>
              )}
              {selectedSensor === "temp" && (
                <div>
                  <div className="text-[10px] text-zinc-500">INTERNAL BODY TEMPERATURE</div>
                  <div className="text-3xl font-black text-cyan-300 mt-1">38.6 <span className="text-xs text-zinc-400 font-normal">°CELSIUS</span></div>
                  <div className="text-xs text-emerald-400 mt-1 font-sans">Zero fever or mastitis indicators</div>
                </div>
              )}
            </div>

            {/* Diagnostic Log Lines */}
            <div className="border border-zinc-800 rounded p-3 bg-zinc-950 font-mono text-[10px] text-zinc-400 space-y-1.5 overflow-hidden">
              <div className="text-zinc-500 font-bold border-b border-zinc-900 pb-1">EVENT LOG STREAM</div>
              <div>[05:30] Auto-Milking complete: 6.82L logged</div>
              <div>[07:15] TMR Silage dispenser triggered (32kg)</div>
              <div>[10:45] Collar battery level: 98% (Solar charged)</div>
              <div>[12:00] RFID gate sweep: All tags verified</div>
            </div>
          </div>

          {/* Column 3: 10-Year Compounding Census */}
          <div className="lg:col-span-4 border border-zinc-800 rounded-xl p-5 bg-[#131317] space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="text-xs font-bold font-sans text-white">10-YEAR CENSUS TIMELINE</span>
              <span className="text-[10px] text-zinc-400">120 MONTHS</span>
            </div>

            {/* Milestone List */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded bg-zinc-900/70 border border-zinc-800/80">
                <span className="text-zinc-400">M00 (Seed Day)</span>
                <span className="font-bold text-white">2 Animals</span>
                <span className="text-zinc-400">₹2,00,000</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-zinc-900/70 border border-zinc-800/80">
                <span className="text-zinc-400">M24 (Year 2)</span>
                <span className="font-bold text-white">3 Animals</span>
                <span className="text-zinc-400">₹2,50,000</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-zinc-900/70 border border-zinc-800/80">
                <span className="text-zinc-400">M48 (Year 4)</span>
                <span className="font-bold text-white">6 Animals</span>
                <span className="text-zinc-400">₹4,10,000</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-zinc-900/70 border border-zinc-800/80">
                <span className="text-zinc-400">M72 (Year 6)</span>
                <span className="font-bold text-white">11 Animals</span>
                <span className="text-zinc-400">₹7,70,000</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-zinc-900/70 border border-zinc-800/80">
                <span className="text-zinc-400">M96 (Year 8)</span>
                <span className="font-bold text-white">16 Animals</span>
                <span className="text-zinc-400">₹12,40,000</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded bg-emerald-950/40 border border-emerald-700/60 font-bold">
                <span className="text-emerald-300">M120 (Year 10)</span>
                <span className="text-white">41 Head</span>
                <span className="text-emerald-300">₹21,40,000</span>
              </div>
            </div>

            {/* Action Box */}
            <button className="w-full py-3 bg-zinc-100 hover:bg-white text-zinc-950 font-sans font-bold text-xs rounded transition-all">
              DOWNLOAD PRO-FORMA DATASET (JSON)
            </button>
          </div>

        </div>

      </main>
    </div>
  );
}
