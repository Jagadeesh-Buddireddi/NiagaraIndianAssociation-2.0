import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

type SuccessStateProps = {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
};

export default function SuccessState({
  title = "Success!",
  description = "Your request has been completed successfully.",
  actionLabel = "Back to Home",
  actionHref = "/",
}: SuccessStateProps) {
  return (
    <div className="flex min-h-[420px] items-center justify-center px-6 py-16">
      <div className="mx-auto max-w-md text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">
          <CheckCircle2
            size={30}
            className="text-green-600"
          />
        </div>

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-green-600">
          Completed
        </p>

        <h2 className="mt-3 text-2xl font-black text-[#0B1F3A] sm:text-3xl">
          {title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-500">
          {description}
        </p>

        {actionLabel && actionHref && (
          <Link
            href={actionHref}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#132e50]"
          >
            {actionLabel}
            <ArrowRight size={16} />
          </Link>
        )}

      </div>
    </div>
  );
}