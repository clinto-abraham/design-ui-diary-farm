"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X, Sparkles } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "warning";

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  type?: ToastType;
}

interface ToastContextType {
  toast: (options: { title: string; description?: string; type?: ToastType }) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const toast = useCallback(
    ({ title, description, type = "success" }: { title: string; description?: string; type?: ToastType }) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, title, description, type }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4500);
    },
    []
  );

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {/* ELEVATED BOTTOM TOASTER CONTAINER */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[150] flex flex-col gap-3 pointer-events-none w-full max-w-lg px-4">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto flex items-start gap-4 p-4 sm:p-5 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-2 backdrop-blur-2xl transition-all duration-300 transform animate-in fade-in slide-in-from-bottom-6 ${
              t.type === "success"
                ? "bg-white/98 border-emerald-400 text-stone-900 ring-4 ring-emerald-500/20"
                : t.type === "error"
                ? "bg-white/98 border-rose-400 text-stone-900 ring-4 ring-rose-500/20"
                : t.type === "warning"
                ? "bg-white/98 border-amber-500 text-stone-900 ring-4 ring-amber-500/20"
                : "bg-white/98 border-blue-400 text-stone-900 ring-4 ring-blue-500/20"
            }`}
          >
            {t.type === "success" && (
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shrink-0 text-white shadow-md shadow-emerald-400/40">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            )}
            {t.type === "error" && (
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-red-400 flex items-center justify-center shrink-0 text-white shadow-md shadow-rose-400/40">
                <AlertCircle className="w-6 h-6" />
              </div>
            )}
            {t.type === "warning" && (
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shrink-0 text-white shadow-md shadow-amber-400/40">
                <AlertTriangle className="w-6 h-6" />
              </div>
            )}
            {t.type === "info" && (
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-400 flex items-center justify-center shrink-0 text-white shadow-md shadow-blue-400/40">
                <Sparkles className="w-6 h-6" />
              </div>
            )}
            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded-md ${
                    t.type === "success"
                      ? "bg-emerald-100 text-emerald-800"
                      : t.type === "error"
                      ? "bg-rose-100 text-rose-800"
                      : t.type === "warning"
                      ? "bg-amber-100 text-amber-900 font-bold"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {t.type === "success"
                    ? "CONFIRMED"
                    : t.type === "error"
                    ? "ATTENTION"
                    : t.type === "warning"
                    ? "SAFETY CAUTION"
                    : "SYSTEM NOTICE"}
                </span>
              </div>
              <h5 className="text-sm font-black text-stone-950 mt-1 leading-snug">{t.title}</h5>
              {t.description && (
                <p className="text-xs text-stone-600 mt-1 leading-relaxed font-medium">{t.description}</p>
              )}
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="text-stone-400 hover:text-stone-700 p-1 rounded-xl hover:bg-stone-100 transition shrink-0"
              aria-label="Close Notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
