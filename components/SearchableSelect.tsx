"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { ChevronDown, Search, X, Check, Filter } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
  badge?: string;
  description?: string;
}

interface SearchableSelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: (SelectOption | string)[];
  placeholder?: string;
  modalTitle?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

export function SearchableSelect({
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option...",
  modalTitle = "Choose Selection",
  required = false,
  error,
  disabled = false,
}: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Normalize options to object format
  const normalizedOptions: SelectOption[] = useMemo(() => {
    return options.map((opt) => {
      if (typeof opt === "string") {
        return { value: opt, label: opt };
      }
      return opt;
    });
  }, [options]);

  // Current selected option label
  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Filter options based on search query
  const filteredOptions = useMemo(() => {
    if (!searchQuery.trim()) return normalizedOptions;
    const q = searchQuery.toLowerCase();
    return normalizedOptions.filter(
      (opt) =>
        opt.label.toLowerCase().includes(q) ||
        opt.value.toLowerCase().includes(q) ||
        opt.description?.toLowerCase().includes(q) ||
        opt.badge?.toLowerCase().includes(q)
    );
  }, [normalizedOptions, searchQuery]);

  // Focus search input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery("");
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs font-bold text-stone-700 mb-1">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(true)}
        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-semibold flex items-center justify-between text-left transition bg-white shadow-2xs ${
          error
            ? "border-rose-300 ring-2 ring-rose-100"
            : "border-stone-300 hover:border-amber-400 focus:border-amber-500"
        } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span className={selectedOption ? "text-stone-900 font-bold" : "text-stone-400"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className="w-4 h-4 text-stone-400 shrink-0 ml-2" />
      </button>

      {error && <p className="text-[11px] text-rose-500 font-bold mt-1">{error}</p>}

      {/* Center Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden z-10 flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/70">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <Filter className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-stone-900 leading-none">{modalTitle}</h3>
                  <p className="text-[11px] text-stone-500 mt-0.5">Search or scroll to select an option</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-xl bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-800 flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Input Box */}
            <div className="p-4 border-b border-stone-100 bg-white">
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type keyword to filter options..."
                  className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-stone-300 text-xs font-medium focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Scrollable Option List */}
            <div className="p-3 overflow-y-auto max-h-80 space-y-1.5 divide-y divide-stone-100">
              {filteredOptions.length === 0 ? (
                <div className="py-8 text-center text-xs text-stone-400 space-y-1">
                  <p className="font-bold">No matching options found</p>
                  <p className="text-[11px]">Try typing a different keyword or phrase</p>
                </div>
              ) : (
                filteredOptions.map((opt) => {
                  const isSelected = opt.value === value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        onChange(opt.value);
                        setIsOpen(false);
                      }}
                      className={`w-full px-4 py-3 rounded-2xl text-left flex items-center justify-between text-xs transition ${
                        isSelected
                          ? "bg-amber-500 text-slate-950 font-black shadow-xs"
                          : "hover:bg-amber-50 text-stone-800 hover:text-amber-950"
                      }`}
                    >
                      <div className="pr-3">
                        <div className="font-bold flex items-center gap-2">
                          <span>{opt.label}</span>
                          {opt.badge && (
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-md font-mono ${
                                isSelected
                                  ? "bg-slate-950 text-amber-300"
                                  : "bg-stone-100 text-stone-600 border border-stone-200"
                              }`}
                            >
                              {opt.badge}
                            </span>
                          )}
                        </div>
                        {opt.description && (
                          <p
                            className={`text-[11px] mt-0.5 ${
                              isSelected ? "text-slate-900 font-medium" : "text-stone-500"
                            }`}
                          >
                            {opt.description}
                          </p>
                        )}
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-slate-950 shrink-0" />}
                    </button>
                  );
                })
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-3 border-t border-stone-100 bg-stone-50 flex items-center justify-between text-[11px] text-stone-500 px-5">
              <span>{filteredOptions.length} option{filteredOptions.length === 1 ? "" : "s"} available</span>
              <span>Press ESC to exit</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
