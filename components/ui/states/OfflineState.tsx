"use client";

import { WifiOff, RefreshCw } from "lucide-react";

export default function OfflineState() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div
      className="flex min-h-[420px] items-center justify-center px-6 py-16"
      role="alert"
    >
      <div className="mx-auto max-w-md text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-500/10">
          <WifiOff size={28} className="text-slate-500" />
        </div>

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
          Connection Lost
        </p>

        <h2 className="mt-3 text-2xl font-black text-[#0B1F3A] sm:text-3xl">
          You&apos;re offline
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-500">
          It looks like your internet connection is unavailable.
          Check your connection and try again.
        </p>

        <button
          type="button"
          onClick={handleRetry}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
        >
          <RefreshCw size={16} />
          Try Again
        </button>

      </div>
    </div>
  );
}