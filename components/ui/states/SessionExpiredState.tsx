"use client";

import { Clock3, RefreshCw } from "lucide-react";

type SessionExpiredStateProps = {
  onContinue?: () => void;
};

export default function SessionExpiredState({
  onContinue,
}: SessionExpiredStateProps) {
  return (
    <div className="flex min-h-[420px] items-center justify-center px-6 py-16">
      <div className="mx-auto max-w-md text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10">
          <Clock3 size={28} className="text-orange-500" />
        </div>

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">
          Session
        </p>

        <h2 className="mt-3 text-2xl font-black text-[#0B1F3A] sm:text-3xl">
          Your session has expired
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-500">
          For your security, your session has ended. Please continue
          to start a new session.
        </p>

        {onContinue && (
          <button
            type="button"
            onClick={onContinue}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            <RefreshCw size={16} />
            Continue
          </button>
        )}

      </div>
    </div>
  );
}