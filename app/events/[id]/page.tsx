import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock3,
  MapPin,
  CheckCircle2,
  CalendarPlus,
} from "lucide-react";

import { events } from "@/data/events";

type EventDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EventDetailsPage({
  params,
}: EventDetailsPageProps) {
  const { id } = await params;

  const event = events.find((item) => item.id === id);

  if (!event) {
    return (
      <main className="min-h-screen bg-[#fffdf8] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Event Not Found
          </p>

          <h1 className="mt-4 text-4xl font-black text-[#0B1F3A]">
            We couldn&apos;t find this event.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            The event may have been removed or the link may be incorrect.
          </p>

          <Link
            href="/events"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            <ArrowLeft size={17} />
            Back to Events
          </Link>
        </div>
      </main>
    );
  }

  /*
   * ============================================================
   * EVENT STATUS
   * ============================================================
   *
   * The event date is the source of truth.
   *
   * Future date  → Upcoming
   * Past date    → Past
   *
   * This means you don't have to manually change the status
   * after an event has finished.
   */

  // The event date is the source of truth.
  // An event remains "upcoming" for the entire calendar day.
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const eventDate = new Date(`${event.date}T00:00:00`);

  const isUpcoming = eventDate >= today;
  const isPast = eventDate < today;

  return (
    <main className="min-h-screen overflow-x-clip bg-[#fffdf8] text-[#0B1F3A]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-[#07182f]">

        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-green-500/15 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-orange-500 via-white/40 to-green-500" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 sm:px-10 lg:px-10 lg:pb-20 lg:pt-24">

          {/* Back */}

          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Events
          </Link>

          <div className="mt-10 max-w-4xl">

            {/* STATUS */}

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-orange-500" />

              <span
                className={`text-[10px] font-bold uppercase tracking-[0.3em] ${
                  isUpcoming
                    ? "text-orange-400"
                    : "text-green-400"
                }`}
              >
                {isUpcoming ? "Upcoming Event" : "Past Event"}
              </span>

              <span className="h-px w-8 bg-green-500" />

            </div>

            {/* TITLE */}

            <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              {event.title}
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              {event.description}
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          EVENT DETAILS
      ===================================================== */}

      <section className="relative mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-10 lg:py-20">

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          {/* =================================================
              POSTER
          ================================================= */}

          <div className="self-start overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_20px_60px_rgba(11,31,58,0.12)] sm:p-4">
            <div className="relative overflow-hidden rounded-[22px] bg-[#07182f]">
              <Image
                src={event.image}
                alt={event.title}
                width={1100}
                height={1369}
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="block h-auto w-full object-contain"
              />
            </div>

            <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-orange-500">
                  Niagara Indian Association
                </p>
                <p className="mt-1 text-sm font-bold text-[#0B1F3A]">
                  Community Event
                </p>
              </div>
              <span className={`rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] ${
                isUpcoming
                  ? "bg-orange-50 text-orange-600"
                  : "bg-green-50 text-green-700"
              }`}>
                {isUpcoming ? "Upcoming" : "Completed"}
              </span>
            </div>
          </div>

          {/* =================================================
              INFORMATION
          ================================================= */}

          <div>

            {/* DATE */}

            <div
              className={`mb-8 inline-flex items-center gap-3 rounded-full border px-5 py-3 ${
                isUpcoming
                  ? "border-orange-200 bg-orange-50"
                  : "border-green-200 bg-green-50"
              }`}
            >

              {isUpcoming ? (
                <CalendarPlus
                  size={17}
                  className="text-orange-500"
                />
              ) : (
                <CheckCircle2
                  size={17}
                  className="text-green-600"
                />
              )}

              <span
                className={`text-sm font-bold ${
                  isUpcoming
                    ? "text-orange-600"
                    : "text-green-700"
                }`}
              >
                {event.dateLabel}
              </span>

            </div>

            {/* BASIC INFORMATION */}

            <div className="grid gap-4 sm:grid-cols-2">

              {/* TIME */}

              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_30px_rgba(11,31,58,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                <Clock3
                  size={20}
                  className="text-orange-500"
                />

                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Time
                </p>

                <p className="mt-1 font-bold text-[#0B1F3A]">
                  {event.time}
                </p>

              </div>

              {/* LOCATION */}

              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_30px_rgba(11,31,58,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                <MapPin
                  size={20}
                  className="text-orange-500"
                />

                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Location
                </p>

                <p className="mt-1 font-bold text-[#0B1F3A]">
                  {event.location}
                </p>

                {event.address && (
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {event.address}
                  </p>
                )}

              </div>

            </div>

            {/* =================================================
                UPCOMING EVENT MESSAGE
            ================================================= */}

            {isUpcoming && (
              <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-5">

                <p className="text-sm font-bold text-orange-700">
                  Looking forward to seeing you there!
                </p>

                <p className="mt-1 text-sm leading-6 text-orange-800/70">
                  Mark your calendar and join the Niagara Indian
                  Association community for this special event.
                </p>

              </div>
            )}

            {/* =================================================
                PAST EVENT MESSAGE
            ================================================= */}

            {isPast && (
              <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">

                <p className="text-sm font-bold text-green-700">
                  Thank you for celebrating with us.
                </p>

                <p className="mt-1 text-sm leading-6 text-green-800/70">
                  This event has concluded. Explore the event
                  details and relive the memories we shared
                  together.
                </p>

              </div>
            )}

            {/* =================================================
                ACTIVITIES
            ================================================= */}

            {event.activities &&
              event.activities.length > 0 && (
                <div className="mt-10">

                  <div className="mb-6">

                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                      Event Schedule
                    </p>

                    <h2 className="mt-2 text-3xl font-black text-[#0B1F3A]">
                      {event.activities.length === 1
                        ? "Event Activity"
                        : "What's Happening"}
                    </h2>

                  </div>

                  <div className="space-y-4">

                    {event.activities.map((activity) => (
                      <div
                        key={activity.number}
                        className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_28px_rgba(11,31,58,0.05)] transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
                      >

                        <div className="flex gap-4">

                          {/* NUMBER */}

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A] text-xs font-black text-orange-400">
                            {activity.number}
                          </div>

                          <div className="min-w-0">

                            {/* TITLE */}

                            <h3 className="text-lg font-bold text-[#0B1F3A]">
                              {activity.title}
                            </h3>

                            {/* TIME + LOCATION */}

                            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">

                              <span className="flex items-center gap-2 text-xs font-semibold text-orange-600">
                                <Clock3 size={13} />
                                {activity.time}
                              </span>

                              <span className="flex items-center gap-2 text-xs text-slate-500">
                                <MapPin size={13} />
                                {activity.location}
                              </span>

                            </div>

                            {/* ADDRESS */}

                            {activity.address && (
                              <p className="mt-2 text-xs leading-5 text-slate-500">
                                {activity.address}
                              </p>
                            )}

                            {/* DESCRIPTION */}

                            <p className="mt-3 text-sm leading-6 text-slate-500">
                              {activity.description}
                            </p>

                          </div>

                        </div>

                      </div>
                    ))}

                  </div>

                </div>
              )}

          </div>

        </div>

      </section>

      <section className="px-6 pb-16 sm:px-10 lg:pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#07182f] px-6 py-8 shadow-[0_20px_60px_rgba(11,31,58,0.16)] sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-orange-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.26em] text-orange-300">
                NIA Community
              </span>
              <span className="h-px w-7 bg-green-500" />
            </div>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              Discover more NIA events.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Stay connected with cultural celebrations, community programs and upcoming activities across Niagara.
            </p>
          </div>

          <Link
            href="/events"
            className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-400 lg:mt-0"
          >
            View All Events
            <CalendarPlus size={17} />
          </Link>
        </div>
      </section>

    </main>
  );
}
