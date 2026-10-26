"use client";

import Link from "next/link";
import { useState } from "react";
import { Sparkles, ChevronUp, ChevronDown, LayoutGrid, CheckCircle } from "lucide-react";

export const DESIGNS = [
  {
    id: "design-1",
    name: "01. Swiss Minimalist",
    tagline: "Precision Agritech & Clean Editorial",
    accent: "bg-emerald-500 text-black",
  },
  {
    id: "design-2",
    name: "02. Dark FinTech Terminal",
    tagline: "Wall-Street Quant & Yield Matrix",
    accent: "bg-cyan-500 text-black",
  },
  {
    id: "design-3",
    name: "03. Vedic Organic Heritage",
    tagline: "Earthy Terracotta & Ayurvedic Lineage",
    accent: "bg-amber-600 text-white",
  },
  {
    id: "design-4",
    name: "04. Cyber Emerald Glass",
    tagline: "Neon Hologram & Frosted Aero-Glass",
    accent: "bg-teal-400 text-black",
  },
  {
    id: "design-5",
    name: "05. Simulator & Dashboard",
    tagline: "Interactive Sliders & Live Cashflow Engine",
    accent: "bg-indigo-500 text-white",
  },
  {
    id: "design-6",
    name: "06. Neo-Brutalist Venture",
    tagline: "Heavy Borders, High-Contrast & Pop Shadows",
    accent: "bg-yellow-400 text-black",
  },
  {
    id: "design-7",
    name: "07. Pastoral Luxury Club",
    tagline: "British Racing Green & Royal Gold Crest",
    accent: "bg-yellow-600 text-white",
  },
  {
    id: "design-8",
    name: "08. Mobile-First App Stack",
    tagline: "App Viewport, Push Alerts & Gesture Cards",
    accent: "bg-blue-500 text-white",
  },
  {
    id: "design-9",
    name: "09. Generational Storyline",
    tagline: "Narrative Journey: Gauri & 88 Descendants",
    accent: "bg-orange-500 text-white",
  },
  {
    id: "design-10",
    name: "10. Futuristic Bio-Matrix",
    tagline: "AI Genetic Telemetry & Robotic Milking HUD",
    accent: "bg-fuchsia-500 text-white",
  },
  {
    id: "design-11",
    name: "11. Nordic Minimalist",
    tagline: "Sage Green, Birch Ivory & Tranquil Calm",
    accent: "bg-emerald-700 text-white",
  },
  {
    id: "design-12",
    name: "12. Retro Synthwave 80s",
    tagline: "Neon Sunset, Laser Horizon & Synth Counters",
    accent: "bg-pink-500 text-white",
  },
  {
    id: "design-13",
    name: "13. Japanese Wabi-Sabi",
    tagline: "Zen Harmony, Earth Charcoal & Stone Flow",
    accent: "bg-stone-500 text-white",
  },
  {
    id: "design-14",
    name: "14. Wall St. Pitchbook",
    tagline: "Institutional PE Deck & Balance Sheet",
    accent: "bg-blue-900 text-amber-300",
  },
  {
    id: "design-15",
    name: "15. Solarpunk Eco-Farm",
    tagline: "Clean Solar Gold, Biogas & Zero Carbon",
    accent: "bg-lime-500 text-black",
  },
  {
    id: "design-16",
    name: "16. Art Deco Gilded Guild",
    tagline: "1920s Gilded Luxury, Gatsby Filigree & Gold",
    accent: "bg-amber-400 text-black",
  },
  {
    id: "design-17",
    name: "17. RPG Herd Tycoon",
    tagline: "Gamified Farm Tycoon, XP Levels & Perks",
    accent: "bg-purple-500 text-white",
  },
  {
    id: "design-18",
    name: "18. High-Craft Editorial",
    tagline: "Kinfolk Magazine, High-Fashion Bovine Art",
    accent: "bg-neutral-800 text-white",
  },
  {
    id: "design-19",
    name: "19. Blueprint & CAD Spec",
    tagline: "Architectural Drafting, CAD Callouts & Schematics",
    accent: "bg-cyan-600 text-white",
  },
  {
    id: "design-20",
    name: "20. Neumorphic Soft UI",
    tagline: "Soft Embossed Clay, Inset Displays & 3D Tactile",
    accent: "bg-slate-400 text-black",
  },
];

export function DesignSwitcher({ currentDesignId }: { currentDesignId?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const current = DESIGNS.find((d) => d.id === currentDesignId);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl border border-slate-700/80 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
                Design Portfolio Switcher
              </p>
              <h4 className="text-sm font-bold text-white">Compare 20 UI Designs</h4>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition"
            >
              <LayoutGrid className="w-3.5 h-3.5" /> All Hub
            </Link>
          </div>

          <div className="mt-3 max-h-96 overflow-y-auto space-y-1.5 pr-1 text-left">
            {DESIGNS.map((item, idx) => {
              const active = item.id === currentDesignId;
              return (
                <Link
                  key={item.id}
                  href={`/${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs transition border ${
                    active
                      ? "border-emerald-500/80 bg-emerald-950/40 text-emerald-300 font-semibold"
                      : "border-slate-800/80 bg-slate-800/40 text-slate-300 hover:bg-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-slate-800 text-[10px] font-bold text-slate-400">
                      {idx + 1}
                    </span>
                    <div>
                      <div className="font-semibold text-slate-100">{item.name}</div>
                      <div className="text-[10px] text-slate-400 truncate max-w-[190px]">
                        {item.tagline}
                      </div>
                    </div>
                  </div>
                  {active && <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-slate-900/90 px-4 py-2.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md hover:border-emerald-400 hover:bg-slate-800 transition"
      >
        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <Sparkles className="h-4 w-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
        <span>
          {current ? `Viewing: ${current.name}` : "Switch UI Design (20 Designs)"}
        </span>
        {isOpen ? (
          <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
        ) : (
          <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
        )}
      </button>
    </div>
  );
}
