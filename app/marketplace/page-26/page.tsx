"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Leaf,
  Sun,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  QrCode,
  MapPin,
  Calendar,
  Layers,
  Award,
  CheckCircle2,
  Users,
} from "lucide-react";
import { MarketplaceSwitcher } from "@/components/MarketplaceSwitcher";

export default function PastoralCountrysideLandingPage() {
  const [visitorModal, setVisitorModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf7f2] text-stone-900 font-sans selection:bg-amber-600 selection:text-white">
      <MarketplaceSwitcher currentMarketplaceId="page-26" />

      {/* Warm Announcement Bar */}
      <div className="bg-[#43281c] text-amber-100 text-xs py-2 px-4 text-center font-medium">
        <span className="bg-amber-600 text-white font-bold px-2 py-0.5 rounded text-[10px] mr-2">
          VISIT THE ESTATE
        </span>
        Hira Farm Owners receive free weekend farm stays at our Rohtak organic pasture sanctuary.
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#faf7f2]/90 backdrop-blur-md border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-14 sm:h-16 w-52 sm:w-64 bg-[#FAF9F6] border border-amber-900/15 rounded-2xl p-1.5 flex items-center justify-center shadow-sm overflow-hidden">
              <Image src="/logo.png" alt="Hira Farm Management Private Limited" width={280} height={210} className="w-full h-full object-contain" priority />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-700">
            <a href="#pasture" className="hover:text-amber-700 transition-colors">Our Herd</a>
            <a href="#milk" className="hover:text-amber-700 transition-colors">Pure 8% Milk</a>
            <a href="#compounding" className="hover:text-amber-700 transition-colors">10-Year Growth</a>
            <a href="#visit" className="hover:text-amber-700 transition-colors">Farm Stays</a>
          </nav>

          <button
            onClick={() => setVisitorModal(true)}
            className="px-5 py-2.5 rounded-xl font-bold text-xs bg-[#43281c] hover:bg-[#321e15] text-amber-100 shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Reserve Murrah Lot</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 border-b border-amber-900/10 bg-gradient-to-b from-[#faf7f2] to-[#f4eee4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold">
                <Leaf className="w-3.5 h-3.5 text-amber-700" />
                <span>100% ETHICAL • GRASS-FED • ZERO-HORMONE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#321e15] leading-[1.15]">
                Turn 1 Pure Murrah Package into a <span className="text-amber-700 italic font-serif">Herd of 41</span> in 10 Years.
              </h1>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl">
                Experience the timeless abundance of pastoral dairy farming. Start with 1 healthy Murrah mother buffalo and her daughter calf. Every 15 months, your herd multiplies while delivering daily fresh 8% butterfat milk to premium homes.
              </p>

              {/* 4 Organic Milestone Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-amber-200/80 shadow-sm">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Starting Herd</div>
                  <div className="text-2xl font-bold text-[#43281c] mt-0.5">2 Head</div>
                  <div className="text-xs text-stone-500">1 Mother + 1 Calf</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-amber-200/80 shadow-sm">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Year 10 Herd</div>
                  <div className="text-2xl font-bold text-amber-700 mt-0.5">41 Head</div>
                  <div className="text-xs text-stone-500">12 Milking + 29 Calves</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-amber-200/80 shadow-sm">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Pure Milk</div>
                  <div className="text-2xl font-bold text-[#43281c] mt-0.5">12 L / Day</div>
                  <div className="text-xs text-stone-500">8.0% Butterfat @ ₹80</div>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 shadow-sm">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-amber-900">Total 10-Yr Profit</div>
                  <div className="text-2xl font-bold text-amber-800 mt-0.5">₹61.35L</div>
                  <div className="text-xs text-amber-950 font-semibold">Milk + Asset Equity</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setVisitorModal(true)}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#43281c] hover:bg-[#321e15] text-amber-100 shadow-lg shadow-stone-800/20 transition-all flex items-center gap-2"
                >
                  <span>Join the Pastoral Herd (₹2,00,000)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setVisitorModal(true)}
                  className="px-5 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 transition-colors"
                >
                  Book a Weekend Farm Visit
                </button>
              </div>

            </div>

            {/* Right Column: Visual Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border border-amber-200 p-6 shadow-xl space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-inner">
                  <Image src="/Murrah_buffalo.JPG" alt="Pasture Buffalo" fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-amber-950/80 text-amber-200 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                    🌾 Rohtak Pasture Sanctuary
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-bold text-[#321e15]">Seed Package #1 Allocation</h3>
                    <span className="text-xl font-black text-amber-800">₹2,00,000</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Includes 1 adult milking Murrah buffalo (₹1,20,000), 1 female starter calf (₹20,000), and all IoT solar wearables, rubber stall mats, and lifetime feed (₹60,000).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-950 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-amber-700" />
                    Ethical Calf Welfare Standard
                  </div>
                  <p>
                    Calves remain with mothers during nursing hours. 100% of milk is extracted through hygienic automated cluster milking.
                  </p>
                </div>

                <button
                  onClick={() => setVisitorModal(true)}
                  className="w-full py-3 rounded-xl font-bold text-xs bg-amber-700 hover:bg-amber-600 text-white transition-all"
                >
                  Reserve Your Murrah Buffalo Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-900/10 bg-[#f4eee4] py-10 text-xs text-stone-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-44 bg-[#FAF9F6] border border-amber-900/15 rounded-xl p-1 flex items-center justify-center">
              <Image src="/logo.png" alt="Hira Farm" width={160} height={50} className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-[#43281c]">Hira Farm Pastoral Dairy Sanctuary</span>
          </div>
          <div>Preserving Indigenous Murrah Genetics with Modern Care</div>
        </div>
      </footer>

      {/* Farm Visit Modal */}
      {visitorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <button onClick={() => setVisitorModal(false)} className="absolute top-4 right-4 text-stone-400 hover:text-stone-800">
              ✕
            </button>
            <h3 className="text-xl font-bold text-[#321e15]">Schedule a Rohtak Farm Visit</h3>
            <p className="text-xs text-stone-600 mt-1">
              Come meet the Murrah buffaloes in person, taste fresh morning milk, and inspect the IoT smart stalls.
            </p>
            <div className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-xs"
              />
            </div>
            <button
              onClick={() => {
                alert("Thank you! Our estate manager will confirm your visiting slot.");
                setVisitorModal(false);
              }}
              className="w-full mt-5 py-3 rounded-xl bg-[#43281c] text-amber-100 font-bold text-xs"
            >
              Confirm Visit Request
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
