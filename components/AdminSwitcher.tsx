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
  Shield,
  Layers,
  ArrowRight,
} from "lucide-react";

export const ADMIN_PAGES = [
  {
    id: "page-1",
    name: "01. Farm Inbound Logistics & Fleet Dispatch",
    tagline: "Live Fleet Telemetry, Stanchion Allocations & Quarantine Health Gate",
    badge: "Inbound Transit",
    color: "from-amber-500 to-rose-600",
  },
  {
    id: "page-2",
    name: "02. Animal Herd Registry & RFID Ear-Tag Master",
    tagline: "10-Year Compounding Tree, Sire Lineage & Lactation Metrics",
    badge: "Herd Master",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "page-3",
    name: "03. Animal Asset Owner ₹2L Portfolio & Dividend Ledger",
    tagline: "30% Net Profit Escrow, Daily Milk Production Invoices & Nominees",
    badge: "Portfolio Ledger",
    color: "from-indigo-500 to-blue-600",
  },
  {
    id: "page-4",
    name: "04. Livestock Insurance Claims & Replacement",
    tagline: "Post-Mortem Survey, Zero-Exit Replacement & Farm Shortfall Shield",
    badge: "Claims Desk",
    color: "from-purple-500 to-pink-600",
  },
];

export function AdminSwitcher({ currentAdminId }: { currentAdminId?: string }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const currentIndex = currentAdminId
    ? parseInt(currentAdminId.replace("page-", ""), 10)
    : 0;

  const hasPrevious = currentIndex > 1;
  const hasNext = currentIndex > 0 && currentIndex < ADMIN_PAGES.length;

  const prevPage = hasPrevious ? ADMIN_PAGES[currentIndex - 2] : null;
  const nextPage = hasNext ? ADMIN_PAGES[currentIndex] : null;
  const current = ADMIN_PAGES.find((d) => d.id === currentAdminId);

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
        handleNavigate(`/admin/page-${currentIndex - 1}`);
      } else if (e.key === "ArrowRight" && hasNext) {
        handleNavigate(`/admin/page-${currentIndex + 1}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, hasPrevious, hasNext]);

  return (
    <>
      {/* Loading overlay */}
      {isNavigating && (
        <div className="fixed inset-0 z-[100] bg-white/75 backdrop-blur-md flex flex-col items-center justify-center animate-in fade-in duration-150">
          <div className="w-full max-w-md p-6 space-y-4 animate-pulse bg-white rounded-3xl border border-rose-200 shadow-2xl text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-rose-500/20">
              <Shield className="w-7 h-7 animate-bounce" />
            </div>
            <div className="w-3/4 h-6 bg-slate-200 rounded-lg mx-auto" />
            <div className="w-1/2 h-4 bg-slate-100 rounded-md mx-auto" />
            <p className="text-xs text-rose-800 font-mono font-bold">Switching Admin Operations Console...</p>
          </div>
        </div>
      )}

      {/* LEFT SIDE: PREVIOUS PAGE BUTTON (Hidden on page-1) */}
      {hasPrevious && prevPage && (
        <div className="fixed left-3 top-1/2 -translate-y-1/2 z-50 group">
          <button
            onClick={() => handleNavigate(`/admin/${prevPage.id}`)}
            className="flex items-center gap-2 p-3 bg-white/95 hover:bg-rose-600 text-slate-700 hover:text-white rounded-2xl shadow-xl border border-rose-100 backdrop-blur transition-all duration-300 hover:scale-105 active:scale-95 group-hover:pr-4"
            aria-label={`Previous: ${prevPage.name}`}
          >
            <ChevronLeft className="w-5 h-5 text-rose-600 group-hover:text-white transition-colors" />
            <div className="hidden group-hover:block text-left transition-all max-w-[170px] truncate">
              <p className="text-[10px] uppercase font-bold text-rose-200 leading-none">Previous</p>
              <p className="text-xs font-black truncate">{prevPage.name}</p>
            </div>
          </button>
        </div>
      )}

      {/* RIGHT SIDE: NEXT PAGE BUTTON (Hidden on last page) */}
      {hasNext && nextPage && (
        <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 group">
          <button
            onClick={() => handleNavigate(`/admin/${nextPage.id}`)}
            className="flex items-center gap-2 p-3 bg-white/95 hover:bg-rose-600 text-slate-700 hover:text-white rounded-2xl shadow-xl border border-rose-100 backdrop-blur transition-all duration-300 hover:scale-105 active:scale-95 group-hover:pl-4"
            aria-label={`Next: ${nextPage.name}`}
          >
            <div className="hidden group-hover:block text-right transition-all max-w-[170px] truncate">
              <p className="text-[10px] uppercase font-bold text-rose-200 leading-none">Next</p>
              <p className="text-xs font-black truncate">{nextPage.name}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-rose-600 group-hover:text-white transition-colors" />
          </button>
        </div>
      )}

      {/* FLOATING BOTTOM CONTROLLER */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-2 bg-white/90 hover:bg-white text-slate-700 text-xs font-bold rounded-full shadow-lg border border-rose-100 backdrop-blur transition hover:scale-105"
        >
          <LayoutGrid className="w-4 h-4 text-rose-600" />
          <span>Home Hub</span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white rounded-full shadow-xl shadow-rose-600/30 transition hover:scale-105"
        >
          <Shield className="w-4 h-4 text-rose-200" />
          <span className="text-xs font-black">
            Admin Console {currentIndex > 0 ? `(${currentIndex}/${ADMIN_PAGES.length})` : ""}
          </span>
          {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>
      </div>

      {/* DRAWER POPUP */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-40 w-96 max-h-[75vh] bg-white rounded-3xl shadow-2xl border border-rose-100 p-4 overflow-y-auto animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <p className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-rose-600" />
                Admin Web App UI Reference ({ADMIN_PAGES.length})
              </p>
              <p className="text-[11px] text-slate-500 font-medium">Hira Farm Internal Operations & Telemetry</p>
            </div>
            <span className="text-[10px] font-mono font-bold bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full">
              Ops Control
            </span>
          </div>

          <div className="mt-3 space-y-1.5">
            {ADMIN_PAGES.map((page) => {
              const isSelected = page.id === currentAdminId;
              return (
                <button
                  key={page.id}
                  onClick={() => {
                    setIsOpen(false);
                    handleNavigate(`/admin/${page.id}`);
                  }}
                  className={`w-full text-left p-3 rounded-2xl transition flex items-center justify-between group ${
                    isSelected
                      ? "bg-gradient-to-r from-amber-50 to-rose-50 border border-rose-300"
                      : "hover:bg-slate-50 border border-transparent"
                  }`}
                >
                  <div className="space-y-0.5 pr-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-extrabold text-slate-900 group-hover:text-rose-600 transition-colors">
                        {page.name}
                      </span>
                      {isSelected && <CheckCircle className="w-3.5 h-3.5 text-rose-600" />}
                    </div>
                    <p className="text-[10px] text-slate-500 line-clamp-1">{page.tagline}</p>
                  </div>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-rose-100 group-hover:text-rose-800 shrink-0">
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
