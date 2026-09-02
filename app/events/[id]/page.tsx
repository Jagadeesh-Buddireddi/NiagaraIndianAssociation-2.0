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
    <main className="min-h-screen bg-[#fffdf8]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0B1F3A]">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border-[35px] border-orange-500" />

          <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full border-[40px] border-green-600" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">

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

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          {/* =================================================
              POSTER
          ================================================= */}

          <div className="relative min-h-[500px] overflow-hidden rounded-[28px] bg-white shadow-xl ring-1 ring-slate-200">

            <Image
              src={event.image}
              alt={event.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain"
            />

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

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

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

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

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
                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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

    </main>
  );
}
