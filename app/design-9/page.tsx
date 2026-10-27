"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  BookOpen,
  Sparkles,
  GitBranch,
  Calendar,
  Heart,
  Milk,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Design9Page() {
  const [activeGen, setActiveGen] = useState<number>(1);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);

  return (
    <div className="min-h-screen bg-[#11141b] text-slate-100 font-sans antialiased selection:bg-orange-500 selection:text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-[#0e1117]/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 h-18 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 font-bold">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white block text-sm">HIRA CHRONICLES</span>
              <span className="text-[10px] text-orange-400 tracking-wider">
                GENERATIONAL STORYLINE // 09
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/"
              className="text-slate-400 hover:text-white transition"
            >
              All Designs
            </Link>
            <a
              href="#timeline"
              className="px-4 py-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-500/20"
            >
              Start Your Story (₹2L)
            </a>
          </div>
        </div>
      </header>

      {/* Hero Narrative */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" /> A True Compounding Parable
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          The Story of Gauri & <br />
          <span className="text-orange-400">Her 88 Descendants.</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          In Year 0, an animal asset owner commits ₹2,00,000 to adopt Gauri (a pure Murrah buffalo) and her newborn daughter Kaveri. What follows is not luck—it is the biological arithmetic of life, milk, and family compounding.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-mono">
          <div className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-500 block text-[10px]">ORIGIN CAPITAL</span>
            <span className="text-base font-bold text-white">₹2,00,000</span>
          </div>
          <div className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-500 block text-[10px]">DECADE DESCENDANTS</span>
            <span className="text-base font-bold text-orange-400">88 Buffaloes</span>
          </div>
          <div className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-500 block text-[10px]">TOTAL VALUE CREATED</span>
            <span className="text-base font-bold text-emerald-400">&gt; ₹3.25 Crore</span>
          </div>
        </div>
      </section>

      {/* Narrative Chapter Cards */}
      <section id="timeline" className="max-w-4xl mx-auto px-6 py-10 space-y-12">
        <div className="relative border-l-2 border-orange-500/30 pl-6 sm:pl-10 space-y-12">
          {/* Chapter 1 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-orange-500 border-4 border-[#11141b] flex items-center justify-center text-[10px] font-bold text-white">
              1
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
              <span className="text-xs font-mono text-orange-400 uppercase">
                Years 1 - 2 // The Foundation
              </span>
              <h3 className="text-xl font-bold text-white">
                Gauri Yields Daily Gold, Kaveri Grows Strong
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Gauri produces 14 liters of rich A2 milk every morning and evening (4,200L/yr), yielding ₹2,94,000 annually. Through precision artificial insemination, Gauri gives birth to a new female calf each year. Meanwhile, Kaveri safely matures on green pasture.
              </p>
              <div className="text-xs font-mono text-slate-300 pt-2 border-t border-slate-800 flex justify-between">
                <span>Herd at End of Year 2: <strong>4 Animals</strong></span>
                <span className="text-emerald-400">Milk Turnover: ₹2.94L / yr</span>
              </div>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-orange-500 border-4 border-[#11141b] flex items-center justify-center text-[10px] font-bold text-white">
              2
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
              <span className="text-xs font-mono text-orange-400 uppercase">
                Year 3 // The Turning Point
              </span>
              <h3 className="text-xl font-bold text-white">
                Kaveri Becomes a Mother: The Herd Doubles
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                At 36 months, Kaveri reaches maturity. Now there are two lactating mothers! Both Gauri and Kaveri produce milk and each bears a newborn calf. Daily milk jumps to 28 liters. The exponential curve has officially begun.
              </p>
              <div className="text-xs font-mono text-slate-300 pt-2 border-t border-slate-800 flex justify-between">
                <span>Herd at End of Year 3: <strong>6 Animals</strong> (2 Milking)</span>
                <span className="text-emerald-400">Milk Turnover: ₹5.88L / yr</span>
              </div>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-orange-500 border-4 border-[#11141b] flex items-center justify-center text-[10px] font-bold text-white">
              3
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
              <span className="text-xs font-mono text-orange-400 uppercase">
                Years 4 - 6 // Compounding In Motion
              </span>
              <h3 className="text-xl font-bold text-white">
                Granddaughters Reach Lactation
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every subsequent calf born in Year 1, 2, and 3 matures at age 3. By Year 6, there are 6 active milking mothers producing 84 liters of milk daily (₹17.64 Lacs annual revenue), and total herd size reaches 19 animals.
              </p>
              <div className="text-xs font-mono text-slate-300 pt-2 border-t border-slate-800 flex justify-between">
                <span>Herd at End of Year 6: <strong>19 Animals</strong></span>
                <span className="text-emerald-400">Milk Turnover: ₹17.64L / yr</span>
              </div>
            </div>
          </div>

          {/* Chapter 4 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-emerald-500 border-4 border-[#11141b] flex items-center justify-center text-[10px] font-bold text-white">
              ★
            </div>
            <div className="rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-slate-900 to-emerald-950/20 p-6 space-y-3 shadow-xl">
              <span className="text-xs font-mono text-emerald-400 uppercase">
                Year 10 // The 88-Animal Empire
              </span>
              <h3 className="text-2xl font-bold text-white">
                From One Mother to ₹82+ Lacs Annual Milk
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                By Year 10, the biological compound machine operates at institutional scale: 28 adult milking mothers generating 392 liters every single day (1,17,600 liters per year). Total herd comprises 88 animals valued at ₹72 Lacs in live livestock equity, and cumulative milk income exceeds ₹2.5 Crore!
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 text-xs font-mono border-t border-slate-800">
                <div>
                  <span className="text-slate-500 block">Total Herd</span>
                  <span className="text-lg font-bold text-white">88 Animals</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Annual Milk Revenue</span>
                  <span className="text-lg font-bold text-emerald-400">₹82.32 Lacs</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Total 10Y Wealth</span>
                  <span className="text-lg font-bold text-orange-400">&gt; ₹3.25 Crore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-9" />
    </div>
  );
}
