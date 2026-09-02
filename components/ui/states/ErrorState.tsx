"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

type ErrorStateProps = {
  title?: string;
  description?: string;
  onRetry?: () => void;
};

export default function ErrorState({
  title = "Something went wrong",
  description = "We couldn't load this information right now. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      className="flex min-h-[420px] items-center justify-center px-6 py-16"
      role="alert"
    >
      <div className="mx-auto max-w-md text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
          <AlertTriangle
            size={28}
            className="text-red-500"
          />
        </div>

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-red-500">
          Error
        </p>

        <h2 className="mt-3 text-2xl font-black text-[#0B1F3A]">
          {title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-500">
          {description}
        </p>

        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#132e50]"
          >
            <RefreshCw size={16} />
            Try Again
          </button>
        )}

      </div>
    </div>
  );
}