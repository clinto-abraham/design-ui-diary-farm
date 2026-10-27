"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Activity,
  Server,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RefreshCw,
  Cpu,
  Database,
  Smartphone,
  Globe,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Terminal,
  Layers,
  ArrowUpRight,
  Sliders,
  Code2,
  Sparkles,
  Radio,
  ArrowRight,
  Lock,
  Play,
  RotateCcw,
} from "lucide-react";

interface AppStatusItem {
  date: string;
  time: string;
  status: string;
  endpoint?: string;
  latency_ms?: number;
  uptime_percent?: number;
}

interface SystemStatusData {
  marketplace_web_app: AppStatusItem;
  marketplace_mobile_app: AppStatusItem;
  admin_web_app: AppStatusItem;
  admin_mobile_app: AppStatusItem;
  backend_node_app: AppStatusItem;
  cron_node_app: AppStatusItem;
  updated_at?: string;
}

interface FailedLogItem {
  _id: string;
  app_name: string;
  target_url: string;
  error_message: string;
  status_code: number | null;
  date: string;
  time: string;
  timestamp: string;
  severity: "CRITICAL" | "WARNING" | "INFO";
}

const INITIAL_SYSTEM_DATA: SystemStatusData = {
  marketplace_web_app: {
    date: "27th October 2026",
    time: "1:27 PM",
    status: "active",
    endpoint: "https://marketplace.hirafarm.ciyo.in",
    latency_ms: 28,
    uptime_percent: 99.98,
  },
  marketplace_mobile_app: {
    date: "Not Applicable",
    time: "Not Applicable",
    status: "Not Applicable",
    endpoint: "AWS Device Farm Track",
    latency_ms: 0,
    uptime_percent: 100.0,
  },
  admin_web_app: {
    date: "27th October 2026",
    time: "1:27 PM",
    status: "active",
    endpoint: "https://admin.hirafarm.ciyo.in",
    latency_ms: 22,
    uptime_percent: 99.99,
  },
  admin_mobile_app: {
    date: "Not Applicable",
    time: "Not Applicable",
    status: "Not Applicable",
    endpoint: "Baramati Barn PWA Target",
    latency_ms: 0,
    uptime_percent: 100.0,
  },
  backend_node_app: {
    date: "27th October 2026",
    time: "1:27 PM",
    status: "active",
    endpoint: "https://backend-hirafarm.ciyo.in/api/health",
    latency_ms: 41,
    uptime_percent: 99.95,
  },
  cron_node_app: {
    date: "27th October 2026",
    time: "1:27 PM",
    status: "cron running",
    endpoint: "AWS Lambda (cron(0 * * * ? *))",
    latency_ms: 120,
    uptime_percent: 100.0,
  },
};

export default function DeveloperConsolePage1() {
  const [systemData, setSystemData] = useState<SystemStatusData>(INITIAL_SYSTEM_DATA);
  const [isRunningDiagnostic, setIsRunningDiagnostic] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const [activeFilterApp, setActiveFilterApp] = useState<string>("ALL");
  const [simulatedLogs, setSimulatedLogs] = useState<FailedLogItem[]>([]);
  const [showToast, setShowToast] = useState<{ show: boolean; msg: string; type: "success" | "info" | "warning" }>({
    show: false,
    msg: "",
    type: "info",
  });

  const triggerToast = (msg: string, type: "success" | "info" | "warning" = "success") => {
    setShowToast({ show: true, msg, type });
    setTimeout(() => {
      setShowToast({ show: false, msg: "", type: "info" });
    }, 3500);
  };

  const handleRunDiagnostic = async () => {
    setIsRunningDiagnostic(true);
    triggerToast("Initiating live diagnostic probe across 6 endpoints...", "info");

    await new Promise((r) => setTimeout(r, 1200));

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true });

    setSystemData((prev) => ({
      ...prev,
      marketplace_web_app: {
        ...prev.marketplace_web_app,
        time: timeStr,
        latency_ms: Math.floor(Math.random() * 15) + 22,
      },
      admin_web_app: {
        ...prev.admin_web_app,
        time: timeStr,
        latency_ms: Math.floor(Math.random() * 12) + 18,
      },
      backend_node_app: {
        ...prev.backend_node_app,
        time: timeStr,
        latency_ms: Math.floor(Math.random() * 20) + 32,
      },
      cron_node_app: {
        ...prev.cron_node_app,
        time: timeStr,
      },
    }));

    setIsRunningDiagnostic(false);
    triggerToast("Diagnostic passed! All 6 core services responsive. MongoDB system_status updated.", "success");
  };

  const handleCopyJson = () => {
    const payload = {
      marketplace_web_app: systemData.marketplace_web_app,
      marketplace_mobile_app: systemData.marketplace_mobile_app,
      admin_web_app: systemData.admin_web_app,
      admin_mobile_app: systemData.admin_mobile_app,
      backend_node_app: systemData.backend_node_app,
      cron_node_app: systemData.cron_node_app,
    };
    navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
    setCopiedJson(true);
    triggerToast("MongoDB payload JSON copied to clipboard!", "success");
    setTimeout(() => setCopiedJson(false), 2500);
  };

  const appCards = [
    {
      key: "marketplace_web_app",
      title: "Marketplace Web App",
      category: "Client Facing Next.js Web",
      icon: Globe,
      color: "emerald",
      gradient: "from-emerald-500 to-teal-600",
      bgLight: "bg-emerald-50/80",
      borderLight: "border-emerald-200",
      textColor: "text-emerald-700",
      data: systemData.marketplace_web_app,
      defaultUrl: "https://marketplace.hirafarm.ciyo.in",
      actionText: "Open Marketplace",
      actionUrl: "https://marketplace.hirafarm.ciyo.in",
    },
    {
      key: "marketplace_mobile_app",
      title: "Marketplace Mobile App",
      category: "Android & iOS Mobile",
      icon: Smartphone,
      color: "slate",
      gradient: "from-slate-400 to-slate-600",
      bgLight: "bg-slate-50",
      borderLight: "border-slate-200",
      textColor: "text-slate-600",
      data: systemData.marketplace_mobile_app,
      defaultUrl: "Scheduled Release Track",
      actionText: "App Store Staging",
      actionUrl: "#",
    },
    {
      key: "admin_web_app",
      title: "Admin Web App",
      category: "Governance & Operator Console",
      icon: Server,
      color: "indigo",
      gradient: "from-indigo-600 to-sky-600",
      bgLight: "bg-indigo-50/80",
      borderLight: "border-indigo-200",
      textColor: "text-indigo-700",
      data: systemData.admin_web_app,
      defaultUrl: "https://admin.hirafarm.ciyo.in",
      actionText: "Navigate to Admin Web App",
      actionUrl: "https://admin.hirafarm.ciyo.in",
      isPrimaryAction: true,
    },
    {
      key: "admin_mobile_app",
      title: "Admin Mobile App",
      category: "Farm Operator Mobile App",
      icon: Smartphone,
      color: "slate",
      gradient: "from-slate-400 to-slate-600",
      bgLight: "bg-slate-50",
      borderLight: "border-slate-200",
      textColor: "text-slate-600",
      data: systemData.admin_mobile_app,
      defaultUrl: "Baramati Barn Supervisor PWA",
      actionText: "Barn APK Staging",
      actionUrl: "#",
    },
    {
      key: "backend_node_app",
      title: "Backend Node API",
      category: "Unified Express REST Core",
      icon: Database,
      color: "sky",
      gradient: "from-sky-500 to-blue-600",
      bgLight: "bg-sky-50/80",
      borderLight: "border-sky-200",
      textColor: "text-sky-700",
      data: systemData.backend_node_app,
      defaultUrl: "https://backend-hirafarm.ciyo.in/api/health",
      actionText: "Inspect Swagger API",
      actionUrl: "https://backend-hirafarm.ciyo.in/api/docs",
    },
    {
      key: "cron_node_app",
      title: "Cron Node App (Lambda)",
      category: "Hourly EventBridge Scheduler",
      icon: Clock,
      color: "amber",
      gradient: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50/80",
      borderLight: "border-amber-200",
      textColor: "text-amber-700",
      data: systemData.cron_node_app,
      defaultUrl: "cron(0 * * * ? *) — AWS EventBridge",
      actionText: "View Lambda Metrics",
      actionUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/40 via-white to-emerald-50/30 text-slate-900 font-sans pb-24 selection:bg-indigo-100 selection:text-indigo-900">
      {/* FLOATING TOAST NOTIFICATION */}
      {showToast.show && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300">
          <div
            className={`px-5 py-3.5 rounded-2xl shadow-2xl border flex items-center gap-3 backdrop-blur-md ${
              showToast.type === "success"
                ? "bg-emerald-600 text-white border-emerald-400 shadow-emerald-600/30"
                : showToast.type === "warning"
                ? "bg-amber-500 text-slate-950 border-amber-300 shadow-amber-500/30"
                : "bg-indigo-600 text-white border-indigo-400 shadow-indigo-600/30"
            }`}
          >
            {showToast.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 shrink-0" />
            ) : showToast.type === "warning" ? (
              <AlertTriangle className="w-5 h-5 shrink-0" />
            ) : (
              <Zap className="w-5 h-5 shrink-0" />
            )}
            <span className="text-xs font-bold font-mono tracking-wide">{showToast.msg}</span>
          </div>
        </div>
      )}

      {/* TOP NAVIGATION BREADCRUMB & ACTION BAR */}
      <header className="border-b border-indigo-100 bg-white/85 backdrop-blur-md sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-2 sm:py-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link
              href="/"
              className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-sky-600 text-white flex items-center justify-center font-black shadow-md shadow-indigo-500/20 hover:scale-105 transition-transform"
              title="Return to Master Design Hub"
            >
              <Terminal className="w-5 h-5" />
            </Link>

            <div>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold tracking-wider">
                <Link href="/" className="text-slate-500 hover:text-indigo-600 transition">
                  HOME
                </Link>
                <span className="text-slate-300">/</span>
                <span className="text-slate-500">DEVELOPER CONSOLE</span>
                <span className="text-slate-300">/</span>
                <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">
                  PAGE-1 &bull; INFRASTRUCTURE WORKING STATUS
                </span>
              </div>
              <p className="text-xs font-extrabold text-slate-900 mt-0.5">
                Full Ecosystem Telemetry & AWS Lambda Heartbeat
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Direct Navigation to Admin Web App */}
            <a
              href="https://admin.hirafarm.ciyo.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white text-xs font-black shadow-md shadow-indigo-600/20 active:scale-95 transition-all"
            >
              <Server className="w-3.5 h-3.5" />
              <span>Navigate to Admin Web App</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Run Live Diagnostic Button */}
            <button
              onClick={handleRunDiagnostic}
              disabled={isRunningDiagnostic}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black shadow-md transition-all active:scale-95 ${
                isRunningDiagnostic
                  ? "bg-emerald-100 text-emerald-800 border border-emerald-300 cursor-not-allowed"
                  : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/25"
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRunningDiagnostic ? "animate-spin text-emerald-800" : ""}`} />
              <span>{isRunningDiagnostic ? "Running Live Diagnostic..." : "Run Live Diagnostic Now"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 space-y-8">
        {/* HERO VIBRANT HEADER CARD */}
        <section className="rounded-3xl bg-white border-2 border-indigo-100/80 p-6 sm:p-8 shadow-xl shadow-indigo-500/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-sky-400/15 via-indigo-300/10 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-400/15 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-emerald-50 border border-indigo-200 text-indigo-900 text-xs font-mono font-bold tracking-wide shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>HOURLY AWS LAMBDA CRON &bull; SCHEDULED TELEMETRY</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Infrastructure Working Status
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Automated hourly health checks executed from the Lambda perspective. Verified and persisted directly into
                MongoDB collection <code className="bg-indigo-50 border border-indigo-200 text-indigo-800 px-2 py-0.5 rounded-md text-xs font-mono font-bold">system_status</code> on the
                same keys every hour. Failure incidents are isolated into <code className="bg-rose-50 border border-rose-200 text-rose-800 px-2 py-0.5 rounded-md text-xs font-mono font-bold">system_failed_logs</code>.
              </p>
            </div>

            {/* Telemetry Metric Cards */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 min-w-[240px]">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-sky-500/10 border border-indigo-200/80 shadow-xs space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-indigo-800 font-bold">
                  <span>LAST TELEMETRY UPDATE</span>
                  <Activity className="w-4 h-4 text-emerald-600 animate-pulse" />
                </div>
                <div className="text-base font-black text-slate-900 font-mono">
                  {systemData.cron_node_app.date}
                </div>
                <div className="text-xs font-bold text-emerald-700 font-mono flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{systemData.cron_node_app.time} (Hourly Sync)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-900 font-bold">Ecosystem Health:</span>
                <span className="font-black text-emerald-700 bg-white px-2.5 py-0.5 rounded-md border border-emerald-300 shadow-xs">
                  100% OPERATIONAL
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 6-APPLICATION STATUS GRID */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-indigo-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-500 text-white flex items-center justify-center font-black shadow-xs">
                <Layers className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Full Ecosystem Runtime Status
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-900 font-bold border border-indigo-200">
                6 Core Services Monitored
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold border border-emerald-200 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> 4 Active Services
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {appCards.map((app) => {
              const statusVal = (app.data?.status || "active").toLowerCase();
              const isNA = statusVal === "not applicable";
              const isActive = statusVal === "active" || statusVal === "cron running";
              const isInactive = !isNA && !isActive;

              return (
                <div
                  key={app.key}
                  className={`rounded-2xl border-2 p-5 bg-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 flex flex-col justify-between ${
                    isActive
                      ? "border-emerald-200/90 hover:border-emerald-400 ring-1 ring-emerald-500/10"
                      : isNA
                      ? "border-slate-200/80 bg-slate-50/40"
                      : "border-rose-300 bg-rose-50/20"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${app.gradient} text-white flex items-center justify-center shadow-md shrink-0`}
                        >
                          <app.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-extrabold text-base text-slate-900 leading-snug">
                            {app.title}
                          </h3>
                          <span className="text-xs text-slate-500 font-medium block">
                            {app.category}
                          </span>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-black uppercase tracking-wider border shrink-0 ${
                          isActive
                            ? "bg-emerald-50 text-emerald-800 border-emerald-300 ring-2 ring-emerald-500/20"
                            : isNA
                            ? "bg-slate-100 text-slate-600 border-slate-300"
                            : "bg-rose-50 text-rose-800 border-rose-300"
                        }`}
                      >
                        {isActive && <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />}
                        <span>{app.data?.status || "active"}</span>
                      </span>
                    </div>

                    {/* Telemetry Metrics Container */}
                    <div className="rounded-xl p-3.5 bg-slate-50/80 border border-slate-200/80 space-y-2 font-mono text-xs">
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="font-bold text-slate-400">DATE:</span>
                        <span className="font-bold text-slate-900">{app.data?.date}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="font-bold text-slate-400">TIME:</span>
                        <span className="font-black text-indigo-700">{app.data?.time}</span>
                      </div>
                      <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                        <span className="font-bold text-slate-400">STATUS:</span>
                        <span
                          className={`font-black ${
                            isActive ? "text-emerald-700" : isNA ? "text-slate-500" : "text-rose-700"
                          }`}
                        >
                          {app.data?.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Target Endpoint Info & Action Button */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span className="truncate max-w-[200px]" title={app.data?.endpoint || app.defaultUrl}>
                        {app.data?.endpoint || app.defaultUrl}
                      </span>
                      {app.data?.latency_ms ? (
                        <span className="text-emerald-700 font-black bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300 shrink-0">
                          {app.data.latency_ms} ms
                        </span>
                      ) : (
                        <span className="text-slate-400 shrink-0 font-medium">Managed</span>
                      )}
                    </div>

                    {/* One-click Action Link */}
                    {app.actionUrl && app.actionUrl !== "#" && (
                      <a
                        href={app.actionUrl}
                        target={app.actionUrl.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                          app.isPrimaryAction
                            ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm shadow-indigo-600/30"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200"
                        }`}
                      >
                        <span>{app.actionText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* LIVE MONGODB `system_status` TELEMETRY PAYLOAD VIEWER */}
        <section className="bg-white border-2 border-indigo-100/90 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl shadow-indigo-500/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  <Terminal className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-black text-slate-900 tracking-tight">
                  MongoDB Target Collection (<code className="text-indigo-700 font-mono">system_status</code>) Live Payload
                </h2>
              </div>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Exact JSON document shape persisted and updated on the same keys during every hourly Lambda run.
              </p>
            </div>

            <button
              onClick={handleCopyJson}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold shadow-md transition-all active:scale-95 self-start sm:self-auto shrink-0"
            >
              {copiedJson ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Object JSON</span>
                </>
              )}
            </button>
          </div>

          {/* Vibrant Code Viewer Canvas */}
          <div className="bg-slate-950 rounded-2xl p-5 border-2 border-slate-800 font-mono text-xs overflow-x-auto max-h-80 shadow-inner">
            <pre className="text-emerald-400 leading-relaxed">
              <code>
                {`{
  `}<span className="text-indigo-400">&quot;marketplace_web_app&quot;</span>{`: {
    `}<span className="text-sky-300">&quot;date&quot;</span>{`: `}<span className="text-amber-300">&quot;${systemData.marketplace_web_app.date}&quot;</span>{`,
    `}<span className="text-sky-300">&quot;time&quot;</span>{`: `}<span className="text-amber-300">&quot;${systemData.marketplace_web_app.time}&quot;</span>{`,
    `}<span className="text-sky-300">&quot;status&quot;</span>{`: `}<span className="text-emerald-400">&quot;${systemData.marketplace_web_app.status}&quot;</span>{`,
    `}<span className="text-sky-300">&quot;endpoint&quot;</span>{`: `}<span className="text-amber-300">&quot;${systemData.marketplace_web_app.endpoint}&quot;</span>{`,
    `}<span className="text-sky-300">&quot;latency_ms&quot;</span>{`: `}<span className="text-orange-400 font-bold">{systemData.marketplace_web_app.latency_ms}</span>{`
  },
  `}<span className="text-indigo-400">&quot;marketplace_mobile_app&quot;</span>{`: {
    `}<span className="text-sky-300">&quot;date&quot;</span>{`: `}<span className="text-slate-400">&quot;Not Applicable&quot;</span>{`,
    `}<span className="text-sky-300">&quot;time&quot;</span>{`: `}<span className="text-slate-400">&quot;Not Applicable&quot;</span>{`,
    `}<span className="text-sky-300">&quot;status&quot;</span>{`: `}<span className="text-slate-400">&quot;Not Applicable&quot;</span>{`,
    `}<span className="text-sky-300">&quot;endpoint&quot;</span>{`: `}<span className="text-slate-400">&quot;&quot;</span>{`,
    `}<span className="text-sky-300">&quot;latency_ms&quot;</span>{`: `}<span className="text-orange-400 font-bold">0</span>{`
  },
  `}<span className="text-indigo-400">&quot;admin_web_app&quot;</span>{`: {
    `}<span className="text-sky-300">&quot;date&quot;</span>{`: `}<span className="text-amber-300">&quot;${systemData.admin_web_app.date}&quot;</span>{`,
    `}<span className="text-sky-300">&quot;time&quot;</span>{`: `}<span className="text-amber-300">&quot;${systemData.admin_web_app.time}&quot;</span>{`,
    `}<span className="text-sky-300">&quot;status&quot;</span>{`: `}<span className="text-emerald-400">&quot;${systemData.admin_web_app.status}&quot;</span>{`,
    `}<span className="text-sky-300">&quot;endpoint&quot;</span>{`: `}<span className="text-amber-300">&quot;${systemData.admin_web_app.endpoint}&quot;</span>{`,
    `}<span className="text-sky-300">&quot;latency_ms&quot;</span>{`: `}<span className="text-orange-400 font-bold">{systemData.admin_web_app.latency_ms}</span>{`
  },
  `}<span className="text-indigo-400">&quot;admin_mobile_app&quot;</span>{`: {
    `}<span className="text-sky-300">&quot;date&quot;</span>{`: `}<span className="text-slate-400">&quot;Not Applicable&quot;</span>{`,
    `}<span className="text-sky-300">&quot;time&quot;</span>{`: `}<span className="text-slate-400">&quot;Not Applicable&quot;</span>{`,
    `}<span className="text-sky-300">&quot;status&quot;</span>{`: `}<span className="text-slate-400">&quot;Not Applicable&quot;</span>{`,
    `}<span className="text-sky-300">&quot;endpoint&quot;</span>{`: `}<span className="text-slate-400">&quot;&quot;</span>{`,
    `}<span className="text-sky-300">&quot;latency_ms&quot;</span>{`: `}<span className="text-orange-400 font-bold">0</span>{`
  },
  `}<span className="text-indigo-400">&quot;backend_node_app&quot;</span>{`: {
    `}<span className="text-sky-300">&quot;date&quot;</span>{`: `}<span className="text-amber-300">&quot;${systemData.backend_node_app.date}&quot;</span>{`,
    `}<span className="text-sky-300">&quot;time&quot;</span>{`: `}<span className="text-amber-300">&quot;${systemData.backend_node_app.time}&quot;</span>{`,
    `}<span className="text-sky-300">&quot;status&quot;</span>{`: `}<span className="text-emerald-400">&quot;${systemData.backend_node_app.status}&quot;</span>{`,
    `}<span className="text-sky-300">&quot;endpoint&quot;</span>{`: `}<span className="text-amber-300">&quot;${systemData.backend_node_app.endpoint}&quot;</span>{`,
    `}<span className="text-sky-300">&quot;latency_ms&quot;</span>{`: `}<span className="text-orange-400 font-bold">{systemData.backend_node_app.latency_ms}</span>{`
  },
  `}<span className="text-indigo-400">&quot;cron_node_app&quot;</span>{`: {
    `}<span className="text-sky-300">&quot;date&quot;</span>{`: `}<span className="text-amber-300">&quot;${systemData.cron_node_app.date}&quot;</span>{`,
    `}<span className="text-sky-300">&quot;time&quot;</span>{`: `}<span className="text-amber-300">&quot;${systemData.cron_node_app.time}&quot;</span>{`,
    `}<span className="text-sky-300">&quot;status&quot;</span>{`: `}<span className="text-emerald-400">&quot;${systemData.cron_node_app.status}&quot;</span>{`,
    `}<span className="text-sky-300">&quot;endpoint&quot;</span>{`: `}<span className="text-amber-300">&quot;${systemData.cron_node_app.endpoint}&quot;</span>{`,
    `}<span className="text-sky-300">&quot;latency_ms&quot;</span>{`: `}<span className="text-orange-400 font-bold">{systemData.cron_node_app.latency_ms}</span>{`
  }
}`}
              </code>
            </pre>
          </div>
        </section>

        {/* APPLICATION INCIDENT & FAILURE LOGS (`system_failed_logs`) */}
        <section className="bg-white border-2 border-indigo-100/90 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl shadow-indigo-500/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5 text-rose-600" />
                </div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  Application Incident &amp; Failure Logs (<code className="text-rose-700 font-mono">system_failed_logs</code>)
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                Any running application failing to respond during hourly Lambda checks or live probes is logged below with pagination.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
              {["ALL", "marketplace_web_app", "admin_web_app", "backend_node_app"].map((filterKey) => (
                <button
                  key={filterKey}
                  onClick={() => setActiveFilterApp(filterKey)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    activeFilterApp === filterKey
                      ? "bg-slate-900 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  {filterKey === "ALL" ? "All Incidents (0)" : filterKey}
                </button>
              ))}
            </div>
          </div>

          {/* Zero Incidents Verified Display (Bright Vibrant Celebration) */}
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-emerald-50/60 to-white border-2 border-dashed border-emerald-200 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-600/10 ring-8 ring-emerald-50">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 animate-pulse" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-black text-slate-900 tracking-tight">
                Zero Incidents Recorded
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                All configured applications responded smoothly during recent checks. 100% telemetry availability maintained across all production clusters.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
                Uptime: 99.98%
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 font-bold border border-indigo-300">
                Probe Frequency: 60 mins
              </span>
            </div>
          </div>

          {/* Table Footer with Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-500 font-mono">
            <span>Showing page 1 of 1 (0 total incidents recorded)</span>

            <div className="flex items-center gap-2">
              <button
                disabled
                className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-400 font-bold cursor-not-allowed bg-slate-50"
              >
                &larr; Previous
              </button>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 text-white font-bold">1</span>
              <button
                disabled
                className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-400 font-bold cursor-not-allowed bg-slate-50"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </section>

        {/* BOTTOM QUICK LAUNCHER: NAVIGATE TO ADMIN WEB APP */}
        <section className="rounded-3xl bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 p-8 sm:p-10 text-white shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-white/20 text-white px-3 py-1 rounded-full">
              PRODUCTION ACCESS BRIDGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Ready to Navigate to the Admin Web App?
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
              Launch into the full HIRA Farm Governance &amp; Operator Console to manage livestock records, dairy collections, artificial insemination cycles, and animal asset owner insurance claims.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://admin.hirafarm.ciyo.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-white text-indigo-900 hover:bg-indigo-50 font-black text-xs sm:text-sm shadow-xl flex items-center gap-2 transition hover:scale-105 active:scale-95"
            >
              <span>Launch Admin Web App</span>
              <ArrowUpRight className="w-4 h-4 text-indigo-700" />
            </a>

            <Link
              href="/"
              className="px-5 py-3.5 rounded-2xl bg-black/25 hover:bg-black/35 text-white font-bold text-xs sm:text-sm border border-white/20 transition"
            >
              Back to Design Hub &rarr;
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
