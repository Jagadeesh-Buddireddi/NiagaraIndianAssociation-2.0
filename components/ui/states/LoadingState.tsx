import { LoaderCircle } from "lucide-react";

type LoadingStateProps = {
  title?: string;
  description?: string;
};

export default function LoadingState({
  title = "Loading...",
  description = "Please wait while we prepare everything for you.",
}: LoadingStateProps) {
  return (
    <div
      className="flex min-h-[420px] items-center justify-center px-6 py-16"
      role="status"
      aria-live="polite"
    >
      <div className="mx-auto max-w-md text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B1F3A]/5">
          <LoaderCircle
            size={30}
            className="animate-spin text-[#0B1F3A]"
          />
        </div>

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">
          Please Wait
        </p>

        <h2 className="mt-3 text-2xl font-black text-[#0B1F3A]">
          {title}
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-500">
          {description}
        </p>

      </div>
    </div>
  );
}