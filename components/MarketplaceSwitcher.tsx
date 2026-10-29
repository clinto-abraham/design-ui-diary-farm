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
  ShoppingBag,
  Truck,
  ArrowRight,
  Camera,
  Dna,
  Layers,
  Activity,
  Calculator,
  Zap,
  Leaf,
  ShieldCheck,
  Eye,
  GitBranch,
  Compass,
  FileText,
  Sliders,
  Briefcase,
  BarChart3,
} from "lucide-react";

export const MARKETPLACE_PAGES = [
  {
    id: "page-1",
    name: "01. Livestock Orders & Transit Telemetry",
    tagline: "Live GPS Tracker, Animal Health Dossier, Milestones & Waybill",
    badge: "Active Orders",
    icon: Truck,
    color: "from-sky-500 to-indigo-600",
  },
  {
    id: "page-2",
    name: "02. Studio Stepper & 360° Photo Showcase",
    tagline: "Multi-Step Wizard, Multi-Angle Photos, Udder Conformation & Rate Fixing",
    badge: "Studio Wizard",
    icon: Camera,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "page-3",
    name: "03. Bovine Biometric & Pedigree Dossier",
    tagline: "Sire Genetics, Genomic Bloodline, Fat % Radar & RFID Chip Generator",
    badge: "Pedigree Dossier",
    icon: Dna,
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: "page-4",
    name: "04. Multi-Unit Herd Lot & Batch Builder",
    tagline: "Bulk Livestock Lot (1-10 Buffaloes), Scale Aggregator & Vehicle Capacity",
    badge: "Lot Builder",
    icon: Layers,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "page-5",
    name: "05. Anatomy Mapper & Conformation Scorer",
    tagline: "Body Condition Scoring (BCS 1-5), Visual Udder Hotspots & Milk Forecasting",
    badge: "Anatomy Scoring",
    icon: Activity,
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "page-6",
    name: "06. Fintech Escrow Package Configurator",
    tagline: "₹2,00,000 Itemized Rate Fixing, Insurance Reserve & 30% Dividend Model",
    badge: "Fintech Escrow",
    icon: Calculator,
    color: "from-emerald-600 to-cyan-600",
  },
  {
    id: "page-7",
    name: "07. Auction & Mandi Fast-Entry Slip",
    tagline: "Farmgate Intake Slip, Bluetooth Scale Sync, Camera Capture & Auto-Tag",
    badge: "Fast Intake",
    icon: Zap,
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: "page-8",
    name: "08. Organic Pasture & A2 Purity Certified",
    tagline: "Pasture Grazing Metrics, A2 Beta-Casein Lab Cert & Zero-Antibiotic Log",
    badge: "Organic & A2",
    icon: Leaf,
    color: "from-teal-500 to-emerald-600",
  },
  {
    id: "page-9",
    name: "09. Vet Health Gate & Quarantine Admission",
    tagline: "Brucellosis/TB/JD Screening, Vaccine Batch Logs & Isolation Stanchion",
    badge: "Clinical Gate",
    icon: ShieldCheck,
    color: "from-sky-600 to-blue-700",
  },
  {
    id: "page-10",
    name: "10. Split-Screen WYSIWYG Live Marketplace Studio",
    tagline: "Real-Time Dual Pane: Package Input Form & Live Marketplace Customer Card",
    badge: "Live WYSIWYG",
    icon: Eye,
    color: "from-violet-600 to-fuchsia-600",
  },
  {
    id: "page-11",
    name: "11. 10-Year Genetic Compounding Multiplier",
    tagline: "Mother + Female Calf Sex-Sorted Semen Compounding from 1 to 41 Head",
    badge: "Compounding Tree",
    icon: GitBranch,
    color: "from-amber-600 to-rose-600",
  },
  {
    id: "page-12",
    name: "12. Genealogical Pedigree Family Tree",
    tagline: "Screenshot Style Tree • 10-Yr Plan from 2 Starter Buffaloes • Tag ID & Age",
    badge: "Pedigree Tree #1",
    icon: GitBranch,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "page-13",
    name: "13. 10-Year Horizontal Timeline Lineage",
    tagline: "Chronological Calving Stream • Year 1 to 10 Milestone Swimlanes",
    badge: "Timeline Tree #2",
    icon: Layers,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "page-14",
    name: "14. Radial Concentric Pedigree Sunburst",
    tagline: "Concentric Generational Rings • Ancestral Lineage & Yield Compounding",
    badge: "Sunburst Tree #3",
    icon: Dna,
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: "page-15",
    name: "15. Dual-Pillar Lineage Branching Matrix",
    tagline: "Split Dam vs. Starter Calf Compounding Engines • Annual Multiplier",
    badge: "Dual Matrix Tree #4",
    icon: Activity,
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "page-16",
    name: "16. Isometric Glassmorphic Herd Network",
    tagline: "3D Elevated Node Network • Live Genetic Telemetry & Asset Valuation",
    badge: "3D Network Tree #5",
    icon: Sparkles,
    color: "from-sky-500 to-blue-600",
  },
  {
    id: "page-17",
    name: "17. Emerald Sovereign (Dark Luxury Estate)",
    tagline: "Screenshot Style Dark Luxury • 1 to 41 Animals in 10 Yrs • 14 Age Tiers",
    badge: "Landing 1 • Sovereign",
    icon: Sparkles,
    color: "from-emerald-600 to-teal-700",
  },
  {
    id: "page-18",
    name: "18. Clean Tech Agro-SaaS (Modern Ivory)",
    tagline: "Linear/Stripe Style • Multi-Species Buffalo/Cow/Goat • Unit Economics",
    badge: "Landing 2 • Clean Tech",
    icon: Layers,
    color: "from-teal-600 to-emerald-500",
  },
  {
    id: "page-19",
    name: "19. The Interactive Compounding Engine",
    tagline: "Fintech Terminal • Real-Time Sliders (1-20 Pkgs) • 10-Yr Wealth Curve",
    badge: "Landing 3 • Simulator",
    icon: Sliders,
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "page-20",
    name: "20. The Editorial Financial Journal",
    tagline: "FT / Broadsheet Paper Style • Pro-Forma Schedule • Macro Agrarian Whitepaper",
    badge: "Landing 4 • Editorial",
    icon: FileText,
    color: "from-amber-700 to-stone-800",
  },
  {
    id: "page-21",
    name: "21. Nordic Minimalist & High-Density Telemetry",
    tagline: "Precision Monospace Console • IoT Shed Sensors • Tag Nomenclature Specs",
    badge: "Landing 5 • Nordic Data",
    icon: Activity,
    color: "from-zinc-500 to-zinc-700",
  },
  {
    id: "page-22",
    name: "22. Chronological Pedigree Journey",
    tagline: "Visual Roadmap Stepper • Month 0 to Month 120 Milestone Progression",
    badge: "Landing 6 • Journey",
    icon: Compass,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "page-23",
    name: "23. Bento Grid Executive Showcase",
    tagline: "Modern Apple Bento Box • 7 Modular Pillars • Instant Scale Multiplier",
    badge: "Landing 7 • Bento Box",
    icon: LayoutGrid,
    color: "from-purple-600 to-indigo-600",
  },
  {
    id: "page-24",
    name: "24. Obsidian Cyber-Fintech (VC Pitch Deck)",
    tagline: "Private Equity Dark Deck • 30.6% Net IRR • Downside Protection Shield",
    badge: "Landing 8 • Cyber Deck",
    icon: Zap,
    color: "from-emerald-400 to-cyan-500",
  },
  {
    id: "page-25",
    name: "25. Commercial Dairy Institutional Deck",
    tagline: "Macro Asset Benchmark Matrix • Cashflow Waterfall • Governance & Pashu Bima",
    badge: "Landing 9 • Institutional",
    icon: Briefcase,
    color: "from-blue-600 to-indigo-800",
  },
  {
    id: "page-26",
    name: "26. Pastoral Countryside & Farm Sanctuary",
    tagline: "Warm Terra Cotta • Farm-to-Table Purity • Free Weekend Farm Stays",
    badge: "Landing 10 • Pastoral",
    icon: Leaf,
    color: "from-amber-600 to-orange-700",
  },
  {
    id: "page-27",
    name: "27. Aero-Floating Crest & Sovereign Parallax",
    tagline: "Dynamic Floating Crest Animations • Giant Ambient Watermark • Interactive Canvas",
    badge: "Floating Crest #11",
    icon: Sparkles,
    color: "from-emerald-400 to-amber-500",
  },
  {
    id: "page-28",
    name: "28. Ultra-Compact Waving Header & Animal Picker",
    tagline: "Slim Animated Rainbow Wave Header • Instant Animal Cards • 4 Waving Styles",
    badge: "Compact Waving #12",
    icon: Sparkles,
    color: "from-fuchsia-500 via-amber-400 to-emerald-400",
  },
];

export function MarketplaceSwitcher({ currentMarketplaceId }: { currentMarketplaceId?: string }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const currentIndex = currentMarketplaceId
    ? parseInt(currentMarketplaceId.replace("page-", ""), 10)
    : 0;

  const hasPrevious = currentIndex > 1;
  const hasNext = currentIndex > 0 && currentIndex < MARKETPLACE_PAGES.length;

  const prevPage = hasPrevious ? MARKETPLACE_PAGES[currentIndex - 2] : null;
  const nextPage = hasNext ? MARKETPLACE_PAGES[currentIndex] : null;
  const current = MARKETPLACE_PAGES.find((d) => d.id === currentMarketplaceId);

  const handleNavigate = (path: string) => {
    setIsNavigating(true);
    router.push(path);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        document.activeElement?.tagName === "SELECT"
      ) {
        return;
      }

      if (e.key === "ArrowLeft" && hasPrevious) {
        handleNavigate(`/marketplace/page-${currentIndex - 1}`);
      } else if (e.key === "ArrowRight" && hasNext) {
        handleNavigate(`/marketplace/page-${currentIndex + 1}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, hasPrevious, hasNext]);

  return (
    <>
      {/* Loading overlay */}
      {isNavigating && (
        <div className="fixed inset-0 z-[100] bg-white/80 backdrop-blur-md flex flex-col items-center justify-center animate-in fade-in duration-150">
          <div className="w-full max-w-md p-6 space-y-4 animate-pulse bg-white rounded-3xl border border-sky-200 shadow-2xl text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-sky-500/20">
              <ShoppingBag className="w-7 h-7 animate-bounce" />
            </div>
            <div className="w-3/4 h-6 bg-slate-200 rounded-lg mx-auto" />
            <div className="w-1/2 h-4 bg-slate-100 rounded-md mx-auto" />
            <p className="text-xs text-sky-800 font-mono font-bold">Switching Marketplace Experience...</p>
          </div>
        </div>
      )}

      {/* LEFT SIDE: PREVIOUS PAGE BUTTON (Hidden on page-1) */}
      {hasPrevious && prevPage && (
        <div className="fixed left-3 top-1/2 -translate-y-1/2 z-50 group">
          <button
            onClick={() => handleNavigate(`/marketplace/${prevPage.id}`)}
            className="flex items-center gap-2 p-3 bg-white/95 hover:bg-sky-600 text-slate-700 hover:text-white rounded-2xl shadow-xl border border-sky-100 backdrop-blur transition-all duration-300 hover:scale-105 active:scale-95 group-hover:pr-4"
            aria-label={`Previous: ${prevPage.name}`}
          >
            <ChevronLeft className="w-5 h-5 text-sky-600 group-hover:text-white transition-colors" />
            <div className="hidden group-hover:block text-left transition-all max-w-[190px] truncate">
              <p className="text-[10px] uppercase font-bold text-sky-300 leading-none">Previous</p>
              <p className="text-xs font-black truncate">{prevPage.name}</p>
            </div>
          </button>
        </div>
      )}

      {/* RIGHT SIDE: NEXT PAGE BUTTON (Hidden on last page) */}
      {hasNext && nextPage && (
        <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 group">
          <button
            onClick={() => handleNavigate(`/marketplace/${nextPage.id}`)}
            className="flex items-center gap-2 p-3 bg-white/95 hover:bg-sky-600 text-slate-700 hover:text-white rounded-2xl shadow-xl border border-sky-100 backdrop-blur transition-all duration-300 hover:scale-105 active:scale-95 group-hover:pl-4"
            aria-label={`Next: ${nextPage.name}`}
          >
            <div className="hidden group-hover:block text-right transition-all max-w-[190px] truncate">
              <p className="text-[10px] uppercase font-bold text-sky-300 leading-none">Next</p>
              <p className="text-xs font-black truncate">{nextPage.name}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-sky-600 group-hover:text-white transition-colors" />
          </button>
        </div>
      )}

      {/* FLOATING BOTTOM CONTROLLER */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3.5 py-2.5 bg-white/95 hover:bg-white text-slate-700 text-xs font-bold rounded-full shadow-lg border border-sky-100 backdrop-blur transition hover:scale-105"
        >
          <LayoutGrid className="w-4 h-4 text-sky-600" />
          <span>Home Hub</span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white rounded-full shadow-xl shadow-sky-600/30 transition hover:scale-105"
        >
          <ShoppingBag className="w-4 h-4 text-sky-200" />
          <span className="text-xs font-black">
            Marketplace Modules {currentIndex > 0 ? `(${currentIndex}/${MARKETPLACE_PAGES.length})` : ""}
          </span>
          {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>
      </div>

      {/* DRAWER POPUP */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-40 w-[420px] max-h-[78vh] bg-white rounded-3xl shadow-2xl border border-sky-100 p-4 overflow-y-auto animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <p className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <ShoppingBag className="w-4 h-4 text-sky-600" />
                Marketplace Design Catalog ({MARKETPLACE_PAGES.length})
              </p>
              <p className="text-[11px] text-slate-500 font-medium">Orders &amp; 10 Animal Package Onboarding UIs</p>
            </div>
            <span className="text-[10px] font-mono font-bold bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full">
              Live Showcase
            </span>
          </div>

          <div className="mt-3 space-y-1.5">
            {MARKETPLACE_PAGES.map((page) => {
              const isSelected = page.id === currentMarketplaceId;
              const IconComp = page.icon;
              return (
                <button
                  key={page.id}
                  onClick={() => {
                    setIsOpen(false);
                    handleNavigate(`/marketplace/${page.id}`);
                  }}
                  className={`w-full text-left p-3 rounded-2xl transition flex items-center justify-between group ${
                    isSelected
                      ? "bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-300"
                      : "hover:bg-slate-50 border border-transparent"
                  }`}
                >
                  <div className="flex items-start gap-2.5 pr-2">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${isSelected ? "bg-sky-600 text-white" : "bg-slate-100 text-slate-600 group-hover:bg-sky-100 group-hover:text-sky-700"}`}>
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                          {page.name}
                        </span>
                        {isSelected && <CheckCircle className="w-3.5 h-3.5 text-sky-600" />}
                      </div>
                      <p className="text-[10px] text-slate-500 line-clamp-1">{page.tagline}</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-sky-100 group-hover:text-sky-800 shrink-0">
                    {page.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
