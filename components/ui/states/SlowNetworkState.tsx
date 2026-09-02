import { Gauge } from "lucide-react";

type SlowNetworkStateProps = {
  title?: string;
  description?: string;
};

export default function SlowNetworkState({
  title = "Slow connection detected",
  description = "Your connection seems slower than usual. We're still working on loading your content.",
}: SlowNetworkStateProps) {
  return (
    <div className="flex min-h-[360px] items-center justify-center px-6 py-14">
      <div className="mx-auto max-w-md text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10">
          <Gauge size={28} className="text-orange-500" />
        </div>

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">
          Network
        </p>

        <h2 className="mt-3 text-2xl font-black text-[#0B1F3A]">
          {title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-500">
          {description}
        </p>

        <div className="mx-auto mt-6 h-1.5 max-w-[180px] overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-orange-500" />
        </div>

      </div>
    </div>
  );
}