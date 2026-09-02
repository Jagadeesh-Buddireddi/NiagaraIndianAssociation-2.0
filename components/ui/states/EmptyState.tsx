export default function EmptyState() {
  return (
    <div className="flex min-h-[300px] items-center justify-center px-6 py-12">
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">
          <span className="text-2xl">📭</span>
        </div>

        <h2 className="mt-5 text-2xl font-black text-[#0B1F3A]">
          Nothing here yet
        </h2>

        <p className="mt-3 text-sm text-slate-500">
          There is no content available at the moment.
        </p>
      </div>
    </div>
  );
}