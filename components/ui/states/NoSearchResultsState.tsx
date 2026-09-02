"use client";

import { Search, X } from "lucide-react";

type NoSearchResultsStateProps = {
  searchTerm?: string;
  onClear?: () => void;
};

export default function NoSearchResultsState({
  searchTerm = "",
  onClear,
}: NoSearchResultsStateProps) {
  return (
    <div className="flex min-h-[380px] items-center justify-center px-6 py-14">
      <div className="mx-auto max-w-md text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B1F3A]/5">
          <Search size={28} className="text-[#0B1F3A]" />
        </div>

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">
          Search
        </p>

        <h2 className="mt-3 text-2xl font-black text-[#0B1F3A]">
          No results found
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-500">
          {searchTerm
            ? `We couldn't find anything matching "${searchTerm}".`
            : "We couldn't find anything matching your search."}
        </p>

        {onClear && (
          <button
            type="button"
            onClick={onClear}
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#0B1F3A] shadow-sm transition hover:bg-slate-50"
          >
            <X size={16} />
            Clear Search
          </button>
        )}

      </div>
    </div>
  );
}