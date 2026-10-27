"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  ChevronUp,
  ChevronDown,
  LayoutGrid,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export const DESIGNS = [
  { id: "design-1", name: "01. Swiss Minimalist", tagline: "Precision Agritech & Clean Editorial" },
  { id: "design-2", name: "02. Dark FinTech Terminal", tagline: "Wall-Street Quant & Yield Matrix" },
  { id: "design-3", name: "03. Vedic Organic Heritage", tagline: "Earthy Terracotta & Ayurvedic Lineage" },
  { id: "design-4", name: "04. Cyber Emerald Glass", tagline: "Neon Hologram & Frosted Aero-Glass" },
  { id: "design-5", name: "05. Simulator & Dashboard", tagline: "Interactive Sliders & Live Cashflow Engine" },
  { id: "design-6", name: "06. Neo-Brutalist Venture", tagline: "Heavy Borders, High-Contrast & Pop Shadows" },
  { id: "design-7", name: "07. Pastoral Luxury Club", tagline: "British Racing Green & Royal Gold Crest" },
  { id: "design-8", name: "08. Mobile-First App Stack", tagline: "App Viewport, Push Alerts & Gesture Cards" },
  { id: "design-9", name: "09. Generational Storyline", tagline: "Narrative Journey: Gauri & 88 Descendants" },
  { id: "design-10", name: "10. Futuristic Bio-Matrix", tagline: "AI Genetic Telemetry & Robotic Milking HUD" },
  { id: "design-11", name: "11. Nordic Minimalist", tagline: "Sage Green, Birch Ivory & Tranquil Calm" },
  { id: "design-12", name: "12. Retro Synthwave 80s", tagline: "Neon Sunset, Laser Horizon & Synth Counters" },
  { id: "design-13", name: "13. Japanese Wabi-Sabi", tagline: "Zen Harmony, Earth Charcoal & Stone Flow" },
  { id: "design-14", name: "14. Wall St. Pitchbook", tagline: "Institutional PE Deck & Balance Sheet" },
  { id: "design-15", name: "15. Solarpunk Eco-Farm", tagline: "Clean Solar Gold, Biogas & Zero Carbon" },
  { id: "design-16", name: "16. Art Deco Gilded Guild", tagline: "1920s Gilded Luxury, Gatsby Filigree & Gold" },
  { id: "design-17", name: "17. RPG Herd Tycoon", tagline: "Gamified Farm Tycoon, XP Levels & Perks" },
  { id: "design-18", name: "18. High-Craft Editorial", tagline: "Kinfolk Magazine, High-Fashion Bovine Art" },
  { id: "design-19", name: "19. Blueprint & CAD Spec", tagline: "Architectural Drafting & CAD Linework" },
  { id: "design-20", name: "20. Neumorphic Soft UI", tagline: "Soft Embossed Clay & Inset Displays" },
  { id: "design-21", name: "21. Dalal Street Bull", tagline: "BSE/NSE Trading Terminal & Rupee Ticker" },
  { id: "design-22", name: "22. Swarna Lakshmi Temple", tagline: "Akshaya Tritiya Gold, Crimson & Temple Wealth" },
  { id: "design-23", name: "23. Punjab Kisan Samrat", tagline: "Mustard Fields, Rohtak Murrah Champions & Pride" },
  { id: "design-24", name: "24. Gujarati Shubh Labh", tagline: "Traditional Red Bahi-Khata Ledger & Vyapar" },
  { id: "design-25", name: "25. Bengaluru Agritech VC", tagline: "Kormangala Tech Startup Pitch & Biological ARR" },
  { id: "design-26", name: "26. Gulf NRI Remittance", tagline: "Dubai Rupee Hedge & NRE High-Yield Return" },
  { id: "design-27", name: "27. Dravidian Annapurna", tagline: "Temple Brass, Turmeric & Traditional Ghee" },
  { id: "design-28", name: "28. Marwari Parivaar Trust", tagline: "Royal Indigo, Sandstone & Centuries Legacy" },
  { id: "design-29", name: "29. Chai Tapri to Dairy King", tagline: "Kulhad Brown & Daily Indian Consumer Cashflow" },
  { id: "design-30", name: "30. Bharat Kisan GovTech", tagline: "NABARD & PM-Kisan National Federation Style" },
  { id: "design-31", name: "31. Ayurvedic Rasayana", tagline: "Sandalwood, Copper Bilona & Vedic Wellness" },
  { id: "design-32", name: "32. Holy Sangam River", tagline: "Ganga Twilight, Marigold & Sacred Sanctuary" },
  { id: "design-33", name: "33. Neo-UPI FinTech App", tagline: "PhonePe/GPay Style, Auto-Pay & QR Simulator" },
  { id: "design-34", name: "34. Royal Rajput Haveli", tagline: "Jodhpur Blue, Jaisalmer Stone & Mewar Crest" },
  { id: "design-35", name: "35. Desi Mithai Syndicate", tagline: "Halwai B2B Demand, Khoya & 8% Milk Fat Gold" },
  { id: "design-36", name: "36. Silicon Valley Desi Club", tagline: "Bay Area Techies Agri-Angel Syndicate" },
  { id: "design-37", name: "37. Defense Veterans Pension", tagline: "Military Olive, Armed Forces Family Security" },
  { id: "design-38", name: "38. Kerala Coconut Grove", tagline: "Tropical Backwaters & God's Own Dairy Farm" },
  { id: "design-39", name: "39. Wedding Shagun Stridhan", tagline: "Bridal Crimson, Zardozi Gold & Living Gift" },
  { id: "design-40", name: "40. Quick-Commerce Dark Store", tagline: "Zepto/Blinkit 10-Min Farm-to-Fridge Pipeline" },
  { id: "design-41", name: "41. Cosmic Dairy Observatory", tagline: "Solar-Lunar Rhythms & Nakshatra Milking Cycles" },
  { id: "design-42", name: "42. Himalayan Saffron Valley", tagline: "Alpine Snowmelt, Crocus Purple & Pure Butterfat" },
  { id: "design-43", name: "43. Jaipur Phulkari Mela", tagline: "Festive Rangoli Mandalas, Saffron & Prosperity Bunting" },
  { id: "design-44", name: "44. Golden Honeycomb Permaculture", tagline: "Hexagonal Biomimicry, Clover & Zero-Waste Pasture" },
  { id: "design-45", name: "45. Mysore Sandalwood Durbar", tagline: "Maharaja Royal Treasury, Silk Brocade & Sacred Herd" },
  { id: "design-46", name: "46. Kerala Backwater Hydro-Oasis", tagline: "Floating Reed Pastures, Cooling Lagoons & 8.8% Fat" },
  { id: "design-47", name: "47. Origami Papercraft Atelier", tagline: "Folded Pastel Kraft, 3D Pop-Up Layers & Washi Stamps" },
  { id: "design-48", name: "48. Solarium Sky-Greenhouse", tagline: "Vertical Hydroponic Fodder & Daylight Glass Arcs" },
  { id: "design-49", name: "49. Mediterranean Fromagerie", tagline: "Artisanal Buffalo Burrata, Terracotta & Coastal Gold" },
  { id: "design-50", name: "50. Maha Bilona Golden Jubilee", tagline: "Celebratory Butter Churn, Temple Bells & ₹3.25 Cr Ticker" },
];

export function DesignSwitcher({ currentDesignId }: { currentDesignId?: string }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const isHomePrefix = currentDesignId?.includes("home") || currentDesignId?.startsWith("page-");
  const prefix = isHomePrefix ? "/home/page-" : "/design-";

  // Extract numeric index (1 to 50)
  const currentIndex = currentDesignId
    ? parseInt(currentDesignId.replace(/^(home\/page-|page-|design-)/, ""), 10)
    : 0;

  const hasPrevious = currentIndex > 1;
  const hasNext = currentIndex > 0 && currentIndex < DESIGNS.length;

  const prevDesign = hasPrevious ? DESIGNS[currentIndex - 2] : null;
  const nextDesign = hasNext ? DESIGNS[currentIndex] : null;
  const current = DESIGNS.find((d) => d.id === `design-${currentIndex}`);

  // Navigate with instant skeleton feedback
  const handleNavigate = (path: string) => {
    setIsNavigating(true);
    router.push(path);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input or textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "ArrowLeft" && hasPrevious) {
        handleNavigate(`${prefix}${currentIndex - 1}`);
      } else if (e.key === "ArrowRight" && hasNext) {
        handleNavigate(`${prefix}${currentIndex + 1}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, hasPrevious, hasNext, prefix]);

  return (
    <>
      {/* Skeleton Transition Overlay */}
      {isNavigating && (
        <div className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center animate-in fade-in duration-150">
          <div className="w-full max-w-3xl p-8 space-y-6 animate-pulse">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="w-48 h-8 bg-slate-800 rounded-xl" />
              <div className="w-24 h-6 bg-slate-800 rounded-lg" />
            </div>
            <div className="w-3/4 h-12 bg-slate-800 rounded-2xl" />
            <div className="grid grid-cols-3 gap-4">
              <div className="h-28 bg-slate-900 border border-slate-800 rounded-2xl" />
              <div className="h-28 bg-slate-900 border border-slate-800 rounded-2xl" />
              <div className="h-28 bg-slate-900 border border-slate-800 rounded-2xl" />
            </div>
            <div className="h-44 bg-slate-900/60 border border-slate-800 rounded-2xl" />
            <div className="text-center text-xs font-mono text-emerald-400">
              Loading Design Experience...
            </div>
          </div>
        </div>
      )}

      {/* LEFT SIDE: PREVIOUS DESIGN ARROW BUTTON */}
      {/* Strict Condition: Only rendered if hasPrevious (currentIndex > 1). NOT rendered on first page! */}
      {hasPrevious && prevDesign && (
        <div className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 group font-sans">
          <button
            onClick={() => handleNavigate(`${prefix}${currentIndex - 1}`)}
            className="flex items-center gap-2 p-3 sm:px-4 sm:py-3.5 rounded-2xl border border-slate-700/80 bg-slate-900/90 text-white shadow-2xl backdrop-blur-xl hover:border-emerald-400 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label={`Previous Design: ${prevDesign.name}`}
            title={`Previous Design: ${prevDesign.name} (Shortcut: Left Arrow ←)`}
          >
            <ChevronLeft className="w-5 h-5 text-emerald-400 group-hover:-translate-x-1 transition-transform" />
            <div className="hidden lg:block text-left pr-1">
              <span className="text-[10px] uppercase font-mono text-slate-400 block tracking-wider">
                Previous (←)
              </span>
              <span className="text-xs font-bold text-white block max-w-[120px] truncate">
                {prevDesign.name}
              </span>
            </div>
          </button>
        </div>
      )}

      {/* RIGHT SIDE: NEXT DESIGN ARROW BUTTON */}
      {/* Strict Condition: Only rendered if hasNext (currentIndex < 50). NOT rendered on last page! */}
      {hasNext && nextDesign && (
        <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 group font-sans">
          <button
            onClick={() => handleNavigate(`${prefix}${currentIndex + 1}`)}
            className="flex items-center gap-2 p-3 sm:px-4 sm:py-3.5 rounded-2xl border border-slate-700/80 bg-slate-900/90 text-white shadow-2xl backdrop-blur-xl hover:border-emerald-400 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label={`Next Design: ${nextDesign.name}`}
            title={`Next Design: ${nextDesign.name} (Shortcut: Right Arrow →)`}
          >
            <div className="hidden lg:block text-right pl-1">
              <span className="text-[10px] uppercase font-mono text-slate-400 block tracking-wider">
                Next (→)
              </span>
              <span className="text-xs font-bold text-white block max-w-[120px] truncate">
                {nextDesign.name}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      {/* BOTTOM-RIGHT FLOATING CATALOG SWITCHER */}
      <div className="fixed bottom-6 right-6 z-50 font-sans">
        {isOpen && (
          <div className="mb-3 w-80 sm:w-96 rounded-2xl border border-slate-700/80 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
                  Design Portfolio Switcher
                </p>
                <h4 className="text-sm font-bold text-white">Compare 50 UI Designs</h4>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/input/page-1"
                  className="inline-flex items-center gap-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-1 text-xs font-medium hover:bg-amber-500/30 transition"
                >
                  📝 Input Forms
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1 rounded-lg bg-slate-800 px-2 py-1 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition"
                >
                  <LayoutGrid className="w-3.5 h-3.5" /> All Hub
                </Link>
              </div>
            </div>

            <div className="mt-3 max-h-96 overflow-y-auto space-y-1.5 pr-1 text-left">
              {DESIGNS.map((item, idx) => {
                const active = idx + 1 === currentIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setIsOpen(false);
                      handleNavigate(`${prefix}${idx + 1}`);
                    }}
                    className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-xs transition border text-left ${
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
                  </button>
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
            {current ? `Viewing: ${current.name}` : "Switch UI Design (50 Designs)"}
          </span>
          {isOpen ? (
            <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
          ) : (
            <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
          )}
        </button>
      </div>
    </>
  );
}
