'use client';

import React, { useState } from 'react';
import { Layers, Baby, BarChart3, ChevronRight, Sparkles } from 'lucide-react';

export interface TimelineStage {
  id: number;
  month: number;
  yearLabel: string;
  totalAnimals: number;
  newBirthsCount: number;
  newBirthsDescription: string;
  newBirthsList: Array<{ tag: string; mother: string; gen: 'A' | 'B' | 'C' }>;
  milkingAdults: number;
  calvesAndGrowing: number;
  herdSummary: string;
  genABreakdown: string[];
  genBBreakdown: string[];
  genCBreakdown: string[];
}

export const TIMELINE_DATA: TimelineStage[] = [
  {
    id: 1,
    month: 0,
    yearLabel: 'Year 1 (Month 0)',
    totalAnimals: 2,
    newBirthsCount: 2,
    newBirthsDescription: 'Initial Livestock Unit Purchase: A1 (Original Milking Adult) + A2 (Her Year 1 Female Calf)',
    newBirthsList: [
      { tag: 'A1', mother: 'Foundation Sire', gen: 'A' },
      { tag: 'A2', mother: 'A1', gen: 'A' },
    ],
    milkingAdults: 1,
    calvesAndGrowing: 1,
    herdSummary: 'A1 (Milking Adult), A2 (Female Calf)',
    genABreakdown: ['A1 (Adult)', 'A2 (Calf)'],
    genBBreakdown: [],
    genCBreakdown: [],
  },
  {
    id: 2,
    month: 15,
    yearLabel: 'Year 2 (Month 15)',
    totalAnimals: 3,
    newBirthsCount: 1,
    newBirthsDescription: 'New Birth: A3 born to A1 after 15-month calving interval',
    newBirthsList: [{ tag: 'A3', mother: 'A1', gen: 'A' }],
    milkingAdults: 1,
    calvesAndGrowing: 2,
    herdSummary: 'A1, A2 (15 mo young buffalo), A3 (Newborn calf)',
    genABreakdown: ['A1', 'A2', 'A3'],
    genBBreakdown: [],
    genCBreakdown: [],
  },
  {
    id: 3,
    month: 30,
    yearLabel: 'Year 3 (Month 30)',
    totalAnimals: 4,
    newBirthsCount: 1,
    newBirthsDescription: 'New Birth: A4 born to A1. A2 is now a 30-month pregnant young buffalo.',
    newBirthsList: [{ tag: 'A4', mother: 'A1', gen: 'A' }],
    milkingAdults: 1,
    calvesAndGrowing: 3,
    herdSummary: 'A1, A2, A3, A4',
    genABreakdown: ['A1', 'A2', 'A3', 'A4'],
    genBBreakdown: [],
    genCBreakdown: [],
  },
  {
    id: 4,
    month: 45,
    yearLabel: 'Year 4 (Month 45)',
    totalAnimals: 6,
    newBirthsCount: 2,
    newBirthsDescription: 'First Compound Calving! A5 (from A1) + B1 (First calf from A2, now mature at 45 mo)',
    newBirthsList: [
      { tag: 'A5', mother: 'A1', gen: 'A' },
      { tag: 'B1', mother: 'A2', gen: 'B' },
    ],
    milkingAdults: 2,
    calvesAndGrowing: 4,
    herdSummary: 'A1, A2 (Now Milking!), A3, A4, A5 | B1',
    genABreakdown: ['A1', 'A2', 'A3', 'A4', 'A5'],
    genBBreakdown: ['B1'],
    genCBreakdown: [],
  },
  {
    id: 5,
    month: 60,
    yearLabel: 'Year 5 (Month 60)',
    totalAnimals: 9,
    newBirthsCount: 3,
    newBirthsDescription: 'Rapid Expansion: A6 (from A1), B2 (from A2), B3 (First calf from A3, now 45 mo)',
    newBirthsList: [
      { tag: 'A6', mother: 'A1', gen: 'A' },
      { tag: 'B2', mother: 'A2', gen: 'B' },
      { tag: 'B3', mother: 'A3', gen: 'B' },
    ],
    milkingAdults: 3,
    calvesAndGrowing: 6,
    herdSummary: 'A1 to A6 | B1, B2, B3',
    genABreakdown: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'],
    genBBreakdown: ['B1', 'B2', 'B3'],
    genCBreakdown: [],
  },
  {
    id: 6,
    month: 75,
    yearLabel: 'Year 6 (Month 75)',
    totalAnimals: 13,
    newBirthsCount: 4,
    newBirthsDescription: 'Exponential Calving: A7 (A1), B4 (A2), B5 (A3), B6 (A4 mature at 45 mo)',
    newBirthsList: [
      { tag: 'A7', mother: 'A1', gen: 'A' },
      { tag: 'B4', mother: 'A2', gen: 'B' },
      { tag: 'B5', mother: 'A3', gen: 'B' },
      { tag: 'B6', mother: 'A4', gen: 'B' },
    ],
    milkingAdults: 4,
    calvesAndGrowing: 9,
    herdSummary: 'A1 to A7 | B1 to B6',
    genABreakdown: ['A1 to A7 (7 animals)'],
    genBBreakdown: ['B1 to B6 (6 animals)'],
    genCBreakdown: [],
  },
  {
    id: 7,
    month: 90,
    yearLabel: 'Year 7 & 8 (Month 90)',
    totalAnimals: 19,
    newBirthsCount: 6,
    newBirthsDescription: 'Third Generation Enters! A8 (A1), B7-B10 (from A2-A5), C1 (First calf from B1!)',
    newBirthsList: [
      { tag: 'A8', mother: 'A1', gen: 'A' },
      { tag: 'B7', mother: 'A2', gen: 'B' },
      { tag: 'B8', mother: 'A3', gen: 'B' },
      { tag: 'B9', mother: 'A4', gen: 'B' },
      { tag: 'B10', mother: 'A5', gen: 'B' },
      { tag: 'C1', mother: 'B1', gen: 'C' },
    ],
    milkingAdults: 6,
    calvesAndGrowing: 13,
    herdSummary: 'A1 to A8 | B1 to B10 | C1',
    genABreakdown: ['A1 to A8 (8 animals)'],
    genBBreakdown: ['B1 to B10 (10 animals)'],
    genCBreakdown: ['C1 (1 animal)'],
  },
  {
    id: 8,
    month: 105,
    yearLabel: 'Year 8 & 9 (Month 105)',
    totalAnimals: 28,
    newBirthsCount: 9,
    newBirthsDescription: 'Cascade Growth: A9 (A1), B11-B15 (A2-A6), C2-C4 (from B1, B2, B3)',
    newBirthsList: [
      { tag: 'A9', mother: 'A1', gen: 'A' },
      { tag: 'B11', mother: 'A2', gen: 'B' },
      { tag: 'B12', mother: 'A3', gen: 'B' },
      { tag: 'B13', mother: 'A4', gen: 'B' },
      { tag: 'B14', mother: 'A5', gen: 'B' },
      { tag: 'B15', mother: 'A6', gen: 'B' },
      { tag: 'C2', mother: 'B1', gen: 'C' },
      { tag: 'C3', mother: 'B2', gen: 'C' },
      { tag: 'C4', mother: 'B3', gen: 'C' },
    ],
    milkingAdults: 9,
    calvesAndGrowing: 19,
    herdSummary: 'A1 to A9 | B1 to B15 | C1 to C4',
    genABreakdown: ['A1 to A9 (9 animals)'],
    genBBreakdown: ['B1 to B15 (15 animals)'],
    genCBreakdown: ['C1 to C4 (4 animals)'],
  },
  {
    id: 9,
    month: 120,
    yearLabel: 'Year 9 & 10 (Month 120)',
    totalAnimals: 41,
    newBirthsCount: 13,
    newBirthsDescription: 'Full 10-Year Compounding Peak: A10 (A1), B16-B21 (from A2-A7), C5-C10 (from B1-B6)',
    newBirthsList: [
      { tag: 'A10', mother: 'A1', gen: 'A' },
      { tag: 'B16', mother: 'A2', gen: 'B' },
      { tag: 'B17', mother: 'A3', gen: 'B' },
      { tag: 'B18', mother: 'A4', gen: 'B' },
      { tag: 'B19', mother: 'A5', gen: 'B' },
      { tag: 'B20', mother: 'A6', gen: 'B' },
      { tag: 'B21', mother: 'A7', gen: 'B' },
      { tag: 'C5', mother: 'B1', gen: 'C' },
      { tag: 'C6', mother: 'B2', gen: 'C' },
      { tag: 'C7', mother: 'B3', gen: 'C' },
      { tag: 'C8', mother: 'B4', gen: 'C' },
      { tag: 'C9', mother: 'B5', gen: 'C' },
      { tag: 'C10', mother: 'B6', gen: 'C' },
    ],
    milkingAdults: 19,
    calvesAndGrowing: 22,
    herdSummary: 'A1 to A10 (10) | B1 to B21 (21) | C1 to C10 (10)',
    genABreakdown: ['A1 to A10 (10 animals)'],
    genBBreakdown: ['B1 to B21 (21 animals)'],
    genCBreakdown: ['C1 to C10 (10 animals)'],
  },
];

export default function InteractiveCompoundingTree() {
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(8); // default to Month 120 peak
  const [selectedUnitCount, setSelectedUnitCount] = useState<number>(1);

  const currentStage = TIMELINE_DATA[selectedStageIndex];
  const scaledTotalAnimals = currentStage.totalAnimals * selectedUnitCount;
  const scaledMilkingAdults = currentStage.milkingAdults * selectedUnitCount;

  return (
    <section id="compounding-tree" className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-10 space-y-8 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-black text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Generation Tree</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            The 120-Month (10-Year) Compounding Tree
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Select any timeline milestone below to inspect herd expansion, new births, and active lineage generation breakdown.
          </p>
        </div>

        {/* Unit Multiplier Selector */}
        <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto">
          <span className="text-xs font-bold text-slate-500 px-2">Units:</span>
          {[1, 2, 5].map((u) => (
            <button
              key={u}
              type="button"
              onClick={() => setSelectedUnitCount(u)}
              className={`px-3 py-1 rounded-xl text-xs font-black transition-all cursor-pointer ${
                selectedUnitCount === u
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {u} {u === 1 ? 'Unit' : 'Units'} ({u * 2} to {u * 41} animals)
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Milestone Navigation Scrubber */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
          <span>Month 0 (Year 1)</span>
          <span className="text-emerald-700 font-black">Slide or Click Milestones</span>
          <span>Month 120 (Year 10)</span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-9 gap-1.5 sm:gap-2">
          {TIMELINE_DATA.map((stage, idx) => {
            const isSelected = idx === selectedStageIndex;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setSelectedStageIndex(idx)}
                className={`p-2.5 rounded-2xl text-center border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-600/30 ring-2 ring-emerald-500 ring-offset-2'
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider opacity-80">
                  M{stage.month}
                </span>
                <span className="block text-sm sm:text-base font-black">
                  {stage.totalAnimals * selectedUnitCount} <span className="text-[10px] font-normal">Head</span>
                </span>
                <span className="block text-[9px] font-medium opacity-75 truncate">
                  Y{Math.floor(stage.month / 12) + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Milestone Detail Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-emerald-950 text-white shadow-xl border border-emerald-800/40 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase tracking-wider border border-emerald-400/30">
              {currentStage.yearLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-black mt-2">
              Total Herd: {scaledTotalAnimals} Certified Buffaloes
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-2xl bg-white/10 text-center border border-white/10">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Milking Adults</span>
              <span className="text-lg font-black text-emerald-300">{scaledMilkingAdults}</span>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-white/10 text-center border border-white/10">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Calves & Growing Stock</span>
              <span className="text-lg font-black text-amber-300">
                {currentStage.calvesAndGrowing * selectedUnitCount}
              </span>
            </div>
          </div>
        </div>

        {/* New Births in this Stage */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-400">
            <Baby className="w-4 h-4" />
            <span>New Births During This Cycle ({currentStage.newBirthsCount * selectedUnitCount} Animals):</span>
          </div>
          <p className="text-sm text-slate-200 font-medium">
            {currentStage.newBirthsDescription}
          </p>

          {/* Tag Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {currentStage.newBirthsList.map((birth) => (
              <div
                key={birth.tag}
                className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-xs font-bold text-emerald-200 flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Tag {birth.tag}</span>
                <span className="text-[10px] text-slate-400">
                  (from {birth.mother} • Gen {birth.gen})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Lineage Tree Breakdown by Generation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-white/10">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-emerald-400 uppercase tracking-wide">
                Generation A (From A1)
              </span>
              <span className="text-xs font-bold bg-white/10 px-2 py-0.5 rounded-full">
                {currentStage.genABreakdown.length > 0 ? currentStage.genABreakdown[0] : 'None'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Direct daughters of original foundation mother A1.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-amber-400 uppercase tracking-wide">
                Generation B (Daughters of A2–A7)
              </span>
              <span className="text-xs font-bold bg-white/10 px-2 py-0.5 rounded-full">
                {currentStage.genBBreakdown.length > 0 ? currentStage.genBBreakdown[0] : '0 Animals'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Compound births from female calves reaching 45-month maturity.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-purple-400 uppercase tracking-wide">
                Generation C (Grand-daughters from B1–B6)
              </span>
              <span className="text-xs font-bold bg-white/10 px-2 py-0.5 rounded-full">
                {currentStage.genCBreakdown.length > 0 ? currentStage.genCBreakdown[0] : '0 Animals'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Third generation calves initiating the ultimate compounding curve.
            </p>
          </div>
        </div>
      </div>

      {/* Tree Table of Entire 10-Year Compounding Sequence */}
      <div className="space-y-4">
        <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-emerald-600" />
          <span>Complete 10-Year Compounding Schedule (1 Initial Unit = 2 Animals)</span>
        </h3>

        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-100 text-slate-700 font-black uppercase text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Milestone</th>
                <th className="py-3 px-4">New Births</th>
                <th className="py-3 px-4">Active Herd Composition</th>
                <th className="py-3 px-4 text-center">Total Animals</th>
                <th className="py-3 px-4 text-right">Estimated Herd Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {TIMELINE_DATA.map((item, i) => (
                <tr
                  key={item.id}
                  className={`hover:bg-emerald-50/50 transition-colors ${
                    i === selectedStageIndex ? 'bg-emerald-50 font-bold text-slate-900' : ''
                  }`}
                >
                  <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">
                    {item.yearLabel}
                  </td>
                  <td className="py-3 px-4">
                    {item.newBirthsDescription}
                  </td>
                  <td className="py-3 px-4 font-mono text-[11px] text-slate-700">
                    {item.herdSummary}
                  </td>
                  <td className="py-3 px-4 text-center whitespace-nowrap">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs">
                      {item.totalAnimals * selectedUnitCount}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right font-black text-slate-900 whitespace-nowrap">
                    ₹{((item.totalAnimals * selectedUnitCount) * 90000).toLocaleString('en-IN')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
