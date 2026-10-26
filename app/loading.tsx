export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 sm:p-10 space-y-8 animate-pulse">
      {/* Skeleton Header */}
      <div className="max-w-6xl mx-auto flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-800" />
          <div className="space-y-1.5">
            <div className="w-32 h-4 bg-slate-800 rounded" />
            <div className="w-20 h-2.5 bg-slate-800 rounded" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-24 h-8 bg-slate-800 rounded-lg hidden sm:block" />
          <div className="w-32 h-8 bg-slate-700 rounded-lg" />
        </div>
      </div>

      {/* Skeleton Hero Banner */}
      <div className="max-w-6xl mx-auto rounded-3xl border border-slate-800 bg-slate-900/50 p-8 sm:p-12 space-y-6">
        <div className="w-40 h-6 bg-slate-800 rounded-full" />
        <div className="w-3/4 h-12 bg-slate-800 rounded-xl" />
        <div className="w-1/2 h-6 bg-slate-800/80 rounded" />
        <div className="w-2/3 h-4 bg-slate-800/60 rounded" />

        {/* Metric Cards Skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="w-16 h-3 bg-slate-800 rounded" />
            <div className="w-24 h-7 bg-slate-700 rounded" />
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="w-16 h-3 bg-slate-800 rounded" />
            <div className="w-24 h-7 bg-slate-700 rounded" />
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="w-16 h-3 bg-slate-800 rounded" />
            <div className="w-24 h-7 bg-slate-700 rounded" />
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="w-16 h-3 bg-slate-800 rounded" />
            <div className="w-24 h-7 bg-slate-700 rounded" />
          </div>
        </div>
      </div>

      {/* Skeleton Chart Container */}
      <div className="max-w-6xl mx-auto rounded-3xl border border-slate-800 bg-slate-900/40 p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div className="w-48 h-5 bg-slate-800 rounded" />
          <div className="flex gap-2">
            <div className="w-12 h-6 bg-slate-800 rounded" />
            <div className="w-12 h-6 bg-slate-800 rounded" />
            <div className="w-12 h-6 bg-slate-800 rounded" />
          </div>
        </div>

        {/* Chart Bars Skeleton */}
        <div className="h-48 sm:h-64 flex items-end justify-between gap-3 pt-8 pb-4">
          {[20, 28, 36, 45, 52, 60, 72, 85, 92, 100].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className="flex-1 max-w-[42px] bg-slate-800/80 rounded-t"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
