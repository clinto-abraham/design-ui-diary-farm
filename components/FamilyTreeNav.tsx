"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitBranch, Clock, Sun, Split, Sparkles, HelpCircle } from "lucide-react";

export const FAMILY_TREE_DESIGNS = [
  {
    id: "page-12",
    title: "1. Genealogical Pedigree",
    subtitle: "Classic Screenshot Style with Mating (=) & Junction Connectors",
    href: "/marketplace/page-12",
    icon: GitBranch,
    color: "emerald",
  },
  {
    id: "page-13",
    title: "2. 10-Yr Timeline Swimlanes",
    subtitle: "Horizontal Chronological Stream from Year 1 to Year 10",
    href: "/marketplace/page-13",
    icon: Clock,
    color: "amber",
  },
  {
    id: "page-14",
    title: "3. Radial Concentric Wheel",
    subtitle: "Concentric Generational Rings radiating from 2 Starter Animals",
    href: "/marketplace/page-14",
    icon: Sun,
    color: "indigo",
  },
  {
    id: "page-15",
    title: "4. Dual-Pillar Matrix",
    subtitle: "Split Mother Dam vs. Starter Calf Compounding Engines",
    href: "/marketplace/page-15",
    icon: Split,
    color: "rose",
  },
  {
    id: "page-16",
    title: "5. Glassmorphic 3D Network",
    subtitle: "Spatial Node Grid with Genetic Telemetry & Valuation Multiplier",
    href: "/marketplace/page-16",
    icon: Sparkles,
    color: "sky",
  },
];

export function FamilyTreeNav({ currentId }: { currentId: string }) {
  return (
    <div className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-300">
                10-Year Buffalo Lineage Plan
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Starter: 2 Animals (Mother + Calf) &rarr; 10-Year Compounding
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 mt-1 flex items-center gap-2">
              <span>Buffalo Family Tree Architect</span>
              <span className="text-xs px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
                5 Distinct Visual Designs
              </span>
            </h2>
          </div>

          {/* Quick Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {FAMILY_TREE_DESIGNS.map((item) => {
              const Icon = item.icon;
              const isActive = currentId === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm ring-2 ring-slate-900/10"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-400" : "text-slate-500"}`} />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
