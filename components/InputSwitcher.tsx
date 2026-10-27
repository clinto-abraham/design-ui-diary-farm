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
  ClipboardList,
} from "lucide-react";

export const INPUT_PAGES = [
  { id: "page-1", name: "01. Pedigree & RFID Tag Registry", tagline: "Bovine Identity, Lineage & Horn Profiling" },
  { id: "page-2", name: "02. Milking Yield & Fat Quality Test", tagline: "AM/PM Yield, Fat % & Auto-Pricing Slip" },
  { id: "page-3", name: "03. AI Breeding & Gestation Calendar", tagline: "Sex-Sorted Semen & Calving Date Forecast" },
  { id: "page-4", name: "04. Veterinary Health & Vaccine Log", tagline: "Deworming, Disease Diagnostics & Withdrawal Safety" },
  { id: "page-5", name: "05. Feed, Fodder & Silage Batch Form", tagline: "Green Napier, Moisture % & Daily Ration Intake" },
  { id: "page-6", name: "06. Animal Asset Owner ₹2L Package Allotment", tagline: "KYC, Dividend Bank Account & Nominee Details" },
  { id: "page-7", name: "07. Farmgate Milk Dispatch Invoice", tagline: "Tanker Temperature, Composite Fat & Trip Waybill" },
  { id: "page-8", name: "08. Calf Nursery Birth & Growth Log", tagline: "Colostrum Feed within 1 Hr & Weight Milestones" },
  { id: "page-9", name: "09. Farm Opex, Payroll & Cash Voucher", tagline: "Labour Wages, Fodder Invoices & Ledger Approval" },
  { id: "page-10", name: "10. Biogas & Vermicompost Dispatch", tagline: "Circular Dung By-Products, Slurry & NPK Grades" },
  { id: "page-11", name: "11. BMC Chiller CIP Sanitation Log", tagline: "Caustic Wash, Acid Rinse & Hygiene Audit" },
  { id: "page-12", name: "12. Pasture Grazing & Napier Rotation", tagline: "Plot Grazing Days, Forage Height & Irrigation" },
  { id: "page-13", name: "13. Quarantine & Sick Bay Admission", tagline: "Isolation Stall, Contagion Alert & Vet Triage" },
  { id: "page-14", name: "14. Milking Machine Sensor Calibration", tagline: "Vacuum kPa, Pulsation Ratio & Liner Life" },
  { id: "page-15", name: "15. Artisanal Bilona Ghee Processing", tagline: "Curd Churning, Butter Recovery & Sealed Jars" },
  { id: "page-16", name: "16. Borewell Water Quality & Electrolytes", tagline: "TDS ppm, pH Balance & Chlorination Log" },
  { id: "page-17", name: "17. D2C Glass Bottle Subscription", tagline: "Direct Home Delivery, Daily Liters & Security Deposit" },
  { id: "page-18", name: "18. Livestock Insurance & Tag Claim", tagline: "Policy Tag Cover, Sum Insured & Surveyor Claim" },
  { id: "page-19", name: "19. Diesel Generator & Solar Grid Log", tagline: "Solar Inverter kWh, Diesel Liters & Power Backup" },
  { id: "page-20", name: "20. Biosecurity Wheel-Dip Gate Pass", tagline: "Vehicle Disinfection Dip, Boot Covers & Visitor Pass" },
];

export function InputSwitcher({ currentInputId }: { currentInputId?: string }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // Extract numeric index (1 to 20)
  const currentIndex = currentInputId
    ? parseInt(currentInputId.replace("page-", ""), 10)
    : 0;

  const hasPrevious = currentIndex > 1;
  const hasNext = currentIndex > 0 && currentIndex < INPUT_PAGES.length;

  const prevInput = hasPrevious ? INPUT_PAGES[currentIndex - 2] : null;
  const nextInput = hasNext ? INPUT_PAGES[currentIndex] : null;
  const current = INPUT_PAGES.find((d) => d.id === currentInputId);

  // Navigate with instant feedback
  const handleNavigate = (path: string) => {
    setIsNavigating(true);
    router.push(path);
  };

  // Keyboard navigation support
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
        handleNavigate(`/input/page-${currentIndex - 1}`);
      } else if (e.key === "ArrowRight" && hasNext) {
        handleNavigate(`/input/page-${currentIndex + 1}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, hasPrevious, hasNext]);

  return (
    <>
      {/* Loading overlay */}
      {isNavigating && (
        <div className="fixed inset-0 z-[100] bg-white/70 backdrop-blur-md flex flex-col items-center justify-center animate-in fade-in duration-150">
          <div className="w-full max-w-md p-6 space-y-4 animate-pulse bg-white rounded-3xl border border-stone-200 shadow-2xl text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-200 mx-auto" />
            <div className="w-3/4 h-6 bg-stone-200 rounded-lg mx-auto" />
            <div className="w-1/2 h-4 bg-stone-100 rounded-md mx-auto" />
            <p className="text-xs text-amber-800 font-mono font-bold">Loading Input Page Experience...</p>
          </div>
        </div>
      )}

      {/* LEFT SIDE: PREVIOUS INPUT PAGE BUTTON (Hidden on page-1) */}
      {hasPrevious && prevInput && (
        <div className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 group font-sans">
          <button
            onClick={() => handleNavigate(`/input/${prevInput.id}`)}
            className="flex items-center gap-2 p-3 sm:px-4 sm:py-3.5 rounded-2xl border border-stone-300 bg-white/95 text-stone-900 shadow-xl backdrop-blur-md hover:border-amber-500 hover:bg-amber-50 hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label={`Previous Input Page: ${prevInput.name}`}
            title={`Previous Input: ${prevInput.name} (Shortcut: Left Arrow ←)`}
          >
            <ChevronLeft className="w-5 h-5 text-amber-600 group-hover:-translate-x-1 transition-transform" />
            <div className="hidden lg:block text-left pr-1">
              <span className="text-[10px] uppercase font-mono text-stone-500 block tracking-wider">
                Previous Form (←)
              </span>
              <span className="text-xs font-bold text-stone-900 block max-w-[130px] truncate">
                {prevInput.name}
              </span>
            </div>
          </button>
        </div>
      )}

      {/* RIGHT SIDE: NEXT INPUT PAGE BUTTON (Hidden on page-20) */}
      {hasNext && nextInput && (
        <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 group font-sans">
          <button
            onClick={() => handleNavigate(`/input/${nextInput.id}`)}
            className="flex items-center gap-2 p-3 sm:px-4 sm:py-3.5 rounded-2xl border border-stone-300 bg-white/95 text-stone-900 shadow-xl backdrop-blur-md hover:border-amber-500 hover:bg-amber-50 hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label={`Next Input Page: ${nextInput.name}`}
            title={`Next Input: ${nextInput.name} (Shortcut: Right Arrow →)`}
          >
            <div className="hidden lg:block text-right pl-1">
              <span className="text-[10px] uppercase font-mono text-stone-500 block tracking-wider">
                Next Form (→)
              </span>
              <span className="text-xs font-bold text-stone-900 block max-w-[130px] truncate">
                {nextInput.name}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      {/* BOTTOM-RIGHT FLOATING INPUT SWITCHER */}
      <div className="fixed bottom-6 right-6 z-50 font-sans">
        {isOpen && (
          <div className="mb-3 w-80 sm:w-96 rounded-3xl border border-stone-300 bg-white/98 p-5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div>
                <p className="text-xs font-bold tracking-wider uppercase text-amber-700">
                  Input Form Gallery
                </p>
                <h4 className="text-sm font-black text-stone-900">20 Farm Input Forms</h4>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 rounded-xl bg-stone-100 px-3 py-1.5 text-xs font-bold text-stone-700 hover:bg-stone-200 transition"
              >
                <LayoutGrid className="w-3.5 h-3.5" /> All Hub
              </Link>
            </div>

            <div className="mt-3 max-h-96 overflow-y-auto space-y-1.5 pr-1 text-left">
              {INPUT_PAGES.map((item, idx) => {
                const active = item.id === currentInputId;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setIsOpen(false);
                      handleNavigate(`/input/${item.id}`);
                    }}
                    className={`w-full flex items-center justify-between rounded-2xl px-3 py-2 text-xs transition border text-left ${
                      active
                        ? "border-amber-500 bg-amber-50 text-amber-950 font-bold shadow-2xs"
                        : "border-stone-200 bg-stone-50/60 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-stone-200 text-[10px] font-bold text-stone-700">
                        {idx + 1}
                      </span>
                      <div>
                        <div className="font-bold text-stone-900">{item.name}</div>
                        <div className="text-[10px] text-stone-500 truncate max-w-[200px]">
                          {item.tagline}
                        </div>
                      </div>
                    </div>
                    {active && <CheckCircle className="h-4 w-4 text-amber-600 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2.5 rounded-full border-2 border-amber-400 bg-white/95 px-4 py-2.5 text-xs font-bold text-stone-900 shadow-xl backdrop-blur-md hover:border-amber-500 hover:bg-amber-50 transition"
        >
          <ClipboardList className="h-4 w-4 text-amber-600" />
          <span>
            {current ? `Form: ${current.name}` : "Switch Input Form (20 Forms)"}
          </span>
          {isOpen ? (
            <ChevronDown className="h-3.5 w-3.5 text-stone-500" />
          ) : (
            <ChevronUp className="h-3.5 w-3.5 text-stone-500" />
          )}
        </button>
      </div>
    </>
  );
}
