import React from 'react';
import InteractiveCompoundingTree from '@/components/InteractiveCompoundingTree';

export const metadata = {
  title: 'Interactive 120-Month Compounding Tree | Design UI',
  description: 'Lineage generation breakdown and compounding tree design component',
};

export default function CompoundingTreeDesignPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold flex items-center justify-between">
          <span>📦 Stored Component Archive: <strong>Interactive Generation Tree (120-Month Compounding Tree)</strong></span>
          <span className="font-mono text-[10px] bg-white px-2 py-0.5 rounded border border-amber-300">Design UI Repository</span>
        </div>
        <InteractiveCompoundingTree />
      </div>
    </div>
  );
}
