import Link from "next/link";
import { LockKeyhole, ArrowRight } from "lucide-react";

type PermissionDeniedStateProps = {
  title?: string;
  description?: string;
};

export default function PermissionDeniedState({
  title = "Access restricted",
  description = "You don't have permission to view this content.",
}: PermissionDeniedStateProps) {
  return (
    <div className="flex min-h-[420px] items-center justify-center px-6 py-16">
      <div className="mx-auto max-w-md text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B1F3A]/10">
          <LockKeyhole
            size={28}
            className="text-[#0B1F3A]"
          />
        </div>

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">
          Restricted
        </p>

        <h2 className="mt-3 text-2xl font-black text-[#0B1F3A] sm:text-3xl">
          {title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-500">
          {description}
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#132e50]"
        >
          Back to Home
          <ArrowRight size={16} />
        </Link>

      </div>
    </div>
  );
}